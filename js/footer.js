/**
 * Footer Component
 * Renders the global footer with consistent styling
 */
const FooterComponent = {
    /**
     * Render the footer component
     * @returns {string} HTML string for the footer
     */
    render() {
        const currentYear = new Date().getFullYear();

        return `
            <footer class="bg-slate-950 border-t border-slate-800 px-8 py-6 mt-auto">
                <div class="max-w-7xl mx-auto">
                    <div class="flex items-center justify-between">
                        <div class="text-sm text-slate-400">
                            © ${currentYear} Spot-Light Academic AI. Todos los derechos reservados.
                        </div>
                        <div class="flex items-center gap-6">
                            <a href="#" class="text-sm text-slate-400 hover:text-white transition">Términos</a>
                            <a href="#" class="text-sm text-slate-400 hover:text-white transition">Privacidad</a>
                            <a href="#" class="text-sm text-slate-400 hover:text-white transition">Soporte</a>
                        </div>
                    </div>
                </div>
            </footer>
        `;
    }
};
