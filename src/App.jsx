import { useEffect } from 'react'
import { Navigate, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        requestAnimationFrame(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        })
      }
      return
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
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
          <Route path="/about" element={<Navigate to="/#about" replace />} />
          <Route path="/activities" element={<Navigate to="/#activities" replace />} />
          <Route path="/contact" element={<Navigate to="/#contact" replace />} />
          <Route path="/animal-welfare" element={<Navigate to="/#hospitals-shelters" replace />} />
          <Route path="/animal-protection" element={<Navigate to="/#rescue" replace />} />
          <Route path="/childrens-education" element={<Navigate to="/#community-education" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
