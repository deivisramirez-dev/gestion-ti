// Configuración de la aplicación
const APP_CONFIG = {
    sections: {
        overview: {
            title: "CONTINUIDAD DEL NEGOCIO",
            subtitle: "Agenda Completa - Tema 3: Los 5 Componentes Principales",
            icon: "fas fa-sitemap"
        },
        introduccion: {
            title: "INTRODUCCIÓN A BCM",
            subtitle: "Conceptos básicos de Business Continuity Management",
            icon: "fas fa-info-circle"
        },
        planificacion: {
            title: "PLANIFICACIÓN BCM",
            subtitle: "Desarrollo de planes de continuidad del negocio",
            icon: "fas fa-clipboard-list"
        },
        recuperacion: {
            title: "RECUPERACIÓN DE DESASTRES",
            subtitle: "Estrategias y procedimientos de recuperación",
            icon: "fas fa-tools"
        },
        pruebas: {
            title: "PRUEBAS Y VALIDACIÓN",
            subtitle: "Validación y mejora de planes BCM",
            icon: "fas fa-vial"
        },
        mantenimiento: {
            title: "MANTENIMIENTO Y MEJORA",
            subtitle: "Actualización y mejora continua de planes",
            icon: "fas fa-wrench"
        }
    }
};

// Clase principal de la aplicación
class BusinessContinuityApp {
    constructor() {
        this.currentSection = 'overview';
        this.initializeApp();
        this.setupEventListeners();
    }
    
    initializeApp() {
        // Configurar la sección activa por defecto
        this.updateActiveSection('overview');
        this.loadSectionContent('overview');
    }
    
