"use client"

import { EDITOR_NAME, useOutputEditor } from "@/context/output-editor-context"
import { EditorView } from "@codemirror/view"

import { lineWrapping } from "@/components/playground/output-editor"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export function Configuration() {
  const { view } = useOutputEditor(EDITOR_NAME)

  return (
    <div className="flex flex-col space-y-8">
      <h2 className="mt-10 scroll-m-20 border-b border-b-slate-200 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 dark:border-b-slate-700">
        Configuration
      </h2>
      <div>
        <div className="flex items-center space-x-2">
          <Switch
            id="line-wrapping"
            onCheckedChange={(checked) => {
              const conf = checked ? EditorView.lineWrapping : []
              view.dispatch({
                effects: lineWrapping.reconfigure(conf),
              })
            }}
          />
          <Label htmlFor="line-wrapping">Line Wrapping</Label>
        </div>
      </div>
    </div>
  )
}