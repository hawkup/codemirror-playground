import {
  EditorSelection,
  Extension,
  Facet,
  combineConfig,
} from "@codemirror/state"
import { EditorView, RectangleMarker, layer } from "@codemirror/view"

type CursorConfig = {
  drawBlockCursor?: boolean
}

const cursorConfig = Facet.define<CursorConfig, Required<CursorConfig>>({
  combine(configs) {
    return combineConfig(
      configs,
      {
        drawBlockCursor: false,
      },
      {
        drawBlockCursor: (a, b) => a || b,
      }
    )
  },
})

export const cursorLayer = layer({
  above: true,
  markers(view) {
    const { state } = view
    const conf = state.facet(cursorConfig)
    const cursors = []
    for (const r of state.selection.ranges) {
      const prim = r === state.selection.main

      let className = prim
        ? "cm-custom-cursor cm-cursor-primary"
        : "cm-custom-cursor cm-cursor-secondary"

      let cursor = r.empty
        ? r
        : EditorSelection.cursor(r.head, r.head > r.anchor ? -1 : 1)

      // TODO remove
      if (conf.drawBlockCursor) {
        className = prim
          ? "cm-custom-block-cursor cm-cursor-primary"
          : "cm-custom-block-cursor cm-cursor-secondary"

        cursor = EditorSelection.range(r.head, r.head + 1)
      }

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
    borderLeft: "2px solid #000",
    marginLeft: "-0.6px",
    pointerEvents: "none",
  },
  ".cm-custom-block-cursor": {
    display: "block",
    marginLeft: "-0.6px",
    pointerEvents: "none",
    backgroundColor: "red",
    opacity: "0.2",
  },
})

export function drawCursor(config: CursorConfig = {}): Extension {
  return [cursorConfig.of(config), cursorLayer, themeCursor]
}
