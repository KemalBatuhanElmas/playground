# Design: Todo Landing Page

## Context
This is the first user-facing feature for the todo application. The landing page needs to convert visitors into users by clearly communicating value and providing smooth navigation to authentication. The design should be modern, responsive, and follow React 19 + Vite best practices.

## Goals / Non-Goals

### Goals
- Create conversion-focused landing page with clear value proposition
- Build reusable component library for future pages
- Implement client-side routing without full page reloads
- Ensure mobile-first responsive design
- Maintain fast load times (< 2s on 3G)

### Non-Goals
- Backend newsletter API integration (will use placeholder/future endpoint)
- User authentication implementation (only routing to auth pages)
- Analytics/tracking integration (can be added later)
- A/B testing framework (future enhancement)
- Multi-language support (English only for now)

## Decisions

### Routing: React Router DOM
**Decision**: Use React Router v6 for client-side routing

**Why**:
- Industry standard for React SPAs
- Declarative routing matches React paradigm
- Excellent documentation and community support
- Lightweight and tree-shakeable

**Alternatives considered**:
- TanStack Router: Too new, smaller ecosystem
- Wouter: Too minimal, lacks advanced features we may need
- Native state management: Complex to maintain for multi-page app

### Component Architecture: Composition Pattern
**Decision**: Build small, composable components with single responsibilities

**Structure**:
```
components/
├── ui/              # Reusable primitives
│   ├── Button.jsx
│   ├── Input.jsx
│   └── Section.jsx
├── landing/         # Landing-specific components
│   ├── Hero.jsx
│   ├── Features.jsx
│   ├── Newsletter.jsx
│   └── CTA.jsx
└── LandingPage.jsx  # Composition root
```

**Why**:
- Easy to test individual components
- Reusable primitives for auth pages
- Clear separation of concerns
- Follows React best practices

### Styling: Component-scoped CSS
**Decision**: Use CSS files co-located with components (e.g., `Button.jsx` + `Button.css`)

**Why**:
- Matches existing project convention (App.css, index.css)
- No additional dependencies or build config
- Simple to understand and maintain
- Good enough for landing page scope

**Alternatives considered**:
- CSS Modules: Requires Vite config changes
- Tailwind: Too large for current needs
- Styled-components: Adds runtime overhead
- Inline styles: Poor maintainability

### Newsletter Form: Controlled Component
**Decision**: Implement as controlled React component with placeholder submission

**Implementation**:
```jsx
const [email, setEmail] = useState('')
const handleSubmit = (e) => {
  e.preventDefault()
  console.log('Newsletter signup:', email)
  // TODO: Integrate with backend API
}
```

**Why**:
- Easy to add validation
- Ready for future API integration
- Standard React form pattern

## Layout Structure

### Hero Section
- Full-height viewport section
- Centered content with headline, subtitle, and primary CTA
- Background gradient or image
- Max-width container for readability

### Features Section
- 3-column grid (1-column on mobile)
- Icon + title + description per feature
- Highlights: Task organization, Deadlines, Collaboration

### Newsletter Section
- Centered layout with heading and email form
- Inline email input + subscribe button
- Success/error message display area

### CTA Section
- Centered content with strong call-to-action
- Button linking to signup page
- Alternative link to login

## Responsive Breakpoints
- Mobile: < 768px (single column, stacked layout)
- Tablet: 768px - 1024px (2-column features)
- Desktop: > 1024px (3-column features, wider containers)

## Risks / Trade-offs

### Risk: React Router Bundle Size
**Impact**: Adds ~10-15KB gzipped to bundle
**Mitigation**: Acceptable for SPA navigation benefits; use code splitting if bundle grows

### Risk: Newsletter Without Backend
**Impact**: Form submission goes nowhere initially
**Mitigation**: Add clear console logging and TODO comments for future integration

### Risk: Placeholder Auth Pages
**Impact**: Users can navigate to empty auth pages
**Mitigation**: Add "Coming Soon" UI on auth routes; implement in next change

### Trade-off: Simple CSS vs. CSS-in-JS
**Chosen**: Simple CSS files
**Trade-off**: Less dynamic styling, manual class management
**Justification**: Simpler mental model, no runtime cost, matches project conventions

## Migration Plan

### Phase 1: Initial Implementation
1. Install react-router-dom dependency
2. Create component structure
3. Build and style each section
4. Wire up routing

### Phase 2: Integration
1. Test navigation flows
2. Verify responsive behavior
3. Ensure accessibility standards

### Phase 3: Future Enhancements
- Connect newsletter to backend API
- Add animations and transitions
- Implement actual authentication pages
- Add analytics tracking

### Rollback Strategy
- All changes are additive (no breaking changes)
- Can revert to single App component by removing routes
- No database migrations or API changes

## Open Questions
- **Q**: What copy/content should go in the hero headline?
  - **A**: Can use placeholder like "Organize Your Life, One Task at a Time"

- **Q**: Should we add animations/transitions?
  - **A**: Start simple; add in polish phase if time permits

- **Q**: What features should be highlighted?
  - **A**: Task Management, Smart Reminders, Team Collaboration (placeholders for future features)
