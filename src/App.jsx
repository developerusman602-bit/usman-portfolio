import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-1 pt-20 md:pt-24">
          <Routes>
            <Route path="/"                element={<Home />} />
            <Route path="/projects"        element={<Projects />} />
            <Route path="/projects/:id"    element={<ProjectDetail />} />
            <Route path="/about"           element={<About />} />
            <Route path="/contact"         element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App