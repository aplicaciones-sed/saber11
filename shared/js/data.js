// ════════════ QUESTION & LEVEL DATA ════════════
// Metadata for questions and level information

/* ════════════ SUBJECTS & SIMULACROS ════════════ */
const SUBJ_INFO = {
  lc: {
    name: "Lectura Crítica",
    icon: "📖",
    tag: "tag-lc",
    color: "#6c4bc0",
    desc: "La prueba de Lectura Crítica evalúa las competencias necesarias para comprender, interpretar y evaluar textos que pueden encontrarse en la vida cotidiana y en ámbitos académicos no especializados. Se espera que los estudiantes que culminan la educación media cuenten con las capacidades lectoras para tomar posturas críticas frente a esta clase de texto.",
    competencias: [
      "Identificar y entender los contenidos locales que conforman un texto.",
      "Comprender cómo se articulan las partes de un texto para darle un sentido global.",
      "Reflexiona a partir de un texto y evaluar su contenido.",
    ],
  },
  mat: {
    name: "Matemáticas",
    icon: "📐",
    tag: "tag-mat",
    color: "#1a3a5c",
    desc: "Evalúa competencias matemáticas.",
    competencias: [
      "Interpretación y representación",
      "Formulación y ejecución",
      "Argumentación",
    ],
  },
  soc: {
    name: "Sociales",
    icon: "🌎",
    tag: "tag-soc",
    color: "#1e8a4a",
    desc: "Evalúa conocimientos en ciencias sociales.",
    competencias: [
      "Pensamiento social",
      "Interpretación y análisis de perspectivas",
      "Pensamiento reflexivo y sistémico",
    ],
  },
  cn: {
    name: "Ciencias Naturales",
    icon: "🔬",
    tag: "tag-cn",
    color: "#c0392b",
    desc: "Evalúa competencias científicas.",
    competencias: [
      "Uso comprensivo del conocimiento científico",
      "Explicación de fenómenos",
      "Indagación",
    ],
  },
  ing: {
    name: "Inglés",
    icon: "🇬🇧",
    tag: "tag-ing",
    color: "#e8a020",
    desc: "Evalúa competencias en inglés.",
    competencias: [
      "Competencia lingüística",
      "Competencia pragmática",
      "Competencia sociolingüística",
    ],
  },
};

const SIMULACROS = {
  1: {
    id: 1,
    nombre: "Simulacro Dinámico",
    titulo: "SABER 11°",
    descripcion: "Configura tu examen - Selecciona materias, cantidad de preguntas y orden",
    shortName: "Simulacro",
    cacheName: "simulacro-v1",
    dinamico: true,
  },
  2: {
    id: 2,
    nombre: "Simulacro 2",
    titulo: "SABER 11°",
    descripcion: "Primer simulacro SED",
    shortName: "Sim2",
    cacheName: "simulacro-v1",
    dinamico: false,
  },
  3: {
    id: 3,
    nombre: "Simulacro 3",
    titulo: "SABER 11°",
    descripcion: "prueba",
    shortName: "Simulacro 3",
    cacheName: "simulacro3",
    dinamico: false,
  },
};

const DEFAULT_SUBJECT_CONFIG = {
  lc: { preguntas: 3, inicio: 1, aleatorio: true },
  mat: { preguntas: 3, inicio: 1, aleatorio: true },
  soc: { preguntas: 3, inicio: 1, aleatorio: true },
  cn: { preguntas: 3, inicio: 1, aleatorio: true },
  ing: { preguntas: 3, inicio: 1, aleatorio: true },
};

function getSubjectDefaultConfig(subject) {
  return DEFAULT_SUBJECT_CONFIG[subject] || { preguntas: 3, inicio: 1, aleatorio: true };
}

function getSubjectMaxQuestions(subject, simulacroId = 1) {
  if (typeof QUESTIONS === "undefined") return 0;
  return QUESTIONS.filter(
    (q) => q.subject === subject && q.simulators && q.simulators.includes(simulacroId)
  ).length;
}

