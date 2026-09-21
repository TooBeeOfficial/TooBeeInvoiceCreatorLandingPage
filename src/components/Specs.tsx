import { SPECS } from '../data/specs'
import { Reveal } from './Reveal'
import { useReveal } from '../hooks/useReveal'
import { useCountUp } from '../hooks/useCountUp'

function SpecValue ({ value, start }: { value: string; start: boolean }) {
  const isNumber = /^\d+$/.test(value)
  const count = useCountUp(isNumber ? Number(value) : 0, start && isNumber)
  return <span className="spec-value">{isNumber ? count : value}</span>
}

export function Specs () {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section className="section shell" id="specs">
      <Reveal>
        <p className="eyebrow">What&rsquo;s inside</p>
        <h2 className="section-title">The facts</h2>
      </Reveal>

      <div ref={ref} className={`spec-grid reveal${visible ? ' is-visible' : ''}`} style={{ transitionDelay: '80ms' }}>
        {SPECS.map((spec) => (
          <div className="spec-cell" key={spec.key}>
            <span className="spec-key">{spec.key}</span>
            <SpecValue value={spec.value} start={visible} />
            <span className="spec-note">{spec.note}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
