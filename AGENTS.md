# AGENTS.md - Development Guidelines

## Project Overview

Progressive Web App (PWA) for SABER 11 test simulator by Secretaría de Educación Departamental de Nariño. Built with vanilla HTML, CSS, and JavaScript - no build system, no dependencies.

## Project Structure

```
/Users/fjimenezg/Documents/geotest/
├── index.html                  # Main portal (HTML + embedded CSS + embedded JS)
├── sw.js                       # Service worker for PWA caching
├── manifest.json               # PWA manifest
├── icon-192.png / icon-512.png # App icons
├── icon-escudo.svg             # Shield/logo SVG
├── assets/                     # Images and static assets
│   └── docs/                   # Reference PDF documents (ICFES guides)
├── simulacro-1/               # Simulacro 1 (standalone PWA) - Full exam
│   ├── index.html
│   ├── sw.js
│   └── manifest.json
└── simulacro-2/               # Simulacro 2 (standalone PWA) - Math & Reading
    ├── index.html
    ├── sw.js
    └── manifest.json
```

## Development Commands

**No build system** - Edit files directly. Test locally with any static server:

```bash
# Python 3
python3 -m http.server 8080

# PHP
php -S localhost:8000

# Node.js
npx serve

# Then open http://localhost:8080
```

**No linting configured** - No ESLint, Prettier, or other linters
**No tests configured** - No test framework present

---

## Code Style Guidelines

### General Principles

- Vanilla JavaScript project - no frameworks or build tools
- Mobile-first responsive design
- Keep code simple and readable
- All CSS/JS embedded in `index.html` (each PWA has its own)
- Spanish language used throughout (variable names, content, comments)

### HTML Style

- Use HTML5 doctype: `<!DOCTYPE html>`
- Include `lang="es"` attribute
- Semantic tags: `<header>`, `<main>`, `<section>`, `<nav>`, `<button>`, etc.
- SVG icons embedded inline in HTML
- External fonts loaded from Google Fonts CDN
- Meta tags for PWA: theme-color, apple-mobile-web-app-*, viewport

### CSS Style

**CSS Variables** (defined in `:root`):
```css
:root {
  --bg: #f6f8fa;           /* background color */
  --surface: #ffffff;        /* card backgrounds */
  --primary: #1a3a5c;        /* primary brand color - navy */
  --primary-lt: #e8eef5;    /* primary light variant */
  --accent: #e8a020;        /* accent/highlight - gold */
  --accent-lt: #fef3d7;      /* accent light variant */
  --green: #1e8a4a;         /* success states */
  --green-lt: #d4f0e2;      /* green light variant */
  --red: #c0392b;           /* error/warning states */
  --red-lt: #fde8e6;        /* red light variant */
  --text: #111827;           /* primary text */
  --text-2: #4b5563;        /* secondary text */
  --text-3: #9ca3af;        /* muted/disabled text */
  --border: #e5e7eb;         /* borders and dividers */
  --r: 12px;                /* border-radius default */
  --r-sm: 8px;              /* border-radius small */
  --r-lg: 16px;             /* border-radius large */
}
```

**Conventions**:
- Use `clamp()` for responsive font sizes
- Flexbox and CSS Grid for layouts
- Mobile-first breakpoints: `@media(max-width:...)`
- No unit for zero values: `0` not `0px`
- 2-space indentation for CSS

### JavaScript Style

- ES6+ features: `const`/`let`, arrow functions, template literals, destructuring
- Strict equality: `===` not `==`
- Variable names in Spanish (project is Colombian)
- Event handlers via `addEventListener`
- Semicolons not required (ASI - Automatic Semicolon Insertion used)
- Use `window.` prefix for global functions/variables to avoid conflicts

### Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| CSS Variables | kebab-case | `--primary-color` |
| CSS Classes | kebab-case | `.btn-primary`, `.nav-links` |
| JS Constants | PascalCase | `const QB = {...}` |
| JS Variables | camelCase | `let currentQuestion` |
| Subject keys | lowercase | `lc`, `mat`, `soc`, `cn`, `ing` |
| CSS Sections | comment headers | `/* ── NAVBAR ── */` |

### Data Structures

**Question Bank** (`QB` object):
```javascript
const QB = {
  lc: {
    name: "Lectura Crítica",
    icon: "📖",
    tag: "tag-lc",
    color: "#6c4bc0",
    desc: "Description",
    competencias: ["Competency 1", "Competency 2"],
    questions: [...]
  },
  mat: {
    name: "Matemáticas",
    icon: "📐",
    tag: "tag-mat",
    color: "#1a3a5c",
    questions: [...]
  },
  // ...
};
```

