# Arquitectura del Proyecto SABER 11 PWA

## 1. Visión General

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    SABER 11 SIMULADOR PWA                               │
│               Secretaría de Educación Nariño                            │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  ┌──────────────┐          ┌──────────────────────────────┐            │
│  │   PORTAL     │          │         SIMULACRO            │            │
│  │  (index)     │  ──────► │   (Unificado con params)     │            │
│  │   1..n       │  config  │   ?simulacro=1 (dinámico)    │            │
│  └──────┬───────┘          │   ?simulacro=2 (estático)    │            │
│         │                  └──────────────┬───────────────┘            │
│    ┌────┴────┐                            │                            │
│    │ Config │                   ┌──────────┴─────────┐                 │
│    │Inline  │                   │ Auto-selección    │                 │
│    │+Modal  │                   │ materia + begin  │                 │
│    └────────┘                   └───────────────────┘                 │
│         │                               │                              │
│  ┌──────┴──────────────────────────────────────────────────────────┐   │
│  │                    SHARED RESOURCES                           │   │
│  │  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────────────┐  │   │
│  │  │   CSS    │ │   JS     │ │  DATA    │ │    IMAGES        │  │   │
│  │  │portal.css│ │exam.js   │ │questions │ │  portal/        │  │   │
│  │  │exam.css  │ │portal.js │ │data.js   │ │  questions/     │  │   │
│  │  └──────────┘ └──────────┘ └──────────┘ └──────────────────┘  │   │
│  └─────────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────────┘
```
┌─────────────────────────────────────────────────────────────────────────┐
│                    SABER 11 SIMULADOR PWA                               │
│               Secretaría de Educación Nariño                            │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  ┌──────────────┐          ┌──────────────────────────────┐            │
│  │   PORTAL     │          │         SIMULACRO            │            │
│  │  (index)     │          │   (Unificado con params)     │            │
│  └──────┬───────┘          └──────────────┬───────────────┘            │
│         │                               │                              │
│    ┌────┴────┐                    ┌───────┴───────┐                    │
│    │ Config │                    │ Dynamic/Static│                    │
│    │ Modal  │                    │   Simulacros   │                    │
│    └────────┘                    └────────────────┘                    │
│         │                               │                              │
│  ┌──────┴───────────────────────────────┴──────────────────────────┐  │
│  │                    SHARED RESOURCES                           │  │
│  │  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────────────┐   │  │
│  │  │   CSS    │ │   JS     │ │  DATA    │ │    IMAGES       │   │  │
│  │  │portal.css│ │exam.js   │ │questions │ │  portal/        │   │  │
│  │  │exam.css  │ │portal.js │ │data.js   │ │  questions/    │   │  │
│  │  └──────────┘ └──────────┘ └──────────┘ └──────────────────┘   │  │
│  └─────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Estructura de Archivos

```
geotest/
├── index.html                    # Portal principal (configuración)
├── sw.js                         # Service Worker PWA (portal)
├── manifest.json                 # Manifiesto PWA
│
├── shared/
│   ├── js/
│   │   ├── questions.js          # Banco de preguntas (~44+ preguntas)
│   │   ├── data.js               # SUBJ_INFO, SIMULACROS, buildDynamicQuestions
│   │   ├── exam.js               # Lógica del examen
│   │   └── portal.js             # UI del portal + config inline
│   │
│   ├── css/
│   │   ├── portal.css            # Estilos del portal
│   │   └── exam.css              # Estilos del examen
│   │
│   └── img/
│       ├── portal/               # Imágenes del portal
│       │   ├── icon-192.png
│       │   ├── icon-512.png
│       │   ├── icon-escudo.svg
│       │   ├── logo.svg
│       │   ├── splash.png
│       │   ├── banner_web.png
│       │   ├── banner_movil.png
│       │   ├── cuy_correcto_ok.png
│       │   └── cuy_incorrecto_ok.png
│       │
│       └── questions/            # Imágenes de preguntas (~60+)
│           ├── mat*.png
│           ├── cn*.png
│           └── mafalda1.png
│
├── simulacro/                    # Simulacro unificado
│   ├── index.html                # ?simulacro=1 (dinámico) o =2 (estático)
│   ├── sw.js                     # Service worker
│   └── manifest.json
│
└── assets/docs/                  # PDFs de referencia (ICFES)
```

### Parámetros de URL
- `?simulacro=1` → Simulacro dinámico (configurable)
- `?simulacro=2` → Simulacro estático (todas las preguntas)

---

## 3. Tipos de Simulacro

### Simulacro 1 - Dinámico
- Configurable desde el portal
- Selección de número de preguntas por materia (0-n)
- Punto de inicio configurable
- Opción aleatoria (mezcla todo el pool)
- Configuración guardada en localStorage (portal) y sessionStorage (simulacro)
- **Acceso directo sin config**: usa valores por defecto y auto-selecciona primera materia

### Simulacro 2 - Estático
- Usa todas las preguntas disponibles
- No tiene UI de configuración
- Pool de preguntas fijo

```javascript
// shared/js/data.js
const SIMULACROS = {
  1: {
    id: 1,
    nombre: "Simulacro Dinámico",
    titulo: "SABER 11°",
    descripcion: "Configura tu examen - Selecciona cantidad de preguntas por asignatura",
    shortName: "Simulacro",
    cacheName: "simulacro-v1",
    dinamico: true
  },
  2: {
    id: 2,
    nombre: "Simulacro 2",
    titulo: "SABER 11°",
    descripcion: "Primer simulacro SED",
    shortName: "Sim2",
    cacheName: "simulacro-v1",
    dinamico: false
  }
};
```

### Materias Soportadas
- `lc` - Lectura Crítica
- `mat` - Matemáticas
- `soc` - Sociales
- `cn` - Ciencias Naturales
- `ing` - Inglés

---

## 4. Flujo de Datos

```
┌─────────────────────────────────────────────────────────────────────────┐
│                        FLUJO DEL EXAMEN                                  │
└─────────────────────────────────────────────────────────────────────────┘

