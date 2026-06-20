import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Chargers from './components/Chargers'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { StatsBand, About, Features, HowItWorks } from './components/sections'

export default function App() {
  return (
    <>
      {/* ambient watercolor background */}
      <div className="ambient" aria-hidden="true">
        <div className="blob b1" /><div className="blob b2" /><div className="blob b3" />
      </div>

      <Navbar />
      <Hero />
      <StatsBand />
      <About />
      <Chargers />
      <Features />
      <HowItWorks />
      <Contact />
      <Footer />
    </>
  )
}
