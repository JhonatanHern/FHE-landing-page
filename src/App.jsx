import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import {
  BookOpen,
  Brain,
  Briefcase,
  Building2,
  Clock3,
  FileText,
  Globe,
  GraduationCap,
  HeartPulse,
  Landmark,
  Languages,
  Mail,
  MapPin,
  MapPinned,
  Newspaper,
  Palette,
  PenSquare,
  Phone,
  Rocket,
  School,
  Sparkles,
  Theater,
  Users,
} from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import { Link, NavLink, Navigate, Route, Routes, useLocation, useParams } from 'react-router-dom'
import Footer from './components/Footer'
import './App.css'

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
}

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const schools = [
  {
    slug: 'bibliotecologia-archivologia',
    name: 'Bibliotecología y Archivología',
    summary:
      'Gestión integral de información, bibliotecas y archivos con enfoque en preservación, acceso y memoria institucional.',
    profile:
      'Forma profesionales para organizar, conservar y facilitar el acceso ético a documentos y recursos informativos en entornos físicos y digitales.',
    lines: ['Gestión de colecciones y archivos', 'Bibliotecas y archivística digital', 'Conservación documental y memoria'],
    opportunities:
      'Bibliotecas universitarias, archivos nacionales, centros de documentación, instituciones públicas y consultoría documental.',
  },
  {
    slug: 'filosofia',
    name: 'Filosofía',
    summary:
      'Formación crítica en pensamiento ético, político y epistemológico para analizar problemas contemporáneos.',
    profile:
      'Promueve análisis argumentativo, reflexión ética y pensamiento crítico aplicado a debates actuales.',
    lines: ['Ética y filosofía política', 'Historia de la filosofía', 'Lógica y argumentación'],
    opportunities: 'Docencia, investigación, análisis cultural, gestión editorial y asesoría en ética aplicada.',
  },
  {
    slug: 'comunicacion-social',
    name: 'Comunicación Social',
    summary:
      'Periodismo, comunicación digital y producción estratégica de contenidos con responsabilidad social.',
    profile:
      'Integra teoría comunicacional y práctica profesional para narrar y gestionar información en medios contemporáneos.',
    lines: ['Periodismo multimedia', 'Comunicación organizacional', 'Producción audiovisual'],
    opportunities: 'Medios de comunicación, agencias, instituciones públicas y proyectos de comunicación digital.',
  },
  {
    slug: 'artes',
    name: 'Artes',
    summary:
      'Creación artística interdisciplinaria y gestión cultural con integración entre teoría, práctica y territorio.',
    profile:
      'Desarrolla competencias creativas y de investigación estética para proyectos artísticos con impacto cultural.',
    lines: ['Artes visuales', 'Gestión cultural', 'Prácticas interdisciplinarias'],
    opportunities: 'Museos, centros culturales, producción artística independiente y gestión de proyectos creativos.',
  },
  {
    slug: 'historia',
    name: 'Historia',
    summary:
      'Investigación histórica para comprender procesos sociales, culturales y políticos en perspectiva comparada.',
    profile:
      'Forma historiadores con dominio metodológico para analizar fuentes y construir interpretaciones rigurosas.',
    lines: ['Historia contemporánea', 'Historia regional', 'Patrimonio y memoria'],
    opportunities: 'Docencia, archivos, museos, investigación académica y gestión patrimonial.',
  },
  {
    slug: 'geografia',
    name: 'Geografía',
    summary:
      'Análisis espacial, territorio y sostenibilidad con herramientas cartográficas y sistemas de información geográfica.',
    profile:
      'Integra análisis territorial, cartografía y SIG para entender dinámicas sociales y ambientales.',
    lines: ['Planificación territorial', 'Geografía humana', 'Sistemas de información geográfica'],
    opportunities: 'Ordenamiento territorial, consultoría ambiental, planificación urbana y análisis geoespacial.',
  },
  {
    slug: 'educacion',
    name: 'Educación',
    summary:
      'Diseño pedagógico, innovación didáctica y formación docente para distintos niveles del sistema educativo.',
    profile:
      'Prepara profesionales para diseñar, ejecutar y evaluar procesos educativos centrados en aprendizaje significativo.',
    lines: ['Currículo y evaluación', 'Tecnología educativa', 'Gestión escolar'],
    opportunities: 'Instituciones educativas, coordinación académica, formación docente y diseño instruccional.',
  },
  {
    slug: 'letras',
    name: 'Letras',
    summary:
      'Estudio de literatura, lingüística y escritura académica con énfasis en producción editorial y crítica textual.',
    profile:
      'Fortalece capacidades de análisis literario, investigación lingüística y producción de textos especializados.',
    lines: ['Literatura hispanoamericana', 'Lingüística aplicada', 'Edición y corrección de textos'],
    opportunities: 'Editoriales, medios, docencia universitaria, investigación y promoción de lectura.',
  },
  {
    slug: 'idiomas-modernos',
    name: 'Idiomas Modernos',
    summary:
      'Formación multilingüe e intercultural orientada a docencia, traducción y comunicación internacional.',
    profile:
      'Desarrolla competencias lingüísticas y culturales para contextos educativos, corporativos e internacionales.',
    lines: ['Didáctica de lenguas', 'Traducción e interpretación', 'Comunicación intercultural'],
    opportunities: 'Docencia de idiomas, traducción profesional, relaciones internacionales y turismo cultural.',
  },
  {
    slug: 'psicologia',
    name: 'Psicología',
    summary:
      'Bases científicas del comportamiento humano con prácticas en salud mental, educación y organizaciones.',
    profile:
      'Ofrece formación científica y ética para evaluar, intervenir e investigar procesos psicológicos individuales y colectivos.',
    lines: ['Psicología clínica', 'Psicología educativa', 'Psicología organizacional'],
    opportunities: 'Centros de salud, instituciones educativas, empresas, investigación y atención comunitaria.',
  },
]

