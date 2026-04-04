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
          <p className="eyebrow">Universidad Central de Venezuela · Facultad de Humanidades y Educación</p>
          <h1>¡Bienvenidos!</h1>
          <h2 className="hero-question">
            ¿Te gustaría ser un humanista formado en la universidad #1 del país?
          </h2>
          <p className="hero-text">
            Somos una comunidad académica comprometida con la excelencia, la investigación
            y la formación integral de profesionales.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/contacto">
              Sí, quiero formar parte
            </Link>
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
                    alt={`Logo ${schoolLogo.source === 'oficial' ? 'oficial' : 'de centro de estudiantes'} de ${school.name}`}
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

      <Motion.section
        id="admision"
        className="section split"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <Motion.div variants={fadeInUp}>
          <p className="eyebrow">Admisión</p>
          <h3>Inscripción y acompañamiento académico</h3>
          <p className="muted">
            Nuestro proceso orienta a cada aspirante para elegir la escuela adecuada y
            prepararse para su trayectoria universitaria en la Facultad de Humanidades y Educación.
          </p>
        </Motion.div>
        <Motion.ol variants={fadeInUp} className="steps">
          <li>Registro en plataforma y selección de escuela.</li>
          <li>Carga de documentos académicos requeridos.</li>
          <li>Entrevista o evaluación diagnóstica.</li>
          <li>Formalización de inscripción y bienvenida institucional.</li>
        </Motion.ol>
      </Motion.section>
    </>
  )
}

export default HomePage
