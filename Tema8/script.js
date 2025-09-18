// Configuración de la aplicación
const APP_CONFIG = {
    sections: {
        overview: {
            title: "NORMATIVAS TECNOLÓGICAS DE SEGURIDAD",
            subtitle: "Agenda Completa - Tema 8: ISO 27001 - Sistema de Gestión de Seguridad de la Información",
            icon: "fas fa-sitemap"
        },
        introduccion: {
            title: "INTRODUCCIÓN Y OBJETIVOS",
            subtitle: "Fundamentos del Sistema de Gestión de Seguridad de la Información",
            icon: "fas fa-info-circle"
        },
        sgsi: {
            title: "SISTEMA DE GESTIÓN DE SEGURIDAD DE LA INFORMACIÓN (SGSI)",
            subtitle: "Los 3 pilares fundamentales de la seguridad de la información",
            icon: "fas fa-database"
        },
        anexoSL: {
            title: "ANEXO SL - ESTRUCTURA COMÚN",
            subtitle: "La estructura unificada de todas las normas ISO de sistemas de gestión",
            icon: "fas fa-sitemap"
        },
        iso27001: {
            title: "ISO 27001:2013",
            subtitle: "Las 10 cláusulas del Anexo SL para la certificación",
            icon: "fas fa-certificate"
        },
        iso27002: {
            title: "ISO 27002 - GUÍA DE CONTROLES",
            subtitle: "Los 14 dominios y 114 controles de seguridad",
            icon: "fas fa-list-check"
        },
        implantacion: {
            title: "IMPLANTACIÓN DE UN SGSI",
            subtitle: "Las 9 fases para implementar un sistema de gestión de seguridad",
            icon: "fas fa-cogs"
        }
    }
};

