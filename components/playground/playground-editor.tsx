"use client"

import * as React from "react"
import { javascript } from "@codemirror/lang-javascript"
import type { EditorState } from "@codemirror/state"
import type { ViewUpdate } from "@codemirror/view"
import { EditorView, basicSetup } from "codemirror"

import { Button } from "@/components/ui/button"

const theme = EditorView.theme({
  ".cm-content": {
    height: "200px",
  },
})

export function PlaygroundEditor() {
  const container = React.useRef()
  const [view, setView] = React.useState<EditorView>()
  const [state, setState] = React.useState<EditorState>()

  React.useEffect(() => {
    const view = new EditorView({
      doc: "",
      extensions: [
        theme,
        basicSetup,
        javascript(),
        EditorView.lineWrapping,
        EditorView.updateListener.of(function (vu: ViewUpdate) {
          setState(vu.state)
        }),
      ],
      parent: container.current,
    })

    setView(view)

    return () => {
      view.destroy()
    }
  }, [])

  return (
    <div className="rounded-md border" ref={container}>
      <Button variant="link" size="sm" onClick={() => view.dispatch()}>
        Run
      </Button>
    </div>
  )
}
