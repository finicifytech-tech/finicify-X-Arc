import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ModuleSlider from './components/ModuleSlider'
import TargetAudience from './components/TargetAudience'
import Mission from './components/Mission'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  return (
    // 'w-screen' and 'overflow-x-hidden' prevents the horizontal scroll bugs
    <div className="min-h-screen bg-[#050a12] w-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <ModuleSlider/>
        <TargetAudience />
        <Mission/>
        <About/>
        <Footer/>
      </main>
    </div>
  )
}
export default App