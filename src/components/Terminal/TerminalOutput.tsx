import React from 'react'
import type { TerminalOutput as TerminalOutputType } from '../../types/terminal.types'

interface TerminalOutputProps {
  history: TerminalOutputType[]
  getPrompt: (path?: string) => string
}

const TerminalOutput: React.FC<TerminalOutputProps> = ({ history, getPrompt }) => {
  return (
    <>
      {history.map((entry) => (
        <div key={entry.id} className="terminal-entry">
          {entry.command && (
            <div className="terminal-input-line">
              <span className="terminal-prompt">{getPrompt(entry.promptPath)}</span>
              <span className="terminal-command">{entry.command}</span>
            </div>
          )}
          {entry.output.map((line, index) => (
            <div key={index} className="terminal-output-line">
              {line}
            </div>
          ))}
        </div>
      ))}
    </>
  )
}

export default TerminalOutput