const schoolIcons = {
  'bibliotecologia-archivologia': BookOpen,
  filosofia: Brain,
  'comunicacion-social': Newspaper,
  artes: Palette,
  historia: Landmark,
  geografia: MapPinned,
  educacion: School,
  letras: PenSquare,
  'idiomas-modernos': Languages,
  psicologia: HeartPulse,
}

const schoolLogos = {
  artes: {
    src: `/logos-escuelas/${encodeURIComponent('Escuela de Artes UCV.jpg')}`,
    source: 'oficial',
  },
  'comunicacion-social': {
    src: `/logos-escuelas/${encodeURIComponent('Escuela de Comunicación Social UCV.jpg')}`,
    source: 'oficial',
  },
  educacion: {
    src: `/logos-escuelas/${encodeURIComponent('Escuela de Educacion UCV.jpg')}`,
    source: 'oficial',
  },
  filosofia: {
    src: `/logos-escuelas/${encodeURIComponent('Escuela de Filosofia UCV.jpg')}`,
    source: 'oficial',
  },
  letras: {
    src: `/logos-escuelas/${encodeURIComponent('Escuela de Letras UCV.jpg')}`,
    source: 'oficial',
  },
  'bibliotecologia-archivologia': {
    src: `/logos-escuelas/${encodeURIComponent('Centro de Estudiantes de la Escuela de Bibliotecología y Archivología UCV.jpg')}`,
    source: 'centro-estudiantes',
  },
  historia: {
    src: `/logos-escuelas/${encodeURIComponent('Centro de Estudiantes de la Escuela de Historia UCV.jpg')}`,
    source: 'centro-estudiantes',
  },
  geografia: {
    src: `/logos-escuelas/${encodeURIComponent('Centro de Estudiantes de la Escuela de Gegrafía UCV.jpg')}`,
    source: 'centro-estudiantes',
  },
  'idiomas-modernos': {
    src: `/logos-escuelas/${encodeURIComponent('Centro de Estudiantes de la Escuela de Idiomas Modernos UCV.jpg')}`,
    source: 'centro-estudiantes',
  },
  psicologia: {
    src: `/logos-escuelas/${encodeURIComponent('Centro de Estudiantes de la Escuela de Psicología UCV.jpg')}`,
    source: 'centro-estudiantes',
  },
}

