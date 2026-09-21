import { Reveal } from './Reveal'

export function Payments () {
  return (
    <section className="section shell" id="payments">
      <Reveal>
        <div className="payments-grid">
          <div className="payments-copy">
            <p className="eyebrow">SEPA payment codes</p>
            <h2 className="section-title section-title-display">A code a banking app can actually scan.</h2>
            <p>
              Turn the QR code on and a valid IBAN becomes an EPC069-12 payload — the
              GiroCode most European banking apps read straight into a transfer, with the
              payee, IBAN and reference already filled in. The IBAN is checked against its
              own ISO&nbsp;13616 checksum first, so a mistyped number never reaches the
              page — and nothing is drawn once there is nothing left to pay.
            </p>
            <p>
              Payments received are logged against the invoice as they arrive, and its
              status — sent, paid, overdue — is read from that ledger rather than typed
              in by hand.
            </p>
          </div>
          <div className="payments-shot">
            <img
              src="/img/app/qr-sample.webp"
              alt="A sample QR code in the style of the SEPA payment code the app prints — this one links to the project's GitHub page, not a real payment."
              loading="lazy"
            />
            <p className="payments-shot-caption">Scan to pay</p>
            <p className="payments-shot-note">Illustrative — not a real payment code</p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
