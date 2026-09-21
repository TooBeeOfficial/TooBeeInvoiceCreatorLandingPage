// Drives the real InvoiceCreator app (npm run dev:web on :5173) with
// Playwright and captures high-res screenshots of the actual product UI.
import { chromium } from 'playwright'
import { readFileSync, mkdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { join } from 'node:path'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const OUT_DIR = join(__dirname, '..', 'raw-shots', 'app')
mkdirSync(OUT_DIR, { recursive: true })

const PREFS = readFileSync(join(__dirname, 'prefs-seed.json'), 'utf8')
const INVOICE_PATH = 'C:/Users/RBT/AppData/Local/Temp/claude/c--Users-RBT-Desktop-React-projects-InvoiceCreatorLandingPage/f4d75e77-210c-43ce-99c0-ec4ffb883c5e/scratchpad/seed/sample-invoice.json'

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1680, height: 1000 }, deviceScaleFactor: 2 })

async function shot (name) {
  await page.waitForTimeout(200)
  await page.screenshot({ path: join(OUT_DIR, `${name}.png`) })
  console.log('shot', name)
}

// 1. Seed preferences (company, clients, items) via the same localStorage key
// the app itself uses in browser mode, then load fresh.
await page.goto('http://localhost:5173/')
await page.evaluate((json) => localStorage.setItem('invoicer.prefs.v1', json), PREFS)
await page.reload()
await page.waitForSelector('header nav button', { timeout: 15000 })

// 2. Open the sample invoice via File > Open invoice…
await page.getByRole('button', { name: /^File$/ }).click()
const chooserPromise = page.waitForEvent('filechooser')
await page.getByRole('menuitem', { name: /Open invoice/i }).click()
const chooser = await chooserPromise
await chooser.setFiles(INVOICE_PATH)

await page.waitForSelector('text=0123456789', { timeout: 15000 })
await page.waitForTimeout(400)

// The design panel is open by default, showing the Template tab.
const designToggle = page.getByRole('banner').getByRole('button', { name: /design panel/i })
const inspector = page.getByRole('complementary')
await inspector.waitFor({ state: 'visible', timeout: 10000 })

// --- Editor: Template tab (open by default) -------------------------------
await shot('editor-templates')

// --- Editor: Style tab -----------------------------------------------------
await inspector.getByRole('tab', { name: 'Style' }).click()
await page.waitForTimeout(300)
await shot('editor-style')

// --- Editor: Code tab (CodeMirror) -----------------------------------------
await inspector.getByRole('tab', { name: 'Code' }).click()
await page.waitForTimeout(500)
await shot('editor-code')

// --- Editor: clean hero, inspector closed ----------------------------------
await designToggle.click()
await inspector.waitFor({ state: 'hidden', timeout: 10000 })
await page.waitForTimeout(200)
await shot('editor-hero')

const nav = page.getByRole('banner').getByRole('navigation')

// --- Items ------------------------------------------------------------------
await nav.getByRole('button', { name: 'Items', exact: true }).click()
await page.waitForTimeout(400)
await shot('items')

// --- Clients ------------------------------------------------------------------
await nav.getByRole('button', { name: 'Clients', exact: true }).click()
await page.waitForTimeout(400)
await shot('clients')

// --- Company ------------------------------------------------------------------
await nav.getByRole('button', { name: 'My company', exact: true }).click()
await page.waitForTimeout(400)
await shot('company')

// --- Invoices (empty state, bonus) ------------------------------------------
await nav.getByRole('button', { name: 'Invoices', exact: true }).click()
await page.waitForTimeout(400)
await shot('invoices')

await browser.close()
console.log('done')