const schoolPensumSources = {
  'bibliotecologia-archivologia': [
    { title: 'Archivología', file: 'Archivologia_Pensum.md' },
    { title: 'Bibliotecología', file: 'Bibliotecologia_Pensum.md' },
  ],
  artes: [{ title: 'Artes', file: 'Artes Pensum.docx.md' }],
  'comunicacion-social': [{ title: 'Comunicación Social', file: 'Comunicacion Social_Pensum.md' }],
  educacion: [{ title: 'Educación', file: 'Educación_Pensum.md' }],
  filosofia: [{ title: 'Filosofía', file: 'Filosofia_Pensum.md' }],
  geografia: [{ title: 'Geografía', file: 'Geografia_Pensum.docx.md' }],
  historia: [{ title: 'Historia', file: 'Historia Pensum.docx.md' }],
  'idiomas-modernos': [{ title: 'Idiomas Modernos', file: 'Idiomas Modernos Pensum.docx.md' }],
  letras: [{ title: 'Letras', file: 'Letras_Pensum.docx.md' }],
  psicologia: [{ title: 'Psicología', file: 'Psicologia_Pensum.md' }],
}

const getPensumUrl = (fileName) => `/pensums/${encodeURIComponent(fileName)}`

const isHtmlFallback = (value) => {
  const sample = value.trim().slice(0, 800).toLowerCase()
  return (
    sample.includes('<!doctype html') ||
    sample.includes('<meta charset') ||
    sample.includes('/@vite/client')
  )
}

const normalizePensumContent = (value) =>
  value
    .replace(/\r\n/g, '\n')
    .replace(/\\([-.])/g, '$1')
    .replace(/\n{3,}/g, '\n\n')
    .trim()

const markdownComponents = {
  h1: ({ ...props }) => <h1 className="md-h1" {...props} />,
  h2: ({ ...props }) => <h2 className="md-h2" {...props} />,
  h3: ({ ...props }) => <h3 className="md-h3" {...props} />,
  h4: ({ ...props }) => <h4 className="md-h4" {...props} />,
  p: ({ ...props }) => <p className="md-p" {...props} />,
  ul: ({ ...props }) => <ul className="md-ul" {...props} />,
  ol: ({ ...props }) => <ol className="md-ol" {...props} />,
  li: ({ ...props }) => <li className="md-li" {...props} />,
  a: ({ ...props }) => <a className="md-link" {...props} />,
  blockquote: ({ ...props }) => <blockquote className="md-quote" {...props} />,
  code: ({ ...props }) => <code className="md-code" {...props} />,
  table: ({ ...props }) => <table className="md-table" {...props} />,
  thead: ({ ...props }) => <thead className="md-thead" {...props} />,
  tbody: ({ ...props }) => <tbody className="md-tbody" {...props} />,
  tr: ({ ...props }) => <tr className="md-tr" {...props} />,
  th: ({ ...props }) => <th className="md-th" {...props} />,
  td: ({ ...props }) => <td className="md-td" {...props} />,
}

