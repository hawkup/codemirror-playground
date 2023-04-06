"use client"

import * as React from "react"
import { EditorState } from "@codemirror/state"
import { EditorView } from "@codemirror/view"

import { Card } from "@/components/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

interface Props {
  view: EditorView
  state: EditorState
}

export function InsertCode({ view, state }: Props) {
  const [text, setText] = React.useState("")

  const execute = () => {
    view.dispatch({
      changes: { from: state.selection.main.head, insert: text },
    })
  }

  return (
    <Card>
      <Card.Title>Insert Code</Card.Title>
      <Card.Content>
        <Textarea
          placeholder="Type your message here."
          onChange={(event) => {
            setText(event.target.value)
          }}
        />
        <Button variant="default" onClick={execute}>
          Run
        </Button>
      </Card.Content>
    </Card>
  )
}
