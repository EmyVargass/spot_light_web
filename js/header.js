/**
 * Header Component
 * Renders the global header with consistent styling
 */
const HeaderComponent = {
    /**
     * Render the header component
     * @param {string} pageTitle - Title of the current page
     * @param {string} pageSubtitle - Subtitle/description of the current page
     * @returns {string} HTML string for the header
     */
    render(pageTitle = 'Dashboard', pageSubtitle = '') {
        return `
            <header class="bg-slate-900 border-b border-slate-800 px-8 py-6 flex items-center justify-between sticky top-0 z-10" style="height: 80px;">
                <div>
                    <h1 class="text-2xl font-bold">${pageTitle}</h1>
                    ${pageSubtitle ? `<p class="text-slate-400 text-sm">${pageSubtitle}</p>` : ''}
                </div>
                <div class="flex items-center gap-4">
                    <button class="p-2 hover:bg-slate-800 rounded-lg transition" title="Notificaciones">
                        <svg class="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9">
                            </path>
                        </svg>
                    </button>
                    <button class="p-2 hover:bg-slate-800 rounded-lg transition" title="Configuración">
                        <svg class="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z">
                            </path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                    </button>
                </div>
            </header>
        `;
    }
};
