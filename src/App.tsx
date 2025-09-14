import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary'

function TestPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Nicholas Connelly</h1>
        <p className="text-xl text-gray-600">Site is working!</p>
      </div>
    </div>
  )
}

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route path="/" element={<TestPage />} />
          <Route path="/resume" element={<TestPage />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  )
}

export default App
