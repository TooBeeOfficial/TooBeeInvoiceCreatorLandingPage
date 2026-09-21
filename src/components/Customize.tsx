import { Reveal } from './Reveal'
import { AccentDemo } from './AccentDemo'

export function Customize () {
  return (
    <section className="section shell" id="customize">
      <Reveal>
        <p className="eyebrow">Style and spacing</p>
        <h2 className="section-title section-title-display">Thirty-three palettes. One accent that redraws the sheet.</h2>
        <p className="section-note">
          Pick a palette, or set paper, ink and accent by hex. Every value becomes a CSS
          custom property the template&rsquo;s own stylesheet already reads — so a colour
          change never needs a picker built into all thirteen layouts. Just one. Try it
          on the mock sheet below.
        </p>
      </Reveal>

      <Reveal delay={100}>
        <AccentDemo />
      </Reveal>

      <div className="pair-list">
        <Reveal className="pair-item">
          <span className="pair-item-mark" aria-hidden="true" />
          <div className="pair-item-body">
            <h3>The Style tab</h3>
            <p>
              Thirty-three named palettes across white, tinted and reversed paper, plus fourteen
              system type faces for the display, body and figure roles. Save a look as
              your own style and it turns up on the next invoice too.
            </p>
          </div>
          <div className="pair-shot">
            <img
              src="/img/app/editor-style.webp"
              alt="The Style tab open: a grid of thirty-three named colour palettes, with paper, ink and accent set by hex underneath."
              loading="lazy"
            />
          </div>
        </Reveal>

        <Reveal className="pair-item">
          <span className="pair-item-mark" aria-hidden="true" />
          <div className="pair-item-body">
            <h3>The Code tab</h3>
            <p>
              Opens the exact HTML and CSS the sheet is built from — the same markup a
              built-in template ships with. Edits here belong to one invoice until you
              save them back as a template of your own; Revert undoes them in a click.
            </p>
          </div>
          <div className="pair-shot">
            <img
              src="/img/app/editor-code.webp"
              alt="The Code tab open: syntax-highlighted CSS for the letterhead block, editable in place, with a Revert to the template control."
              loading="lazy"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
