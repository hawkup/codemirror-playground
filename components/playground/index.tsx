import * as React from "react"
import { EditorProvider } from "@/context/editor-context"
import { EditorState } from "@codemirror/state"
import { EditorView } from "@codemirror/view"

import { Commands } from "@/components/playground/commands"
import { Configuration } from "@/components/playground/configuration"
import { KeyLogs } from "@/components/playground/key-logs"
import { Editor } from "@/components/playground/editor"
import { State } from "@/components/playground/state"

export function Playground() {
  const [view, setView] = React.useState<EditorView>()
  const [state, setState] = React.useState<EditorState>()

  return (
    <EditorProvider
      state={state}
      setState={setState}
      view={view}
      setView={setView}
    >
      <div className="flex space-x-8 py-8 min-w-[1000px]">
        <div className="flex flex-col space-y-4">
          <Editor />
          <KeyLogs />
          <State />
          <Configuration />
        </div>
        <div className="flex flex-1 flex-col space-y-8">
          <Commands />
        </div>
      </div>
    </EditorProvider>
  )
}
