/**
 * ShoreSquad - Interactive App
 * 
 * Core Features:
 * - Interactive map initialization
 * - Weather data integration (placeholder)
 * - Event management
 * - User interactions with event delegation
 * - Performance optimizations (lazy loading, debouncing)
 * - Accessibility enhancements
 */

// ============================================
// Utility Functions - Performance Optimized
// ============================================

/**
 * Debounce function to limit function calls
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

/**
 * Throttle function to limit function execution
 * @param {Function} func - Function to throttle
 * @param {number} limit - Execution limit in milliseconds
 * @returns {Function} Throttled function
 */
const throttle = (func, limit) => {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
};

/**
 * Safe DOM query selector with error handling
 * @param {string} selector - CSS selector
 * @returns {Element|null} DOM element or null
 */
const safeQuery = (selector) => {
    try {
        return document.querySelector(selector);
    } catch (error) {
        console.error(`Query selector error: ${selector}`, error);
        return null;
    }
};

/**
 * Safe DOM query all with error handling
 * @param {string} selector - CSS selector
 * @returns {NodeList} DOM elements
 */
const safeQueryAll = (selector) => {
    try {
        return document.querySelectorAll(selector);
    } catch (error) {
        console.error(`QueryAll selector error: ${selector}`, error);
        return [];
    }
};

// ============================================
// App State Management
// ============================================

const appState = {
    events: [
        { id: 1, title: 'Bondi Beach Cleanup', date: 'Saturday, Dec 7, 9:00 AM', location: 'Bondi Beach', crew: 24 },
        { id: 2, title: 'Manly Beach Drive', date: 'Sunday, Dec 8, 10:00 AM', location: 'Manly Beach', crew: 18 },
        { id: 3, title: 'Coogee Coastal Cleanup', date: 'Saturday, Dec 14, 8:00 AM', location: 'Coogee Beach', crew: 32 },
    ],
    userJoinedEvents: new Set(),
    mapInitialized: false,
    weatherLoaded: false,
};

// ============================================
// Navigation - Mobile Menu Toggle
// ============================================

class MobileNavigation {
    constructor() {
        this.hamburger = safeQuery('#hamburger');
        this.navLinks = safeQuery('.nav-links');
        this.init();
    }

    init() {
        if (this.hamburger) {
            this.hamburger.addEventListener('click', () => this.toggleMenu());
        }

        // Close menu when a link is clicked
        if (this.navLinks) {
            this.navLinks.addEventListener('click', (e) => {
                if (e.target.tagName === 'A') {
                    this.closeMenu();
                }
            });
        }
    }

    toggleMenu() {
        if (this.navLinks) {
            this.navLinks.classList.toggle('active');
            const isOpen = this.navLinks.classList.contains('active');
            this.hamburger.setAttribute('aria-expanded', isOpen);
        }
    }

    closeMenu() {
        if (this.navLinks && this.hamburger) {
            this.navLinks.classList.remove('active');
            this.hamburger.setAttribute('aria-expanded', 'false');
        }
    }
}

// ============================================
// Map Module - Placeholder for Interactive Map
// ============================================

class MapModule {
    constructor() {
        this.mapContainer = safeQuery('#map-container');
        this.initialized = false;
    }

    init() {
        if (!this.mapContainer || this.initialized) return;

        console.log('🗺️  Initializing interactive map...');
        
        // Placeholder for Leaflet.js or Google Maps API integration
        this.createPlaceholderMap();
        this.initialized = true;
        appState.mapInitialized = true;
    }

    createPlaceholderMap() {
        this.mapContainer.innerHTML = `
            <div style="
                width: 100%;
                height: 400px;
                background: linear-gradient(135deg, #e8f4f8 0%, #b3e5fc 100%);
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1.1rem;
                color: #0066CC;
                border-radius: 8px;
            ">
                🗺️ Interactive Map Coming Soon
                <br>
                <small style="margin-top: 10px; color: #0099CC;">Integrate Leaflet.js or Google Maps API</small>
            </div>
        `;
    }

