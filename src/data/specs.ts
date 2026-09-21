export interface SpecCell {
  key: string
  value: string
  note: string
}

export const SPECS: SpecCell[] = [
  { key: 'Templates', value: '13', note: 'Ten full pages, three short forms.' },
  { key: 'Locales', value: '22', note: 'Dates, numbers and currency, via Intl.' },
  { key: 'Interface languages', value: '14', note: 'The window and the invoice can differ.' },
  { key: 'Palettes', value: '33', note: 'Plus any paper, ink or accent by hex.' },
  { key: 'Paper sizes', value: '4', note: 'A4, Letter, Legal, A5.' },
  { key: 'Import', value: 'CSV · TSV · XLSX/XLS · JSON', note: 'Delimiter and columns detected, not assumed.' },
  { key: 'Export', value: 'PDF · XLSX · CSV', note: 'Vector PDF, live formulas, single or batch.' },
  { key: 'Storage', value: 'Plain JSON files', note: 'Yours to keep, move, or put in git.' },
  { key: 'Network', value: 'None', note: "script-src 'self' — nothing built at runtime." },
  { key: 'Stack', value: 'Electron 32 · React 18 · TypeScript', note: 'Vite 5, Zustand 4, Mustache, CodeMirror 6.' },
]
