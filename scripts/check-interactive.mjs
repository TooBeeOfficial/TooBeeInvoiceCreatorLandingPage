import { chromium } from 'playwright'
import { mkdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { join } from 'node:path'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const OUT = join(__dirname, '..', 'raw-shots', 'review')
mkdirSync(OUT, { recursive: true })

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1440, height: 950 }, deviceScaleFactor: 2 })
const errors = []
page.on('pageerror', (e) => errors.push(String(e)))
page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()) })

await page.goto('http://localhost:4173/', { waitUntil: 'networkidle' })

// 1. scroll reveal + nav active state
await page.locator('#templates').scrollIntoViewIfNeeded()
await page.waitForTimeout(500)
const navActive = await page.locator('.topbar-nav a.is-active').textContent()
console.log('nav active on Templates scroll:', navActive)
await page.screenshot({ path: join(OUT, 'interactive-templates.png') })

// 2. lightbox
await page.locator('.template-card').first().click()
await page.waitForTimeout(250)
const lightboxVisible = await page.locator('.lightbox').isVisible()
console.log('lightbox open after card click:', lightboxVisible)
await page.screenshot({ path: join(OUT, 'interactive-lightbox.png') })
await page.keyboard.press('Escape')
await page.waitForTimeout(200)
console.log('lightbox closed after Escape:', !(await page.locator('.lightbox').isVisible()))

// 3. accent demo swatch click
await page.locator('#customize').scrollIntoViewIfNeeded()
await page.waitForTimeout(400)
const before = await page.locator('.accent-demo-band').evaluate((el) => getComputedStyle(el).backgroundColor)
await page.locator('.accent-demo-swatch').nth(3).click()
await page.waitForTimeout(250)
const after = await page.locator('.accent-demo-band').evaluate((el) => getComputedStyle(el).backgroundColor)
console.log('accent demo colour before:', before, 'after:', after, 'changed:', before !== after)
await page.screenshot({ path: join(OUT, 'interactive-accent-demo.png') })

// 4. specs count-up
await page.locator('#specs').scrollIntoViewIfNeeded()
await page.waitForTimeout(900)
await page.screenshot({ path: join(OUT, 'interactive-specs.png') })

console.log('console/page errors:', errors)
await browser.close()
