import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import {
  BookOpen,
  Brain,
  Briefcase,
  Building2,
  Clock3,
  Download,
  FileText,
  Globe,
  GraduationCap,
  HeartPulse,
  Landmark,
  Languages,
  Mail,
  MapPin,
  MapPinned,
  Menu,
  Newspaper,
  Palette,
  PenSquare,
  Phone,
  Rocket,
  School,
  Sparkles,
  Theater,
  Users,
  X,
} from 'lucide-react'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
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
  artes: [{ title: 'Artes', file: 'Artes Pensum.docx.md' }],
  'bibliotecologia-archivologia': [
    { title: 'Archivología', file: 'Archivologia_Pensum.md' },
    { title: 'Bibliotecología', file: 'Bibliotecologia_Pensum.md' },
  ],
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
const getPensumDocUrl = (fileName) => `/pensum-docs/${encodeURIComponent(fileName)}`

const schoolPensumDownloadSources = {
  'bibliotecologia-archivologia': [
    { title: 'Archivología (PDF)', url: getPensumDocUrl('Archivología_Pensum.pdf') },
    { title: 'Bibliotecología (PDF)', url: getPensumDocUrl('Bibliotecología_Pensum.pdf') },
  ],
  artes: [{ title: 'Artes (DOCX)', url: getPensumDocUrl('Artes Pensum.docx') }],
  'comunicacion-social': [
    { title: 'Comunicación Social (PDF)', url: getPensumDocUrl('Comunicacion Social_Pensum.pdf') },
  ],
  educacion: [{ title: 'Educación (DOCX)', url: getPensumDocUrl('Educación_Pensum.docx') }],
  filosofia: [{ title: 'Filosofía (PDF)', url: getPensumDocUrl('Filosofia_Pensum.pdf') }],
  geografia: [{ title: 'Geografía (DOCX)', url: getPensumDocUrl('GEOGRAFÍA_Pensum.docx') }],
  historia: [{ title: 'Historia (DOCX)', url: getPensumDocUrl('Historia Pensum.docx') }],
  'idiomas-modernos': [{ title: 'Idiomas Modernos (DOCX)', url: getPensumDocUrl('Idiomas Modernos Pensum.docx') }],
  letras: [{ title: 'Letras (DOCX)', url: getPensumDocUrl('Letras_Pensum.docx') }],
  psicologia: [{ title: 'Psicología (PDF)', url: getPensumDocUrl('Psicología Pensum.pdf') }],
}

