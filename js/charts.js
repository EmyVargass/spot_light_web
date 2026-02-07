// Chart.js Configuration and Utilities
const ChartUtils = {
    // Default chart options
    defaultOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: {
                    color: '#94a3b8',
                    font: { size: 12 }
                }
            }
        },
        scales: {
            y: {
                ticks: { color: '#94a3b8' },
                grid: { color: 'rgba(148, 163, 184, 0.1)' }
            },
            x: {
                ticks: { color: '#94a3b8' },
                grid: { color: 'rgba(148, 163, 184, 0.1)' }
            }
        }
    },

    // Create bar chart
    createBarChart(canvasId, labels, data, label = 'Datos') {
        const ctx = document.getElementById(canvasId);
        if (!ctx) return null;

        return new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: label,
                    data: data,
                    backgroundColor: 'rgba(19, 127, 236, 0.8)',
                    borderColor: '#137fec',
                    borderWidth: 1
                }]
            },
            options: this.defaultOptions
        });
    },

    // Create line chart
    createLineChart(canvasId, labels, datasets) {
        const ctx = document.getElementById(canvasId);
        if (!ctx) return null;

        const colors = ['#137fec', '#00d4ff', '#10b981', '#f59e0b'];

        const chartDatasets = datasets.map((dataset, index) => ({
            label: dataset.label,
            data: dataset.data,
            borderColor: colors[index % colors.length],
            backgroundColor: colors[index % colors.length] + '20',
            tension: 0.4,
            fill: true
        }));

        return new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: chartDatasets
            },
            options: this.defaultOptions
        });
    },

    // Create pie/doughnut chart
    createPieChart(canvasId, labels, data, type = 'doughnut') {
        const ctx = document.getElementById(canvasId);
        if (!ctx) return null;

        const colors = [
            '#137fec', '#00d4ff', '#10b981', '#f59e0b',
            '#ef4444', '#8b5cf6', '#ec4899', '#06b6d4'
        ];

        return new Chart(ctx, {
            type: type,
            data: {
                labels: labels,
                datasets: [{
                    data: data,
                    backgroundColor: colors.slice(0, data.length),
                    borderWidth: 2,
                    borderColor: '#1e293b'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: '#94a3b8',
                            padding: 15,
                            font: { size: 12 }
                        }
                    }
                }
            }
        });
    },

    // Create radar chart
    createRadarChart(canvasId, labels, datasets) {
        const ctx = document.getElementById(canvasId);
        if (!ctx) return null;

        const colors = ['#137fec', '#00d4ff', '#10b981'];

        const chartDatasets = datasets.map((dataset, index) => ({
            label: dataset.label,
            data: dataset.data,
            borderColor: colors[index % colors.length],
            backgroundColor: colors[index % colors.length] + '40',
            pointBackgroundColor: colors[index % colors.length],
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: colors[index % colors.length]
        }));

        return new Chart(ctx, {
            type: 'radar',
            data: {
                labels: labels,
                datasets: chartDatasets
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    r: {
                        ticks: {
                            color: '#94a3b8',
                            backdropColor: 'transparent'
                        },
                        grid: { color: 'rgba(148, 163, 184, 0.2)' },
                        pointLabels: { color: '#94a3b8' }
                    }
                },
                plugins: {
                    legend: {
                        labels: {
                            color: '#94a3b8',
                            font: { size: 12 }
                        }
                    }
                }
            }
        });
    },

    // Destroy chart (for cleanup)
    destroyChart(chart) {
        if (chart) {
            chart.destroy();
        }
    }
};
