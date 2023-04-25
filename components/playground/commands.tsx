"use client"

import * as React from "react"
import { EDITOR_NAME, useOutputEditor } from "@/context/output-editor-context"
import {
  Document,
  Results,
  SearchParams,
  create,
  insert,
  insertMultiple,
  remove,
  search,
  update,
} from "@orama/orama"
// import { tokenizer as defaultTokenizer } from "@orama/orama/components"
// import { stemmer } from "@orama/orama/stemmers/en"
import {
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
      meta: {
        star: "boolean",
      },
    },
    components: {
      // tokenizer: await (async () => {
      //   const tokenizer = await defaultTokenizer.createTokenizer({
      //     language: "english",
      //     stemming: false,
      //   })

      //   const tokenize = tokenizer.tokenize

      //   function customTokenize(input: string, language?: string) {
      //     let value = input
      //     if (typeof input === "string") {
      //       value = input.replace(/([a-z])([A-Z])/g, "$1 $2")
      //     }

      //     const tokens = tokenize(value, language)

      //     return tokens
      //   }

      //   tokenizer.tokenize = customTokenize

      //   return tokenizer
      // })(),
      tokenizer: {
        stemming: false,
      },
      getDocumentIndexId(doc: Command): string {
        return `${doc._id}_${Date.now().toString()}`
      },
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

async function searchTerm(term, filter) {
  const searchResult = await search(db, {
    term: term,
    properties: ["title", "key"],
    facets: {
      title: {
        sort: "ASC",
      },
    },
    where: {
      ...filter,
    },
  })

  return searchResult
}

initSearch()

export function Commands() {
  const [term, setTerm] = React.useState("")
  const [filter, setFilter] = React.useState<SearchParams["where"]>({})
  const [results, setResults] = React.useState<Results["hits"]>([])
  const [groupResults, setGroupResults] = React.useState({})

  const onSearch = async (event) => {
    setTerm(event.target.value)

    const searchResult = await searchTerm(event.target.value, filter)

    setResults(searchResult.hits)
    setGroupResults(groupBy(searchResult.hits, "section"))
  }

  return (
    <div className="space-y-4">
      <Input placeholder="search command" onChange={onSearch} />

      <div className="relative overflow-hidden border border-slate-100">
        <ScrollArea className="h-96 rounded-md">
          {results.length ? <CommandItem results={results} /> : null}
        </ScrollArea>
      </div>
    </div>
  )
}

function CommandItem({ results }) {
  const { view } = useOutputEditor(EDITOR_NAME)

  return (
    <div className="w-full">
      {results.map((result) => (
        <div
          key={result.id}
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
          </div>
        </div>
      ))}
    </div>
  )
}
