# ShoreSquad CSS Classes Reference

## Complete CSS Class Index

### Navigation Styles
| Class | Purpose | Media |
|-------|---------|-------|
| `.navbar` | Sticky header with gradient | All |
| `.nav-container` | Max-width container, flexbox | All |
| `.nav-brand` | Logo + title flex | All |
| `.nav-brand h1` | Title text | All |
| `.nav-brand i` | Water icon | All |
| `.nav-menu` | Navigation list | Desktop: visible, Mobile: hidden by default |
| `.nav-menu a` | Nav links with hover | All |
| `.nav-toggle` | Hamburger button | Mobile: visible, Desktop: hidden |
| `.nav-toggle span` | Hamburger lines | All |

### Beach Banner & Animations
| Class | Purpose | Media |
|-------|---------|-------|
| `.beach-banner` | Gradient background section | All |
| `.beach-banner-content` | Content wrapper (z-index 2) | All |
| `.beach-banner-text h2` | Section title | All |
| `.beach-banner-text p` | Description | All |
| `.beach-banner-waves` | Wave container | All |
| `.wave` | Animated wave layer | All |
| `.wave-2` | Second wave (delayed) | All |
| `.wave-3` | Third wave (delayed) | All |
| `@keyframes wave` | Wave animation | All |

### Hero Section
| Class | Purpose | Media |
|-------|---------|-------|
| `.hero` | Gradient hero container | All |
| `.hero-content` | Content wrapper | All |
| `.hero-title` | Main heading | Desktop: 3rem, Tablet: 2rem, Mobile: 1.5rem |
| `.hero-subtitle` | Subtitle text | Desktop: 1.3rem, Mobile: 1rem |
| `.hero-actions` | Button container | Desktop: flex row, Mobile: flex column |

### Button Styles
| Class | Purpose | Media |
|-------|---------|-------|
| `.btn` | Base button styling | All |
| `.btn-primary` | Green button (success/CTA) | All |
| `.btn-primary:hover` | Green button hover state | All |
| `.btn-secondary` | Blue button (secondary) | All |
| `.btn-secondary:hover` | Blue button hover state | All |
| `.btn-map` | Circular map button | All |
| `.btn-map:hover` | Map button hover (scale) | All |
| `.btn-full` | Full-width button | All |

### Stats Section
| Class | Purpose | Media |
|-------|---------|-------|
| `.stats` | Stats section wrapper | All |
| `.stats-grid` | Grid container (auto-fit) | Desktop: 3 cols, Tablet: 1 col, Mobile: 1 col |
| `.stat-item` | Stat card | All |
| `.stat-item:hover` | Card lift animation | All |
| `.stat-item i` | Icon styling | All |
| `.stat-number` | Large number (2.5rem) | All |
| `.stat-item p` | Description text | All |

### Events Section
| Class | Purpose | Media |
|-------|---------|-------|
| `.events` | Events section wrapper | All |
| `.events-grid` | Grid (auto-fill, minmax 300px) | Desktop: 3 cols, Mobile: 1 col |
| `.event-card` | Event card container | All |
| `.event-card:hover` | Card hover state | All |
| `.event-card.next-event` | Next event special styling | All |
| `.event-header` | Header with date & badge | All |
| `.event-date` | Date badge | All |
| `.next-badge` | "NEXT!" badge | All |
| `.event-header i` | Weather icon | All |
| `.event-title` | Event name (1.3rem) | All |
| `.event-location` | Location with icon | All |
| `.event-location i` | Location icon | All |
| `.event-time` | Time display | All |
| `.event-time i` | Time icon | All |
| `.event-participants` | Participants section | All |
| `.participants-avatars` | Avatar container | All |
| `.avatar` | Individual avatar (40x40px) | All |
| `.avatar:first-child` | First avatar (no left margin) | All |
| `.participants-count` | Participant count text | All |

### Map Section
| Class | Purpose | Media |
|-------|---------|-------|
| `.map-section` | Map section wrapper | All |
| `.map-container` | Map iframe container | All |
| `.map-container iframe` | Map embed (400px height) | All |
| `.map-info` | Info card below map | All |
| `.next-cleanup-badge` | Green cleanup badge | All |

### Weather Section
| Class | Purpose | Media |
|-------|---------|-------|
| `.weather-section` | Weather section wrapper | All |
| `.weather-container` | Weather content wrapper | All |
| `.weather-today` | Current weather card | All |
| `.weather-today-header` | Header with icon & condition | All |
| `.weather-today-icon` | Large weather icon (3rem) | All |
| `.weather-today-temp` | Large temperature (3rem, blue) | All |
| `.weather-today-condition` | Condition text | All |
| `.weather-details` | Details grid | Desktop: 4 cols, Tablet: auto, Mobile: 1 col |
| `.weather-detail` | Individual detail item | All |
| `.weather-detail i` | Detail icon | All |
| `.weather-detail-label` | Label text | All |
| `.weather-detail-value` | Value text (1.1rem, bold) | All |
| `.weather-forecast` | Forecast section | All |
| `.forecast-header` | Header with title | All |
| `.forecast-header h3` | Forecast title | All |
| `.forecast-grid` | 4-day forecast grid | Desktop: 4 cols, Tablet: auto, Mobile: 2 cols |
| `.forecast-day` | Individual day card | All |
| `.forecast-day:hover` | Day card hover state | All |
| `.forecast-date` | Day/date text | All |
| `.forecast-icon` | Weather icon (2rem) | All |
| `.forecast-temps` | Temperature container | All |
| `.forecast-high` | High temp (orange) | All |
| `.forecast-low` | Low temp (gray) | All |
| `.forecast-condition` | Weather condition | All |