**Question Object**:
```javascript
{
  id: 1,
  context: "<p>Texto de contexto...</p>",
  text: "¿Cuál es la respuesta?",
  opts: ["A) Opción", "B) Opción", "C) Opción", "D) Opción"],
  correct: 0,      // index 0-3
  hint: "Pista...",
  comp: "Competencia evaluada",
  nivel: 1-4,      // difficulty level
  explain: "Explicación...",
  img: "image_key"  // optional, references IMGS object
}
```

**Images**: Stored as Base64 in `IMGS` object to keep everything in single file.

**Level Info** (`NIVEL_INFO` object):
```javascript
const NIVEL_INFO = {
  lc: {
    4: { range: 'Puntaje 66 – 100 (Nivel 4)', summary: '...', items: [...] },
    3: { range: 'Puntaje 51 – 65 (Nivel 3)', summary: '...', items: [...] },
    2: { range: 'Puntaje 36 – 50 (Nivel 2)', summary: '...', items: [...] },
    1: { range: 'Puntaje 0 – 35 (Nivel 1)', summary: '...', items: [] },
  },
  ing: {
    4: { range: 'Puntaje 79 – 100 (B+)', summary: '...', items: [] },
    3: { range: 'Puntaje 68 – 78 (B1)', summary: '...', items: [...] },
    2: { range: 'Puntaje 58 – 67 (A2)', summary: '...', items: [...] },
    1: { range: 'Puntaje 48 – 57 (A1)', summary: '...', items: [...] },
    0: { range: 'Puntaje 0 – 47 (A−)', summary: '...', items: [] },
  },
};
```

**Level Thresholds** (`NIVEL_THRESHOLDS`):
```javascript
const NIVEL_THRESHOLDS = {
  lc: { 4: 66, 3: 51, 2: 36 },  // thresholds for each level
  mat: { 4: 71, 3: 51, 2: 36 },
  soc: { 4: 71, 3: 56, 2: 41 },
  cn: { 4: 71, 3: 56, 2: 41 },
  ing: { 4: 79, 3: 68, 2: 58 }  // uses getNivel for inglés logic
};
```

### State Management

```javascript
let state = {
  subject: null,        // current subject key
  questions: [],         // shuffled questions
  current: 0,           // current question index
  answers: [],          // user's answers
  hintsUsed: 0,         // hints used count
  allSubjects: false,   // true if doing full exam
  allQueue: [],         // remaining subjects in full exam
  allAnswers: {},       // answers for all subjects
  immediateFeedback: false,  // show feedback after each answer
  timedMode: true,          // timed mode default
  timeRemaining: 0,        // seconds remaining
  timerInterval: null,      // timer reference
  timeExpired: false        // time ran out flag
};
```

### Error Handling

- No try/catch blocks in main code (assumes elements exist)
- Service worker: silent cache failures (catch returns null)
- DOM queries assume elements exist (no null checks in most cases)
- Graceful degradation for missing features

---

## PWA / Service Worker

**Cache name**: `saber11-sim-v1` (increment on major changes)

**Caching strategy**: Cache-first with network fallback
```javascript
caches.match(request).then(r => r || fetch(request).catch(() => caches.match('./index.html')))
```

**Cached assets** (in `sw.js` ASSETS array):
- Root: `index.html`, `manifest.json`, icons
- `simulacro-1/` subdirectory
- `simulacro-2/` subdirectory

**Activation**: Cleans old caches on activation

---

## Accessibility

- Semantic HTML elements (`<nav>`, `<main>`, `<button>`, etc.)
- `alt` attributes on all `<img>` elements
- `aria-label` on interactive elements lacking text
- Sufficient color contrast (verified)
- Keyboard navigation support
- Touch-friendly tap targets (min 44px)

---

## Level Colors

| Level | Background | Text Color |
|-------|------------|------------|
| lv0 (A-) | #ffcccc | #c53030 |
| lv1 (A1/Nivel 1) | #fee2e2 | #dc2626 |
| lv2 (A2/Nivel 2) | var(--accent-lt) | #8a5010 |
| lv3 (B1/Nivel 3) | var(--green-lt) | #1e8a4a |
| lv4 (B+/Nivel 4) | #dbeafe | #2563eb |

---

## Adding New Subjects

1. Add subject to `QB` object in `index.html`
2. Add entry to `NIVEL_INFO` with ranges, summaries, and items
3. Add thresholds to `NIVEL_THRESHOLDS`
4. Add CSS classes if needed (`.s-key`, `.tag-key`)
5. Add colors to `sc_colors` object
6. Update `ASSETS` array in `sw.js` if adding new files
7. Update `getNivel()` function if special logic needed

---

## Browser Support

- Modern browsers: Chrome, Firefox, Safari, Edge
- Service worker requires HTTPS or localhost
- PWA installable on mobile and desktop
