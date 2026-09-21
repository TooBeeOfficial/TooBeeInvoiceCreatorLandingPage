import { Reveal } from './Reveal'

export function IO () {
  return (
    <section className="section shell" id="io">
      <Reveal>
        <p className="eyebrow">In, and out</p>
        <h2 className="section-title section-title-display">CSV in. A vector PDF out.</h2>
      </Reveal>

      <Reveal delay={100}>
        <div className="io-grid">
          <div className="io-card">
            <p className="io-card-label">In</p>
            <p className="io-card-formats">CSV · TSV · XLSX / XLS · JSON</p>
            <p className="io-card-note">
              Quoted fields with commas inside them, doubled-quote escapes, line
              breaks inside a cell, and the delimiter guessed automatically — semicolons
              included, for spreadsheets built in continental Europe.
            </p>
          </div>
          <div className="io-card io-card-out">
            <p className="io-card-label">Out</p>
            <p className="io-card-formats">PDF · XLSX · CSV</p>
            <p className="io-card-note">
              The PDF is rendered by Chromium from the same HTML the preview
              shows — vector text you can select, not a picture of a page. The XLSX keeps
              every total as a live formula, not a frozen number.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
