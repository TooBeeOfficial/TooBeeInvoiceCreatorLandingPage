// The app's own thirteen built-in templates — id, name, blurb and detail
// level, exactly as templates/registry.ts orders them. One plate image per
// id lives in public/img/plates.
export interface TemplateInfo {
  id: string
  name: string
  blurb: string
  detail: 'full' | 'simple'
}

export const TEMPLATES: TemplateInfo[] = [
  { id: 'modern-minimal', name: 'Modern Minimal', blurb: 'Amount due up front, hairline rules, plenty of air.', detail: 'full' },
  { id: 'boxed-ledger', name: 'Boxed Ledger', blurb: 'Everything on one plain sheet, with the items in a black ruled box.', detail: 'full' },
  { id: 'solid-slate', name: 'Solid Slate', blurb: 'Everything, in one column, with the items reversed out of a black panel.', detail: 'full' },
  { id: 'classic-statement', name: 'Classic Statement', blurb: 'Serif letterhead, ruled table, remittance slip at the foot.', detail: 'full' },
  { id: 'letterhead-note', name: 'Letterhead Note', blurb: 'Written as a letter: dated, addressed, and signed at the foot.', detail: 'full' },
  { id: 'timesheet', name: 'Timesheet', blurb: 'Built for hourly work. Units totalled beside the money.', detail: 'full' },
  { id: 'vat-statement', name: 'VAT Statement', blurb: 'Tax analysed by rate, registration numbers given their own lines.', detail: 'full' },
  { id: 'continental', name: 'Continental', blurb: 'DIN letter: envelope window, info block, fold marks.', detail: 'full' },
  { id: 'sidebar-ledger', name: 'Sidebar Ledger', blurb: 'Your details in a coloured band; the work gets the main column.', detail: 'full' },
  { id: 'studio-bold', name: 'Studio Bold', blurb: 'Editorial. The number and the total set as headlines, no boxes.', detail: 'full' },
  { id: 'plain-slip', name: 'Plain Slip', blurb: 'Space instead of rules. One hairline over the total and nothing else.', detail: 'simple' },
  { id: 'compact-simplified', name: 'Compact Simplified', blurb: 'Short form with dotted leaders. For receipts and small sales.', detail: 'simple' },
]
