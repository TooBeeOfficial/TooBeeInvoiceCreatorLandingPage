// Converts every raw PNG screenshot to high-quality WebP, cropping the app
// UI shots to their meaningful content (dropping empty page space below the
// fold) before encoding.
import sharp from 'sharp'
import { readdirSync, mkdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { join, basename, extname } from 'node:path'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const RAW = join(__dirname, '..', 'raw-shots')
const OUT = join(__dirname, '..', 'public', 'img')
mkdirSync(join(OUT, 'plates'), { recursive: true })
mkdirSync(join(OUT, 'app'), { recursive: true })

// [name]: crop height in native (2x) px, from the top. Omit = full frame.
const APP_CROPS = {
  items: 1060,
  clients: 850,
  company: 1650,
  invoices: 760,
}

async function convertPlates () {
  const dir = join(RAW, 'plates')
  for (const file of readdirSync(dir)) {
    if (extname(file) !== '.png') continue
    const name = basename(file, '.png')
    await sharp(join(dir, file))
      .webp({ quality: 86 })
      .toFile(join(OUT, 'plates', `${name}.webp`))
    console.log('plate', name)
  }
}

async function convertApp () {
  const dir = join(RAW, 'app')
  for (const file of readdirSync(dir)) {
    if (extname(file) !== '.png') continue
    const name = basename(file, '.png')
    const img = sharp(join(dir, file))
    const meta = await img.metadata()
    const cropH = APP_CROPS[name]
    const pipeline = cropH
      ? img.extract({ left: 0, top: 0, width: meta.width, height: Math.min(cropH, meta.height) })
      : img
    await pipeline.webp({ quality: 88 }).toFile(join(OUT, 'app', `${name}.webp`))
    console.log('app', name, cropH ? `cropped to ${cropH}` : 'full')
  }
}

await convertPlates()
await convertApp()
console.log('done')