// Clase principal de la aplicación
class ISO27001App {
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
            case 'sgsi':
                this.showSGSIContent();
                break;
            case 'anexoSL':
                this.showAnexoSLContent();
                break;
            case 'iso27001':
                this.showISO27001Content();
                break;
            case 'iso27002':
                this.showISO27002Content();
                break;
            case 'implantacion':
                this.showImplantacionContent();
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
                            <p>Fundamentos del Sistema de Gestión de Seguridad de la Información y sus objetivos principales</p>
                        </div>
                        <div class="overview-item" data-section="sgsi">
                            <div class="overview-icon">
                                <i class="fas fa-database"></i>
                            </div>
                            <h3>SISTEMA DE GESTIÓN SGSI</h3>
                            <p>Los 3 pilares fundamentales: Confidencialidad, Integridad y Disponibilidad</p>
                        </div>
                        <div class="overview-item" data-section="anexoSL">
                            <div class="overview-icon">
                                <i class="fas fa-sitemap"></i>
                            </div>
                            <h3>ANEXO SL</h3>
                            <p>Estructura común de alto nivel para todas las normas ISO de sistemas de gestión</p>
                        </div>
                        <div class="overview-item" data-section="iso27001">
                            <div class="overview-icon">
                                <i class="fas fa-certificate"></i>
                            </div>
                            <h3>ISO 27001:2013</h3>
                            <p>Las 10 cláusulas del Anexo SL para la certificación de sistemas de gestión</p>
                        </div>
                        <div class="overview-item" data-section="iso27002">
                            <div class="overview-icon">
                                <i class="fas fa-list-check"></i>
                            </div>
                            <h3>ISO 27002 - CONTROLES</h3>
                            <p>Los 14 dominios y 114 controles de seguridad de la información</p>
                        </div>
                        <div class="overview-item" data-section="implantacion">
                            <div class="overview-icon">
                                <i class="fas fa-cogs"></i>
                            </div>
                            <h3>IMPLANTACIÓN SGSI</h3>
                            <p>Las 9 fases para implementar un sistema de gestión de seguridad</p>
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
                                <h4>Comprensión del SGSI</h4>
                                <p>Entender el concepto y la importancia de un sistema de gestión de seguridad de la información</p>
                            </div>
                            <div class="info-card">
                                <h4>Descripción ISO 27001</h4>
                                <p>Conocer los principales apartados de la norma ISO 27001:2013</p>
                            </div>
                            <div class="info-card">
                                <h4>Implementación Práctica</h4>
                                <p>Desarrollar la capacidad de implementar un SGSI según la ISO 27001</p>
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
                            <p>La importancia adquirida por la información dentro de cualquier organización ha conducido a las empresas a focalizar su atención hacia la seguridad de estas informaciones dentro de su entorno TI.</p>
                        </div>
                        <div class="key-points">
                            <div class="point">
                                <i class="fas fa-check-circle me-2"></i>
                                <span>La información es un activo empresarial crítico</span>
                            </div>
                            <div class="point">
                                <i class="fas fa-check-circle me-2"></i>
                                <span>Necesidad de proteger contra accesos no autorizados</span>
                            </div>
                            <div class="point">
                                <i class="fas fa-check-circle me-2"></i>
                                <span>Implementación de un SGSI siguiendo ISO 27001</span>
                            </div>
                            <div class="point">
                                <i class="fas fa-check-circle me-2"></i>
                                <span>Guía de apoyo con ISO 27002</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.getElementById('dynamicContent').innerHTML = content;
    }
    
    showSGSIContent() {
        const content = `
            <div class="row">
                <div class="col-md-8">
                    <div class="content-section">
                        <h3 class="section-heading">
                            <i class="fas fa-shield-alt me-2"></i>
                            Los 3 Pilares del SGSI
                        </h3>
                        <div class="pillars-grid">
                            <div class="pillar-card">
                                <div class="pillar-icon">
                                    <i class="fas fa-lock"></i>
                                </div>
                                <h4>Confidencialidad</h4>
                                <p>Los datos son propiedad de la organización y solo pueden utilizarse por personal debidamente autorizado y nunca por terceras personas carentes de autorización.</p>
                            </div>
                            <div class="pillar-card">
                                <div class="pillar-icon">
                                    <i class="fas fa-check-circle"></i>
                                </div>
                                <h4>Integridad</h4>
                                <p>Está enfocada a garantizar la consistencia de la información y que permanece exacta, sin haber sido alterada con fines perniciosos.</p>
                            </div>
                            <div class="pillar-card">
                                <div class="pillar-icon">
                                    <i class="fas fa-power-off"></i>
                                </div>
                                <h4>Disponibilidad</h4>
                                <p>Persigue que solamente las personas que estén autorizadas dispongan de la información en el momento oportuno y bajo el formato que considere preciso.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="content-section">
                        <h3 class="section-heading">
                            <i class="fas fa-quote-left me-2"></i>
                            Definición SGSI
                        </h3>
                        <div class="quote-box">
                            <p>"Una herramienta de gestión que nos va a permitir conocer, gestionar y minimizar los posibles riesgos que atenten contra la seguridad de la información en nuestra empresa"</p>
                        </div>
                        <div class="key-points">
                            <div class="point">
                                <i class="fas fa-check-circle me-2"></i>
                                <span>Proceso sistemático</span>
                            </div>
                            <div class="point">
                                <i class="fas fa-check-circle me-2"></i>
                                <span>Mejora continua</span>
                            </div>
                            <div class="point">
                                <i class="fas fa-check-circle me-2"></i>
                                <span>Basado en riesgos</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.getElementById('dynamicContent').innerHTML = content;
    }
    
    showAnexoSLContent() {
        const content = `
            <div class="row">
                <div class="col-12">
                    <div class="content-section">
                        <h3 class="section-heading">
                            <i class="fas fa-sitemap me-2"></i>
                            ¿Qué es el Anexo SL?
                        </h3>
                        <div class="quote-box">
                            <p>El <strong>Anexo SL</strong> (anteriormente "Anexo L") es una <strong>estructura común de alto nivel</strong> (High Level Structure - HLS) que la Organización Internacional de Normalización (ISO) estableció para <strong>unificar la estructura</strong> de todas las normas de sistemas de gestión.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-6">
                    <div class="content-section">
                        <h3 class="section-heading">
                            <i class="fas fa-bullseye me-2"></i>
                            Objetivos del Anexo SL
                        </h3>
                        <div class="info-cards">
                            <div class="info-card">
                                <h4><i class="fas fa-universal-access me-2"></i>Estandarización</h4>
                                <ul>
                                    <li><strong>Estructura Común:</strong> Todas las normas ISO siguen la misma estructura</li>
                                    <li><strong>Consistencia:</strong> Facilita la comprensión y aplicación</li>
                                    <li><strong>Integración:</strong> Permite combinar diferentes sistemas de gestión</li>
                                </ul>
                            </div>
                            <div class="info-card">
                                <h4><i class="fas fa-cogs me-2"></i>Beneficios Prácticos</h4>
                                <ul>
                                    <li><strong>Facilita la Implementación:</strong> Múltiples normas más fácilmente</li>
                                    <li><strong>Reduce la Complejidad:</strong> Una vez que conoces una norma, entiendes todas</li>
                                    <li><strong>Mejora la Eficiencia:</strong> Auditores trabajan con el mismo enfoque</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="content-section">
                        <h3 class="section-heading">
                            <i class="fas fa-list-ol me-2"></i>
                            Estructura del Anexo SL (10 Cláusulas)
                        </h3>
                        <div class="clauses-list">
                            <div class="clause-item">
                                <div class="clause-number">1</div>
                                <div class="clause-content">
                                    <h4>Alcance</h4>
                                </div>
                            </div>
                            <div class="clause-item">
                                <div class="clause-number">2</div>
                                <div class="clause-content">
                                    <h4>Referencias Normativas</h4>
                                </div>
                            </div>
                            <div class="clause-item">
                                <div class="clause-number">3</div>
                                <div class="clause-content">
                                    <h4>Términos y Definiciones</h4>
                                </div>
                            </div>
                            <div class="clause-item">
                                <div class="clause-number">4</div>
                                <div class="clause-content">
                                    <h4>Contexto de la Organización</h4>
                                </div>
                            </div>
                            <div class="clause-item">
                                <div class="clause-number">5</div>
                                <div class="clause-content">
                                    <h4>Liderazgo</h4>
                                </div>
                            </div>
                            <div class="clause-item">
                                <div class="clause-number">6</div>
                                <div class="clause-content">
                                    <h4>Planificación</h4>
                                </div>
                            </div>
                            <div class="clause-item">
                                <div class="clause-number">7</div>
                                <div class="clause-content">
                                    <h4>Soporte</h4>
                                </div>
                            </div>
                            <div class="clause-item">
                                <div class="clause-number">8</div>
                                <div class="clause-content">
                                    <h4>Operación</h4>
                                </div>
                            </div>
                            <div class="clause-item">
                                <div class="clause-number">9</div>
                                <div class="clause-content">
                                    <h4>Evaluación del Desempeño</h4>
                                </div>
                            </div>
                            <div class="clause-item">
                                <div class="clause-number">10</div>
                                <div class="clause-content">
                                    <h4>Mejora</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="row">
                <div class="col-12">
                    <div class="content-section">
                        <h3 class="section-heading">
                            <i class="fas fa-layer-group me-2"></i>
                            Normas que Siguen el Anexo SL
                        </h3>
                        <div class="domains-grid">
                            <div class="domain-card">
                                <h4><i class="fas fa-award me-2"></i>ISO 9001:2015</h4>
                                <p>Gestión de Calidad</p>
                            </div>
                            <div class="domain-card">
                                <h4><i class="fas fa-leaf me-2"></i>ISO 14001:2015</h4>
                                <p>Gestión Ambiental</p>
                            </div>
                            <div class="domain-card">
                                <h4><i class="fas fa-shield-virus me-2"></i>ISO 27001:2013</h4>
                                <p>Seguridad de la Información</p>
                            </div>
                            <div class="domain-card">
                                <h4><i class="fas fa-hard-hat me-2"></i>ISO 45001:2018</h4>
                                <p>Seguridad y Salud en el Trabajo</p>
                            </div>
                            <div class="domain-card">
                                <h4><i class="fas fa-bolt me-2"></i>ISO 50001:2018</h4>
                                <p>Gestión de la Energía</p>
                            </div>
                            <div class="domain-card">
                                <h4><i class="fas fa-business-time me-2"></i>ISO 22301:2019</h4>
                                <p>Continuidad del Negocio</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="row">
                <div class="col-12">
                    <div class="content-section">
                        <h3 class="section-heading">
                            <i class="fas fa-lightbulb me-2"></i>
                            ¿Por qué es Importante para ISO 27001?
                        </h3>
                        <div class="row">
                            <div class="col-md-4">
                                <div class="info-card">
                                    <h4><i class="fas fa-link me-2"></i>Facilita la Integración</h4>
                                    <p>Una organización puede implementar <strong>ISO 27001</strong> junto con <strong>ISO 9001</strong> (calidad) sin duplicar esfuerzos. Los procesos de <strong>liderazgo</strong>, <strong>planificación</strong> y <strong>mejora</strong> son comunes.</p>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="info-card">
                                    <h4><i class="fas fa-tachometer-alt me-2"></i>Mejora la Eficiencia</h4>
                                    <p>Los auditores pueden evaluar múltiples sistemas usando el mismo enfoque. Reduce el tiempo de implementación de nuevas normas.</p>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="info-card">
                                    <h4><i class="fas fa-exclamation-triangle me-2"></i>Enfoque de Riesgos</h4>
                                    <p>El Anexo SL enfatiza el <strong>enfoque basado en riesgos</strong>, especialmente relevante para la seguridad de la información.</p>
                                </div>
                            </div>
                        </div>
                        <div class="mt-4">
                            <div class="quote-box">
                                <p><strong>Ejemplo Práctico:</strong> Si una empresa ya tiene implementada <strong>ISO 9001:2015</strong> (calidad) y quiere agregar <strong>ISO 27001:2013</strong> (seguridad), ya conoce cómo hacer el análisis del contexto (Cláusula 4), los roles de liderazgo (Cláusula 5), y los procesos de mejora continua (Cláusula 10).</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.getElementById('dynamicContent').innerHTML = content;
    }
    
    showISO27001Content() {
        const content = `
            <div class="row">
                <div class="col-12">
                    <div class="content-section">
                        <h3 class="section-heading">
                            <i class="fas fa-list-ol me-2"></i>
                            Las 10 Cláusulas del Anexo SL
                        </h3>
                        <div class="clauses-list">
                            <div class="clause-item">
                                <div class="clause-number">1</div>
                                <div class="clause-content">
                                    <h4>Alcance</h4>
                                    <p>Define el ámbito de aplicación de la norma, aplicable a grandes empresas y PYMES</p>
                                </div>
                            </div>
                            <div class="clause-item">
                                <div class="clause-number">2</div>
                                <div class="clause-content">
                                    <h4>Referencias Normativas</h4>
                                    <p>Menciona otras normas empleadas, principalmente la ISO 27000</p>
                                </div>
                            </div>
                            <div class="clause-item">
                                <div class="clause-number">3</div>
                                <div class="clause-content">
                                    <h4>Términos y Definiciones</h4>
                                    <p>Guía de referencia para conocer el significado de los términos contenidos en la norma</p>
                                </div>
                            </div>
                            <div class="clause-item">
                                <div class="clause-number">4</div>
                                <div class="clause-content">
                                    <h4>Contexto de la Organización</h4>
                                    <p>Conocimiento del contexto interno y externo para alinear objetivos de seguridad con el negocio</p>
                                </div>
                            </div>
                            <div class="clause-item">
                                <div class="clause-number">5</div>
                                <div class="clause-content">
                                    <h4>Liderazgo</h4>
                                    <p>Participación activa de la dirección en el proceso de implantación y asignación de responsabilidades</p>
                                </div>
                            </div>
                            <div class="clause-item">
                                <div class="clause-number">6</div>
                                <div class="clause-content">
                                    <h4>Planificación</h4>
                                    <p>Identificación de riesgos, evaluación de impacto y creación del plan de tratamiento de riesgos (PTR)</p>
                                </div>
                            </div>
                            <div class="clause-item">
                                <div class="clause-number">7</div>
                                <div class="clause-content">
                                    <h4>Soporte</h4>
                                    <p>Recursos necesarios: personas, infraestructura, herramientas, competencia y comunicación</p>
                                </div>
                            </div>
                            <div class="clause-item">
                                <div class="clause-number">8</div>
                                <div class="clause-content">
                                    <h4>Operación</h4>
                                    <p>Ejecución de las acciones de seguridad incluidas en el plan de tratamiento de riesgos</p>
                                </div>
                            </div>
                            <div class="clause-item">
                                <div class="clause-number">9</div>
                                <div class="clause-content">
                                    <h4>Evaluación del Desempeño</h4>
                                    <p>Evaluación de la efectividad de las acciones implementadas mediante revisiones y auditorías</p>
                                </div>
                            </div>
                            <div class="clause-item">
                                <div class="clause-number">10</div>
                                <div class="clause-content">
                                    <h4>Mejora</h4>
                                    <p>Proceso de mejora continua basado en resultados de evaluaciones y auditorías</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.getElementById('dynamicContent').innerHTML = content;
    }
    
    showISO27002Content() {
        const content = `
            <div class="row">
                <div class="col-12">
                    <div class="content-section">
                        <h3 class="section-heading">
                            <i class="fas fa-layer-group me-2"></i>
                            Los 14 Dominios de la ISO 27002:2013
                        </h3>
                        <div class="domains-grid">
                            <div class="domain-card">
                                <h4>A5 - Políticas de Seguridad</h4>
                                <p>Directrices de la dirección en seguridad de la información</p>
                            </div>
                            <div class="domain-card">
                                <h4>A6 - Organización de la Seguridad</h4>
                                <p>Organización interna y dispositivos móviles</p>
                            </div>
                            <div class="domain-card">
                                <h4>A7 - Recursos Humanos</h4>
                                <p>Seguridad antes, durante y después de la contratación</p>
                            </div>
                            <div class="domain-card">
                                <h4>A8 - Gestión de Activos</h4>
                                <p>Responsabilidad, clasificación y manejo de activos</p>
                            </div>
                            <div class="domain-card">
                                <h4>A9 - Control de Acceso</h4>
                                <p>Requisitos de negocio y gestión de accesos</p>
                            </div>
                            <div class="domain-card">
                                <h4>A10 - Criptografía</h4>
                                <p>Controles criptográficos para protección</p>
                            </div>
                            <div class="domain-card">
                                <h4>A11 - Seguridad Física</h4>
                                <p>Áreas seguras y seguridad de equipos</p>
                            </div>
                            <div class="domain-card">
                                <h4>A12 - Seguridad de Operaciones</h4>
                                <p>Protección contra malware, backups y monitorización</p>
                            </div>
                            <div class="domain-card">
                                <h4>A13 - Telecomunicaciones</h4>
                                <p>Gestión de seguridad en redes e intercambio de información</p>
                            </div>
                            <div class="domain-card">
                                <h4>A14 - Adquisición y Desarrollo</h4>
                                <p>Requisitos de seguridad en sistemas de información</p>
                            </div>
                            <div class="domain-card">
                                <h4>A15 - Relación con Proveedores</h4>
                                <p>Seguridad en relaciones con proveedores externos</p>
                            </div>
                            <div class="domain-card">
                                <h4>A16 - Gestión de Incidentes</h4>
                                <p>Gestión de incidentes de seguridad y mejoras</p>
                            </div>
                            <div class="domain-card">
                                <h4>A17 - Continuidad del Negocio</h4>
                                <p>Aspectos de seguridad en la continuidad</p>
                            </div>
                            <div class="domain-card">
                                <h4>A18 - Cumplimiento</h4>
                                <p>Cumplimiento legal y revisiones de seguridad</p>
                            </div>
                        </div>
                        <div class="mt-4">
                            <div class="info-card">
                                <h4><i class="fas fa-info-circle me-2"></i>Resumen de Controles</h4>
                                <p><strong>14 dominios</strong> • <strong>35 objetivos de control</strong> • <strong>114 controles específicos</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.getElementById('dynamicContent').innerHTML = content;
    }
    
    showImplantacionContent() {
        const content = `
            <div class="row">
                <div class="col-12">
                    <div class="content-section">
                        <h3 class="section-heading">
                            <i class="fas fa-tasks me-2"></i>
                            Las 9 Fases de Implantación de un SGSI
                        </h3>
                        <div class="implementation-steps">
                            <div class="step-item">
                                <div class="step-number">1</div>
                                <div class="step-content">
                                    <h4>Análisis y Evaluación de Riesgos</h4>
                                    <p>Identificar y analizar los principales riesgos que afectan a la organización, asignando responsabilidad y evaluando el impacto potencial.</p>
                                </div>
                            </div>
                            <div class="step-item">
                                <div class="step-number">2</div>
                                <div class="step-content">
                                    <h4>Implementación de Controles</h4>
                                    <p>Identificar e implementar los controles apropiados de los 114 controles que proporciona la ISO 27001:2013.</p>
                                </div>
                            </div>
                            <div class="step-item">
                                <div class="step-number">3</div>
                                <div class="step-content">
                                    <h4>Definición del Plan de Tratamiento de Riesgos (PTR)</h4>
                                    <p>Crear un plan que considere el potencial de los riesgos y proceda a mitigarlos, eliminarlos o transferirlos mediante seguros.</p>
                                </div>
                            </div>
                            <div class="step-item">
                                <div class="step-number">4</div>
                                <div class="step-content">
                                    <h4>Alcance de la Gestión</h4>
                                    <p>Conocer las áreas de la organización que se verán afectadas por el SGSI, priorizando las funciones de misión institucional.</p>
                                </div>
                            </div>
                            <div class="step-item">
                                <div class="step-number">5</div>
                                <div class="step-content">
                                    <h4>Contexto de Organización</h4>
                                    <p>Detectar problemas de organización a nivel interno y externo, empleando herramientas como el análisis DAFO.</p>
                                </div>
                            </div>
                            <div class="step-item">
                                <div class="step-number">6</div>
                                <div class="step-content">
                                    <h4>Partes Interesadas</h4>
                                    <p>Identificar y considerar las partes externas que pueden generar riesgos: proveedores, clientes, autoridades, etc.</p>
                                </div>
                            </div>
                            <div class="step-item">
                                <div class="step-number">7</div>
                                <div class="step-content">
                                    <h4>Fijación y Medición de Objetivos</h4>
                                    <p>Establecer objetivos medibles y comparables con indicadores referenciales, formando al personal en cultura de seguridad.</p>
                                </div>
                            </div>
                            <div class="step-item">
                                <div class="step-number">8</div>
                                <div class="step-content">
                                    <h4>Proceso Documental</h4>
                                    <p>Crear un proceso documentado que gestione sistemáticamente la información existente y permita su consulta en cualquier momento.</p>
                                </div>
                            </div>
                            <div class="step-item">
                                <div class="step-number">9</div>
                                <div class="step-content">
                                    <h4>Auditorías Internas y Externas</h4>
                                    <p>Realizar auditorías periódicas que evalúen el funcionamiento del sistema y propongan acciones de mejora continuas.</p>
                                </div>
                            </div>
                        </div>
                        <div class="mt-4">
                            <div class="quote-box">
                                <p><strong>Modelo PDCA:</strong> La norma ISO 27001 sigue el modelo de Deming (Plan, Do, Check, Act) para establecer procesos de mejora continua tanto a nivel de gestión del sistema como individual.</p>
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
        const cards = document.querySelectorAll('.overview-item, .info-card, .pillar-card, .domain-card, .clause-item, .step-item');
        
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
        const elements = document.querySelectorAll('.overview-item, .info-card, .pillar-card, .domain-card, .clause-item, .step-item');
        
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
    const app = new ISO27001App();
    app.initializeAdditionalFeatures();
    
    // Agregar funcionalidad de teclas de acceso rápido
    document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + número para navegar a secciones
        if ((e.ctrlKey || e.metaKey) && e.key >= '1' && e.key <= '7') {
            const sections = ['introduccion', 'sgsi', 'anexoSL', 'iso27001', 'iso27002', 'implantacion', 'overview'];
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
