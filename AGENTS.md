# AGENTS.md - Development Guidelines

## Project Overview

Progressive Web App (PWA) for SABER 11 test simulator by Secretaría de Educación Departamental de Nariño. Built with vanilla HTML, CSS, and JavaScript - no build system, no dependencies.

## Project Structure

```
geotest/
├── index.html                    # Main portal
├── sw.js                        # Portal service worker
├── manifest.json                # Portal PWA manifest
├── shared/
│   ├── js/
│   │   ├── questions.js         # Question bank
│   │   ├── data.js             # SUBJ_INFO, SIMULACROS, META_QB, NIVEL_INFO
│   │   ├── exam.js             # Exam logic (state, QB, timer, results)
│   │   └── portal.js           # Portal UI functions
│   ├── css/
│   │   ├── portal.css          # Portal styles
│   │   └── exam.css            # Exam simulator styles
│   └── img/
│       ├── portal/              # Portal images (icons, banners, logos)
│       └── questions/           # Question images (optsImg, contextImg)
├── simulacro/
│   ├── index.html              # Exam simulator
│   ├── sw.js                   # Exam service worker
│   └── manifest.json           # Exam PWA manifest
└── assets/docs/                # Reference PDFs (ICFES guides)
```

## Development Commands

**No build system** - Edit files directly. Test locally:

```bash
# Python 3
python3 -m http.server 8080

# Then open http://localhost:8080
```

**No linting configured** - No ESLint, Prettier
**No tests configured** - Manual testing only

---

## Code Style Guidelines

### General Principles

- Vanilla JavaScript - no frameworks or build tools
- Mobile-first responsive design
- Spanish language throughout (variable names, content, comments)
- CSS/JS in separate files under `shared/`

### JavaScript Style

- ES6+ features: `const`/`let`, arrow functions, template literals
- Strict equality: `===` not `==`
- Variable names in Spanish
- Event handlers via `addEventListener`
- Use `window.` prefix for global functions

### Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| CSS Variables | kebab-case | `--primary-color` |
| CSS Classes | kebab-case | `.btn-primary` |
| JS Constants | PascalCase | `const QB = {...}` |
| JS Variables | camelCase | `let currentQuestion` |
| Subject keys | lowercase | `lc`, `mat`, `soc`, `cn`, `ing` |

### Data Structures

**Question Object**:
```javascript
{
  id: 1,
  simulacros: [1, 2],           // which simulacros include this
  subject: 'lc',                // subject key
  context: "<p>...</p>",       // context text
  contextImg: "img_key",        // optional context image
  text: "¿Cuál es la respuesta?",
  opts: ["A) Opción", "B) Opción", "C) Opción", "D) Opción"],
  optsImg: ["img_a", "img_b", "img_c", "img_d"], // optional
  correct: 0,                  // index 0-3
  hint: "Pista...",
  comp: "Competencia evaluada",
  nivel: 1-4,
  explain: "Explicación..."
}
```

### Image Handling

- Images stored in `shared/img/questions/` or `shared/img/portal/`
- Use `getImg(key)` function to resolve paths:
  ```javascript
  function getImg(key) {
    if (IMGS[key]) return IMGS[key];
    return `../shared/img/questions/${key}.png`;
  }
  ```

### State Management

```javascript
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
```

### Error Handling

- No try/catch in main code (assumes elements exist)
- Service worker: silent cache failures
- DOM queries assume elements exist

---

## PWA / Service Worker

**Cache names**:
- Portal: `portal-sed-narino-v11`
- Simulacro: `simulacro-v5`

**Important**: When adding new JS/CSS/image files, update the `ASSETS` array in the appropriate `sw.js`.

---

## Adding New Content

### New Question
Add to `shared/js/questions.js` array with all required fields.

### New Image
1. Add to appropriate folder (`shared/img/portal/` or `shared/img/questions/`)
2. Update `ASSETS` array in both `sw.js` files if needed

### New Subject
1. Add to `SUBJ_INFO` in `shared/js/data.js`
2. Add to `NIVEL_INFO` in `shared/js/data.js`
3. Add thresholds to `NIVEL_THRESHOLDS`
4. Add to `sc_colors` in `exam.js`

---

## Browser Support

- Modern browsers: Chrome, Firefox, Safari, Edge
- Service worker requires HTTPS or localhost
- PWA installable on mobile and desktop
