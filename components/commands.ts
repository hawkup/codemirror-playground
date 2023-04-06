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

export const commands = [
  {
    title: "Insert Text",
    key: "",
    run: (view: EditorView, text: string = "Hello World") => {
      view.dispatch({
        changes: { from: view.state.selection.main.head, insert: text },
      })
    },
  },
  {
    title: "cursor-Char-Left",
    key: "cursorCharLeft",
    run: (view: EditorView) => {
      cursorCharLeft(view)
    },
  },
  {
    title: "selectCharLeft",
    key: "selectCharLeft",
    run: (view: EditorView) => {
      selectCharLeft(view)
    },
  },
  {
    title: "cursorCharRight",
    key: "cursorCharRight",
    run: (view: EditorView) => {
      cursorCharRight(view)
    },
  },
  {
    title: "selectCharRight",
    key: "selectCharRight",
    run: (view: EditorView) => {
      selectCharRight(view)
    },
  },
  {
    title: "cursorCharForward",
    key: "cursorCharForward",
    run: (view: EditorView) => {
      cursorCharForward(view)
    },
  },
  {
    title: "selectCharForward",
    key: "selectCharForward",
    run: (view: EditorView) => {
      selectCharForward(view)
    },
  },
  {
    title: "cursorCharBackward",
    key: "cursorCharBackward",
    run: (view: EditorView) => {
      cursorCharBackward(view)
    },
  },
  {
    title: "selectCharBackward",
    key: "selectCharBackward",
    run: (view: EditorView) => {
      selectCharBackward(view)
    },
  },
  {
    title: "cursorGroupLeft",
    key: "cursorGroupLeft",
    run: (view: EditorView) => {
      cursorGroupLeft(view)
    },
  },
  {
    title: "selectGroupLeft",
    key: "selectGroupLeft",
    run: (view: EditorView) => {
      selectGroupLeft(view)
    },
  },
  {
    title: "cursorGroupRight",
    key: "cursorGroupRight",
    run: (view: EditorView) => {
      cursorGroupRight(view)
    },
  },
  {
    title: "selectGroupRight",
    key: "selectGroupRight",
    run: (view: EditorView) => {
      selectGroupRight(view)
    },
  },
  {
    title: "cursorGroupForward",
    key: "cursorGroupForward",
    run: (view: EditorView) => {
      cursorGroupForward(view)
    },
  },
  {
    title: "selectGroupForward",
    key: "selectGroupForward",
    run: (view: EditorView) => {
      selectGroupForward(view)
    },
  },
  {
    title: "cursorGroupBackward",
    key: "cursorGroupBackward",
    run: (view: EditorView) => {
      cursorGroupBackward(view)
    },
  },
  {
    title: "selectGroupBackward",
    key: "selectGroupBackward",
    run: (view: EditorView) => {
      selectGroupBackward(view)
    },
  },
  {
    title: "cursorSubwordForward",
    key: "cursorSubwordForward",
    run: (view: EditorView) => {
      cursorSubwordForward(view)
    },
  },
  {
    title: "selectSubwordForward",
    key: "selectSubwordForward",
    run: (view: EditorView) => {
      selectSubwordForward(view)
    },
  },
  {
    title: "cursorSubwordBackward",
    key: "cursorSubwordBackward",
    run: (view: EditorView) => {
      cursorSubwordBackward(view)
    },
  },
  {
    title: "selectSubwordBackward",
    key: "selectSubwordBackward",
    run: (view: EditorView) => {
      selectSubwordBackward(view)
    },
  },
  {
    title: "cursorLineUp",
    key: "cursorLineUp",
    run: (view: EditorView) => {
      cursorLineUp(view)
    },
  },
  {
    title: "selectLineUp",
    key: "selectLineUp",
    run: (view: EditorView) => {
      selectLineUp(view)
    },
  },
  {
    title: "cursorLineDown",
    key: "cursorLineDown",
    run: (view: EditorView) => {
      cursorLineDown(view)
    },
  },
  {
    title: "selectLineDown",
    key: "selectLineDown",
    run: (view: EditorView) => {
      selectLineDown(view)
    },
  },
  {
    title: "cursorPageUp",
    key: "cursorPageUp",
    run: (view: EditorView) => {
      cursorPageUp(view)
    },
  },
  {
    title: "selectPageUp",
    key: "selectPageUp",
    run: (view: EditorView) => {
      selectPageUp(view)
    },
  },
  {
    title: "cursorPageDown",
    key: "cursorPageDown",
    run: (view: EditorView) => {
      cursorPageDown(view)
    },
  },
  {
    title: "selectPageDown",
    key: "selectPageDown",
    run: (view: EditorView) => {
      selectPageDown(view)
    },
  },
  {
    title: "cursorLineBoundaryForward",
    key: "cursorLineBoundaryForward",
    run: (view: EditorView) => {
      cursorLineBoundaryForward(view)
    },
  },
  {
    title: "selectLineBoundaryForward",
    key: "selectLineBoundaryForward",
    run: (view: EditorView) => {
      selectLineBoundaryForward(view)
    },
  },
  {
    title: "cursorLineBoundaryBackward",
    key: "cursorLineBoundaryBackward",
    run: (view: EditorView) => {
      cursorLineBoundaryBackward(view)
    },
  },
  {
    title: "selectLineBoundaryBackward",
    key: "selectLineBoundaryBackward",
    run: (view: EditorView) => {
      selectLineBoundaryBackward(view)
    },
  },
  {
    title: "cursorLineBoundaryLeft",
    key: "cursorLineBoundaryLeft",
    run: (view: EditorView) => {
      cursorLineBoundaryLeft(view)
    },
  },
  {
    title: "selectLineBoundaryLeft",
    key: "selectLineBoundaryLeft",
    run: (view: EditorView) => {
      selectLineBoundaryLeft(view)
    },
  },
  {
    title: "cursorLineBoundaryRight",
    key: "cursorLineBoundaryRight",
    run: (view: EditorView) => {
      cursorLineBoundaryRight(view)
    },
  },
  {
    title: "selectLineBoundaryRight",
    key: "selectLineBoundaryRight",
    run: (view: EditorView) => {
      selectLineBoundaryRight(view)
    },
  },
  {
    title: "cursorLineStart",
    key: "cursorLineStart",
    run: (view: EditorView) => {
      cursorLineStart(view)
    },
  },
  {
    title: "selectLineStart",
    key: "selectLineStart",
    run: (view: EditorView) => {
      selectLineStart(view)
    },
  },
  {
    title: "cursorLineEnd",
    key: "cursorLineEnd",
    run: (view: EditorView) => {
      cursorLineEnd(view)
    },
  },
  {
    title: "selectLineEnd",
    key: "selectLineEnd",
    run: (view: EditorView) => {
      selectLineEnd(view)
    },
  },
  {
    title: "selectLine",
    key: "selectLine",
    run: (view: EditorView) => {
      selectLine(view)
    },
  },
  {
    title: "cursorDocStart",
    key: "cursorDocStart",
    run: (view: EditorView) => {
      cursorDocStart(view)
    },
  },
  {
    title: "selectDocStart",
    key: "selectDocStart",
    run: (view: EditorView) => {
      selectDocStart(view)
    },
  },
  {
    title: "cursorDocEnd",
    key: "cursorDocEnd",
    run: (view: EditorView) => {
      cursorDocEnd(view)
    },
  },
  {
    title: "selectDocEnd",
    key: "selectDocEnd",
    run: (view: EditorView) => {
      selectDocEnd(view)
    },
  },
  {
    title: "selectAll",
    key: "selectAll",
    run: (view: EditorView) => {
      selectAll(view)
    },
  },
  {
    title: "cursorSyntaxLeft",
    key: "cursorSyntaxLeft",
    run: (view: EditorView) => {
      cursorSyntaxLeft(view)
    },
  },
  {
    title: "selectSyntaxLeft",
    key: "selectSyntaxLeft",
    run: (view: EditorView) => {
      selectSyntaxLeft(view)
    },
  },
  {
    title: "cursorSyntaxRight",
    key: "cursorSyntaxRight",
    run: (view: EditorView) => {
      cursorSyntaxRight(view)
    },
  },
  {
    title: "selectSyntaxRight",
    key: "selectSyntaxRight",
    run: (view: EditorView) => {
      selectSyntaxRight(view)
    },
  },
  {
    title: "selectParentSyntax",
    key: "selectParentSyntax",
    run: (view: EditorView) => {
      selectParentSyntax(view)
    },
  },
  {
    title: "cursorMatchingBracket",
    key: "cursorMatchingBracket",
    run: (view: EditorView) => {
      cursorMatchingBracket(view)
    },
  },
  {
    title: "selectMatchingBracket",
    key: "selectMatchingBracket",
    run: (view: EditorView) => {
      selectMatchingBracket(view)
    },
  },
  {
    title: "deleteCharBackward",
    key: "deleteCharBackward",
    run: (view: EditorView) => {
      deleteCharBackward(view)
    },
  },
  {
    title: "deleteCharForward",
    key: "deleteCharForward",
    run: (view: EditorView) => {
      deleteCharForward(view)
    },
  },
  {
    title: "deleteGroupBackward",
    key: "deleteGroupBackward",
    run: (view: EditorView) => {
      deleteGroupBackward(view)
    },
  },
  {
    title: "deleteGroupForward",
    key: "deleteGroupForward",
    run: (view: EditorView) => {
      deleteGroupForward(view)
    },
  },
  {
    title: "deleteToLineStart",
    key: "deleteToLineStart",
    run: (view: EditorView) => {
      deleteToLineStart(view)
    },
  },
  {
    title: "deleteToLineEnd",
    key: "deleteToLineEnd",
    run: (view: EditorView) => {
      deleteToLineEnd(view)
    },
  },
  {
    title: "deleteTrailingWhitespace",
    key: "deleteTrailingWhitespace",
    run: (view: EditorView) => {
      deleteTrailingWhitespace(view)
    },
  },
  {
    title: "splitLine",
    key: "splitLine",
    run: (view: EditorView) => {
      splitLine(view)
    },
  },
  {
    title: "moveLineUp",
    key: "moveLineUp",
    run: (view: EditorView) => {
      moveLineUp(view)
    },
  },
  {
    title: "moveLineDown",
    key: "moveLineDown",
    run: (view: EditorView) => {
      moveLineDown(view)
    },
  },
  {
    title: "copyLineUp",
    key: "copyLineUp",
    run: (view: EditorView) => {
      copyLineUp(view)
    },
  },
  {
    title: "copyLineDown",
    key: "copyLineDown",
    run: (view: EditorView) => {
      copyLineDown(view)
    },
  },
  {
    title: "deleteLine",
    key: "deleteLine",
    run: (view: EditorView) => {
      deleteLine(view)
    },
  },
  {
    title: "indentSelection",
    key: "indentSelection",
    run: (view: EditorView) => {
      indentSelection(view)
    },
  },
  {
    title: "indentMore",
    key: "indentMore",
    run: (view: EditorView) => {
      indentMore(view)
    },
  },
  {
    title: "indentLess",
    key: "indentLess",
    run: (view: EditorView) => {
      indentLess(view)
    },
  },
  {
    title: "insertTab",
    key: "insertTab",
    run: (view: EditorView) => {
      insertTab(view)
    },
  },
  {
    title: "transposeChars",
    key: "transposeChars",
    run: (view: EditorView) => {
      transposeChars(view)
    },
  },
  {
    title: "insertNewline",
    key: "insertNewline",
    run: (view: EditorView) => {
      insertNewline(view)
    },
  },
  {
    title: "insertNewlineAndIndent",
    key: "insertNewlineAndIndent",
    run: (view: EditorView) => {
      insertNewlineAndIndent(view)
    },
  },
  {
    title: "insertBlankLine",
    key: "insertBlankLine",
    run: (view: EditorView) => {
      insertBlankLine(view)
    },
  },
  {
    title: "undo",
    key: "undo",
    run: (view: EditorView) => {
      undo(view)
    },
  },
  {
    title: "redo",
    key: "redo",
    run: (view: EditorView) => {
      redo(view)
    },
  },
  {
    title: "undoSelection",
    key: "undoSelection",
    run: (view: EditorView) => {
      undoSelection(view)
    },
  },
  {
    title: "redoSelection",
    key: "redoSelection",
    run: (view: EditorView) => {
      redoSelection(view)
    },
  },
  {
    title: "toggleComment",
    key: "toggleComment",
    run: (view: EditorView) => {
      toggleComment(view)
    },
  },
  {
    title: "toggleLineComment",
    key: "toggleLineComment",
    run: (view: EditorView) => {
      toggleLineComment(view)
    },
  },
  {
    title: "lineComment",
    key: "lineComment",
    run: (view: EditorView) => {
      lineComment(view)
    },
  },
  {
    title: "lineUncomment",
    key: "lineUncomment",
    run: (view: EditorView) => {
      lineUncomment(view)
    },
  },
  {
    title: "toggleBlockComment",
    key: "toggleBlockComment",
    run: (view: EditorView) => {
      toggleBlockComment(view)
    },
  },
  {
    title: "blockComment",
    key: "blockComment",
    run: (view: EditorView) => {
      blockComment(view)
    },
  },
  {
    title: "blockUncomment",
    key: "blockUncomment",
    run: (view: EditorView) => {
      blockUncomment(view)
    },
  },
  {
    title: "toggleBlockCommentByLine",
    key: "toggleBlockCommentByLine",
    run: (view: EditorView) => {
      toggleBlockCommentByLine(view)
    },
  },
]
