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
import type { Command as CMCommand, EditorView } from "@codemirror/view"

import { vimCompartment, vimConfig } from "@/lib/vim"

type VimMode = "Normal" | "Insert" | "Visual" | "Visual Block" | "Visual Line"

export type Command = {
  title: string
  method?: string
  description: string
  run: CMCommand | false
  categories?: string[]
  vim?: {
    mode: VimMode
    keys: string[]
  }[]
}

export const defaultCommands: Command[] = [
  {
    title: "Simplify Selection",
    method: "simplifySelection: StateCommand",
    description:
      "Simplify the current selection. When multiple ranges are selected, reduce it to its main range. Otherwise, if the selection is non-empty, convert it to a cursor selection.",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return simplifySelection(view)
    },
  },
  {
    title: "Cursor Char Left",
    method: "cursorCharLeft: Command",
    description:
      "Move the selection one character to the left (which is backward in left-to-right text, forward in right-to-left text).",
    categories: ["@codemirror/commands", "vim"],
    run: (view: EditorView) => {
      return cursorCharLeft(view)
    },
    vim: [
      {
        mode: "Normal",
        keys: ["h"],
      },
    ],
  },
  {
    title: "Select Char Left",
    method: "selectCharLeft: Command",
    description:
      "Move the selection head one character to the left, while leaving the anchor in place.",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return selectCharLeft(view)
    },
  },
  {
    title: "Cursor Char Right",
    method: "cursorCharRight: Command",
    description: "Move the selection one character to the right.",
    categories: ["@codemirror/commands", "vim"],
    run: (view: EditorView) => {
      return cursorCharRight(view)
    },
    vim: [
      {
        mode: "Normal",
        keys: ["l"],
      },
    ],
  },
  {
    title: "Select Char Right",
    method: "selectCharRight: Command",
    description: "Move the selection head one character to the right.",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return selectCharRight(view)
    },
  },
  {
    title: "Cursor Char Forward",
    method: "cursorCharForward: Command",
    description: "Move the selection one character forward.",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return cursorCharForward(view)
    },
  },
  {
    title: "Select Char Forward",
    method: "selectCharForward: Command",
    description: "Move the selection head one character forward.",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return selectCharForward(view)
    },
  },
  {
    title: "Cursor Char Backward",
    method: "cursorCharBackward: Command",
    description: "Move the selection one character backward.",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return cursorCharBackward(view)
    },
  },
  {
    title: "Select Char Backward",
    method: "selectCharBackward: Command",
    description: "Move the selection head one character backward.",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return selectCharBackward(view)
    },
  },
  {
    title: "Cursor Group Left",
    method: "cursorGroupLeft: Command",
    description:
      "Move the selection to the left across one group of word or non-word (but also non-space) characters.",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return cursorGroupLeft(view)
    },
  },
  {
    title: "Select Group Left",
    method: "selectGroupLeft: Command",
    description: "Move the selection head one group to the left.",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return selectGroupLeft(view)
    },
  },
  {
    title: "Cursor Group Right",
    method: "cursorGroupRight: Command",
    description: "Move the selection one group to the right.",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return cursorGroupRight(view)
    },
  },
  {
    title: "Select Group Right",
    method: "selectGroupRight: Command",
    description: "Move the selection head one group to the right.",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return selectGroupRight(view)
    },
  },
  {
    title: "Cursor Group Forward",
    method: "cursorGroupForward: Command",
    description: "Move the selection one group forward.",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return cursorGroupForward(view)
    },
  },
  {
    title: "Select Group Forward",
    method: "selectGroupForward: Command",
    description: "Move the selection head one group forward.",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return selectGroupForward(view)
    },
  },
  {
    title: "Cursor Group Backward",
    method: "cursorGroupBackward: Command",
    description: "Move the selection one group backward.",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return cursorGroupBackward(view)
    },
  },
  {
    title: "Select Group Backward",
    method: "selectGroupBackward: Command",
    description: "Move the selection head one group backward.",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return selectGroupBackward(view)
    },
  },
  {
    title: "Cursor Subword Forward",
    method: "cursorSubwordForward: Command",
    description: "Move the selection one group or camel-case subword forward.",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return cursorSubwordForward(view)
    },
  },
  {
    title: "Select Subword Forward",
    method: "selectSubwordForward: Command",
    description:
      "Move the selection head one group or camel-case subword forward.",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return selectSubwordForward(view)
    },
  },
  {
    title: "Cursor Subword Backward",
    method: "cursorSubwordBackward: Command",
    description: "Move the selection one group or camel-case subword backward.",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return cursorSubwordBackward(view)
    },
  },
  {
    title: "Select Subword Backward",
    method: "selectSubwordBackward: Command",
    description: "Move the selection head one group or subword backward.",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return selectSubwordBackward(view)
    },
  },
  {
    title: "Cursor Line Up",
    method: "cursorLineUp: Command",
    description: "Move the selection one line up.",
    categories: ["@codemirror/commands", "vim"],
    run: (view: EditorView) => {
      return cursorLineUp(view)
    },
    vim: [
      {
        mode: "Normal",
        keys: ["k"],
      },
    ],
  },
  {
    title: "Select Line Up",
    method: "selectLineUp: Command",
    description: "Move the selection head one line up.",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return selectLineUp(view)
    },
  },
  {
    title: "Cursor Line Down",
    method: "cursorLineDown: Command",
    description: "Move the selection one line down.",
    categories: ["@codemirror/commands", "vim"],
    run: (view: EditorView) => {
      return cursorLineDown(view)
    },
    vim: [
      {
        mode: "Normal",
        keys: ["j"],
      },
    ],
  },
  {
    title: "Select Line Down",
    method: "selectLineDown: Command",
    description: "Move the selection head one line down.",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return selectLineDown(view)
    },
  },
  {
    title: "Cursor Page Up",
    method: "cursorPageUp: Command",
    description: "Move the selection one page up.",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return cursorPageUp(view)
    },
  },
  {
    title: "Select Page Up",
    method: "selectPageUp: Command",
    description: "Move the selection head one page up.",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return selectPageUp(view)
    },
  },
  {
    title: "Cursor Page Down",
    method: "cursorPageDown: Command",
    description: "Move the selection one page down.",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return cursorPageDown(view)
    },
  },
  {
    title: "Select Page Down",
    method: "selectPageDown: Command",
    description: "Move the selection head one page down.",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return selectPageDown(view)
    },
  },
  {
    title: "Cursor Line Boundary Forward",
    method: "cursorLineBoundaryForward: Command",
    description:
      "Move the selection to the next line wrap point, or to the end of the line if there isn't one left on this line.",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return cursorLineBoundaryForward(view)
    },
  },
  {
    title: "Select Line Boundary Forward",
    method: "selectLineBoundaryForward: Command",
    description: "Move the selection head to the next line boundary.",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return selectLineBoundaryForward(view)
    },
  },
  {
    title: "Cursor Line Boundary Backward",
    method: "cursorLineBoundaryBackward: Command",
    description:
      "Move the selection to previous line wrap point, or failing that to the start of the line. If the line is indented, and the cursor isn't already at the end of the indentation, this will move to the end of the indentation instead of the start of the line.",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return cursorLineBoundaryBackward(view)
    },
  },
  {
    title: "Select Line Boundary Backward",
    method: "selectLineBoundaryBackward: Command",
    description: "Move the selection head to the previous line boundary.",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return selectLineBoundaryBackward(view)
    },
  },
  {
    title: "Cursor Line Boundary Left",
    method: "cursorLineBoundaryLeft: Command",
    description: "Move the selection one line wrap point to the left.",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return cursorLineBoundaryLeft(view)
    },
  },
  {
    title: "Select Line Boundary Left",
    method: "selectLineBoundaryLeft: Command",
    description: "Move the selection head one line boundary to the left.",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return selectLineBoundaryLeft(view)
    },
  },
  {
    title: "Cursor Line Boundary Right",
    method: "cursorLineBoundaryRight: Command",
    description: "Move the selection one line wrap point to the right.",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return cursorLineBoundaryRight(view)
    },
  },
  {
    title: "Select Line Boundary Right",
    method: "selectLineBoundaryRight: Command",
    description: "Move the selection head one line boundary to the right.",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return selectLineBoundaryRight(view)
    },
  },
  {
    title: "Cursor Line Start",
    method: "cursorLineStart: Command",
    description: "Move the selection to the start of the line.",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return cursorLineStart(view)
    },
  },
  {
    title: "Select Line Start",
    method: "selectLineStart: Command",
    description: "Move the selection head to the start of the line.",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return selectLineStart(view)
    },
  },
  {
    title: "Cursor Line End",
    method: "cursorLineEnd: Command",
    description: "Move the selection to the end of the line.",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return cursorLineEnd(view)
    },
  },
  {
    title: "Select Line End",
    method: "selectLineEnd: Command",
    description: "Move the selection head to the end of the line.",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return selectLineEnd(view)
    },
  },
  {
    title: "Select Line",
    method: "selectLine: StateCommand",
    description: "Expand the selection to cover entire lines.",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return selectLine(view)
    },
  },
  {
    title: "Cursor Doc Start",
    method: "cursorDocStart: StateCommand",
    description: "Move the selection to the start of the document.",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return cursorDocStart(view)
    },
  },
  {
    title: "Select Doc Start",
    method: "selectDocStart: StateCommand",
    description: "Move the selection head to the start of the document.",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return selectDocStart(view)
    },
  },
  {
    title: "Cursor Doc End",
    method: "cursorDocEnd: StateCommand",
    description: "Move the selection to the end of the document.",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return cursorDocEnd(view)
    },
  },
  {
    title: "Select Doc End",
    method: "selectDocEnd: StateCommand",
    description: "Move the selection head to the end of the document.",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return selectDocEnd(view)
    },
  },
  {
    title: "Select All",
    method: "selectAll: StateCommand",
    description: "Select the entire document.",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return selectAll(view)
    },
  },
  {
    title: "Cursor Syntax Left",
    method: "cursorSyntaxLeft: Command",
    description: "Move the cursor over the next syntactic element to the left.",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return cursorSyntaxLeft(view)
    },
  },
  {
    title: "Select Syntax Left",
    method: "selectSyntaxLeft: Command",
    description:
      "Move the selection head over the next syntactic element to the left.",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return selectSyntaxLeft(view)
    },
  },
  {
    title: "Cursor Syntax Right",
    method: "cursorSyntaxRight: Command",
    description:
      "Move the cursor over the next syntactic element to the right.",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return cursorSyntaxRight(view)
    },
  },
  {
    title: "Select Syntax Right",
    method: "selectSyntaxRight: Command",
    description:
      "Move the selection head over the next syntactic element to the right.",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return selectSyntaxRight(view)
    },
  },
  {
    title: "Select Parent Syntax",
    method: "selectParentSyntax: StateCommand",
    description:
      "Select the next syntactic construct that is larger than the selection. Note that this will only work insofar as the language provider you use builds up a full syntax tree.",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return selectParentSyntax(view)
    },
  },
  {
    title: "Cursor Matching Bracket",
    method: "cursorMatchingBracket: StateCommand",
    description:
      "Move the selection to the bracket matching the one it is currently on, if any.",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return cursorMatchingBracket(view)
    },
  },
  {
    title: "Select Matching Bracket",
    method: "selectMatchingBracket: StateCommand",
    description:
      "Extend the selection to the bracket matching the one the selection head is currently on, if any.",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return selectMatchingBracket(view)
    },
  },
  {
    title: "Delete Char Backward",
    method: "deleteCharBackward: Command",
    description:
      "Delete the selection, or, for cursor selections, the character before the cursor.",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return deleteCharBackward(view)
    },
  },
  {
    title: "Delete Char Forward",
    method: "deleteCharForward: Command",
    description: "Delete the selection or the character after the cursor.",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return deleteCharForward(view)
    },
  },
  {
    title: "Delete Group Backward",
    method: "deleteGroupBackward: StateCommand",
    description:
      "Delete the selection or backward until the end of the next group, only skipping groups of whitespace when they consist of a single space.",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return deleteGroupBackward(view)
    },
  },
  {
    title: "Delete Group Forward",
    method: "deleteGroupForward: StateCommand",
    description:
      "Delete the selection or forward until the end of the next group.",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return deleteGroupForward(view)
    },
  },
  {
    title: "Delete To Line Start",
    method: "deleteToLineStart: Command",
    description:
      "Delete the selection, or, if it is a cursor selection, delete to the start of the line. If the cursor is directly at the start of the line, delete the line break before it.",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return deleteToLineStart(view)
    },
  },
  {
    title: "Delete To Line End",
    method: "deleteToLineEnd: Command",
    description:
      "Delete the selection, or, if it is a cursor selection, delete to the end of the line. If the cursor is directly at the end of the line, delete the line break after it.",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return deleteToLineEnd(view)
    },
  },
  {
    title: "Delete Trailing Whitespace",
    method: "deleteTrailingWhitespace: StateCommand",
    description:
      "Delete all whitespace directly before a line end from the document.",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return deleteTrailingWhitespace(view)
    },
  },
  {
    title: "Split Line",
    method: "splitLine: StateCommand",
    description:
      "Replace each selection range with a line break, leaving the cursor on the line before the break.",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return splitLine(view)
    },
  },
  {
    title: "Move Line Up",
    method: "moveLineUp: StateCommand",
    description: "Move the selected lines up one line.",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return moveLineUp(view)
    },
  },
  {
    title: "Move Line Down",
    method: "moveLineDown: StateCommand",
    description: "Move the selected lines down one line.",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return moveLineDown(view)
    },
  },
  {
    title: "copyLineUp",
    method: "copyLineUp: StateCommand",
    description:
      "Create a copy of the selected lines. Keep the selection in the top copy.",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return copyLineUp(view)
    },
  },
  {
    title: "Copy Line Down",
    method: "copyLineDown: StateCommand",
    description:
      "Create a copy of the selected lines. Keep the selection in the bottom copy.",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return copyLineDown(view)
    },
  },
  {
    title: "Delete Line",
    method: "deleteLine: Command",
    description: "Delete selected lines.",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return deleteLine(view)
    },
  },
  {
    title: "Indent Selection",
    method: "indentSelection: StateCommand",
    description:
      "Auto-indent the selected lines. This uses the indentation service facet as source for auto-indent information.",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return indentSelection(view)
    },
  },
  {
    title: "Indent More",
    method: "indentMore: StateCommand",
    description: "Add a unit of indentation to all selected lines.",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return indentMore(view)
    },
  },
  {
    title: "Indent Less",
    method: "indentLess: StateCommand",
    description: "Remove a unit of indentation from all selected lines.",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return indentLess(view)
    },
  },
  {
    title: "Insert Tab",
    method: "insertTab: StateCommand",
    description:
      "Insert a tab character at the cursor or, if something is selected, use indentMore to indent the entire selection.",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return insertTab(view)
    },
  },
  {
    title: "Transpose Chars",
    method: "transposeChars: StateCommand",
    description: "Flip the characters before and after the cursor(s).",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return transposeChars(view)
    },
  },
  {
    title: "Insert Newline",
    method: "insertNewline: StateCommand",
    description: "Replace the selection with a newline.",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return insertNewline(view)
    },
  },
  {
    title: "Insert Newline And Indent",
    method: "insertNewlineAndIndent: StateCommand",
    description:
      "Replace the selection with a newline and indent the newly created line(s). If the current line consists only of whitespace, this will also delete that whitespace. When the cursor is between matching brackets, an additional newline will be inserted after the cursor.",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return insertNewlineAndIndent(view)
    },
  },
  {
    title: "Insert BlankLine",
    method: "insertBlankLine: StateCommand",
    description: "Create a blank, indented line below the current line.",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return insertBlankLine(view)
    },
  },
  {
    title: "Undo",
    method: "undo: StateCommand",
    description:
      "Undo a single group of history events. Returns false if no group was available.",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return undo(view)
    },
  },
  {
    title: "Redo",
    method: "redo: StateCommand",
    description:
      "Redo a group of history events. Returns false if no group was available.",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return redo(view)
    },
  },
  {
    title: "Undo Selection",
    method: "undoSelection: StateCommand",
    description: "Undo a change or selection change.",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return undoSelection(view)
    },
  },
  {
    title: "Redo Selection",
    method: "redoSelection: StateCommand",
    description: "Redo a change or selection change.",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return redoSelection(view)
    },
  },
  {
    title: "Toggle Comment",
    method: "toggleComment: StateCommand",
    description:
      "Comment or uncomment the current selection. Will use line comments if available, otherwise falling back to block comments.",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return toggleComment(view)
    },
  },
  {
    title: "Toggle Line Comment",
    method: "toggleLineComment: StateCommand",
    description:
      "Comment or uncomment the current selection using line comments. The line comment syntax is taken from the commentTokens language data.",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return toggleLineComment(view)
    },
  },
  {
    title: "Line Comment",
    method: "lineComment: StateCommand",
    description: "Comment the current selection using line comments.",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return lineComment(view)
    },
  },
  {
    title: "Line Uncomment",
    method: "lineUncomment: StateCommand",
    description: "Uncomment the current selection using line comments.",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return lineUncomment(view)
    },
  },
  {
    title: "Toggle Block Comment",
    method: "toggleBlockComment: StateCommand",
    description:
      "Comment or uncomment the current selection using block comments. The block comment syntax is taken from the commentTokens language data.",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return toggleBlockComment(view)
    },
  },
  {
    title: "Block Comment",
    method: "blockComment: StateCommand",
    description: "Comment the current selection using block comments.",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return blockComment(view)
    },
  },
  {
    title: "Block Uncomment",
    method: "blockUncomment: StateCommand",
    description: "Uncomment the current selection using block comments.",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return blockUncomment(view)
    },
  },
  {
    title: "Toggle Block Comment By Line",
    method: "toggleBlockCommentByLine: StateCommand",
    description:
      "Comment or uncomment the lines around the current selection using block comments.",
    categories: ["@codemirror/commands"],
    run: (view: EditorView) => {
      return toggleBlockCommentByLine(view)
    },
  },
]
