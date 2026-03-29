# Arquitectura del Proyecto SABER 11 PWA

## 1. Visión General del Proyecto

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         SABER 11 SIMULADOR PWA                         │
│                    Secretaría de Educación Nariño                       │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  ┌──────────────┐    ┌──────────────────┐    ┌──────────────────┐    │
│  │   PORTAL    │    │   SIMULACRO 1    │    │   SIMULACRO 2    │    │
│  │  (index)    │    │  (Full Exam)     │    │  (Math + Read)   │    │
│  └──────┬───────┘    └────────┬─────────┘    └────────┬─────────┘    │
│         │                      │                        │              │
│         └──────────────────────┴────────────────────────┘              │
│                                    │                                    │
│                    ┌───────────────┴───────────────┐                   │
│                    │    SHARED RESOURCES          │                   │
│                    │  ┌────────────────────────┐│                   │
│                    │  │  CSS (exam.css)         ││                   │
│                    │  │  JS (app.js, nivel.js,  ││                   │
│                    │  │        exam.js, meta.js) ││                   │
│                    │  └────────────────────────┘│                   │
│                    └──────────────────────────────┘                   │
│                                    │                                    │
│                    ┌───────────────┴───────────────┐                   │
│                    │    CENTRALIZED DATA          │                   │
│                    │  ┌────────────────────────┐│                   │
│                    │  │  questions.js (78 Q)   ││                   │
│                    │  └────────────────────────┘│                   │
│                    └──────────────────────────────┘                   │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Estructura de Archivos

```
geotest/
├── index.html                    # Portal principal (completo, sin cambios)
│
├── sw.js                        # Service Worker PWA
├── manifest.json               # Manifiesto PWA
│
├── js/
│   ├── portal.js               # Lógica del portal
│   └── questions.js            # Banco de preguntas centralizado (78 preguntas)
│
├── shared/
│   ├── css/
│   │   └── exam.css            # CSS compartido (~326 líneas)
│   │
│   ├── js/
│   │   ├── app.js              # Definición de state
│   │   ├── nivel.js            # NIVEL_INFO, getNivel()
│   │   ├── meta.js             # META_QB (metadatos de preguntas)
│   │   └── exam.js             # Funciones compartidas (~540 líneas)
│   │
│   └── icons/                  # Símbolos a iconos del root
│
├── simulacro-1/
│   ├── index.html              # 803 líneas (reducido de 1388)
│   ├── manifest.json
│   ├── sw.js
│   └── icon-*.png/svg         # Símbolos a root
│
├── simulacro-2/
│   ├── index.html              # 774 líneas (reducido de 1164)
│   ├── manifest.json
│   ├── sw.js
│   └── icon-*.png/svg         # Símbolos a root
│
└── assets/
    ├── img/                   # Imágenes (cuy avatars)
    └── docs/                  # PDFs de referencia
```

---

## 3. Diagrama de Carga de Scripts

### Orden de carga en simulacro-1/simulacro-2:

```
┌─────────────────────────────────────────────────────────────────────────┐
│                        HEAD SECTION                                    │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  1. CSS                                                                 │
│     ┌──────────────────────────────────────────────────────────────┐    │
│     │ <link rel="stylesheet" href="../shared/css/exam.css">      │    │
│     └──────────────────────────────────────────────────────────────┘    │
│                                    │                                    │
│  2. JavaScript (carga secuencial)                                     │
│     ┌──────────────────────────────────────────────────────────────┐    │
│     │ <script src="../js/questions.js"></script>                 │    │
│     │     ↓                                                      │    │
│     │ <script src="../shared/js/nivel.js"></script>             │    │
│     │     ↓                                                      │    │
│     │ <script src="../shared/js/meta.js"></script>              │    │
│     │     ↓                                                      │    │
│     │ <script src="../shared/js/app.js"></script>               │    │
│     │     ↓                                                      │    │
│     │ <script src="../shared/js/exam.js"></script>             │    │
│     └──────────────────────────────────────────────────────────────┘    │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

### Dependencias entre archivos:

```
questions.js
    │
    ├──► nivel.js (usa getNivel)
    │         │
    │         └──► preguntas con nivel → getNivel(pct, subject)
    │
    ├──► meta.js (usa META_QB)
    │         │
    │         └──► selectOpt() → META_QB[subject]?[index]
    │
    └──► exam.js
              │
              ├──► state (definido en app.js)
              ├──► QB (construido desde questions.js)
              ├──► IMGS (definido en cada index.html)
              └──► NIVEL_INFO (definido en nivel.js)