const schoolDescriptionBlocks = {
  artes: [
    <p key="artes-intro">
      La Escuela de Artes de la Universidad Central de Venezuela es un espacio académico de carácter humanístico
      dedicado al estudio profundo de la creación y su impacto social. Su misión es formar profesionales capaces de
      comprender la relación entre el arte, su entorno y otras disciplinas del saber.
    </p>,
    <p key="artes-enfoque">
      Aquí, la sensibilidad artística se transforma en una base teórica y práctica sólida para interpretar y potenciar
      las manifestaciones culturales contemporáneas.
    </p>,
    <h4 key="artes-areas">Áreas de formación</h4>,
    <ul key="artes-areas-list">
      <li>Artes Cinematográficas: estudio del lenguaje y la producción audiovisual.</li>
      <li>Artes Escénicas: enfoque en las artes del espectáculo y la representación.</li>
      <li>Artes Plásticas y Museología: formación visual y gestión de espacios expositivos.</li>
      <li>Musicología: estudio teórico, histórico y crítico del fenómeno musical.</li>
      <li>Gestión Socio-Cultural: desarrollo y administración de proyectos culturales.</li>
    </ul>,
    <h4 key="artes-perfil">Perfil del aspirante</h4>,
    <p key="artes-perfil-texto">
      Está dirigida a quienes tienen interés por las manifestaciones artísticas, sensibilidad estética y disposición
      para abordar el arte desde la práctica y el análisis teórico.
    </p>,
    <h4 key="artes-info">Información académica</h4>,
    <ul key="artes-info-list">
      <li>Título otorgado: Licenciado en Artes.</li>
      <li>Régimen de estudios: semestral.</li>
      <li>Duración: 10 semestres (5 años).</li>
    </ul>,
    <h4 key="artes-campo-title">Campo profesional</h4>,
    <ul key="artes-campo-list">
      <li>Producción artística y creación en diversas disciplinas.</li>
      <li>Difusión y medios: cine, televisión e internet.</li>
      <li>Desarrollo cultural en instituciones públicas y privadas.</li>
    </ul>,
    <p key="artes-academico">
      En resumen, forma profesionales con visión integral, capaces de ser agentes de cambio y desarrollo cultural.
    </p>,
  ],
  'bibliotecologia-archivologia': [
    <p key="ba-intro">
      La Escuela de Bibliotecología y Archivología es una unidad académica dedicada a formar profesionales integrales
      expertos en el ciclo de vida de la información: planificar, procesar, controlar y difundir conocimiento de
      manera ética y útil para la sociedad.
    </p>,
    <p key="ba-enfoque">
      Integra la tradición del patrimonio documental con la innovación tecnológica para ofrecer soluciones eficientes
      en diversos contextos organizacionales.
    </p>,
    <h4 key="ba-perfil">Perfil del aspirante</h4>,
    <ul key="ba-perfil-list">
      <li>Capacidad de análisis y síntesis.</li>
      <li>Interés por la investigación y las novedades tecnológicas.</li>
      <li>Habilidades de planificación.</li>
      <li>Conocimientos básicos en informática, matemáticas y cultura general.</li>
    </ul>,
    <h4 key="ba-info">Información académica</h4>,
    <ul key="ba-info-list">
      <li>Títulos otorgados: Licenciado en Bibliotecología / Licenciado en Archivología.</li>
      <li>Régimen de estudios: semestral.</li>
      <li>Duración: 10 semestres.</li>
    </ul>,
    <h4 key="ba-que-hace">¿Qué hace un Licenciado en Bibliotecología y Archivología?</h4>,
    <ol key="ba-que-hace-list">
      <li>Gestiona bibliotecas, archivos y centros de documentación en contextos intra-organizacionales.</li>
      <li>Diseña y administra sistemas y redes de información a nivel regional y nacional.</li>
      <li>
        Investiga y propone alternativas para el sector socioproductivo, promoviendo la protección del patrimonio
        documental.
      </li>
    </ol>,
    <h4 key="ba-mercado">Mercado ocupacional</h4>,
    <p key="ba-mercado-texto">
      Bibliotecas públicas y privadas, bibliotecas escolares y universitarias, archivos empresariales, centros de
      investigación, librerías, editoriales e imprentas.
    </p>,
    <p key="ba-resumen">
      En resumen, forma gestores estratégicos del conocimiento, capaces de conectar la información con las necesidades
      de personas e instituciones.
    </p>,
  ],
  'comunicacion-social': [
    <p key="cs-intro">
      La Escuela de Comunicación Social forma profesionales que funcionan como puente entre la información y la
      sociedad, con dominio de herramientas y técnicas de producción en lenguajes tradicionales y plataformas
      tecnológicas.
    </p>,
    <p key="cs-enfoque">
      El comunicador social se concibe como estratega del mensaje, comprometido con el entendimiento público y la
      transparencia en un entorno globalizado.
    </p>,
    <h4 key="cs-perfil">Perfil del aspirante</h4>,
    <ul key="cs-perfil-list">
      <li>Capacidad intelectual: razonamiento lógico, observación y rapidez para organizar ideas.</li>
      <li>Habilidades técnicas para recolectar y procesar datos.</li>
      <li>Conocimientos sólidos de informática.</li>
      <li>Cultura general amplia para contextualizar la realidad.</li>
    </ul>,
    <h4 key="cs-info">Información académica</h4>,
    <ul key="cs-info-list">
      <li>Título otorgado: Licenciado en Comunicación Social.</li>
      <li>Régimen de estudios: semestral.</li>
      <li>Duración: 10 semestres.</li>
    </ul>,
    <h4 key="cs-campo-title">Áreas de desempeño profesional</h4>,
    <ul key="cs-campo-list">
      <li>Periodismo y reportería para prensa, radio, TV y medios digitales.</li>
      <li>Redacción de contenidos: artículos, guiones, boletines y redes sociales.</li>
      <li>Producción audiovisual para cine, televisión y plataformas multimedia.</li>
      <li>Gestión de comunicación organizacional interna y externa.</li>
      <li>Marketing y publicidad para posicionamiento de marcas y servicios.</li>
    </ul>,
    <p key="cs-resumen">
      En resumen, forma profesionales integrales que dominan palabra y tecnología para conectar a la sociedad con el
      conocimiento.
    </p>,
  ],
  educacion: [
    <p key="edu-intro">
      La Escuela de Educación es un pilar para la transformación social mediante la formación de profesionales de la
      docencia, capaces de liderar procesos de enseñanza, gestionar proyectos pedagógicos y desarrollar talento humano.
    </p>,
    <h4 key="edu-modalidades">Modalidades de estudio</h4>,
    <ul key="edu-modalidades-list">
      <li>Presencial (anual): exclusivamente en la sede de Caracas.</li>
      <li>
        Estudios Universitarios Supervisados (EUS): modalidad semipresencial y semestral en Caracas, Barcelona,
        Barquisimeto, Ciudad Bolívar y Puerto Ayacucho.
      </li>
    </ul>,
    <h4 key="edu-especializacion">Áreas de especialización (modalidad anual)</h4>,
    <ul key="edu-especializacion-list">
      <li>Educación Inicial y Primaria.</li>
      <li>Desarrollo de Recursos Humanos.</li>
      <li>Diseño y Gestión de Proyectos Educativos.</li>
    </ul>,
    <h4 key="edu-perfil">Perfil del aspirante</h4>,
    <ul key="edu-perfil-list">
      <li>Destrezas de comunicación verbal y escrita.</li>
      <li>Capacidad para razonar e interpretar fenómenos sociales.</li>
      <li>Manejo de herramientas tecnológicas e informáticas.</li>
      <li>Creatividad, salud mental y alto sentido de responsabilidad social.</li>
    </ul>,
    <h4 key="edu-info">Información académica</h4>,
    <ul key="edu-info-list">
      <li>Título otorgado: Licenciado en Educación.</li>
      <li>Duración: 5 años (régimen anual) o 10 semestres (régimen EUS).</li>
    </ul>,
    <h4 key="edu-que-hace">¿Qué hace un Licenciado en Educación?</h4>,
    <ul key="edu-que-hace-list">
      <li>Docencia y tutoría en distintos niveles del sistema educativo.</li>
      <li>Planificación y diseño curricular con estrategias de evaluación.</li>
      <li>Gestión y administración en cargos de dirección y coordinación.</li>
      <li>Investigación educativa y creación de materiales didácticos.</li>
      <li>Proyectos de innovación, inclusión y formación en valores ciudadanos.</li>
    </ul>,
    <p key="edu-academico">
      En resumen, el profesional de la educación es un agente de cambio que diseña futuro a través del aprendizaje y
      la gestión del conocimiento.
    </p>,
  ],
  filosofia: [
    <p key="fil-intro">
      La Filosofía explora los conceptos fundamentales del conocimiento humano. En la Escuela de Filosofía de la UCV,
      se forman pensadores capaces de aplicar modelos teóricos y metodológicos para interpretar la realidad mediante
      análisis crítico y argumentación rigurosa.
    </p>,
    <h4 key="fil-perfil">Perfil del aspirante</h4>,
    <ul key="fil-perfil-list">
      <li>Pensamiento abstracto para analizar conceptos e ideas complejas.</li>
      <li>Curiosidad intelectual por distintos dominios del conocimiento.</li>
      <li>Disposición para cuestionar, reflexionar y proponer nuevas perspectivas.</li>
    </ul>,
    <h4 key="fil-info">Información académica</h4>,
    <ul key="fil-info-list">
      <li>Título otorgado: Licenciado en Filosofía.</li>
      <li>Régimen de estudios: semestral.</li>
      <li>Duración: 10 semestres.</li>
    </ul>,
    <h4 key="fil-que-hace">¿Qué hace un Licenciado en Filosofía?</h4>,
    <ul key="fil-que-hace-list">
      <li>Análisis crítico de teorías y problemas contemporáneos desde marcos éticos y lógicos.</li>
      <li>Docencia e investigación en educación media y universitaria.</li>
      <li>Gestión cultural y editorial en museos, bibliotecas y centros culturales.</li>
      <li>Consultoría ética en bioética, ética empresarial y responsabilidad ciudadana.</li>
      <li>Escritura y comunicación: ensayos, artículos, libros y participación en debates.</li>
    </ul>,
    <p key="fil-resumen">
      En resumen, el filósofo egresado de la UCV es un pensador crítico y comunicador esencial para construir una
      sociedad más ética y consciente.
    </p>,
  ],
  geografia: [
    <p key="geo-intro">
      La Geografía en la UCV es una disciplina científica integral que estudia características físicas, biológicas y
      sociales del planeta, y la relación entre los seres humanos y su entorno.
    </p>,
    <h4 key="geo-perfil">Perfil del aspirante</h4>,
    <ul key="geo-perfil-list">
      <li>Interés por fenómenos físicos, naturales y socioeconómicos.</li>
      <li>Capacidades de observación, razonamiento lógico-abstracto y síntesis.</li>
      <li>Destreza para establecer relaciones espaciales y uso de herramientas informáticas.</li>
      <li>Conocimientos básicos de inglés.</li>
    </ul>,
    <h4 key="geo-info">Información académica</h4>,
    <ul key="geo-info-list">
      <li>Título otorgado: Licenciado en Geografía.</li>
      <li>Régimen de estudios: semestral.</li>
      <li>Duración: 10 semestres.</li>
    </ul>,
    <h4 key="geo-que-hace">¿Qué hace un Licenciado en Geografía?</h4>,
    <ul key="geo-que-hace-list">
      <li>Análisis del espacio geográfico en escalas local, regional y global.</li>
      <li>Uso de cartografía, teledetección, geodesia y estadística aplicada.</li>
      <li>Gestión socioambiental interdisciplinaria con otros campos científicos.</li>
      <li>Planificación del espacio social y territorial.</li>
    </ul>,
    <p key="geo-resumen">
      En resumen, el geógrafo es un intérprete crítico de la relación entre vida humana y dinámica biológica,
      ambiental y económica del territorio.
    </p>,
  ],
  historia: [
    <p key="his-intro">
      La Escuela de Historia de la UCV forma profesionales capaces de investigar, analizar y jerarquizar procesos
      humanos a lo largo del tiempo para aportar comprensión crítica de la realidad social.
    </p>,
    <h4 key="his-perfil">Perfil del aspirante</h4>,
    <ul key="his-perfil-list">
      <li>Capacidad para establecer relaciones causa-efecto y jerarquizar hechos.</li>
      <li>Interés por el manejo de fuentes y la crítica documental.</li>
      <li>Capacidad de síntesis, buena memoria y vocación investigativa.</li>
    </ul>,
    <h4 key="his-info">Información académica</h4>,
    <ul key="his-info-list">
      <li>Título otorgado: Licenciado en Historia.</li>
      <li>Régimen de estudios: semestral.</li>
      <li>Duración: 10 semestres.</li>
    </ul>,
    <h4 key="his-que-hace">¿Qué hace un Licenciado en Historia?</h4>,
    <ul key="his-que-hace-list">
      <li>Investigación científica con documentos, manuscritos, hallazgos y registros audiovisuales.</li>
      <li>Preservación del patrimonio y verificación de autenticidad documental.</li>
      <li>Docencia y producción intelectual en libros, ensayos y artículos.</li>
      <li>Asesoría histórica para agencias gubernamentales, editoriales y medios.</li>
    </ul>,
    <p key="his-resumen">
      En resumen, el historiador investiga y preserva el pasado para ofrecer comprensión crítica de la trayectoria
      cultural y social.
    </p>,
  ],
  'idiomas-modernos': [
    <p key="im-intro">
      La Escuela de Idiomas Modernos de la UCV se dedica al estudio, enseñanza y práctica profesional de lenguas
      contemporáneas para formar ciudadanos capaces de conectar culturas mediante la comunicación.
    </p>,
    <h4 key="im-oferta">Oferta académica</h4>,
    <ul key="im-oferta-list">
      <li>Licenciatura en Idiomas Modernos.</li>
      <li>Licenciatura en Traducción.</li>
      <li>Licenciatura en Traducción e Interpretación.</li>
    </ul>,
    <h4 key="im-idiomas">Idiomas de estudio</h4>,
    <p key="im-idiomas-texto">Cada estudiante elige dos idiomas entre alemán, inglés, italiano, francés y portugués.</p>,
    <p key="im-nota">No se requiere conocimiento previo de estos idiomas para ingresar a la carrera.</p>,
    <h4 key="im-info">Información académica</h4>,
    <ul key="im-info-list">
      <li>
        Títulos otorgados: Licenciado en Idiomas Modernos / Licenciado en Traducción / Licenciado en Traducción e
        Interpretación.
      </li>
      <li>Régimen de estudios: anual.</li>
      <li>Duración: 5 años.</li>
    </ul>,
    <h4 key="im-que-hace">¿Qué hace un profesional de Idiomas Modernos?</h4>,
    <ul key="im-que-hace-list">
      <li>Docencia de lenguas extranjeras en distintos niveles educativos.</li>
      <li>Traducción e interpretación para empresas, organismos internacionales y conferencias.</li>
      <li>Apoyo en relaciones internacionales, diplomacia y comercio exterior.</li>
      <li>Investigación lingüística y participación en proyectos culturales y turísticos.</li>
    </ul>,
    <p key="im-resumen">
      En resumen, forma profesionales con alto nivel comunicativo, didáctico y cultural para educación, diplomacia y
      mercado global.
    </p>,
  ],
  letras: [
    <p key="let-intro">
      La Escuela de Letras de la UCV se dedica al estudio del fenómeno literario, la lengua y sus manifestaciones
      culturales, formando profesionales con alta sensibilidad estética y capacidad crítica.
    </p>,
    <p key="let-enfoque">
      Su enfoque permite comprender cómo la palabra construye realidades, preserva memoria y dialoga con los problemas
      políticos y sociales contemporáneos.
    </p>,
    <h4 key="let-perfil">Perfil del aspirante</h4>,
    <ul key="let-perfil-list">
      <li>Hábito de lectura y experiencia en lecturas literarias.</li>
      <li>Sensibilidad estética y gusto por las humanidades.</li>
      <li>Interés por problemas culturales e históricos de la sociedad.</li>
      <li>Disposición para investigar y cuestionar el mundo a través del lenguaje.</li>
    </ul>,
    <h4 key="let-info">Información académica</h4>,
    <ul key="let-info-list">
      <li>Título otorgado: Licenciado en Letras.</li>
      <li>Régimen de estudios: semestral.</li>
      <li>Duración: 10 semestres.</li>
    </ul>,
    <h4 key="let-que-hace">¿Qué hace un Licenciado en Letras?</h4>,
    <ul key="let-que-hace-list">
      <li>Análisis literario y crítica desde perspectivas históricas y estilísticas.</li>
      <li>Investigación lingüística sobre estructura y variaciones de la lengua.</li>
      <li>Edición y corrección de textos literarios, académicos, periodísticos y corporativos.</li>
      <li>Gestión cultural y editorial en editoriales, bibliotecas y centros culturales.</li>
      <li>Docencia y periodismo cultural en distintos medios.</li>
    </ul>,
    <p key="let-resumen">
      En resumen, el profesional de Letras combina habilidades analíticas y creativas para comunicar, editar e
      interpretar el mundo desde el lenguaje.
    </p>,
  ],
  psicologia: [
    <p key="psi-intro">
      La Escuela de Psicología de la UCV es una disciplina científica y humanística orientada al estudio de procesos
      mentales, emociones y conducta, con formación ética para promover bienestar individual y colectivo.
    </p>,
    <h4 key="psi-menciones">Menciones especializadas</h4>,
    <ul key="psi-menciones-list">
      <li>Psicología Clínica.</li>
      <li>Psicología Clínica Dinámica.</li>
      <li>Psicología Social.</li>
      <li>Psicología Educativa.</li>
      <li>Psicología Industrial/Organizacional.</li>
      <li>Asesoramiento Psicológico y Orientación.</li>
    </ul>,
    <h4 key="psi-perfil">Perfil del aspirante</h4>,
    <p key="psi-perfil-texto">
      La formación requiere rigor científico y sensibilidad humana para investigar, intervenir y enseñar sobre
      pensamiento, emociones y comportamiento en personas, grupos y organizaciones.
    </p>,
    <h4 key="psi-info">Información académica</h4>,
    <ul key="psi-info-list">
      <li>Título otorgado: Licenciado en Psicología.</li>
      <li>Régimen de estudios: semestral.</li>
      <li>Duración: 10 semestres.</li>
    </ul>,
    <h4 key="psi-areas">Áreas de intervención profesional</h4>,
    <ul key="psi-areas-list">
      <li>Psicoterapia y acompañamiento en problemas psicológicos.</li>
      <li>Psicología clínica para diagnóstico y tratamiento de trastornos mentales.</li>
      <li>Psicología educativa para mejorar aprendizaje y desarrollo estudiantil.</li>
      <li>Psicología organizacional para bienestar y comportamiento laboral.</li>
      <li>Psicología deportiva para rendimiento mental y emocional.</li>
      <li>Psicología forense vinculada al sistema legal.</li>
      <li>Psicología de la salud para promoción de salud mental y manejo de enfermedades crónicas.</li>
      <li>Psicología social para estudiar interacción e influencia entre personas y grupos.</li>
    </ul>,
    <p key="psi-resumen">
      En resumen, el psicólogo cumple un rol fundamental en la comprensión y abordaje de dimensiones mentales y
      emocionales para fortalecer el bienestar social.
    </p>,
  ],
}

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
  table: ({ ...props }) => (
    <div className="md-table-wrap">
      <table className="md-table" {...props} />
    </div>
  ),
  thead: ({ ...props }) => <thead className="md-thead" {...props} />,
  tbody: ({ ...props }) => <tbody className="md-tbody" {...props} />,
  tr: ({ ...props }) => <tr className="md-tr" {...props} />,
  th: ({ ...props }) => <th className="md-th" {...props} />,
  td: ({ ...props }) => <td className="md-td" {...props} />,
}

