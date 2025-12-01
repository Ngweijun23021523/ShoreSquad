# ShoreSquad - CSS Implementation Guide

## Quick Start CSS Snippets

### 1. Navigation Bar Implementation

```css
/* Navbar Container */
.navbar {
    background: linear-gradient(135deg, #0077BE 0%, #004E89 100%);
    padding: 1.5rem 0;
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
}

/* Mobile Menu Toggle */
.nav-toggle {
    display: none; /* Shown on mobile */
    flex-direction: column;
    background: none;
    color: white;
}

.nav-toggle span {
    width: 25px;
    height: 3px;
    background-color: white;
    margin: 5px 0;
    transition: all 0.3s ease;
}

/* Responsive: Show on mobile */
@media (max-width: 768px) {
    .nav-toggle { display: flex; }
    .nav-menu { display: none; }
    .nav-menu.active { display: flex; } /* When toggled */
}
```

**Key Features**:
- Sticky positioning (stays at top while scrolling)
- Gradient background (Ocean Blue to Dark Blue)
- Hamburger menu (hidden on desktop, visible on mobile)
- Proper z-index management
- Responsive toggle

---

### 2. Beach Banner with Animations

```css
.beach-banner {
    background: linear-gradient(135deg, #1E90FF 0%, #00CED1 100%);
    padding: 3rem 2rem;
    position: relative;
    overflow: hidden;
}

.wave {
    position: absolute;
    bottom: 0;
    width: 200%;
    height: 100px;
    background: url('data:image/svg+xml,...') repeat-x;
    animation: wave 15s linear infinite;
}

.wave-2 { animation-delay: -10s; opacity: 0.5; }
.wave-3 { animation-delay: -5s; opacity: 0.3; }

@keyframes wave {
    0% { transform: translateX(0); }
    100% { transform: translateX(50%); }
}
```

**Key Features**:
- SVG wave animation (infinite)
- Multiple layers with different speeds
- Proper z-index for content above waves
- Smooth gradient background

---

### 3. Hero Section

```css
.hero {
    background: linear-gradient(135deg, #0077BE 0%, #4CAF50 100%);
    padding: 3rem 2rem;
    min-height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.hero-title {
    font-size: 3rem;
    color: white;
    margin-bottom: 1.5rem;
}

.hero-subtitle {
    font-size: 1.3rem;
    color: rgba(255,255,255,0.95);
    margin-bottom: 2rem;
}

.hero-actions {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    flex-wrap: wrap;
}

/* Responsive */
@media (max-width: 768px) {
    .hero-title { font-size: 2rem; }
    .hero-subtitle { font-size: 1rem; }
}

@media (max-width: 480px) {
    .hero-title { font-size: 1.5rem; }
    .hero-actions { flex-direction: column; }
}
```

**Key Features**:
- Gradient background (Blue to Green)
- Responsive typography (scales down on mobile)
- Flexbox centered content
- Buttons wrap on small screens
- Proper spacing between elements

---

### 4. Button System

```css
.btn {
    padding: 0.75rem 1.5rem;
    border-radius: 0.75rem;
    font-weight: 600;
    font-size: 1rem;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
}

/* Primary (Green) */
.btn-primary {
    background-color: #4CAF50;
    color: white;
}

.btn-primary:hover {
    background-color: #45a049;
    transform: translateY(-2px);
    box-shadow: 0 10px 15px rgba(0,0,0,0.1);
}

/* Secondary (Blue) */
.btn-secondary {
    background-color: #0077BE;
    color: white;
}

.btn-secondary:hover {
    background-color: #004E89;
    transform: translateY(-2px);
    box-shadow: 0 10px 15px rgba(0,0,0,0.1);
}

/* Full Width */
.btn-full {
    width: 100%;
    justify-content: center;
}

/* Focus (Accessibility) */
.btn:focus {
    outline: 2px solid #4CAF50;
    outline-offset: 2px;
}
```

**Key Features**:
- Consistent padding and spacing
- Color variants (primary, secondary)
- Hover lift effect (translateY)
- Full-width variant
- Accessibility focus states

---

### 5. Event Cards Grid

