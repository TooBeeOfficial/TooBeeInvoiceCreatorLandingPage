// A representative sample of the app's own named palettes (theme.ts), used
// for the live accent demo — not the full set of thirty-three.
export interface PaletteSample {
  id: string
  name: string
  accent: string
}

export const PALETTE_SAMPLES: PaletteSample[] = [
  { id: 'ledger', name: 'Ledger', accent: '#17457A' },
  { id: 'oxblood', name: 'Oxblood', accent: '#7A1F2B' },
  { id: 'forest', name: 'Forest', accent: '#0B5D3B' },
  { id: 'cobalt', name: 'Cobalt', accent: '#1D4ED8' },
  { id: 'tangerine', name: 'Tangerine', accent: '#C0410B' },
  { id: 'plum', name: 'Plum', accent: '#5E2A6E' },
  { id: 'jade', name: 'Jade', accent: '#12775C' },
  { id: 'mustard', name: 'Mustard', accent: '#846200' },
]
