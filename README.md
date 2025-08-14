# Auditoría Informática - Herramienta Didáctica

## 📚 Descripción

Herramienta didáctica interactiva para impartir clases sobre Auditoría Informática. Esta aplicación presenta un diseño moderno de tres columnas con los conceptos clave del Tema 1, permitiendo una experiencia de aprendizaje estructurada y visualmente atractiva.

## 🎯 Objetivo

Facilitar la enseñanza de conceptos de Auditoría Informática a través de una interfaz interactiva que permite:
- Visualizar conceptos y sus relaciones
- Explorar contenido detallado de cada concepto
- Navegar de forma intuitiva entre temas
- Seguir el progreso de aprendizaje
- Mantener el interés durante la clase

## 🚀 Características

### ✨ Funcionalidades Principales
- **Diseño de Tres Columnas**: Estructura organizada y fácil de seguir
- **Navegación por Secciones**: Botones para diferentes temas de auditoría
- **Contenido Estructurado**: Información organizada en tarjetas y secciones
- **Diseño Responsive**: Adaptable a diferentes dispositivos
- **Efectos Visuales**: Animaciones y transiciones suaves
- **Navegación por Teclado**: Accesos rápidos con Ctrl/Cmd + números

### 🎨 Diseño
- **Interfaz Moderna**: Diseño limpio y profesional
- **Paleta de Colores**: Azules y morados para auditoría
- **Tarjetas Elegantes**: Bordes redondeados y sombras sutiles
- **Iconografía**: Iconos descriptivos para cada sección
- **Timeline Visual**: Línea de tiempo para evolución histórica

## 📋 Agenda de la Clase - Tema 1

### 1. **Agenda Completa** (Vista General)
- Resumen de los 5 componentes principales
- Navegación interactiva a cada sección
- Estructura completa del tema

### 2. **INTRODUCCIÓN Y OBJETIVOS**
- Fundamentos básicos de la auditoría informática
- Propósitos principales
- Alcance del tema

### 3. **EL ROL DE LA AUDITORÍA INFORMÁTICA**
- Funciones en la organización
- Posición organizacional
- Responsabilidades principales

### 4. **DEFINICIÓN Y CARACTERÍSTICAS DE LA AUDITORÍA INFORMÁTICA**
- **Definición**: Concepto formal y elementos clave
- **Características**: Sistemática, Objetiva, Independiente, Profesional

### 5. **FUNCIONES Y OBJETIVOS DE LA AUDITORÍA INFORMÁTICA**
- **Funciones**: Evaluación de Controles, Análisis de Riesgos, Verificación de Cumplimiento
- **Objetivos**: Seguridad, Eficiencia, Cumplimiento, Mejora Continua

### 6. **HABILIDADES DEL AUDITOR INFORMÁTICO**
- Habilidades técnicas
- Habilidades profesionales
- Certificaciones requeridas


## 🖥️ Instalación y Uso

### Requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Conexión a internet (para cargar librerías externas)

### Instalación
1. Descargar todos los archivos del proyecto
2. Navegar a la carpeta del tema deseado (ej: `Tema1-AuditoriaInformatica/`)
3. Abrir el archivo `index.html` de esa carpeta en el navegador
4. ¡Listo para usar!

### Ejecución por Tema
- **Tema 1**: Abrir `Tema1-AuditoriaInformatica/index.html`
- **Tema 2**: Abrir `Tema2-[NombreTema]/index.html` (cuando esté disponible)
- **Temas futuros**: Seguir el mismo patrón de carpetas

### Controles
- **Botones de navegación**: Cambiar entre secciones
- **Teclas de acceso rápido**: Ctrl/Cmd + 1-6 para navegar
- **Hover**: Efectos visuales en tarjetas y elementos
- **Responsive**: Adaptación automática a dispositivos móviles

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura de la aplicación
- **CSS3**: Estilos, animaciones y diseño responsive
- **JavaScript (ES6+)**: Lógica interactiva y navegación
- **Bootstrap 5**: Framework de UI y componentes
- **Font Awesome**: Iconografía y elementos visuales

## 📁 Estructura del Proyecto

