<!--
  SYNC IMPACT REPORT
  ==================
  Version change: N/A (initial) → 1.0.0

  Modified principles: None (initial creation)

  Added sections:
    - Core Principles (7 principles)
    - Technical Standards section
    - Development Workflow section
    - Governance section

  Removed sections: None

  Templates requiring updates:
    - .specify/templates/plan-template.md: ✅ Compatible (Constitution Check section exists)
    - .specify/templates/spec-template.md: ✅ Compatible (Requirements align with principles)
    - .specify/templates/tasks-template.md: ✅ Compatible (Task organization supports i18n, testing)
    - .specify/templates/checklist-template.md: ✅ Compatible (Generic structure)
    - .specify/templates/agent-file-template.md: ✅ Compatible (Generic structure)

  Follow-up TODOs: None
-->

# STL Festival 10 Anos Constitution

## Core Principles

### I. Islands Architecture First

All components MUST follow Astro's Islands Architecture pattern. Static content uses Astro
components (`.astro`) with zero client-side JavaScript. Interactive elements use React
components (`.tsx`) ONLY when necessary, with appropriate hydration directives:

- `client:idle` for non-critical interactivity (preferred default)
- `client:visible` for below-the-fold interactive content
- `client:load` only when immediate interactivity is essential
- `client:only="react"` only when SSR must be skipped entirely

**Rationale**: Maximizes performance by shipping minimal JavaScript to the client while
maintaining rich interactivity where needed.

### II. Design System Token Compliance

All visual styling MUST use Tailwind design tokens defined in `tailwind.config.mjs`.
Hardcoded color values (hex, rgb, hsl) are PROHIBITED in component code.

- Brand colors: `stl-green`, `stl-gold`, `stl-red`, `stl-orange`, `stl-teal`, `stl-cream`, `stl-indigo`
- Fonts: `font-jairo` (headings), `font-superbusy` (emphasis)
- Spacing, sizing, and other tokens from Tailwind configuration

**Rationale**: Ensures visual consistency across the entire application and enables
centralized design updates.

### III. Internationalization by Default

All user-facing text MUST be internationalized using the `src/i18n/` system. No hardcoded
strings in components.

- Use `getLangFromUrl()` and `useTranslations()` from `@i18n/utils`
- Translation files: `src/i18n/locales/{pt-BR,en,es}.json`
- URL structure: `/` (Portuguese), `/en/` (English), `/es/` (Spanish)
- New text requires entries in ALL three locale files

**Rationale**: The festival serves an international audience; all content must be
accessible in supported languages.

### IV. Performance & Core Web Vitals

All implementations MUST meet or exceed Core Web Vitals targets:

- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1
- Lighthouse Performance: 90+
- Lighthouse Accessibility: 100

Scroll handlers MUST use RAF (requestAnimationFrame) with ticking flags.
Media MUST be optimized via Cloudinary transformations.

**Rationale**: Performance directly impacts user experience and SEO rankings for an
event-driven landing page.

### V. Accessibility (WCAG 2.1 AA)

All components MUST comply with WCAG 2.1 Level AA guidelines:

- Semantic HTML elements required
- All interactive elements must be keyboard accessible
- Color contrast ratios must meet AA standards
- Images require meaningful alt text
- Animations MUST respect `prefers-reduced-motion`
- Form inputs require associated labels

**Rationale**: Accessibility is a core festival pillar; the website must be usable by
everyone regardless of ability.

### VI. Type Safety & Code Quality

TypeScript strict mode is enforced. All code MUST pass quality gates:

- Zero ESLint warnings allowed (`npm run lint`)
- Prettier formatting required (`npm run format:check`)
- Type checking required (`npm run type-check`)
- Pre-commit hooks verify lint and format
- Pre-push hooks verify types

Component props MUST be typed with interfaces. Avoid `any`; use `unknown` when needed.

**Rationale**: Type safety prevents runtime errors and improves maintainability for
a codebase with multiple contributors.

### VII. Conventional Commits (Portuguese)

All commits MUST follow Conventional Commits format in Portuguese without special characters:

- Format: `<type>(<scope>): <descricao>`
- Types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`
- No accented characters in commit messages
- Language: Portuguese (pt-BR)

**Rationale**: Consistent commit history enables automated changelog generation and
clear project history.

## Technical Standards

### Technology Stack

- **Framework**: Astro 5.x with React 18 integration
- **Language**: TypeScript 5.7+ (strict mode)
- **Styling**: Tailwind CSS 3.4+ with custom design tokens
- **Animations**: Framer Motion 11.x (respect reduced motion)
- **Linting**: ESLint 9.x with Astro, React, and a11y plugins
- **Formatting**: Prettier 3.x with Astro and Tailwind plugins
- **Git Hooks**: Husky 9.x for pre-commit and pre-push validation

### Path Aliases

All imports MUST use configured path aliases:

- `@/*` for `src/*`
- `@components/*` for `src/components/*`
- `@i18n/*` for `src/i18n/*`
- `@layouts/*` for `src/layouts/*`
- `@styles/*` for `src/styles/*`

### File Naming Conventions

- Components: PascalCase (`Button.tsx`, `HeroSection.astro`)
- Utilities: kebab-case (`api-client.ts`)
- Hooks: camelCase with `use` prefix (`useCounter.ts`)

## Development Workflow

### Required Checks Before Commit

1. `npm run lint` - Zero warnings
2. `npm run format:check` - Formatting verified
3. `npm run type-check` - Types valid

### Branch Strategy

- `main` - Production-ready code
- `feat/*` - New features
- `fix/*` - Bug fixes
- `docs/*` - Documentation updates

### MCP Tool Usage

- **Context7**: For fetching documentation of Astro, React, Framer Motion, Tailwind
- **Serena**: For semantic code retrieval and intelligent editing

## Governance

This constitution establishes non-negotiable standards for the STL Festival 10 Anos
project. All contributions MUST comply with these principles.

### Amendment Process

1. Propose changes via pull request to this file
2. Document rationale for each proposed change
3. Ensure all dependent templates are updated
4. Version increment follows semantic versioning:
   - MAJOR: Principle removal or incompatible redefinition
   - MINOR: New principle or material guidance expansion
   - PATCH: Clarifications, wording, non-semantic refinements

### Compliance Review

- All PRs MUST verify compliance with Core Principles
- Constitution violations block merge
- Exceptions require documented justification in Complexity Tracking

### Runtime Guidance

Development guidance is maintained in `CLAUDE.md` at repository root. This file
provides operational details while this constitution establishes governing principles.

**Version**: 1.0.0 | **Ratified**: 2026-02-03 | **Last Amended**: 2026-02-03
