"use client"

import * as React from "react"
import {
  COMMAND_NAME,
  CommandProvider,
  useCommand,
} from "@/context/command-context"
import { EDITOR_NAME, useOutputEditor } from "@/context/output-editor-context"
import { create, insertMultiple } from "@orama/orama"
import { tokenizer as defaultTokenizer } from "@orama/orama/components"
import { stemmer } from "@orama/orama/stemmers/en"
import {
  afterInsert as highlightAfterInsert,
  searchWithHighlight,
} from "@orama/plugin-match-highlight"
import { clsx } from "clsx"

import { Command, commands } from "@/lib/commands"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

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

function groupBy(arr, key) {
  return arr.reduce((accumulator, currentValue) => {
    const keyValue = currentValue.document[key]

    if (!accumulator[keyValue]) {
      accumulator[keyValue] = []
    }

    accumulator[keyValue].push(currentValue)
    return accumulator
  }, {})
}

export function Commands() {
  const [selectedCommand, setSelectedCommand] = React.useState<Command>()
  const [results, setResults] = React.useState([])
  const [groupResults, setGroupResults] = React.useState({})

  const onSearch = async (event) => {
    const searchResult = await searchWithHighlight(db, {
      term: event.target.value,
      properties: ["title", "key"],
    })

    setResults(searchResult.hits)
    setGroupResults(groupBy(searchResult.hits, "section"))
  }

  React.useEffect(() => {
    initSearch()
  }, [])

  return (
    <CommandProvider
      selectedCommand={selectedCommand}
      setSelectedCommand={setSelectedCommand}
    >
      <div className="space-y-4">
        <Input placeholder="search command" onChange={onSearch} />
        <div className="relative overflow-hidden border border-slate-100">
          <ScrollArea className="h-96 rounded-md">
            {results.length ? <CommandItem results={results} /> : null}
          </ScrollArea>
          <div
            className={clsx(
              "transition-all ease-in-out duration-300 absolute top-0 right-0 h-full bg-white",
              !selectedCommand && "left-[100%]",
              selectedCommand && "left-0"
            )}
          >
            <CommandPanel />
          </div>
        </div>
      </div>
    </CommandProvider>
  )
}

function CommandItem({ results }) {
  const { setSelectedCommand } = useCommand(COMMAND_NAME)
  const { view } = useOutputEditor(EDITOR_NAME)

  return (
    <div className="w-full">
      {results.map((result) => (
        <div
          key={result.document.title}
          className="flex items-center border-b border-b-slate-200 px-4"
        >
          <div className="flex-1 py-4 font-medium">{result.document.title}</div>
          <div className="flex items-center space-x-4">
            <Button
              variant="link"
              size="sm"
              onClick={() => result.document.run(view)}
            >
              Run
            </Button>
            <Button
              variant="link"
              size="sm"
              onClick={() => setSelectedCommand(result.document)}
            >
              <Icons.chevronRight />
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}

function CommandPanel() {
  const { selectedCommand, setSelectedCommand } = useCommand(COMMAND_NAME)

  return selectedCommand ? (
    <div className="p-4">
      <div className="flex items-center justify-between text-lg font-semibold text-slate-900 dark:text-slate-50">
        {selectedCommand.title}
        <Button
          variant="link"
          size="sm"
          onClick={() => setSelectedCommand(null)}
        >
          <Icons.close />
        </Button>
      </div>
    </div>
  ) : null
}