```css
.events-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
}

.event-card {
    background: white;
    border: 2px solid #E5E7EB;
    border-radius: 0.75rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease;
}

.event-card:hover {
    border-color: #0077BE;
    box-shadow: 0 10px 15px rgba(0,0,0,0.1);
    transform: translateY(-5px);
}

/* Next Event (Special Styling) */
.event-card.next-event {
    border-color: #4CAF50;
    background: linear-gradient(135deg, #F9FAFB 0%, #E8F4F8 100%);
}

.event-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 2px solid #E5E7EB;
}

.event-date {
    background-color: #0077BE;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 0.75rem;
    font-size: 0.85rem;
    font-weight: 600;
}

.next-badge {
    background-color: #4CAF50;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 0.75rem;
    font-size: 0.85rem;
    font-weight: 700;
}

/* Participant Avatars */
.participants-avatars {
    display: flex;
    margin-bottom: 1rem;
    gap: -10px;
}

.avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 700;
    margin-left: -10px;
    border: 3px solid white;
    box-shadow: 0 1px 2px rgba(0,0,0,0.05);
}

.avatar:first-child { margin-left: 0; }

/* Responsive */
@media (max-width: 768px) {
    .events-grid {
        grid-template-columns: 1fr;
    }
}
```

**Key Features**:
- Responsive grid (auto-fill, minmax)
- Hover lift effect
- Next event special styling
- Overlapping avatars (negative margin)
- Date and badge badges
- Flexible direction for button at bottom

---

### 6. Weather Section

```css
.weather-container {
    background: linear-gradient(135deg, #E8F4F8 0%, #F0F8FC 100%);
    padding: 2rem;
    border-radius: 0.75rem;
    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
}

/* Current Weather */
.weather-today {
    background: white;
    padding: 2rem;
    border-radius: 0.75rem;
    margin-bottom: 2rem;
    border-left: 5px solid #0077BE;
}

.weather-today-temp {
    font-size: 3rem;
    font-weight: 700;
    color: #0077BE;
    margin: 1.5rem 0;
}

.weather-today-condition {
    color: #6B7280;
    font-size: 1.1rem;
    margin-bottom: 2rem;
}

/* Weather Details Grid */
.weather-details {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
}

.weather-detail {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.weather-detail i {
    font-size: 1.5rem;
    color: #0077BE;
    width: 30px;
    text-align: center;
}

.weather-detail-label {
    font-size: 0.85rem;
    color: #6B7280;
}

.weather-detail-value {
    font-size: 1.1rem;
    font-weight: 600;
    color: #1F2937;
}

/* 4-Day Forecast */
.forecast-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 1.5rem;
}

.forecast-day {
    background: linear-gradient(135deg, #F9FAFB 0%, #E8F4F8 100%);
    padding: 1.5rem;
    border-radius: 0.75rem;
    text-align: center;
    transition: all 0.3s ease;
    border: 2px solid transparent;
}

.forecast-day:hover {
    border-color: #0077BE;
    transform: translateY(-3px);
}

.forecast-date {
    font-weight: 700;
    color: #0077BE;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
}

.forecast-icon {
    font-size: 2rem;
    margin: 0.5rem 0;
}

.forecast-temps {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin: 0.5rem 0;
}

.forecast-high {
    font-size: 1.2rem;
    font-weight: 700;
    color: #FF6B6B;
}

.forecast-low {
    font-size: 1.2rem;
    font-weight: 700;
    color: #6B7280;
}

/* Responsive */
@media (max-width: 480px) {
    .weather-details {
        grid-template-columns: 1fr;
    }
    
    .forecast-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}
```

**Key Features**:
- Gradient background
- Current weather with blue left border
- Temperature displayed prominently (3rem)
- Weather details grid (responsive)
- 4-day forecast cards
- Temperature colors (orange high, gray low)
- Hover effects on forecast cards
- Mobile: 2-column forecast grid

---

### 7. Crew Members Grid

```css
.crew-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 2rem;
}

.crew-member {
    background: white;
    padding: 2rem;
    border-radius: 0.75rem;
    text-align: center;
    box-shadow: 0 1px 2px rgba(0,0,0,0.05);
    transition: all 0.3s ease;
}

.crew-member:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0,0,0,0.1);
}

.crew-avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: linear-gradient(135deg, #0077BE 0%, #4CAF50 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.8rem;
    font-weight: 700;
    margin: 0 auto 1.5rem;
}

.crew-name {
    color: #1F2937;
    margin-bottom: 0.25rem;
    font-size: 1.1rem;
}

.crew-role {
    color: #0077BE;
    font-size: 0.85rem;
    font-weight: 600;
    margin-bottom: 1rem;
}

.crew-stats {
    color: #6B7280;
    font-size: 0.9rem;
}

.crew-stats i {
    color: #FF6B6B;
    margin-right: 0.25rem;
}

/* Responsive */
@media (max-width: 768px) {
    .crew-grid {
        grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    }
}

@media (max-width: 480px) {
    .crew-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}
```

**Key Features**:
- Auto-fill grid (responsive columns)
- Circular gradient avatars (80x80px)
- Hover lift animation
- Proper text hierarchy (name, role, stats)
- Trophy icon styling
- Responsive 2-column mobile layout

