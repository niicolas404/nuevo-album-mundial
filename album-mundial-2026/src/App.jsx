import { useEffect, useMemo, useState } from 'react'
import './App.css'
import { stickers } from './data/stickers'
import AlbumSummary from './components/AlbumSummary'
import Sticker from './components/Sticker'

const STORAGE_KEY = 'album-sticker-status'

const FILTER_OPTIONS = [
  { label: 'Todas', value: 'todas' },
  { label: 'Falta', value: 'falta' },
  { label: 'Tengo', value: 'tengo' },
  { label: 'Repetidas', value: 'repetida' },
]

function App() {
  const [stickerStatus, setStickerStatus] = useState(() => {
    if (typeof window === 'undefined') {
      return Object.fromEntries(stickers.slice(0, 10).map((sticker) => [sticker.id, 'falta']))
    }

    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) {
      return Object.fromEntries(stickers.slice(0, 10).map((sticker) => [sticker.id, 'falta']))
    }

    try {
      const parsed = JSON.parse(stored)
      if (parsed && typeof parsed === 'object') {
        return Object.fromEntries(
          stickers.slice(0, 10).map((sticker) => [sticker.id, parsed[sticker.id] || 'falta'])
        )
      }
    } catch (error) {
      console.warn('No se pudo leer el estado del álbum desde localStorage', error)
    }

    return Object.fromEntries(stickers.slice(0, 10).map((sticker) => [sticker.id, 'falta']))
  })
  const [searchQuery, setSearchQuery] = useState('')
  const [filterStatus, setFilterStatus] = useState('todas')

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stickerStatus))
  }, [stickerStatus])

  const handleStatusChange = (id) => {
    setStickerStatus((previous) => {
      const next = {
        falta: 'tengo',
        tengo: 'repetida',
        repetida: 'falta',
      }
      const currentStatus = previous[id] || 'falta'
      return {
        ...previous,
        [id]: next[currentStatus],
      }
    })
  }

  const visibleStickers = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase()

    return stickers
      .slice(0, 10)
      .filter((sticker) => {
        const status = stickerStatus[sticker.id] || 'falta'

        if (filterStatus !== 'todas' && status !== filterStatus) {
          return false
        }

        if (!normalizedQuery) {
          return true
        }

        const numberMatch = String(sticker.id).includes(normalizedQuery)
        const nameMatch = sticker.name.toLowerCase().includes(normalizedQuery)
        return numberMatch || nameMatch
      })
  }, [filterStatus, searchQuery, stickerStatus])

  return (
    <main>
      <AlbumSummary stickerStatus={stickerStatus} />
      <section id="stickers">
        <h2>Figuritas (muestra)</h2>
        <div className="stickers-toolbar">
          <label className="search-field">
            Buscar por número o nombre
            <input
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Ej. Messi o 23"
            />
          </label>
          <div className="filter-buttons" role="group" aria-label="Filtros de estado">
            {FILTER_OPTIONS.map((option) => (
              <button
                key={option.value}
                type="button"
                className={`filter-button ${filterStatus === option.value ? 'active' : ''}`}
                onClick={() => setFilterStatus(option.value)}
              >
                {option.label}
              </button>
            ))}
          </div>
          <div className="visible-count">Mostrando {visibleStickers.length} figurita{visibleStickers.length === 1 ? '' : 's'}</div>
        </div>
        <div className="stickers-grid">
          {visibleStickers.map((s) => (
            <Sticker
              key={s.id}
              number={s.id}
              name={s.name}
              group={s.group || s.section || '—'}
              status={stickerStatus[s.id]}
              onClick={() => handleStatusChange(s.id)}
            />
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
