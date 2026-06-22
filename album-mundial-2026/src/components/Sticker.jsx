import React from 'react'

export default function Sticker({ number, name, group, status }) {
  const statusClass = `status-${status}`

  return (
    <div className={`sticker ${statusClass}`} role="group" aria-label={`Figurita ${number}`}>
      <div className="sticker-number">{number}</div>
      <div className="sticker-name">{name}</div>
      <div className="sticker-group">{group}</div>
    </div>
  )
}
