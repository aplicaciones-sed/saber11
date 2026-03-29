// NIVEL_INFO - Información de niveles de desempeño por materia
const NIVEL_INFO = {
  lc: {
    name: 'Lectura Crítica',
    1: { range: 'Puntaje 0 – 35', summary: '', items: ['El estudiante que se ubica en este nivel probablemente identifica elementos literales en textos continuos y discontinuos sin establecer relaciones de significado.'] },
    2: { range: 'Puntaje 36 – 50', summary: 'Además de lo descrito en el nivel anterior, el estudiante que se ubica en este nivel comprende textos continuos y discontinuos de manera literal. Reconoce información explícita y la relaciona con el contexto.', 
    items: [
      'Identifica información local del texto.',
      'Identifica la estructura de textos continuos y discontinuos.',
      'Identifica relaciones básicas entre componentes del texto.',
      'Identifica fenómenos semánticos básicos: sinónimos y antónimos.',
      'Reconoce en un texto la diferencia entre proposición y párrafo.',
      'Reconoce el sentido local y global del texto.',
      'Identifica intenciones comunicativas explícitas.',
      'Identifica relaciones básicas: contraste, similitud y complementación, entre textos presentes.'] },
    3: { range: 'Puntaje 51 – 65', summary: 'Además de lo descrito en los niveles anteriores, el estudiante que se ubicua en este nivel interpreta información de textos al inferir contenidos implícitos y reconocer estructuras, estrategias discursivas y juicios valorativos.', 
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
    4: { range: 'Puntaje 66 – 100', summary: 'Además de lo descrito en los niveles anteriores, el estudiante que se ubicua en este nivel reflexiona a partir de un texto sobre la visión de mundo del autor.', 
    items: [
      'Propone soluciones a problemas de interpretación que subyacen en un texto.',
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
    items: ['El estudiante que se ubicua en este nivel probablemente puede leer información puntual relacionada con situaciones cotidianas y presentada en tablas o gráficas.'] },
    2: { range: 'Puntaje 36 – 50', summary: 'Además de lo descrito en el nivel anterior, el estudiante es capaz de hacer comparaciones y establecer relaciones entre los datos presentados.', 
    items: [
      'Compara datos de dos variables presentadas en una misma gráfica sin operaciones aritméticas.',
      'Identifica valores o puntos representativos en diferentes tipos de registro.',
      'Compara la probabilidad de eventos simples.',
      'Toma decisiones sobre la veracidad o falsedad de una afirmación.',
      'Cambia gráficas de barras a tablas de doble entrada.',
      'Reconoce e interpreta el significado de promedio simple, moda, mayor, menor, máximo y mínimo.'] },
    3: { range: 'Puntaje 51 – 70', summary: 'Además de lo descrito en los niveles anteriores, el estudiante selecciona información, señala errores y hace distintos tipos de transformaciones.', 
    items: [
      'Selecciona la gráfica correspondiente a la información de una tabla.',
      'Compara información gráfica que requiere algunas manipulaciones aritméticas.',
      'Señala información representada en formatos no convencionales.',
      'Reconoce errores ocurridos al realizar una transformación entre diferentes tipos de registro.',
      'Reconoce desarrollos planos de una forma tridimensional y viceversa.',
      'Compara la probabilidad de eventos simples en diversos contextos.',
      'Selecciona información necesaria para resolver problemas que involucran operaciones aritméticas.',
      'Selecciona información necesaria para resolver problemas que involucran características medibles de figuras geométricas.',
      'Justifica afirmaciones utilizando planteamientos y operaciones aritméticas.'] },
    4: { range: 'Puntaje 71 – 100', summary: 'Además de lo descrito en los niveles anteriores, el estudiante resuelve problemas y justifica la veracidad o falsedad de afirmaciones.', 
    items: [
      'Resuelve problemas que requieren interpretar información de eventos dependientes.',
      'Realiza transformaciones de subconjuntos de información que pueden requerir el uso de operaciones complejas.',
      'Resuelve problemas que requieren construir una representación auxiliar como paso intermedio.',
      'Modela usando lenguaje algebraico información dada en lenguaje natural, tablas o representaciones geométricas.',
      'Manipula expresiones algebraicas o aritméticas haciendo uso de las propiedades de las operaciones.',
      'Modela fenómenos variacionales no explícitos haciendo uso de lenguaje simbólico o gráficas.',
      'Reconoce en diferentes formatos el espacio muestral de un experimento aleatorio.',
      'Resuelve problemas de conteo que requieren el uso de permutaciones.',
      'Justifica si hay falta de información en una situación problema para tomar una decisión.'] }
  },
  soc: {
    name: 'Sociales y Ciudadanas',
    1: { range: 'Puntaje 0 – 40', summary: '', 
    items: ['El estudiante que se ubicua en este nivel podría reconocer algunos derechos ciudadanos en situaciones sencillas.'] },
    2: { range: 'Puntaje 41 – 55', summary: 'Además de lo descrito en el nivel anterior, el estudiante reconoce deberes del Estado colombiano y situaciones de protección o vulneración de derechos.', 
    items: [
      'Identifica derechos ciudadanos y deberes del Estado establecidos en la Constitución Política de Colombia.',
      'Relaciona la conducta de una persona con su forma de ver la vida.',
      'Reconoce los efectos de una solución y las dimensiones que privilegia.',
      'Identifica contextos o procesos en los que se inscribe una fuente o evento.'] },
    3: { range: 'Puntaje 56 – 70', summary: 'Además de lo descrito en los niveles anteriores, el estudiante identifica prejuicios o intenciones contenidos en una afirmación y reconoce las dimensiones e intereses involucrados.', 
    items: [
      'Reconoce intenciones y prejuicios, así como argumentos similares o diferentes dados en un contexto específico.',
      'Identifica dimensiones (económicas, políticas, culturales, ambientales, etc.) involucradas en situaciones.',
      'Identifica y compara opiniones e intereses de diferentes actores involucrados en una situación problemática.',
      'Reconoce algunos conceptos básicos de las ciencias sociales.',
      'Identifica supuestos y usos de algunos modelos conceptuales.',
      'Relaciona contextos históricos y/o geográficos con fuentes, situaciones y prácticas sociales.',
      'Valora la información contenida en una fuente y reconoce sus alcances.'] },
    4: { range: 'Puntaje 71 – 100', summary: 'Además de lo descrito en los niveles anteriores, el estudiante conoce disposiciones de la Constitución Política de Colombia que possibilitan la participación ciudadana.', 
    items: [
      'Conoce los procedimientos de reforma a la Constitución, los mecanismos de participación ciudadana y las funciones de los organismos de control.',
      'Compara enunciados o argumentos, así como intereses y posiciones de actores en contextos complejos.',
      'Relaciona propuestas de solución a un problema con su contexto de implementación.',
      'Entiende problemáticas, eventos o procesos sociales a partir del uso de conceptos básicos de las ciencias sociales.',
      'Analiza fuentes para valorar inferencias o identificar intenciones y características de los actores.',
      'Establece relaciones entre modelos conceptuales y fuentes que los abordan.'] }
  },
  cn: {
    name: 'Ciencias Naturales',
    1: { range: 'Puntaje 0 – 40', summary: '', 
    items: ['El estudiante muy posiblemente alcanza a reconocer información explícita presentada de manera ordenada en tablas o gráficas.'] },
    2: { range: 'Puntaje 41 – 55', summary: 'Además de lo descrito en el nivel anterior, el estudiante reconoce información suministrada en tablas, gráficas y esquemas.', 
    items: [
      'Identifica patrones y características a partir de información presentada en textos, gráficas y tablas.',
      'Relaciona esquemas con nociones básicas del conocimiento científico.',
      'Establece predicciones a partir de datos presentados en tablas, gráficas y esquemas.',
      'Ordena datos e información en gráficas y tablas.'] },
    3: { range: 'Puntaje 56 – 70', summary: 'Además de lo descrito en los niveles anteriores, el estudiante interrelaciona conceptos, leyes y teorías científicas con información presentada en diversos contextos.', 
    items: [
      'Establece relaciones de causa-efecto usando información no suministrada.',
      'Interpreta gráficas, tablas y modelos para hacer predicciones.',
      'Establece relaciones entre conceptos, leyes y teorías científicas con diseños experimentales.',
      'Diferencia entre evidencias y conclusiones.',
      'Plantea hipótesis basadas en evidencias.',
      'Relaciona variables para explicar algunos fenómenos naturales.'] },
    4: { range: 'Puntaje 71 – 100', summary: 'Además de lo descrito en los niveles anteriores, el estudiante usa conceptos, teorías o leyes en la solución de situaciones problema.', 
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
    items: [
      'El estudiante es capaz de comprender y utilizar expresiones cotidianas de uso muy frecuente.',
      'Puede presentarse a sí mismo y a otros, pedir y dar información personal básica.',
      'Puede relacionarse de forma elemental con su interlocutor.'] },
    2: { range: 'Puntaje 58 – 67 (A2)', summary: '', 
    items: [
      'El estudiante es capaz de comprender frases y expresiones de uso frecuente.',
      'Sabe comunicarse a la hora de llevar a cabo tareas simples y cotidianas.',
      'Sabe describir en términos sencillos aspectos de su pasado y su entorno.'] },
    3: { range: 'Puntaje 68 – 78 (B1)', summary: '', 
    items: [
      'El estudiante es capaz de comprender los puntos principales de textos claros y en lengua estándar.',
      'Sabe desenvolverse en la mayor parte de las situaciones que pueden surgir durante un viaje.',
      'Es capaz de producir textos sencillos y coherentes sobre temas que le son familiares.',
      'Puede describir experiencias, acontecimientos, deseos y aspiraciones.'] },
    4: { range: 'Puntaje 79 – 100 (B+)', summary: '', items: ['El estudiante promedio clasificado en este nivel supera las preguntas de mayor complejidad de la prueba.'] }
  }
};

const NIVEL_COLORS = ['','#856404,#fff3cd','#0c5460,#d1ecf1','#155724,#d4edda','#004085,#cce5ff'];

const NIVEL_THRESHOLDS = {
  lc: { 4: 66, 3: 51, 2: 36 },
  mat: { 4: 71, 3: 51, 2: 36 },
  soc: { 4: 71, 3: 56, 2: 41 },
  cn: { 4: 71, 3: 56, 2: 41 },
  ing: { 4: 79, 3: 68, 2: 58 }
};

function getNivel(pct, subject) {
  const th = NIVEL_THRESHOLDS[subject] || { 4: 75, 3: 50, 2: 25 };
  if (pct >= th[4]) return 4;
  if (pct >= th[3]) return 3;
  if (pct >= th[2]) return 2;
  return subject === 'ing' ? 0 : 1;
}