    /**
     * Example method to add event markers to map
     * @param {Array} events - Events to display
     */
    addEventMarkers(events) {
        console.log('Adding event markers:', events);
        // Future implementation with map library
    }
}

// ============================================
// Weather Module - API Integration Placeholder
// ============================================

class WeatherModule {
    constructor() {
        this.weatherContainer = safeQuery('#weather-container');
        this.loaded = false;
        this.baseURL = 'https://api.open-meteo.com/v1/forecast';
    }

    init() {
        if (!this.weatherContainer || this.loaded) return;

        console.log('🌤️  Initializing weather module...');
        this.loadPlaceholderWeather();
        this.loaded = true;
        appState.weatherLoaded = true;
    }

    /**
     * Placeholder weather display
     */
    loadPlaceholderWeather() {
        const weatherHTML = `
            <div class="weather-card" style="padding: 20px; background: white; border-radius: 8px; text-align: center;">
                <h3>Sydney, NSW</h3>
                <p style="font-size: 2em; margin: 10px 0;">☀️ 24°C</p>
                <p><strong>Conditions:</strong> Sunny</p>
                <p><strong>Wind:</strong> 15 km/h</p>
                <p><strong>Humidity:</strong> 65%</p>
                <small style="color: #999;">Example weather data - integrate real API</small>
            </div>
        `;
        this.weatherContainer.innerHTML = weatherHTML;
    }

    /**
     * Fetch real weather data from Open-Meteo API
     * @param {number} latitude - Latitude
     * @param {number} longitude - Longitude
     * @returns {Promise<Object>} Weather data
     */
    async fetchWeather(latitude, longitude) {
        try {
            const response = await fetch(
                `${this.baseURL}?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code&timezone=auto`,
                { signal: AbortSignal.timeout(5000) } // 5s timeout
            );
            
            if (!response.ok) throw new Error('Weather API failed');
            return await response.json();
        } catch (error) {
            console.error('Weather fetch error:', error);
            return null;
        }
    }
}

// ============================================
// Events Module - Crew Management
// ============================================

class EventsModule {
    constructor() {
        this.eventsContainer = safeQuery('#events-container');
        this.setupEventDelegation();
    }

    setupEventDelegation() {
        // Use event delegation for better performance
        if (this.eventsContainer) {
            this.eventsContainer.addEventListener('click', (e) => {
                if (e.target.classList.contains('event-button')) {
                    const eventCard = e.target.closest('.event-card');
                    if (eventCard) {
                        const title = eventCard.querySelector('h3').textContent;
                        this.handleJoinEvent(title, e.target);
                    }
                }
            });
        }
    }

    handleJoinEvent(eventTitle, button) {
        const isJoined = appState.userJoinedEvents.has(eventTitle);

        if (isJoined) {
            appState.userJoinedEvents.delete(eventTitle);
            button.textContent = 'Join Crew';
            button.style.backgroundColor = '#2ECC71';
            this.showNotification(`Left ${eventTitle}`, 'info');
        } else {
            appState.userJoinedEvents.add(eventTitle);
            button.textContent = '✓ Crew Member';
            button.style.backgroundColor = '#27AE60';
            this.showNotification(`Joined ${eventTitle}! 🎉`, 'success');
        }

        // Announce to screen readers
        const message = isJoined ? `Left ${eventTitle}` : `Joined ${eventTitle}`;
        this.announceToScreenReaders(message);
    }

