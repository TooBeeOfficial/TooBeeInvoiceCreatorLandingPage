import { Reveal } from './Reveal'

export function Library () {
  return (
    <section className="section shell" id="library">
      <Reveal>
        <p className="eyebrow">Items and clients</p>
        <h2 className="section-title section-title-display">Type it once. Bill it for years.</h2>
      </Reveal>

      <Reveal delay={100}>
        <div className="library-grid">
          <div className="library-card">
            <div className="library-shot">
              <img
                src="/img/app/items.webp"
                alt="The Items page: a catalogue of saved items — a brand identity system, per-page website design, a custom icon, a studio day rate — each with its own price."
                loading="lazy"
              />
            </div>
            <h3>The item catalogue</h3>
            <p>
              Save what you sell — a day rate, a page of website design, a custom icon —
              with its own tax rate when it genuinely needs one. Drop it onto a line and
              the price, unit and tax come with it.
            </p>
          </div>
          <div className="library-card">
            <div className="library-shot">
              <img
                src="/img/app/clients.webp"
                alt="The Clients page: a saved client book with three businesses, their city and email."
                loading="lazy"
              />
            </div>
            <h3>The client book</h3>
            <p>
              Every business you bill, kept with its address and registration numbers.
              Correcting a typo in the book next year never rewrites an invoice you sent
              last spring.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