```

---

## 4. Flujo de Datos del Examen

```
┌─────────────────────────────────────────────────────────────────────────┐
│                      FLUJO DEL EXAMEN                                   │
└─────────────────────────────────────────────────────────────────────────┘

    ┌─────────────┐
    │  USUARIO   │
    │  ABRE APP  │
    └──────┬──────┘
           │
           ▼
┌─────────────────────────────────────────────────────────────────────────┐
│ 1. INICIALIZACIÓN                                                     │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│   DOMContentLoaded                                                     │
│        │                                                                │
│        ▼                                                                │
│   ┌─────────────────────────────────────────────────────────────┐       │
│   │ QUESTIONS.filter(simulacros.includes(SIMULACRO_ID))         │       │
│   │             ↓                                                 │       │
│   │ QB = { lc: { questions: [...] }, mat: {...}, ... }         │       │
│   └─────────────────────────────────────────────────────────────┘       │
│        │                                                                │
│        ▼                                                                │
│   renderHomeScreen() → Muestra tarjetas de materias                    │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
           │
           ▼
┌─────────────────────────────────────────────────────────────────────────┐
│ 2. SELECCIÓN DE MATERIA                                               │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│   selectSubject(key)                                                    │
│        │                                                                │
│        ▼                                                                │
│   ┌─────────────────────────────────────────────────────────────┐       │
│   │ state.subject = key                                          │       │
│   │ UI: .active-subj en tarjeta seleccionada                    │       │
│   │ btnStart.disabled = false                                   │       │
│   └─────────────────────────────────────────────────────────────┘       │
│        │                                                                │
│        ▼                                                                │
│   beginSubject() → Prepara preguntas mezcladas                         │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
           │
           ▼
┌─────────────────────────────────────────────────────────────────────────┐
│ 3. PRUEBA (BUCLE)                                                     │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│   showQuestion()                                                        │
│        │                                                                │
│        ├──► Mostrar contexto (text/img)                                 │
│        ├──► Mostrar pregunta                                           │
│        ├──► shuffleOpts() → Mezclar opciones                           │
│        ├──► Mostrar opciones A, B, C, D                                │
│        └──► Iniciar timer (si es modo cronometrado)                    │
│                                                                          │
│   selectOpt(idx)                                                        │
│        │                                                                │
│        ├──► state.answers[current] = idx                               │
│        ├──► Si immediateFeedback:                                       │
│        │     ├──► Mostrar feedback (correct/wrong)                     │
│        │     ├──► META_QB[subject]?[index] → Competencia              │
│        │     └──► launchConfetti() si correcto                        │
│        └──► btnNext.visible = true                                     │
│                                                                          │
│   nextQuestion()                                                         │
│        │                                                                │
│        ├──► current++                                                   │
│        └──► showQuestion() (repite bucle)                              │
│             │                                                           │
│             └──► Si última pregunta → showResults()                     │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
           │
           ▼
┌─────────────────────────────────────────────────────────────────────────┐
│ 4. RESULTADOS                                                          │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│   showResults()                                                         │
│        │                                                                │
│        ├──► stopTimer()                                                 │
│        ├──► Calcular scores por materia                                │
│        │     ├──► correct = answers.filter(a => a === q.correct)      │
│        │     ├──► pct = (correct / total) * 100                       │
│        │     └──► nivel = getNivel(pct, subject)                      │
│        ├──► Generar HTML de resultados                                  │
│        └──► Mostrar revisión de respuestas                              │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 5. Estructura del Estado (State)

```javascript
// Definido en shared/js/app.js
let state = {
  simulacroId: null,        // 1 o 2
  subject: null,            // 'lc', 'mat', 'soc', 'cn', 'ing'
  questions: [],            // Preguntas mezcladas
  current: 0,              // Índice de pregunta actual
  answers: [],              // Respuestas del usuario
  hintsUsed: 0,            // Pistas usadas
  allSubjects: false,      // Modo examen completo
  allQueue: [],            // Cola de materias (full exam)
  allAnswers: {},          // Respuestas de todas las materias
  immediateFeedback: true, // Feedback inmediato
  timedMode: true,         // Modo cronometrado
  timeRemaining: 0,        // Segundos restantes
  timerInterval: null,     // Referencia del interval
  timeExpired: false       // Tiempo agotado
};
```

---

