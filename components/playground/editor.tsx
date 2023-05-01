"use client"

import * as React from "react"
import { EDITOR_NAME, useEditor } from "@/context/editor-context"
import { useToast } from "@/hooks/use-toast"
import { history } from "@codemirror/commands"
import { javascript } from "@codemirror/lang-javascript"
import { defaultHighlightStyle, syntaxHighlighting } from "@codemirror/language"
import { Compartment } from "@codemirror/state"
import { ViewUpdate, keymap, type KeyBinding } from "@codemirror/view"
import { EditorView, basicSetup } from "codemirror"

import { commands } from "@/lib/commands"
import { drawCursor } from "@/lib/cursor-layer"
import { vim, vimConfig } from "@/lib/vim"

const theme = EditorView.theme({
  "&": {
    outline: "1px solid hsl(var(--muted))",
  },
  "&.cm-focused": {
    outline: "2px solid hsl(var(--primary))",
  },
  ".cm-scroller": {
    height: "300px",
  },
})

export const lineWrapping = new Compartment()

const keys = [] as KeyBinding[]

export function Editor() {
  const container = React.useRef<HTMLDivElement>()
  const { setView, setState } = useEditor(EDITOR_NAME)
  const { toast } = useToast()

  React.useEffect(() => {
    for (const command of commands) {
      if (command.vim) {
        for (const vim of command.vim) {
          for (const key of vim.keys) {
            keys.push({
              key,
              run: (view) => {
                const { enabled, mode } = view.state.facet(vimConfig)

                if (!enabled) return false

                if (mode !== vim.mode) return false

                if (command.run === false) {
                  toast({
                    title: `No Implement ${command.title}`,
                    description: `Pressed: ${key}`,
                    variant: "destructive",
                  })

                  return true
                }

                toast({
                  title: `Run ${command.title}`,
                  description: `Pressed: ${key}`,
                })

                command.run(view)

                return true
              },
            })
          }
        }
      }
    }
  }, [toast])

  React.useEffect(() => {
    const view = new EditorView({
      doc: `app.get('/auth', (req, res) => {
  let username = req.query.username || '';
  const password = req.query.password || '';

  username = username.replace(/[!@#$%^&*]/g, '');

  if (!username || !password || !users[username]) {
    return res.sendStatus(400);
  }

  const { salt, hash } = users[username];
  const encryptHash = crypto.pbkdf2Sync(password, salt, 10000, 512, 'sha512');

  if (crypto.timingSafeEqual(hash, encryptHash)) {
    res.sendStatus(200);
  } else {
    res.sendStatus(401);
  }
});`,
      extensions: [
        theme,
        drawCursor(),
        history(),
        syntaxHighlighting(defaultHighlightStyle, { fallback: true }),
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

  return <div className="h-[300px] w-[500px]" ref={container} />
}
