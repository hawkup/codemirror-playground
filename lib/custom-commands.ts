import {
  blockComment,
  blockUncomment,
  copyLineDown,
  copyLineUp,
  cursorCharBackward,
  cursorCharForward,
  cursorCharLeft,
  cursorCharRight,
  cursorDocEnd,
  cursorDocStart,
  cursorGroupBackward,
  cursorGroupForward,
  cursorGroupLeft,
  cursorGroupRight,
  cursorLineBoundaryBackward,
  cursorLineBoundaryForward,
  cursorLineBoundaryLeft,
  cursorLineBoundaryRight,
  cursorLineDown,
  cursorLineEnd,
  cursorLineStart,
  cursorLineUp,
  cursorMatchingBracket,
  cursorPageDown,
  cursorPageUp,
  cursorSubwordBackward,
  cursorSubwordForward,
  cursorSyntaxLeft,
  cursorSyntaxRight,
  deleteCharBackward,
  deleteCharForward,
  deleteGroupBackward,
  deleteGroupForward,
  deleteLine,
  deleteToLineEnd,
  deleteToLineStart,
  deleteTrailingWhitespace,
  indentLess,
  indentMore,
  indentSelection,
  insertBlankLine,
  insertNewline,
  insertNewlineAndIndent,
  insertTab,
  lineComment,
  lineUncomment,
  moveLineDown,
  moveLineUp,
  redo,
  redoSelection,
  selectAll,
  selectCharBackward,
  selectCharForward,
  selectCharLeft,
  selectCharRight,
  selectDocEnd,
  selectDocStart,
  selectGroupBackward,
  selectGroupForward,
  selectGroupLeft,
  selectGroupRight,
  selectLine,
  selectLineBoundaryBackward,
  selectLineBoundaryForward,
  selectLineBoundaryLeft,
  selectLineBoundaryRight,
  selectLineDown,
  selectLineEnd,
  selectLineStart,
  selectLineUp,
  selectMatchingBracket,
  selectPageDown,
  selectPageUp,
  selectParentSyntax,
  selectSubwordBackward,
  selectSubwordForward,
  selectSyntaxLeft,
  selectSyntaxRight,
  simplifySelection,
  splitLine,
  toggleBlockComment,
  toggleBlockCommentByLine,
  toggleComment,
  toggleLineComment,
  transposeChars,
  undo,
  undoSelection,
} from "@codemirror/commands"
import { EditorView } from "@codemirror/view"

import type { Command } from "@/lib/commands"
import { VimMode, vimCompartment, vimConfig } from "@/lib/vim"

