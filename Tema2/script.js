// Configuración de la aplicación
const APP_CONFIG = {
    sections: {
        overview: {
            title: "GESTIÓN DE RIESGOS TI",
            subtitle: "Agenda Completa - Tema 2: Los 5 Componentes Principales",
            icon: "fas fa-sitemap"
        },
        introduccion: {
            title: "INTRODUCCIÓN A RIESGOS TI",
            subtitle: "Conceptos básicos y fundamentos de la gestión de riesgos",
            icon: "fas fa-info-circle"
        },
        identificacion: {
            title: "IDENTIFICACIÓN DE RIESGOS",
            subtitle: "Métodos y técnicas para identificar riesgos tecnológicos",
            icon: "fas fa-search"
        },
        analisis: {
            title: "ANÁLISIS DE RIESGOS",
            subtitle: "Evaluación cualitativa y cuantitativa de riesgos",
            icon: "fas fa-chart-line"
        },
        evaluacion: {
            title: "EVALUACIÓN DE RIESGOS",
            subtitle: "Priorización y clasificación de riesgos identificados",
            icon: "fas fa-balance-scale"
        },
        control: {
            title: "CONTROL Y MITIGACIÓN",
            subtitle: "Estrategias y controles para gestionar riesgos",
            icon: "fas fa-cogs"
        }
    }
};

