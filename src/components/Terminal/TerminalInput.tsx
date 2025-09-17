import React, { useRef, useEffect } from 'react'

interface TerminalInputProps {
  currentInput: string
  setCurrentInput: (input: string) => void
  onSubmit: (e: React.FormEvent) => void
  onKeyDown: (e: React.KeyboardEvent) => void
  getPrompt: () => string
}

const TerminalInput: React.FC<TerminalInputProps> = ({
  currentInput,
  setCurrentInput,
  onSubmit,
  onKeyDown,
  getPrompt
}) => {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <div className="terminal-input-container">
      <span className="terminal-prompt">{getPrompt()}</span>
      <form onSubmit={onSubmit}>
        <input
          ref={inputRef}
          type="text"
          value={currentInput}
          onChange={(e) => setCurrentInput(e.target.value)}
          onKeyDown={onKeyDown}
          className="terminal-input"
          spellCheck={false}
          autoComplete="off"
        />
      </form>
    </div>
  )
}

export default TerminalInput