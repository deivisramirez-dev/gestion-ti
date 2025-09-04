// Configuración de la aplicación
const APP_CONFIG = {
    sections: {
        overview: {
            title: "GOBIERNO TI - CERTIFICACIÓN CISA",
            subtitle: "Vista General - Tema 5: Certified Information Systems Auditor",
            icon: "fas fa-award"
        },
        introduccion: {
            title: "INTRODUCCIÓN Y OBJETIVOS",
            subtitle: "¿Qué es la certificación CISA y cuáles son sus objetivos?",
            icon: "fas fa-info-circle"
        },
        proceso: {
            title: "PROCESO DE AUDITORÍA DE SISTEMAS",
            subtitle: "Fases y componentes clave del proceso de auditoría",
            icon: "fas fa-tasks"
        },
        gobierno: {
            title: "GOBIERNO Y GESTIÓN DE TI",
            subtitle: "Alineación estratégica y gestión de recursos tecnológicos",
            icon: "fas fa-sitemap"
        },
        adquisicion: {
            title: "ADQUISICIÓN, DESARROLLO E IMPLEMENTACIÓN",
            subtitle: "Ciclo de vida de los sistemas de información",
            icon: "fas fa-cogs"
        },
        operaciones: {
            title: "OPERACIONES Y MANTENIMIENTO",
            subtitle: "Gestión del servicio y soporte de sistemas de información",
            icon: "fas fa-rocket"
        },
        proteccion: {
            title: "PROTECCIÓN DE ACTIVOS DE INFORMACIÓN",
            subtitle: "Seguridad, confidencialidad, integridad y disponibilidad",
            icon: "fas fa-shield-alt"
        }
    }
};

// Clase principal de la aplicación
class CisaApp {
    constructor() {
        this.currentSection = 'overview';
        this.initializeApp();
        this.setupEventListeners();
    }
    
    initializeApp() {
        this.updateActiveSection('overview');
        this.loadSectionContent('overview');
    }
    
