import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import acreditacionMarkdown from '../../Guion de Exposición Expandido.md?raw'
import acreditacionImage from '../assets/acreditacion.webp'
import { markdownComponents } from '../constants/markdownComponents'

const Motion = motion

function AccreditationPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <Motion.section
      className="section accreditation-page"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <div className="accreditation-article-layout">
        <img
          src={acreditacionImage}
          alt="Acreditación internacional de la Universidad Central de Venezuela"
          className="accreditation-hero-image"
        />

        <div className="accreditation-text-content">
          <header className="accreditation-article-header">
            <p className="eyebrow">Acreditación internacional</p>
            <h1 className="accreditation-title">La UCV y su acreditación por Hcéres</h1>
            <p className="muted accreditation-subtitle">
              Un reconocimiento internacional que certifica la calidad académica, la investigación y
              la gestión universitaria de la Universidad Central de Venezuela.
            </p>
          </header>

          <article className="accreditation-article-body">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              components={markdownComponents}
            >
              {acreditacionMarkdown}
            </ReactMarkdown>
          </article>
        </div>
      </div>

      <div className="hero-actions">
        <Link className="btn btn-ghost" to="/" state={{ scrollToTop: true }}>
          Volver al inicio
        </Link>
      </div>
    </Motion.section>
  )
}

export default AccreditationPage