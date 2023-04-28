"use client"

import { EDITOR_NAME, useOutputEditor } from "@/context/output-editor-context"

import { vimConfig } from "@/lib/vim"
import { Skeleton } from "@/components/ui/skeleton"

export function State() {
  const { state } = useOutputEditor(EDITOR_NAME)

  return state ? (
    <div className="flex flex-col">
      <h2 className="mt-10 scroll-m-20 border-b border-b-slate-200 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 dark:border-b-slate-700">
        State
      </h2>
      <div>
        <p className="mt-3 font-medium">Selection Ranges</p>
        <ol className="list-decimal text-muted-foreground text-xs">
          {state.selection.ranges.map((range) => (
            <li key={`${range.anchor}-${range.head}`} className="ml-6">
              <p>anchor: {range.anchor}</p>
              <p>head: {range.head}</p>
            </li>
          ))}
        </ol>

        <p className="mt-3 font-medium">Selection Main</p>
        <div className="text-muted-foreground text-xs">
          <p>anchor: {state.selection.main.anchor}</p>
          <p>head: {state.selection.main.head}</p>
        </div>

        <p className="mt-3 font-medium">Vim</p>
        <div className="text-muted-foreground text-xs">
          <p>enabled: {state.facet(vimConfig).enabled ? "true" : "false"}</p>
          <p>mode: {state.facet(vimConfig).mode}</p>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  )
}

function Loading() {
  return (
    <>
      <Skeleton className="h-10 w-[100px]" />

      <div className="space-y-2">
        <Skeleton className="h-6 w-[250px]" />
        <Skeleton className="h-2 w-[150px]" />
        <Skeleton className="h-2 w-[150px]" />
      </div>

      <div className="space-y-2">
        <Skeleton className="h-6 w-[250px]" />
        <Skeleton className="h-2 w-[150px]" />
        <Skeleton className="h-2 w-[150px]" />
      </div>

      <div className="space-y-2">
        <Skeleton className="h-6 w-[250px]" />
        <Skeleton className="h-2 w-[150px]" />
        <Skeleton className="h-2 w-[150px]" />
      </div>
    </>
  )
}
