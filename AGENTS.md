# AGENTS.md - Development Guidelines

## Project Overview

PWA for SABER 11 test simulator by Secretaría de Educación Departamental de Nariño. Vanilla HTML/CSS/JS - no build system.

## Project Structure

```
geotest/
├── index.html                    # Main portal
├── sw.js                         # Portal service worker
├── manifest.json                 # PWA manifest
├── shared/
│   ├── js/
│   │   ├── questions.js          # Question bank
│   │   ├── data.js               # SUBJ_INFO, SIMULACROS, META_QB
│   │   ├── exam.js                # Exam logic (state, QB, timer)
│   │   └── portal.js              # Portal UI functions
│   ├── css/
│   │   ├── portal.css             # Portal styles
│   │   └── exam.css               # Exam styles
│   └── img/
│       ├── portal/                # Portal images
│       └── questions/             # Question images
├── simulacro/
│   ├── index.html                # Exam simulator
│   ├── sw.js                     # Exam service worker
│   └── manifest.json
└── assets/docs/                  # ICFES reference PDFs
```

## Development Commands

```bash
# Start local server (required for service workers)
python3 -m http.server 8080

# Syntax check JavaScript
node --check shared/js/portal.js
node --check shared/js/exam.js
node --check shared/js/data.js
```

**No linting** - Manual verification only  
**No tests** - Manual testing only

---

## Code Style Guidelines

### General Principles
- Vanilla JavaScript - no frameworks
- Mobile-first responsive design
- Spanish language throughout (variables, content, comments)
- CSS/JS in separate files under `shared/`
- Production-grade quality

### Typography
- Display: Fraunces (serif, académico)
- Body: Work Sans (sans-serif, legible)
- CSS variables: `--font-display`, `--font-body`

### JavaScript Style
- ES6+: `const`/`let`, arrow functions, template literals
- Strict equality: `===` not `==`
- Variables in Spanish (camelCase)
- Constants in PascalCase: `const QB = {...}`
- No semicolons at line endings
- Event handlers via `addEventListener`

### Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| CSS Variables | kebab-case | `--primary-color` |
| CSS Classes | kebab-case | `.btn-primary` |
| JS Constants | PascalCase | `const QB = {...}` |
| JS Variables | camelCase | `let preguntaActual` |
| Subject keys | lowercase | `lc`, `mat`, `soc`, `cn`, `ing` |

### Data Structures

**Question Object**:
```javascript
{
  id: 1,
  simulators: [1, 2],
  subject: 'lc',
  context: "<p>...</p>",
  contextImg: "img_key",
  text: "¿Cuál es la respuesta?",
  options: ["A)", "B)", "C)", "D)"],
  correct: 0,
  level: 1-4
}
```

**Simulacro Config**:
```javascript
{
  simulacroId: 1,
  subjects: {
    lc: { preguntas: 3, inicio: 1, aleatorio: true },
    mat: { preguntas: 5, inicio: 1, aleatorio: false }
  }
}
```

---

## Simulacro Types

### Dynamic (simulacro 1)
- Configurable via portal: questions per subject, start index, random order
- Config stored in sessionStorage, loaded on exam start
- Uses `buildDynamicQuestions()` in data.js

### Static (simulacro 2+)
- Uses all questions from `simulators` array
- No configuration UI

---

## Error Handling
- No try/catch in main code (assumes elements exist)
- Service worker: silent cache failures
- Console logging for debugging only

---

## PWA / Service Worker
- Portal cache: `portal-sed-narino-v11`
- Simulacro cache: `simulacro-v5`
- Update `ASSETS` array in sw.js when adding files

---

## Adding New Content

### New Question
Add to `shared/js/questions.js` with required fields.

### New Image
1. Add to `shared/img/portal/` or `shared/img/questions/`
2. Update `ASSETS` array in sw.js files

### New Subject
1. Add to `SUBJ_INFO` in data.js
2. Add to `NIVEL_INFO` in data.js
3. Add thresholds to `NIVEL_THRESHOLDS`

---

## Browser Support
- Modern browsers: Chrome, Firefox, Safari, Edge
- Service worker requires HTTPS or localhost
- PWA installable on mobile and desktop