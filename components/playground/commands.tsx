"use client"

import * as React from "react"
import { EDITOR_NAME, useEditor } from "@/context/editor-context"
import { Results, create, insertMultiple } from "@orama/orama"
import {
  Position,
  afterInsert as highlightAfterInsert,
  searchWithHighlight,
} from "@orama/plugin-match-highlight"

import { commands } from "@/lib/commands"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

let db

async function initSearch() {
  db = await create({
    schema: {
      title: "string",
    },
    components: {
      tokenizer: {
        language: "english",
        stemming: false,
      },
      afterInsert: [highlightAfterInsert],
    },
  })

  await insertMultiple(db, commands, 500)
}

async function searchTerm(term) {
  const searchResult = await searchWithHighlight(db, {
    term: term,
    properties: ["title"],
    facets: {
      title: {
        sort: "ASC",
      },
    },
  })

  return searchResult
}

initSearch()

export function Commands() {
  const [hits, setHits] = React.useState<Results["hits"]>([])

  const onSearch = async (event) => {
    const searchResult = await searchTerm(event.target.value)

    setHits(searchResult.hits)
  }

  return (
    <div className="space-y-4">
      <Input placeholder="search command" onChange={onSearch} />
      {hits.length ? (
        <ScrollArea className="h-[600px] relative overflow-hidden rounded border border-slate-100 shadow-sm">
          {hits.length ? <CommandItem hits={hits} /> : null}
        </ScrollArea>
      ) : (
        <EmptyState />
      )}
    </div>
  )
}

function HighlightedDocument({ hit, trim = 200 }) {
  const getHighlightedText = (text: string, positions: Position[]) => {
    let highlightedText = ""
    let currentIndex = 0

    positions.forEach((position) => {
      const start = position.start
      const length = position.length
      highlightedText += `${text.slice(
        currentIndex,
        start
      )}<span class="text-blue-800 underline">${text.substring(
        start,
        start + length
      )}</span>`
      currentIndex = start + length
    })

    highlightedText += text.slice(currentIndex)
    return highlightedText
  }

  const trimContent = (content: string, maxLength: number) => {
    if (content.length > maxLength) {
      return `${content.slice(0, maxLength)}...`
    }
    return content
  }

  const highlightDocument = () => {
    const highlightedDocument = { ...hit.document }

    for (const property in hit.positions) {
      if (hit.positions[property]) {
        const positionsArray = Object.values(
          hit.positions[property]
        ).flat() as Position[]
        highlightedDocument[property] = getHighlightedText(
          highlightedDocument[property] as string,
          positionsArray
        )
      }
    }

    highlightedDocument.title = trimContent(
      highlightedDocument.title as string,
      trim
    )

    return highlightedDocument
  }

  const highlightedDocument = highlightDocument()

  return (
    <div className="flex-1 py-4">
      <div
        className="text-base font-semibold"
        // rome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
        dangerouslySetInnerHTML={{
          __html: highlightedDocument.title as string,
        }}
      />
      <div
        // rome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
        dangerouslySetInnerHTML={{
          __html: highlightedDocument.content as string,
        }}
      />
    </div>
  )
}

function CommandItem({ hits }) {
  const { view } = useEditor(EDITOR_NAME)

  const run = (hit) => {
    view.focus()
    hit.document.run(view)
  }

  return (
    <div className="w-full">
      {hits.map((hit) => (
        <div key={hit.id} className="border-b border-b-slate-200 px-4 pb-4">
          <div className="flex items-center">
            <HighlightedDocument hit={hit} />

            <div className="flex items-center space-x-4">
              <Button size="sm" onClick={() => run(hit)}>
                Run
              </Button>
            </div>
          </div>
          <p className="text-sm font-medium text-muted-foreground">
            {hit.document.method}
          </p>
          <p className="text-sm text-muted-foreground">
            {hit.document.description}
          </p>

          {hit.document.categories?.length ? (
            <div className="mt-2 flex space-x-1">
              {hit.document.categories?.map((category) => (
                <Badge key={category} variant="outline">
                  {category}
                </Badge>
              ))}
            </div>
          ) : null}

          {hit.document.vim ? (
            <>
              <Separator className="my-4" />
              <span className="text-md text-semibold text-muted-foreground">
                Vim
              </span>

              {hit.document.vim.map((vim) => (
                <div
                  key={vim.mode}
                  className="flex space-x-2 text-muted-foreground items-center"
                >
                  <span className="text-sm">{vim.mode} Mode</span>
                  <div className="flex space-x-1">
                    {vim.keys.map((key) => (
                      <kbd
                        key={key}
                        className="rounded bg-secondary px-2 py-1 text-xs text-secondary-foreground"
                      >
                        {key}
                      </kbd>
                    ))}
                  </div>
                </div>
              ))}
            </>
          ) : null}
        </div>
      ))}
    </div>
  )
}

function EmptyState() {
  return (
    <div className="h-[600px] border rounded shadow-sm flex items-center justify-center">
      <span className="text-xs text-muted-foreground">
        Search @codemirror/commands and custom commands
      </span>
    </div>
  )
}
