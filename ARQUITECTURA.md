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
│   │   ├── questions.js          # Banco de preguntas
│   │   ├── data.js               # SUBJ_INFO, SIMULACROS, config
│   │   ├── exam.js               # Lógica del examen
│   │   └── portal.js              # UI del portal + config inline
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
│       │   ├── banner_web.png
│       │   └── banner_movil.png
│       │
│       └── questions/             # Imágenes de preguntas
│
├── simulacro/                    # Simulacro unificado
│   ├── index.html                # ?simulacro=1 (dinámico) o =2 (estático)
│   ├── sw.js                     # Service worker
│   └── manifest.json
│
└── assets/docs/                  # PDFs de referencia (ICFES)
```

---

## 3. Tipos de Simulacro

### Simulacro 1 - Dinámico
- Configurable desde el portal
- Selección de número de preguntas por materia (0-n)
- Punto de inicio configurable
- Opción aleatoria (mezcla todo el pool)
- Configuración guardada en localStorage (portal) y sessionStorage (simulacro)

### Simulacro 2 - Estático
- Usa todas las preguntas disponibles del simulacro 1
- No tiene UI de configuración
- Pool de preguntas fijo

```javascript
// shared/js/data.js
const SIMULACROS = {
  1: {
    id: 1,
    nombre: "Simulacro Dinámico",
    titulo: "SABER 11°",
    descripcion: "Configura tu examen...",
    shortName: "Simulacro",
    dinamico: true
  },
  2: {
    id: 2,
    nombre: "Simulacro 2",
    titulo: "SABER 11°",
    descripcion: "Matemáticas, Lectura Crítica e Inglés",
    shortName: "Sim2",
    dinamico: false
  }
};
```

---

## 4. Flujo de Datos

```
┌─────────────────────────────────────────────────────────────────────────┐
│                        FLUJO DEL EXAMEN                                  │
└─────────────────────────────────────────────────────────────────────────┘

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
                                        │ 5. buildQBFromConfig() o load all
                                        │    ↓
                                        │ 6. renderSubjects()
                                        │    ↓
                                        │ 7. Usuario selecciona materia
                                        │    ↓
                                        │ 8. startQuiz() / startAllSubjects()
                                        │    ↓
                                        │ 9. beginSubject() → showIntro()
                                        │    ↓
                                        │ 10. showQuestion() ← shuffleOpts()
                                        │    ↓
                                        │ 11. nextQuestion() ← repeat
                                        │    ↓
                                        │ 12. showResults()
                                        ▼
                              FIN
```

---

## 5. Configuración de Simulacro Dinámico

### Desde el Portal

```javascript
// portal.js - Config guardada en localStorage
PORTAL_CONFIG[simId] = {
  lc: { preguntas: 3, inicio: 1, aleatorio: true },
  mat: { preguntas: 5, inicio: 1, aleatorio: false },
  ...
};

// Al iniciar simulacro
sessionStorage.setItem('simulacroConfig', JSON.stringify({
  simulacroId: 1,
  subjects: { ... }
}));
```

### En el Simulacro

```javascript
// exam.js - Cargar al inicio
const configData = sessionStorage.getItem('simulacroConfig');
SUBJECT_CONFIG = parsed.subjects;

// Build QB dinámico
function buildDynamicQuestions(subject, config, simulacroId) {
  const allQuestions = QUESTIONS.filter(
    q => q.subject === subject && q.simulators.includes(simulacroId)
  );
  
  if (config.aleatorio) {
    // Mezclar TODO el pool y tomar X
    const shuffled = [...allQuestions];
    shuffleArray(shuffled);
    return shuffled.slice(0, config.preguntas);
  } else {
    // Tomar desde inicio
    return allQuestions.slice(config.inicio - 1, config.inicio - 1 + config.preguntas);
  }
}
```

---

## 6. Estructura del Estado

```javascript
// exam.js
let state = {
  simulacroId: null,
  subject: null,
  questions: [],
  current: 0,
  answers: [],
  hintsUsed: 0,
  allSubjects: false,
  allQueue: [],
  allAnswers: {},
  immediateFeedback: false,
  timedMode: true,
  timeRemaining: 0,
  timerInterval: null,
  timeExpired: false
};