## 6. Banco de Preguntas (questions.js)

```
┌─────────────────────────────────────────────────────────────────────────┐
│                  STRUCTURA DE PREGUNTAS                                 │
└─────────────────────────────────────────────────────────────────────────┘

const QUESTIONS = [
  {
    id: 101,                      // ID único
    simulacros: [1],              // [1] = Simulacro 1, [2] = Simulacro 2
    subject: 'lc',               // Materia: lc, mat, soc, cn, ing
    
    // Contexto (opcional)
    context: '...',               // Texto de contexto HTML
    contextImg: 'img_key',       // Clave de imagen Base64
    contextImgCaption: '...',   // Pie de imagen
    
    // Pregunta
    text: '¿Cuál es la respuesta?',
    questionImg: 'img_key',     // Imagen adicional
    
    // Opciones
    opts: ['A) Opción', 'B) Opción', 'C) Opción', 'D) Opción'],
    correct: 0,                 // Índice de respuesta correcta (0-3)
    
    // Feedback
    hint: 'Pista para la pregunta',
    explain: 'Explicación de la respuesta',
    
    // Metadatos
    comp: 'Competencia evaluada',
    nivel: 1-4                 // Nivel de dificultad
  },
  // ... más preguntas
];
```

### Distribución de preguntas:

| Simulacro | LC  | MAT | SOC | CN  | ING | Total |
|-----------|-----|-----|-----|-----|-----|-------|
| 1         | 6   | 9   | 9   | 10  | 4   | 38    |
| 2         | 20  | 20  | -   | -   | -   | 40    |
| **Total** | 26  | 29  | 9   | 10  | 4   | **78** |

---

## 7. CSS Compartido (exam.css)

```
┌─────────────────────────────────────────────────────────────────────────┓
│                    ESTRUCTURA CSS (exam.css)                            │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│ 1. VARIABLES (:root)                                                   │
│    ├── Colores: --primary, --accent, --green, --red                   │
│    ├── Backgrounds: --bg, --surface                                     │
│    ├── Texto: --text, --text-2, --text-3                               │
│    └── Bordes: --border, --r (border-radius)                           │
│                                                                          │
│ 2. LAYOUT                                                              │
│    ├── .top-bar, .top-inner (navbar)                                  │
│    ├── .container, .card (contenedores)                                │
│    └── .screen (pantallas: s-home, s-intro, s-question, s-results)   │
│                                                                          │
│ 3. COMPONENTES                                                          │
│    ├── .subj-card (tarjetas de materia)                                │
│    ├── .btn, .btn-primary, .btn-outline                                │
│    ├── .opt (opciones de respuesta)                                    │
│    ├── .feedback (retroalimentación)                                    │
│    └── .score-bar, .level-pill (resultados)                            │
│                                                                          │
│ 4. UTILIDADES                                                           │
│    ├── .active, .show (estados)                                        │
│    ├── .timer-warning, .timer-danger (timer)                           │
│    └── Animaciones y transiciones                                       │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

### Breakpoints (Mobile-first):

```css
/* Mobile-first (default) */
.card { padding: 16px; }

/* Tablet */
@media (max-width: 768px) {
  .card { padding: 12px; }
}

