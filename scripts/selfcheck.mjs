import { chromium } from 'playwright'
import { mkdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { join } from 'node:path'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const OUT = join(__dirname, '..', 'raw-shots', 'review')
mkdirSync(OUT, { recursive: true })

const browser = await chromium.launch()

// Desktop
const desktop = await browser.newPage({ viewport: { width: 1440, height: 950 }, deviceScaleFactor: 2 })
const errors = []
desktop.on('pageerror', (e) => errors.push(String(e)))
desktop.on('console', (msg) => { if (msg.type() === 'error') errors.push(msg.text()) })
await desktop.goto('http://localhost:4173/', { waitUntil: 'networkidle' })
await desktop.screenshot({ path: join(OUT, 'desktop-top.png') })
await desktop.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
await desktop.waitForTimeout(300)
await desktop.screenshot({ path: join(OUT, 'desktop-full.png'), fullPage: true })

// Mobile
const mobile = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 })
await mobile.goto('http://localhost:4173/', { waitUntil: 'networkidle' })
await mobile.screenshot({ path: join(OUT, 'mobile-full.png'), fullPage: true })

console.log('console/page errors:', errors)
await browser.close()
