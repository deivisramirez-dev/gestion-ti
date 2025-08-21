// Configuración de la aplicación
const APP_CONFIG = {
    sections: {
        overview: {
            title: "LA AUDITORÍA INFORMÁTICA",
            subtitle: "Agenda Completa - Tema 1: Los 5 Componentes Principales",
            icon: "fas fa-sitemap"
        },
        introduccion: {
            title: "INTRODUCCIÓN Y OBJETIVOS",
            subtitle: "Fundamentos básicos y propósitos de la auditoría informática",
            icon: "fas fa-info-circle"
        },
        rol: {
            title: "EL ROL DE LA AUDITORÍA INFORMÁTICA",
            subtitle: "Funciones y responsabilidades en la organización",
            icon: "fas fa-user-tie"
        },
        definicion: {
            title: "DEFINICIÓN Y CARACTERÍSTICAS DE LA AUDITORÍA INFORMÁTICA",
            subtitle: "Conceptos básicos y elementos distintivos",
            icon: "fas fa-search"
        },
        funciones: {
            title: "FUNCIONES Y OBJETIVOS DE LA AUDITORÍA INFORMÁTICA",
            subtitle: "Propósitos específicos y alcance de trabajo",
            icon: "fas fa-cogs"
        },
        habilidades: {
            title: "HABILIDADES DEL AUDITOR INFORMÁTICO",
            subtitle: "Competencias técnicas, profesionales y personales",
            icon: "fas fa-graduation-cap"
        }
    }
};

