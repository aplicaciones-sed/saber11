# AGENTS.md - Development Guidelines

## Project Overview

This is a Progressive Web App (PWA) for a SABER 11 test simulator by the Secretaría de Educación de Nariño. It uses vanilla HTML, CSS, and JavaScript with no build system or dependencies.

## Project Structure

```
/Users/fjimenezg/Documents/geotest/
├── index.html         # Main app (HTML + embedded CSS + embedded JS)
├── sw.js              # Service worker for PWA caching
├── manifest.json      # PWA manifest
├── icon-192.png      # App icon (192x192)
├── icon-512.png      # App icon (512x512)
├── icon-escudo.svg   # Shield/logo SVG
└── saber11-2017/     # Legacy simulator (standalone PWA)
```

## Build / Development Commands

**No build system** - Edit files directly. To test locally:

```bash
# Python 3
python -m http.server 8000

# PHP
php -S localhost:8000

# Node.js
npx serve

# Then open http://localhost:8000
```

**No linting configured** - No ESLint, Prettier, or other linters
**No tests configured** - No test framework present

---

## Code Style Guidelines

### General Principles

- Vanilla JavaScript project - no frameworks
- Mobile-first responsive design
- Keep code simple and readable
- All CSS/JS embedded in `index.html`

### HTML Style

- Use HTML5 doctype: `<!DOCTYPE html>`
- Include `lang="es"` attribute
- Semantic tags: `<header>`, `<main>`, `<section>`, `<nav>`, `<button>`, etc.
- SVG icons embedded inline in HTML
- External fonts loaded from Google Fonts CDN

### CSS Style

**Variables** (defined in `:root`):
```css
:root {
  --navy: #1a3a5c;       /* primary brand */
  --gold: #e8a020;       /* accent/highlight */
  --green: #1e8a4a;      /* success */
  --bg: #f6f8fa;         /* background */
  --text: #111827;       /* main text */
  --text-2: #4b5563;     /* secondary text */
  --text-3: #9ca3af;     /* muted text */
  --border: #e5e7eb;     /* borders */
  --r: 12px;             /* border-radius */
  --shadow: 0 4px 24px rgba(26,58,92,.12);
}
```

**Conventions**:
- Use `clamp()` for responsive font sizes
- Flexbox and grid for layouts
- Mobile-first with `@media(max-width:...)`
- No unit for zero: `0` not `0px`

### JavaScript Style

- ES6+ features (const/let, arrow functions, template literals)
- Strict equality: `===` not `==`
- Variable names in Spanish (project is Spanish)
- Event handlers via `addEventListener`
- No semicolons required ( ASI used)

### Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| CSS Variables | kebab-case | `--primary-color` |
| CSS Classes | kebab-case | `.btn-primary` |
| JS Constants | PascalCase | `const QB = {...}` |
| JS Variables | camelCase | `let currentQuestion` |
| Subject keys | lowercase | `lc`, `mat`, `soc` |

### Data Structures

Questions stored in `QB` object:
```javascript
const QB = {
  lc: { name: "Lectura Crítica", icon: "📖", questions: [...] },
  mat: { name: "Matemáticas", icon: "📐", questions: [...] },
};
```

Each question object:
```javascript
{
  id: 1,
  context: "<p>Texto de contexto...</p>",
  text: "¿Cuál es la respuesta?",
  opts: ["A) Opción", "B) Opción", "C) Opción", "D) Opción"],
  correct: 0,  // index 0-3
  hint: "Pista...",
  comp: "Competencia evaluada",
  nivel: 1-4,
  explain: "Explicación..."
}
```

Images stored as Base64 in `IMGS` object to keep in single file.

### Error Handling

- No try/catch blocks
- Service worker: silent cache failures
- DOM queries assume elements exist (no null checks)

---

## PWA / Service Worker

**Cache name**: `portal-sed-narino-v2`

**Caching strategy**: Cache-first with network fallback

**Cached assets**:
- `index.html`, `manifest.json`, icons
- `saber11-2017/` subdirectory

**Activation**: Cleans old caches on activation

---

## Accessibility

- Semantic HTML elements
- Include `alt` attributes on images
- Use `aria-label` where appropriate
- Sufficient color contrast
- Keyboard navigation support

---

## Adding New Subjects

1. Add to `QB` object in `index.html`:
```javascript
cn: {
  name: "Ciencias Naturales",
  icon: "🔬",
  tag: "tag-cn",
  color: "#1e8a4a",
  questions: [...]
}
```

2. Add CSS classes if needed (`.s-cn`, `.tag-cn`)

3. Update `ASSETS` array in `sw.js` if adding new files

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Service worker requires HTTPS or localhost
