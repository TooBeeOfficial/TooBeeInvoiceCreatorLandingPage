// Screenshots each rendered template HTML (produced by the app's own render
// pipeline) at 2x, cropped exactly to the sheet. Output: PNG, one per template.
import { chromium } from 'playwright'
import { readFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const PLATES_DIR = process.argv[2]
const OUT_DIR = process.argv[3] || join(__dirname, '..', 'raw-shots', 'plates')
mkdirSync(OUT_DIR, { recursive: true })

const manifest = JSON.parse(readFileSync(join(PLATES_DIR, 'manifest.json'), 'utf8'))

const browser = await chromium.launch()
const page = await browser.newPage({ deviceScaleFactor: 2 })

for (const entry of manifest) {
  const url = pathToFileURL(join(PLATES_DIR, entry.file)).href
  await page.goto(url, { waitUntil: 'networkidle' })
  const box = await page.evaluate(() => {
    const b = document.body
    const r = b.getBoundingClientRect()
    return { width: Math.ceil(r.width), height: Math.ceil(r.height) }
  })
  await page.setViewportSize({ width: box.width, height: box.height })
  await page.screenshot({ path: join(OUT_DIR, `${entry.id}.png`), clip: { x: 0, y: 0, width: box.width, height: box.height } })
  console.log('shot', entry.id, box)
}

await browser.close()
console.log('done')
