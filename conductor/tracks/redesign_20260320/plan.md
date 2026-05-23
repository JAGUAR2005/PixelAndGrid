# Implementation Plan: Phase 1 — Core Website Redesign (MVP)

## Track ID: `redesign_20260320`

---

## Phase 1: Foundation & Design System [checkpoint: 3c9f479]

- [x] Task: Project Scaffolding & Setup (0379167)
    - [ ] Initialize Next.js 14 project with TypeScript
    - [ ] Install dependencies (Framer Motion, Lucide React, Zustand, Vitest)
    - [ ] Configure Vitest and React Testing Library
- [x] Task: Global Design System Implementation (1890cc7)
    - [ ] Write tests for Design Token injection (CSS Variables)
    - [ ] Define CSS Variables in `globals.css` (`--paper`, `--ink`, `--gold`, etc.)
    - [ ] Setup Font loading (`Cormorant Garamond`, `DM Mono`) via `next/font`
- [x] Task: Core Layout & Global Components (3d7c898)
    - [ ] Write tests for `Layout`, `GrainOverlay`, and `CustomCursor`
    - [ ] Implement `GrainOverlay` (fixed SVG noise)
    - [ ] Implement `CustomCursor` with expansion logic and `mix-blend-mode`
    - [ ] Implement sticky `NavigationBar` with `multiply` blend-mode
- [x] Task: Conductor - User Manual Verification 'Phase 1: Foundation & Design System' (3c9f479)

---

## Phase 2: Hero & Early Sections [checkpoint: d5ab47e]

- [x] Task: Hero Section Implementation (3eabeb7)
    - [ ] Write tests for `Hero` component and `FloatingCard` animations
    - [ ] Implement Hero structure (Headline with italic pause)
    - [ ] Implement `FloatingCardCluster` with independent CSS animations
    - [ ] Implement Stats Bar with hairline dividers
- [x] Task: Marquee Strip Component (a24418f)
    - [ ] Write tests for `Marquee` infinite scroll
    - [ ] Implement `Marquee` strip with services and italic serif styling
- [x] Task: About & Services Sections (06d748b)
    - [ ] Write tests for `About` (2-column) and `ServiceCard`
    - [ ] Implement `About` section (Studio philosophy)
    - [ ] Implement `Services` grid with SVG icons and watermark numbers
- [x] Task: Conductor - User Manual Verification 'Phase 2: Hero & Early Sections' (d5ab47e)


---

## Phase 3: Portfolio & Process [checkpoint: 88d509a]

- [x] Task: Work/Portfolio Asymmetric Grid (f4b7edd)
    - [ ] Write tests for `PortfolioGrid` and `WorkItem` hover states
    - [ ] Implement 12-column asymmetric grid (7+5, 4+5+3 spans)
    - [ ] Implement `WorkItem` with hover overlay and image scaling
- [x] Task: Process Framework (Dark Mode) (ba1f58d)
    - [ ] Write tests for `Process` section structure
    - [ ] Implement Process section on dark background (`--ink`)
    - [ ] Add week labels and step descriptions
- [x] Task: Conductor - User Manual Verification 'Phase 3: Portfolio & Process' (88d509a)

---

## Phase 4: Feedback & Conversion [checkpoint: 976415c]

- [x] Task: Testimonials & Social Proof (046f882)
    - [ ] Write tests for `TestimonialCard`
    - [ ] Implement Testimonials section with pull quotes and avatars
- [x] Task: Contact Section & Form (613c156)
    - [ ] Write tests for `ContactForm` validation and submission states
    - [ ] Implement borderless form with gold focus animations
    - [ ] Add contact detail items with hairline rules
- [x] Task: Footer Implementation (1d6e017)
    - [ ] Write tests for `Footer` 4-block structure
    - [ ] Implement Footer with brand mark, nav grid, and social links
- [x] Task: Conductor - User Manual Verification 'Phase 4: Feedback & Conversion' (976415c)

---

## Phase 5: Final Polish & Optimization [checkpoint: 317757d]

- [x] Task: Global Motion & Section Reveals (6fefaa8)
    - [ ] Write tests for `SectionReveal` wrapper
    - [ ] Apply `fadeUp` transitions to all major sections via `IntersectionObserver`
- [x] Task: SEO & Accessibility Audit (4e618c5)
    - [ ] Write tests for Meta tags and Semantic HTML structure
    - [ ] Implement structured data (JSON-LD)
    - [ ] Ensure WCAG 2.1 AA compliance (contrast, tab-index)
- [x] Task: Performance Tuning (5579dc4)
    - [ ] Verify LCP < 1.5s and page weight < 300KB
    - [ ] Optimize image loading and component code-splitting
- [x] Task: Conductor - User Manual Verification 'Phase 5: Final Polish & Optimization' (317757d)

