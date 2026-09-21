export function Hero () {
  return (
    <section className="hero shell" id="top">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow enter enter-1">TooBee · Invoice Creator</p>
          <h1 className="hero-title enter enter-2">The invoice is a page you can open up.</h1>
          <p className="hero-lede enter enter-2">
            Thirteen templates, a live style panel, and a code tab underneath — for when
            a colour picker still isn&rsquo;t enough. Runs on your machine, saves plain JSON
            files, and never once talks to a server.
          </p>
          <div className="hero-actions enter enter-3">
            <a
              className="btn btn-amber"
              href="https://github.com/TooBeeOfficial/TooBeeInvoiceCreator/releases/tag/release"
              target="_blank"
              rel="noopener"
            >
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
              Download for Windows
            </a>
            <a className="btn btn-quiet" href="#templates">Browse the thirteen templates</a>
          </div>
          <p className="hero-spec enter enter-3">
            <span>13 templates</span><span className="hero-spec-sep" aria-hidden="true">·</span>
            <span>22 locales</span><span className="hero-spec-sep" aria-hidden="true">·</span>
            <span>SEPA QR built in</span><span className="hero-spec-sep" aria-hidden="true">·</span>
            <span>Works offline</span>
          </p>
        </div>
        <div className="hero-visual enter enter-3">
          <div className="sheet-frame">
            <img
              className="plate-img"
              src="/img/app/editor-hero.webp"
              alt="The Editor page: an invoice form on the left, a live paper preview on the right, showing Marrow &amp; Finch Studio billing Aldbourne &amp; Vance Ltd for £9,389.04."
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
