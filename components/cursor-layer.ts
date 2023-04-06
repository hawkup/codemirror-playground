import { EditorSelection } from "@codemirror/state"
import { EditorView, RectangleMarker, layer } from "@codemirror/view"

export const cursorLayer = layer({
  above: true,
  markers(view) {
    const { state } = view
    const cursors = []
    for (const r of state.selection.ranges) {
      const prim = r === state.selection.main

      const className = prim
        ? "cm-custom-cursor cm-cursor-primary"
        : "cm-custom-cursor cm-cursor-secondary"

      const cursor = r.empty
        ? r
        : EditorSelection.cursor(r.head, r.head > r.anchor ? -1 : 1)

      for (const piece of RectangleMarker.forRange(view, className, cursor))
        cursors.push(piece)
    }
    return cursors
  },
  update(update, dom) {
    return update.docChanged || update.selectionSet
  },
  class: "cm-customCursorLayer",
})

export const themeCursor = EditorView.theme({
  ".cm-custom-cursor": {
    display: "block",
    borderLeft: "1.2px solid black",
    marginLeft: "-0.6px",
    pointerEvents: "none",
  },
})
