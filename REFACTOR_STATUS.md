# Estado de la Refactorización del Layout Global

## ✅ Lo que se ha hecho

### 1. Sistema de Layout Global
Hemos implementado una arquitectura de componentes reutilizables para eliminar la duplicación de código (DRY) y asegurar consistencia visual.

*   **`js/layout.js`**: Controlador principal que ensambla la página.
*   **`js/header.js`**: Componente de encabezado global.
*   **`js/sidebar.js`**: Barra lateral con navegación inteligente y estado de usuario.
*   **`js/footer.js`**: Pie de página global.

### 2. Páginas Migradas
Las siguientes páginas han sido refactorizadas exitosamente para usar el nuevo sistema:

*   **`dashboard.html`**: Panel principal del evaluador.
*   **`analytics.html`**: Página de estadísticas.

Estas páginas ahora son más ligeras y fáciles de mantener, ya que no contienen el código del menú ni del header repetido.

### 3. Automatización
*   **`refactor-pages.ps1`**: Se ha creado este script para facilitar la migración masiva de las páginas restantes.

---

## ⏳ Lo que falta (Pendientes)

El resto de las páginas del sistema aún utilizan el método antiguo (código copiado/pegado de sidebar y header). Es necesario migrarlas al nuevo sistema para completar la refactorización.

### Páginas Principales a Migrar
- [ ] `results-ranking.html`
- [ ] `evaluation-history-full.html`
- [ ] `catalog.html`
- [ ] `projects.html`

### Páginas del Sistema
- [ ] `evaluations.html`
- [ ] `evaluation-panel.html`
- [ ] `evaluation-manager.html`
- [ ] `evaluation-history.html`
- [ ] `evaluator-profile.html`
- [ ] `project-detail.html`
- [ ] `project-manager.html`
- [ ] `project-results.html`
- [ ] `teams.html`
- [ ] `team-management.html`
- [ ] `user-management.html`
- [ ] `academic-control.html`
- [ ] `profile-control.html`
- [ ] `system-config.html`
- [ ] `global-results.html`
- [ ] `rankings.html`
- [ ] `student-panel.html`
- [ ] `ai-analysis-history.html`
- [ ] `ai-processing.html`

---

## 📝 Guía Rápida para Migrar una Página

Para migrar cualquiera de las páginas pendientes manualmente:

1.  **Limpiar**: Eliminar todo el código del `<aside>` (Sidebar), `<header>` y `<footer>` existente en el archivo.
2.  **Estructurar**: Dejar solo el contenido único de la página y envolverlo así:
    ```html
    <body class="bg-slate-900 text-white">
        <div id="app"></div>

        <template id="page-content">
            <!-- AQUÍ VA EL CONTENIDO ÚNICO DE LA PÁGINA -->
        </template>
    ```
3.  **Scripts**: Reemplazar los scripts al final del body por esto:
    ```html
    <!-- Scripts Base -->
    <script src="js/config.js"></script>
    <script src="js/auth.js"></script>
    <script src="js/api.js"></script>
    <script src="js/utils.js"></script>
    <script src="js/charts.js"></script>

    <!-- Componentes de Layout -->
    <script src="js/header.js"></script>
    <script src="js/sidebar.js"></script>
    <script src="js/footer.js"></script>
    <script src="js/layout.js"></script>

    <!-- Script específico de la página (si tiene) -->
    <script>...</script>
    ```
