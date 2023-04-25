"use client"

import * as React from "react"
import { EDITOR_NAME, useOutputEditor } from "@/context/output-editor-context"
import {
  Results,
  SearchParams,
  create,
  insertMultiple,
  search,
} from "@orama/orama"
import {
  Position,
  SearchResultWithHighlight,
  afterInsert as highlightAfterInsert,
  searchWithHighlight,
} from "@orama/plugin-match-highlight"
import { clsx } from "clsx"

import { Command, commands } from "@/lib/commands"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Toggle } from "@/components/ui/toggle"

let db

async function initSearch() {
  db = await create({
    schema: {
      title: "string",
      key: "string",
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

  console.log(searchResult)

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

      <div className="relative overflow-hidden border border-slate-100">
        <ScrollArea className="h-[500px] rounded-md">
          {hits.length ? <CommandItem hits={hits} /> : null}
        </ScrollArea>
      </div>
    </div>
  )
}

function CommandItem({ hits }) {
  const { view } = useOutputEditor(EDITOR_NAME)

  return (
    <div className="w-full">
      {hits.map((hit) => (
        <div
          key={hit.id}
          className="flex items-center border-b border-b-slate-200 px-4"
        >
          <HighlightedDocument hit={hit} />
          <div className="flex items-center space-x-4">
            <Button
              variant="link"
              size="sm"
              onClick={() => hit.document.run(view)}
            >
              Run
            </Button>
          </div>
        </div>
      ))}
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
