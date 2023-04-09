import type { Command } from "@/lib/commands"
import { createContext } from "@/lib/context"

export const COMMAND_NAME = "Command"

export type CommandContextValue = {
  selectedCommand: Command
  setSelectedCommand: React.Dispatch<React.SetStateAction<Command>>
}

const [CommandProvider, useCommand] =
  createContext<CommandContextValue>(COMMAND_NAME)

export { CommandProvider, useCommand }
