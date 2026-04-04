import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { schools } from '../../constants/schoolsData'
import Footer from '../Footer'

function SiteLayout({ children }) {
  const location = useLocation()
  const [openPath, setOpenPath] = useState(location.pathname)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSchoolsOpen, setIsSchoolsOpen] = useState(false)

  const isCurrentPath = openPath === location.pathname
  const menuOpen = isCurrentPath && isMenuOpen
  const schoolsOpen = isCurrentPath && isSchoolsOpen

  return (
    <main className="landing">
      <header className="topbar">
        <Link className="brand" to="/">
          <img src="/assets/logo.png" alt="Logo Humanidades y Educación" className="brand-logo" />
          <span className="brand-title">Facultad de Humanidades y Educación</span>
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          onClick={() => {
            setOpenPath(location.pathname)
            setIsMenuOpen((value) => !value)
          }}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={`main-nav ${menuOpen ? 'open' : ''}`}>
          <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
            Inicio
          </NavLink>
          <NavLink to="/contacto" onClick={() => setIsMenuOpen(false)}>
            Contacto
          </NavLink>
          <div className={`dropdown ${schoolsOpen ? 'open' : ''}`}>
            <button
              className="dropdown-trigger"
              type="button"
              aria-haspopup="menu"
              aria-expanded={schoolsOpen}
              onClick={() => {
                setOpenPath(location.pathname)
                setIsSchoolsOpen((value) => !value)
              }}
            >
              Escuelas
            </button>
            <ul className="dropdown-menu" role="menu">
              {schools.map((school) => (
                <li key={school.slug}>
                  <Link
                    to={`/escuelas/${school.slug}`}
                    onClick={() => {
                      setIsMenuOpen(false)
                      setIsSchoolsOpen(false)
                    }}
                  >
                    {school.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
      {children}
      <Footer />
    </main>
  )
}

export default SiteLayout