    /**
     * Show temporary notification to user
     * @param {string} message - Message text
     * @param {string} type - Notification type (success, info, error)
     */
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            background-color: ${type === 'success' ? '#2ECC71' : '#0066CC'};
            color: white;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 9999;
            animation: slideIn 0.3s ease-in-out;
        `;
        notification.textContent = message;
        document.body.appendChild(notification);

        // Auto-remove after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease-in-out';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    /**
     * Announce messages to screen readers
     * @param {string} message - Message to announce
     */
    announceToScreenReaders(message) {
        const announcement = document.createElement('div');
        announcement.setAttribute('role', 'status');
        announcement.setAttribute('aria-live', 'polite');
        announcement.className = 'sr-only';
        announcement.textContent = message;
        document.body.appendChild(announcement);
        setTimeout(() => announcement.remove(), 1000);
    }

    /**
     * Get joined events count
     * @returns {number} Number of joined events
     */
    getJoinedCount() {
        return appState.userJoinedEvents.size;
    }
}

// ============================================
// Hero Section - CTA Button Handler
// ============================================

class HeroModule {
    constructor() {
        this.ctaButton = safeQuery('#cta-button');
        this.init();
    }

    init() {
        if (this.ctaButton) {
            this.ctaButton.addEventListener('click', () => this.handleCTA());
        }
    }

    handleCTA() {
        const mapSection = safeQuery('#map');
        if (mapSection) {
            mapSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
}

// ============================================
// Main App Initialization
// ============================================

class ShoreSquadApp {
    constructor() {
        this.mobileNav = null;
        this.mapModule = null;
        this.weatherModule = null;
        this.eventsModule = null;
        this.heroModule = null;
    }

    /**
     * Initialize all app modules
     */
    init() {
        console.log('🏖️  ShoreSquad App Initializing...');

        // Initialize modules
        this.mobileNav = new MobileNavigation();
        this.mapModule = new MapModule();
        this.weatherModule = new WeatherModule();
        this.eventsModule = new EventsModule();
        this.heroModule = new HeroModule();

        // Load content when DOM is ready
        this.mapModule.init();
        this.weatherModule.init();

        // Setup global event listeners
        this.setupScrollBehavior();
        this.setupAccessibilityEnhancements();

        console.log('✅ ShoreSquad App Ready!');
    }

    /**
     * Enhance scroll behavior and animations
     */
    setupScrollBehavior() {
        // Observe elements for animations on scroll
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, { threshold: 0.1 });

            // Observe all sections
            safeQueryAll('section').forEach(section => {
                section.style.opacity = '0';
                section.style.transform = 'translateY(20px)';
                section.style.transition = 'opacity 0.6s ease-in-out, transform 0.6s ease-in-out';
                observer.observe(section);
            });
        }
    }

    /**
     * Enhance keyboard navigation and screen reader support
     */
    setupAccessibilityEnhancements() {
        // Add skip-to-content link
        const mainContent = safeQuery('#main-content');
        if (mainContent && !safeQuery('.skip-link')) {
            const skipLink = document.createElement('a');
            skipLink.href = '#main-content';
            skipLink.className = 'skip-link';
            skipLink.textContent = 'Skip to main content';
            skipLink.style.cssText = `
                position: absolute;
                top: -40px;
                left: 0;
                background: #000;
                color: white;
                padding: 8px;
                text-decoration: none;
                z-index: 100;
            `;
            skipLink.addEventListener('focus', () => {
                skipLink.style.top = '0';
            });
            skipLink.addEventListener('blur', () => {
                skipLink.style.top = '-40px';
            });
            document.body.prepend(skipLink);
        }
    }

    /**
     * Log app state for debugging
     */
    logState() {
        console.log('📊 ShoreSquad App State:', appState);
        console.log('👥 Joined Events:', appState.userJoinedEvents.size);
    }
}

// ============================================
// App Launch
// ============================================

// Initialize app when DOM is fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        const app = new ShoreSquadApp();
        app.init();
        window.shoreSquadApp = app; // Expose for debugging
    });
} else {
    // DOM already loaded
    const app = new ShoreSquadApp();
    app.init();
    window.shoreSquadApp = app;
}

// Performance monitoring
if (window.performance && window.performance.timing) {
    window.addEventListener('load', () => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`⏱️  Page Load Time: ${pageLoadTime}ms`);
    });
}
