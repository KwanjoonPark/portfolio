import React, { useRef, useEffect } from 'react'
import TerminalHeader from './TerminalHeader'
import TerminalOutput from './TerminalOutput'
import TerminalInput from './TerminalInput'
import { useTerminal } from '../../hooks/useTerminal'

const Terminal: React.FC = () => {
  const terminalRef = useRef<HTMLDivElement>(null)
  const {
    currentInput,
    setCurrentInput,
    terminalHistory,
    handleSubmit,
    handleKeyDown,
    getPrompt
  } = useTerminal()

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [terminalHistory])

  const handleContainerClick = () => {
    const input = document.querySelector('.terminal-input') as HTMLInputElement
    input?.focus()
  }

  return (
    <div className="terminal-container" onClick={handleContainerClick}>
      <TerminalHeader />

      <div className="terminal-body" ref={terminalRef}>
        <TerminalOutput history={terminalHistory} getPrompt={getPrompt} />

        <TerminalInput
          currentInput={currentInput}
          setCurrentInput={setCurrentInput}
          onSubmit={handleSubmit}
          onKeyDown={handleKeyDown}
          getPrompt={getPrompt}
        />
      </div>
    </div>
  )
}

export default Terminal