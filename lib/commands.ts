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
  key: string
  section: string
  subSection: string
  run: (view: EditorView, args?: unknown) => void
}

export const commands: Command[] = [
  {
    title: "Insert Text",
    key: "",
    section: "",
    subSection: "",
    run: (view: EditorView, text: string = "Hello World") => {
      view.dispatch({
        changes: { from: view.state.selection.main.head, insert: text },
      })
    },
  },
  {
    title: "simplifySelection",
    key: "simplifySelection",
    section: "Selection",
    subSection: "",
    run: (view: EditorView) => {
      simplifySelection(view)
    },
  },
  {
    title: "cursorCharLeft",
    key: "cursorCharLeft",
    section: "Selection",
    subSection: "By character",
    run: (view: EditorView) => {
      cursorCharLeft(view)
    },
  },
  {
    title: "selectCharLeft",
    key: "selectCharLeft",
    section: "Selection",
    subSection: "By character",
    run: (view: EditorView) => {
      selectCharLeft(view)
    },
  },
  {
    title: "cursorCharRight",
    key: "cursorCharRight",
    section: "Selection",
    subSection: "By character",
    run: (view: EditorView) => {
      cursorCharRight(view)
    },
  },
  {
    title: "selectCharRight",
    key: "selectCharRight",
    section: "Selection",
    subSection: "By character",
    run: (view: EditorView) => {
      selectCharRight(view)
    },
  },
  {
    title: "cursorCharForward",
    key: "cursorCharForward",
    section: "Selection",
    subSection: "By character",
    run: (view: EditorView) => {
      cursorCharForward(view)
    },
  },
  {
    title: "selectCharForward",
    key: "selectCharForward",
    section: "Selection",
    subSection: "By character",
    run: (view: EditorView) => {
      selectCharForward(view)
    },
  },
  {
    title: "cursorCharBackward",
    key: "cursorCharBackward",
    section: "Selection",
    subSection: "By character",
    run: (view: EditorView) => {
      cursorCharBackward(view)
    },
  },
  {
    title: "selectCharBackward",
    key: "selectCharBackward",
    section: "Selection",
    subSection: "By character",
    run: (view: EditorView) => {
      selectCharBackward(view)
    },
  },
  {
    title: "cursorGroupLeft",
    key: "cursorGroupLeft",
    section: "Selection",
    subSection: "By group",
    run: (view: EditorView) => {
      cursorGroupLeft(view)
    },
  },
  {
    title: "selectGroupLeft",
    key: "selectGroupLeft",
    section: "Selection",
    subSection: "By group",
    run: (view: EditorView) => {
      selectGroupLeft(view)
    },
  },
  {
    title: "cursorGroupRight",
    key: "cursorGroupRight",
    section: "Selection",
    subSection: "By group",
    run: (view: EditorView) => {
      cursorGroupRight(view)
    },
  },
  {
    title: "selectGroupRight",
    key: "selectGroupRight",
    section: "Selection",
    subSection: "By group",
    run: (view: EditorView) => {
      selectGroupRight(view)
    },
  },
  {
    title: "cursorGroupForward",
    key: "cursorGroupForward",
    section: "Selection",
    subSection: "By group",
    run: (view: EditorView) => {
      cursorGroupForward(view)
    },
  },
  {
    title: "selectGroupForward",
    key: "selectGroupForward",
    section: "Selection",
    subSection: "By group",
    run: (view: EditorView) => {
      selectGroupForward(view)
    },
  },
  {
    title: "cursorGroupBackward",
    key: "cursorGroupBackward",
    section: "Selection",
    subSection: "By group",
    run: (view: EditorView) => {
      cursorGroupBackward(view)
    },
  },
  {
    title: "selectGroupBackward",
    key: "selectGroupBackward",
    section: "Selection",
    subSection: "By group",
    run: (view: EditorView) => {
      selectGroupBackward(view)
    },
  },
  {
    title: "cursorSubwordForward",
    key: "cursorSubwordForward",
    section: "Selection",
    subSection: "By group",
    run: (view: EditorView) => {
      cursorSubwordForward(view)
    },
  },
  {
    title: "selectSubwordForward",
    key: "selectSubwordForward",
    section: "Selection",
    subSection: "By group",
    run: (view: EditorView) => {
      selectSubwordForward(view)
    },
  },
  {
    title: "cursorSubwordBackward",
    key: "cursorSubwordBackward",
    section: "Selection",
    subSection: "By group",
    run: (view: EditorView) => {
      cursorSubwordBackward(view)
    },
  },
  {
    title: "selectSubwordBackward",
    key: "selectSubwordBackward",
    section: "Selection",
    subSection: "By group",
    run: (view: EditorView) => {
      selectSubwordBackward(view)
    },
  },
  {
    title: "cursorLineUp",
    key: "cursorLineUp",
    section: "Vertical motion",
    subSection: "",
    run: (view: EditorView) => {
      cursorLineUp(view)
    },
  },
  {
    title: "selectLineUp",
    key: "selectLineUp",
    section: "Vertical motion",
    subSection: "By line boundary",
    run: (view: EditorView) => {
      selectLineUp(view)
    },
  },
  {
    title: "cursorLineDown",
    key: "cursorLineDown",
    section: "Vertical motion",
    subSection: "By line boundary",
    run: (view: EditorView) => {
      cursorLineDown(view)
    },
  },
  {
    title: "selectLineDown",
    key: "selectLineDown",
    section: "Vertical motion",
    subSection: "By line boundary",
    run: (view: EditorView) => {
      selectLineDown(view)
    },
  },
  {
    title: "cursorPageUp",
    key: "cursorPageUp",
    section: "Vertical motion",
    subSection: "By line boundary",
    run: (view: EditorView) => {
      cursorPageUp(view)
    },
  },
  {
    title: "selectPageUp",
    key: "selectPageUp",
    section: "Vertical motion",
    subSection: "By line boundary",
    run: (view: EditorView) => {
      selectPageUp(view)
    },
  },
  {
    title: "cursorPageDown",
    key: "cursorPageDown",
    section: "Vertical motion",
    subSection: "By line boundary",
    run: (view: EditorView) => {
      cursorPageDown(view)
    },
  },
  {
    title: "selectPageDown",
    key: "selectPageDown",
    section: "Vertical motion",
    subSection: "By line boundary",
    run: (view: EditorView) => {
      selectPageDown(view)
    },
  },
  {
    title: "cursorLineBoundaryForward",
    key: "cursorLineBoundaryForward",
    section: "Vertical motion",
    subSection: "By line boundary",
    run: (view: EditorView) => {
      cursorLineBoundaryForward(view)
    },
  },
  {
    title: "selectLineBoundaryForward",
    key: "selectLineBoundaryForward",
    section: "Vertical motion",
    subSection: "By line boundary",
    run: (view: EditorView) => {
      selectLineBoundaryForward(view)
    },
  },
  {
    title: "cursorLineBoundaryBackward",
    key: "cursorLineBoundaryBackward",
    section: "Vertical motion",
    subSection: "By line boundary",
    run: (view: EditorView) => {
      cursorLineBoundaryBackward(view)
    },
  },
  {
    title: "selectLineBoundaryBackward",
    key: "selectLineBoundaryBackward",
    section: "Vertical motion",
    subSection: "By line boundary",
    run: (view: EditorView) => {
      selectLineBoundaryBackward(view)
    },
  },
  {
    title: "cursorLineBoundaryLeft",
    key: "cursorLineBoundaryLeft",
    section: "Vertical motion",
    subSection: "By line boundary",
    run: (view: EditorView) => {
      cursorLineBoundaryLeft(view)
    },
  },
  {
    title: "selectLineBoundaryLeft",
    key: "selectLineBoundaryLeft",
    section: "Vertical motion",
    subSection: "By line boundary",
    run: (view: EditorView) => {
      selectLineBoundaryLeft(view)
    },
  },
  {
    title: "cursorLineBoundaryRight",
    key: "cursorLineBoundaryRight",
    section: "Vertical motion",
    subSection: "By line boundary",
    run: (view: EditorView) => {
      cursorLineBoundaryRight(view)
    },
  },
  {
    title: "selectLineBoundaryRight",
    key: "selectLineBoundaryRight",
    section: "Vertical motion",
    subSection: "By line boundary",
    run: (view: EditorView) => {
      selectLineBoundaryRight(view)
    },
  },
  {
    title: "cursorLineStart",
    key: "cursorLineStart",
    section: "Vertical motion",
    subSection: "By line boundary",
    run: (view: EditorView) => {
      cursorLineStart(view)
    },
  },
  {
    title: "selectLineStart",
    key: "selectLineStart",
    section: "Vertical motion",
    subSection: "By line boundary",
    run: (view: EditorView) => {
      selectLineStart(view)
    },
  },
  {
    title: "cursorLineEnd",
    key: "cursorLineEnd",
    section: "Vertical motion",
    subSection: "By line boundary",
    run: (view: EditorView) => {
      cursorLineEnd(view)
    },
  },
  {
    title: "selectLineEnd",
    key: "selectLineEnd",
    section: "Vertical motion",
    subSection: "By line boundary",
    run: (view: EditorView) => {
      selectLineEnd(view)
    },
  },
  {
    title: "selectLine",
    key: "selectLine",
    section: "Vertical motion",
    subSection: "By line boundary",
    run: (view: EditorView) => {
      selectLine(view)
    },
  },
  {
    title: "cursorDocStart",
    key: "cursorDocStart",
    section: "Vertical motion",
    subSection: "By document boundary",
    run: (view: EditorView) => {
      cursorDocStart(view)
    },
  },
  {
    title: "selectDocStart",
    key: "selectDocStart",
    section: "Vertical motion",
    subSection: "By document boundary",
    run: (view: EditorView) => {
      selectDocStart(view)
    },
  },
  {
    title: "cursorDocEnd",
    key: "cursorDocEnd",
    section: "Vertical motion",
    subSection: "By document boundary",
    run: (view: EditorView) => {
      cursorDocEnd(view)
    },
  },
  {
    title: "selectDocEnd",
    key: "selectDocEnd",
    section: "Vertical motion",
    subSection: "By document boundary",
    run: (view: EditorView) => {
      selectDocEnd(view)
    },
  },
  {
    title: "selectAll",
    key: "selectAll",
    section: "Vertical motion",
    subSection: "By document boundary",
    run: (view: EditorView) => {
      selectAll(view)
    },
  },
  {
    title: "cursorSyntaxLeft",
    key: "cursorSyntaxLeft",
    section: "Vertical motion",
    subSection: "By syntax",
    run: (view: EditorView) => {
      cursorSyntaxLeft(view)
    },
  },
  {
    title: "selectSyntaxLeft",
    key: "selectSyntaxLeft",
    section: "Vertical motion",
    subSection: "By syntax",
    run: (view: EditorView) => {
      selectSyntaxLeft(view)
    },
  },
  {
    title: "cursorSyntaxRight",
    key: "cursorSyntaxRight",
    section: "Vertical motion",
    subSection: "By syntax",
    run: (view: EditorView) => {
      cursorSyntaxRight(view)
    },
  },
  {
    title: "selectSyntaxRight",
    key: "selectSyntaxRight",
    section: "Vertical motion",
    subSection: "By syntax",
    run: (view: EditorView) => {
      selectSyntaxRight(view)
    },
  },
  {
    title: "selectParentSyntax",
    key: "selectParentSyntax",
    section: "Vertical motion",
    subSection: "By syntax",
    run: (view: EditorView) => {
      selectParentSyntax(view)
    },
  },
  {
    title: "cursorMatchingBracket",
    key: "cursorMatchingBracket",
    section: "Vertical motion",
    subSection: "By syntax",
    run: (view: EditorView) => {
      cursorMatchingBracket(view)
    },
  },
  {
    title: "selectMatchingBracket",
    key: "selectMatchingBracket",
    section: "Vertical motion",
    subSection: "By syntax",
    run: (view: EditorView) => {
      selectMatchingBracket(view)
    },
  },
  {
    title: "deleteCharBackward",
    key: "deleteCharBackward",
    section: "Deletion",
    subSection: "",
    run: (view: EditorView) => {
      deleteCharBackward(view)
    },
  },
  {
    title: "deleteCharForward",
    key: "deleteCharForward",
    section: "Deletion",
    subSection: "",
    run: (view: EditorView) => {
      deleteCharForward(view)
    },
  },
  {
    title: "deleteGroupBackward",
    key: "deleteGroupBackward",
    section: "Deletion",
    subSection: "",
    run: (view: EditorView) => {
      deleteGroupBackward(view)
    },
  },
  {
    title: "deleteGroupForward",
    key: "deleteGroupForward",
    section: "Deletion",
    subSection: "",
    run: (view: EditorView) => {
      deleteGroupForward(view)
    },
  },
  {
    title: "deleteToLineStart",
    key: "deleteToLineStart",
    section: "Deletion",
    subSection: "",
    run: (view: EditorView) => {
      deleteToLineStart(view)
    },
  },
  {
    title: "deleteToLineEnd",
    key: "deleteToLineEnd",
    section: "Deletion",
    subSection: "",
    run: (view: EditorView) => {
      deleteToLineEnd(view)
    },
  },
  {
    title: "deleteTrailingWhitespace",
    key: "deleteTrailingWhitespace",
    section: "Deletion",
    subSection: "",
    run: (view: EditorView) => {
      deleteTrailingWhitespace(view)
    },
  },
  {
    title: "splitLine",
    key: "splitLine",
    section: "Line manipulation",
    subSection: "",
    run: (view: EditorView) => {
      splitLine(view)
    },
  },
  {
    title: "moveLineUp",
    key: "moveLineUp",
    section: "Line manipulation",
    subSection: "",
    run: (view: EditorView) => {
      moveLineUp(view)
    },
  },
  {
    title: "moveLineDown",
    key: "moveLineDown",
    section: "Line manipulation",
    subSection: "",
    run: (view: EditorView) => {
      moveLineDown(view)
    },
  },
  {
    title: "copyLineUp",
    key: "copyLineUp",
    section: "Line manipulation",
    subSection: "",
    run: (view: EditorView) => {
      copyLineUp(view)
    },
  },
  {
    title: "copyLineDown",
    key: "copyLineDown",
    section: "Line manipulation",
    subSection: "",
    run: (view: EditorView) => {
      copyLineDown(view)
    },
  },
  {
    title: "deleteLine",
    key: "deleteLine",
    section: "Line manipulation",
    subSection: "",
    run: (view: EditorView) => {
      deleteLine(view)
    },
  },
  {
    title: "indentSelection",
    key: "indentSelection",
    section: "Indentation",
    subSection: "",
    run: (view: EditorView) => {
      indentSelection(view)
    },
  },
  {
    title: "indentMore",
    key: "indentMore",
    section: "Indentation",
    subSection: "",
    run: (view: EditorView) => {
      indentMore(view)
    },
  },
  {
    title: "indentLess",
    key: "indentLess",
    section: "Indentation",
    subSection: "",
    run: (view: EditorView) => {
      indentLess(view)
    },
  },
  {
    title: "insertTab",
    key: "insertTab",
    section: "Indentation",
    subSection: "",
    run: (view: EditorView) => {
      insertTab(view)
    },
  },
  {
    title: "transposeChars",
    key: "transposeChars",
    section: "Character Manipulation",
    subSection: "",
    run: (view: EditorView) => {
      transposeChars(view)
    },
  },
  {
    title: "insertNewline",
    key: "insertNewline",
    section: "Character Manipulation",
    subSection: "",
    run: (view: EditorView) => {
      insertNewline(view)
    },
  },
  {
    title: "insertNewlineAndIndent",
    key: "insertNewlineAndIndent",
    section: "Character Manipulation",
    subSection: "",
    run: (view: EditorView) => {
      insertNewlineAndIndent(view)
    },
  },
  {
    title: "insertBlankLine",
    key: "insertBlankLine",
    section: "Character Manipulation",
    subSection: "",
    run: (view: EditorView) => {
      insertBlankLine(view)
    },
  },
  {
    title: "undo",
    key: "undo",
    section: "Undo History",
    subSection: "",
    run: (view: EditorView) => {
      undo(view)
    },
  },
  {
    title: "redo",
    key: "redo",
    section: "Undo History",
    subSection: "",
    run: (view: EditorView) => {
      redo(view)
    },
  },
  {
    title: "undoSelection",
    key: "undoSelection",
    section: "Undo History",
    subSection: "",
    run: (view: EditorView) => {
      undoSelection(view)
    },
  },
  {
    title: "redoSelection",
    key: "redoSelection",
    section: "Undo History",
    subSection: "",
    run: (view: EditorView) => {
      redoSelection(view)
    },
  },
  {
    title: "toggleComment",
    key: "toggleComment",
    section: "Commenting and Uncommenting",
    subSection: "",
    run: (view: EditorView) => {
      toggleComment(view)
    },
  },
  {
    title: "toggleLineComment",
    key: "toggleLineComment",
    section: "Commenting and Uncommenting",
    subSection: "",
    run: (view: EditorView) => {
      toggleLineComment(view)
    },
  },
  {
    title: "lineComment",
    key: "lineComment",
    section: "Commenting and Uncommenting",
    subSection: "",
    run: (view: EditorView) => {
      lineComment(view)
    },
  },
  {
    title: "lineUncomment",
    key: "lineUncomment",
    section: "Commenting and Uncommenting",
    subSection: "",
    run: (view: EditorView) => {
      lineUncomment(view)
    },
  },
  {
    title: "toggleBlockComment",
    key: "toggleBlockComment",
    section: "Commenting and Uncommenting",
    subSection: "",
    run: (view: EditorView) => {
      toggleBlockComment(view)
    },
  },
  {
    title: "blockComment",
    key: "blockComment",
    section: "Commenting and Uncommenting",
    subSection: "",
    run: (view: EditorView) => {
      blockComment(view)
    },
  },
  {
    title: "blockUncomment",
    key: "blockUncomment",
    section: "Commenting and Uncommenting",
    subSection: "",
    run: (view: EditorView) => {
      blockUncomment(view)
    },
  },
  {
    title: "toggleBlockCommentByLine",
    key: "toggleBlockCommentByLine",
    section: "Commenting and Uncommenting",
    subSection: "",
    run: (view: EditorView) => {
      toggleBlockCommentByLine(view)
    },
  },
]