    setupEventListeners() {
        // Eventos de navegación
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const section = e.currentTarget.dataset.section;
                this.switchSection(section);
            });
        });
        
        // Eventos de hover para efectos visuales
        this.setupHoverEffects();
    }
    
    switchSection(sectionName) {
        // Actualizar botones de navegación
        this.updateActiveSection(sectionName);
        
        // Cargar contenido de la sección
        this.loadSectionContent(sectionName);
        
        // Actualizar sección actual
        this.currentSection = sectionName;
    }
    
    updateActiveSection(sectionName) {
        // Remover clase active de todos los botones
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Agregar clase active al botón seleccionado
        const activeBtn = document.querySelector(`[data-section="${sectionName}"]`);
        if (activeBtn) {
            activeBtn.classList.add('active');
        }
    }
    
    loadSectionContent(sectionName) {
        const section = APP_CONFIG.sections[sectionName];
        if (!section) return;
        
        // Actualizar título y subtítulo
        const titleElement = document.getElementById('sectionTitle');
        const subtitleElement = document.getElementById('sectionSubtitle');
        
        if (titleElement) {
            titleElement.innerHTML = `<i class="${section.icon} me-3"></i>${section.title}`;
        }
        
        if (subtitleElement) {
            subtitleElement.textContent = section.subtitle;
        }
        
        // Cargar contenido específico de la sección
        this.loadSectionSpecificContent(sectionName);
    }
    
    loadSectionSpecificContent(sectionName) {
        const contentContainer = document.getElementById('dynamicContent');
        if (!contentContainer) return;
        
        switch(sectionName) {
            case 'overview':
                this.showOverviewContent();
                break;
            case 'introduccion':
                this.showIntroduccionContent();
                break;
            case 'planificacion':
                this.showPlanificacionContent();
                break;
            case 'recuperacion':
                this.showRecuperacionContent();
                break;
            case 'pruebas':
                this.showPruebasContent();
                break;
            case 'mantenimiento':
                this.showMantenimientoContent();
                break;
            default:
                this.showOverviewContent();
                break;
        }
    }
    
    showOverviewContent() {
        const content = `
            <div class="row">
                <div class="col-12">
                    <div class="overview-grid">
                        <div class="overview-item" data-section="introduccion">
                            <div class="overview-icon">
                                <i class="fas fa-info-circle"></i>
                            </div>
                            <h3>INTRODUCCIÓN A BCM</h3>
                            <p>Conceptos básicos y fundamentos de Business Continuity Management</p>
                        </div>
                        <div class="overview-item" data-section="planificacion">
                            <div class="overview-icon">
                                <i class="fas fa-clipboard-list"></i>
                            </div>
                            <h3>PLANIFICACIÓN BCM</h3>
                            <p>Desarrollo y estructuración de planes de continuidad del negocio</p>
                        </div>
                        <div class="overview-item" data-section="recuperacion">
                            <div class="overview-icon">
                                <i class="fas fa-tools"></i>
                            </div>
                            <h3>RECUPERACIÓN DE DESASTRES</h3>
                            <p>Estrategias y procedimientos para recuperación ante incidentes</p>
                        </div>
                        <div class="overview-item" data-section="pruebas">
                            <div class="overview-icon">
                                <i class="fas fa-vial"></i>
                            </div>
                            <h3>PRUEBAS Y VALIDACIÓN</h3>
                            <p>Validación y verificación de la efectividad de los planes</p>
                        </div>
                        <div class="overview-item" data-section="mantenimiento">
                            <div class="overview-icon">
                                <i class="fas fa-wrench"></i>
                            </div>
                            <h3>MANTENIMIENTO Y MEJORA</h3>
                            <p>Actualización y mejora continua de los planes BCM</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.getElementById('dynamicContent').innerHTML = content;
        this.setupOverviewClickHandlers();
    }
    
    showIntroduccionContent() {
        const content = `
            <div class="row">
                <div class="col-md-6">
                    <div class="content-section">
                        <h3 class="section-heading">
                            <i class="fas fa-bullseye me-2"></i>
                            ¿Qué es BCM?
                        </h3>
                        <div class="info-cards">
                            <div class="info-card">
                                <h4>Definición</h4>
                                <p>Proceso holístico que identifica amenazas potenciales y desarrolla respuestas para garantizar la continuidad del negocio</p>
                            </div>
                            <div class="info-card">
                                <h4>Objetivo</h4>
                                <p>Mantener operaciones críticas durante y después de un incidente disruptivo</p>
                            </div>
                            <div class="info-card">
                                <h4>Alcance</h4>
                                <p>Cubre personas, procesos, tecnología y ubicaciones físicas</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="content-section">
                        <h3 class="section-heading">
                            <i class="fas fa-lightbulb me-2"></i>
                            Importancia del BCM
                        </h3>
                        <div class="quote-box">
                            <p>La continuidad del negocio es esencial para proteger la reputación, mantener la confianza de los stakeholders y asegurar la supervivencia de la organización ante eventos disruptivos.</p>
                        </div>
                        <div class="key-points">
                            <div class="point">
                                <i class="fas fa-check-circle me-2"></i>
                                <span>Protección de la reputación</span>
                            </div>
                            <div class="point">
                                <i class="fas fa-check-circle me-2"></i>
                                <span>Cumplimiento regulatorio</span>
                            </div>
                            <div class="point">
                                <i class="fas fa-check-circle me-2"></i>
                                <span>Reducción de pérdidas financieras</span>
                            </div>
                            <div class="point">
                                <i class="fas fa-check-circle me-2"></i>
                                <span>Mantenimiento de la confianza</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.getElementById('dynamicContent').innerHTML = content;
    }
    
    showPlanificacionContent() {
        const content = `
            <div class="row">
                <div class="col-md-8">
                    <div class="content-section">
                        <h3 class="section-heading">
                            <i class="fas fa-clipboard-list me-2"></i>
                            Componentes del Plan BCM
                        </h3>
                        <div class="role-cards">
                            <div class="role-card">
                                <div class="role-icon">
                                    <i class="fas fa-search"></i>
                                </div>
                                <div class="role-content">
                                    <h4>Análisis de Impacto al Negocio</h4>
                                    <p>Identificación de funciones críticas y su dependencia de recursos</p>
                                </div>
                            </div>
                            <div class="role-card">
                                <div class="role-icon">
                                    <i class="fas fa-exclamation-triangle"></i>
                                </div>
                                <div class="role-content">
                                    <h4>Evaluación de Riesgos</h4>
                                    <p>Análisis de amenazas y vulnerabilidades que pueden afectar la continuidad</p>
                                </div>
                            </div>
                            <div class="role-card">
                                <div class="role-icon">
                                    <i class="fas fa-cogs"></i>
                                </div>
                                <div class="role-content">
                                    <h4>Estrategias de Continuidad</h4>
                                    <p>Desarrollo de estrategias para mantener operaciones críticas</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="content-section">
                        <h3 class="section-heading">
                            <i class="fas fa-list me-2"></i>
                            Elementos del Plan
                        </h3>
                        <div class="sub-section-box">
                            <div class="characteristics-list">
                                <div class="characteristic-item">
                                    <div class="char-icon">
                                        <i class="fas fa-users"></i>
                                    </div>
                                    <div class="char-content">
                                        <h4>Equipo de Respuesta</h4>
                                        <p>Roles y responsabilidades definidos</p>
                                    </div>
                                </div>
                                <div class="characteristic-item">
                                    <div class="char-icon">
                                        <i class="fas fa-phone"></i>
                                    </div>
                                    <div class="char-content">
                                        <h4>Procedimientos de Comunicación</h4>
                                        <p>Protocolos de comunicación interna y externa</p>
                                    </div>
                                </div>
                                <div class="characteristic-item">
                                    <div class="char-icon">
                                        <i class="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div class="char-content">
                                        <h4>Sitios de Recuperación</h4>
                                        <p>Ubicaciones alternativas para operaciones</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.getElementById('dynamicContent').innerHTML = content;
    }
    
    showRecuperacionContent() {
        const content = `
            <div class="row">
                <div class="col-md-6">
                    <div class="content-section">
                        <h3 class="section-heading">
                            <i class="fas fa-tools me-2"></i>
                            Estrategias de Recuperación
                        </h3>
                        <div class="sub-section-box">
                            <div class="function-cards">
                                <div class="function-card">
                                    <h4>Recuperación de Sistemas</h4>
                                    <ul>
                                        <li>Backup y restauración de datos</li>
                                        <li>Recuperación de aplicaciones críticas</li>
                                        <li>Restauración de infraestructura</li>
                                        <li>Validación de integridad</li>
                                    </ul>
                                </div>
                                <div class="function-card">
                                    <h4>Recuperación de Operaciones</h4>
                                    <ul>
                                        <li>Activación de sitios alternativos</li>
                                        <li>Movilización de personal clave</li>
                                        <li>Restablecimiento de comunicaciones</li>
                                        <li>Coordinación con proveedores</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="content-section">
                        <h3 class="section-heading">
                            <i class="fas fa-clock me-2"></i>
                            Objetivos de Tiempo
                        </h3>
                        <div class="sub-section-box">
                            <div class="objectives-list">
                                <div class="objective-item">
                                    <div class="obj-icon">
                                        <i class="fas fa-exclamation-triangle"></i>
                                    </div>
                                    <div class="obj-content">
                                        <h4>RTO (Recovery Time Objective)</h4>
                                        <p>Tiempo máximo aceptable para restaurar servicios</p>
                                    </div>
                                </div>
                                <div class="objective-item">
                                    <div class="obj-icon">
                                        <i class="fas fa-database"></i>
                                    </div>
                                    <div class="obj-content">
                                        <h4>RPO (Recovery Point Objective)</h4>
                                        <p>Pérdida máxima de datos aceptable</p>
                                    </div>
                                </div>
                                <div class="objective-item">
                                    <div class="obj-icon">
                                        <i class="fas fa-chart-line"></i>
                                    </div>
                                    <div class="obj-content">
                                        <h4>MTO (Maximum Tolerable Outage)</h4>
                                        <p>Tiempo máximo de interrupción tolerable</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.getElementById('dynamicContent').innerHTML = content;
    }
    
    showPruebasContent() {
        const content = `
            <div class="row">
                <div class="col-md-6">
                    <div class="content-section">
                        <h3 class="section-heading">
                            <i class="fas fa-vial me-2"></i>
                            Tipos de Pruebas
                        </h3>
                        <div class="sub-section-box">
                            <div class="characteristics-list">
                                <div class="characteristic-item">
                                    <div class="char-icon">
                                        <i class="fas fa-desktop"></i>
                                    </div>
                                    <div class="char-content">
                                        <h4>Pruebas de Escritorio</h4>
                                        <p>Revisión teórica de procedimientos y roles</p>
                                    </div>
                                </div>
                                <div class="characteristic-item">
                                    <div class="char-icon">
                                        <i class="fas fa-users"></i>
                                    </div>
                                    <div class="char-content">
                                        <h4>Simulacros</h4>
                                        <p>Ejercicios prácticos con participación del equipo</p>
                                    </div>
                                </div>
                                <div class="characteristic-item">
                                    <div class="char-icon">
                                        <i class="fas fa-server"></i>
                                    </div>
                                    <div class="char-content">
                                        <h4>Pruebas Técnicas</h4>
                                        <p>Validación de sistemas de recuperación</p>
                                    </div>
                                </div>
                                <div class="characteristic-item">
                                    <div class="char-icon">
                                        <i class="fas fa-building"></i>
                                    </div>
                                    <div class="char-content">
                                        <h4>Pruebas de Sitio</h4>
                                        <p>Activación completa de sitios de recuperación</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="content-section">
                        <h3 class="section-heading">
                            <i class="fas fa-clipboard-check me-2"></i>
                            Proceso de Validación
                        </h3>
                        <div class="sub-section-box">
                            <div class="org-chart">
                                <div class="org-level">1. Planificación</div>
                                <div class="org-arrow">↓</div>
                                <div class="org-level">2. Ejecución</div>
                                <div class="org-arrow">↓</div>
                                <div class="org-level">3. Evaluación</div>
                                <div class="org-arrow">↓</div>
                                <div class="org-level">4. Documentación</div>
                                <div class="org-arrow">↓</div>
                                <div class="org-level">5. Mejora</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.getElementById('dynamicContent').innerHTML = content;
    }
    
    showMantenimientoContent() {
        const content = `
            <div class="row">
                <div class="col-md-4">
                    <div class="content-section">
                        <h3 class="section-heading">
                            <i class="fas fa-sync-alt me-2"></i>
                            Actualizaciones Periódicas
                        </h3>
                        <div class="skills-cards">
                            <div class="skill-card">
                                <h4>Revisión Anual</h4>
                                <p>Evaluación completa del plan BCM</p>
                            </div>
                            <div class="skill-card">
                                <h4>Actualizaciones Trimestrales</h4>
                                <p>Revisión de contactos y procedimientos</p>
                            </div>
                            <div class="skill-card">
                                <h4>Cambios Organizacionales</h4>
                                <p>Actualización por cambios en la empresa</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="content-section">
                        <h3 class="section-heading">
                            <i class="fas fa-chart-line me-2"></i>
                            Métricas de Mejora
                        </h3>
                        <div class="skills-cards">
                            <div class="skill-card">
                                <h4>Tiempo de Recuperación</h4>
                                <p>Medición de RTO y RPO alcanzados</p>
                            </div>
                            <div class="skill-card">
                                <h4>Efectividad de Pruebas</h4>
                                <p>Evaluación de resultados de simulacros</p>
                            </div>
                            <div class="skill-card">
                                <h4>Participación del Equipo</h4>
                                <p>Involucramiento en actividades BCM</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="content-section">
                        <h3 class="section-heading">
                            <i class="fas fa-lightbulb me-2"></i>
                            Mejora Continua
                        </h3>
                        <div class="certifications-list">
                            <div class="cert-item">
                                <h4>Lecciones Aprendidas</h4>
                                <p>Documentación de experiencias</p>
                            </div>
                            <div class="cert-item">
                                <h4>Mejores Prácticas</h4>
                                <p>Incorporación de estándares</p>
                            </div>
                            <div class="cert-item">
                                <h4>Innovación</h4>
                                <p>Adopción de nuevas tecnologías</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.getElementById('dynamicContent').innerHTML = content;
    }
    
    setupOverviewClickHandlers() {
        document.querySelectorAll('.overview-item').forEach(item => {
            item.addEventListener('click', (e) => {
                const section = e.currentTarget.dataset.section;
                this.switchSection(section);
            });
        });
    }
    
    setupHoverEffects() {
        // Efectos de hover para las tarjetas
        const cards = document.querySelectorAll('.overview-item, .info-card, .role-card, .function-card, .skill-card');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-5px)';
                card.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
                card.style.boxShadow = '';
            });
        });
    }
    
    // Método para agregar animaciones de entrada
    addEntranceAnimations() {
        const elements = document.querySelectorAll('.overview-item, .info-card, .role-card, .function-card, .skill-card');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1
        });
        
        elements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }
    
    // Método para manejar el responsive design
    handleResponsive() {
        const handleResize = () => {
            const width = window.innerWidth;
            const navButtons = document.querySelector('.nav-buttons');
            
            if (width <= 768) {
                navButtons.style.flexDirection = 'column';
                navButtons.style.alignItems = 'center';
            } else {
                navButtons.style.flexDirection = 'row';
                navButtons.style.alignItems = 'stretch';
            }
        };
        
        window.addEventListener('resize', handleResize);
        handleResize(); // Ejecutar al cargar
    }
    
    // Método para inicializar funcionalidades adicionales
    initializeAdditionalFeatures() {
        // Agregar animaciones de entrada
        this.addEntranceAnimations();
        
        // Manejar responsive design
        this.handleResponsive();
        
        // Agregar funcionalidad de búsqueda (si se implementa)
        this.setupSearchFunctionality();
    }
    
    setupSearchFunctionality() {
        // Aquí se puede implementar funcionalidad de búsqueda
        console.log('Funcionalidad de búsqueda lista para implementar');
    }
}

