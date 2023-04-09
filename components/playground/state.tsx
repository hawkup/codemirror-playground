"use client"

import { EDITOR_NAME, useOutputEditor } from "@/context/output-editor-context"

export function State() {
  const { state } = useOutputEditor(EDITOR_NAME)

  return state ? (
    <div className="flex flex-col">
      <h2 className="mt-10 scroll-m-20 border-b border-b-slate-200 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 dark:border-b-slate-700">
        State
      </h2>
      <div>
        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          Selection Ranges
        </h3>
        <ol className="list-decimal">
          {state.selection.ranges.map((range) => (
            <li key={`${range.anchor}-${range.head}`} className="ml-6">
              <p>anchor: {range.anchor}</p>
              <p>head: {range.head}</p>
            </li>
          ))}
        </ol>

        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          Selection Main
        </h3>
        <div>
          <p>anchor: {state.selection.main.anchor}</p>
          <p>head: {state.selection.main.head}</p>
        </div>
      </div>
    </div>
  ) : null
}
