# Improved script to replace SVG logo with PNG logo
$htmlFiles = @(
    "user-management.html",
    "teams.html",
    "team-management.html",
    "system-config.html",
    "results-ranking.html",
    "rankings.html",
    "projects.html",
    "project-results.html",
    "project-manager.html",
    "project-detail.html",
    "profile-control.html",
    "index.html",
    "global-results.html",
    "evaluator-profile.html",
    "evaluations.html",
    "evaluation-panel.html",
    "evaluation-manager.html",
    "evaluation-history.html",
    "evaluation-history-full.html",
    "catalog.html",
    "analytics.html",
    "academic-control.html",
    "ai-analysis-history.html"
)

$svgPattern = '<div class="p-2 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg">\s*<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">\s*<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\s*d="M9\.663 17h4\.673M12 3v1m6\.364 1\.636l-\.707\.707M21 12h-1M4 12H3m3\.343-5\.657l-\.707-\.707m2\.828 9\.9a5 5 0 117\.072 0l-\.548\.547A3\.374 3\.374 0 0014 18\.469V19a2 2 0 11-4 0v-\.531c0-\.895-\.356-1\.754-\.988-2\.386l-\.548-\.547z">\s*</path>\s*</svg>\s*</div>'

$replacement = '<img src="images/logo.png" alt="Spot-Light Logo" class="w-10 h-10 rounded-lg">'

$count = 0
foreach ($file in $htmlFiles) {
    if (Test-Path $file) {
        $content = Get-Content $file -Raw -Encoding UTF8
        $newContent = $content -replace $svgPattern, $replacement
        if ($content -ne $newContent) {
            Set-Content -Path $file -Value $newContent -NoNewline -Encoding UTF8
            $count++
            Write-Host "✓ Updated: $file" -ForegroundColor Green
        } else {
            Write-Host "- Skipped: $file (already updated or no match)" -ForegroundColor Yellow
        }
    }
}

Write-Host "`n✅ Total files updated: $count" -ForegroundColor Cyan