// Inicializar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    const app = new BusinessContinuityApp();
    app.initializeAdditionalFeatures();
    
    // Agregar funcionalidad de teclas de acceso rápido
    document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + número para navegar a secciones
        if ((e.ctrlKey || e.metaKey) && e.key >= '1' && e.key <= '6') {
            const sections = ['introduccion', 'planificacion', 'recuperacion', 'pruebas', 'mantenimiento', 'overview'];
            const sectionIndex = parseInt(e.key) - 1;
            if (sections[sectionIndex]) {
                app.switchSection(sections[sectionIndex]);
            }
        }
        
        // Ctrl/Cmd + 0 para volver al inicio
        if ((e.ctrlKey || e.metaKey) && e.key === '0') {
            e.preventDefault();
            window.location.href = '../index.html';
        }
    });
    
    // Agregar tooltips informativos
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', (e) => {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = e.target.dataset.tooltip;
            document.body.appendChild(tooltip);
            
            const rect = e.target.getBoundingClientRect();
            tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
            tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
        });
        
        element.addEventListener('mouseleave', () => {
            const tooltip = document.querySelector('.tooltip');
            if (tooltip) {
                tooltip.remove();
            }
        });
    });
});

// Estilos adicionales para tooltips
const tooltipStyles = `
    .tooltip {
        position: fixed;
        background: rgba(0,0,0,0.8);
        color: white;
        padding: 8px 12px;
        border-radius: 6px;
        font-size: 12px;
        z-index: 1000;
        pointer-events: none;
        max-width: 200px;
        text-align: center;
    }
`;

// Agregar estilos de tooltip al documento
const styleSheet = document.createElement('style');
styleSheet.textContent = tooltipStyles;
document.head.appendChild(styleSheet);
