"use client"

import * as React from "react"
import { javascript } from "@codemirror/lang-javascript"
import type { EditorState } from "@codemirror/state"
import type { ViewUpdate } from "@codemirror/view"
import {
  Orama,
  create,
  insert,
  insertMultiple,
  remove,
  search,
} from "@orama/orama"
import { tokenizer as defaultTokenizer } from "@orama/orama/components"
import { stemmer } from "@orama/orama/stemmers/en"
import {
  afterInsert as highlightAfterInsert,
  searchWithHighlight,
} from "@orama/plugin-match-highlight"
import { EditorView, basicSetup } from "codemirror"

import { Card } from "@/components/card"
import { commands } from "@/components/commands"
import { InsertCode } from "@/components/commands/insert-code"
import { MoveCursorUp } from "@/components/commands/move-cursor-up"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

interface StateProps {
  view: EditorView
  state: EditorState
}

let db

async function initSearch() {
  db = await create({
    schema: {
      title: "string",
      key: "string",
    },
    components: {
      tokenizer: await (async () => {
        const tokenizer = await defaultTokenizer.createTokenizer({
          language: "english",
          stemming: false,
        })

        const tokenize = tokenizer.tokenize

        function customTokenize(input: string, language?: string) {
          let value = input
          if (typeof input === "string") {
            value = input.replace(/([a-z])([A-Z])/g, "$1 $2")
          }

          const tokens = tokenize(value, language)

          return tokens
        }

        tokenizer.tokenize = customTokenize

        return tokenizer
      })(),
      afterInsert: [
        async (orama, id) => {
          highlightAfterInsert(orama, id)
        },
      ],
    },
  })

  await insertMultiple(db, commands, 500)
}

function State({ state }: StateProps) {
  return state ? (
    <table>
      <thead>
        <tr>
          <th rowSpan={2}>Selection</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>ranges</td>
          <td>{JSON.stringify(state.selection.ranges)}</td>
        </tr>
        <tr>
          <td>main</td>
          <td>{JSON.stringify(state.selection.main)}</td>
        </tr>
      </tbody>
    </table>
  ) : null
}

interface CommandProps {
  view: EditorView
  state: EditorState
}

function Command(props: CommandProps) {
  const [results, setResults] = React.useState([])

  const onSearch = React.useCallback(async (event) => {
    const searchResult = await searchWithHighlight(db, {
      term: event.target.value,
      properties: ["title", "key"],
    })

    setResults(searchResult.hits)
  }, [])

  React.useEffect(() => {
    initSearch()
  }, [])

  return (
    <div className="space-y-4">
      <Input onChange={onSearch} />
      <div className="grid grid-cols-2 gap-2">
        {results.length
          ? results.map((result) => (
              <Card key={result.document.title}>
                <Card.Title>{result.document.title}</Card.Title>
                <Card.Content>
                  <Button
                    variant="default"
                    onClick={() => result.document.run(props.view)}
                  >
                    Run
                  </Button>
                </Card.Content>
              </Card>
            ))
          : commands.map((result) => (
              <Card key={result.title}>
                <Card.Title>{result.title}</Card.Title>
                <Card.Content>
                  <Button
                    variant="default"
                    onClick={() => result.run(props.view)}
                  >
                    Run
                  </Button>
                </Card.Content>
              </Card>
            ))}
      </div>
    </div>
  )
}

export function Editor() {
  const container = React.useRef()
  const [view, setView] = React.useState<EditorView>()
  const [state, setState] = React.useState<EditorState>()

  React.useEffect(() => {
    const view = new EditorView({
      doc: `import Image from "next/image"

import { AspectRatio } from "@/components/ui/aspect-ratio"

export function AspectRatioDemo() {
  return (
    <AspectRatio ratio={16 / 9} className="bg-slate-50 dark:bg-slate-800">
      <Image
        src="https://images.unsplash.com/photo-1576075796033-848c2a5f3696?w=800&dpr=2&q=80"
        alt="Photo by Alvaro Pinot"
        fill
        className="rounded-md object-cover"
      />
    </AspectRatio>
  )
}`,
      extensions: [
        basicSetup,
        javascript(),
        EditorView.lineWrapping,
        EditorView.updateListener.of(function (vu: ViewUpdate) {
          setState(vu.state)
        }),
      ],
      parent: container.current,
    })

    setView(view)

    return () => {
      view.destroy()
    }
  }, [])

  return (
    <div className="grid grid-cols-2 gap-6">
      <div>
        <div className="border" ref={container} />
      </div>
      <ScrollArea className="h-[calc(100vh-6rem)] px-6 py-2">
        <div className="relative px-2">
          <div className="sticky top-0 bg-white py-4">
            <State view={view} state={state} />
          </div>
          <Separator className="mb-4" />
          <Command view={view} state={state} />
        </div>
      </ScrollArea>
    </div>
  )
}
