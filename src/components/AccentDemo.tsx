import { useState, type CSSProperties } from 'react'
import { PALETTE_SAMPLES } from '../data/palettes'

/* A small, honest stand-in for the Style tab: not a screenshot, so nothing
   here claims to be the app. Clicking a swatch retints the mock sheet
   instantly, the same way one token reaches every template in the real
   inspector. */
export function AccentDemo () {
  const [current, setCurrent] = useState(PALETTE_SAMPLES[0])

  return (
    <div className="accent-demo">
      <div className="accent-demo-sheet" style={{ '--demo-accent': current.accent } as CSSProperties}>
        <div className="accent-demo-band">
          <span>Marrow &amp; Finch Studio</span>
        </div>
        <div className="accent-demo-lines">
          <span className="accent-demo-line" />
          <span className="accent-demo-line short" />
        </div>
        <div className="accent-demo-total">
          <span>Amount due</span>
          <strong>£9,389.04</strong>
        </div>
      </div>

      <div className="accent-demo-swatches" role="group" aria-label="Try a palette">
        {PALETTE_SAMPLES.map((p) => (
          <button
            key={p.id}
            type="button"
            className={`accent-demo-swatch${p.id === current.id ? ' is-active' : ''}`}
            style={{ '--swatch': p.accent } as CSSProperties}
            onClick={() => setCurrent(p)}
            aria-pressed={p.id === current.id}
            title={p.name}
          >
            <span className="sr-only">{p.name}</span>
          </button>
        ))}
      </div>
      <p className="accent-demo-label">{current.name} — one of thirty-three</p>
    </div>
  )
}
