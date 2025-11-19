function Services() {
  const items = [
    {
      title: 'Ricerca infiltrazioni',
      desc: 'Individuazione rapida della perdita con tecniche non invasive.'
    },
    {
      title: 'Riparazioni tetti',
      desc: 'Guaina, tegole, lattoneria e coperture: ripristino a regola d’arte.'
    },
    {
      title: 'Impermeabilizzazioni',
      desc: 'Soluzioni durature per terrazzi, balconi e lastrici solari.'
    },
    {
      title: 'Pronto intervento',
      desc: 'Emergenze meteo? Usciamo anche in giornata per mettere in sicurezza.'
    }
  ]

  return (
    <section id="servizi" className="py-8">
      <div className="max-w-screen-md mx-auto px-4">
        <h2 className="text-xl font-bold text-slate-900">Servizi</h2>
        <div className="mt-4 grid gap-3">
          {items.map((it) => (
            <div key={it.title} className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm">
              <p className="font-semibold text-slate-900">{it.title}</p>
              <p className="text-sm text-slate-600 mt-1">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