ESCENARIO 1: DESDE EL PORTAL
─────────────────────────────────────────────────────────────────────────
USUARIO                              PORTAL (index.html)
   │                                      │
   │  1. Configura spinners              │
   │     - Número de preguntas           │
   │     - Aleatorio sí/no                │
   │                                      │
   │  2. Click "Iniciar Simulacro"       │
   │     ↓                                │
   │  3. sessionStorage.setItem()         │
   │     {simulacroId, subjects: {...}}  │
   │                                      │
   │  4. Redirige a simulacro/           │
   └──────────────────────────────────────┘
                                         │
                                         ▼
                               SIMULACRO (index.html)
                                         │
                                         │ 1. DOMContentLoaded
                                         │    ↓
                                         │ 2. configureSimulacro()
                                         │    ↓
                                         │ 3. Cargar config desde sessionStorage
                                         │    ↓
                                         │ 4. detectActiveSubjects()
                                         │    ↓
                                         │ 5. buildDynamicQuestions() por materia
                                         │    ↓
                                         │ 6. renderSubjects() + auto-select
                                         │    ↓
                                         │ 7. Usuario selecciona materia
                                         │    ↓
                                         │ 8. startQuiz() → beginSubject()
                                         │    ↓
                                         │ 9. showIntro() → showQuestion()
                                         │    ↓
                                         │ 10. nextQuestion() × n
                                         │    ↓
                                         │ 11. showResults()
                                         ▼
                               FIN

ESCENARIO 2: ACCESO DIRECTO (sin pasar por portal)
─────────────────────────────────────────────────────────────────────────
USUARIO                              SIMULACRO (index.html)
   │                                      │
   │  1. Abre ?simulacro=1               │
   │     ↓                                │
   │  2. DOMContentLoaded                 │
   │     ↓                                │
   │  3. configureSimulacro()             │
   │     ↓                                │
   │  4. NO hay config en sessionStorage  │
   │     ↓                                │
   │  5. Inicializar SUBJECT_CONFIG      │
   │     con valores por defecto         │
   │     ↓                                │
   │  6. buildDynamicQuestions()         │
   │     ↓                                │
   │  7. renderSubjects()                │
   │     + auto-seleccionar primera       │
   │     ↓                                │
   │  8. btnStart habilitado              │
   │     ↓                                │
   │  9. startQuiz() → beginSubject()     │
   └──────────────────────────────────────┘
