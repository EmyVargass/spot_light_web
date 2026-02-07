// API Service - Handles all backend communication
const ApiService = {
    // Base fetch wrapper with error handling
    async request(endpoint, options = {}) {
        const url = `${CONFIG.API_BASE_URL}${endpoint}`;

        const defaultOptions = {
            headers: {
                'Content-Type': 'application/json',
                ...options.headers
            },
            ...options
        };

        try {
            const response = await fetch(url, defaultOptions);

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }

            return await response.json();
        } catch (error) {
            console.error('API Error:', error);

            // If mock data is enabled, return mock data
            if (CONFIG.ENABLE_MOCK_DATA) {
                return this.getMockData(endpoint);
            }

            throw error;
        }
    },

    // GET request
    async get(endpoint) {
        return this.request(endpoint, { method: 'GET' });
    },

    // POST request
    async post(endpoint, data) {
        return this.request(endpoint, {
            method: 'POST',
            body: JSON.stringify(data)
        });
    },

    // PUT request
    async put(endpoint, data) {
        return this.request(endpoint, {
            method: 'PUT',
            body: JSON.stringify(data)
        });
    },

    // DELETE request
    async delete(endpoint) {
        return this.request(endpoint, { method: 'DELETE' });
    },

    // Mock data for development
    getMockData(endpoint) {
        const mockData = {
            '/projects': [
                {
                    id: '1',
                    title: 'Eco-Dron Reforestador',
                    category: 'Sustentabilidad',
                    description: 'Dron autónomo que planta árboles en zonas deforestadas',
                    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                    members: ['Juan Pérez', 'Ana García'],
                    stats: { averageScore: 4.5, totalVotes: 12 },
                    createdAt: '2026-01-15T10:00:00Z'
                },
                {
                    id: '2',
                    title: 'Smart Parking IoT',
                    category: 'IoT',
                    description: 'Sistema inteligente de gestión de estacionamientos',
                    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
                    members: ['Carlos López', 'María Rodríguez'],
                    stats: { averageScore: 4.2, totalVotes: 8 },
                    createdAt: '2026-01-20T14:30:00Z'
                },
                {
                    id: '3',
                    title: 'AI Health Assistant',
                    category: 'Salud',
                    description: 'Asistente de salud con inteligencia artificial',
                    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
                    members: ['Luis Martínez', 'Sofia Torres'],
                    stats: { averageScore: 4.8, totalVotes: 15 },
                    createdAt: '2026-01-25T09:15:00Z'
                }
            ],
            '/evaluations': [
                {
                    id: '1',
                    projectId: '1',
                    evaluatorId: 'eval1',
                    evaluatorName: 'Dr. Roberto Sánchez',
                    scores: { innovation: 5, functionality: 4, ui: 5, impact: 5 },
                    finalScore: 4.75,
                    feedback: 'Excelente proyecto con gran impacto ambiental',
                    aiAnalysis: { sentiment: 'Muy Positivo', keywords: ['innovador', 'sustentable', 'impacto'] },
                    createdAt: '2026-01-16T11:00:00Z'
                },
                {
                    id: '2',
                    projectId: '2',
                    evaluatorId: 'eval2',
                    evaluatorName: 'Ing. Patricia Gómez',
                    scores: { innovation: 4, functionality: 4, ui: 4, impact: 4 },
                    finalScore: 4.0,
                    feedback: 'Buena implementación técnica',
                    aiAnalysis: { sentiment: 'Positivo', keywords: ['funcional', 'práctico'] },
                    createdAt: '2026-01-21T15:30:00Z'
                }
            ],
            '/stats': {
                totalProjects: 12,
                totalEvaluations: 45,
                averageScore: 4.3,
                activeEvaluators: 8,
                categoriesCount: {
                    'Sustentabilidad': 4,
                    'IoT': 3,
                    'Salud': 2,
                    'Educación': 3
                }
            }
        };

        return mockData[endpoint] || [];
    },

    // Projects API
    projects: {
        getAll: () => ApiService.get('/projects'),
        getById: (id) => ApiService.get(`/projects/${id}`),
        create: (data) => ApiService.post('/projects', data),
        update: (id, data) => ApiService.put(`/projects/${id}`, data),
        delete: (id) => ApiService.delete(`/projects/${id}`)
    },

    // Evaluations API
    evaluations: {
        getAll: () => ApiService.get('/evaluations'),
        getById: (id) => ApiService.get(`/evaluations/${id}`),
        getByProject: (projectId) => ApiService.get(`/evaluations/project/${projectId}`),
        create: (data) => ApiService.post('/evaluations', data)
    },

    // Stats API
    stats: {
        getOverview: () => ApiService.get('/stats'),
        getByCategory: () => ApiService.get('/stats/categories'),
        getTrends: () => ApiService.get('/stats/trends')
    }
};
