/**
 * Sidebar Component
 * Renders the global sidebar with navigation and user profile
 */
const SidebarComponent = {
    /**
     * Get the current page name from URL
     * @returns {string} Current page name
     */
    getCurrentPage() {
        const path = window.location.pathname;
        const page = path.substring(path.lastIndexOf('/') + 1);
        return page || 'dashboard.html';
    },

    /**
     * Check if a link is active
     * @param {string} href - Link href to check
     * @returns {boolean} True if link is active
     */
    isActive(href) {
        const currentPage = this.getCurrentPage();
        return currentPage === href;
    },

    /**
     * Get CSS classes for navigation link
     * @param {string} href - Link href
     * @returns {string} CSS classes
     */
    getLinkClasses(href) {
        const baseClasses = 'flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition mb-2';
        const activeClasses = 'bg-blue-500/10 text-blue-400';
        const inactiveClasses = 'text-slate-400 hover:bg-slate-800 hover:text-white';

        return `${baseClasses} ${this.isActive(href) ? activeClasses : inactiveClasses}`;
    },

    /**
     * Get user information
     * @returns {Object} User info with name, role, and initial
     */
    getUserInfo() {
        const user = typeof AuthService !== 'undefined' ? AuthService.getCurrentUser() : null;

        if (user) {
            return {
                name: user.name || 'Usuario',
                role: user.role || 'Evaluador',
                initial: (user.name || 'U').charAt(0).toUpperCase()
            };
        }

        return {
            name: 'Admin',
            role: 'Evaluador',
            initial: 'A'
        };
    },

    /**
     * Render the sidebar component
     * @returns {string} HTML string for the sidebar
     */
    render() {
        const userInfo = this.getUserInfo();

        return `
            <aside class="w-64 bg-slate-950 border-r border-slate-800 flex flex-col fixed h-full">
                <!-- Logo -->
                <div class="p-6 border-b border-slate-800">
                    <div class="flex items-center gap-3">
                        <img src="images/logodos.png" alt="Spot-Light" class="h-12 w-auto">
                        <div>
                            <div class="font-bold text-lg">Spot-Light</div>
                            <div class="text-xs text-slate-500">Academic AI</div>
                        </div>
                    </div>
                </div>

                <!-- Navigation -->
                <nav class="flex-1 p-4 overflow-y-auto">
                    <a href="dashboard.html" class="${this.getLinkClasses('dashboard.html')}">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6">
                            </path>
                        </svg>
                        <span>Dashboard</span>
                    </a>
                    
                    <a href="catalog.html" class="${this.getLinkClasses('catalog.html')}">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10">
                            </path>
                        </svg>
                        <span>Catálogo de Proyectos</span>
                    </a>
                    
                    <a href="evaluation-history.html" class="${this.getLinkClasses('evaluation-history.html')}">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2">
                            </path>
                        </svg>
                        <span>Historial de Evaluaciones</span>
                    </a>
                    
                    <a href="results-ranking.html" class="${this.getLinkClasses('results-ranking.html')}">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z">
                            </path>
                        </svg>
                        <span>Resultados y Rankings</span>
                    </a>
                    
                    <a href="profile-control.html" class="${this.getLinkClasses('profile-control.html')}">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z">
                            </path>
                        </svg>
                        <span>Perfil</span>
                    </a>
                </nav>

                <!-- User Profile -->
                <div class="p-4 border-t border-slate-800">
                    <div class="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800 transition cursor-pointer">
                        <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center font-bold">
                            ${userInfo.initial}
                        </div>
                        <div class="flex-1">
                            <div class="font-medium text-sm">${userInfo.name}</div>
                            <div class="text-xs text-slate-500">${userInfo.role}</div>
                        </div>
                        <button onclick="AuthService.logout()" class="text-slate-400 hover:text-white" title="Cerrar sesión">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
            </aside>
        `;
    }
};