function validateSubjectConfig(subject, config, simulacroId = 1) {
  const maxQuestions = getSubjectMaxQuestions(subject, simulacroId);
  const errors = [];
  
  if (config.preguntas < 1) {
    errors.push("El número mínimo de preguntas es 1");
  }
  if (config.preguntas > maxQuestions) {
    errors.push(`Máximo ${maxQuestions} preguntas disponibles para ${SUBJ_INFO[subject]?.name || subject}`);
  }
  if (config.inicio < 1) {
    errors.push("El número de inicio debe ser al menos 1");
  }
  if (config.inicio > maxQuestions) {
    errors.push(`El inicio no puede superar el total de preguntas (${maxQuestions})`);
  }
  if (config.inicio + config.preguntas - 1 > maxQuestions) {
    errors.push(`El rango excede el total de preguntas disponibles (inicio ${config.inicio} + ${config.preguntas - 1} > ${maxQuestions})`);
  }
  
  return errors;
}

function buildDynamicQuestions(subject, config, simulacroId = 1) {
  if (typeof QUESTIONS === "undefined") return [];
  
  const allQuestions = QUESTIONS.filter(
    (q) => q.subject === subject && q.simulators && q.simulators.includes(simulacroId)
  );
  
  let selectedQuestions;
  
  if (config.aleatorio) {
    // Mezclar TODO el pool y tomar las primeras X
    const shuffled = [...allQuestions];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    selectedQuestions = shuffled.slice(0, config.preguntas);
  } else {
    // Sin aleatorio: tomar desde inicio
    const startIndex = config.inicio - 1;
    const endIndex = startIndex + config.preguntas;
    selectedQuestions = allQuestions.slice(startIndex, endIndex);
  }
  
  return selectedQuestions;
}

function getSimulacroSubjects(simId) {
  if (typeof QUESTIONS === "undefined") return [];
  const subjectKeys = ["lc", "mat", "soc", "cn", "ing"];
  return subjectKeys
    .filter((subj) => {
      return QUESTIONS.some(
        (q) =>
          q.subject === subj && q.simulators && q.simulators.includes(simId),
      );
    })
    .map((key) => ({
      key: key,
      name: SUBJ_INFO[key].name,
      icon: SUBJ_INFO[key].icon,
    }));
}

function getSimulacroQuestionCount(simId) {
  if (typeof QUESTIONS === "undefined") return 0;
  return QUESTIONS.filter((q) => q.simulators && q.simulators.includes(simId))
    .length;
}

