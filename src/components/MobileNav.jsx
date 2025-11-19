import { useState } from 'react'

function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200">
      <div className="max-w-screen-md mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="text-base font-semibold tracking-tight text-slate-900">Tetto No Problem</a>

        <button
          aria-label="Apri menu"
          onClick={() => setOpen(v => !v)}
          className="inline-flex items-center justify-center w-10 h-10 rounded-md border border-slate-300 text-slate-700 active:scale-95 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="max-w-screen-md mx-auto px-4 pb-3 animate-in">
          <ul className="grid gap-2 text-slate-800">
            {[
              { href: '#servizi', label: 'Servizi' },
              { href: '#lavori', label: 'Lavori' },
              { href: '#recensioni', label: 'Recensioni' },
              { href: '#faq', label: 'FAQ' },
              { href: '#contatti', label: 'Contatti' },
            ].map(link => (
              <li key={link.href}>
                <a
                  onClick={() => setOpen(false)}
                  className="block px-3 py-3 rounded-lg bg-white border border-slate-200 active:scale-[.98] focus:outline-none focus:ring-2 focus:ring-blue-500"
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}

export default MobileNav
