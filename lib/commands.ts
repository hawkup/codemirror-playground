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
  description: string
  key: string
  section: string
  subSection: string
  run: (view: EditorView, args?: unknown) => void
}

export const commands: Command[] = [
  {
    _id: "1",
    title: "Insert Text",
    description: "",
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
    _id: "2",
    title: "Simplify Selection",
    description: "",
    key: "simplifySelection",
    section: "Selection",
    subSection: "",
    run: (view: EditorView) => {
      simplifySelection(view)
    },
  },
  {
    _id: "3",
    title: "Cursor Char Left",
    description: "",
    key: "cursorCharLeft",
    section: "Selection",
    subSection: "By character",
    run: (view: EditorView) => {
      cursorCharLeft(view)
    },
  },
  {
    _id: "4",
    title: "Select Char Left",
    description: "",
    key: "selectCharLeft",
    section: "Selection",
    subSection: "By character",
    run: (view: EditorView) => {
      selectCharLeft(view)
    },
  },
  {
    _id: "5",
    title: "Cursor Char Right",
    description: "",
    key: "cursorCharRight",
    section: "Selection",
    subSection: "By character",
    run: (view: EditorView) => {
      cursorCharRight(view)
    },
  },
  {
    _id: "6",
    title: "Select Char Right",
    description: "",
    key: "selectCharRight",
    section: "Selection",
    subSection: "By character",
    run: (view: EditorView) => {
      selectCharRight(view)
    },
  },
  {
    _id: "7",
    title: "Cursor Char Forward",
    description: "",
    key: "cursorCharForward",
    section: "Selection",
    subSection: "By character",
    run: (view: EditorView) => {
      cursorCharForward(view)
    },
  },
  {
    _id: "8",
    title: "Select Char Forward",
    description: "",
    key: "selectCharForward",
    section: "Selection",
    subSection: "By character",
    run: (view: EditorView) => {
      selectCharForward(view)
    },
  },
  {
    _id: "9",
    title: "Cursor Char Backward",
    description: "",
    key: "cursorCharBackward",
    section: "Selection",
    subSection: "By character",
    run: (view: EditorView) => {
      cursorCharBackward(view)
    },
  },
  {
    _id: "10",
    title: "Select Char Backward",
    description: "",
    key: "selectCharBackward",
    section: "Selection",
    subSection: "By character",
    run: (view: EditorView) => {
      selectCharBackward(view)
    },
  },
  {
    _id: "11",
    title: "Cursor Group Left",
    description: "",
    key: "cursorGroupLeft",
    section: "Selection",
    subSection: "By group",
    run: (view: EditorView) => {
      cursorGroupLeft(view)
    },
  },
  {
    _id: "12",
    title: "Select Group Left",
    description: "",
    key: "selectGroupLeft",
    section: "Selection",
    subSection: "By group",
    run: (view: EditorView) => {
      selectGroupLeft(view)
    },
  },
  {
    _id: "13",
    title: "Cursor Group Right",
    description: "",
    key: "cursorGroupRight",
    section: "Selection",
    subSection: "By group",
    run: (view: EditorView) => {
      cursorGroupRight(view)
    },
  },
  {
    _id: "14",
    title: "Select Group Right",
    description: "",
    key: "selectGroupRight",
    section: "Selection",
    subSection: "By group",
    run: (view: EditorView) => {
      selectGroupRight(view)
    },
  },
  {
    _id: "15",
    title: "Cursor Group Forward",
    description: "",
    key: "cursorGroupForward",
    section: "Selection",
    subSection: "By group",
    run: (view: EditorView) => {
      cursorGroupForward(view)
    },
  },
  {
    _id: "16",
    title: "Select Group Forward",
    description: "",
    key: "selectGroupForward",
    section: "Selection",
    subSection: "By group",
    run: (view: EditorView) => {
      selectGroupForward(view)
    },
  },
  {
    _id: "17",
    title: "Cursor Group Backward",
    description: "",
    key: "cursorGroupBackward",
    section: "Selection",
    subSection: "By group",
    run: (view: EditorView) => {
      cursorGroupBackward(view)
    },
  },
  {
    _id: "18",
    title: "Select Group Backward",
    description: "",
    key: "selectGroupBackward",
    section: "Selection",
    subSection: "By group",
    run: (view: EditorView) => {
      selectGroupBackward(view)
    },
  },
  {
    _id: "19",
    title: "Cursor Subword Forward",
    description: "",
    key: "cursorSubwordForward",
    section: "Selection",
    subSection: "By group",
    run: (view: EditorView) => {
      cursorSubwordForward(view)
    },
  },
  {
    _id: "20",
    title: "Select Subword Forward",
    description: "",
    key: "selectSubwordForward",
    section: "Selection",
    subSection: "By group",
    run: (view: EditorView) => {
      selectSubwordForward(view)
    },
  },
  {
    _id: "21",
    title: "Cursor Subword Backward",
    description: "",
    key: "cursorSubwordBackward",
    section: "Selection",
    subSection: "By group",
    run: (view: EditorView) => {
      cursorSubwordBackward(view)
    },
  },
  {
    _id: "22",
    title: "Select Subword Backward",
    description: "",
    key: "selectSubwordBackward",
    section: "Selection",
    subSection: "By group",
    run: (view: EditorView) => {
      selectSubwordBackward(view)
    },
  },
  {
    _id: "23",
    title: "Cursor Line Up",
    description: "",
    key: "cursorLineUp",
    section: "Vertical motion",
    subSection: "",
    run: (view: EditorView) => {
      cursorLineUp(view)
    },
  },
  {
    _id: "24",
    title: "Select Line Up",
    description: "",
    key: "selectLineUp",
    section: "Vertical motion",
    subSection: "By line boundary",
    run: (view: EditorView) => {
      selectLineUp(view)
    },
  },
  {
    _id: "25",
    title: "Cursor Line Down",
    description: "",
    key: "cursorLineDown",
    section: "Vertical motion",
    subSection: "By line boundary",
    run: (view: EditorView) => {
      cursorLineDown(view)
    },
  },
  {
    _id: "26",
    title: "Select Line Down",
    description: "",
    key: "selectLineDown",
    section: "Vertical motion",
    subSection: "By line boundary",
    run: (view: EditorView) => {
      selectLineDown(view)
    },
  },
  {
    _id: "27",
    title: "Cursor Page Up",
    description: "",
    key: "cursorPageUp",
    section: "Vertical motion",
    subSection: "By line boundary",
    run: (view: EditorView) => {
      cursorPageUp(view)
    },
  },
  {
    _id: "28",
    title: "Select Page Up",
    description: "",
    key: "selectPageUp",
    section: "Vertical motion",
    subSection: "By line boundary",
    run: (view: EditorView) => {
      selectPageUp(view)
    },
  },
  {
    _id: "29",
    title: "Cursor Page Down",
    description: "",
    key: "cursorPageDown",
    section: "Vertical motion",
    subSection: "By line boundary",
    run: (view: EditorView) => {
      cursorPageDown(view)
    },
  },
  {
    _id: "30",
    title: "Select Page Down",
    description: "",
    key: "selectPageDown",
    section: "Vertical motion",
    subSection: "By line boundary",
    run: (view: EditorView) => {
      selectPageDown(view)
    },
  },
  {
    _id: "31",
    title: "Cursor Line Boundary Forward",
    description: "",
    key: "cursorLineBoundaryForward",
    section: "Vertical motion",
    subSection: "By line boundary",
    run: (view: EditorView) => {
      cursorLineBoundaryForward(view)
    },
  },
  {
    _id: "32",
    title: "Select Line Boundary Forward",
    description: "",
    key: "selectLineBoundaryForward",
    section: "Vertical motion",
    subSection: "By line boundary",
    run: (view: EditorView) => {
      selectLineBoundaryForward(view)
    },
  },
  {
    _id: "33",
    title: "Cursor Line Boundary Backward",
    description: "",
    key: "cursorLineBoundaryBackward",
    section: "Vertical motion",
    subSection: "By line boundary",
    run: (view: EditorView) => {
      cursorLineBoundaryBackward(view)
    },
  },
  {
    _id: "34",
    title: "Select Line Boundary Backward",
    description: "",
    key: "selectLineBoundaryBackward",
    section: "Vertical motion",
    subSection: "By line boundary",
    run: (view: EditorView) => {
      selectLineBoundaryBackward(view)
    },
  },
  {
    _id: "35",
    title: "Cursor Line Boundary Left",
    description: "",
    key: "cursorLineBoundaryLeft",
    section: "Vertical motion",
    subSection: "By line boundary",
    run: (view: EditorView) => {
      cursorLineBoundaryLeft(view)
    },
  },
  {
    _id: "36",
    title: "Select Line Boundary Left",
    description: "",
    key: "selectLineBoundaryLeft",
    section: "Vertical motion",
    subSection: "By line boundary",
    run: (view: EditorView) => {
      selectLineBoundaryLeft(view)
    },
  },
  {
    _id: "37",
    title: "Cursor Line Boundary Right",
    description: "",
    key: "cursorLineBoundaryRight",
    section: "Vertical motion",
    subSection: "By line boundary",
    run: (view: EditorView) => {
      cursorLineBoundaryRight(view)
    },
  },
  {
    _id: "38",
    title: "Select Line Boundary Right",
    description: "",
    key: "selectLineBoundaryRight",
    section: "Vertical motion",
    subSection: "By line boundary",
    run: (view: EditorView) => {
      selectLineBoundaryRight(view)
    },
  },
  {
    _id: "39",
    title: "Cursor Line Start",
    description: "",
    key: "cursorLineStart",
    section: "Vertical motion",
    subSection: "By line boundary",
    run: (view: EditorView) => {
      cursorLineStart(view)
    },
  },
  {
    _id: "40",
    title: "Select Line Start",
    description: "",
    key: "selectLineStart",
    section: "Vertical motion",
    subSection: "By line boundary",
    run: (view: EditorView) => {
      selectLineStart(view)
    },
  },
  {
    _id: "41",
    title: "Cursor Line End",
    description: "",
    key: "cursorLineEnd",
    section: "Vertical motion",
    subSection: "By line boundary",
    run: (view: EditorView) => {
      cursorLineEnd(view)
    },
  },
  {
    _id: "42",
    title: "Select Line End",
    description: "",
    key: "selectLineEnd",
    section: "Vertical motion",
    subSection: "By line boundary",
    run: (view: EditorView) => {
      selectLineEnd(view)
    },
  },
  {
    _id: "43",
    title: "Select Line",
    description: "",
    key: "selectLine",
    section: "Vertical motion",
    subSection: "By line boundary",
    run: (view: EditorView) => {
      selectLine(view)
    },
  },
  {
    _id: "44",
    title: "Cursor Doc Start",
    description: "",
    key: "cursorDocStart",
    section: "Vertical motion",
    subSection: "By document boundary",
    run: (view: EditorView) => {
      cursorDocStart(view)
    },
  },
  {
    _id: "45",
    title: "Select Doc Start",
    description: "",
    key: "selectDocStart",
    section: "Vertical motion",
    subSection: "By document boundary",
    run: (view: EditorView) => {
      selectDocStart(view)
    },
  },
  {
    _id: "46",
    title: "Cursor Doc End",
    description: "",
    key: "cursorDocEnd",
    section: "Vertical motion",
    subSection: "By document boundary",
    run: (view: EditorView) => {
      cursorDocEnd(view)
    },
  },
  {
    _id: "47",
    title: "Select Doc End",
    description: "",
    key: "selectDocEnd",
    section: "Vertical motion",
    subSection: "By document boundary",
    run: (view: EditorView) => {
      selectDocEnd(view)
    },
  },
  {
    _id: "48",
    title: "Select All",
    description: "",
    key: "selectAll",
    section: "Vertical motion",
    subSection: "By document boundary",
    run: (view: EditorView) => {
      selectAll(view)
    },
  },
  {
    _id: "49",
    title: "Cursor Syntax Left",
    description: "",
    key: "cursorSyntaxLeft",
    section: "Vertical motion",
    subSection: "By syntax",
    run: (view: EditorView) => {
      cursorSyntaxLeft(view)
    },
  },
  {
    _id: "50",
    title: "Select Syntax Left",
    description: "",
    key: "selectSyntaxLeft",
    section: "Vertical motion",
    subSection: "By syntax",
    run: (view: EditorView) => {
      selectSyntaxLeft(view)
    },
  },
  {
    _id: "51",
    title: "Cursor Syntax Right",
    description: "",
    key: "cursorSyntaxRight",
    section: "Vertical motion",
    subSection: "By syntax",
    run: (view: EditorView) => {
      cursorSyntaxRight(view)
    },
  },
  {
    _id: "52",
    title: "Select Syntax Right",
    description: "",
    key: "selectSyntaxRight",
    section: "Vertical motion",
    subSection: "By syntax",
    run: (view: EditorView) => {
      selectSyntaxRight(view)
    },
  },
  {
    _id: "53",
    title: "Select Parent Syntax",
    description: "",
    key: "selectParentSyntax",
    section: "Vertical motion",
    subSection: "By syntax",
    run: (view: EditorView) => {
      selectParentSyntax(view)
    },
  },
  {
    _id: "54",
    title: "Cursor Matching Bracket",
    description: "",
    key: "cursorMatchingBracket",
    section: "Vertical motion",
    subSection: "By syntax",
    run: (view: EditorView) => {
      cursorMatchingBracket(view)
    },
  },
  {
    _id: "55",
    title: "Select Matching Bracket",
    description: "",
    key: "selectMatchingBracket",
    section: "Vertical motion",
    subSection: "By syntax",
    run: (view: EditorView) => {
      selectMatchingBracket(view)
    },
  },
  {
    _id: "56",
    title: "Delete Char Backward",
    description: "",
    key: "deleteCharBackward",
    section: "Deletion",
    subSection: "",
    run: (view: EditorView) => {
      deleteCharBackward(view)
    },
  },
  {
    _id: "57",
    title: "Delete Char Forward",
    description: "",
    key: "deleteCharForward",
    section: "Deletion",
    subSection: "",
    run: (view: EditorView) => {
      deleteCharForward(view)
    },
  },
  {
    _id: "58",
    title: "Delete Group Backward",
    description: "",
    key: "deleteGroupBackward",
    section: "Deletion",
    subSection: "",
    run: (view: EditorView) => {
      deleteGroupBackward(view)
    },
  },
  {
    _id: "59",
    title: "Delete Group Forward",
    description: "",
    key: "deleteGroupForward",
    section: "Deletion",
    subSection: "",
    run: (view: EditorView) => {
      deleteGroupForward(view)
    },
  },
  {
    _id: "60",
    title: "Delete To Line Start",
    description: "",
    key: "deleteToLineStart",
    section: "Deletion",
    subSection: "",
    run: (view: EditorView) => {
      deleteToLineStart(view)
    },
  },
  {
    _id: "61",
    title: "Delete To Line End",
    description: "",
    key: "deleteToLineEnd",
    section: "Deletion",
    subSection: "",
    run: (view: EditorView) => {
      deleteToLineEnd(view)
    },
  },
  {
    _id: "62",
    title: "Delete Trailing Whitespace",
    description: "",
    key: "deleteTrailingWhitespace",
    section: "Deletion",
    subSection: "",
    run: (view: EditorView) => {
      deleteTrailingWhitespace(view)
    },
  },
  {
    _id: "63",
    title: "Split Line",
    description: "",
    key: "splitLine",
    section: "Line manipulation",
    subSection: "",
    run: (view: EditorView) => {
      splitLine(view)
    },
  },
  {
    _id: "64",
    title: "Move Line Up",
    description: "",
    key: "moveLineUp",
    section: "Line manipulation",
    subSection: "",
    run: (view: EditorView) => {
      moveLineUp(view)
    },
  },
  {
    _id: "65",
    title: "Move Line Down",
    description: "",
    key: "moveLineDown",
    section: "Line manipulation",
    subSection: "",
    run: (view: EditorView) => {
      moveLineDown(view)
    },
  },
  {
    _id: "66",
    title: "copyLineUp",
    description: "",
    key: "copyLineUp",
    section: "Line manipulation",
    subSection: "",
    run: (view: EditorView) => {
      copyLineUp(view)
    },
  },
  {
    _id: "67",
    title: "Copy Line Down",
    description: "",
    key: "copyLineDown",
    section: "Line manipulation",
    subSection: "",
    run: (view: EditorView) => {
      copyLineDown(view)
    },
  },
  {
    _id: "68",
    title: "Delete Line",
    description: "",
    key: "deleteLine",
    section: "Line manipulation",
    subSection: "",
    run: (view: EditorView) => {
      deleteLine(view)
    },
  },
  {
    _id: "69",
    title: "Indent Selection",
    description: "",
    key: "indentSelection",
    section: "Indentation",
    subSection: "",
    run: (view: EditorView) => {
      indentSelection(view)
    },
  },
  {
    _id: "70",
    title: "Indent More",
    description: "",
    key: "indentMore",
    section: "Indentation",
    subSection: "",
    run: (view: EditorView) => {
      indentMore(view)
    },
  },
  {
    _id: "71",
    title: "Indent Less",
    description: "",
    key: "indentLess",
    section: "Indentation",
    subSection: "",
    run: (view: EditorView) => {
      indentLess(view)
    },
  },
  {
    _id: "72",
    title: "Insert Tab",
    description: "",
    key: "insertTab",
    section: "Indentation",
    subSection: "",
    run: (view: EditorView) => {
      insertTab(view)
    },
  },
  {
    _id: "73",
    title: "Transpose Chars",
    description: "",
    key: "transposeChars",
    section: "Character Manipulation",
    subSection: "",
    run: (view: EditorView) => {
      transposeChars(view)
    },
  },
  {
    _id: "74",
    title: "Insert Newline",
    description: "",
    key: "insertNewline",
    section: "Character Manipulation",
    subSection: "",
    run: (view: EditorView) => {
      insertNewline(view)
    },
  },
  {
    _id: "75",
    title: "Insert Newline And Indent",
    description: "",
    key: "insertNewlineAndIndent",
    section: "Character Manipulation",
    subSection: "",
    run: (view: EditorView) => {
      insertNewlineAndIndent(view)
    },
  },
  {
    _id: "76",
    title: "Insert BlankLine",
    description: "",
    key: "insertBlankLine",
    section: "Character Manipulation",
    subSection: "",
    run: (view: EditorView) => {
      insertBlankLine(view)
    },
  },
  {
    _id: "77",
    title: "Undo",
    description: "",
    key: "undo",
    section: "Undo History",
    subSection: "",
    run: (view: EditorView) => {
      undo(view)
    },
  },
  {
    _id: "78",
    title: "Redo",
    description: "",
    key: "redo",
    section: "Undo History",
    subSection: "",
    run: (view: EditorView) => {
      redo(view)
    },
  },
  {
    _id: "79",
    title: "Undo Selection",
    description: "",
    key: "undoSelection",
    section: "Undo History",
    subSection: "",
    run: (view: EditorView) => {
      undoSelection(view)
    },
  },
  {
    _id: "80",
    title: "Redo Selection",
    description: "",
    key: "redoSelection",
    section: "Undo History",
    subSection: "",
    run: (view: EditorView) => {
      redoSelection(view)
    },
  },
  {
    _id: "81",
    title: "Toggle Comment",
    description: "",
    key: "toggleComment",
    section: "Commenting and Uncommenting",
    subSection: "",
    run: (view: EditorView) => {
      toggleComment(view)
    },
  },
  {
    _id: "82",
    title: "Toggle Line Comment",
    description: "",
    key: "toggleLineComment",
    section: "Commenting and Uncommenting",
    subSection: "",
    run: (view: EditorView) => {
      toggleLineComment(view)
    },
  },
  {
    _id: "83",
    title: "Line Comment",
    description: "",
    key: "lineComment",
    section: "Commenting and Uncommenting",
    subSection: "",
    run: (view: EditorView) => {
      lineComment(view)
    },
  },
  {
    _id: "84",
    title: "Line Uncomment",
    description: "",
    key: "lineUncomment",
    section: "Commenting and Uncommenting",
    subSection: "",
    run: (view: EditorView) => {
      lineUncomment(view)
    },
  },
  {
    _id: "85",
    title: "Toggle Block Comment",
    description: "",
    key: "toggleBlockComment",
    section: "Commenting and Uncommenting",
    subSection: "",
    run: (view: EditorView) => {
      toggleBlockComment(view)
    },
  },
  {
    _id: "86",
    title: "Block Comment",
    description: "",
    key: "blockComment",
    section: "Commenting and Uncommenting",
    subSection: "",
    run: (view: EditorView) => {
      blockComment(view)
    },
  },
  {
    _id: "87",
    title: "Block Uncomment",
    description: "",
    key: "blockUncomment",
    section: "Commenting and Uncommenting",
    subSection: "",
    run: (view: EditorView) => {
      blockUncomment(view)
    },
  },
  {
    _id: "88",
    title: "Toggle Block Comment By Line",
    description: "",
    key: "toggleBlockCommentByLine",
    section: "Commenting and Uncommenting",
    subSection: "",
    run: (view: EditorView) => {
      toggleBlockCommentByLine(view)
    },
  },
]
