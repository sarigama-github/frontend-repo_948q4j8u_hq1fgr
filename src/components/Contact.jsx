import { useState } from 'react'

function Contact() {
  const [status, setStatus] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      phone: form.get('phone'),
      message: form.get('message')
    }

    try {
      setStatus('Invio...')
      // Backend endpoint pronto per integrazione
      const baseUrl = import.meta.env.VITE_BACKEND_URL
      if (!baseUrl) throw new Error('Endpoint non configurato')
      const res = await fetch(`${baseUrl}/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Errore invio')
      setStatus('Richiesta inviata! Ti ricontattiamo a breve.')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('Impossibile inviare ora. Usa WhatsApp o chiama.')
    }
  }

  return (
    <section id="contatti" className="py-10">
      <div className="max-w-screen-md mx-auto px-4">
        <h2 className="text-xl font-bold text-slate-900">Contatti</h2>
        <p className="text-sm text-slate-600 mt-1">Raccontaci il problema: ti rispondiamo velocemente.</p>

        <form onSubmit={handleSubmit} className="mt-4 grid gap-3">
          <input name="name" required placeholder="Nome" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input name="phone" required inputMode="tel" placeholder="Telefono" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <textarea name="message" required rows="4" placeholder="Descrivi il problema" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <button className="w-full px-4 py-3 rounded-lg bg-blue-600 text-white font-semibold active:scale-95 transition shadow-sm">Invia richiesta</button>
          <a href="https://wa.me/" target="_blank" className="w-full px-4 py-3 rounded-lg bg-emerald-600 text-white text-center font-semibold active:scale-95 transition shadow-sm">Scrivici su WhatsApp</a>
          {status && <p className="text-xs text-slate-600">{status}</p>}
        </form>
      </div>
    </section>
  )
}

export default Contact
