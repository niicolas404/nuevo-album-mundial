import React from 'react'

export default function AlbumSummary({ stickerStatus }) {
  const total = Object.keys(stickerStatus).length
  const repeated = Object.values(stickerStatus).filter((status) => status === 'repetida').length
  const missing = Object.values(stickerStatus).filter((status) => status === 'falta').length
  const completion = total === 0 ? 0 : Math.round(((total - missing) / total) * 100)

  return (
    <section className="album-summary">
      <h2>Resumen del álbum</h2>
      <div className="summary-grid">
        <div className="summary-card">
          <span className="summary-label">Total de figuritas</span>
          <strong>{total}</strong>
        </div>
        <div className="summary-card">
          <span className="summary-label">Repetidas</span>
          <strong>{repeated}</strong>
        </div>
        <div className="summary-card">
          <span className="summary-label">Faltan</span>
          <strong>{missing}</strong>
        </div>
        <div className="summary-card">
          <span className="summary-label">Completitud</span>
          <strong>{completion}%</strong>
        </div>
      </div>
    </section>
  )
}