// Configuración por materia
let SUBJECT_CONFIG = {
  lc: { preguntas: 3, inicio: 1, aleatorio: true },
  mat: { preguntas: 5, inicio: 1, aleatorio: false },
  ...
};
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
    
    // Opciones
    options: ["A) Opción", "B) Opción", "C) Opción", "D) Opción"],
    optionsImg: ["img_a", "img_b", "img_c", "img_d"], // opcional
    
    correct: 0,             // Índice 0-3
    
    // Feedback
    hint: "Pista...",
    justification: "Explicación...",
    
    // Metadatos
    competency: "Competencia",
    level: 1-4
  }
];
```

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

s-home     → Selección de materia
s-intro    → Info de la prueba antes de iniciar
s-question → Durante la prueba
s-results  → Resultados y revisión
```

---

## 9. Funciones Principales

```
┌─────────────────────────────────────────────────────────────────────────┐
│                        FUNCIONES POR MÓDULO                            │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│ CONFIGURACIÓN (portal.js)                                               │
│   renderSimulacroCards() ─────► Renderiza cards con spinners           │
│   updatePortalConfig() ──────► Actualiza config al cambiar spinner   │
│   startPortalSimulacro() ────► Guarda config y redirige                │
│                                                                          │
│ SIMULACRO (exam.js)                                                     │
│   configureSimulacro() ─────► Configura según URL                       │
│   loadConfigFromSession() ──► Carga config dinámica                    │
│   buildQBFromConfig() ───────► Construye QB según config               │
│   renderSubjects() ──────────► Renderiza materias (filtra 0 preguntas) │
│                                                                          │
│ PREGUNTAS                                                                │
│   shuffleOpts(q) ──────────► Mezcla opciones de respuesta              │
│   shuffleArray(arr) ────────► Fisher-Yates shuffle                     │
│   buildDynamicQuestions() ──► Selecciona según config                  │
│                                                                          │
│ EXAMEN                                                                   │
│   selectSubject() ────────► Selecciona materia                        │
│   startQuiz() ─────────────► Inicia quiz individual                   │
│   startAllSubjects() ───────► Inicia examen completo                   │
│   beginSubject() ──────────► Prepara preguntas                        │
│   showQuestion() ──────────► Renderiza pregunta actual                │
│   nextQuestion() ──────────► Avanza a siguiente                       │
│   showResults() ────────────► Muestra resultados                       │
│                                                                          │
│ UTILS                                                                    │
│   goScreen(id) ───────────► Cambia pantalla activa                    │
│   setProgress(pct) ───────► Actualiza barra de progreso               │
│   goHome() ─────────────────► Resetea al inicio                        │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
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
│  │   - shared/js/questions.js, data.js, portal.js                 │   │
│  │   - shared/css/portal.css, exam.css                             │   │
│  │   - shared/img/portal/*                                         │   │
│  │   - simulacro/index.html, sw.js, manifest.json                  │   │
│  └──────────────────────────────────────────────────────────────────┘   │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 11. Metadatos PWA

```json
// manifest.json (portal)
{
  "name": "Portal SABER 11° · Nariño",
  "short_name": "SABER 11 Nariño",
  "start_url": "./index.html",
  "display": "standalone",
  "background_color": "#1a3a5c",
  "theme_color": "#1a3a5c",
  "icons": [...]
}

// manifest.json (simulacro)
{
  "name": "Simulador SABER 11° · Nariño",
  "short_name": "SABER 11",
  "start_url": "./index.html",
  "scope": "./",
  "display": "standalone",
  "background_color": "#1a3a5c",
  "theme_color": "#1a3a5c",
  "icons": [...]
}
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
│  ├── CSS3 (variables, flexbox, grid, clamp())                         │
│  ├── JavaScript ES6+ (vanilla, sin librerías)                          │
│  └── PWA (Service Worker, Manifest)                                      │
│                                                                          │
│  TIPOGRAFÍA                                                             │
│  ├── Display: Fraunces (serif, académico)                              │
│  └── Body: Work Sans (sans-serif, legible)                             │
│                                                                          │
│  EXTERNAL RESOURCES                                                     │
│  └── Google Fonts                                                       │
│                                                                          │
│  BROWSER SUPPORT                                                        │
│  ├── Chrome/Edge, Firefox, Safari                                      │
│  └── Requiere HTTPS o localhost                                         │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 13. Niveles de Desempeño

```
┌─────────────────────────────────────────────────────────────────────────┐
│                        NIVELES DE DESEMPEÑO                             │
├─────────────────────────────────────────────────────────────────────────┤
│  LC, MAT, SOC, CN:  Nivel 1-4                                          │
│  ING: A-, A1, A2, B1, B+                                                │
└─────────────────────────────────────────────────────────────────────────┘
```

---

*Documento actualizado para SABER 11 - Secretaría de Educación Departamental de Nariño*