"use client"

import * as React from "react"
import {
  COMMAND_NAME,
  CommandProvider,
  useCommand,
} from "@/context/command-context"
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
      afterInsert: [
        // async (orama, id) => {
        //   highlightAfterInsert(orama, id)
        // },
      ],
    },
  })

  await insertMultiple(db, commands, 500)
}

async function starCommand(commandId: string, document: Command) {
  await remove(db, commandId)
  const id = await insert(db, {
    ...document,
    meta: {
      star: document.meta?.star ? false : true,
    },
  })
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
    boost: {
      title: 1,
      "meta.star": 2,
    },
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

export function Commands() {
  const [selectedCommand, setSelectedCommand] = React.useState<Command>()
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

  const onStar = async (id: string) => {
    setResults((prevResults) => {
      return prevResults.map((result) => {
        if (result.id === id) {
          return {
            ...result,
            document: {
              ...result.document,
              meta: {
                star: (result.document as Command).meta?.star ? false : true,
              },
            },
          }
        }

        return result
      })
    })
  }

  const onToggleFilter = async (value) => {
    let filter = {}
    if (value) {
      filter = { "meta.star": true }
    }

    const searchResult = await searchTerm(term, filter)

    setFilter(filter)
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
        <div className="flex space-x-4">
          <Toggle onPressedChange={onToggleFilter}>Stars</Toggle>
        </div>

        <div className="relative overflow-hidden border border-slate-100">
          <ScrollArea className="h-96 rounded-md">
            {results.length ? (
              <CommandItem results={results} onStar={onStar} />
            ) : null}
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

function CommandItem({ results, onStar }) {
  const { setSelectedCommand } = useCommand(COMMAND_NAME)
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
              onClick={async () => {
                await starCommand(result.id, result.document)
                onStar(result.id)
              }}
            >
              <Icons.star
                className={clsx(
                  result.document.meta?.star && "fill-yellow-200"
                )}
              />
            </Button>
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
