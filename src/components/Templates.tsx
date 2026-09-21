import { useEffect, useRef, useState } from 'react'
import { TEMPLATES, type TemplateInfo } from '../data/templates'
import { Reveal } from './Reveal'

export function Templates () {
  const [active, setActive] = useState<TemplateInfo | null>(null)
  const triggerRef = useRef<HTMLElement | null>(null)

  const open = (tpl: TemplateInfo, trigger: HTMLElement) => {
    triggerRef.current = trigger
    setActive(tpl)
  }
  const close = () => {
    setActive(null)
    triggerRef.current?.focus()
  }

  useEffect(() => {
    if (!active) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active])

  return (
    <section className="section shell" id="templates">
      <Reveal>
        <p className="eyebrow">Thirteen templates</p>
        <h2 className="section-title section-title-display">Ten full pages. Three short forms.</h2>
        <p className="section-note">
          Every layout below is live in the app right now — pick one from the panel beside
          the sheet, and the invoice you were already writing pours straight into it.
          Click a plate for a closer look.
        </p>
      </Reveal>

      <Reveal delay={120}>
        <div className="template-grid">
          {TEMPLATES.map((tpl) => (
            <button
              type="button"
              className="template-card"
              key={tpl.id}
              onClick={(e) => open(tpl, e.currentTarget)}
              aria-haspopup="dialog"
            >
              <div className="template-plate">
                <img
                  src={`/img/plates/${tpl.id}.webp`}
                  alt={`${tpl.name} template, filled in with a sample invoice.`}
                  loading="lazy"
                  width={794}
                  height={1123}
                />
              </div>
              <div className="template-body">
                <div className="template-name-row">
                  <span className="template-name">{tpl.name}</span>
                  <span className="template-tag">{tpl.detail === 'simple' ? 'Short' : 'Full'}</span>
                </div>
                <p className="template-blurb">{tpl.blurb}</p>
              </div>
            </button>
          ))}
        </div>
      </Reveal>

      {active ? (
        <div className="lightbox" role="presentation" onClick={close}>
          <div
            className="lightbox-panel"
            role="dialog"
            aria-modal="true"
            aria-label={`${active.name} template, full size`}
            onClick={(e) => e.stopPropagation()}
          >
            <button type="button" className="lightbox-close" onClick={close} aria-label="Close">
              <svg viewBox="0 0 16 16" width={16} height={16} aria-hidden="true">
                <path fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" d="M3 3l10 10M13 3 3 13" />
              </svg>
            </button>
            <div className="lightbox-image">
              <img
                src={`/img/plates/${active.id}.webp`}
                alt={`${active.name} template, filled in with a sample invoice.`}
              />
            </div>
            <div className="lightbox-caption">
              <span className="template-name">{active.name}</span>
              <span className="template-tag">{active.detail === 'simple' ? 'Short' : 'Full'}</span>
              <p>{active.blurb}</p>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  )
}