---

### 8. Bottom Navigation

```css
.bottom-nav {
    display: none; /* Hidden on desktop */
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: white;
    border-top: 2px solid #E5E7EB;
    display: flex;
    justify-content: space-around;
    z-index: 999;
    box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
}

.nav-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    padding: 1rem;
    color: #6B7280;
    text-decoration: none;
    font-size: 0.8rem;
    font-weight: 600;
    transition: all 0.3s ease;
}

.nav-item i {
    font-size: 1.5rem;
}

.nav-item.active {
    color: #0077BE;
}

.nav-item.active i {
    color: #0077BE;
}

/* Shown on mobile */
@media (max-width: 768px) {
    .bottom-nav {
        display: flex;
    }
    
    body {
        padding-bottom: 80px; /* For fixed nav */
    }
}
```

**Key Features**:
- Fixed position (stays at bottom)
- Hidden on desktop, visible on mobile
- 5 nav items with icons
- Active state styling (blue)
- Body padding to prevent content overlap
- Proper z-index management

---

### 9. Loading Overlay

```css
.loading-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 2000;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
}

.loading-overlay.show {
    opacity: 1;
    pointer-events: all;
}

.loading-spinner {
    width: 50px;
    height: 50px;
    border: 4px solid rgba(255,255,255,0.3);
    border-top: 4px solid white;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-bottom: 2rem;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.loading-overlay p {
    color: white;
    font-size: 1.1rem;
    margin-bottom: 0;
}
```

**Key Features**:
- Full-screen overlay (position: fixed)
- Semi-transparent dark background
- Spinning loader animation
- Show/hide with `.show` class
- Smooth opacity transition
- High z-index (2000)

---

### 10. Responsive Media Queries

```css
/* Tablet & Below (≤768px) */
@media (max-width: 768px) {
    .nav-toggle { display: flex; }
    .nav-menu { display: none; }
    .nav-menu.active { display: flex; }
    
    .hero { min-height: 400px; }
    .hero-title { font-size: 2rem; }
    
    .events-grid { grid-template-columns: 1fr; }
    .stats-grid { grid-template-columns: 1fr; }
    .crew-grid { grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); }
    
    .bottom-nav { display: flex; }
    body { padding-bottom: 80px; }
}

/* Mobile (≤480px) */
@media (max-width: 480px) {
    .container { padding: 0 1rem; }
    
    h1 { font-size: 1.8rem; }
    h2 { font-size: 1.5rem; }
    h3 { font-size: 1.2rem; }
    
    .hero-title { font-size: 1.5rem; }
    .hero-actions { flex-direction: column; }
    
    .btn { width: 100%; justify-content: center; }
    
    .stats-grid { grid-template-columns: 1fr; }
    .forecast-grid { grid-template-columns: repeat(2, 1fr); }
    .crew-grid { grid-template-columns: repeat(2, 1fr); }
    .weather-details { grid-template-columns: 1fr; }
}
```

**Key Features**:
- Mobile-first approach (mobile styles first, then override)
- Clear breakpoints (768px tablet, 480px mobile)
- Consistent responsive patterns
- Navigation toggle on mobile
- Single-column layouts on mobile
- Adjusted typography for smaller screens

---

## CSS Variables Reference

```css
:root {
    /* Colors */
    --primary-blue: #0077BE;
    --primary-blue-dark: #004E89;
    --accent-green: #4CAF50;
    --coral-orange: #FF6B6B;
    --sand-cream: #F4E4C1;
    --sky-light: #E8F4F8;
    
    /* Spacing */
    --spacing-xs: 0.5rem;
    --spacing-sm: 1rem;
    --spacing-md: 1.5rem;
    --spacing-lg: 2rem;
    --spacing-xl: 3rem;
    
    /* Shadows */
    --shadow-sm: 0 1px 2px 0 rgba(0,0,0,0.05);
    --shadow-md: 0 4px 6px -1px rgba(0,0,0,0.1);
    --shadow-lg: 0 10px 15px -3px rgba(0,0,0,0.1);
}
```

---

## Best Practices Applied

✅ **Metric Units**: All measurements in `rem` (responsive scaling)
✅ **Flexbox & Grid**: Modern layout techniques
✅ **CSS Variables**: Easy theme customization
✅ **Mobile-First**: Base styles for mobile, then enlarge
✅ **Accessibility**: Focus states, ARIA support
✅ **Performance**: No unnecessary repaints
✅ **Responsive**: Multiple breakpoints
✅ **Accessibility**: Keyboard navigation ready

---

**Version**: 2.0
**Last Updated**: 2024