```

---

## 5. Configuración de Simulacro Dinámico

### Propiedades de Configuración

```javascript
// Spanish: portal.js / exam.js
SUBJECT_CONFIG = {
  lc: { preguntas: 3, inicio: 1, aleatorio: true },
  mat: { preguntas: 5, inicio: 1, aleatorio: false },
  ...
};
```

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| preguntas | number | Número de preguntas a seleccionar |
| inicio | number | Índice inicial (para modo no-aleatorio) |
| aleatorio | boolean | Si true, mezcla todo el pool |

### buildDynamicQuestions()

```javascript
// data.js
function buildDynamicQuestions(subject, config, simulacroId = 1) {
  const allQuestions = QUESTIONS.filter(
    q => q.subject === subject && q.simulators.includes(simulacroId)
  );

  const isRandom = config.aleatorio !== false;
  const numQuestions = config.preguntas || 3;
  const startIndex = config.inicio || 1;

  if (isRandom) {
    // Mezclar TODO el pool y tomar X
    const shuffled = [...allQuestions];
    shuffleArray(shuffled);
    return shuffled.slice(0, numQuestions);
  } else {
    // Tomar desde inicio
    return allQuestions.slice(startIndex - 1, startIndex - 1 + numQuestions);
  }
}
```

### Fallback para Acceso Directo

Cuando se accede directamente sin pasar por el portal:

```javascript
// exam.js - DOMContentLoaded
if (Object.keys(SUBJECT_CONFIG).length === 0) {
  ACTIVE_SUBJECTS.forEach(subj => {
    const defaultConfig = getSubjectDefaultConfig(subj);
    const maxQuestions = getSubjectMaxQuestions(subj, SIMULACRO_ID);
    SUBJECT_CONFIG[subj] = {
      preguntas: Math.min(defaultConfig.preguntas, maxQuestions),
      inicio: Math.min(defaultConfig.inicio, maxQuestions),
      aleatorio: defaultConfig.aleatorio
    };
  });
}
```

---

## 6. Estructura del Estado

```javascript
// exam.js
let state = {
  simulacroId: null,      // ID del simulacro (1, 2, ...)
  subject: null,          // Materia actual (lc, mat, ...)
  questions: [],          // Preguntas del quiz actual
  current: 0,             // Índice de pregunta actual
  answers: [],            // Respuestas del usuario
  hintsUsed: 0,          // Pistas utilizadas
  allSubjects: false,    // Modo examen completo
  allQueue: [],           // Cola de materias para examen completo
  allAnswers: {},         // Respuestas por materia
  immediateFeedback: false,
  timedMode: true,
  timeRemaining: 0,
  timerInterval: null,
  timeExpired: false
};

// Configuración por materia (español)
let SUBJECT_CONFIG = {
  lc: { preguntas: 3, inicio: 1, aleatorio: true },
  mat: { preguntas: 5, inicio: 1, aleatorio: false },
  soc: { preguntas: 3, inicio: 1, aleatorio: true },
  cn: { preguntas: 3, inicio: 1, aleatorio: true },
  ing: { preguntas: 3, inicio: 1, aleatorio: true }
};

