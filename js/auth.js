// Authentication Service
const AuthService = {
    // Check if user is logged in
    isAuthenticated() {
        const session = localStorage.getItem(CONFIG.SESSION_KEY);
        return session !== null;
    },

    // Get current user
    getCurrentUser() {
        const session = localStorage.getItem(CONFIG.SESSION_KEY);
        return session ? JSON.parse(session) : null;
    },

    // Login
    async login(username, password) {
        try {
            // For now, simple authentication (you can connect to API later)
            if (username && password) {
                const user = {
                    id: '1',
                    username: username,
                    name: 'Administrador',
                    email: `${username}@spotlight.com`,
                    role: 'admin',
                    loginTime: new Date().toISOString()
                };

                localStorage.setItem(CONFIG.SESSION_KEY, JSON.stringify(user));
                return { success: true, user };
            }

            return { success: false, error: 'Credenciales inválidas' };
        } catch (error) {
            return { success: false, error: error.message };
        }
    },

    // Logout
    logout() {
        localStorage.removeItem(CONFIG.SESSION_KEY);
        localStorage.removeItem(CONFIG.TOKEN_KEY);
        window.location.href = '/login.html';
    },

    // Protect route (redirect to login if not authenticated)
    requireAuth() {
        if (!this.isAuthenticated()) {
            window.location.href = '/login.html';
            return false;
        }
        return true;
    }
};
