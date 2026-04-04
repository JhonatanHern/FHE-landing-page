import { motion } from 'framer-motion'
import { BookOpen, Briefcase, Download, Rocket } from 'lucide-react'
import { useEffect } from 'react'
import { FaInstagram } from 'react-icons/fa'
import { Link, Navigate, useParams } from 'react-router-dom'
import {
  mergedCareerSlugMap,
  schoolDescriptionBlocks,
  schoolIcons,
  schoolLogos,
  schoolPensumDownloadSources,
  schools,
  schoolSocialLinks,
} from '../constants/schoolsData'
// import ReactMarkdown from 'react-markdown'
// import rehypeRaw from 'rehype-raw'
// import remarkGfm from 'remark-gfm'
// import { markdownComponents } from '../constants/markdownComponents'
// import { getPensumUrl, isHtmlFallback, normalizePensumContent } from '../utils/pensum'

const Motion = motion

function SchoolPage() {
  const { slug } = useParams()

  const normalizedSlug = mergedCareerSlugMap[slug] ?? slug
  const school = schools.find((item) => item.slug === normalizedSlug)

  // const [pensumMarkdown, setPensumMarkdown] = useState('')
  // const [pensumStatus, setPensumStatus] = useState('loading')

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [normalizedSlug])

  // useEffect(() => {
  //   let cancelled = false

  //   const loadPensumMarkdown = async () => {
  //     if (!school) {
  //       setPensumStatus('missing')
  //       setPensumMarkdown('')
  //       return
  //     }

  //     const sources = schoolPensumSources[school.slug] ?? []
  //     if (sources.length === 0) {
  //       setPensumStatus('missing')
  //       setPensumMarkdown('')
  //       return
  //     }

  //     setPensumStatus('loading')

  //     const blocks = []
  //     for (const source of sources) {
  //       try {
  //         const response = await fetch(getPensumUrl(source.file))
  //         if (!response.ok) {
  //           continue
  //         }

  //         const content = normalizePensumContent(await response.text())
  //         if (!content || isHtmlFallback(content)) {
  //           continue
  //         }

  //         blocks.push({ title: source.title, content })
  //       } catch {
  //         continue
  //       }
  //     }

  //     if (cancelled) {
  //       return
  //     }

  //     if (blocks.length === 0) {
  //       setPensumStatus('missing')
  //       setPensumMarkdown('')
  //       return
  //     }

  //     if (blocks.length === 1) {
  //       setPensumMarkdown(blocks[0].content)
  //     } else {
  //       setPensumMarkdown(
  //         blocks
  //           .map((block) => `## ${block.title}\n\n${block.content}`)
  //           .join('\n\n---\n\n'),
  //       )
  //     }
  //     setPensumStatus('ready')
  //   }

  //   loadPensumMarkdown()

  //   return () => {
  //     cancelled = true
  //   }
  // }, [school])

  if (mergedCareerSlugMap[slug]) {
    return <Navigate to={`/escuelas/${normalizedSlug}`} replace />
  }

  if (!school) {
    return <Navigate to="/" replace />
  }

  const SchoolIcon = schoolIcons[school.slug] ?? BookOpen
  const schoolLogo = schoolLogos[school.slug]
  const pensumDownloadSources = schoolPensumDownloadSources[school.slug] ?? []
  const descriptionBlocks = schoolDescriptionBlocks[school.slug] ?? []
  const socialLinks = schoolSocialLinks[school.slug] ?? []

  return (
    <Motion.section
      className="section school-page"
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      <div
        className="school-header-visual"
        style={{ backgroundImage: "url('/assets/mural-dark.png')" }}
      >
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
      <p className="eyebrow">Facultad de Humanidades y Educación</p>
      <h1 className="school-title">{school.name}</h1>
      <p className="hero-text">{school.summary}</p>

      <div className="school-grid">
        <Motion.article whileHover={{ y: -6 }} transition={{ duration: 0.2 }} className="info-card">
          <h4>
            <span className="icon-chip" aria-hidden="true">
              <SchoolIcon className="icon-svg" />
            </span>
            Perfil académico
          </h4>
          <p>{school.profile}</p>
        </Motion.article>
        <Motion.article whileHover={{ y: -6 }} transition={{ duration: 0.2 }} className="info-card">
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
        </Motion.article>
        <Motion.article whileHover={{ y: -6 }} transition={{ duration: 0.2 }} className="info-card">
          <h4>
            <span className="icon-chip" aria-hidden="true">
              <Briefcase className="icon-svg" />
            </span>
            Campo laboral
          </h4>
          <p>{school.opportunities}</p>
        </Motion.article>
      </div>

      <section className="school-description">
        <p className="eyebrow">Quiénes somos</p>
        <h3>Conoce la carrera</h3>
        <div className="school-description-content">{descriptionBlocks}</div>
      </section>

      {socialLinks.length > 0 && (
        <section className="school-social">
          <p className="eyebrow">Redes oficiales y estudiantiles</p>
          <h3>Redes de la escuela</h3>
          <div className="school-social-grid">
            {socialLinks.map((link) => (
              <a key={link.url} className="school-social-link" href={link.url} target="_blank" rel="noreferrer">
                <FaInstagram className="icon-svg" aria-hidden="true" />
                <span>
                  <strong>{link.label}</strong>
                  <small>{link.handle}</small>
                </span>
              </a>
            ))}
          </div>
        </section>
      )}

      <section className="school-pensum">
        <p className="eyebrow" style={{marginBottom:'1em'}}>Oferta académica detallada (Pensum)</p>

        {pensumDownloadSources.length > 0 && (
          <div className="pensum-downloads">
            {pensumDownloadSources.map((source) => (
              <a key={source.title} className="btn btn-ghost" href={source.url} download>
                <Download className="icon-svg" aria-hidden="true" />
                Descargar Pensum de {source.title}
              </a>
            ))}
          </div>
        )}
{/* 
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
        )} */}
      </section>

      <div className="hero-actions">
        <Link className="btn btn-ghost" to="/" state={{ scrollToTop: true }}>
          Volver al inicio
        </Link>
      </div>
    </Motion.section>
  )
}

export default SchoolPage
