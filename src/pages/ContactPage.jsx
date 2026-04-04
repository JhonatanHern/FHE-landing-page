import { motion } from 'framer-motion'
import { Clock3, Globe, MapPin } from 'lucide-react'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'

const Motion = motion

function ContactPage() {
  return (
    <Motion.section
      className="section school-page"
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      <p className="eyebrow">Contacto institucional</p>
      <h1 className="school-title">Facultad de Humanidades y Educación</h1>
      <p className="hero-text" style={{ margin: '50px 0' }}>
        Estamos disponibles para ayudarte con información académica, procesos
        administrativos y orientación para aspirantes.
      </p>

      <div className="school-grid">
        <Motion.article
          whileHover={{ y: -6 }}
          transition={{ duration: 0.2 }}
          className="info-card"
          style={{ cursor: 'pointer' }}
          onClick={() => {
            window.open(
              'https://www.google.com/maps/place/F4R6%2B98G+Facultad+de+Humanidades+y+Educaci%C3%B3n,+Pasillo+de+Ingenier%C3%ADa,+Caracas+1051,+Distrito+Capital/@10.4909441,-66.8891612,15z/data=!4m6!3m5!1s0x8c2a58d985111c81:0x554e4496885c9d20!8m2!3d10.4909441!4d-66.8891612!16s%2Fg%2F1tgfxny9?g_ep=Eg1tbF8yMDI2MDMzMF8wIOC7DCoASAJQAg%3D%3D',
              '_blank',
            )
          }}
        >
          <h4>
            <span className="icon-chip" aria-hidden="true">
              <MapPin className="icon-svg" />
            </span>
            Dirección
          </h4>
          <p>
            Av. Los Ilustres, Ciudad Universitaria, Edif. Facultad de Humanidades y Educación, Los Chaguaramos, Caracas Venezuela.
          </p>
        </Motion.article>
        <Motion.article whileHover={{ y: -6 }} transition={{ duration: 0.2 }} className="info-card">
          <h4>
            <span className="icon-chip" aria-hidden="true">
              <Clock3 className="icon-svg" />
            </span>
            Horario de atención
          </h4>
          <p>Lunes a viernes · 8:00 a.m. a 4:30 p.m.</p>
        </Motion.article>
        <Motion.article whileHover={{ y: -6 }} transition={{ duration: 0.2 }} className="info-card">
          <h4>
            <span className="icon-chip" aria-hidden="true">
              <Globe className="icon-svg" />
            </span>
            Redes institucionales
          </h4>
          <p>
            Instagram:{' '}
            <a className="social-link" href="https://www.instagram.com/fhyeucv" target="_blank" rel="noreferrer">
              <FaInstagram className="icon-svg" aria-hidden="true" /> @fhyeucv
            </a>
          </p>
          <p>
            Facebook:{' '}
            <a className="social-link" href="https://www.facebook.com/fheucv" target="_blank" rel="noreferrer">
              <FaFacebookF className="icon-svg" aria-hidden="true" /> fheucv
            </a>
          </p>
        </Motion.article>
      </div>
    </Motion.section>
  )
}

export default ContactPage