function SiteLayout({ children }) {
  return (
    <main className="landing">
      <header className="topbar">
        <Link className="brand" to="/">
          <img src="/assets/logo.png" alt="Logo Humanidades y Educación" className="brand-logo" />
          Facultad de Humanidades y Educación
        </Link>
        <nav className="main-nav">
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/contacto">Contacto</NavLink>
          <div className="dropdown">
            <button className="dropdown-trigger" type="button" aria-haspopup="menu">
              Escuelas
            </button>
            <ul className="dropdown-menu" role="menu">
              {schools.map((school) => (
                <li key={school.slug}>
                  <Link to={`/escuelas/${school.slug}`}>{school.name}</Link>
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

function HomePage() {
  const location = useLocation()

  useEffect(() => {
    if (location.state?.scrollToTop) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location.state])

  return (
    <>
      <motion.section
        className="hero"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
      >
        <motion.span
          className="hero-float hero-float-one"
          animate={{ y: [0, -10, 0], rotate: [0, 4, 0] }}
          transition={{ duration: 4.6, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden="true"
        >
          <Sparkles />
        </motion.span>
        <motion.span
          className="hero-float hero-float-two"
          animate={{ y: [0, 8, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 5.1, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
          aria-hidden="true"
        >
          <GraduationCap />
        </motion.span>
        <motion.div variants={fadeInUp} className="hero-panel">
          <p className="eyebrow">Universidad · Facultad de Humanidades y Educación</p>
          <h1>¡Bienvenidos!</h1>
          <h2 className="hero-question">
            ¿Te gustaría ser un humanista formado en la universidad número 1 del país?
          </h2>
          <p className="hero-text">
            Somos una comunidad académica comprometida con la excelencia, la investigación
            y la formación integral de profesionales que aportan soluciones desde las
            humanidades y la educación.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/contacto">
              Sí, quiero formar parte
            </Link>
            <a className="btn btn-ghost" href="#facultad">
              Conocer la facultad
            </a>
          </div>
        </motion.div>
      </motion.section>

      <motion.section
        id="facultad"
        className="section"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={fadeInUp} className="section-head">
          <p className="eyebrow">¿Quiénes somos?</p>
          <h3>Facultad de Humanidades y Educación</h3>
          <p className="muted">
            Formamos profesionales con visión crítica, sentido ético y compromiso social.
            Nuestra facultad integra docencia, investigación y extensión para responder a
            los retos del país desde el conocimiento humanista.
          </p>
        </motion.div>
      </motion.section>

      <motion.section
        className="stats"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
      >
        {[
          ['10', 'Escuelas académicas', Building2],
          ['80+', 'Docentes investigadores', Users],
          ['40+', 'Proyectos culturales', Theater],
          ['6k+', 'Estudiantes activos', GraduationCap],
        ].map(([value, label, Icon]) => (
          <motion.article
            key={label}
            variants={fadeInUp}
            whileHover={{ y: -6, scale: 1.015 }}
            transition={{ duration: 0.2 }}
            className="stat-card"
          >
            <p className="stat-icon" aria-hidden="true">
              <Icon />
            </p>
            <h2>{value}</h2>
            <p>{label}</p>
          </motion.article>
        ))}
      </motion.section>

      <motion.section
        id="escuelas"
        className="section"
        variants={staggerContainer}
        initial="show"
        whileInView="show"
        viewport={{ once: true, amount: 0.05 }}
      >
        <motion.div variants={fadeInUp} className="section-head">
          <p className="eyebrow">Escuelas de Humanidades y Educación</p>
          <h3>Áreas de formación en humanidades y ciencias sociales</h3>
        </motion.div>
        <div className="cards-grid cards-grid-schools">
          {schools.map((school) => {
            const SchoolIcon = schoolIcons[school.slug] ?? BookOpen
            const schoolLogo = schoolLogos[school.slug]

            return (
              <motion.article
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
              </motion.article>
            )
          })}
        </div>
      </motion.section>

      <motion.section
        id="admision"
        className="section split"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.div variants={fadeInUp}>
          <p className="eyebrow">Admisión</p>
          <h3>Inscripción y acompañamiento académico</h3>
          <p className="muted">
            Nuestro proceso orienta a cada aspirante para elegir la escuela adecuada y
            prepararse para su trayectoria universitaria en la Facultad de Humanidades y Educación.
          </p>
        </motion.div>
        <motion.ol variants={fadeInUp} className="steps">
          <li>Registro en plataforma y selección de escuela.</li>
          <li>Carga de documentos académicos requeridos.</li>
          <li>Entrevista o evaluación diagnóstica.</li>
          <li>Formalización de inscripción y bienvenida institucional.</li>
        </motion.ol>
      </motion.section>
    </>
  )
}

function SchoolPage() {
  const { slug } = useParams()
  const mergedCareerSlugMap = {
    bibliotecologia: 'bibliotecologia-archivologia',
    archivologia: 'bibliotecologia-archivologia',
  }

  const normalizedSlug = mergedCareerSlugMap[slug] ?? slug
  const school = schools.find((item) => item.slug === normalizedSlug)

  const [pensumMarkdown, setPensumMarkdown] = useState('')
  const [pensumStatus, setPensumStatus] = useState('loading')

  useEffect(() => {
    let cancelled = false

    const loadPensumMarkdown = async () => {
      if (!school) {
        setPensumStatus('missing')
        setPensumMarkdown('')
        return
      }

      const sources = schoolPensumSources[school.slug] ?? []
      if (sources.length === 0) {
        setPensumStatus('missing')
        setPensumMarkdown('')
        return
      }

      setPensumStatus('loading')

      const blocks = []
      for (const source of sources) {
        try {
          const response = await fetch(getPensumUrl(source.file))
          if (!response.ok) {
            continue
          }

          const content = normalizePensumContent(await response.text())
          if (!content || isHtmlFallback(content)) {
            continue
          }

          blocks.push({ title: source.title, content })
        } catch {
          continue
        }
      }

      if (cancelled) {
        return
      }

      if (blocks.length === 0) {
        setPensumStatus('missing')
        setPensumMarkdown('')
        return
      }

      if (blocks.length === 1) {
        setPensumMarkdown(blocks[0].content)
      } else {
        setPensumMarkdown(
          blocks
            .map((block) => `## ${block.title}\n\n${block.content}`)
            .join('\n\n---\n\n'),
        )
      }
      setPensumStatus('ready')
    }

    loadPensumMarkdown()

    return () => {
      cancelled = true
    }
  }, [school])

  if (mergedCareerSlugMap[slug]) {
    return <Navigate to={`/escuelas/${normalizedSlug}`} replace />
  }

  if (!school) {
    return <Navigate to="/" replace />
  }

  const SchoolIcon = schoolIcons[school.slug] ?? BookOpen
  const schoolLogo = schoolLogos[school.slug]

  return (
    <motion.section
      className="section school-page"
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      <div className="school-header-visual">
        {schoolLogo ? (
          <img
            src={schoolLogo.src}
            alt={`Logo ${schoolLogo.source === 'oficial' ? 'oficial' : 'de centro de estudiantes'} de ${school.name}`}
            className="school-logo-hero"
          />
        ) : (
          <div className="school-logo-hero-fallback" aria-hidden="true">
            <SchoolIcon className="icon-svg school-logo-icon" />
          </div>
        )}
      </div>
      <p className="eyebrow">Escuela de Humanidades y Educación</p>
      <h1 className="school-title">{school.name}</h1>
      <p className="hero-text">{school.summary}</p>

      <div className="school-grid">
        <motion.article whileHover={{ y: -6 }} transition={{ duration: 0.2 }} className="info-card">
          <h4>
            <span className="icon-chip" aria-hidden="true">
              <SchoolIcon className="icon-svg" />
            </span>
            Perfil académico
          </h4>
          <p>{school.profile}</p>
        </motion.article>
        <motion.article whileHover={{ y: -6 }} transition={{ duration: 0.2 }} className="info-card">
          <h4>
            <span className="icon-chip" aria-hidden="true">
              <Rocket className="icon-svg" />
            </span>
            Líneas de desarrollo
          </h4>
          <ul className="detail-list">
            {school.lines.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </motion.article>
        <motion.article whileHover={{ y: -6 }} transition={{ duration: 0.2 }} className="info-card">
          <h4>
            <span className="icon-chip" aria-hidden="true">
              <Briefcase className="icon-svg" />
            </span>
            Campo laboral
          </h4>
          <p>{school.opportunities}</p>
        </motion.article>
      </div>

      <section className="school-pensum">
        <p className="eyebrow">Oferta académica detallada</p>
        <h3>Pensum completo</h3>

        {pensumStatus === 'loading' && <p className="muted">Cargando contenido del pensum...</p>}

        {pensumStatus === 'missing' && (
          <p className="muted">No se encontró un archivo de pensum disponible para esta escuela.</p>
        )}

        {pensumStatus === 'ready' && (
          <div className="school-pensum-content">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              components={markdownComponents}
            >
              {pensumMarkdown}
            </ReactMarkdown>
          </div>
        )}
      </section>

      <div className="hero-actions">
        <Link className="btn btn-ghost" to="/" state={{ scrollToTop: true }}>
          Volver al inicio
        </Link>
      </div>
    </motion.section>
  )
}

function ContactPage() {
  return (
    <motion.section
      className="section school-page"
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      <p className="eyebrow">Contacto institucional</p>
      <h1 className="school-title">Facultad de Humanidades y Educación</h1>
      <p className="hero-text">
        Estamos disponibles para ayudarte con información académica, procesos
        administrativos y orientación para aspirantes.
      </p>

      <div className="school-grid">
        <motion.article whileHover={{ y: -6 }} transition={{ duration: 0.2 }} className="info-card">
          <h4>
            <span className="icon-chip" aria-hidden="true">
              <MapPin className="icon-svg" />
            </span>
            Dirección
          </h4>
          <p>Avenida Universidad, Edificio Central, Piso 2, Caracas, Venezuela.</p>
        </motion.article>
        <motion.article whileHover={{ y: -6 }} transition={{ duration: 0.2 }} className="info-card">
          <h4>
            <span className="icon-chip" aria-hidden="true">
              <Phone className="icon-svg" />
            </span>
            Teléfonos
          </h4>
          <p>+58 212 555 0101</p>
          <p>+58 212 555 0142</p>
        </motion.article>
        <motion.article whileHover={{ y: -6 }} transition={{ duration: 0.2 }} className="info-card">
          <h4>
            <span className="icon-chip" aria-hidden="true">
              <Mail className="icon-svg" />
            </span>
            Correo
          </h4>
          <p>contacto.humanidades@universidad.edu.ve</p>
        </motion.article>
      </div>

      <div className="school-grid">
        <motion.article whileHover={{ y: -6 }} transition={{ duration: 0.2 }} className="info-card">
          <h4>
            <span className="icon-chip" aria-hidden="true">
              <Clock3 className="icon-svg" />
            </span>
            Horario de atención
          </h4>
          <p>Lunes a viernes · 8:00 a.m. a 4:30 p.m.</p>
        </motion.article>
        <motion.article whileHover={{ y: -6 }} transition={{ duration: 0.2 }} className="info-card">
          <h4>
            <span className="icon-chip" aria-hidden="true">
              <FileText className="icon-svg" />
            </span>
            Admisiones
          </h4>
          <p>admision.humanidades@universidad.edu.ve</p>
        </motion.article>
        <motion.article whileHover={{ y: -6 }} transition={{ duration: 0.2 }} className="info-card">
          <h4>
            <span className="icon-chip" aria-hidden="true">
              <Globe className="icon-svg" />
            </span>
            Redes institucionales
          </h4>
          <p>Instagram: @humanidadesuniversidad</p>
          <p>Facebook: Facultad Humanidades y Educación</p>
        </motion.article>
      </div>
    </motion.section>
  )
}

function App() {
  return (
    <SiteLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/escuelas/:slug" element={<SchoolPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </SiteLayout>
  )
}

export default App