    setupEventListeners() {
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const section = e.currentTarget.dataset.section;
                this.switchSection(section);
            });
        });
        
        this.setupKeyboardShortcuts();
    }
    
    switchSection(sectionName) {
        this.updateActiveSection(sectionName);
        this.loadSectionContent(sectionName);
        this.currentSection = sectionName;
    }
    
    updateActiveSection(sectionName) {
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        const activeBtn = document.querySelector(`[data-section="${sectionName}"]`);
        if (activeBtn) {
            activeBtn.classList.add('active');
        }
    }
    
    loadSectionContent(sectionName) {
        const section = APP_CONFIG.sections[sectionName];
        if (!section) return;
        
        const titleElement = document.getElementById('sectionTitle');
        const subtitleElement = document.getElementById('sectionSubtitle');
        
        if (titleElement) {
            titleElement.innerHTML = `<i class="${section.icon} me-3"></i>${section.title}`;
        }
        
        if (subtitleElement) {
            subtitleElement.textContent = section.subtitle;
        }
        
        const contentContainer = document.getElementById('dynamicContent');
        if (contentContainer) {
            contentContainer.innerHTML = this.getSectionContent(sectionName);
            this.applyFadeInAnimation(contentContainer);
        }
    }
    
    getSectionContent(sectionName) {
        switch(sectionName) {
            case 'overview':
                return this.getOverviewContent();
            case 'introduccion':
                return this.getIntroduccionContent();
            case 'proceso':
                return this.getProcesoContent();
            case 'gobierno':
                return this.getGobiernoContent();
            case 'adquisicion':
                return this.getAdquisicionContent();
            case 'operaciones':
                return this.getOperacionesContent();
            case 'proteccion':
                return this.getProteccionContent();
            default:
                return '<p>Contenido no disponible</p>';
        }
    }
    
    getOverviewContent() {
        return `
            <div class="content-card fade-in">
                <h3><i class="fas fa-award me-2"></i>¿Qué es la Certificación CISA?</h3>
                <p>La certificación CISA (Certified Information Systems Auditor) es una credencial de renombre mundial para profesionales de auditoría, control y seguridad de sistemas de información. Otorgada por ISACA, demuestra la capacidad del titular para auditar, controlar, monitorear y evaluar los sistemas de información y negocios de una organización.</p>
            </div>
            
            <div class="overview-grid">
                <div class="overview-card fade-in" onclick="app.switchSection('introduccion')">
                    <i class="fas fa-info-circle"></i>
                    <h4>Introducción</h4>
                    <p>Conoce qué es CISA y por qué es una de las certificaciones más demandadas en el ámbito de la auditoría de TI.</p>
                </div>
                <div class="overview-card fade-in" onclick="app.switchSection('proceso')">
                    <i class="fas fa-tasks"></i>
                    <h4>Proceso de Auditoría</h4>
                    <p>Explora las fases y estándares que rigen el proceso de auditoría de sistemas de información.</p>
                </div>
                <div class="overview-card fade-in" onclick="app.switchSection('gobierno')">
                    <i class="fas fa-sitemap"></i>
                    <h4>Gobierno y Gestión TI</h4>
                    <p>Aprende sobre la importancia de alinear la estrategia de TI con los objetivos del negocio.</p>
                </div>
                <div class="overview-card fade-in" onclick="app.switchSection('adquisicion')">
                    <i class="fas fa-cogs"></i>
                    <h4>Adquisición y Desarrollo</h4>
                    <p>Descubre las mejores prácticas para adquirir, desarrollar e implementar sistemas de información.</p>
                </div>
                <div class="overview-card fade-in" onclick="app.switchSection('operaciones')">
                    <i class="fas fa-rocket"></i>
                    <h4>Operaciones</h4>
                    <p>Entiende la gestión de operaciones, mantenimiento y servicios de los sistemas de información.</p>
                </div>
                <div class="overview-card fade-in" onclick="app.switchSection('proteccion')">
                    <i class="fas fa-shield-alt"></i>
                    <h4>Protección de Activos</h4>
                    <p>Analiza las políticas y controles para garantizar la seguridad de los activos de información.</p>
                </div>
            </div>
        `;
    }
    
    getIntroduccionContent() {
        return `
            <div class="content-card fade-in">
                <h3><i class="fas fa-info-circle me-2"></i>¿Qué es la certificación CISA?</h3>
                <p>CISA es una certificación reconocida a nivel mundial, considerada el estándar de oro para los profesionales que auditan, controlan y aseguran los sistemas de información. Demuestra que el titular posee el conocimiento y las habilidades necesarias para identificar vulnerabilidades, asegurar el cumplimiento y evaluar controles en un entorno empresarial.</p>
            </div>
            <div class="content-card fade-in">
                <h3><i class="fas fa-bullseye me-2"></i>Objetivos de la Certificación</h3>
                <ul>
                    <li>Validar la experiencia en auditoría de sistemas de información.</li>
                    <li>Proporcionar una ventaja competitiva y aumentar el valor en el mercado laboral.</li>
                    <li>Demostrar un compromiso con la profesión y el aprendizaje continuo.</li>
                    <li>Asegurar que los profesionales tienen la capacidad de gestionar y gobernar la TI empresarial.</li>
                </ul>
            </div>
        `;
    }

    getProcesoContent() {
        return `
            <div class="content-card fade-in">
                <h3><i class="fas fa-tasks me-2"></i>Proceso de Auditoria de Sistemas de Información</h3>
                <p>Este dominio se enfoca en proporcionar servicios de auditoría de acuerdo con los estándares para ayudar a la organización a proteger y controlar sus sistemas de información. Cubre la planificación, ejecución y reporte de auditorías.</p>
                <ul>
                    <li>Estándares y directrices de auditoría de SI.</li>
                    <li>Planificación y alcance de la auditoría.</li>
                    <li>Ejecución de la auditoría y recopilación de evidencia.</li>
                    <li>Técnicas de muestreo y análisis de datos.</li>
                    <li>Comunicación de resultados y seguimiento.</li>
                </ul>
            </div>
        `;
    }

    getGobiernoContent() {
        return `
            <div class="content-card fade-in">
                <h3><i class="fas fa-sitemap me-2"></i>Gobierno y Gestión TI</h3>
                <p>Este dominio se asegura de que existan las estructuras de liderazgo, organización y procesos necesarios para alcanzar los objetivos y apoyar la estrategia de la organización.</p>
                 <ul>
                    <li>Desarrollo y supervisión de la estrategia de TI.</li>
                    <li>Políticas, estándares y procedimientos de TI.</li>
                    <li>Gestión de la calidad y mejora continua.</li>
                    <li>Gestión de riesgos de TI.</li>
                    <li>Monitoreo del desempeño y la capacidad.</li>
                </ul>
            </div>
        `;
    }

    getAdquisicionContent() {
        return `
            <div class="content-card fade-in">
                <h3><i class="fas fa-cogs me-2"></i>Adquisición, Desarrollo e Implementación de sistemas de información</h3>
                <p>Este dominio garantiza que las prácticas para la adquisición, desarrollo, prueba e implementación de sistemas de información cumplan con las estrategias y objetivos de la organización.</p>
                 <ul>
                    <li>Gestión de proyectos de desarrollo y adquisición.</li>
                    <li>Metodologías de desarrollo de software (Agile, Waterfall, etc.).</li>
                    <li>Pruebas y aseguramiento de la calidad del software.</li>
                    <li>Procesos de gestión del cambio y liberación.</li>
                    <li>Planificación de la capacidad y el rendimiento.</li>
                </ul>
            </div>
        `;
    }

    getOperacionesContent() {
        return `
            <div class="content-card fade-in">
                <h3><i class="fas fa-rocket me-2"></i>Gestión del servicio, operaciones y mantenimiento de sistemas de información</h3>
                <p>Este dominio se asegura de que los procesos de operaciones, mantenimiento y soporte de los sistemas de información cumplan con los objetivos de nivel de servicio de la organización.</p>
                 <ul>
                    <li>Gestión de niveles de servicio (SLAs).</li>
                    <li>Operaciones de TI y gestión de infraestructura.</li>
                    <li>Gestión de incidentes y problemas.</li>
                    <li>Planes de continuidad del negocio (BCP) y recuperación ante desastres (DRP).</li>
                    <li>Mantenimiento de sistemas y gestión de parches.</li>
                </ul>
            </div>
        `;
    }

    getProteccionContent() {
        return `
            <div class="content-card fade-in">
                <h3><i class="fas fa-shield-alt me-2"></i>Protección de los activos de información</h3>
                <p>Este dominio garantiza que la organización cuente con políticas, estándares, procedimientos y controles de seguridad para asegurar la confidencialidad, integridad y disponibilidad de los activos de información.</p>
                 <ul>
                    <li>Políticas y marcos de seguridad de la información (ISO 27001, NIST).</li>
                    <li>Controles de acceso lógicos y físicos.</li>
                    <li>Seguridad de redes y encriptación.</li>
                    <li>Concienciación y formación en seguridad.</li>
                    <li>Respuesta a incidentes de seguridad y forense.</li>
                </ul>
            </div>
        `;
    }
    
    applyFadeInAnimation(container) {
        const elements = container.querySelectorAll('.fade-in');
        elements.forEach((element, index) => {
            element.style.animationDelay = `${index * 0.1}s`;
        });
    }
    
    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (event) => {
            if ((event.ctrlKey || event.metaKey) && (event.key === '0' || event.key === 'h')) {
                event.preventDefault();
                window.location.href = '../index.html';
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    window.app = new CisaApp();
});
