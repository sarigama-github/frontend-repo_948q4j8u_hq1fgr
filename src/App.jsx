import MobileNav from './components/MobileNav'
import Hero from './components/Hero'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <MobileNav />

      <main>
        <Hero />
        <Services />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      <footer className="border-t border-slate-200 mt-6">
        <div className="max-w-screen-md mx-auto px-4 py-8 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Tetto No Problem • P.IVA — Tutti i diritti riservati
        </div>
      </footer>
    </div>
  )
}

export default App
