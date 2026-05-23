# Specification: Phase 1 — Core Website Redesign (MVP)

## Track Overview
- **Track ID:** `redesign_20260320`
- **Description:** Implement the "Editorial Luxury" redesign of the Pixel & Grid website based on the provided design documentation and source HTML.
- **Goal:** Deliver a high-performance, responsive Next.js website with the specified aesthetics and microinteractions.

## Design System (Ref: `kreation-redesign-documentation.md`)

### Colors
- `--paper`: `#f4f1eb` (Background)
- `--ink`: `#0a0a0a` (Text/Dark elements)
- `--cream`: `#ede9e0` (Secondary background)
- `--gold`: `#c9a84c` (Accent/Dividers)
- `--gold-dim`: `#8a6f33` (Secondary gold)
- `--red`: `#c1350f` (Cursor hover)
- `--mist`: `#b8b3a8` (Secondary text)

### Typography
- **Headings:** `Cormorant Garamond` (Light 300)
- **Body/UI:** `DM Mono` (300/400)

### Layout
- 12-column grid for portfolio/work.
- 2-column split for content/sticky sidebar.
- 3rem (48px) gutters.

## Core Sections to Implement
1. **Hero:** Floating cards, stat bar, primary CTA.
2. **Marquee:** Scrolling services strip (Italic serif, dark background).
3. **About/Studio:** 2-column layout (Philosophy).
4. **Services:** 3 cards with SVG icons and large watermark numbers.
5. **Work/Portfolio:** Asymmetric grid (7+5, 4+5+3 spans).
6. **Process:** 4-step framework on dark background with week labels.
7. **Testimonials:** Large pull quotes with author avatars.
8. **Contact:** Borderless form with gold focus states.
9. **Footer:** 4-block architecture (Brand, Nav, Services, Legal).

## Microinteractions & Motion
- **Custom Cursor:** 12px gold dot expanding to 48px red circle.
- **Floating Cards:** Hero cards with independent CSS float animations.
- **Section Reveals:** Fade-up transitions via IntersectionObserver.
- **Hover Effects:** Gold underlines, image scaling (1.04), and overlay fades.

## Technical Requirements
- **Framework:** Next.js 14 (App Router).
- **Language:** TypeScript.
- **Animation:** Framer Motion.
- **Styling:** CSS Modules / Vanilla CSS.
- **Testing:** Vitest / React Testing Library (TDD workflow).
- **Performance:** LCP < 1.5s, Page weight < 300KB.
- **SEO:** Semantic HTML, Meta tags, Structured Data.
