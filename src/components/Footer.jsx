import {
  Building2,
  Clock3,
  Compass,
  GraduationCap,
  House,
  Inbox,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-column footer-brand">
          <img src="/assets/logo.png" alt="Logo Humanidades y Educación" className="footer-logo" />
          <p className="footer-brand-title">Facultad de Humanidades y Educación</p>
          <p>Formación crítica, investigación y compromiso social para transformar el país.</p>
        </div>

        <div className="footer-column">
          <h4>
            <span className="footer-title-icon" aria-hidden="true">
              <Compass />
            </span>
            Enlaces rápidos
          </h4>
          <ul className="footer-list">
            <li>
              <span className="footer-item-icon" aria-hidden="true">
                <House />
              </span>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <span className="footer-item-icon" aria-hidden="true">
                <Building2 />
              </span>
              <a href="#facultad">La facultad</a>
            </li>
            <li>
              <span className="footer-item-icon" aria-hidden="true">
                <GraduationCap />
              </span>
              <a href="#escuelas">Escuelas</a>
            </li>
            <li>
              <span className="footer-item-icon" aria-hidden="true">
                <Inbox />
              </span>
              <Link to="/contacto">Contacto</Link>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>
            <span className="footer-title-icon" aria-hidden="true">
              <Inbox />
            </span>
            Contacto
          </h4>
          <ul className="footer-list">
            <li>
              <span className="footer-item-icon" aria-hidden="true">
                <MapPin />
              </span>
              Avenida Universidad, Edificio Central, Piso 2, Caracas, Venezuela.
            </li>
            <li>
              <span className="footer-item-icon" aria-hidden="true">
                <Phone />
              </span>
              <a href="tel:+582125550101">+58 212 555 0101</a> ·{' '}
              <a href="tel:+582125550142">+58 212 555 0142</a>
            </li>
            <li>
              <span className="footer-item-icon" aria-hidden="true">
                <Mail />
              </span>
              <a href="mailto:contacto.humanidades@universidad.edu.ve">
                contacto.humanidades@universidad.edu.ve
              </a>
            </li>
            <li>
              <span className="footer-item-icon" aria-hidden="true">
                <Clock3 />
              </span>
              Lunes a viernes · 8:00 a.m. a 4:30 p.m.
            </li>
            <li className="footer-social-row">
              <a
                className="footer-social-link"
                href="https://instagram.com/humanidadesuniversidad"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                className="footer-social-link"
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">© 2026 Facultad de Humanidades y Educación</p>
        <p>Caracas · Venezuela</p>
      </div>

      <div className="footer-slogan-row">
        <p className="footer-motto">La casa que vence la sombra</p>
      </div>
    </footer>
  )
}

export default Footer