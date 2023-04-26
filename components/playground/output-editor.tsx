"use client"

import * as React from "react"
import { EDITOR_NAME, useOutputEditor } from "@/context/output-editor-context"
import { javascript } from "@codemirror/lang-javascript"
import { Compartment } from "@codemirror/state"
import { ViewUpdate, keymap, type KeyBinding } from "@codemirror/view"
import { EditorView, basicSetup } from "codemirror"

import { commands } from "@/lib/commands"
import { drawCursor } from "@/lib/cursor-layer"
import { vim, vimConfig } from "@/lib/vim"

const theme = EditorView.theme({
  ".cm-content": {
    height: "300px",
  },
})

export const lineWrapping = new Compartment()

const keys = [] as KeyBinding[]

for (const command of commands) {
  if (command.vim) {
    for (const vim of command.vim) {
      keys.push({
        key: vim.key,
        run: (view) => {
          const { enabled } = view.state.facet(vimConfig)

          if (!enabled) return false

          command.run(view)

          return true
        },
      })
    }
  }
}

export function OutputEditor() {
  const container = React.useRef()
  const { setView, setState } = useOutputEditor(EDITOR_NAME)

  React.useEffect(() => {
    const view = new EditorView({
      doc: `import Image from "next/image"

import { AspectRatio } from "@/components/ui/aspect-ratio"

export function AspectRatioDemo() {
  return (
    <AspectRatio ratio={16 / 9} className="bg-slate-50 dark:bg-slate-800">
      <Image
        src="https://images.unsplash.com/photo-1576075796033-848c2a5f3696?w=800&dpr=2&q=80"
        alt="Photo by Alvaro Pinot"
        fill
        className="rounded-md object-cover"
      />
    </AspectRatio>
  )
}`,
      extensions: [
        theme,
        drawCursor(),
        basicSetup,
        javascript(),
        lineWrapping.of([]),
        vim(),
        EditorView.updateListener.of(function (vu: ViewUpdate) {
          setState(vu.state)
        }),
        keymap.of(keys),
      ],
      parent: container.current,
    })

    setView(view)

    return () => {
      view.destroy()
    }
  }, [setState, setView])

  return (
    <div className="h-[300px] w-[500px] rounded-md border" ref={container} />
  )
}
