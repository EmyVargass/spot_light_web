# 🌟 Spot-Light Web Admin

Panel de administración web para el sistema de evaluación de proyectos Spot-Light.

## 📋 Descripción

Aplicación web moderna con dashboards, analytics, gestión de proyectos y evaluaciones. Diseñada con un enfoque en la experiencia de usuario y visualización de datos.

## ✨ Características

- 🏠 **Landing Page** - Página de aterrizaje moderna y atractiva
- 🔐 **Autenticación** - Sistema de login con gestión de sesiones
- 📊 **Dashboard** - Métricas en tiempo real y gráficos interactivos
- 📁 **Gestión de Proyectos** - CRUD completo con filtros y búsqueda
- ⭐ **Evaluaciones** - Historial completo de evaluaciones
- 🏆 **Rankings** - Leaderboard de proyectos
- 📈 **Analytics** - Gráficos avanzados (radar, línea, pie, barras)
- 👥 **Equipos** - Gestión de equipos de trabajo
- 🎨 **Diseño Moderno** - Dark mode con efectos glassmorphism

## 🛠️ Tecnologías

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Estilos**: Tailwind CSS
- **Gráficos**: Chart.js
- **Backend**: Express.js + Node.js
- **Seguridad**: Helmet, CORS
- **Proceso**: PM2

## 📦 Instalación

### 1. Instalar dependencias

```bash
npm install
```

### 2. Configurar variables de entorno

Copia el archivo `.env.example` a `.env` y configura las variables:

```bash
cp .env.example .env
```

Edita `.env`:
```env
API_BASE_URL=http://localhost:5000/api
PORT=3000
ENABLE_MOCK_DATA=true
```

### 3. Ejecutar en desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`

## 🚀 Producción

### Opción 1: Node.js directo

```bash
npm start
```

### Opción 2: PM2 (Recomendado)

```bash
# Iniciar
npm run pm2:start

# Ver logs
npm run pm2:logs

# Reiniciar
npm run pm2:restart

# Detener
npm run pm2:stop
```

## 🔧 Configuración

### Modo Mock Data

Si el backend (.NET API) no está disponible, puedes usar datos de prueba:

1. En `.env` establece: `ENABLE_MOCK_DATA=true`
2. La aplicación usará datos de ejemplo definidos en `js/api.js`

### Conectar con Backend Real

1. Asegúrate de que la API de Alexander esté corriendo
2. En `.env` establece: `API_BASE_URL=http://localhost:5000/api`
3. Establece: `ENABLE_MOCK_DATA=false`

## 📁 Estructura del Proyecto

```
spot_light_web/
├── index.html              # Landing page
├── login.html              # Página de login
├── dashboard.html          # Dashboard principal
├── projects.html           # Gestión de proyectos
├── evaluations.html        # Historial de evaluaciones
├── rankings.html           # Rankings de proyectos
├── analytics.html          # Analytics avanzados
├── teams.html              # Gestión de equipos
├── css/
│   └── styles.css         # Estilos personalizados
├── js/
│   ├── config.js          # Configuración
│   ├── auth.js            # Autenticación
│   ├── api.js             # Servicio API
│   ├── utils.js           # Utilidades
│   └── charts.js          # Gráficos
├── server.js              # Servidor Express
├── package.json           # Dependencias
├── ecosystem.config.js    # Configuración PM2
└── .env                   # Variables de entorno
```

## 👤 Acceso a la Aplicación

1. Abre http://localhost:3000 (Landing Page)
2. Haz clic en "Iniciar Sesión" o "Comenzar Ahora"
3. En la página de login:

**Opción 1: Acceso Demo (Recomendado)**
- Haz clic en el botón **"🚀 Acceso Demo"**
- Te llevará directamente al dashboard

**Opción 2: Login Manual**
- Usuario: `admin`
- Contraseña: `demo123`
- Clic en "Iniciar Sesión"

## 🎨 Paleta de Colores

- **Primary**: #137fec (Azul)
- **Secondary**: #00d4ff (Cyan)
- **Background**: #0f172a (Slate 900)
- **Cards**: #1e293b (Slate 800)

## 📝 Notas

- La aplicación está configurada para trabajar con la API de .NET 8 de Alexander
- Los datos se almacenan en MongoDB Atlas (configurado por Gustavo)
- El diseño es responsive y funciona en desktop y tablet

## 👥 Equipo

- **Emily** - Diseño Web
- **Gustavo** - Base de Datos & Web
- **Alexander** - Backend API
- **Javier** - App Móvil

## 📄 Licencia

MIT © 2026 Spot-Light Team
