import { motion } from 'framer-motion'
import { BookOpen, Rocket } from 'lucide-react'
import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { fadeInUp, staggerContainer } from '../constants/animations'
import { schoolIcons, schoolLogos, schools } from '../constants/schoolsData'

const Motion = motion

function HomePage() {
  const location = useLocation()

  useEffect(() => {
    if (location.state?.scrollToTop) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location.state])

  return (
    <>
      <Motion.section
        className="hero"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
      >
        <Motion.div variants={fadeInUp} className="hero-panel">
          <img src="/assets/logo.png" alt="Logo Humanidades y Educación" className="hero-logo" />
          <p className="eyebrow">Universidad Central de Venezuela</p>
          <h1>Facultad de Humanidades y Educación</h1>
          <h2 className="hero-question">
            ¿Te gustaría ser un humanista formado en la universidad #1 del país?
          </h2>
          <div className="hero-actions">
            {/* <Link className="btn btn-primary" to="/contacto">
              Sí, quiero formar parte
            </Link> */}
            <a className="btn btn-ghost" href="#facultad">
              Conocer la facultad
            </a>
          </div>
        </Motion.div>
      </Motion.section>

      <Motion.section
        id="facultad"
        className="section"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Motion.div variants={fadeInUp} className="section-head">
          <p className="eyebrow">¿Quiénes somos?</p>
          <h3>Facultad de Humanidades y Educación</h3>
          <p className="muted" style={{ fontSize: '1.3em', marginLeft: '0' }}>
            Formamos profesionales con visión crítica, sentido ético y compromiso social.
            Nuestra facultad integra docencia, investigación y extensión para responder a
            los retos del país desde el conocimiento humanista.
          </p>
        </Motion.div>

        <div className="section-break" aria-hidden="true" />

        <Motion.div variants={fadeInUp} className="section-head" style={{ marginTop: '1.2rem' }}>
          <p className="eyebrow">Historia</p>
          <h3>Historia de la facultad</h3>

          <div className="history-paragraphs" aria-label="Bloques de historia de la facultad">
            <div className="history-paragraph-card">
              <p className="muted">
                La estructura moderna de la facultad se consolidó en octubre de 1946, bajo el
                nombre de Facultad de Filosofía y Letras, para profesionalizar las disciplinas
                humanísticas en Venezuela.
              </p>
            </div>

            <div className="history-paragraph-card">
              <p className="muted">
                Su primer decano y principal impulsor fue Mariano Picón Salas, quien regresó del
                exilio con una visión renovada del papel de la universidad en la sociedad.
              </p>
            </div>

            <div className="history-paragraph-card">
              <p className="muted">
                En su etapa inicial funcionó por secciones. Filosofía inició clases el 14 de octubre
                de 1946 con 300 inscritos, y su planta docente se fortaleció con intelectuales
                venezolanos y profesores exiliados de la Guerra Civil Española y la Segunda Guerra Mundial.
              </p>
            </div>
          </div>
        </Motion.div>
      </Motion.section>

      <Motion.section
        id="escuelas"
        className="section"
        variants={staggerContainer}
        initial="show"
        whileInView="show"
        viewport={{ once: true, amount: 0.05 }}
      >
        <Motion.div variants={fadeInUp} className="section-head">
          <p className="eyebrow">Escuelas de Humanidades y Educación</p>
          <h3>Áreas de formación en humanidades y ciencias sociales</h3>
        </Motion.div>
        <div className="cards-grid cards-grid-schools">
          {schools.map((school) => {
            const SchoolIcon = schoolIcons[school.slug] ?? BookOpen
            const schoolLogo = schoolLogos[school.slug]

            return (
              <Motion.article
                key={school.slug}
                variants={fadeInUp}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className="info-card"
              >
                {schoolLogo ? (
                  <img
                    src={schoolLogo.src}
                    alt={`Logo de ${school.name}`}
                    className="school-logo-thumb"
                    loading="lazy"
                  />
                ) : (
                  <div className="school-logo-fallback" aria-hidden="true">
                    <SchoolIcon className="icon-svg school-logo-icon" />
                  </div>
                )}
                <h4>
                  <span className="icon-chip" aria-hidden="true">
                    <SchoolIcon className="icon-svg" />
                  </span>
                  {school.name}
                </h4>
                <p>{school.summary}</p>
                <Link className="inline-link" to={`/escuelas/${school.slug}`}>
                  Ver escuela
                </Link>
              </Motion.article>
            )
          })}
        </div>
      </Motion.section>
    </>
  )
}

export default HomePage
