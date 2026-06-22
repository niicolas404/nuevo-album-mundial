import { useState } from 'react'
import './App.css'
import { stickers } from './data/stickers'
import Sticker from './components/Sticker'

function App() {
  const [stickerStatus, setStickerStatus] = useState(
    () => Object.fromEntries(stickers.map((sticker) => [sticker.id, 'falta']))
  )

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

  return (
    <main>
      <section id="stickers">
        <h2>Figuritas (muestra)</h2>
        <div className="stickers-grid">
          {stickers.slice(0, 10).map((s) => {
            return (
              <Sticker
                key={s.id}
                number={s.id}
                name={s.name}
                group={s.group || s.section || '—'}
                status={stickerStatus[s.id]}
                onClick={() => handleStatusChange(s.id)}
              />
            )
          })}
        </div>
      </section>
    </main>
  )
}

export default App