// QB = Question Bank (construido dinámicamente)
let QB = {
  lc: { name: "Lectura Crítica", icon: "📖", questions: [...] },
  mat: { name: "Matemáticas", icon: "📐", questions: [...] },
  ...
};
```

### Variables Globales

```javascript
let SIMULACRO_ID = 1;
let SIMULACRO_CONFIG = null;
let ACTIVE_SUBJECTS = [];  // Materias con preguntas disponibles
```

---

## 7. Banco de Preguntas

```javascript
// questions.js
const QUESTIONS = [
  {
    id: 1,
    simulators: [1, 2],      // Simulacros que incluyen esta pregunta
    subject: 'lc',          // Materia: lc, mat, soc, cn, ing
    
    // Contexto (opcional)
    context: "Texto de contexto...",
    contextImg: "img_key",
    
    // Pregunta
    text: "¿Cuál es la respuesta?",
    questionImg: "img_key",  // Imagen de la pregunta
    
    // Opciones de respuesta
    options: ["A) Opción", "B) Opción", "C) Opción", "D) Opción"],
    optionsImg: ["mat1-A", "mat1-B", "mat1-C", "mat1-D"], // imágenes por opción (opcional)
    
    correct: 0,             // Índice 0-3 de la respuesta correcta
    
    // Feedback
    hint: "Pista...",
    justification: "Explicación de la respuesta correcta...",
    invalidOptions: "Explicación de opciones inválidas...",
    
    // Metadatos ICFES
    competency: "Competencia",
    assertion: "Afirmación",
    evidence: "Evidencia",
    component: "Componente",
    level: 1-4,             // Nivel de complejidad
    
    // Opcional: criterios de evaluación
    evaluationCriteria: "¿Qué evalúa esta pregunta?",
    skill: "Pensamiento associated"
  }
];
```

### Propiedades de Pregunta

| Propiedad | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| id | number | ✅ | Identificador único |
| simulators | array | ✅ | IDs de simulacros [1,2] |
| subject | string | ✅ | Clave: lc, mat, soc, cn, ing |
| text | string | ✅ | Texto de la pregunta |
| options | array | ✅ | Array de 4 opciones |
| correct | number | ✅ | Índice 0-3 |
| context | string | ❌ | Texto de contexto |
| contextImg | string | ❌ | Clave de imagen de contexto |
| questionImg | string | ❌ | Clave de imagen de pregunta |
| optionsImg | array | ❌ | Imágenes para cada opción |
| justification | string | ❌ | Explicación |
| level | number | ❌ | Nivel 1-4 |

---

## 8. Screens (Estados)

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   s-home    │───►│  s-intro    │───►│  s-question │───►│ s-results   │
└─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘
     ▲                                          │
     │            ┌─────────────┐                │
     └────────────┤  s-results  │◄───────────────┘
                   │  (review)   │
                   └─────────────┘

s-home     → Selección de materia (con auto-selección)
s-intro    → Info de la prueba antes de iniciar
s-question → Durante la prueba (selección, feedback)
s-results  → Resultados y revisión de respuestas
```

### Pantallas del Quiz

| ID | Descripción |
|----|-------------|
| s-home | Grid de materias con conteo de preguntas |
| s-intro | Información de la prueba (nombre, preguntas, competencias) |
| s-question | Pregunta actual con opciones |
| s-results | Resultados finales + revisión |

---

## 9. Funciones Principales