// Clase principal de la aplicación
class RiskManagementApp {
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
            case 'identificacion':
                this.showIdentificacionContent();
                break;
            case 'analisis':
                this.showAnalisisContent();
                break;
            case 'evaluacion':
                this.showEvaluacionContent();
                break;
            case 'control':
                this.showControlContent();
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
                            <h3>INTRODUCCIÓN A RIESGOS TI</h3>
                            <p>Conceptos básicos y fundamentos de la gestión de riesgos tecnológicos</p>
                        </div>
                        <div class="overview-item" data-section="identificacion">
                            <div class="overview-icon">
                                <i class="fas fa-search"></i>
                            </div>
                            <h3>IDENTIFICACIÓN DE RIESGOS</h3>
                            <p>Métodos y técnicas para identificar riesgos tecnológicos en la organización</p>
                        </div>
                        <div class="overview-item" data-section="analisis">
                            <div class="overview-icon">
                                <i class="fas fa-chart-line"></i>
                            </div>
                            <h3>ANÁLISIS DE RIESGOS</h3>
                            <p>Evaluación cualitativa y cuantitativa de los riesgos identificados</p>
                        </div>
                        <div class="overview-item" data-section="evaluacion">
                            <div class="overview-icon">
                                <i class="fas fa-balance-scale"></i>
                            </div>
                            <h3>EVALUACIÓN DE RIESGOS</h3>
                            <p>Priorización y clasificación de riesgos según su impacto y probabilidad</p>
                        </div>
                        <div class="overview-item" data-section="control">
                            <div class="overview-icon">
                                <i class="fas fa-cogs"></i>
                            </div>
                            <h3>CONTROL Y MITIGACIÓN</h3>
                            <p>Estrategias y controles para gestionar y mitigar los riesgos identificados</p>
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
                            ¿Qué es el Riesgo TI?
                        </h3>
                        <div class="info-cards">
                            <div class="info-card">
                                <h4>Definición</h4>
                                <p>Posibilidad de que ocurra un evento que tenga un impacto negativo en los objetivos de la organización</p>
                            </div>
                            <div class="info-card">
                                <h4>Componentes</h4>
                                <p>Amenaza, Vulnerabilidad, Probabilidad de ocurrencia e Impacto potencial</p>
                            </div>
                            <div class="info-card">
                                <h4>Objetivo</h4>
                                <p>Identificar, evaluar y controlar riesgos para proteger los activos de información</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="content-section">
                        <h3 class="section-heading">
                            <i class="fas fa-lightbulb me-2"></i>
                            Importancia de la Gestión de Riesgos
                        </h3>
                        <div class="quote-box">
                            <p>La gestión de riesgos TI es fundamental para proteger los activos de información, garantizar la continuidad del negocio y cumplir con las regulaciones aplicables.</p>
                        </div>
                        <div class="key-points">
                            <div class="point">
                                <i class="fas fa-check-circle me-2"></i>
                                <span>Protección de activos críticos</span>
                            </div>
                            <div class="point">
                                <i class="fas fa-check-circle me-2"></i>
                                <span>Cumplimiento regulatorio</span>
                            </div>
                            <div class="point">
                                <i class="fas fa-check-circle me-2"></i>
                                <span>Continuidad del negocio</span>
                            </div>
                            <div class="point">
                                <i class="fas fa-check-circle me-2"></i>
                                <span>Reducción de pérdidas financieras</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.getElementById('dynamicContent').innerHTML = content;
    }
    
    showIdentificacionContent() {
        const content = `
            <div class="row">
                <div class="col-md-8">
                    <div class="content-section">
                        <h3 class="section-heading">
                            <i class="fas fa-search me-2"></i>
                            Métodos de Identificación
                        </h3>
                        <div class="role-cards">
                            <div class="role-card">
                                <div class="role-icon">
                                    <i class="fas fa-users"></i>
                                </div>
                                <div class="role-content">
                                    <h4>Entrevistas y Workshops</h4>
                                    <p>Reuniones con stakeholders para identificar riesgos desde diferentes perspectivas</p>
                                </div>
                            </div>
                            <div class="role-card">
                                <div class="role-icon">
                                    <i class="fas fa-file-alt"></i>
                                </div>
                                <div class="role-content">
                                    <h4>Revisión de Documentación</h4>
                                    <p>Análisis de políticas, procedimientos y reportes de incidentes anteriores</p>
                                </div>
                            </div>
                            <div class="role-card">
                                <div class="role-icon">
                                    <i class="fas fa-tools"></i>
                                </div>
                                <div class="role-content">
                                    <h4>Herramientas Automatizadas</h4>
                                    <p>Software de análisis de vulnerabilidades y escaneo de sistemas</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="content-section">
                        <h3 class="section-heading">
                            <i class="fas fa-list me-2"></i>
                            Categorías de Riesgos
                        </h3>
                        <div class="sub-section-box">
                            <div class="characteristics-list">
                                <div class="characteristic-item">
                                    <div class="char-icon">
                                        <i class="fas fa-virus"></i>
                                    </div>
                                    <div class="char-content">
                                        <h4>Riesgos de Seguridad</h4>
                                        <p>Malware, phishing, ataques cibernéticos</p>
                                    </div>
                                </div>
                                <div class="characteristic-item">
                                    <div class="char-icon">
                                        <i class="fas fa-server"></i>
                                    </div>
                                    <div class="char-content">
                                        <h4>Riesgos Operacionales</h4>
                                        <p>Fallos de sistemas, pérdida de datos</p>
                                    </div>
                                </div>
                                <div class="characteristic-item">
                                    <div class="char-icon">
                                        <i class="fas fa-gavel"></i>
                                    </div>
                                    <div class="char-content">
                                        <h4>Riesgos de Cumplimiento</h4>
                                        <p>Incumplimiento de regulaciones</p>
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
    
    showAnalisisContent() {
        const content = `
            <div class="row">
                <div class="col-md-6">
                    <div class="content-section">
                        <h3 class="section-heading">
                            <i class="fas fa-chart-bar me-2"></i>
                            Análisis Cualitativo
                        </h3>
                        <div class="sub-section-box">
                            <div class="function-cards">
                                <div class="function-card">
                                    <h4>Matriz de Riesgos</h4>
                                    <ul>
                                        <li>Probabilidad: Baja, Media, Alta</li>
                                        <li>Impacto: Bajo, Medio, Alto</li>
                                        <li>Clasificación por colores</li>
                                        <li>Priorización visual</li>
                                    </ul>
                                </div>
                                <div class="function-card">
                                    <h4>Escalas de Evaluación</h4>
                                    <ul>
                                        <li>Escala 1-5 para probabilidad</li>
                                        <li>Escala 1-5 para impacto</li>
                                        <li>Cálculo de nivel de riesgo</li>
                                        <li>Umbrales de aceptación</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="content-section">
                        <h3 class="section-heading">
                            <i class="fas fa-calculator me-2"></i>
                            Análisis Cuantitativo
                        </h3>
                        <div class="sub-section-box">
                            <div class="objectives-list">
                                <div class="objective-item">
                                    <div class="obj-icon">
                                        <i class="fas fa-dollar-sign"></i>
                                    </div>
                                    <div class="obj-content">
                                        <h4>Valor Monetario Esperado</h4>
                                        <p>Cálculo del impacto financiero potencial</p>
                                    </div>
                                </div>
                                <div class="objective-item">
                                    <div class="obj-icon">
                                        <i class="fas fa-percentage"></i>
                                    </div>
                                    <div class="obj-content">
                                        <h4>Probabilidad Estadística</h4>
                                        <p>Análisis basado en datos históricos</p>
                                    </div>
                                </div>
                                <div class="objective-item">
                                    <div class="obj-icon">
                                        <i class="fas fa-clock"></i>
                                    </div>
                                    <div class="obj-content">
                                        <h4>Análisis de Frecuencia</h4>
                                        <p>Evaluación de la recurrencia de eventos</p>
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
    
    showEvaluacionContent() {
        const content = `
            <div class="row">
                <div class="col-md-6">
                    <div class="content-section">
                        <h3 class="section-heading">
                            <i class="fas fa-sort me-2"></i>
                            Criterios de Evaluación
                        </h3>
                        <div class="sub-section-box">
                            <div class="characteristics-list">
                                <div class="characteristic-item">
                                    <div class="char-icon">
                                        <i class="fas fa-exclamation-triangle"></i>
                                    </div>
                                    <div class="char-content">
                                        <h4>Riesgo Crítico</h4>
                                        <p>Alta probabilidad y alto impacto - Requiere acción inmediata</p>
                                    </div>
                                </div>
                                <div class="characteristic-item">
                                    <div class="char-icon">
                                        <i class="fas fa-exclamation-circle"></i>
                                    </div>
                                    <div class="char-content">
                                        <h4>Riesgo Alto</h4>
                                        <p>Alta probabilidad o alto impacto - Requiere plan de mitigación</p>
                                    </div>
                                </div>
                                <div class="characteristic-item">
                                    <div class="char-icon">
                                        <i class="fas fa-info-circle"></i>
                                    </div>
                                    <div class="char-content">
                                        <h4>Riesgo Medio</h4>
                                        <p>Probabilidad e impacto moderados - Monitoreo regular</p>
                                    </div>
                                </div>
                                <div class="characteristic-item">
                                    <div class="char-icon">
                                        <i class="fas fa-check-circle"></i>
                                    </div>
                                    <div class="char-content">
                                        <h4>Riesgo Bajo</h4>
                                        <p>Baja probabilidad y bajo impacto - Aceptable</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="content-section">
                        <h3 class="section-heading">
                            <i class="fas fa-tasks me-2"></i>
                            Proceso de Evaluación
                        </h3>
                        <div class="sub-section-box">
                            <div class="org-chart">
                                <div class="org-level">1. Identificación</div>
                                <div class="org-arrow">↓</div>
                                <div class="org-level">2. Análisis</div>
                                <div class="org-arrow">↓</div>
                                <div class="org-level">3. Evaluación</div>
                                <div class="org-arrow">↓</div>
                                <div class="org-level">4. Tratamiento</div>
                                <div class="org-arrow">↓</div>
                                <div class="org-level">5. Monitoreo</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.getElementById('dynamicContent').innerHTML = content;
    }
    
    showControlContent() {
        const content = `
            <div class="row">
                <div class="col-md-4">
                    <div class="content-section">
                        <h3 class="section-heading">
                            <i class="fas fa-shield-alt me-2"></i>
                            Estrategias de Control
                        </h3>
                        <div class="skills-cards">
                            <div class="skill-card">
                                <h4>Evitar</h4>
                                <p>Eliminar la actividad que genera el riesgo</p>
                            </div>
                            <div class="skill-card">
                                <h4>Transferir</h4>
                                <p>Transferir el riesgo a un tercero (seguros)</p>
                            </div>
                            <div class="skill-card">
                                <h4>Mitigar</h4>
                                <p>Reducir la probabilidad o impacto del riesgo</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="content-section">
                        <h3 class="section-heading">
                            <i class="fas fa-cogs me-2"></i>
                            Tipos de Controles
                        </h3>
                        <div class="skills-cards">
                            <div class="skill-card">
                                <h4>Controles Preventivos</h4>
                                <p>Evitan que ocurra el evento de riesgo</p>
                            </div>
                            <div class="skill-card">
                                <h4>Controles Detectivos</h4>
                                <p>Identifican cuando ocurre un evento</p>
                            </div>
                            <div class="skill-card">
                                <h4>Controles Correctivos</h4>
                                <p>Minimizan el impacto después del evento</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="content-section">
                        <h3 class="section-heading">
                            <i class="fas fa-chart-line me-2"></i>
                            Monitoreo Continuo
                        </h3>
                        <div class="certifications-list">
                            <div class="cert-item">
                                <h4>Indicadores KRI</h4>
                                <p>Key Risk Indicators para seguimiento</p>
                            </div>
                            <div class="cert-item">
                                <h4>Reportes Periódicos</h4>
                                <p>Evaluación regular del estado de riesgos</p>
                            </div>
                            <div class="cert-item">
                                <h4>Actualización de Matriz</h4>
                                <p>Revisión y actualización de riesgos</p>
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
    const app = new RiskManagementApp();
    app.initializeAdditionalFeatures();
    
    // Agregar funcionalidad de teclas de acceso rápido
    document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + número para navegar a secciones
        if ((e.ctrlKey || e.metaKey) && e.key >= '1' && e.key <= '6') {
            const sections = ['introduccion', 'identificacion', 'analisis', 'evaluacion', 'control', 'overview'];
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
