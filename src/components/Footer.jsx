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
            <li style={{cursor:"pointer"}} onClick={()=>{window.open("https://www.google.com/maps/place/F4R6%2B98G+Facultad+de+Humanidades+y+Educaci%C3%B3n,+Pasillo+de+Ingenier%C3%ADa,+Caracas+1051,+Distrito+Capital/@10.4909441,-66.8891612,15z/data=!4m6!3m5!1s0x8c2a58d985111c81:0x554e4496885c9d20!8m2!3d10.4909441!4d-66.8891612!16s%2Fg%2F1tgfxny9?g_ep=Eg1tbF8yMDI2MDMzMF8wIOC7DCoASAJQAg%3D%3D", "_blank")}}>
              <span className="footer-item-icon" aria-hidden="true">
                <MapPin />
              </span>
              Av. Los Ilustres, Ciudad Universitaria, Edif. Facultad de Humanidades y Educación, Los Chaguaramos, Caracas Venezuela.
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
                href="https://www.instagram.com/fhyeucv"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                className="footer-social-link"
                href="https://www.facebook.com/fheucv"
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