# Cambodia Website

A basic, single-page frontend website about Cambodia, showcasing the iconic Angkor Wat temple complex and ancient Khmer temples.

## Tech Stack

- **React 18** — Component library
- **MUI v5** — UI component library (Material-UI)
- **Vite** — Build tool and dev server
- **Emotion** — CSS-in-JS engine (MUI dependency)

## Features

- Single-page layout with 4 sections:
  - **Hero** — Full-width Angkor Wat banner with title and CTA button
  - **About** — Brief introduction with key facts card (Capital, Population, Language, Currency)
  - **Highlights** — Responsive grid of 4 temple cards (Angkor Wat, Bayon, Ta Prohm, Banteay Srei)
  - **Footer** — Copyright and navigation links

## Design

Warm & Earthy color palette reflecting Cambodian temple aesthetics:

| Color | Hex | Usage |
|-------|-----|-------|
| Gold | `#D4AF37` | Primary |
| Deep Red | `#8B0000` | Secondary |
| Sand | `#F5E6C8` | Background |
| Dark Brown | `#3E2723` | Text |

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
cambodia-website/
  src/
    components/
      app-bar.jsx
      hero.jsx
      about-section.jsx
      key-facts-card.jsx
      highlights-section.jsx
      temple-card.jsx
      footer.jsx
    theme/
      theme.js
    data/
      temples.js
    App.jsx
    main.jsx
  public/
    index.html
  package.json
  vite.config.js
```

## Branch Strategy

- `main` — Production-ready code
- `dev` — Integration branch (GitFlow)
- `feature/frontend/cambodia-website` — Feature development branch

## License

This project is part of the SDLC Agentic Pipeline demonstration.