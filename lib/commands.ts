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
import type { EditorView } from "@codemirror/view"

export type Command = {
  title: string
  description: string
  run: (view: EditorView, args?: unknown) => void
}

export const commands: Command[] = [
  {
    title: "Insert Text",
    description: "",
    run: (view: EditorView, text: string = "Hello World") => {
      view.dispatch({
        changes: { from: view.state.selection.main.head, insert: text },
      })
    },
  },
  {
    title: "Simplify Selection",
    description: "",
    run: (view: EditorView) => {
      simplifySelection(view)
    },
  },
  {
    title: "Cursor Char Left",
    description: "",
    run: (view: EditorView) => {
      cursorCharLeft(view)
    },
  },
  {
    title: "Select Char Left",
    description: "",
    run: (view: EditorView) => {
      selectCharLeft(view)
    },
  },
  {
    title: "Cursor Char Right",
    description: "",
    run: (view: EditorView) => {
      cursorCharRight(view)
    },
  },
  {
    title: "Select Char Right",
    description: "",
    run: (view: EditorView) => {
      selectCharRight(view)
    },
  },
  {
    title: "Cursor Char Forward",
    description: "",
    run: (view: EditorView) => {
      cursorCharForward(view)
    },
  },
  {
    title: "Select Char Forward",
    description: "",
    run: (view: EditorView) => {
      selectCharForward(view)
    },
  },
  {
    title: "Cursor Char Backward",
    description: "",
    run: (view: EditorView) => {
      cursorCharBackward(view)
    },
  },
  {
    title: "Select Char Backward",
    description: "",
    run: (view: EditorView) => {
      selectCharBackward(view)
    },
  },
  {
    title: "Cursor Group Left",
    description: "",
    run: (view: EditorView) => {
      cursorGroupLeft(view)
    },
  },
  {
    title: "Select Group Left",
    description: "",
    run: (view: EditorView) => {
      selectGroupLeft(view)
    },
  },
  {
    title: "Cursor Group Right",
    description: "",
    run: (view: EditorView) => {
      cursorGroupRight(view)
    },
  },
  {
    title: "Select Group Right",
    description: "",
    run: (view: EditorView) => {
      selectGroupRight(view)
    },
  },
  {
    title: "Cursor Group Forward",
    description: "",
    run: (view: EditorView) => {
      cursorGroupForward(view)
    },
  },
  {
    title: "Select Group Forward",
    description: "",
    run: (view: EditorView) => {
      selectGroupForward(view)
    },
  },
  {
    title: "Cursor Group Backward",
    description: "",
    run: (view: EditorView) => {
      cursorGroupBackward(view)
    },
  },
  {
    title: "Select Group Backward",
    description: "",
    run: (view: EditorView) => {
      selectGroupBackward(view)
    },
  },
  {
    title: "Cursor Subword Forward",
    description: "",
    run: (view: EditorView) => {
      cursorSubwordForward(view)
    },
  },
  {
    title: "Select Subword Forward",
    description: "",
    run: (view: EditorView) => {
      selectSubwordForward(view)
    },
  },
  {
    title: "Cursor Subword Backward",
    description: "",
    run: (view: EditorView) => {
      cursorSubwordBackward(view)
    },
  },
  {
    title: "Select Subword Backward",
    description: "",
    run: (view: EditorView) => {
      selectSubwordBackward(view)
    },
  },
  {
    title: "Cursor Line Up",
    description: "",
    run: (view: EditorView) => {
      cursorLineUp(view)
    },
  },
  {
    title: "Select Line Up",
    description: "",
    run: (view: EditorView) => {
      selectLineUp(view)
    },
  },
  {
    title: "Cursor Line Down",
    description: "",
    run: (view: EditorView) => {
      cursorLineDown(view)
    },
  },
  {
    title: "Select Line Down",
    description: "",
    run: (view: EditorView) => {
      selectLineDown(view)
    },
  },
  {
    title: "Cursor Page Up",
    description: "",
    run: (view: EditorView) => {
      cursorPageUp(view)
    },
  },
  {
    title: "Select Page Up",
    description: "",
    run: (view: EditorView) => {
      selectPageUp(view)
    },
  },
  {
    title: "Cursor Page Down",
    description: "",
    run: (view: EditorView) => {
      cursorPageDown(view)
    },
  },
  {
    title: "Select Page Down",
    description: "",
    run: (view: EditorView) => {
      selectPageDown(view)
    },
  },
  {
    title: "Cursor Line Boundary Forward",
    description: "",
    run: (view: EditorView) => {
      cursorLineBoundaryForward(view)
    },
  },
  {
    title: "Select Line Boundary Forward",
    description: "",
    run: (view: EditorView) => {
      selectLineBoundaryForward(view)
    },
  },
  {
    title: "Cursor Line Boundary Backward",
    description: "",
    run: (view: EditorView) => {
      cursorLineBoundaryBackward(view)
    },
  },
  {
    title: "Select Line Boundary Backward",
    description: "",
    run: (view: EditorView) => {
      selectLineBoundaryBackward(view)
    },
  },
  {
    title: "Cursor Line Boundary Left",
    description: "",
    run: (view: EditorView) => {
      cursorLineBoundaryLeft(view)
    },
  },
  {
    title: "Select Line Boundary Left",
    description: "",
    run: (view: EditorView) => {
      selectLineBoundaryLeft(view)
    },
  },
  {
    title: "Cursor Line Boundary Right",
    description: "",
    run: (view: EditorView) => {
      cursorLineBoundaryRight(view)
    },
  },
  {
    title: "Select Line Boundary Right",
    description: "",
    run: (view: EditorView) => {
      selectLineBoundaryRight(view)
    },
  },
  {
    title: "Cursor Line Start",
    description: "",
    run: (view: EditorView) => {
      cursorLineStart(view)
    },
  },
  {
    title: "Select Line Start",
    description: "",
    run: (view: EditorView) => {
      selectLineStart(view)
    },
  },
  {
    title: "Cursor Line End",
    description: "",
    run: (view: EditorView) => {
      cursorLineEnd(view)
    },
  },
  {
    title: "Select Line End",
    description: "",
    run: (view: EditorView) => {
      selectLineEnd(view)
    },
  },
  {
    title: "Select Line",
    description: "",
    run: (view: EditorView) => {
      selectLine(view)
    },
  },
  {
    title: "Cursor Doc Start",
    description: "",
    run: (view: EditorView) => {
      cursorDocStart(view)
    },
  },
  {
    title: "Select Doc Start",
    description: "",
    run: (view: EditorView) => {
      selectDocStart(view)
    },
  },
  {
    title: "Cursor Doc End",
    description: "",
    run: (view: EditorView) => {
      cursorDocEnd(view)
    },
  },
  {
    title: "Select Doc End",
    description: "",
    run: (view: EditorView) => {
      selectDocEnd(view)
    },
  },
  {
    title: "Select All",
    description: "",
    run: (view: EditorView) => {
      selectAll(view)
    },
  },
  {
    title: "Cursor Syntax Left",
    description: "",
    run: (view: EditorView) => {
      cursorSyntaxLeft(view)
    },
  },
  {
    title: "Select Syntax Left",
    description: "",
    run: (view: EditorView) => {
      selectSyntaxLeft(view)
    },
  },
  {
    title: "Cursor Syntax Right",
    description: "",
    run: (view: EditorView) => {
      cursorSyntaxRight(view)
    },
  },
  {
    title: "Select Syntax Right",
    description: "",
    run: (view: EditorView) => {
      selectSyntaxRight(view)
    },
  },
  {
    title: "Select Parent Syntax",
    description: "",
    run: (view: EditorView) => {
      selectParentSyntax(view)
    },
  },
  {
    title: "Cursor Matching Bracket",
    description: "",
    run: (view: EditorView) => {
      cursorMatchingBracket(view)
    },
  },
  {
    title: "Select Matching Bracket",
    description: "",
    run: (view: EditorView) => {
      selectMatchingBracket(view)
    },
  },
  {
    title: "Delete Char Backward",
    description: "",
    run: (view: EditorView) => {
      deleteCharBackward(view)
    },
  },
  {
    title: "Delete Char Forward",
    description: "",
    run: (view: EditorView) => {
      deleteCharForward(view)
    },
  },
  {
    title: "Delete Group Backward",
    description: "",
    run: (view: EditorView) => {
      deleteGroupBackward(view)
    },
  },
  {
    title: "Delete Group Forward",
    description: "",
    run: (view: EditorView) => {
      deleteGroupForward(view)
    },
  },
  {
    title: "Delete To Line Start",
    description: "",
    run: (view: EditorView) => {
      deleteToLineStart(view)
    },
  },
  {
    title: "Delete To Line End",
    description: "",
    run: (view: EditorView) => {
      deleteToLineEnd(view)
    },
  },
  {
    title: "Delete Trailing Whitespace",
    description: "",
    run: (view: EditorView) => {
      deleteTrailingWhitespace(view)
    },
  },
  {
    title: "Split Line",
    description: "",
    run: (view: EditorView) => {
      splitLine(view)
    },
  },
  {
    title: "Move Line Up",
    description: "",
    run: (view: EditorView) => {
      moveLineUp(view)
    },
  },
  {
    title: "Move Line Down",
    description: "",
    run: (view: EditorView) => {
      moveLineDown(view)
    },
  },
  {
    title: "copyLineUp",
    description: "",
    run: (view: EditorView) => {
      copyLineUp(view)
    },
  },
  {
    title: "Copy Line Down",
    description: "",
    run: (view: EditorView) => {
      copyLineDown(view)
    },
  },
  {
    title: "Delete Line",
    description: "",
    run: (view: EditorView) => {
      deleteLine(view)
    },
  },
  {
    title: "Indent Selection",
    description: "",
    run: (view: EditorView) => {
      indentSelection(view)
    },
  },
  {
    title: "Indent More",
    description: "",
    run: (view: EditorView) => {
      indentMore(view)
    },
  },
  {
    title: "Indent Less",
    description: "",
    run: (view: EditorView) => {
      indentLess(view)
    },
  },
  {
    title: "Insert Tab",
    description: "",
    run: (view: EditorView) => {
      insertTab(view)
    },
  },
  {
    title: "Transpose Chars",
    description: "",
    run: (view: EditorView) => {
      transposeChars(view)
    },
  },
  {
    title: "Insert Newline",
    description: "",
    run: (view: EditorView) => {
      insertNewline(view)
    },
  },
  {
    title: "Insert Newline And Indent",
    description: "",
    run: (view: EditorView) => {
      insertNewlineAndIndent(view)
    },
  },
  {
    title: "Insert BlankLine",
    description: "",
    run: (view: EditorView) => {
      insertBlankLine(view)
    },
  },
  {
    title: "Undo",
    description: "",
    run: (view: EditorView) => {
      undo(view)
    },
  },
  {
    title: "Redo",
    description: "",
    run: (view: EditorView) => {
      redo(view)
    },
  },
  {
    title: "Undo Selection",
    description: "",
    run: (view: EditorView) => {
      undoSelection(view)
    },
  },
  {
    title: "Redo Selection",
    description: "",
    run: (view: EditorView) => {
      redoSelection(view)
    },
  },
  {
    title: "Toggle Comment",
    description: "",
    run: (view: EditorView) => {
      toggleComment(view)
    },
  },
  {
    title: "Toggle Line Comment",
    description: "",
    run: (view: EditorView) => {
      toggleLineComment(view)
    },
  },
  {
    title: "Line Comment",
    description: "",
    run: (view: EditorView) => {
      lineComment(view)
    },
  },
  {
    title: "Line Uncomment",
    description: "",
    run: (view: EditorView) => {
      lineUncomment(view)
    },
  },
  {
    title: "Toggle Block Comment",
    description: "",
    run: (view: EditorView) => {
      toggleBlockComment(view)
    },
  },
  {
    title: "Block Comment",
    description: "",
    run: (view: EditorView) => {
      blockComment(view)
    },
  },
  {
    title: "Block Uncomment",
    description: "",
    run: (view: EditorView) => {
      blockUncomment(view)
    },
  },
  {
    title: "Toggle Block Comment By Line",
    description: "",
    run: (view: EditorView) => {
      toggleBlockCommentByLine(view)
    },
  },
]