/* ════════════ META_QB - Question Metadata ════════════ */
const META_QB = {
  lc: [
    {
      comp: "Reflexiona a partir de un texto y evalúa su contenido",
      afirm: "Reflexiona a partir de un texto y evalúa su contenido",
      nivel: "4",
      tipo: "Informativo-filos\u00f3fico",
    },
    {
      comp: "Comprende cómo se articulan las partes de un texto para darle un sentido global",
      afirm:
        "Relaciona, identifica y deduce información para construir el sentido global de un texto",
      nivel: "2",
      tipo: "Discontinuo-literario",
    },
    {
      comp: "Comprende cómo se articulan las partes de un texto para darle un sentido global",
      afirm:
        "Relaciona, identifica y deduce información para construir el sentido global de un texto",
      nivel: "3",
      tipo: "Continuo-literario",
    },
    {
      comp: "Reflexiona a partir de un texto y evalúa su contenido",
      afirm: "Reflexiona a partir de un texto y evalúa su contenido",
      nivel: "4",
      tipo: "Continuo-informativo",
    },
    {
      comp: "Comprende el significado de un texto en su contexto",
      afirm: "Recupera información explícita e implícita de un texto",
      nivel: "3",
      tipo: "Discontinuo-informativo",
    },
    {
      comp: "Comprende cómo se articulan las partes de un texto para darle un sentido global",
      afirm: "Identifica y caracteriza las ideas que articulan un texto",
      nivel: "4",
      tipo: "Informativo-filos\u00f3fico",
    },
  ],
  mat: [
    {
      comp: "Interpretación y representación",
      afirm:
        "Comprende y transforma la información cuantitativa y esquemática presentada en distintos formatos",
      nivel: "3",
    },
    {
      comp: "Formulación",
      afirm:
        "Frente a un problema que involucre información cuantitativa, plantea e implementa estrategias que lleguen a soluciones adecuadas",
      nivel: "4",
    },
    {
      comp: "Interpretación y representación",
      afirm:
        "Comprende y transforma la información cuantitativa y esquemática presentada en distintos formatos",
      nivel: "2",
    },
    {
      comp: "Argumentación",
      afirm:
        "Valida procedimientos y estrategias matemáticas utilizadas para dar solución a problemas",
      nivel: "4",
    },
    {
      comp: "Interpretación y representación",
      afirm:
        "Comprende y transforma la información cuantitativa y esquemática presentada en distintos formatos",
      nivel: "2",
    },
    {
      comp: "Formulación",
      afirm:
        "Frente a un problema que involucre información cuantitativa, planta e implementa estrategias que lleguen a soluciones adecuadas",
      nivel: "2",
    },
    {
      comp: "Argumentación",
      afirm:
        "Valida procedimientos y estrategias matemáticas utilizadas para dar solución a problemas",
      nivel: "3",
    },
    {
      comp: "Formulación",
      afirm:
        "Frente a un problema que involucre información cuantitativa, planta e implementa estrategias que lleguen a soluciones adecuadas",
      nivel: "3",
    },
    {
      comp: "Argumentación",
      afirm:
        "Valida procedimientos y estrategias matemáticas utilizadas para dar solución a problemas",
      nivel: "4",
    },
  ],
  soc: [
    {
      comp: "Pensamiento social",
      afirm:
        "Comprende modelos conceptuales, sus características y contextos de aplicación",
      nivel: "2",
    },
    {
      comp: "Pensamiento social",
      afirm:
        "Comprende modelos conceptuales, sus características y contextos de aplicación",
      nivel: "2",
    },
    {
      comp: "Pensamiento social",
      afirm:
        "Comprende dimensiones espaciales y temporales de eventos, problemáticas y prácticas sociales",
      nivel: "4",
    },
    {
      comp: "Interpretación y análisis de perspectivas",
      afirm: "Comprende perspectivas de distintos actores y grupos sociales",
      nivel: "2",
    },
    {
      comp: "Interpretación y análisis de perspectivas",
      afirm: "Contextualiza y evalúa usos de fuentes y argumentos",
      nivel: "3",
    },
    {
      comp: "Interpretación y análisis de perspectivas",
      afirm: "Contextualiza y evalúa usos de fuentes y argumentos",
      nivel: "3",
    },
    {
      comp: "Pensamiento reflexivo y sistémico",
      afirm:
        "Comprende que los problemas y sus soluciones involucran distintas dimensiones y reconoce relaciones entre estas",
      nivel: "2",
    },
    {
      comp: "Pensamiento reflexivo y sistémico",
      afirm: "Evalúa usos sociales de las ciencias sociales",
      nivel: "3",
    },
    {
      comp: "Pensamiento reflexivo y sistémico",
      afirm: "Evalúa usos sociales de las ciencias sociales",
      nivel: "4",
    },
  ],
  cn: [
    {
      comp: "Uso comprensivo del conocimiento científico",
      afirm:
        "Asociar fenómenos naturales con conceptos propios del conocimiento científico",
      nivel: "3",
    },
    {
      comp: "Uso comprensivo del conocimiento científico",
      afirm:
        "Asociar fenómenos naturales con conceptos propios del conocimiento científico",
      nivel: "4",
    },
    {
      comp: "Uso comprensivo del conocimiento científico",
      afirm:
        "Identificar las características de algunos fenómenos de la naturaleza basado en el análisis de información y conceptos propios del conocimiento científico",
      nivel: "3",
    },
    {
      comp: "Explicación de fenómenos",
      afirm:
        "Explicar cómo ocurren algunos fenómenos de la naturaleza basado en observaciones, en patrones y en conceptos propios del conocimiento científico",
      nivel: "3",
    },
    {
      comp: "Explicación de fenómenos",
      afirm:
        "Modelar fenómenos de la naturaleza basado en el análisis de variables, la relación entre dos o más conceptos del conocimiento científico y de la evidencia derivada de investigaciones científicas",
      nivel: "3",
    },
    {
      comp: "Explicación de fenómenos",
      afirm:
        "Analizar el potencial del uso de recursos naturales o artefactos y sus efectos sobre el entorno y la salud, así como las posibilidades de desarrollo para las comunidades",
      nivel: "2",
    },
    {
      comp: "Indagación",
      afirm:
        "Comprender que a partir de la investigación científica se construyen explicaciones sobre el mundo natural",
      nivel: "2",
    },
    {
      comp: "Indagación",
      afirm:
        "Derivar conclusiones para algunos fenómenos de la naturaleza basándose en conocimientos científicos y en la evidencia de su propia investigación y de la de otros",
      nivel: "4",
    },
    {
      comp: "Indagación",
      afirm:
        "Observar y relacionar patrones en los datos para evaluar las predicciones",
      nivel: "2",
    },
    {
      comp: "Indagación",
      afirm:
        "Utilizar algunas habilidades de pensamiento y de procedimiento para evaluar predicciones",
      nivel: "2",
    },
  ],
  ing: [
    {
      comp: "Reading comprehension",
      afirm: "Comprende información explícita en textos de mediana complejidad",
      nivel: "B1",
    },
    {
      comp: "Reading comprehension",
      afirm: "Comprende información explícita e implícita en textos cortos",
      nivel: "B1",
    },
    {
      comp: "Reading comprehension",
      afirm: "Comprende el sentido general de una conversación corta",
      nivel: "A2",
    },
    {
      comp: "Reading comprehension",
      afirm:
        "Comprende la intención comunicativa de un texto de mediana extensión",
      nivel: "B1+",
    },
  ],
};

