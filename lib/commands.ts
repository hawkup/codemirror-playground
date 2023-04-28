import type { Command as CMCommand } from "@codemirror/view"

import { customCommands } from "@/lib/custom-commands"
import { defaultCommands } from "@/lib/default-commands"
import { VimMode } from "@/lib/vim"

export type Command = {
  title: string
  method?: string
  description: string
  run: CMCommand | false
  vim?: {
    mode: VimMode
    keys: string[]
  }[]
}

export const commands: Command[] = [...defaultCommands, ...customCommands]
