import { useActiveSection } from '../hooks/useActiveSection'

const SECTIONS = ['templates', 'customize', 'specs']

export function Topbar () {
  const active = useActiveSection(SECTIONS)

  return (
    <header className="topbar">
      <div className="shell topbar-inner">
        <a className="brand" href="#top">
          <img className="brand-mark" src="/img/mark.svg" alt="" width={28} height={28} />
          <span className="brand-name"><span className="brand-name-dim">TooBee</span> Invoice Creator</span>
        </a>
        <nav className="topbar-nav" aria-label="Sections">
          <a href="#templates" className={active === 'templates' ? 'is-active' : ''} aria-current={active === 'templates' ? 'true' : undefined}>Templates</a>
          <a href="#customize" className={active === 'customize' ? 'is-active' : ''} aria-current={active === 'customize' ? 'true' : undefined}>Design panel</a>
          <a href="#specs" className={active === 'specs' ? 'is-active' : ''} aria-current={active === 'specs' ? 'true' : undefined}>Specs</a>
        </nav>
        <div className="topbar-meta">
          <span className="topbar-version">v1.0.0 · Windows</span>
          <a
            className="btn btn-quiet btn-small"
            href="https://github.com/TooBeeOfficial/TooBeeInvoiceCreator"
            target="_blank"
            rel="noopener"
          >
            <svg viewBox="0 0 16 16" width={15} height={15} aria-hidden="true">
              <path
                fill="currentColor"
                d="M8 0C3.58 0 0 3.64 0 8.13c0 3.59 2.29 6.63 5.47 7.71.4.08.55-.17.55-.39 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.5-2.69-.96-.09-.23-.48-.96-.82-1.15-.28-.15-.68-.53-.01-.54.63-.01 1.08.59 1.23.83.72 1.22 1.87.88 2.33.67.07-.53.28-.88.51-1.08-1.78-.2-3.64-.91-3.64-4.02 0-.89.31-1.62.82-2.19-.08-.2-.36-1.03.08-2.15 0 0 .67-.22 2.2.84a7.4 7.4 0 0 1 4 0c1.53-1.06 2.2-.84 2.2-.84.44 1.12.16 1.95.08 2.15.51.57.82 1.29.82 2.19 0 3.12-1.87 3.82-3.65 4.02.29.25.54.744.54 1.5 0 1.09-.01 1.96-.01 2.23 0 .22.15.48.55.39A8.13 8.13 0 0 0 16 8.13C16 3.64 12.42 0 8 0Z"
              />
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </header>
  )
}
