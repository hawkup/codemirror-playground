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
  _id: string
  title: string
  key: string
  section: string
  subSection: string
  run: (view: EditorView, args?: unknown) => void
  meta: {
    star: boolean
  }
}

export const commands: Command[] = [
  {
    _id: "1",
    title: "Insert Text",
    key: "",
    section: "",
    subSection: "",
    run: (view: EditorView, text: string = "Hello World") => {
      view.dispatch({
        changes: { from: view.state.selection.main.head, insert: text },
      })
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "2",
    title: "simplifySelection",
    key: "simplifySelection",
    section: "Selection",
    subSection: "",
    run: (view: EditorView) => {
      simplifySelection(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "3",
    title: "cursorCharLeft",
    key: "cursorCharLeft",
    section: "Selection",
    subSection: "By character",
    run: (view: EditorView) => {
      cursorCharLeft(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "4",
    title: "selectCharLeft",
    key: "selectCharLeft",
    section: "Selection",
    subSection: "By character",
    run: (view: EditorView) => {
      selectCharLeft(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "5",
    title: "cursorCharRight",
    key: "cursorCharRight",
    section: "Selection",
    subSection: "By character",
    run: (view: EditorView) => {
      cursorCharRight(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "6",
    title: "selectCharRight",
    key: "selectCharRight",
    section: "Selection",
    subSection: "By character",
    run: (view: EditorView) => {
      selectCharRight(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "7",
    title: "cursorCharForward",
    key: "cursorCharForward",
    section: "Selection",
    subSection: "By character",
    run: (view: EditorView) => {
      cursorCharForward(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "8",
    title: "selectCharForward",
    key: "selectCharForward",
    section: "Selection",
    subSection: "By character",
    run: (view: EditorView) => {
      selectCharForward(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "9",
    title: "cursorCharBackward",
    key: "cursorCharBackward",
    section: "Selection",
    subSection: "By character",
    run: (view: EditorView) => {
      cursorCharBackward(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "10",
    title: "selectCharBackward",
    key: "selectCharBackward",
    section: "Selection",
    subSection: "By character",
    run: (view: EditorView) => {
      selectCharBackward(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "11",
    title: "cursorGroupLeft",
    key: "cursorGroupLeft",
    section: "Selection",
    subSection: "By group",
    run: (view: EditorView) => {
      cursorGroupLeft(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "12",
    title: "selectGroupLeft",
    key: "selectGroupLeft",
    section: "Selection",
    subSection: "By group",
    run: (view: EditorView) => {
      selectGroupLeft(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "13",
    title: "cursorGroupRight",
    key: "cursorGroupRight",
    section: "Selection",
    subSection: "By group",
    run: (view: EditorView) => {
      cursorGroupRight(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "14",
    title: "selectGroupRight",
    key: "selectGroupRight",
    section: "Selection",
    subSection: "By group",
    run: (view: EditorView) => {
      selectGroupRight(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "15",
    title: "cursorGroupForward",
    key: "cursorGroupForward",
    section: "Selection",
    subSection: "By group",
    run: (view: EditorView) => {
      cursorGroupForward(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "16",
    title: "selectGroupForward",
    key: "selectGroupForward",
    section: "Selection",
    subSection: "By group",
    run: (view: EditorView) => {
      selectGroupForward(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "17",
    title: "cursorGroupBackward",
    key: "cursorGroupBackward",
    section: "Selection",
    subSection: "By group",
    run: (view: EditorView) => {
      cursorGroupBackward(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "18",
    title: "selectGroupBackward",
    key: "selectGroupBackward",
    section: "Selection",
    subSection: "By group",
    run: (view: EditorView) => {
      selectGroupBackward(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "19",
    title: "cursorSubwordForward",
    key: "cursorSubwordForward",
    section: "Selection",
    subSection: "By group",
    run: (view: EditorView) => {
      cursorSubwordForward(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "20",
    title: "selectSubwordForward",
    key: "selectSubwordForward",
    section: "Selection",
    subSection: "By group",
    run: (view: EditorView) => {
      selectSubwordForward(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "21",
    title: "cursorSubwordBackward",
    key: "cursorSubwordBackward",
    section: "Selection",
    subSection: "By group",
    run: (view: EditorView) => {
      cursorSubwordBackward(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "22",
    title: "selectSubwordBackward",
    key: "selectSubwordBackward",
    section: "Selection",
    subSection: "By group",
    run: (view: EditorView) => {
      selectSubwordBackward(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "23",
    title: "cursorLineUp",
    key: "cursorLineUp",
    section: "Vertical motion",
    subSection: "",
    run: (view: EditorView) => {
      cursorLineUp(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "24",
    title: "selectLineUp",
    key: "selectLineUp",
    section: "Vertical motion",
    subSection: "By line boundary",
    run: (view: EditorView) => {
      selectLineUp(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "25",
    title: "cursorLineDown",
    key: "cursorLineDown",
    section: "Vertical motion",
    subSection: "By line boundary",
    run: (view: EditorView) => {
      cursorLineDown(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "26",
    title: "selectLineDown",
    key: "selectLineDown",
    section: "Vertical motion",
    subSection: "By line boundary",
    run: (view: EditorView) => {
      selectLineDown(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "27",
    title: "cursorPageUp",
    key: "cursorPageUp",
    section: "Vertical motion",
    subSection: "By line boundary",
    run: (view: EditorView) => {
      cursorPageUp(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "28",
    title: "selectPageUp",
    key: "selectPageUp",
    section: "Vertical motion",
    subSection: "By line boundary",
    run: (view: EditorView) => {
      selectPageUp(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "29",
    title: "cursorPageDown",
    key: "cursorPageDown",
    section: "Vertical motion",
    subSection: "By line boundary",
    run: (view: EditorView) => {
      cursorPageDown(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "30",
    title: "selectPageDown",
    key: "selectPageDown",
    section: "Vertical motion",
    subSection: "By line boundary",
    run: (view: EditorView) => {
      selectPageDown(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "31",
    title: "cursorLineBoundaryForward",
    key: "cursorLineBoundaryForward",
    section: "Vertical motion",
    subSection: "By line boundary",
    run: (view: EditorView) => {
      cursorLineBoundaryForward(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "32",
    title: "selectLineBoundaryForward",
    key: "selectLineBoundaryForward",
    section: "Vertical motion",
    subSection: "By line boundary",
    run: (view: EditorView) => {
      selectLineBoundaryForward(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "33",
    title: "cursorLineBoundaryBackward",
    key: "cursorLineBoundaryBackward",
    section: "Vertical motion",
    subSection: "By line boundary",
    run: (view: EditorView) => {
      cursorLineBoundaryBackward(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "34",
    title: "selectLineBoundaryBackward",
    key: "selectLineBoundaryBackward",
    section: "Vertical motion",
    subSection: "By line boundary",
    run: (view: EditorView) => {
      selectLineBoundaryBackward(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "35",
    title: "cursorLineBoundaryLeft",
    key: "cursorLineBoundaryLeft",
    section: "Vertical motion",
    subSection: "By line boundary",
    run: (view: EditorView) => {
      cursorLineBoundaryLeft(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "36",
    title: "selectLineBoundaryLeft",
    key: "selectLineBoundaryLeft",
    section: "Vertical motion",
    subSection: "By line boundary",
    run: (view: EditorView) => {
      selectLineBoundaryLeft(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "37",
    title: "cursorLineBoundaryRight",
    key: "cursorLineBoundaryRight",
    section: "Vertical motion",
    subSection: "By line boundary",
    run: (view: EditorView) => {
      cursorLineBoundaryRight(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "38",
    title: "selectLineBoundaryRight",
    key: "selectLineBoundaryRight",
    section: "Vertical motion",
    subSection: "By line boundary",
    run: (view: EditorView) => {
      selectLineBoundaryRight(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "39",
    title: "cursorLineStart",
    key: "cursorLineStart",
    section: "Vertical motion",
    subSection: "By line boundary",
    run: (view: EditorView) => {
      cursorLineStart(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "40",
    title: "selectLineStart",
    key: "selectLineStart",
    section: "Vertical motion",
    subSection: "By line boundary",
    run: (view: EditorView) => {
      selectLineStart(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "41",
    title: "cursorLineEnd",
    key: "cursorLineEnd",
    section: "Vertical motion",
    subSection: "By line boundary",
    run: (view: EditorView) => {
      cursorLineEnd(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "42",
    title: "selectLineEnd",
    key: "selectLineEnd",
    section: "Vertical motion",
    subSection: "By line boundary",
    run: (view: EditorView) => {
      selectLineEnd(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "43",
    title: "selectLine",
    key: "selectLine",
    section: "Vertical motion",
    subSection: "By line boundary",
    run: (view: EditorView) => {
      selectLine(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "44",
    title: "cursorDocStart",
    key: "cursorDocStart",
    section: "Vertical motion",
    subSection: "By document boundary",
    run: (view: EditorView) => {
      cursorDocStart(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "45",
    title: "selectDocStart",
    key: "selectDocStart",
    section: "Vertical motion",
    subSection: "By document boundary",
    run: (view: EditorView) => {
      selectDocStart(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "46",
    title: "cursorDocEnd",
    key: "cursorDocEnd",
    section: "Vertical motion",
    subSection: "By document boundary",
    run: (view: EditorView) => {
      cursorDocEnd(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "47",
    title: "selectDocEnd",
    key: "selectDocEnd",
    section: "Vertical motion",
    subSection: "By document boundary",
    run: (view: EditorView) => {
      selectDocEnd(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "48",
    title: "selectAll",
    key: "selectAll",
    section: "Vertical motion",
    subSection: "By document boundary",
    run: (view: EditorView) => {
      selectAll(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "49",
    title: "cursorSyntaxLeft",
    key: "cursorSyntaxLeft",
    section: "Vertical motion",
    subSection: "By syntax",
    run: (view: EditorView) => {
      cursorSyntaxLeft(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "50",
    title: "selectSyntaxLeft",
    key: "selectSyntaxLeft",
    section: "Vertical motion",
    subSection: "By syntax",
    run: (view: EditorView) => {
      selectSyntaxLeft(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "51",
    title: "cursorSyntaxRight",
    key: "cursorSyntaxRight",
    section: "Vertical motion",
    subSection: "By syntax",
    run: (view: EditorView) => {
      cursorSyntaxRight(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "52",
    title: "selectSyntaxRight",
    key: "selectSyntaxRight",
    section: "Vertical motion",
    subSection: "By syntax",
    run: (view: EditorView) => {
      selectSyntaxRight(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "53",
    title: "selectParentSyntax",
    key: "selectParentSyntax",
    section: "Vertical motion",
    subSection: "By syntax",
    run: (view: EditorView) => {
      selectParentSyntax(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "54",
    title: "cursorMatchingBracket",
    key: "cursorMatchingBracket",
    section: "Vertical motion",
    subSection: "By syntax",
    run: (view: EditorView) => {
      cursorMatchingBracket(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "55",
    title: "selectMatchingBracket",
    key: "selectMatchingBracket",
    section: "Vertical motion",
    subSection: "By syntax",
    run: (view: EditorView) => {
      selectMatchingBracket(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "56",
    title: "deleteCharBackward",
    key: "deleteCharBackward",
    section: "Deletion",
    subSection: "",
    run: (view: EditorView) => {
      deleteCharBackward(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "57",
    title: "deleteCharForward",
    key: "deleteCharForward",
    section: "Deletion",
    subSection: "",
    run: (view: EditorView) => {
      deleteCharForward(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "58",
    title: "deleteGroupBackward",
    key: "deleteGroupBackward",
    section: "Deletion",
    subSection: "",
    run: (view: EditorView) => {
      deleteGroupBackward(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "59",
    title: "deleteGroupForward",
    key: "deleteGroupForward",
    section: "Deletion",
    subSection: "",
    run: (view: EditorView) => {
      deleteGroupForward(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "60",
    title: "deleteToLineStart",
    key: "deleteToLineStart",
    section: "Deletion",
    subSection: "",
    run: (view: EditorView) => {
      deleteToLineStart(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "61",
    title: "deleteToLineEnd",
    key: "deleteToLineEnd",
    section: "Deletion",
    subSection: "",
    run: (view: EditorView) => {
      deleteToLineEnd(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "62",
    title: "deleteTrailingWhitespace",
    key: "deleteTrailingWhitespace",
    section: "Deletion",
    subSection: "",
    run: (view: EditorView) => {
      deleteTrailingWhitespace(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "63",
    title: "splitLine",
    key: "splitLine",
    section: "Line manipulation",
    subSection: "",
    run: (view: EditorView) => {
      splitLine(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "64",
    title: "moveLineUp",
    key: "moveLineUp",
    section: "Line manipulation",
    subSection: "",
    run: (view: EditorView) => {
      moveLineUp(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "65",
    title: "moveLineDown",
    key: "moveLineDown",
    section: "Line manipulation",
    subSection: "",
    run: (view: EditorView) => {
      moveLineDown(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "66",
    title: "copyLineUp",
    key: "copyLineUp",
    section: "Line manipulation",
    subSection: "",
    run: (view: EditorView) => {
      copyLineUp(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "67",
    title: "copyLineDown",
    key: "copyLineDown",
    section: "Line manipulation",
    subSection: "",
    run: (view: EditorView) => {
      copyLineDown(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "68",
    title: "deleteLine",
    key: "deleteLine",
    section: "Line manipulation",
    subSection: "",
    run: (view: EditorView) => {
      deleteLine(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "69",
    title: "indentSelection",
    key: "indentSelection",
    section: "Indentation",
    subSection: "",
    run: (view: EditorView) => {
      indentSelection(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "70",
    title: "indentMore",
    key: "indentMore",
    section: "Indentation",
    subSection: "",
    run: (view: EditorView) => {
      indentMore(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "71",
    title: "indentLess",
    key: "indentLess",
    section: "Indentation",
    subSection: "",
    run: (view: EditorView) => {
      indentLess(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "72",
    title: "insertTab",
    key: "insertTab",
    section: "Indentation",
    subSection: "",
    run: (view: EditorView) => {
      insertTab(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "73",
    title: "transposeChars",
    key: "transposeChars",
    section: "Character Manipulation",
    subSection: "",
    run: (view: EditorView) => {
      transposeChars(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "74",
    title: "insertNewline",
    key: "insertNewline",
    section: "Character Manipulation",
    subSection: "",
    run: (view: EditorView) => {
      insertNewline(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "75",
    title: "insertNewlineAndIndent",
    key: "insertNewlineAndIndent",
    section: "Character Manipulation",
    subSection: "",
    run: (view: EditorView) => {
      insertNewlineAndIndent(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "76",
    title: "insertBlankLine",
    key: "insertBlankLine",
    section: "Character Manipulation",
    subSection: "",
    run: (view: EditorView) => {
      insertBlankLine(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "77",
    title: "undo",
    key: "undo",
    section: "Undo History",
    subSection: "",
    run: (view: EditorView) => {
      undo(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "78",
    title: "redo",
    key: "redo",
    section: "Undo History",
    subSection: "",
    run: (view: EditorView) => {
      redo(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "79",
    title: "undoSelection",
    key: "undoSelection",
    section: "Undo History",
    subSection: "",
    run: (view: EditorView) => {
      undoSelection(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "80",
    title: "redoSelection",
    key: "redoSelection",
    section: "Undo History",
    subSection: "",
    run: (view: EditorView) => {
      redoSelection(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "81",
    title: "toggleComment",
    key: "toggleComment",
    section: "Commenting and Uncommenting",
    subSection: "",
    run: (view: EditorView) => {
      toggleComment(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "82",
    title: "toggleLineComment",
    key: "toggleLineComment",
    section: "Commenting and Uncommenting",
    subSection: "",
    run: (view: EditorView) => {
      toggleLineComment(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "83",
    title: "lineComment",
    key: "lineComment",
    section: "Commenting and Uncommenting",
    subSection: "",
    run: (view: EditorView) => {
      lineComment(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "84",
    title: "lineUncomment",
    key: "lineUncomment",
    section: "Commenting and Uncommenting",
    subSection: "",
    run: (view: EditorView) => {
      lineUncomment(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "85",
    title: "toggleBlockComment",
    key: "toggleBlockComment",
    section: "Commenting and Uncommenting",
    subSection: "",
    run: (view: EditorView) => {
      toggleBlockComment(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "86",
    title: "blockComment",
    key: "blockComment",
    section: "Commenting and Uncommenting",
    subSection: "",
    run: (view: EditorView) => {
      blockComment(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "87",
    title: "blockUncomment",
    key: "blockUncomment",
    section: "Commenting and Uncommenting",
    subSection: "",
    run: (view: EditorView) => {
      blockUncomment(view)
    },
    meta: {
      star: false,
    },
  },
  {
    _id: "88",
    title: "toggleBlockCommentByLine",
    key: "toggleBlockCommentByLine",
    section: "Commenting and Uncommenting",
    subSection: "",
    run: (view: EditorView) => {
      toggleBlockCommentByLine(view)
    },
    meta: {
      star: false,
    },
  },
]
