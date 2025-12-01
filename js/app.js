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

        console.log('🗺️  Map initialized with Google Maps embed');
        
        // Google Maps iframe is already embedded in HTML
        this.initialized = true;
        appState.mapInitialized = true;
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
// Weather Module - NEA API Integration
// ============================================

class WeatherModule {
    constructor() {
        this.weatherContainer = safeQuery('#weather-container');
        this.loaded = false;
        this.baseURL = 'https://api.data.gov.sg/v1/environment';
    }

    init() {
        if (!this.weatherContainer || this.loaded) return;

        console.log('🌤️  Initializing weather module with NEA API...');
        this.fetchNEAWeather();
        this.loaded = true;
        appState.weatherLoaded = true;
    }

    /**
     * Fetch 4-day forecast from NEA API
     */
    async fetchNEAWeather() {
        try {
            // Fetch 4-day forecast
            const forecastResponse = await fetch(
                `${this.baseURL}/4-day-weather-forecast`,
                { 
                    signal: AbortSignal.timeout(8000),
                    headers: {
                        'Accept': 'application/json'
                    }
                }
            );
            
            if (!forecastResponse.ok) {
                console.warn('NEA forecast API responded with status:', forecastResponse.status);
                throw new Error('NEA forecast API failed');
            }

            const forecastData = await forecastResponse.json();
            console.log('NEA Forecast Data:', forecastData);
            
            if (forecastData.items && forecastData.items.length > 0) {
                this.displayWeather(forecastData);
            } else {
                throw new Error('No forecast data received');
            }
        } catch (error) {
            console.error('Weather fetch error:', error);
            this.displayPlaceholderWeather();
        }
    }

    /**
     * Display formatted 4-day weather forecast
     */
    displayWeather(forecastData) {
        let forecastHTML = '<div class="weather-forecast">';

        // Display 4-day forecast
        if (forecastData.items && forecastData.items.length > 0) {
            const forecasts = forecastData.items[0].forecasts || [];
            
            forecasts.forEach((forecast, index) => {
                if (index < 4) { // Show only 4 days
                    const date = new Date(forecast.date);
                    const dayName = date.toLocaleDateString('en-SG', { weekday: 'short' });
                    const dateStr = date.toLocaleDateString('en-SG');
                    
                    forecastHTML += `
                        <div class="weather-card">
                            <div class="weather-day">${dayName}</div>
                            <div class="weather-date">${dateStr}</div>
                            <div class="weather-condition">${this.formatCondition(forecast.forecast)}</div>
                            <div class="weather-temp">
                                <span class="temp-high">${forecast.temperature.high}°C</span>
                                <span class="temp-low">${forecast.temperature.low}°C</span>
                            </div>
                            <div class="weather-details">
                                <p class="humidity">💧 ${forecast.relative_humidity.high}% humidity</p>
                                <p class="wind">💨 Wind: ${forecast.wind.speed.high} km/h</p>
                            </div>
                        </div>
                    `;
                }
            });

            // Add header with data source
            forecastHTML = `
                <div class="weather-header">
                    <h3>4-Day Weather Forecast - Singapore</h3>
                    <p class="data-source">Data: National Environment Agency (NEA)</p>
                </div>
            ` + forecastHTML;
        }

        forecastHTML += '</div>';
        this.weatherContainer.innerHTML = forecastHTML;
    }

    /**
     * Format weather condition text
     */
    formatCondition(condition) {
        const conditionMap = {
            'Thundery Showers': '⛈️ Thundery Showers',
            'Showers': '🌧️ Showers',
            'Cloudy': '☁️ Cloudy',
            'Partly Cloudy': '⛅ Partly Cloudy',
            'Fair': '☀️ Fair',
            'Sunny': '☀️ Sunny',
            'Rainy': '🌧️ Rainy',
            'Windy': '💨 Windy'
        };
        return conditionMap[condition] || `${condition}`;
    }

    /**
     * Display placeholder weather when API fails
     */
    displayPlaceholderWeather() {
        const weatherHTML = `
            <div class="weather-forecast">
                <div class="weather-header">
                    <h3>4-Day Weather Forecast - Singapore</h3>
                    <p class="data-source">Data: National Environment Agency (NEA)</p>
                </div>
                <div class="weather-card">
                    <div class="weather-day">Mon</div>
                    <div class="weather-date">01 Dec 2025</div>
                    <div class="weather-condition">☀️ Fair</div>
                    <div class="weather-temp">
                        <span class="temp-high">28°C</span>
                        <span class="temp-low">24°C</span>
                    </div>
                    <div class="weather-details">
                        <p class="humidity">💧 70% humidity</p>
                        <p class="wind">💨 Wind: 12 km/h</p>
                    </div>
                </div>
                <div class="weather-card">
                    <div class="weather-day">Tue</div>
                    <div class="weather-date">02 Dec 2025</div>
                    <div class="weather-condition">⛅ Partly Cloudy</div>
                    <div class="weather-temp">
                        <span class="temp-high">29°C</span>
                        <span class="temp-low">24°C</span>
                    </div>
                    <div class="weather-details">
                        <p class="humidity">💧 75% humidity</p>
                        <p class="wind">💨 Wind: 10 km/h</p>
                    </div>
                </div>
                <div class="weather-card">
                    <div class="weather-day">Wed</div>
                    <div class="weather-date">03 Dec 2025</div>
                    <div class="weather-condition">🌧️ Showers</div>
                    <div class="weather-temp">
                        <span class="temp-high">26°C</span>
                        <span class="temp-low">23°C</span>
                    </div>
                    <div class="weather-details">
                        <p class="humidity">💧 85% humidity</p>
                        <p class="wind">💨 Wind: 15 km/h</p>
                    </div>
                </div>
                <div class="weather-card">
                    <div class="weather-day">Thu</div>
                    <div class="weather-date">04 Dec 2025</div>
                    <div class="weather-condition">⛅ Partly Cloudy</div>
                    <div class="weather-temp">
                        <span class="temp-high">28°C</span>
                        <span class="temp-low">23°C</span>
                    </div>
                    <div class="weather-details">
                        <p class="humidity">💧 72% humidity</p>
                        <p class="wind">💨 Wind: 11 km/h</p>
                    </div>
                </div>
                <p style="grid-column: 1 / -1; text-align: center; color: var(--text-light); margin-top: var(--spacing-md);">
                    <small>Unable to load real-time data. Showing example forecast.</small>
                </p>
            </div>
        `;
        this.weatherContainer.innerHTML = weatherHTML;
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
            top: 1.25rem;
            right: 1.25rem;
            padding: 0.9375rem 1.25rem;
            background-color: ${type === 'success' ? '#2ECC71' : '#0066CC'};
            color: white;
            border-radius: 0.5rem;
            box-shadow: 0 0.25rem 0.75rem rgba(0,0,0,0.15);
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
                top: -2.5rem;
                left: 0;
                background: #000;
                color: white;
                padding: 0.5rem;
                text-decoration: none;
                z-index: 100;
            `;
            skipLink.addEventListener('focus', () => {
                skipLink.style.top = '0';
            });
            skipLink.addEventListener('blur', () => {
                skipLink.style.top = '-2.5rem';
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