```
GestionTI/
├── README.md                    # Documentación principal del proyecto
├── Tema1-AuditoriaInformatica/  # Carpeta del Tema 1
│   ├── index.html              # Archivo principal del tema
│   ├── styles.css              # Estilos específicos del tema
│   └── script.js               # Lógica JavaScript del tema
├── Tema2-[NombreTema]/          # Carpeta del Tema 2 (futuro)
│   ├── index.html              # Archivo principal del tema
│   ├── styles.css              # Estilos específicos del tema
│   └── script.js               # Lógica JavaScript del tema
└── [Temas adicionales...]       # Carpetas para temas futuros
```

### 📂 Organización por Temas

Cada tema del curso tiene su propia carpeta independiente que contiene:
- **index.html**: Archivo principal que debe ejecutarse para ver el contenido
- **styles.css**: Estilos específicos del tema
- **script.js**: Lógica y funcionalidades del tema
- **README.md**: Documentación específica del tema (opcional)

### 🚀 Cómo Ejecutar un Tema

Para visualizar el contenido de cualquier tema:

1. **Navegar a la carpeta del tema deseado**
   ```bash
   cd Tema1-AuditoriaInformatica
   ```

2. **Abrir el archivo index.html**
   - Doble clic en `index.html`
   - O arrastrar el archivo al navegador
   - O usar un servidor local: `python -m http.server` y acceder a `http://localhost:8000`

3. **¡Listo!** El contenido del tema se cargará automáticamente

## 🎨 Personalización

### Estructura para Nuevos Temas

Para crear un nuevo tema, seguir esta estructura:

```
TemaX-[NombreTema]/
├── index.html          # Archivo principal del tema
├── styles.css          # Estilos específicos
├── script.js           # Lógica del tema
└── README.md           # Documentación del tema (opcional)
```

### Modificar Conceptos
Editar el array `CONCEPTS_DATA.concepts` en `script.js` del tema correspondiente:
```javascript
{
    id: 11,
    name: "Nuevo Concepto",
    category: 1,
    position: { x: 300, y: 400 },
    description: "Descripción breve",
    details: "Contenido HTML detallado",
    connections: [1, 2, 3]
}
```

### Cambiar Colores
Modificar las variables CSS en `styles.css` del tema correspondiente:
```css
.concept-category-1 { fill: #nuevo-color; stroke: #nuevo-borde; }
```

### Ajustar Configuración
Modificar `APP_CONFIG` en `script.js` del tema correspondiente:
```javascript
const APP_CONFIG = {
    canvasWidth: 1200,
    canvasHeight: 800,
    nodeRadius: 60,
    // ... más configuraciones
};
```

## 🔧 Funcionalidades Avanzadas

### Navegación por Secciones
- **Dashboard**: Vista principal con resumen
- **Fundamentos**: Conceptos básicos
- **Metodologías**: Enfoques y marcos
- **Tipos**: Clasificación de auditorías
- **Herramientas**: Software y técnicas
- **Certificaciones**: Estándares profesionales

### Efectos Visuales
- Animaciones de entrada suaves
- Efectos hover en tarjetas
- Transiciones fluidas entre secciones
- Timeline interactivo

### Responsive Design
- Adaptación automática a diferentes tamaños de pantalla
- Optimización para dispositivos móviles
- Navegación táctil para tablets

## 📊 Métricas de Uso

La aplicación incluye:
- Navegación entre secciones
- Efectos de interacción
- Animaciones de entrada
- Diseño responsive

## 🤝 Contribuciones

Para mejorar la herramienta:
1. Revisar el código existente en la carpeta del tema correspondiente
2. Proponer mejoras específicas para cada tema
3. Mantener la consistencia del diseño entre temas
4. Documentar cambios realizados en el README del tema
5. Seguir la estructura de carpetas establecida para nuevos temas

## 📞 Soporte

Para dudas o problemas:
- Revisar la documentación
- Verificar la consola del navegador
- Comprobar compatibilidad del navegador

---

**Desarrollado para facilitar la enseñanza de Auditoría Informática con un diseño moderno y estructurado**
# gestion-ti
# gestion-ti
