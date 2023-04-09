import { EditorState } from "@codemirror/state"
import { EditorView } from "@codemirror/view"

import { createContext } from "@/lib/context"

export const EDITOR_NAME = "OutputEditor"

export type OutputEditorContextValue = {
  state: EditorState
  setState: React.Dispatch<React.SetStateAction<EditorState>>
  view: EditorView
  setView: React.Dispatch<React.SetStateAction<EditorView>>
}

const [OutputEditorProvider, useOutputEditor] =
  createContext<OutputEditorContextValue>(EDITOR_NAME)

export { OutputEditorProvider, useOutputEditor }