/* Desktop */
@media (min-width: 1024px) {
  .container { max-width: 800px; }
}
```

---

## 8. Funciones Principales (exam.js)

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    FUNCIONES POR MÓDULO                                │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│ SHUFFLE                                                                 │
│   shuffleOpts(q) ──────────► Mezcla opciones preservando respuesta      │
│                                                                          │
│ HOME                                                                    │
│   selectSubject(key) ──────► Selecciona materia                        │
│   startQuiz() ─────────────► Inicia quiz individual                    │
│   startAllSubjects() ───────► Inicia examen completo                    │
│   beginSubject() ──────────► Prepara preguntas de materia               │
│                                                                          │
│ INTRO                                                                   │
│   showIntro() ────────────► Muestra pantalla de inicio                │
│   setTimedMode(timed) ────► Alterna modo cronometrado                 │
│                                                                          │
│ TIMER                                                                   │
│   startTimer() ───────────► Inicia contador                            │
│   stopTimer() ────────────► Detiene contador                           │
│   updateTimerDisplay() ────► Actualiza mostrar timer                   │
│   expireTime() ────────────► Maneja tiempo agotado                      │
│                                                                          │
│ QUESTION                                                                │
│   showQuestion() ──────────► Renderiza pregunta actual                 │
│   selectOpt(idx) ───────────► Procesa selección de opción               │
│   nextQuestion() ───────────► Avanza a siguiente pregunta               │
│                                                                          │
│ RESULTS                                                                 │
│   showResults() ───────────► Genera y muestra resultados               │
│   showNivelInfo(nivel, s) ─► Muestra info de nivel (modal)            │
│                                                                          │
│ UTILS                                                                   │
│   goScreen(id) ────────────► Cambia pantalla activa                     │
│   setProgress(pct) ────────► Actualiza barra de progreso              │
│   launchConfetti(n) ───────► Efecto confeti                            │
│   goHome() ─────────────────► Resetea al inicio                        │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 9. PWA y Service Worker

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    PWA SERVICE WORKER                                  │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  Cache Name: saber11-sim-v1                                            │
│                                                                          │
│  ┌──────────────────────────────────────────────────────────────────┐   │
│  │ ASSETS A CACHEAR                                                 │   │
│  ├──────────────────────────────────────────────────────────────────┤   │
│  │ Root:                                                            │   │
│  │   - index.html                                                   │   │
│  │   - manifest.json                                                │   │
│  │   - icon-192.png, icon-512.png, icon-escudo.svg                 │   │
│  │                                                                   │   │
│  │ simulacro-1/:                                                    │   │
│  │   - index.html, manifest.json, sw.js                             │   │
│  │   - icon-*.png/svg (symlinks)                                   │   │
│  │                                                                   │   │
│  │ simulacro-2/:                                                    │   │
│  │   - index.html, manifest.json, sw.js                             │   │
│  │   - icon-*.png/svg (symlinks)                                   │   │
│  │                                                                   │   │
│  │ shared/ (cargados dinámicamente):                               │   │
│  │   - shared/css/exam.css                                          │   │
│  │   - shared/js/*.js                                               │   │
│  │   - shared/icons/* (symlinks)                                    │   │
│  │                                                                   │   │
│  └──────────────────────────────────────────────────────────────────┘   │
│                                                                          │
│  Estrategia: Cache-first with network fallback                         │
│                                                                          │
│  caches.match(request) → response || fetch(request)                    │
│                              ↓                                          │
│                         catch(() => index.html)                         │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 10. Diagrama de Clases/Componentes

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    COMPONENTES Y RELACIONES                            │
└─────────────────────────────────────────────────────────────────────────┘

                           ┌─────────────────┐
                           │   index.html    │
                           │   (Portal)      │
                           └────────┬────────┘
                                    │
           ┌────────────────────────┼────────────────────────┐
           │                        │                        │
           ▼                        ▼                        ▼
   ┌───────────────┐      ┌─────────────────┐      ┌─────────────────┐
   │ simulacro-1/  │      │   simulacro-2/  │      │   shared/       │
   │   index.html  │      │    index.html   │      │    resources    │
   └───────┬───────┘      └────────┬────────┘      └────────┬────────┘
           │                       │                        │
           │   ┌───────────────────┴───────────────────┐    │
           │   │              HTML                   │    │
           │   │  <script src="questions.js">         │    │
           │   │  <script src="shared/js/*.js">     │    │
           │   └─────────────────────────────────────┘    │
           │                       │                        │
           ▼                       ▼                        ▼
   ┌─────────────────────────────────────────────────────────────┐
   │                    JavaScript Runtime                        │
   ├─────────────────────────────────────────────────────────────┤
   │                                                              │
   │  QUESTIONS ──────► Filter by simulacro ──────► QB          │
   │      │                       │                    │          │
   │      │                       ▼                    ▼          │
   │      │               ┌─────────────┐      ┌───────────┐    │
   │      │               │   nivel.js  │      │  meta.js  │    │
   │      │               │ NIVEL_INFO  │      │ META_QB   │    │
   │      │               └─────────────┘      └───────────┘    │
   │      │                       │                    │          │
   │      └───────────────────────┼────────────────────┘          │
   │                              ▼                                │
   │                      ┌─────────────┐                         │
   │                      │  exam.js    │                         │
   │                      │  app.js    │                         │
   │                      │  FUNCTIONS │                         │
   │                      └──────┬──────┘                         │
   │                             │                                 │
   │                             ▼                                 │
   │                      ┌─────────────┐                         │
   │                      │    DOM      │                         │
   │                      │  (UI)      │                         │
   │                      └─────────────┘                         │
   │                                                              │
   └──────────────────────────────────────────────────────────────┘
```

