import { useState, useEffect } from 'react'
import { TerminalOutput } from '../types/terminal.types'
import { executeCommand } from '../utils/commandExecutor'

export const useTerminal = () => {
  const [currentPath, setCurrentPath] = useState('/home/kwanjoon-park')
  const [currentInput, setCurrentInput] = useState('')
  const [terminalHistory, setTerminalHistory] = useState<TerminalOutput[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)

  // Initial welcome message
  useEffect(() => {
    const welcomeOutput: TerminalOutput = {
      id: 0,
      command: '',
      output: [
        'Welcome to Kwanjoon Park\'s Portfolio Terminal! 🚀',
        '',
        'Last login: ' + new Date().toLocaleString(),
        '',
        'Type "help" for available commands or "cat README.md" to get started.',
        ''
      ],
      timestamp: new Date(),
      promptPath: '/home/kwanjoon-park'
    }
    setTerminalHistory([welcomeOutput])
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!currentInput.trim()) return

    // Clear command should not add to history
    if (currentInput.trim().toLowerCase() === 'clear') {
      setTerminalHistory([])
      setCurrentInput('')
      setHistoryIndex(-1)
      return
    }

    const output = executeCommand(currentInput, currentPath, setCurrentPath)
    const newEntry: TerminalOutput = {
      id: Date.now(),
      command: currentInput,
      output,
      timestamp: new Date(),
      promptPath: currentPath
    }

    setTerminalHistory(prev => [...prev, newEntry])
    setCurrentInput('')
    setHistoryIndex(-1)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      const commands = terminalHistory.map(h => h.command).filter(cmd => cmd)
      if (commands.length > 0 && historyIndex < commands.length - 1) {
        const newIndex = historyIndex + 1
        setHistoryIndex(newIndex)
        setCurrentInput(commands[commands.length - 1 - newIndex])
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1
        setHistoryIndex(newIndex)
        const commands = terminalHistory.map(h => h.command).filter(cmd => cmd)
        setCurrentInput(commands[commands.length - 1 - newIndex])
      } else if (historyIndex === 0) {
        setHistoryIndex(-1)
        setCurrentInput('')
      }
    }
  }

  const getPrompt = (path: string = currentPath) => {
    const user = 'kwanjoon-park'
    const hostname = 'portfolio'
    const shortPath = path.replace('/home/kwanjoon-park', '~')
    return `${user}@${hostname}:${shortPath}$`
  }

  return {
    currentPath,
    currentInput,
    setCurrentInput,
    terminalHistory,
    handleSubmit,
    handleKeyDown,
    getPrompt
  }
}