```
┌─────────────────────────────────────────────────────────────────────────┐
│                        FUNCIONES POR MÓDULO                            │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│ CONFIGURACIÓN (portal.js)                                               │
│   renderSimulacroCards() ─────► Renderiza cards con spinners            │
│   loadPortalConfig() ───────► Carga config desde localStorage          │
│   updatePortalConfig() ──────► Actualiza config al cambiar spinner    │
│   adjustPortalConfig() ──────► Incrementa/decrementa con botones       │
│   togglePortalAleatorio() ───► Alterna modo aleatorio global           │
│   updatePortalTotal() ───────► Actualiza total de preguntas          │
│   startPortalSimulacro() ────► Guarda config y redirige               │
│                                                                          │
│ SIMULACRO (exam.js)                                                     │
│   configureSimulacro() ─────► Configura según URL (?simulacro=n)      │
│   loadConfigFromSession() ──► Carga config dinámica desde sessionStorage│
│   detectActiveSubjects() ───► Detecta materias con preguntas           │
│   renderSubjects() ──────────► Renderiza grid de materias              │
│   selectSubject() ───────────► Selecciona materia (actualiza state)   │
│                                                                          │
│ PREGUNTAS (data.js)                                                     │
│   getSubjectDefaultConfig() ─► Retorna config por defecto              │
│   getSubjectMaxQuestions() ──► Cuenta preguntas disponibles           │
│   validateSubjectConfig() ──► Valida rango de preguntas               │
│   buildDynamicQuestions() ───► Selecciona según config (español)      │
│                                                                          │
│ EXAMEN (exam.js)                                                        │
│   startQuiz() ─────────────► Inicia quiz individual                   │
│   startAllSubjects() ───────► Inicia examen completo (todas materias) │
│   beginSubject() ───────────► Prepara preguntas + shuffle             │
│   showIntro() ───────────────► Muestra intro de la materia             │
│   showQuestion() ───────────► Renderiza pregunta + opciones           │
│   selectOpt() ───────────────► Selecciona opción (soporta click en img)│
│   nextQuestion() ───────────► Avanza a siguiente pregunta              │
│   showResults() ────────────► Muestra resultados finales              │
│   shuffleOpts() ────────────► Mezcla opciones de respuesta             │
│                                                                          │
│ UTILIDADES                                                              │
│   goScreen(id) ───────────► Cambia pantalla activa                    │
│   setProgress(pct) ────────► Actualiza barra de progreso              │
│   goHome() ─────────────────► Resetea al inicio                        │
│   getImg(key) ──────────────► Resuelve ruta de imagen                   │
│   getSimulacroFromURL() ────► Obtiene ID de simulacro desde URL        │
│   getNivel(pct, subject) ───► Calcula nivel según puntaje              │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

### Imágenes en Opciones de Respuesta

Las opciones pueden contener imágenes además de texto. El HTML genera:

```javascript
// exam.js - showQuestion()
optsHtml += `<button class="opt" id="opt${i}" onclick="selectOpt(${i})">
  <div class="opt-row">
    <span class="opt-letter">${letter}</span>
    <span class="opt-text">${text}</span>
  </div>
  ${optImg ? `<img src="..." class="opt-img" onclick="event.stopPropagation();selectOpt(${i})">` : ''}
</button>`;
```

CSS relevante:
```css
.opt { display: flex; flex-direction: column; ... }
.opt-row { display: flex; align-items: center; gap: 11px; width: 100%; }
.opt-img { max-width: 100%; max-height: 140px; object-fit: contain; cursor: pointer; }
```

---

## 10. PWA y Service Worker

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         PWA SERVICE WORKER                             │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  Cache Names:                                                           │
│  - Portal:    portal-sed-narino-v11                                     │
│  - Simulacro: simulacro-v5                                              │
│                                                                          │
│  Estrategia: Cache-first with network fallback                         │
│                                                                          │
│  ┌──────────────────────────────────────────────────────────────────┐   │
│  │ ASSETS DEL PORTAL                                                │   │
│  ├──────────────────────────────────────────────────────────────────┤   │
│  │   - index.html, manifest.json, sw.js                            │   │
│  │   - shared/js/questions.js, data.js, portal.js, exam.js         │   │
│  │   - shared/css/portal.css, exam.css                              │   │
│  │   - shared/img/portal/*                                          │   │
│  │   - simulacro/index.html, sw.js, manifest.json                   │   │
│  │   - shared/img/questions/*.png (todas las imágenes)             │   │
│  └──────────────────────────────────────────────────────────────────┘   │
│                                                                          │
│  ┌──────────────────────────────────────────────────────────────────┐   │
│  │ ASSETS DEL SIMULACRO                                             │   │
│  ├──────────────────────────────────────────────────────────────────┤   │
│  │   - simulacro/index.html, manifest.json, sw.js                  │   │
│  │   - shared/css/exam.css                                          │   │
│  │   - shared/js/exam.js, data.js, questions.js                   │   │
│  │   - shared/img/portal/*                                          │   │
│  │   - shared/img/questions/*.png                                   │   │
│  └──────────────────────────────────────────────────────────────────┘   │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

### Metadatos PWA

```json
// manifest.json (portal)
{
  "name": "Portal SABER 11° · Nariño",
  "short_name": "SABER 11 Nariño",
  "start_url": "./index.html",
  "display": "standalone",
  "background_color": "#1a3a5c",
  "theme_color": "#1a3a5c",
  "orientation": "portrait-primary",
  "lang": "es",
  "categories": ["education"],
  "icons": [
    { "src": "shared/img/portal/icon-escudo.svg", "sizes": "any", "purpose": "any maskable" },
    { "src": "shared/img/portal/icon-192.png", "sizes": "192x192", "purpose": "any maskable" },
    { "src": "shared/img/portal/icon-512.png", "sizes": "512x512", "purpose": "any maskable" }
  ]
}

