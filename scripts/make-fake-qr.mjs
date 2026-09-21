// Generates a placeholder QR for the landing page's payments section. It
// encodes the project's own GitHub URL — never real payment data — so the
// image can't be mistaken for a scannable IBAN/EPC payload.
import QRCode from 'qrcode'
import { fileURLToPath } from 'node:url'
import { join } from 'node:path'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const OUT = join(__dirname, '..', 'public', 'img', 'app', 'qr-sample.png')

await QRCode.toFile(OUT, 'https://github.com/TooBeeOfficial/TooBeeInvoiceCreator', {
  errorCorrectionLevel: 'M',
  margin: 0,
  scale: 10,
  color: { dark: '#1B1E25', light: '#00000000' },
})
console.log('wrote', OUT)
