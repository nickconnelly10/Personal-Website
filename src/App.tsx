import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Resume from './components/Resume'
import About from './components/About'
import Photos from './components/Photos'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <Resume />
        <About />
        <Photos />
      </main>
      <Footer />
    </div>
  )
}

export default App
