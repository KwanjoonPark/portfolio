export interface TerminalOutput {
  id: number
  command: string
  output: string[]
  timestamp: Date
  promptPath: string
}

export interface FileSystemItem {
  type: 'file' | 'directory'
  content?: string
  contents?: string[]
}

export interface FileSystem {
  [path: string]: FileSystemItem
}

export interface TerminalState {
  currentPath: string
  currentInput: string
  terminalHistory: TerminalOutput[]
  historyIndex: number
}

export type CommandExecutor = (cmd: string, currentPath: string, setCurrentPath: (path: string) => void) => string[]