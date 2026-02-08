# Script para refactorizar páginas HTML al nuevo sistema de layout global
# Este script convierte páginas HTML antiguas al nuevo formato con componentes globales

$pagesDir = "c:\Users\emily\Documents\QUINTO CUATRIMESTRE\APLICACIONES WEB ORIENTADAS A SERVICIOS\spot_light_web"

# Lista de páginas a refactorizar (excluyendo login, index, role-selection)
$pagesToRefactor = @(
    "results-ranking.html",
    "evaluation-history-full.html",
    "catalog.html",
    "evaluation-history.html",
    "evaluation-manager.html",
    "evaluation-panel.html",
    "evaluations.html",
    "evaluator-profile.html",
    "projects.html",
    "project-detail.html",
    "project-manager.html",
    "project-results.html",
    "user-management.html",
    "team-management.html",
    "teams.html",
    "academic-control.html",
    "system-config.html",
    "profile-control.html",
    "global-results.html",
    "rankings.html",
    "student-panel.html",
    "ai-analysis-history.html",
    "ai-processing.html"
)

Write-Host "Refactorizando páginas HTML al nuevo sistema de layout global..." -ForegroundColor Cyan
Write-Host ""

foreach ($page in $pagesToRefactor) {
    $filePath = Join-Path $pagesDir $page
    
    if (Test-Path $filePath) {
        Write-Host "Procesando: $page" -ForegroundColor Yellow
        
        try {
            # Leer el contenido del archivo
            $content = Get-Content $filePath -Raw -Encoding UTF8
            
            # Verificar si ya está refactorizado
            if ($content -match '<div id="app"></div>') {
                Write-Host "  ✓ Ya refactorizado" -ForegroundColor Green
                continue
            }
            
            # Extraer el contenido entre <!-- Content --> y </main>
            if ($content -match '(?s)<!-- Content -->(.+?)</main>') {
                $pageContent = $matches[1].Trim()
                
                # Extraer head completo
                if ($content -match '(?s)<head>(.+?)</head>') {
                    $headContent = $matches[1]
                }
                
                # Extraer scripts específicos de la página (después de los scripts comunes)
                $pageScripts = ""
                if ($content -match '(?s)<script>(.+?)</script>\s*</body>') {
                    $pageScripts = "    <script>`n" + $matches[1].Trim() + "`n    </script>"
                }
                
                # Crear el nuevo contenido
                $newContent = @"
<!DOCTYPE html>
<html lang="es">

<head>
$headContent
</head>

<body class="bg-slate-900 text-white">
    <!-- El layout se inyecta aquí automáticamente -->
    <div id="app"></div>
    
    <!-- Contenido específico de la página (template) -->
    <template id="page-content">
$pageContent
    </template>

    <!-- Scripts -->
    <script src="js/config.js"></script>
    <script src="js/auth.js"></script>
    <script src="js/api.js"></script>
    <script src="js/utils.js"></script>
    <script src="js/charts.js"></script>
    
    <!-- Layout Components -->
    <script src="js/header.js"></script>
    <script src="js/sidebar.js"></script>
    <script src="js/footer.js"></script>
    <script src="js/layout.js"></script>

$pageScripts
</body>

</html>
"@
                
                # Guardar el archivo refactorizado
                Set-Content -Path $filePath -Value $newContent -Encoding UTF8
                Write-Host "  ✓ Refactorizado exitosamente" -ForegroundColor Green
            }
            else {
                Write-Host "  ✗ No se pudo encontrar el contenido a extraer" -ForegroundColor Red
            }
        }
        catch {
            Write-Host "  ✗ Error: $_" -ForegroundColor Red
        }
    }
    else {
        Write-Host "  ✗ Archivo no encontrado" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "Refactorización completada!" -ForegroundColor Cyan
