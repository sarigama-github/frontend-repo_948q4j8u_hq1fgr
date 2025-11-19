function FAQ() {
  const items = [
    {
      q: 'Quanto tempo serve per un intervento? ',
      a: 'Per urgenze interveniamo in 24-48h. Per lavori programmati concordiamo insieme la data.'
    },
    {
      q: 'Fornite garanzia? ',
      a: 'Sì, rilasciamo garanzia scritta sui materiali e sulla manodopera secondo intervento.'
    },
    {
      q: 'Uscite anche con pioggia? ',
      a: 'Valutiamo la sicurezza. In caso di maltempo mettiamo in sicurezza e pianifichiamo la riparazione.'
    }
  ]

  return (
    <section id="faq" className="py-8">
      <div className="max-w-screen-md mx-auto px-4">
        <h2 className="text-xl font-bold text-slate-900">FAQ</h2>
        <div className="mt-4 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white overflow-hidden">
          {items.map((f, i) => (
            <details key={i} className="group open:bg-slate-50">
              <summary className="list-none cursor-pointer select-none px-4 py-3 flex items-center justify-between">
                <span className="font-medium text-slate-900 text-sm pr-3">{f.q}</span>
                <span className="text-slate-500 group-open:rotate-45 transition">＋</span>
              </summary>
              <div className="px-4 pb-4 -mt-1 text-sm text-slate-600">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