// manifest.json (simulacro)
{
  "name": "Simulador SABER 11° · Nariño",
  "short_name": "SABER 11",
  "id": "/simulacro/",
  "start_url": "./index.html",
  "scope": "./",
  "display": "standalone",
  ...
}
```

### Meta Tags Requeridos

```html
<!-- index.html (portal) -->
<meta name="theme-color" content="#1a3a5c">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="SABER 11 Nariño">
<link rel="manifest" href="manifest.json">
<link rel="apple-touch-icon" href="shared/img/portal/icon-192.png">
```

---

## 12. Tecnologías

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         STACK TECNOLÓGICO                               │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  FRONTEND                                                               │
│  ├── HTML5 (semántico, sin frameworks)                                 │
│  ├── CSS3 (variables, flexbox, grid, clamp(), animations)             │
│  ├── JavaScript ES6+ (vanilla, sin librerías)                          │
│  └── PWA (Service Worker, Manifest, offline)                            │
│                                                                          │
│  EXTERNAL RESOURCES                                                     │
│  └── Google Fonts: Nunito, Space Mono                                   │
│                                                                          │
│  BROWSER SUPPORT                                                        │
│  ├── Chrome/Edge 80+, Firefox 75+, Safari 14+                          │
│  └── Requiere HTTPS o localhost para Service Workers                   │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

## 13. Niveles de Desempeño

```
┌─────────────────────────────────────────────────────────────────────────┐
│                        NIVELES DE DESEMPEÑO                             │
├─────────────────────────────────────────────────────────────────────────┤
│  LC, MAT, SOC, CN: Nivel 1-4                                           │
│  ING: A-, A1, A2, B1, B+                                                │
│                                                                          │
│  Threshold por materia:                                                 │
│  ─────────────────────────────────────────────────────────────────────   │
│  | Materia | Nivel 4 | Nivel 3 | Nivel 2 |                             │
│  ├─────────┼─────────┼─────────┼─────────┤                             │
│  | LC      | ≥66     | ≥51     | ≥36     |                             │
│  | MAT     | ≥71     | ≥51     | ≥36     |                             │
│  | SOC     | ≥71     | ≥56     | ≥41     |                             │
│  | CN      | ≥71     | ≥56     | ≥41     |                             │
│  | ING     | ≥79     | ≥68     | ≥58     | (0 = A-)                   │
│  ─────────────────────────────────────────────────────────────────────   │
│                                                                          │
│  data.js exports:                                                       │
│  - NIVEL_INFO: Descripciones por nivel                                 │
│  - NIVEL_COLORS: Colores para UI                                        │
│  - NIVEL_THRESHOLDS: Puntos de corte                                    │
│  - getNivel(pct, subject): Retorna nivel (0-4)                        │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

## 14. Datos de Referencia (data.js)

```javascript
// SUBJ_INFO - Información de materias
const SUBJ_INFO = {
  lc: { name, icon, tag, color, desc, competencias },
  mat: { name, icon, tag, color, desc, competencias },
  ...
};

// SIMULACROS - Configuración de simulacros
const SIMULACROS = {
  1: { id, nombre, titulo, descripcion, shortName, cacheName, dinamico },
  2: { ... },
  ...
};

// META_QB - Metadatos de preguntas por materia
const META_QB = {
  lc: [{ comp, afirm, nivel, tipo }],
  mat: [{ comp, afirm, nivel }],
  ...
};

// DEFAULT_SUBJECT_CONFIG - Valores por defecto
const DEFAULT_SUBJECT_CONFIG = {
  lc: { preguntas: 3, inicio: 1, aleatorio: true },
  ...
};
```

---

*Documento actualizado para SABER 11 - Secretaría de Educación Departamental de Nariño*
*Última actualización: 2026-04-02*