/* ════════════ NIVEL_INFO - Level Information ════════════ */
const NIVEL_INFO = {
  lc: {
    name: 'Lectura Crítica',
    1: { range: 'Puntaje 0 – 35', summary: '', items: ['El estudiante que se ubica en este nivel probablemente identifica elementos literales en textos continuos y discontinuos sin establecer relaciones de significado.'] },
    2: { range: 'Puntaje 36 – 50', summary: 'Además de lo descrito en el nivel anterior, el estudiante que se ubica en este nivel comprende textos continuos y discontinuos de manera literal. Reconoce información explícita y la relaciona con el contexto. <br>Para clasificar en este nivel, el estudiante:', 
    items: [
      'Identifica información local del texto.',
      'Identifica la estructura de textos continuos y discontinuos.',
      'Identifica relaciones básicas entre componentes del texto.',
      'Identifica fenómenos semánticos básicos: sinónimos y antónimos.',
      'Reconoce en un texto la diferencia entre proposición y párrafo.',
      'Reconoce el sentido local y global del texto.',
      'Identifica intenciones comunicativas explícitas.',
      'Identifica relaciones básicas: contraste, similitud y complementación, entre textos presentes.'] },
    3: { range: 'Puntaje 51 – 65', summary: 'Además de lo descrito en los niveles anteriores, el estudiante que se ubica en este nivel interpreta información de textos al inferir contenidos implícitos y reconocer estructuras, estrategias discursivas y juicios valorativos. <br>Para clasificar en este nivel, el estudiante:', 
    items: [
      'Jerarquiza la información presente en un texto.',
      'Infiere información implícita en textos continuos y discontinuos.',
      'Establece relaciones intertextuales: definición, causa-efecto, oposición y antecedente-consecuente, entre textos presentes.',
      'Reconoce la intención comunicativa del texto.',
      'Relaciona marcadores textuales en la interpretación de textos.',
      'Reconoce la función de figuras literarias.',
      'Identifica el uso del lenguaje en contexto.',
      'Analiza y sintetiza la información contenida en un texto.',
      'Identifica la estructura sintáctica en textos discontinuos.',
      'Establece la validez de argumentos en un texto.'] },
    4: { range: 'Puntaje 66 – 100', summary: 'Además de lo descrito en los niveles anteriores, el estudiante que se ubica en este nivel reflexiona a partir de un texto sobre la visión de mundo del autor (costumbres, creencias, juicios, carácter ideológico-político y posturas éticas, entre otros). Asimismo, da cuenta de elementos paratextuales significativos presentes en el texto. Finalmente, valora y contrasta los elementos mencionados con la posición propia. <br>Para clasificar en este nivel, el estudiante:', 
    items: ['Propone soluciones a problemas de interpretación que subyacen en un texto.',
    'Evalúa contenidos, estrategias discursivas y argumentativas presentes en un texto.',
    'Relaciona información de dos o más textos o fragmentos de texto para llegar a una conclusión.',
    'Aplica conceptos de análisis literario para caracterizar diferentes elementos en un texto.',
    'Reconoce los contextos como elementos importantes en la valoración de un texto.',
    'Selecciona elementos locales y construye argumentos que sustentan una tesis con base en textos relacionados.',
    'Asume una postura crítica frente a los planteamientos de un texto.',
    'Plantea hipótesis de lectura a partir de las ideas presentes en un texto.'] }
  },
  mat: {
    name: 'Matemáticas',
    1: { range: 'Puntaje 0 – 35', summary: '', 
    items: ['El estudiante que se ubica en este nivel probablemente puede leer información puntual (un dato, por ejemplo) relacionada con situaciones cotidianas y presentada en tablas o gráficas con escala explícita, cuadrícula o, por lo menos, líneas horizontales; pero puede tener dificultades al comparar distintos conjuntos de datos, involucrar diferentes variables o analizar situaciones alejadas de su vida diaria.'] },
    2: { range: 'Puntaje 36 – 50', summary: 'Además de lo descrito en el nivel anterior, el estudiante que se ubica en este nivel es capaz de hacer comparaciones y establecer relaciones entre los datos presentados, e identificar y extraer información local y global de manera directa. Lo anterior en contextos familiares o personales que involucran gráficas con escala explícita, cuadrícula o, por lo menos, líneas horizontales u otros formatos con poca información. <br>Para clasificar en este nivel, el estudiante:', 
    items: [
      'Compara datos de dos variables presentadas en una misma gráfica sin operaciones aritméticas.',
    'Identifica valores o puntos representativos en diferentes tipos de registro a partir del significado que tienen en la situación.',
    'Compara la probabilidad de eventos simples (casos favorables/casos posibles), cuando los casos posibles son los mismos en ambos eventos y en contextos similares a los presentados en el aula.',
    'Toma decisiones sobre la veracidad o falsedad de una afirmación cuando esta se puede explicar verbalizando la lectura directa que se hace de la información.',
    'Cambia gráficas de barras a tablas de doble entrada.',
    'Reconoce e interpreta el significado de promedio simple, moda, mayor, menor, máximo y mínimo.'] },
    3: { range: 'Puntaje 51 – 70', summary: 'Además de lo descrito en los niveles anteriores, el estudiante que se ubica en este nivel selecciona información, señala errores y hace distintos tipos de transformaciones y manipulaciones aritméticas y algebraicas sencillas; esto para enfrentarse a problemas que involucran el uso de conceptos de proporcionalidad, factores de conversión, áreas y desarrollos planos, en contextos laborales u ocupacionales, matemáticos o científicos, y comunitarios o sociales.<br> Para clasificar en este nivel, el estudiante:', 
    items: [
      'Selecciona la gráfica (que puede ser de doble entrada) correspondiente a la información de una tabla, o a partir de verbalizaciones (características de crecimiento o decrecimiento deseadas), teniendo en cuenta para la selección la escala, el tipo de variable y el tipo de gráfica.',
      'Compara información gráfica que requiere algunas manipulaciones aritméticas.',
      'Señala información representada en formatos no convencionales (mapas o infografías).',
      'Reconoce errores ocurridos al realizar una transformación entre diferentes tipos de registro.',
      'Reconoce desarrollos planos de una forma tridimensional y viceversa.',
      'Compara la probabilidad de eventos simples en diversos contextos (casos favorables/casos posibles), incluso cuando los casos posibles de cada evento son diferentes.',
      'Selecciona información necesaria para resolver problemas que involucran operaciones aritméticas.',
      'Selecciona información necesaria para resolver problemas que involucran características medibles de figuras geométricas elementales (triángulos, cuadriláteros y circunferencias).',
      'Cambia la escala cuando la transformación no es convencional.',
      'Justifica afirmaciones utilizando planteamientos y operaciones aritméticas o haciendo uso directo de un concepto, es decir, a partir de un único argumento.',
      'Identifica información relevante cuando el tipo de registro contiene información de más de tres categorías.',
      'Hace manipulaciones algebraicas sencillas (aritmética de términos semejantes).'] },
    4: { range: 'Puntaje 71 – 100', summary: 'Además de lo descrito en los niveles anteriores, el estudiante que se ubica en este nivel resuelve problemas y justifica la veracidad o falsedad de afirmaciones que requieren el uso de conceptos de probabilidad, propiedades algebraicas, relaciones trigonométricas y características de funciones reales. Lo anterior, en contextos principalmente matemáticos o científicos abstractos.<br> Para clasificar en este nivel, el estudiante:', 
    items: [
      'Resuelve problemas que requieren interpretar información de eventos dependientes.',
    'Realiza transformaciones de subconjuntos de información que pueden requerir el uso de operaciones complejas (cálculos de porcentajes).',
    'Resuelve problemas que requieren construir una representación auxiliar (gráficas y fórmulas) como paso intermedio para su solución.',
    'Modela usando lenguaje algebraico información dada en lenguaje natural, tablas o representaciones geométricas.',
    'Manipula expresiones algebraicas o aritméticas haciendo uso de las propiedades de las operaciones.',
    'Modela fenómenos variacionales no explícitos haciendo uso de lenguaje simbólico o gráficas.',
    'Reconoce en diferentes formatos el espacio muestral de un experimento aleatorio.',
    'Resuelve problemas de conteo que requieren el uso de permutaciones.',
    'Justifica si hay falta de información en una situación problema para tomar una decisión.',
  'Toma decisiones sobre la veracidad o falsedad de una afirmación cuando requiere el uso de varias propiedades o conceptualizaciones formales.'] }
  },
  soc: {
    name: 'Sociales y Ciudadanas',
    1: { range: 'Puntaje 0 – 40', summary: '', 
    items: ['El estudiante que se ubica en este nivel podría reconocer algunos derechos ciudadanos en situaciones sencillas. Adicionalmente, podría reconocer factores que generan un conflicto e identificar creencias que explican algunos comportamientos. Este estudiante probablemente no está en capacidad de utilizar conceptos de las ciencias sociales o modelos conceptuales, ni de reconocer principios constitucionales o de analizar enunciados.'] },
    2: { range: 'Puntaje 41 – 55', summary: 'Además de lo descrito en el nivel anterior, el estudiante que se ubica en este nivel reconoce deberes del Estado colombiano y situaciones de protección o vulneración de derechos en el marco del Estado social de derecho; identifica relaciones entre conductas de las personas y sus cosmovisiones; y reconoce las dimensiones presentes en una situación, problema, decisión tomada o propuesta de solución. Además, contextualiza fuentes y procesos sociales. <br> En este nivel, se presentan contextos cuya descripción es corta, con pocos actores, enunciados directos y posturas o posiciones explícitas, sencillas y claras. Además, se presentan situaciones cercanas a la cotidianidad del estudiante o de conocimiento y amplia discusión pública. <br> Para clasificar en este nivel, el estudiante:', 
    items: [
      'Identifica derechos ciudadanos y deberes del Estado establecidos en la Constitución Política de Colombia.',
    'Relaciona la conducta de una persona con su forma de ver la vida.',
    'Reconoce los efectos de una solución y las dimensiones que privilegia.',
    'Identifica contextos o procesos en los que se inscribe una fuente o evento.'] },
    3: { range: 'Puntaje 56 – 70', summary: 'Además de lo descrito en los niveles anteriores, el estudiante que se ubica en este nivel identifica prejuicios o intenciones contenidos en una afirmación y reconoce las dimensiones e intereses involucrados en un problema o alternativa de solución. Asimismo, identifica algunos conceptos básicos de las ciencias sociales y modelos conceptuales, y valora y contextualiza la información presentada en una fuente.<br> En este nivel, las competencias se evalúan tanto en situaciones cotidianas o de amplio conocimiento y discusión pública como en contextos más lejanos y complejos, algunos de ellos con descripciones más largas que las del nivel anterior. <br>Para clasificar en este nivel, el estudiante:', 
    items: [
      'Reconoce intenciones y prejuicios, así como argumentos similares o diferentes dados en un contexto o una situación específica.',
      'Identifica dimensiones (económicas, políticas, culturales, ambientales, etc.) involucradas en situaciones, problemáticas o propuestas de solución.',
      'Identifica y compara opiniones e intereses de diferentes actores involucrados en una situación problemática y establece relaciones entre esas posturas y posibles soluciones.',
      'Reconoce algunos conceptos básicos de las ciencias sociales.',
      'Identifica supuestos y usos de algunos modelos conceptuales.',
      'Relaciona contextos históricos y/o geográficos con fuentes, situaciones y prácticas sociales.',
      'Valora la información contenida en una fuente y reconoce sus alcances.'] },
    4: { range: 'Puntaje 71 – 100', summary: 'Además de lo descrito en los niveles anteriores, el estudiante que se ubica en este nivel conoce algunas disposiciones de la Constitución Política de Colombia que posibilitan la participación ciudadana y el control a los poderes públicos; analiza y compara enunciados, intereses y argumentos; y evalúa alternativas de solución a un problema. Este estudiante analiza situaciones a partir de conceptos básicos de las ciencias sociales o de contextos históricos y/o geográficos. A su vez, relaciona fuentes y políticas con modelos conceptuales, y valora los contenidos de una fuente.<br> En este nivel, las competencias se evalúan principalmente en contextos que pueden estar alejados de la cotidianidad del estudiante y que no necesariamente son de amplia discusión pública. Se incluyen preguntas con contextos cortos que requieren ciertos conocimientos sociales, históricos, políticos, culturales y económicos adicionales para ser respondidas correctamente. El estudiante de este nivel es capaz de abordar las preguntas de manera objetiva y realizar el ejercicio cognitivo esperado, independientemente de su posición personal. Finalmente, el estudiante logra identificar diferencias sutiles entre conceptos, entre intenciones y entre intereses de diferentes actores.<br> Para clasificar en este nivel, el estudiante:', 
    items: [
      'Conoce los procedimientos de reforma a la Constitución, los mecanismos de participación ciudadana y las funciones de los organismos de control.',
      'Compara enunciados o argumentos, así como intereses y posiciones de actores en contextos en los que se discuten situaciones problemáticas o sus alternativas de solución.',
      'Relaciona propuestas de solución a un problema con su contexto de implementación o sus posibles impactos en ciertas dimensiones (económicas, políticas, culturales, ambientales, etc.).',
      'Entiende problemáticas, eventos o procesos sociales a partir del uso de conceptos básicos de las ciencias sociales, o a partir de contextos históricos y/o geográficos.',
      'Analiza fuentes (primarias y secundarias) para valorar inferencias o identificar intenciones y características de los actores involucrados y contextos en los que se ubican dichas fuentes.',
      'Establece relaciones entre modelos conceptuales y fuentes que los abordan o decisiones sociales que los aplican.'] }
  },
  cn: {
    name: 'Ciencias Naturales',
    1: { range: 'Puntaje 0 – 40', summary: '', 
    items: ['El estudiante que se ubica en este nivel muy posiblemente alcanza a reconocer información explícita, presentada de manera ordenada en tablas o gráficas, con un lenguaje cotidiano y que implica la lectura de una sola variable independiente. Por lo tanto, estos estudiantes demuestran un insuficiente desarrollo de la competencia Indagación definida en el marco teórico de la prueba.'] },
    2: { range: 'Puntaje 41 – 55', summary: 'Además de lo descrito en el nivel anterior, el estudiante que se ubica en este nivel reconoce información suministrada en tablas, gráficas y esquemas de una sola variable independiente, y la asocia con nociones de los conceptos básicos de las ciencias naturales (tiempo, posición, velocidad, imantación y filtración).<br> Para clasificar en este nivel, el estudiante:', 
    items: [
      'Identifica patrones y características a partir de información presentada en textos, gráficas y tablas.',
      'Relaciona esquemas con nociones básicas del conocimiento científico.',
      'Establece predicciones a partir de datos presentados en tablas, gráficas y esquemas donde se presentan patrones claramente crecientes o decrecientes.',
      'Ordena datos e información en gráficas y tablas.'] },
    3: { range: 'Puntaje 56 – 70', summary: 'Además de lo descrito en los niveles anteriores, el estudiante que se ubica en este nivel interrelaciona conceptos, leyes y teorías científicas con información presentada en diversos contextos, en los que intervienen dos o más variables, para hacer inferencias sobre una situación problema o un fenómeno natural. <br> Para clasificar en este nivel, el estudiante:', 
    items: [
      'Establece relaciones de causa-efecto usando información no suministrada.',
      'Interpreta gráficas, tablas y modelos para hacer predicciones.',
      'Establece relaciones entre conceptos, leyes y teorías científicas con diseños experimentales y sus resultados.',
      'Diferencia entre evidencias y conclusiones.',
      'Plantea hipótesis basadas en evidencias.','Relaciona variables para explicar algunos fenómenos naturales.'] },
    4: { range: 'Puntaje 71 – 100', summary: 'Además de lo descrito en los niveles anteriores, el estudiante que se ubica en este nivel usa conceptos, teorías o leyes en la solución de situaciones problema que involucran procedimientos, habilidades, conocimientos y un lenguaje propio de las ciencias naturales.<br> Para clasificar en este nivel, el estudiante:', 
items: [
  'Plantea preguntas de investigación desde las ciencias naturales a partir de un contexto determinado.',
'Establece conclusiones derivadas de una investigación.',
'Contrasta modelos de las ciencias naturales con fenómenos cotidianos.',
'Resuelve situaciones problema haciendo uso de conceptos, leyes y teorías de las ciencias naturales.',
'Comunica resultados de procesos de investigación científica.',
'Analiza fenómenos naturales con base en los procedimientos propios de la investigación científica.'] }
  },
  ing: {
    name: 'Inglés',
    0: { range: 'Puntaje 0 – 47 (A−)', summary: '', items: ['El estudiante promedio clasificado en este nivel no supera las preguntas de menor complejidad de la prueba.'] },
    1: { range: 'Puntaje 48 – 57 (A1)', summary: '', 
    items: ['El estudiante es capaz de comprender y utilizar expresiones cotidianas de uso muy frecuente, así como frases sencillas destinadas a satisfacer necesidades inmediatas.',
    'Puede presentarse a sí mismo y a otros, pedir y dar información personal básica sobre su domicilio, sus pertenencias y las personas que conoce.',
    'Puede relacionarse de forma elemental con su interlocutor siempre que este hable despacio y con claridad y esté dispuesto a cooperar.'] },
    2: { range: 'Puntaje 58 – 67 (A2)', summary: '', 
    items: ['El estudiante es capaz de comprender frases y expresiones de uso frecuente relacionadas con áreas de experiencia que le son especialmente relevantes (información básica sobre sí mismo y su familia, compras, lugares de interés, ocupaciones, etc.).',
      'Sabe comunicarse a la hora de llevar a cabo tareas simples y cotidianas que no requieran más que intercambios sencillos y directos de información sobre cuestiones que le son conocidas o habituales.',
      'Sabe describir en términos sencillos aspectos de su pasado y su entorno, así como cuestiones relacionadas con sus necesidades inmediatas.'] },
    3: { range: 'Puntaje 68 – 78 (B1)', summary: '', 
    items: [ 'El estudiante es capaz de comprender los puntos principales de textos claros y en lengua estándar si tratan sobre cuestiones que le son conocidas, ya sea en situaciones de trabajo, de estudio o de ocio.',
      'Sabe desenvolverse en la mayor parte de las situaciones que pueden surgir durante un viaje por zonas donde se utiliza la lengua.','Es capaz de producir textos sencillos y coherentes sobre temas que le son familiares o en los que tiene un interés personal.','Puede describir experiencias, acontecimientos, deseos y aspiraciones, así como justificar brevemente sus opiniones o explicar sus planes.'] },
    4: { range: 'Puntaje 79 – 100 (B+)', summary: '', items: ['El estudiante promedio clasificado en este nivel supera las preguntas de mayor complejidad de la prueba.'] }
  }
};

const NIVEL_COLORS = [
  "",
  "#856404,#fff3cd",
  "#0c5460,#d1ecf1",
  "#155724,#d4edda",
  "#004085,#cce5ff",
];

const NIVEL_THRESHOLDS = {
  lc: { 4: 66, 3: 51, 2: 36 },
  mat: { 4: 71, 3: 51, 2: 36 },
  soc: { 4: 71, 3: 56, 2: 41 },
  cn: { 4: 71, 3: 56, 2: 41 },
  ing: { 4: 79, 3: 68, 2: 58 },
};

function getNivel(pct, subject) {
  const th = NIVEL_THRESHOLDS[subject] || { 4: 75, 3: 50, 2: 25 };
  if (pct >= th[4]) return 4;
  if (pct >= th[3]) return 3;
  if (pct >= th[2]) return 2;
  return subject === "ing" ? 0 : 1;
}
