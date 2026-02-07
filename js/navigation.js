/**
 * Navigation Router for Spot-Light
 * Centralizes navigation logic based on user roles
 */

const NavigationRouter = {
    /**
     * Role-specific dashboard routes
     */
    DASHBOARDS: {
        evaluator: 'dashboard.html',
        student: 'student-panel.html',
        admin: 'dashboard.html'
    },

    /**
     * Navigation flows for each role
     */
    ROUTES: {
        evaluator: {
            dashboard: 'dashboard.html',
            catalog: 'catalog.html',
            projectDetail: 'project-detail.html',
            evaluationPanel: 'evaluation-panel.html',
            aiProcessing: 'ai-processing.html',
            evaluationHistory: 'evaluation-history.html',
            evaluationHistoryFull: 'evaluation-history-full.html',
            resultsRanking: 'results-ranking.html',
            profileControl: 'profile-control.html',
            evaluatorProfile: 'evaluator-profile.html',
            evaluationManager: 'evaluation-manager.html'
        },
        student: {
            dashboard: 'student-panel.html',
            projectDetail: 'project-detail.html',
            projectResults: 'project-results.html',
            aiAnalysisHistory: 'ai-analysis-history.html',
            profileControl: 'profile-control.html'
        },
        admin: {
            dashboard: 'dashboard.html',
            userManagement: 'user-management.html',
            teamManagement: 'team-management.html',
            projectManager: 'project-manager.html',
            globalResults: 'global-results.html',
            systemConfig: 'system-config.html',
            academicControl: 'academic-control.html'
        }
    },

    /**
     * Get current user role from localStorage
     */
    getUserRole() {
        const userRole = localStorage.getItem('userRole');
        const user = AuthService?.getUser();
        return userRole || user?.role || null;
    },

    /**
     * Navigate to dashboard based on user role
     */
    goToDashboard() {
        const role = this.getUserRole();
        if (role && this.DASHBOARDS[role]) {
            window.location.href = this.DASHBOARDS[role];
        } else {
            window.location.href = 'role-selection.html';
        }
    },

    /**
     * Navigate to a specific route for the current user role
     * @param {string} routeName - Name of the route (e.g., 'catalog', 'projectDetail')
     */
    navigateTo(routeName) {
        const role = this.getUserRole();
        if (role && this.ROUTES[role] && this.ROUTES[role][routeName]) {
            window.location.href = this.ROUTES[role][routeName];
        } else {
            console.error(`Route ${routeName} not found for role ${role}`);
        }
    },

    /**
     * Check if user has access to a specific route
     * @param {string} routeName - Name of the route
     * @returns {boolean}
     */
    hasAccess(routeName) {
        const role = this.getUserRole();
        return role && this.ROUTES[role] && this.ROUTES[role][routeName] !== undefined;
    },

    /**
     * Get the correct dashboard URL for current user
     * @returns {string}
     */
    getDashboardUrl() {
        const role = this.getUserRole();
        return this.DASHBOARDS[role] || 'role-selection.html';
    },

    /**
     * Redirect to login if not authenticated
     */
    requireAuth() {
        if (!AuthService || !AuthService.isAuthenticated()) {
            window.location.href = 'login.html';
            return false;
        }
        return true;
    },

    /**
     * Redirect to role selection if no role is set
     */
    requireRole() {
        const role = this.getUserRole();
        if (!role) {
            window.location.href = 'role-selection.html';
            return false;
        }
        return true;
    },

    /**
     * Complete authentication check (login + role)
     */
    requireAuthAndRole() {
        return this.requireAuth() && this.requireRole();
    },

    /**
     * Initialize navigation for protected pages
     * Call this at the start of protected pages
     */
    init() {
        this.requireAuthAndRole();
    },

    /**
     * Get navigation items for sidebar based on role
     * @returns {Array} Array of navigation items
     */
    getSidebarNavigation() {
        const role = this.getUserRole();

        const navItems = {
            evaluator: [
                { name: 'Dashboard', icon: 'dashboard', url: 'dashboard.html', active: false },
                { name: 'Catálogo de Proyectos', icon: 'catalog', url: 'catalog.html', active: false },
                { name: 'Historial de Evaluaciones', icon: 'history', url: 'evaluation-history.html', active: false },
                { name: 'Resultados y Rankings', icon: 'ranking', url: 'results-ranking.html', active: false },
                { name: 'Perfil', icon: 'profile', url: 'profile-control.html', active: false }
            ],
            student: [
                { name: 'Inicio', icon: 'home', url: 'student-panel.html', active: false },
                { name: 'Mis Proyectos', icon: 'projects', url: 'student-panel.html#projects', active: false },
                { name: 'Resultados', icon: 'results', url: 'project-results.html', active: false },
                { name: 'Análisis IA', icon: 'ai', url: 'ai-analysis-history.html', active: false },
                { name: 'Configuración', icon: 'settings', url: 'profile-control.html', active: false }
            ],
            admin: [
                { name: 'Dashboard', icon: 'dashboard', url: 'dashboard.html', active: false },
                { name: 'Gestión de Usuarios', icon: 'users', url: 'user-management.html', active: false },
                { name: 'Gestión de Equipos', icon: 'teams', url: 'team-management.html', active: false },
                { name: 'Gestión de Proyectos', icon: 'projects', url: 'project-manager.html', active: false },
                { name: 'Resultados Globales', icon: 'results', url: 'global-results.html', active: false },
                { name: 'Control Académico', icon: 'academic', url: 'academic-control.html', active: false },
                { name: 'Configuración', icon: 'settings', url: 'system-config.html', active: false }
            ]
        };

        return navItems[role] || [];
    }
};

// Make available globally
if (typeof window !== 'undefined') {
    window.NavigationRouter = NavigationRouter;
}