function SiteLayout({ children }) {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSchoolsOpen, setIsSchoolsOpen] = useState(false)

  useEffect(() => {
    setIsMenuOpen(false)
    setIsSchoolsOpen(false)
  }, [location.pathname])

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
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((value) => !value)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
        <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
          <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
            Inicio
          </NavLink>
          <NavLink to="/contacto" onClick={() => setIsMenuOpen(false)}>
            Contacto
          </NavLink>
          <div className={`dropdown ${isSchoolsOpen ? 'open' : ''}`}>
            <button
              className="dropdown-trigger"
              type="button"
              aria-haspopup="menu"
              aria-expanded={isSchoolsOpen}
              onClick={() => setIsSchoolsOpen((value) => !value)}
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
        <motion.div variants={fadeInUp} className="hero-panel">
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
          <p className="muted" style={{fontSize:'1.3em', marginLeft:'0'}}>
            Formamos profesionales con visión crítica, sentido ético y compromiso social.
            Nuestra facultad integra docencia, investigación y extensión para responder a
            los retos del país desde el conocimiento humanista.
          </p>
        </motion.div>
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
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [normalizedSlug])

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
  const pensumDownloadSources = schoolPensumDownloadSources[school.slug] ?? []
  const descriptionBlocks = schoolDescriptionBlocks[school.slug] ?? []

  return (
    <motion.section
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

      <section className="school-description">
        <p className="eyebrow">Descripción de la escuela</p>
        <h3>Conoce la carrera</h3>
        <div className="school-description-content">{descriptionBlocks}</div>
      </section>

      <section className="school-pensum">
        <p className="eyebrow">Oferta académica detallada</p>
        <h3>Pensum completo</h3>

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
      <p className="hero-text" style={{margin: '50px 0'}}>
        Estamos disponibles para ayudarte con información académica, procesos
        administrativos y orientación para aspirantes.
      </p>

      <div className="school-grid">
        <motion.article
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
        </motion.article>
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
