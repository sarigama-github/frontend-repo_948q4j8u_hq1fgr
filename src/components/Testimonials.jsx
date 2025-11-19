function Testimonials() {
  const items = [
    { name: 'Marco', text: 'Intervento rapido, perdita risolta al primo colpo. Consigliatissimi!' },
    { name: 'Laura', text: 'Molto professionali, hanno trovato l’infiltrazione che altri non vedevano.' },
    { name: 'Giulia', text: 'Prezzo onesto e lavoro pulito. Disponibili anche nel weekend.' }
  ]

  return (
    <section id="recensioni" className="py-8">
      <div className="max-w-screen-md mx-auto px-4">
        <h2 className="text-xl font-bold text-slate-900">Recensioni</h2>
        <div className="mt-4 grid gap-3">
          {items.map((t, idx) => (
            <figure key={idx} className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm">
              <blockquote className="text-sm text-slate-700">“{t.text}”</blockquote>
              <figcaption className="mt-2 text-xs text-slate-500">— {t.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
