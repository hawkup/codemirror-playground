import * as React from "react"
import { OutputEditorProvider } from "@/context/output-editor-context"
import { EditorState } from "@codemirror/state"
import { EditorView } from "@codemirror/view"

import { Commands } from "@/components/playground/commands"
import { Configuration } from "@/components/playground/configuration"
import { OutputEditor } from "@/components/playground/output-editor"
import { PlaygroundEditor } from "@/components/playground/playground-editor"
import { State } from "@/components/playground/state"

export function Playground() {
  const [view, setView] = React.useState<EditorView>()
  const [state, setState] = React.useState<EditorState>()

  return (
    <OutputEditorProvider
      state={state}
      setState={setState}
      view={view}
      setView={setView}
    >
      <div className="flex space-x-8 pt-8">
        <div className="flex max-w-[500px] flex-col space-y-8">
          <OutputEditor />
          <State />
          <Configuration />
        </div>
        <div className="flex flex-1 flex-col space-y-8">
          {/* <PlaygroundEditor /> */}
          <Commands />
        </div>
      </div>
    </OutputEditorProvider>
  )
}