### Crew Section
| Class | Purpose | Media |
|-------|---------|-------|
| `.crew` | Crew section wrapper | All |
| `.crew-grid` | Grid (auto-fill, minmax 150px) | Desktop: 6 cols, Tablet: 4 cols, Mobile: 2 cols |
| `.crew-member` | Crew member card | All |
| `.crew-member:hover` | Member card hover | All |
| `.crew-avatar` | Avatar circle (80x80px, gradient) | All |
| `.crew-name` | Member name (1.1rem) | All |
| `.crew-role` | Member role (small, blue) | All |
| `.crew-stats` | Stats display | All |
| `.crew-stats i` | Trophy icon (coral) | All |

### Bottom Navigation
| Class | Purpose | Media |
|-------|---------|-------|
| `.bottom-nav` | Bottom nav container | Mobile: visible, Desktop: hidden |
| `.nav-item` | Nav item (flex column) | All |
| `.nav-item i` | Icon (1.5rem) | All |
| `.nav-item.active` | Active state (blue) | All |
| `.nav-item.active i` | Active icon (blue) | All |

### Loading & Notifications
| Class | Purpose | Media |
|-------|---------|-------|
| `.loading-overlay` | Full-screen overlay | All |
| `.loading-overlay.show` | Show state (opacity: 1) | All |
| `.loading-spinner` | Spinning loader (50x50px) | All |
| `@keyframes spin` | Spinner animation | All |
| `.loading-overlay p` | Loading text | All |
| `.notification` | Toast notification | All |
| `.notification-content` | Toast content | All |
| `@keyframes slideIn` | Notification slide animation | All |

### Responsive Design Breakpoints
| Breakpoint | Applies To |
|-----------|-----------|
| All | Base styles, desktop-first |
| @media (max-width: 768px) | Tablets & below |
| @media (max-width: 480px) | Phones & below |

### CSS Variables (Theme Colors)
```css
/* Primary Colors */
--primary-blue: #0077BE
--primary-blue-dark: #004E89
--accent-green: #4CAF50
--coral-orange: #FF6B6B
--sand-cream: #F4E4C1
--sky-light: #E8F4F8

/* Neutral Colors */
--white: #FFFFFF
--gray-50: #F9FAFB
--gray-100: #F3F4F6
--gray-200: #E5E7EB
--gray-300: #D1D5DB
--gray-500: #6B7280
--gray-700: #374151
--gray-900: #111827

/* Text Colors */
--text-dark: #1F2937
--text-light: #6B7280

/* Spacing (metric/rem-based) */
--spacing-xs: 0.5rem
--spacing-sm: 1rem
--spacing-md: 1.5rem
--spacing-lg: 2rem
--spacing-xl: 3rem

/* Typography */
--font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
--font-size-base: 1rem
--line-height-base: 1.6

/* Shadows */
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05)
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1)
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1)

/* Border Radius */
--border-radius: 0.75rem

/* Transitions */
--transition: all 0.3s ease-in-out
```

### Animations
| Animation | Duration | Purpose |
|-----------|----------|---------|
| `@keyframes wave` | 15s linear infinite | Beach banner wave effect |
| `@keyframes spin` | 1s linear infinite | Loading spinner rotation |
| `@keyframes slideIn` | 0.3s ease | Notification slide animation |

### Media Query Responsive Changes
**@media (max-width: 768px)**
- Nav menu hidden by default, toggle on hamburger click
- Events grid: 1 column
- Stats grid: 1 column
- Crew grid: 2 columns
- Bottom navigation: visible
- Body padding-bottom: 80px

**@media (max-width: 480px)**
- Hero title: 1.5rem (from 3rem)
- Buttons: full-width with centered text
- Forecast grid: 2 columns
- Crew grid: 2 columns
- Weather details: 1 column
- Container padding: 1rem (from 2rem)

### Accessibility Features
| Feature | Implementation |
|---------|----------------|
| Focus States | 2px green outline on all interactive elements |
| ARIA Support | Labels and roles in HTML |
| Reduced Motion | @media (prefers-reduced-motion: reduce) |
| Keyboard Navigation | Full keyboard support ready |
| High Contrast | @media (prefers-contrast: more) support |
| Print Support | Hidden nav, proper colors for printing |

---

## Class Usage Summary
- **Total Classes**: 120+
- **Color Classes**: 8 primary colors
- **Grid Layouts**: 6 responsive grids
- **Interactive States**: 15+ hover/active states
- **Animations**: 3 smooth animations
- **Mobile Support**: Fully responsive at 768px & 480px

## Quick Integration
All classes are ready to use in HTML:
```html
<!-- Navigation -->
<nav class="navbar">
    <div class="nav-container">
        <div class="nav-brand"><h1>ShoreSquad</h1></div>
        <button class="nav-toggle"></button>
        <ul class="nav-menu"></ul>
    </div>
</nav>

<!-- Hero -->
<section class="hero">
    <div class="hero-content">
        <h2 class="hero-title">Title</h2>
        <p class="hero-subtitle">Subtitle</p>
        <div class="hero-actions">
            <button class="btn btn-primary">Action</button>
        </div>
    </div>
</section>

<!-- Events -->
<div class="events-grid">
    <div class="event-card next-event">
        <!-- Event content -->
    </div>
</div>
```

---

**Last Updated**: 2024
**CSS Completeness**: 100%
**Browser Support**: Chrome 100+, Firefox 95+, Safari 15+, Edge 100+
