import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Resume from './components/Resume'
import About from './components/About'
import Skills from './components/Skills'
import Timeline from './components/Timeline'
import Photos from './components/Photos'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'
import ErrorBoundary from './components/ErrorBoundary'
import { ThemeProvider } from './contexts/ThemeContext'

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <ScrollProgress />
          <Navigation />
          <main>
            <Hero />
            <Resume />
            <About />
            <Skills />
            <Timeline />
            <Photos />
            <Contact />
          </main>
          <Footer />
          <BackToTop />
        </div>
      </ThemeProvider>
    </ErrorBoundary>
  )
}

export default App