// Clase principal de la aplicación
class AuditApp {
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
            case 'rol':
                this.showRolContent();
                break;
            case 'definicion':
                this.showDefinicionContent();
                break;
            case 'funciones':
                this.showFuncionesContent();
                break;
            case 'habilidades':
                this.showHabilidadesContent();
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
                            <h3>INTRODUCCIÓN Y OBJETIVOS</h3>
                            <p>Fundamentos básicos y propósitos de la auditoría informática</p>
                        </div>
                        <div class="overview-item" data-section="rol">
                            <div class="overview-icon">
                                <i class="fas fa-user-tie"></i>
                            </div>
                            <h3>EL ROL DE LA AUDITORÍA INFORMÁTICA</h3>
                            <p>Funciones y responsabilidades en la organización</p>
                        </div>
                        <div class="overview-item" data-section="definicion">
                            <div class="overview-icon">
                                <i class="fas fa-search"></i>
                            </div>
                            <h3>DEFINICIÓN Y CARACTERÍSTICAS DE LA AUDITORÍA INFORMÁTICA</h3>
                            <p>Conceptos básicos y elementos distintivos</p>
                        </div>
                        <div class="overview-item" data-section="funciones">
                            <div class="overview-icon">
                                <i class="fas fa-cogs"></i>
                            </div>
                            <h3>FUNCIONES Y OBJETIVOS DE LA AUDITORÍA INFORMÁTICA</h3>
                            <p>Propósitos específicos y alcance de trabajo</p>
                        </div>
                        <div class="overview-item" data-section="habilidades">
                            <div class="overview-icon">
                                <i class="fas fa-graduation-cap"></i>
                            </div>
                            <h3>HABILIDADES DEL AUDITOR INFORMÁTICO</h3>
                            <p>Competencias técnicas, profesionales y personales</p>
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
                            Objetivos Principales
                        </h3>
                        <div class="info-cards">
                            <div class="info-card">
                                <h4>Evaluación</h4>
                                <p>Revisar la eficiencia y efectividad de los sistemas informáticos</p>
                            </div>
                            <div class="info-card">
                                <h4>Verificación</h4>
                                <p>Confirmar el cumplimiento de políticas y procedimientos</p>
                            </div>
                            <div class="info-card">
                                <h4>Control</h4>
                                <p>Asegurar la protección de activos informáticos</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="content-section">
                        <h3 class="section-heading">
                            <i class="fas fa-lightbulb me-2"></i>
                            Introducción
                        </h3>
                        <div class="quote-box">
                            <p>La auditoría informática es un proceso sistemático que evalúa y verifica los sistemas de información, controles y procedimientos de una organización para determinar su eficiencia, efectividad, confiabilidad y seguridad.</p>
                        </div>
                        <div class="key-points">
                            <div class="point">
                                <i class="fas fa-check-circle me-2"></i>
                                <span>Proceso sistemático y objetivo</span>
                            </div>
                            <div class="point">
                                <i class="fas fa-check-circle me-2"></i>
                                <span>Evaluación independiente</span>
                            </div>
                            <div class="point">
                                <i class="fas fa-check-circle me-2"></i>
                                <span>Enfoque en controles y procedimientos</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.getElementById('dynamicContent').innerHTML = content;
    }
    
    showRolContent() {
        const content = `
            <div class="row">
                <div class="col-md-8">
                    <div class="content-section">
                        <h3 class="section-heading">
                            <i class="fas fa-users me-2"></i>
                            Funciones en la Organización
                        </h3>
                        <div class="role-cards">
                            <div class="role-card">
                                <div class="role-icon">
                                    <i class="fas fa-shield-alt"></i>
                                </div>
                                <div class="role-content">
                                    <h4>Control Interno</h4>
                                    <p>Evaluar y mejorar los controles internos de sistemas informáticos</p>
                                </div>
                            </div>
                            <div class="role-card">
                                <div class="role-icon">
                                    <i class="fas fa-chart-line"></i>
                                </div>
                                <div class="role-content">
                                    <h4>Gestión de Riesgos</h4>
                                    <p>Identificar y evaluar riesgos tecnológicos</p>
                                </div>
                            </div>
                            <div class="role-card">
                                <div class="role-icon">
                                    <i class="fas fa-balance-scale"></i>
                                </div>
                                <div class="role-content">
                                    <h4>Cumplimiento</h4>
                                    <p>Verificar el cumplimiento de normativas y estándares</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="content-section">
                        <h3 class="section-heading">
                            <i class="fas fa-sitemap me-2"></i>
                            Posición Organizacional
                        </h3>
                        <div class="org-chart">
                            <div class="org-level">Directiva</div>
                            <div class="org-arrow">↓</div>
                            <div class="org-level">Auditoría Informática</div>
                            <div class="org-arrow">↓</div>
                            <div class="org-level">Departamentos TI</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.getElementById('dynamicContent').innerHTML = content;
    }
    
    showDefinicionContent() {
        const content = `
            <div class="row">
                <div class="col-md-6">
                    <div class="content-section">
                        <h3 class="section-heading">
                            <i class="fas fa-quote-left me-2"></i>
                            Definición
                        </h3>
                        <div class="sub-section-box">
                            <div class="quote-box">
                                <p>"Proceso sistemático, objetivo e independiente de evaluación y verificación de los sistemas de información, controles y procedimientos de una organización, con el propósito de determinar su eficiencia, efectividad, confiabilidad y seguridad."</p>
                            </div>
                            <div class="definition-details">
                                <h4>Elementos Clave:</h4>
                                <ul>
                                    <li><strong>Proceso sistemático:</strong> Método estructurado y planificado</li>
                                    <li><strong>Objetivo:</strong> Basado en hechos y evidencias</li>
                                    <li><strong>Independiente:</strong> Libre de influencias externas</li>
                                    <li><strong>Evaluación y verificación:</strong> Análisis exhaustivo de sistemas</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="content-section">
                        <h3 class="section-heading">
                            <i class="fas fa-star me-2"></i>
                            Características
                        </h3>
                        <div class="sub-section-box">
                            <div class="characteristics-list">
                                <div class="characteristic-item">
                                    <div class="char-icon">
                                        <i class="fas fa-check"></i>
                                    </div>
                                    <div class="char-content">
                                        <h4>Sistemática</h4>
                                        <p>Método estructurado y planificado</p>
                                    </div>
                                </div>
                                <div class="characteristic-item">
                                    <div class="char-icon">
                                        <i class="fas fa-check"></i>
                                    </div>
                                    <div class="char-content">
                                        <h4>Objetiva</h4>
                                        <p>Basada en hechos y evidencias</p>
                                    </div>
                                </div>
                                <div class="characteristic-item">
                                    <div class="char-icon">
                                        <i class="fas fa-check"></i>
                                    </div>
                                    <div class="char-content">
                                        <h4>Independiente</h4>
                                        <p>Libre de influencias externas</p>
                                    </div>
                                </div>
                                <div class="characteristic-item">
                                    <div class="char-icon">
                                        <i class="fas fa-check"></i>
                                    </div>
                                    <div class="char-content">
                                        <h4>Profesional</h4>
                                        <p>Ejecutada por personal calificado</p>
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
    
    showFuncionesContent() {
        const content = `
            <div class="row">
                <div class="col-md-6">
                    <div class="content-section">
                        <h3 class="section-heading">
                            <i class="fas fa-tasks me-2"></i>
                            Funciones
                        </h3>
                        <div class="sub-section-box">
                            <div class="function-cards">
                                <div class="function-card">
                                    <h4>Evaluación de Controles</h4>
                                    <ul>
                                        <li>Revisar controles de acceso</li>
                                        <li>Evaluar controles de seguridad</li>
                                        <li>Verificar controles de integridad</li>
                                        <li>Validar controles de disponibilidad</li>
                                    </ul>
                                </div>
                                <div class="function-card">
                                    <h4>Análisis de Riesgos</h4>
                                    <ul>
                                        <li>Identificar vulnerabilidades</li>
                                        <li>Evaluar amenazas</li>
                                        <li>Calcular impacto potencial</li>
                                        <li>Recomendar controles</li>
                                    </ul>
                                </div>
                                <div class="function-card">
                                    <h4>Verificación de Cumplimiento</h4>
                                    <ul>
                                        <li>Revisar políticas organizacionales</li>
                                        <li>Verificar estándares técnicos</li>
                                        <li>Validar normativas legales</li>
                                        <li>Evaluar mejores prácticas</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="content-section">
                        <h3 class="section-heading">
                            <i class="fas fa-bullseye me-2"></i>
                            Objetivos
                        </h3>
                        <div class="sub-section-box">
                            <div class="objectives-list">
                                <div class="objective-item">
                                    <div class="obj-icon">
                                        <i class="fas fa-shield-alt"></i>
                                    </div>
                                    <div class="obj-content">
                                        <h4>Seguridad</h4>
                                        <p>Proteger activos informáticos y datos críticos</p>
                                    </div>
                                </div>
                                <div class="objective-item">
                                    <div class="obj-icon">
                                        <i class="fas fa-chart-line"></i>
                                    </div>
                                    <div class="obj-content">
                                        <h4>Eficiencia</h4>
                                        <p>Optimizar procesos y recursos tecnológicos</p>
                                    </div>
                                </div>
                                <div class="objective-item">
                                    <div class="obj-icon">
                                        <i class="fas fa-balance-scale"></i>
                                    </div>
                                    <div class="obj-content">
                                        <h4>Cumplimiento</h4>
                                        <p>Verificar normativas y estándares aplicables</p>
                                    </div>
                                </div>
                                <div class="objective-item">
                                    <div class="obj-icon">
                                        <i class="fas fa-lightbulb"></i>
                                    </div>
                                    <div class="obj-content">
                                        <h4>Mejora Continua</h4>
                                        <p>Identificar oportunidades de mejora</p>
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
    
    showHabilidadesContent() {
        const content = `
            <div class="row">
                <div class="col-md-4">
                    <div class="content-section">
                        <h3 class="section-heading">
                            <i class="fas fa-brain me-2"></i>
                            Habilidades Técnicas
                        </h3>
                        <div class="skills-cards">
                            <div class="skill-card">
                                <h4>Sistemas Operativos</h4>
                                <p>Conocimiento profundo de Windows, Linux, Unix</p>
                            </div>
                            <div class="skill-card">
                                <h4>Redes</h4>
                                <p>Protocolos, seguridad de redes, firewalls</p>
                            </div>
                            <div class="skill-card">
                                <h4>Bases de Datos</h4>
                                <p>SQL, Oracle, SQL Server, MySQL</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="content-section">
                        <h3 class="section-heading">
                            <i class="fas fa-user-friends me-2"></i>
                            Habilidades Profesionales
                        </h3>
                        <div class="skills-cards">
                            <div class="skill-card">
                                <h4>Comunicación</h4>
                                <p>Capacidad de explicar conceptos técnicos</p>
                            </div>
                            <div class="skill-card">
                                <h4>Análisis</h4>
                                <p>Pensamiento crítico y analítico</p>
                            </div>
                            <div class="skill-card">
                                <h4>Ética</h4>
                                <p>Integridad y confidencialidad</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="content-section">
                        <h3 class="section-heading">
                            <i class="fas fa-certificate me-2"></i>
                            Certificaciones
                        </h3>
                        <div class="certifications-list">
                            <div class="cert-item">
                                <h4>CISA</h4>
                                <p>Certified Information Systems Auditor</p>
                            </div>
                            <div class="cert-item">
                                <h4>CISM</h4>
                                <p>Certified Information Security Manager</p>
                            </div>
                            <div class="cert-item">
                                <h4>CISSP</h4>
                                <p>Certified Information Systems Security Professional</p>
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
        const cards = document.querySelectorAll('.level-card, .type-card, .quote-box');
        
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
        
        // Efectos para los marcadores de timeline
        const timelineMarkers = document.querySelectorAll('.timeline-marker');
        
        timelineMarkers.forEach(marker => {
            marker.addEventListener('mouseenter', () => {
                marker.style.transform = 'scale(1.1)';
            });
            
            marker.addEventListener('mouseleave', () => {
                marker.style.transform = 'scale(1)';
            });
        });
    }
    
    // Método para agregar animaciones de entrada
    addEntranceAnimations() {
        const elements = document.querySelectorAll('.level-card, .type-card, .timeline-item');
        
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
    const app = new AuditApp();
    app.initializeAdditionalFeatures();
    
    // Agregar funcionalidad de teclas de acceso rápido
    document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + número para navegar a secciones
        if ((e.ctrlKey || e.metaKey) && e.key >= '1' && e.key <= '6') {
            const sections = ['fundamentos', 'metodologias', 'tipos', 'herramientas', 'certificaciones', 'dashboard'];
            const sectionIndex = parseInt(e.key) - 1;
            if (sections[sectionIndex]) {
                app.switchSection(sections[sectionIndex]);
            }
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
