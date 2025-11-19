function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 via-white to-white" />

      <div className="max-w-screen-md mx-auto px-4 pt-10 pb-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Tetto che perde? Nessun problema.
          </h1>
          <p className="mt-3 text-base text-slate-600">
            Riparazioni rapide e garantite su tetti e coperture. Interveniamo con urgenza per fermare infiltrazioni e danni.
          </p>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <a href="#contatti" className="inline-flex items-center justify-center px-4 py-3 rounded-lg bg-blue-600 text-white font-semibold active:scale-95 transition shadow-sm">
              Preventivo rapido
            </a>
            <a href="https://wa.me/" target="_blank" className="inline-flex items-center justify-center px-4 py-3 rounded-lg bg-emerald-600 text-white font-semibold active:scale-95 transition shadow-sm">
              WhatsApp
            </a>
          </div>

          <p className="mt-3 text-xs text-slate-500">
            Disponibili 7 giorni su 7 • Sopralluogo veloce
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
