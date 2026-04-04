import {
  BookOpen,
  Brain,
  HeartPulse,
  Landmark,
  Languages,
  MapPinned,
  Newspaper,
  Palette,
  PenSquare,
  School,
} from 'lucide-react'
import { getPensumDocUrl } from '../utils/pensum'

export const schools = [
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

export const schoolIcons = {
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

export const schoolLogos = {
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

export const schoolPensumSources = {
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

export const schoolPensumDownloadSources = {
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

export const schoolDescriptionBlocks = {
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

export const schoolSocialLinks = {
  artes: [
    {
      label: 'Centro de Estudiantes de Artes',
      url: 'https://www.instagram.com/ceea_ucv?igsh=OHh3M25iZTdkN3py',
      handle: '@ceea_ucv',
    },
    {
      label: 'Escuela de Artes',
      url: 'https://www.instagram.com/artes_ucv?igsh=MWc2dnJsNzVvOWF5Yw==',
      handle: '@artes_ucv',
    },
  ],
  'bibliotecologia-archivologia': [
    {
      label: 'Centro de Estudiantes de Bibliotecología',
      url: 'https://www.instagram.com/ceebaucv?igsh=ZjlwOXpseTE0bHJ4',
      handle: '@ceebaucv',
    },
    {
      label: 'Comisión de Apoyo al Estudiante con Discapacidad',
      url: 'https://www.instagram.com/caedeba?igsh=MTRlcWtvZDZ1a2d6cw==',
      handle: '@caedeba',
    },
  ],
  'comunicacion-social': [
    {
      label: 'Escuela de Comunicación Social',
      url: 'https://www.instagram.com/ecs_ucv?igsh=aGRoMHBwaDFmb2tt',
      handle: '@ecs_ucv',
    },
  ],
  educacion: [
    {
      label: 'Escuela de Educación',
      url: 'https://www.instagram.com/escueladeeducacionucv?igsh=MXFqam50MzNiM3ZsdQ==',
      handle: '@escueladeeducacionucv',
    },
    {
      label: 'Centro de Estudiantes de Educación',
      url: 'https://www.instagram.com/ceee.ucv?igsh=MTFiMHNrNWt3aGx4bg==',
      handle: '@ceee.ucv',
    },
  ],
  filosofia: [
    {
      label: 'Centro de Estudiantes de Filosofía',
      url: 'https://www.instagram.com/cee_filosofia?igsh=ZWptaTRvd3czOGIw',
      handle: '@cee_filosofia',
    },
    {
      label: 'Escuela de Filosofía',
      url: 'https://www.instagram.com/escuelafilosofiaucv?igsh=NWs1cGZwODFmY2hr',
      handle: '@escuelafilosofiaucv',
    },
  ],
  historia: [
    {
      label: 'Escuela de Historia',
      url: 'https://www.instagram.com/ceehucv?igsh=YzZ1M2htZ3M0N2Nt',
      handle: '@ceehucv',
    },
  ],
  'idiomas-modernos': [
    {
      label: 'Escuela de Idiomas Modernos',
      url: 'https://www.instagram.com/ce_eim?igsh=bzIyenJldXRhdjBs',
      handle: '@ce_eim',
    },
  ],
  letras: [
    {
      label: 'Centro de Estudiantes de Letras',
      url: 'https://www.instagram.com/ceelucv?igsh=MW9yc2ZlbXZnOTk4bg==',
      handle: '@ceelucv',
    },
    {
      label: 'Escuela de Letras',
      url: 'https://www.instagram.com/escueladeletrasucv?igsh=Yzh0dGdqcDBlODNw',
      handle: '@escueladeletrasucv',
    },
  ],
  psicologia: [
    {
      label: 'Centro de Estudiantes de Psicología',
      url: 'https://www.instagram.com/ceep.ucv?igsh=MXRxMWlxajFldXFwMg==',
      handle: '@ceep.ucv',
    },
  ],
}

export const mergedCareerSlugMap = {
  bibliotecologia: 'bibliotecologia-archivologia',
  archivologia: 'bibliotecologia-archivologia',
}
