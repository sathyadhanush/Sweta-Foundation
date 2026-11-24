import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { HeartHandshake, Menu, X } from 'lucide-react'
import { navLinks, siteConfig } from '../data/websiteContent'

export default function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link to="/" className="brand" aria-label="Sweta Foundation home">
          <span className="brand__mark" aria-hidden="true">
            <HeartHandshake size={22} />
          </span>
          <span className="brand__text">
            <span className="brand__name">{siteConfig.name}</span>
            <span className="brand__tagline">{siteConfig.tagline}</span>
          </span>
        </Link>

        <nav className="nav-desktop" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
              end={link.path === '/'}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <Link to={siteConfig.donateUrl} className="btn-donate">
            <span className="btn-donate__full">Donate / Support Us</span>
            <span className="btn-donate__short">Donate</span>
          </Link>
          <button
            type="button"
            className="menu-toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div
        className={`mobile-nav ${open ? 'is-open' : ''}`}
        role={open ? 'dialog' : undefined}
        aria-modal={open ? 'true' : undefined}
        aria-hidden={!open}
      >
        <div className="mobile-nav__panel">
          <nav aria-label="Mobile">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => (isActive ? 'active' : undefined)}
                end={link.path === '/'}
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <Link
            to={siteConfig.donateUrl}
            className="btn btn--primary mobile-nav__donate"
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
          >
            {siteConfig.donateLabel}
          </Link>
        </div>
      </div>
    </header>
  )
}
