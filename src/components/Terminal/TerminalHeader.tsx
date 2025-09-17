import React from 'react'

const TerminalHeader: React.FC = () => {
  return (
    <div className="terminal-header">
      <div className="terminal-buttons">
        <div className="terminal-button close"></div>
        <div className="terminal-button minimize"></div>
        <div className="terminal-button maximize"></div>
      </div>
      <span className="terminal-title">kwanjoon-park@portfolio: ~</span>
    </div>
  )
}

export default TerminalHeader