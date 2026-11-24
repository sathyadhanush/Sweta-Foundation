import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import AnimalWelfare from './pages/AnimalWelfare'
import AnimalProtection from './pages/AnimalProtection'
import ChildrenEducation from './pages/ChildrenEducation'
import About from './pages/About'
import Activities from './pages/Activities'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) return
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/animal-welfare" element={<AnimalWelfare />} />
          <Route path="/animal-protection" element={<AnimalProtection />} />
          <Route path="/childrens-education" element={<ChildrenEducation />} />
          <Route path="/about" element={<About />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
