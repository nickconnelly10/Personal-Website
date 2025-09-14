import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Timeline from './components/Timeline'
import Photos from './components/Photos'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'
import ErrorBoundary from './components/ErrorBoundary'

function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-white">
        <ScrollProgress />
        <Navigation />
        <main>
          <Hero />
          <About />
          <Skills />
          <Timeline />
          <Photos />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </ErrorBoundary>
  )
}

export default App
