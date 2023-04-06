"use client"

import * as React from "react"
import { cursorLineUp, selectLineUp } from "@codemirror/commands"
import { EditorState } from "@codemirror/state"
import { EditorView } from "@codemirror/view"

import { Card } from "@/components/card"
import { Button } from "@/components/ui/button"

interface Props {
  view: EditorView
  state: EditorState
}

export function MoveCursorUp({ view }: Props) {
  const execute = () => {
    // cursorLineUp(view)
    selectLineUp(view)
  }

  return (
    <Card>
      <Card.Title>Move Cursor Up</Card.Title>
      <Card.Content>
        <Button variant="default" onClick={execute}>
          Run
        </Button>
      </Card.Content>
    </Card>
  )
}