---

## 11. Screens (Estados de Pantalla)

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    ESTADOS / PANTALLAS                                 │
└─────────────────────────────────────────────────────────────────────────┘

┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   s-home    │───►│  s-intro    │───►│  s-question │───►│ s-results   │
└─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘
     ▲                                          │
     │            ┌─────────────┐                │
     └────────────┤  s-results  │◄───────────────┘
                  │  (review)   │
                  └─────────────┘

s-home     → Pantalla de selección de materia
s-intro    → Información de la prueba antes de iniciar
s-question → Durante la prueba (preguntas)
s-results  → Resultados y revisión de respuestas
```

---

## 12. Niveles de Desempeño

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    NIVELES DE DESEMPEÑO                                │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  Lectura Crítica (lc)                                                  │
│  ┌────────┬────────────────────────────────────────────────────────┐  │
│  │ Nivel  │ Rango de Puntaje                                        │  │
│  ├────────┼────────────────────────────────────────────────────────┤  │
│  │   4   │ 66 - 100  (Reflexiona, evalúa y argumenta)            │  │
│  │   3   │ 51 - 65   (Interpreta, infiere y relaciona)           │  │
│  │   2   │ 36 - 50   (Identifica y comprende)                    │  │
│  │   1   │  0 - 35   (Reconoce información explícita)            │  │
│  └────────┴────────────────────────────────────────────────────────┘  │
│                                                                          │
│  Matemáticas (mat)                                                     │
│  ┌────────┬────────────────────────────────────────────────────────┐  │
│  │ Nivel  │ Rango de Puntaje                                        │  │
│  ├────────┼────────────────────────────────────────────────────────┤  │
│  │   4   │ 71 - 100                                                │  │
│  │   3   │ 51 - 70                                                 │  │
│  │   2   │ 36 - 50                                                 │  │
│  │   1   │  0 - 35                                                 │  │
│  └────────┴────────────────────────────────────────────────────────┘  │
│                                                                          │
│  Inglés (ing)                                                           │
│  ┌────────┬────────────────────────────────────────────────────────┐  │
│  │ Nivel  │ Rango de Puntaje                                        │  │
│  ├────────┼────────────────────────────────────────────────────────┤  │
│  │  B+    │ 79 - 100 (Dominio avanzado)                           │  │
│  │  B1    │ 68 - 78  (Intermedio alto)                            │  │
│  │  A2    │ 58 - 67  (Intermedio)                                 │  │
│  │  A1    │ 48 - 57  (Básico)                                      │  │
│  │  A-    │  0 - 47  (Por debajo del nivel básico)               │  │
│  └────────┴────────────────────────────────────────────────────────┘  │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 13. Configuración de Simulacros

```javascript
// Simulacro 1 (index.html)
const SIMULACRO_ID = 1;
const SUBJECTS_FULL = ['lc', 'mat', 'soc', 'cn', 'ing'];  // 5 materias

// Simulacro 2 (index.html)  
const SIMULACRO_ID = 2;
const SUBJECTS_MATH_READ = ['lc', 'mat'];  // Solo 2 materias
```

---

## 14. Tecnologías y Dependencias

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    STACK TECNOLÓGICO                                     │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  FRONTEND                                                               │
│  ├── HTML5 (semántico, sin frameworks)                                 │
│  ├── CSS3 (variables, flexbox, grid, media queries)                    │
│  ├── JavaScript ES6+ (vanilla, sin librerías)                          │
│  └── PWA (Service Worker, Manifest)                                     │
│                                                                          │
│  EXTERNAL RESOURCES                                                     │
│  ├── Google Fonts: Nunito, Space Mono                                  │
│  └── (Sin dependencias npm/build)                                       │
│                                                                          │
│  BROWSER SUPPORT                                                        │
│  ├── Chrome/Edge (modern)                                             │
│  ├── Firefox (modern)                                                   │
│  ├── Safari iOS/macOS                                                   │
│  └── Requiere HTTPS o localhost                                        │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 15. Próximos Pasos / Mejoras Futuras

- [ ] Extraer IMGS de Base64 a archivos PNG reales
- [ ] Unificar completamente app.js con exam.js
- [ ] Agregar más preguntas al banco centralizado
- [ ] Implementar persistencia de progreso localStorage
- [ ] Agregar analytics para seguimiento de uso

---

*Documento generado para el proyecto SABER 11 - Secretaría de Educación Departamental de Nariño*
