import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ModuleSlider from './components/ModuleSlider'
import TargetAudience from './components/TargetAudience'
import Mission from './components/Mission'
import About from './components/About'
import Footer from './components/Footer'
import { translation, type Language } from './translation'



function App() {
  
  const [lang, setLang] = useState<Language>('EN'); 
  

  const t = translation[lang]; 

  return (
    <div className="min-h-screen bg-[#050a12] w-screen overflow-x-hidden">
      <Navbar lang={lang} setLang={setLang} t={t.nav} />
      <main>
        <Hero t={t.hero} lang={lang} />
        <ModuleSlider lang={lang} />
        <TargetAudience lang={lang} />
        <Mission t={t.mission} />
        <About lang={lang} />
        <Footer t={t.nav} lang={lang} />
      </main>
    </div>
  )
}

export default App