import './App.css'
import { stickers } from './data/stickers'
import Sticker from './components/Sticker'

function App() {
  return (
    <main>
      <section id="stickers">
        <h2>Figuritas (muestra)</h2>
        <div className="stickers-grid">
          {stickers.slice(0, 10).map((s, i) => {
            const status = i % 3 === 0 ? 'tengo' : i % 3 === 1 ? 'repetida' : 'falta'
            return (
              <Sticker
                key={s.id}
                number={s.id}
                name={s.name}
                group={s.group || s.section || '—'}
                status={status}
              />
            )
          })}
        </div>
      </section>
    </main>
  )
}

export default App
