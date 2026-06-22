import React from 'react'

export default function Sticker({ number, name, group, status, onClick }) {
  const statusClass = `status-${status}`

  return (
    <div
      className={`sticker ${statusClass}`}
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          onClick?.()
        }
      }}
      aria-label={`Figurita ${number}, ${name}, ${group}, estado ${status}`}
    >
      <div className="sticker-number">{number}</div>
      <div className="sticker-name">{name}</div>
      <div className="sticker-group">{group}</div>
      <div className="sticker-status">{status}</div>
    </div>
  )
}
