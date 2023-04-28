import { EditorState } from "@codemirror/state"
import { EditorView } from "@codemirror/view"

import { createContext } from "@/lib/context"

export const EDITOR_NAME = "OutputEditor"

export type EditorContextValue = {
  state: EditorState
  setState: React.Dispatch<React.SetStateAction<EditorState>>
  view: EditorView
  setView: React.Dispatch<React.SetStateAction<EditorView>>
}

const [EditorProvider, useEditor] =
  createContext<EditorContextValue>(EDITOR_NAME)

export { EditorProvider, useEditor }
