/**
 * Layout Manager
 * Manages the global layout structure for all pages
 */
const LayoutManager = {
    /**
     * Page configuration with titles and subtitles
     */
    pageConfig: {
        'dashboard.html': {
            title: 'Panel Principal',
            subtitle: 'Bienvenido de nuevo, Admin'
        },
        'catalog.html': {
            title: 'Catálogo de Proyectos',
            subtitle: 'Explora y gestiona todos los proyectos académicos'
        },
        'evaluation-history.html': {
            title: 'Historial de Evaluaciones',
            subtitle: 'Consulta el registro de evaluaciones realizadas'
        },
        'evaluation-history-full.html': {
            title: 'Historial de Evaluaciones',
            subtitle: 'Consulta y administra el registro detallado de todas las evaluaciones académicas realizadas'
        },
        'results-ranking.html': {
            title: 'Resultados y Ranking',
            subtitle: 'Visualiza los mejores proyectos evaluados'
        },
        'analytics.html': {
            title: 'Analytics Avanzados',
            subtitle: 'Análisis detallado de datos y tendencias'
        },
        'projects.html': {
            title: 'Proyectos',
            subtitle: 'Gestiona todos los proyectos académicos'
        },
        'evaluations.html': {
            title: 'Evaluaciones',
            subtitle: 'Sistema de evaluación de proyectos'
        },
        'rankings.html': {
            title: 'Rankings',
            subtitle: 'Clasificación de proyectos'
        },
        'teams.html': {
            title: 'Equipos',
            subtitle: 'Gestión de equipos de trabajo'
        },
        'profile-control.html': {
            title: 'Perfil',
            subtitle: 'Configuración de tu cuenta'
        },
        'evaluation-manager.html': {
            title: 'Gestor de Evaluaciones',
            subtitle: 'Administra y crea nuevas evaluaciones'
        },
        'evaluation-panel.html': {
            title: 'Panel de Evaluación',
            subtitle: 'Evalúa proyectos académicos'
        },
        'evaluator-profile.html': {
            title: 'Perfil de Evaluador',
            subtitle: 'Información y estadísticas del evaluador'
        },
        'project-detail.html': {
            title: 'Detalle del Proyecto',
            subtitle: 'Información completa del proyecto'
        },
        'project-manager.html': {
            title: 'Gestor de Proyectos',
            subtitle: 'Administra proyectos académicos'
        },
        'project-results.html': {
            title: 'Resultados del Proyecto',
            subtitle: 'Análisis de resultados y evaluaciones'
        },
        'user-management.html': {
            title: 'Gestión de Usuarios',
            subtitle: 'Administra usuarios del sistema'
        },
        'team-management.html': {
            title: 'Gestión de Equipos',
            subtitle: 'Administra equipos y miembros'
        },
        'academic-control.html': {
            title: 'Control Académico',
            subtitle: 'Panel de control académico'
        },
        'system-config.html': {
            title: 'Configuración del Sistema',
            subtitle: 'Ajustes generales del sistema'
        },
        'student-panel.html': {
            title: 'Panel de Estudiante',
            subtitle: 'Vista de estudiante'
        },
        'global-results.html': {
            title: 'Resultados Globales',
            subtitle: 'Estadísticas generales del sistema'
        },
        'ai-analysis-history.html': {
            title: 'Historial de Análisis IA',
            subtitle: 'Registro de análisis realizados por IA'
        },
        'ai-processing.html': {
            title: 'Procesamiento IA',
            subtitle: 'Análisis automático de proyectos'
        }
    },

    /**
     * Get current page configuration
     * @returns {Object} Page config with title and subtitle
     */
    getCurrentPageConfig() {
        const path = window.location.pathname;
        const page = path.substring(path.lastIndexOf('/') + 1);
        return this.pageConfig[page] || { title: 'Spot-Light', subtitle: '' };
    },

    /**
     * Initialize the layout
     */
    init() {
        // Get the app container
        const appContainer = document.getElementById('app');
        if (!appContainer) {
            console.error('App container not found. Make sure there is a <div id="app"></div> in your HTML.');
            return;
        }

        // Get page configuration
        const pageConfig = this.getCurrentPageConfig();

        // Get page content from template
        const pageContentTemplate = document.getElementById('page-content');
        const pageContent = pageContentTemplate ? pageContentTemplate.innerHTML : '<div class="p-8"><p>No content template found.</p></div>';

        // Build the complete layout
        const layout = `
            <div class="flex min-h-screen">
                ${SidebarComponent.render()}
                
                <main class="flex-1 ml-64 flex flex-col">
                    ${HeaderComponent.render(pageConfig.title, pageConfig.subtitle)}
                    
                    <div class="flex-1 overflow-auto">
                        ${pageContent}
                    </div>
                    
                    ${FooterComponent.render()}
                </main>
            </div>
        `;

        // Inject the layout
        appContainer.innerHTML = layout;

        // Remove the template from DOM
        if (pageContentTemplate) {
            pageContentTemplate.remove();
        }
    }
};

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => LayoutManager.init());
} else {
    LayoutManager.init();
}
