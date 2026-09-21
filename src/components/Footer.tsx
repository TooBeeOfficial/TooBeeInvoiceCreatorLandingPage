export function Footer () {
  return (
    <footer className="footer">
      <div className="shell footer-inner">
        <div className="footer-brand">
          <img className="brand-mark" src="/img/mark.svg" alt="" width={24} height={24} />
          <div>
            <p className="footer-name">TooBee Invoice Creator</p>
            <p className="footer-tagline">Write, design and export invoices — PDF, XLSX and CSV.</p>
          </div>
        </div>
        <div className="footer-meta">
          <p>© 2026 TooBee. Runs on your machine; nothing here reaches a server.</p>
        </div>
        <nav className="footer-links" aria-label="Footer">
          <a
            className="footer-link"
            href="https://github.com/TooBeeOfficial/TooBeeInvoiceCreator"
            target="_blank"
            rel="noopener"
          >
            GitHub
          </a>
          <a
            className="footer-link"
            href="https://github.com/TooBeeOfficial/TooBeeInvoiceCreator/releases/tag/release"
            target="_blank"
            rel="noopener"
          >
            Releases
          </a>
          <a className="footer-link" href="https://toobeecalendermaker.netlify.app/" target="_blank" rel="noopener">
            TooBee Calendar Maker
          </a>
          <a className="footer-link" href="#top">Back to top</a>
        </nav>
      </div>
    </footer>
  )
}
