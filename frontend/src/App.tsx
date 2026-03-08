import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ModuleSlider from './components/ModuleSlider'
import TargetAudience from './components/TargetAudience'
import Mission from './components/Mission'
import About from './components/About'
import Footer from './components/Footer'
import { translation, type Language } from './translation'
// Import the type and the data


function App() {
  // Use <Language> to tell TS this state only holds 'EN' or 'TR'
  const [lang, setLang] = useState<Language>('EN'); 
  
  // This line is now error-free!
  const t = translation[lang]; 

  return (
    <div className="min-h-screen bg-[#050a12] w-screen overflow-x-hidden">
      <Navbar lang={lang} setLang={setLang} t={t.nav} />
      <main>
        <Hero t={t.hero} />
        <ModuleSlider lang={lang} />
        <TargetAudience lang={lang} />
        <Mission t={t.mission} />
        <About lang={lang} />
        <Footer t={t.nav} />
      </main>
    </div>
  )
}

export default App