export const customCommands: Command[] = [
  {
    title: "Insert Text",
    description: "",
    run: (view: EditorView, text: string = "Hello World") => {
      view.dispatch({
        changes: { from: view.state.selection.main.head, insert: text },
      })
      return true
    },
  },
  {
    title: "Change Vim Mode To Normal Mode",
    description: "",
    run: (view) => {
      changeVimMode(view, "Normal")

      return true
    },
  },
  {
    title: "Change Vim Mode To Insert Mode",
    description: "",
    run: (view) => {
      changeVimMode(view, "Insert")

      return true
    },
  },
  {
    title: "Change Vim Mode To Visual Mode",
    description: "",
    run: (view) => {
      changeVimMode(view, "Visual")

      return true
    },
  },
  {
    title: "Change Vim Mode To Visual Block Mode",
    description: "",
    run: (view) => {
      changeVimMode(view, "Visual Block")

      return true
    },
  },
  {
    title: "Change Vim Mode To Visual Line Mode",
    description: "",
    run: (view) => {
      changeVimMode(view, "Visual Line")

      return true
    },
  },
  {
    title: "Command Undo",
    description: "",
    run: (view) => {
      undo(view)

      return true
    },
    vim: [
      {
        mode: "Normal",
        keys: ["u"],
      },
    ],
  },
  {
    title: "Command Undo On Line",
    description: "",
    run: false,
    vim: [
      {
        mode: "Normal",
        keys: ["U"],
      },
    ],
  },
  {
    title: "Command Redo",
    description: "",
    run: (view) => {
      redo(view)

      return true
    },
    vim: [
      {
        mode: "Normal",
        keys: ["Ctrl-r"],
      },
    ],
  },
  {
    title: "Command Delete To Line End",
    description: "",
    run: false,
    vim: [
      {
        mode: "Normal",
        keys: ["D"],
      },
    ],
  },
  {
    title: "Command Yank Full Line",
    description: "",
    run: false,
    vim: [
      {
        mode: "Normal",
        keys: ["Y"],
      },
    ],
  },
  {
    title: "Command Change To Line End",
    description: "",
    run: false,
    vim: [
      {
        mode: "Normal",
        keys: ["C"],
      },
    ],
  },
  {
    title: "Command Clear Line",
    description: "",
    run: false,
    vim: [
      {
        mode: "Normal",
        keys: ["S"],
      },
    ],
  },
  {
    title: "Command Exit Visual Mode",
    description: "",
    run: (view) => {
      changeVimMode(view, "Normal")

      return true
    },
    vim: [
      {
        mode: "Visual",
        keys: ["v"],
      },
    ],
  },
  {
    title: "Command Visual Mode",
    description: "",
    run: (view) => {
      changeVimMode(view, "Visual")

      return true
    },
    vim: [
      {
        mode: "Normal",
        keys: ["v"],
      },
      {
        mode: "Visual Line",
        keys: ["v"],
      },
      {
        mode: "Visual Block",
        keys: ["v"],
      },
    ],
  },
  {
    title: "Command Visual Block Mode",
    description: "",
    run: (view) => {
      changeVimMode(view, "Visual Block")

      return true
    },
    vim: [
      {
        mode: "Normal",
        keys: ["Ctrl-v", "Ctrl-q"],
      },
      {
        mode: "Visual",
        keys: ["Ctrl-v", "Ctrl-q"],
      },
      {
        mode: "Visual Line",
        keys: ["Ctrl-v", "Ctrl-q"],
      },
    ],
  },
  {
    title: "Command Exit Visual Block Mode",
    description: "",
    run: (view) => {
      changeVimMode(view, "Normal")

      return true
    },
    vim: [
      {
        mode: "Visual Block",
        keys: ["Ctrl-v", "Ctrl-q"],
      },
    ],
  },
  {
    title: "Command Visual Line Mode",
    description: "",
    run: (view) => {
      changeVimMode(view, "Visual Line")

      return true
    },
    vim: [
      {
        mode: "Normal",
        keys: ["V"],
      },
      {
        mode: "Visual",
        keys: ["V"],
      },
      {
        mode: "Visual Block",
        keys: ["V"],
      },
    ],
  },
  {
    title: "Command Exit Visual Line Mode",
    description: "",
    run: (view) => {
      changeVimMode(view, "Normal")

      return true
    },
    vim: [
      {
        mode: "Visual Line",
        keys: ["V"],
      },
    ],
  },
  {
    title: "Command Esc",
    description: "",
    run: (view) => {
      changeVimMode(view, "Normal")

      return true
    },
    vim: [
      {
        mode: "Normal",
        keys: ["Escape", "Ctrl-c", "Ctrl-["],
      },
      {
        mode: "Insert",
        keys: ["Escape", "Ctrl-c", "Ctrl-["],
      },
      {
        mode: "Visual",
        keys: ["Escape", "Ctrl-c", "Ctrl-["],
      },
      {
        mode: "Visual Block",
        keys: ["Escape", "Ctrl-c", "Ctrl-["],
      },
      {
        mode: "Visual Line",
        keys: ["Escape", "Ctrl-c", "Ctrl-["],
      },
    ],
  },
  {
    title: "Command Insert At Cursor",
    description: "",
    run: (view) => {
      changeVimMode(view, "Insert")

      return true
    },
    vim: [
      {
        mode: "Normal",
        keys: ["i", "Insert"],
      },
    ],
  },
  {
    title: "Command Insert After Cursor",
    description: "",
    run: (view) => {
      changeVimMode(view, "Insert")
      cursorCharForward(view)

      return true
    },
    vim: [
      {
        mode: "Normal",
        keys: ["a"],
      },
    ],
  },
  {
    title: "Command Insert At Line End",
    description: "",
    run: (view) => {
      changeVimMode(view, "Insert")
      cursorLineEnd(view)

      return true
    },
    vim: [
      {
        mode: "Normal",
        keys: ["A"],
      },
    ],
  },
]

function changeVimMode(view: EditorView, mode: VimMode) {
  const config = view.state.facet(vimConfig)

  view.dispatch({
    effects: [
      vimCompartment.reconfigure(
        vimConfig.of({
          ...config,
          mode,
        })
      ),
    ],
  })
}
