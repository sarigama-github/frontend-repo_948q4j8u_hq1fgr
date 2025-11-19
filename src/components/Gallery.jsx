function Gallery() {
  return (
    <section id="lavori" className="py-8">
      <div className="max-w-screen-md mx-auto px-4">
        <h2 className="text-xl font-bold text-slate-900">Prima e dopo</h2>
        <p className="text-sm text-slate-600 mt-1">Una selezione di interventi reali. Immagini ottimizzate e caricamento progressivo per velocità su mobile.</p>

        <div className="mt-4 grid grid-cols-2 gap-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="aspect-[4/3] overflow-hidden rounded-xl bg-slate-100">
              <img
                src={`https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=600&auto=format&fit=crop`}
                alt="Lavoro tetto"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
