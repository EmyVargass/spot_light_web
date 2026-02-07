// Configuration management
const CONFIG = {
    // API Configuration (will be loaded from server)
    API_BASE_URL: 'http://localhost:5000/api',
    ENABLE_MOCK_DATA: false,

    // App Constants
    APP_NAME: 'Spot-Light',
    APP_VERSION: '1.0.0',

    // Theme Colors
    COLORS: {
        primary: '#137fec',
        primaryDark: '#0d5fb8',
        secondary: '#00d4ff',
        background: '#0f172a',
        backgroundLight: '#1e293b',
        backgroundCard: '#1e293b',
        text: '#ffffff',
        textSecondary: '#94a3b8',
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444'
    },

    // Pagination
    ITEMS_PER_PAGE: 10,

    // Session
    SESSION_KEY: 'spotlight_session',
    TOKEN_KEY: 'spotlight_token'
};

// Load configuration from server
async function loadConfig() {
    try {
        const response = await fetch('/api/config');
        if (response.ok) {
            const serverConfig = await response.json();
            CONFIG.API_BASE_URL = serverConfig.apiBaseUrl;
            CONFIG.ENABLE_MOCK_DATA = serverConfig.enableMockData;
        }
    } catch (error) {
        console.warn('Could not load server config, using defaults:', error);
    }
}

// Initialize config on page load
if (typeof window !== 'undefined') {
    loadConfig();
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
