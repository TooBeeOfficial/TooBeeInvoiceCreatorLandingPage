import { Reveal } from './Reveal'

const RELEASE_URL = 'https://github.com/TooBeeOfficial/TooBeeInvoiceCreator/releases/tag/release'

export function Download () {
  return (
    <section className="download" id="download">
      <Reveal className="shell">
        <p className="eyebrow">Get it</p>
        <h2 className="download-title">Download for Windows</h2>
        <p className="download-note">
          TooBee Invoice Creator v1.0.0, for Windows 10 and 11. An NSIS
          installer, about 170&nbsp;MB, nothing else placed alongside it.
        </p>

        <div className="hero-actions">
          <a className="btn btn-amber" href={RELEASE_URL} target="_blank" rel="noopener">
            <svg viewBox="0 0 16 16" width={16} height={16} aria-hidden="true">
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth={1.3}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 1.75v8.5M4.75 7 8 10.25 11.25 7M2 12.5v1.25a.75.75 0 0 0 .75.75h10.5a.75.75 0 0 0 .75-.75V12.5"
              />
            </svg>
            View the release on GitHub
          </a>
        </div>

        <div className="download-warning">
          <span className="download-warning-icon" aria-hidden="true">
            <svg viewBox="0 0 16 16" width={15} height={15}>
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth={1.3}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 1.75 15 14.25H1L8 1.75ZM8 6.5v3.25M8 12h.01"
              />
            </svg>
          </span>
          <p className="download-warning-text">
            Unsigned, for now. Windows SmartScreen and Defender will flag it on first
            run — <strong>More info ▸ Run anyway</strong>. An unsigned build starts every
            release from zero reputation; a code-signing certificate is next.
          </p>
        </div>
      </Reveal>
    </section>
  )
}
