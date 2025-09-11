// Configuración de la aplicación
const APP_CONFIG = {
    sections: {
        overview: {
            title: "GESTIÓN DE CALIDAD EN TECNOLOGÍAS DE LA INFORMACIÓN",
            subtitle: "Agenda Completa - Tema 7: Sistemas de Gestión de Calidad en TI",
            icon: "fas fa-sitemap"
        },
        introduccion: {
            title: "INTRODUCCIÓN Y OBJETIVOS",
            subtitle: "Fundamentos básicos y propósitos de la gestión de calidad en TI",
            icon: "fas fa-info-circle"
        },
        casoUso: {
            title: "CASO DE USO PRÁCTICO",
            subtitle: "Aplicación real de gestión de calidad en una empresa de desarrollo de software",
            icon: "fas fa-building"
        },
        modelos: {
            title: "MODELOS DE CALIDAD DEL SOFTWARE",
            subtitle: "Evolución temporal y atributos de calidad del software",
            icon: "fas fa-cogs"
        },
        iso9001: {
            title: "NORMA ISO 9001:2015",
            subtitle: "Sistema de gestión de calidad y sus 7 principios fundamentales",
            icon: "fas fa-certificate"
        },
        efqm: {
            title: "MODELO EFQM",
            subtitle: "Fundación Europea para la Gestión de la Calidad",
            icon: "fas fa-star"
        },
        proceso: {
            title: "PROCESO DE MEJORA DE LA CALIDAD",
            subtitle: "15 pasos para la implantación de un sistema de gestión de calidad",
            icon: "fas fa-tasks"
        }
    }
};

// Clase principal de la aplicación
class QualityManagementApp {
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
            case 'casoUso':
                return this.getCasoUsoContent();
            case 'modelos':
                return this.getModelosContent();
            case 'iso9001':
                return this.getIso9001Content();
            case 'efqm':
                return this.getEfqmContent();
            case 'proceso':
                return this.getProcesoContent();
            default:
                return '<p>Contenido no disponible</p>';
        }
    }
    
    getOverviewContent() {
        return `
            <div class="content-card fade-in">
                <h3><i class="fas fa-award me-2"></i>¿Qué es la Gestión de Calidad en TI?</h3>
                <p>Un sistema de gestión de calidad o Quality Management System (QMS) es un sistema formalizado que documenta procesos, procedimientos y responsabilidades para lograr políticas y objetivos de calidad.</p>
                <p>Su interés para los directores de tecnologías de la información radica tanto en la posibilidad de abordar cambios en sus procesos de negocio que reduzcan sus costes y mejoren el grado de satisfacción de sus clientes, como en la posibilidad de obtener una certificación de calidad que les permita ver aumentada y reconocida su consideración.</p>
            </div>
            
            <div class="overview-grid">
                <div class="overview-item fade-in" onclick="app.switchSection('introduccion')">
                    <i class="fas fa-info-circle"></i>
                    <h3>Introducción y Objetivos</h3>
                    <p>Conoce los fundamentos básicos y propósitos de la gestión de calidad en tecnologías de la información.</p>
                </div>
                <div class="overview-item fade-in" onclick="app.switchSection('casoUso')">
                    <i class="fas fa-building"></i>
                    <h3>Caso de Uso Práctico</h3>
                    <p>Analiza un caso real de implementación de gestión de calidad en una empresa de desarrollo de software.</p>
                </div>
                <div class="overview-item fade-in" onclick="app.switchSection('modelos')">
                    <i class="fas fa-cogs"></i>
                    <h3>Modelos de Calidad del Software</h3>
                    <p>Explora los modelos de calidad existentes y su evolución temporal en el desarrollo de software.</p>
                </div>
                <div class="overview-item fade-in" onclick="app.switchSection('iso9001')">
                    <i class="fas fa-certificate"></i>
                    <h3>Norma ISO 9001:2015</h3>
                    <p>Descubre el referente mundial para las certificaciones empresariales en el ámbito de la calidad.</p>
                </div>
                <div class="overview-item fade-in" onclick="app.switchSection('efqm')">
                    <i class="fas fa-star"></i>
                    <h3>Modelo EFQM</h3>
                    <p>Analiza el modelo de la European Foundation Quality Management como alternativa de implantación.</p>
                </div>
                <div class="overview-item fade-in" onclick="app.switchSection('proceso')">
                    <i class="fas fa-tasks"></i>
                    <h3>Proceso de Mejora de la Calidad</h3>
                    <p>Aprende sobre los 15 pasos principales del proceso de implantación de un QMS.</p>
                </div>
            </div>
        `;
    }
    
    getIntroduccionContent() {
        return `
            <div class="content-card fade-in">
                <h3><i class="fas fa-info-circle me-2"></i>Introducción a la Gestión de Calidad en TI</h3>
                <p>La definición estándar de un sistema de gestión de calidad o Quality Management System (QMS) habla de un sistema formalizado que documenta procesos, procedimientos y responsabilidades para lograr políticas y objetivos de calidad.</p>
                <p>Su interés para los directores de tecnologías de la información radica tanto en la posibilidad de abordar cambios en sus procesos de negocio que reduzcan sus costes y mejoren el grado de satisfacción de sus clientes, como en la posibilidad de obtener una certificación de calidad que les permita ver aumentada y reconocida su consideración y así poder acceder a nuevos nichos de mercado.</p>
            </div>
            
            <div class="content-card fade-in">
                <h3><i class="fas fa-bullseye me-2"></i>Objetivos del Tema</h3>
                <ul>
                    <li><strong>Conocer los modelos de calidad</strong> de software existentes y su evolución temporal</li>
                    <li><strong>Reflexionar acerca del contenido</strong> de la norma ISO 9001:2015 y su posibilidad de certificación</li>
                    <li><strong>Analizar el proceso de mejora</strong> de la calidad en organizaciones TI</li>
                </ul>
            </div>
            
            <div class="content-card fade-in">
                <h3><i class="fas fa-lightbulb me-2"></i>Estructura del Tema</h3>
                <p>El presente capítulo aborda la gestión de la calidad en las tecnologías de la información comenzando con una descripción de los principales modelos de calidad de software existentes y sus atributos referenciales. Seguidamente se describe la norma ISO 9001 en su versión 2015 como el referente mundial para las certificaciones empresariales en el ámbito de la calidad. El tema continúa con el modelo EFQM, como alternativa de implantación de calidad y concluye describiendo los principales pasos del proceso de mejora de la calidad.</p>
            </div>
        `;
    }
    
    getCasoUsoContent() {
        return `
            <div class="content-card fade-in">
                <h3><i class="fas fa-building me-2"></i>Contexto de la Empresa</h3>
                <p><strong>SoftDev Solutions</strong> es una empresa de desarrollo de software con 200 empleados que se especializa en aplicaciones móviles y web para el sector retail. La empresa ha crecido rápidamente en los últimos 3 años, pasando de 50 a 200 empleados, y actualmente maneja más de 100 proyectos simultáneos para clientes en 15 países.</p>
                <p>Sin embargo, este crecimiento ha traído consigo problemas significativos de calidad: retrasos en entregas del 40%, defectos en producción del 15%, y una tasa de satisfacción del cliente del 65%. La dirección decidió implementar un sistema de gestión de calidad para mejorar estos indicadores.</p>
            </div>
            
            <div class="content-card fade-in">
                <h3><i class="fas fa-exclamation-triangle me-2"></i>Problemas Identificados</h3>
                <p>Antes de implementar el QMS, SoftDev enfrentaba los siguientes problemas críticos:</p>
                <div class="quality-attributes">
                    <div class="quality-attribute">
                        <h5>Retrasos en Entregas</h5>
                        <p>40% de proyectos entregados fuera de tiempo</p>
                    </div>
                    <div class="quality-attribute">
                        <h5>Defectos en Producción</h5>
                        <p>15% de bugs críticos en software en vivo</p>
                    </div>
                    <div class="quality-attribute">
                        <h5>Satisfacción del Cliente</h5>
                        <p>65% de clientes satisfechos</p>
                    </div>
                    <div class="quality-attribute">
                        <h5>Costos de Revisión</h5>
                        <p>30% del presupuesto en correcciones</p>
                    </div>
                    <div class="quality-attribute">
                        <h5>Rotación de Personal</h5>
                        <p>25% de empleados se van anualmente</p>
                    </div>
                    <div class="quality-attribute">
                        <h5>Procesos Inconsistentes</h5>
                        <p>Falta de estandarización en desarrollo</p>
                    </div>
                </div>
            </div>
            
            <div class="content-card fade-in">
                <h3><i class="fas fa-star me-2"></i>Aplicación de los 7 Principios ISO 9001:2015</h3>
                <p>SoftDev implementó cada uno de los 7 principios de la gestión de calidad:</p>
                <div class="iso-principles">
                    <div class="iso-principle">
                        <h4><i class="fas fa-user me-2"></i>1. Enfoque al Cliente</h4>
                        <p><strong>Implementación:</strong> Encuestas mensuales de satisfacción, reuniones trimestrales con clientes clave, y sistema de feedback en tiempo real. <strong>Resultado:</strong> Satisfacción aumentó del 65% al 92%.</p>
                    </div>
                    <div class="iso-principle">
                        <h4><i class="fas fa-crown me-2"></i>2. Liderazgo</h4>
                        <p><strong>Implementación:</strong> El CEO se comprometió públicamente con la calidad, asignó un Director de Calidad, y estableció un presupuesto del 15% para mejoras. <strong>Resultado:</strong> Compromiso del 95% del personal.</p>
                    </div>
                    <div class="iso-principle">
                        <h4><i class="fas fa-users me-2"></i>3. Compromiso de las Personas</h4>
                        <p><strong>Implementación:</strong> Programa de capacitación de 40 horas anuales, certificaciones técnicas, y sistema de reconocimiento por calidad. <strong>Resultado:</strong> Rotación reducida del 25% al 8%.</p>
                    </div>
                    <div class="iso-principle">
                        <h4><i class="fas fa-cogs me-2"></i>4. Enfoque a Procesos</h4>
                        <p><strong>Implementación:</strong> Mapeo de 15 procesos clave, documentación de procedimientos, y métricas de rendimiento. <strong>Resultado:</strong> Eficiencia aumentó 35%.</p>
                    </div>
                    <div class="iso-principle">
                        <h4><i class="fas fa-chart-line me-2"></i>5. Mejora</h4>
                        <p><strong>Implementación:</strong> Reuniones semanales de mejora continua, sistema de sugerencias, y revisiones mensuales de procesos. <strong>Resultado:</strong> 120 mejoras implementadas en 6 meses.</p>
                    </div>
                    <div class="iso-principle">
                        <h4><i class="fas fa-search me-2"></i>6. Toma de Decisiones Basadas en Evidencias</h4>
                        <p><strong>Implementación:</strong> Dashboard de métricas en tiempo real, reportes semanales de calidad, y análisis de tendencias. <strong>Resultado:</strong> Decisiones 60% más precisas.</p>
                    </div>
                    <div class="iso-principle">
                        <h4><i class="fas fa-handshake me-2"></i>7. Gestión de Suministradores</h4>
                        <p><strong>Implementación:</strong> Evaluación de proveedores, contratos con cláusulas de calidad, y auditorías regulares. <strong>Resultado:</strong> 90% de proveedores certificados.</p>
                    </div>
                </div>
            </div>
            
            <div class="content-card fade-in">
                <h3><i class="fas fa-sync-alt me-2"></i>Aplicación del Ciclo PDCA</h3>
                <p>SoftDev implementó el ciclo PDCA en su proceso de desarrollo de software:</p>
                <div class="pdca-cycle">
                    <div class="pdca-step">
                        <h4>Plan (Planificar)</h4>
                        <p><strong>Actividades:</strong> Definición de requisitos de calidad, establecimiento de métricas, y planificación de recursos. <strong>Herramientas:</strong> User stories, criterios de aceptación, y plan de pruebas.</p>
                    </div>
                    <div class="pdca-step">
                        <h4>Do (Hacer)</h4>
                        <p><strong>Actividades:</strong> Desarrollo siguiendo estándares, pruebas unitarias, y revisiones de código. <strong>Herramientas:</strong> Git, Jenkins, y SonarQube.</p>
                    </div>
                    <div class="pdca-step">
                        <h4>Check (Verificar)</h4>
                        <p><strong>Actividades:</strong> Pruebas de integración, pruebas de usuario, y análisis de métricas. <strong>Herramientas:</strong> Selenium, Jira, y Tableau.</p>
                    </div>
                    <div class="pdca-step">
                        <h4>Act (Actuar)</h4>
                        <p><strong>Actividades:</strong> Corrección de defectos, mejora de procesos, y documentación de lecciones aprendidas. <strong>Herramientas:</strong> Retrospectivas y planes de acción.</p>
                    </div>
                </div>
            </div>
            
            <div class="content-card fade-in">
                <h3><i class="fas fa-tasks me-2"></i>Proceso de Implementación (15 Pasos)</h3>
                <p>SoftDev siguió los 15 pasos del proceso de mejora de la calidad:</p>
                <div class="process-steps">
                    <div class="process-step">
                        <div class="step-number">1-3</div>
                        <h4>Preparación Inicial</h4>
                        <p><strong>Pasos 1-3:</strong> Compromiso de la dirección, nombramiento del equipo de calidad, y capacitación del personal. <strong>Duración:</strong> 2 meses. <strong>Inversión:</strong> $50,000.</p>
                    </div>
                    <div class="process-step">
                        <div class="step-number">4-6</div>
                        <h4>Análisis y Planificación</h4>
                        <p><strong>Pasos 4-6:</strong> Identificación de requisitos, evaluación de desfases, y planificación de implementación. <strong>Duración:</strong> 1 mes. <strong>Hallazgos:</strong> 45 desfases identificados.</p>
                    </div>
                    <div class="process-step">
                        <div class="step-number">7-8</div>
                        <h4>Desarrollo y Formación</h4>
                        <p><strong>Pasos 7-8:</strong> Desarrollo de documentación y formación de empleados. <strong>Duración:</strong> 3 meses. <strong>Documentos:</strong> 25 procedimientos creados.</p>
                    </div>
                    <div class="process-step">
                        <div class="step-number">9-12</div>
                        <h4>Certificación</h4>
                        <p><strong>Pasos 9-12:</strong> Selección de certificador, auditorías internas, revisión de gestión, y preevaluación. <strong>Duración:</strong> 2 meses. <strong>Resultado:</strong> 3 no conformidades menores.</p>
                    </div>
                    <div class="process-step">
                        <div class="step-number">13-15</div>
                        <h4>Finalización</h4>
                        <p><strong>Pasos 13-15:</strong> Acciones correctivas, auditoría de certificación, y mejora continua. <strong>Duración:</strong> 1 mes. <strong>Resultado:</strong> Certificación ISO 9001:2015 obtenida.</p>
                    </div>
                </div>
            </div>
            
            <div class="content-card fade-in">
                <h3><i class="fas fa-chart-line me-2"></i>Resultados y Beneficios Obtenidos</h3>
                <p><strong>Después de 12 meses de implementación del QMS:</strong></p>
                <div class="quality-attributes">
                    <div class="quality-attribute">
                        <h5>Retrasos en Entregas</h5>
                        <p>40% → 5% (Reducción del 87%)</p>
                    </div>
                    <div class="quality-attribute">
                        <h5>Defectos en Producción</h5>
                        <p>15% → 2% (Reducción del 87%)</p>
                    </div>
                    <div class="quality-attribute">
                        <h5>Satisfacción del Cliente</h5>
                        <p>65% → 92% (Aumento del 42%)</p>
                    </div>
                    <div class="quality-attribute">
                        <h5>Costos de Revisión</h5>
                        <p>30% → 8% (Reducción del 73%)</p>
                    </div>
                    <div class="quality-attribute">
                        <h5>Rotación de Personal</h5>
                        <p>25% → 8% (Reducción del 68%)</p>
                    </div>
                    <div class="quality-attribute">
                        <h5>ROI del Proyecto</h5>
                        <p>300% en el primer año</p>
                    </div>
                </div>
                <p><strong>Beneficios adicionales:</strong> Acceso a nuevos mercados, mejora de la reputación, reducción de costos operativos del 25%, y aumento de la productividad del 40%.</p>
            </div>
            
            <div class="content-card fade-in">
                <h3><i class="fas fa-lightbulb me-2"></i>Lecciones Aprendidas</h3>
                <p><strong>Factores críticos de éxito:</strong></p>
                <ul>
                    <li><strong>Compromiso de la alta dirección:</strong> Esencial para el éxito del proyecto</li>
                    <li><strong>Involucramiento del personal:</strong> La capacitación y participación son clave</li>
                    <li><strong>Enfoque gradual:</strong> Implementación por fases reduce la resistencia al cambio</li>
                    <li><strong>Métricas claras:</strong> Los indicadores deben ser específicos y medibles</li>
                    <li><strong>Mejora continua:</strong> El QMS es un proceso vivo que requiere actualización constante</li>
                </ul>
                <p><strong>Conclusión:</strong> La implementación de un sistema de gestión de calidad no solo mejora los productos y servicios, sino que también transforma la cultura organizacional, aumenta la satisfacción del cliente, y genera beneficios económicos significativos.</p>
            </div>
        `;
    }
    
    getModelosContent() {
        return `
            <div class="content-card fade-in">
                <h3><i class="fas fa-cogs me-2"></i>Modelos de Calidad del Software</h3>
                <p>Los diferentes modelos existentes de calidad del software permiten a las organizaciones TI focalizar su actuación en ciertos parámetros a la hora de establecer una mejora continua de sus procesos.</p>
                <p>Tomando como referente la definición de calidad del software suministrada por la IEEE Std. 610-1990: <em>"Grado con el que un sistema, componente o proceso cumple los requerimientos especificados y las necesidades o expectativas del cliente o usuario."</em></p>
            </div>
            
            <div class="content-card fade-in">
                <h3><i class="fas fa-star me-2"></i>Atributos de Calidad del Software</h3>
                <p>En la actualidad el grado de satisfacción del cliente es una de las métricas más empleadas ante el auge del enfoque orientado al cliente. Otros autores orientan la calidad del software a las facilidades que ofrece el software una vez esté terminado.</p>
                <div class="quality-attributes">
                    <div class="quality-attribute">
                        <h5>Fiabilidad</h5>
                        <p>Capacidad de operar sin errores</p>
                    </div>
                    <div class="quality-attribute">
                        <h5>Modificable</h5>
                        <p>Capacidad de hacer los cambios necesarios de una forma sencilla</p>
                    </div>
                    <div class="quality-attribute">
                        <h5>Comprensible</h5>
                        <p>Capacidad de comprender el software operativo, de cara a un cambio o arreglo</p>
                    </div>
                    <div class="quality-attribute">
                        <h5>Rendimiento</h5>
                        <p>Velocidad y compacidad del software</p>
                    </div>
                    <div class="quality-attribute">
                        <h5>Utilizable</h5>
                        <p>Capacidad de uso sencillo del software</p>
                    </div>
                    <div class="quality-attribute">
                        <h5>Probable</h5>
                        <p>Capacidad de construir y ejecutar fácilmente casos de prueba</p>
                    </div>
                    <div class="quality-attribute">
                        <h5>Portable</h5>
                        <p>Capacidad de mover el software fácilmente de un entorno de trabajo a otro</p>
                    </div>
                </div>
            </div>
            
            <div class="content-card fade-in">
                <h3><i class="fas fa-history me-2"></i>Evolución de los Modelos de Calidad</h3>
                <p>A lo largo del tiempo, el ámbito de actuación de estos modelos ha estado orientado tanto hacia los procesos como hacia los productos con la esperanza de mejorar en ambos aspectos. Si bien han sido muchos los modelos desarrollados y sus variantes, los referentes más importantes han sido:</p>
                <div class="quality-models">
                    <div class="quality-model">
                        <h4><i class="fas fa-cogs me-2"></i>Modelos Orientados a Procesos</h4>
                        <ul>
                            <li>CMM (Capability Maturity Model)</li>
                            <li>CMMI (Capability Maturity Model Integration)</li>
                            <li>ISO/IEC 15504 (SPICE)</li>
                            <li>ISO/IEC 12207</li>
                            <li>ISO/IEC 15288</li>
                        </ul>
                    </div>
                    <div class="quality-model">
                        <h4><i class="fas fa-box me-2"></i>Modelos Orientados a Productos</h4>
                        <ul>
                            <li>ISO/IEC 9126</li>
                            <li>ISO/IEC 25010</li>
                            <li>McCall's Quality Model</li>
                            <li>Boehm's Quality Model</li>
                            <li>Dromey's Quality Model</li>
                        </ul>
                    </div>
                </div>
            </div>
        `;
    }
    
    getIso9001Content() {
        return `
            <div class="content-card fade-in">
                <h3><i class="fas fa-certificate me-2"></i>Norma ISO 9001:2015</h3>
                <p>La norma ISO 9001:2015 es una norma internacional que está orientada a los sistemas de gestión de calidad. La norma proporciona un marco de trabajo para la mejora de la calidad en las organizaciones de manera que cumpla con satisfacción y eficiencia las expectativas de sus clientes.</p>
                <p>La norma tiene sus orígenes en el año 1987 y esta versión del 2015 reemplaza a la del año 2008. La norma no especifica a las organizaciones ni sus objetivos, ni como alcanzarlos. Se trata de una norma suficientemente flexible que define una serie de principios con el fin de lograr, mediante la reducción de costes y el cumplimiento de los requisitos, el alineamiento de los procesos y los objetivos estratégicos de una organización.</p>
            </div>
            
            <div class="content-card fade-in">
                <h3><i class="fas fa-star me-2"></i>Los 7 Principios de la Gestión de la Calidad</h3>
                <p>La norma ISO 9001:2015 cuenta con 7 principios para la gestión de la calidad que son la base estratégica para todas las decisiones relacionadas con la gestión de la calidad. Estos principios serán priorizados según estime oportuno cada organización:</p>
                <div class="iso-principles">
                    <div class="iso-principle">
                        <h4><i class="fas fa-user me-2"></i>Enfoque al Cliente</h4>
                        <p>Obliga a la organización a focalizar su acción en el cliente y a cumplir sus expectativas para tener clientes satisfechos.</p>
                    </div>
                    <div class="iso-principle">
                        <h4><i class="fas fa-crown me-2"></i>Liderazgo</h4>
                        <p>Una organización demuestra su liderazgo asegurando la disposición de recursos para los proyectos de gestión de la calidad y fomentando la cultura de calidad en toda la organización.</p>
                    </div>
                    <div class="iso-principle">
                        <h4><i class="fas fa-users me-2"></i>Compromiso de las Personas</h4>
                        <p>Los empleados deben estar plenamente involucrados y motivados en la consecución de los objetivos empresariales bajo una cultura de gestión de la calidad.</p>
                    </div>
                    <div class="iso-principle">
                        <h4><i class="fas fa-cogs me-2"></i>Enfoque a Procesos</h4>
                        <p>Considera a los procesos como parte de un sistema global que proporcionan resultados predecibles, cuyos elementos pueden ser mejorados para mitigar los posibles riesgos de cada proceso.</p>
                    </div>
                    <div class="iso-principle">
                        <h4><i class="fas fa-chart-line me-2"></i>Mejora</h4>
                        <p>Busca reaccionar a los cambios internos o externos para establecer mejoras en los procesos que sean nuevas oportunidades de negocio para la organización.</p>
                    </div>
                    <div class="iso-principle">
                        <h4><i class="fas fa-search me-2"></i>Toma de Decisiones Basadas en Evidencias</h4>
                        <p>Otorga mayor objetividad a una empresa en sus decisiones de mejora continua, permitiendo revisar con mayor facilidad los resultados obtenidos de cara a mejorar su eficiencia y eficacia.</p>
                    </div>
                    <div class="iso-principle">
                        <h4><i class="fas fa-handshake me-2"></i>Gestión de Suministradores</h4>
                        <p>Cada organización debe analizar sus relaciones con los proveedores para conocer sus límites, riesgos y oportunidades.</p>
                    </div>
                </div>
            </div>
            
            <div class="content-card fade-in">
                <h3><i class="fas fa-sync-alt me-2"></i>Ciclo PDCA (Plan-Do-Check-Act)</h3>
                <p>Se trata de un enfoque basado en procesos que emplea un ciclo de mejora continua para gestionar el sistema de gestión de calidad desde la planificación hasta las mediciones y mejoras para aumentar la satisfacción del cliente.</p>
                <div class="pdca-cycle">
                    <div class="pdca-step">
                        <h4>Plan (Planificar)</h4>
                        <p>La organización establece los objetivos del sistema de gestión de calidad y señala los procesos afectados proporcionándoles todos los recursos necesarios para cumplir los requisitos de los clientes, mitigando riesgos e identificando nuevas oportunidades.</p>
                    </div>
                    <div class="pdca-step">
                        <h4>Do (Hacer)</h4>
                        <p>Esta fase implementa el QMS conforme a lo planificado.</p>
                    </div>
                    <div class="pdca-step">
                        <h4>Check (Verificar)</h4>
                        <p>Se efectúan mediciones y comprobaciones en los procesos para comprobar si cumplen con los requisitos y objetivos establecidos.</p>
                    </div>
                    <div class="pdca-step">
                        <h4>Act (Actuar)</h4>
                        <p>A la vista de las desviaciones existentes, se establecen acciones correctivas y, así, mejorar el rendimiento del sistema de gestión de la calidad, dando lugar a una nueva iteración.</p>
                    </div>
                </div>
            </div>
            
            <div class="content-card fade-in">
                <h3><i class="fas fa-shield-alt me-2"></i>Pensamiento Basado en el Riesgo</h3>
                <p>El pensamiento basado en el riesgo siempre ha estado presente en la norma ISO 9001, pero la versión de 2015 especifica más el concepto de riesgo dentro de una organización. En este enfoque, junto con las oportunidades para desarrollar un nuevo producto o mejorar uno antiguo, siempre van a coexistir unos riesgos asociados con el cambio.</p>
                <p>Por lo tanto, la norma define el riesgo no como la probabilidad de pérdida o daño, sino como <em>"el efecto de la incertidumbre"</em>, donde cohabitan la posible pérdida con otra posible oportunidad. El conocimiento completo del entorno del riesgo y su gestión dará lugar a un sistema de gestión de la calidad más efectivo, donde las oportunidades prevalecerán sobre las pérdidas.</p>
            </div>
        `;
    }
    
    getEfqmContent() {
        return `
            <div class="content-card fade-in">
                <h3><i class="fas fa-star me-2"></i>Modelo EFQM</h3>
                <p>El modelo de la European Foundation Quality Management (EFQM) es un modelo de calidad desarrollado por la Fundación Europea para la Gestión de la Calidad que ayuda a las organizaciones a obtener la certificación ISO. Si bien no es un modelo reconocido dentro de las normas ISO, presta una orientación importante a las organizaciones para trabajar en sus procesos con calidad, eficiencia y eficacia.</p>
                <p>El modelo está orientado hacia la excelencia y fundamentado en la filosofía o concepto de calidad total. Para alcanzar esta calidad total evalúa los progresos de los sistemas de gestión de una organización, de acuerdo con unos criterios propios establecidos por el modelo que afectan a todas las áreas de la organización.</p>
            </div>
            
            <div class="content-card fade-in">
                <h3><i class="fas fa-users me-2"></i>Agentes (Criterios de Enfoque)</h3>
                <p>Los agentes, integrados en los sistemas de gestión, son los desencadenantes de los resultados, quienes intervienen en el alcance correcto de los resultados. Son cinco criterios que son evaluados preferentemente en términos de efectividad:</p>
                <div class="efqm-criteria">
                    <div class="efqm-criterion">
                        <h4><i class="fas fa-crown me-2"></i>Liderazgo</h4>
                        <p>Actitud de los directivos para inculcar una cultura de gestión de calidad en la organización.</p>
                    </div>
                    <div class="efqm-criterion">
                        <h4><i class="fas fa-chess me-2"></i>Política y Estrategia</h4>
                        <p>Observa si las políticas de la organización se traducen en planes de actuación.</p>
                    </div>
                    <div class="efqm-criterion">
                        <h4><i class="fas fa-users me-2"></i>Personal</h4>
                        <p>Analiza el máximo aprovechamiento de los recursos humanos.</p>
                    </div>
                    <div class="efqm-criterion">
                        <h4><i class="fas fa-handshake me-2"></i>Colaboradores y Recursos</h4>
                        <p>Mide en términos de eficacia y eficiencia el uso de los recursos disponibles.</p>
                    </div>
                    <div class="efqm-criterion">
                        <h4><i class="fas fa-cogs me-2"></i>Procesos</h4>
                        <p>Revisa, monitoriza y propone mejoras de los procesos de la organización para alcanzar la excelencia.</p>
                    </div>
                </div>
            </div>
            
            <div class="content-card fade-in">
                <h3><i class="fas fa-chart-bar me-2"></i>Resultados (Criterios de Resultado)</h3>
                <p>Los resultados exponen lo que los procesos productivos proporcionan y se comparan con los de otras organizaciones de la misma área, al objeto de observar su tendencia positiva o negativa en ese ámbito de actuación. Pueden ser de cuatro tipos:</p>
                <div class="efqm-criteria">
                    <div class="efqm-criterion">
                        <h4><i class="fas fa-user-friends me-2"></i>Resultados en las Personas</h4>
                        <p>Expresan el grado de satisfacción de los empleados de la organización y deben tender hacia el incremento.</p>
                    </div>
                    <div class="efqm-criterion">
                        <h4><i class="fas fa-shopping-cart me-2"></i>Resultados en los Clientes</h4>
                        <p>Comprueba que la satisfacción del cliente con el producto final obtenido satisface sus expectativas.</p>
                    </div>
                    <div class="efqm-criterion">
                        <h4><i class="fas fa-globe me-2"></i>Resultados en la Sociedad</h4>
                        <p>Analiza si la organización proporciona algún bienestar social con sus resultados (becas, medio ambientales...).</p>
                    </div>
                    <div class="efqm-criterion">
                        <h4><i class="fas fa-chart-line me-2"></i>Rendimiento</h4>
                        <p>Miden el rendimiento global de la organización en términos de eficacia y eficiencia para alcanzar los objetivos empresariales.</p>
                    </div>
                </div>
            </div>
            
            <div class="content-card fade-in">
                <h3><i class="fas fa-sync-alt me-2"></i>Interconexión Agentes-Resultados</h3>
                <p>El modelo, corroborado normalmente cada año, busca establecer una interconexión entre agentes y resultados tendentes a alcanzar la excelencia, donde los procesos estarán mejorando continuamente para amoldarse a las nuevas circunstancias o resultados de empleados, clientes y la sociedad.</p>
                <p>Si bien se ha dicho que la norma ISO 9001:2015 y el modelo EFQM son distintos, ambos modelos identifican las fortalezas y debilidades de la organización TI y facilitan una base para un proceso de mejora continua.</p>
            </div>
        `;
    }
    
    getProcesoContent() {
        return `
            <div class="content-card fade-in">
                <h3><i class="fas fa-tasks me-2"></i>Proceso de Mejora de la Calidad</h3>
                <p>A la hora de establecer o implantar un proceso de mejora de calidad en una organización TI, coexisten varias guías que reflejan la experiencia de las distintas empresas en la implementación del proceso de cara a alcanzar la certificación ISO 9001. Estas guías difieren en los pasos a realizar, pero no así en su contenido que tiene que estar circunscrito a la citada norma.</p>
                <p>Entre estas guías, destaca la del ETI Group (2014) que descompone el proceso en 4 fases para ayudar a las organizaciones TI a satisfacer las necesidades de su negocio:</p>
                <ul>
                    <li><strong>Planificación y diseño</strong></li>
                    <li><strong>Desarrollo de documentación</strong></li>
                    <li><strong>Implementación</strong></li>
                    <li><strong>Evaluación y registro</strong></li>
                </ul>
            </div>
            
            <div class="content-card fade-in">
                <h3><i class="fas fa-list-ol me-2"></i>Los 15 Pasos del Proceso de Implantación</h3>
                <p>A su vez, las fases se dividen en una serie de pasos que conformarán todo el proceso para alcanzar la certificación ISO 9001:2015:</p>
            </div>
            
            <div class="process-steps">
                <div class="process-step fade-in">
                    <div class="step-number">1</div>
                    <h4>Obtener el Compromiso de la Alta Dirección</h4>
                    <p>Es imprescindible el compromiso de la alta dirección para implantar el QMS. Debe decidir la política de calidad, sus objetivos, los servicios o productos que se ven afectados y el tiempo previsto para la implantación.</p>
                </div>
                
                <div class="process-step fade-in">
                    <div class="step-number">2</div>
                    <h4>Nombrar el Equipo del Proyecto</h4>
                    <p>La dirección nombra un representante suyo en el equipo de proyecto que, además de poseer sólidos conocimientos sobre la norma, se encargará de supervisar la implantación del QMS y liderará un equipo de apoyo.</p>
                </div>
                
                <div class="process-step fade-in">
                    <div class="step-number">3</div>
                    <h4>Capacitación del Personal</h4>
                    <p>Es preciso informar al personal de la intención de implantar un QMS. Se les da a conocer la norma ISO 9001:2015, los conceptos básicos, la relación con los objetivos estratégicos y los cambios culturales que aporta el QMS.</p>
                </div>
                
                <div class="process-step fade-in">
                    <div class="step-number">4</div>
                    <h4>Identificación de Requisitos</h4>
                    <p>Se procede a identificar todos los requisitos que afecten el QMS, tanto los del cliente, como los legales o los de los stakeholders.</p>
                </div>
                
                <div class="process-step fade-in">
                    <div class="step-number">5</div>
                    <h4>Realizar una Evaluación de Desfases</h4>
                    <p>El representante de la dirección compara el QMS existente con los requisitos del estándar ISO 9001 para determinar los desfases existentes y las acciones de mejora de calidad a planificar.</p>
                </div>
                
                <div class="process-step fade-in">
                    <div class="step-number">6</div>
                    <h4>Planificar la Implementación</h4>
                    <p>Una vez efectuados los desfases, es preciso planificar las acciones de mejora que deben realizarse para cumplir la norma. El plan de implementación para cada acción de mejora contendrá documentación, responsable, formación requerida, recursos necesarios y fecha estimada de finalización.</p>
                </div>
                
                <div class="process-step fade-in">
                    <div class="step-number">7</div>
                    <h4>Desarrollo de la Documentación</h4>
                    <p>Es preciso desarrollar la documentación obligatoria que se encuentra dispersa por la norma: manual con la declaración de la política y objetivos de calidad, procedimientos del diseño y control de los procesos QMS, definiciones de procesos e instrucciones de trabajo.</p>
                </div>
                
                <div class="process-step fade-in">
                    <div class="step-number">8</div>
                    <h4>Formación de Empleados</h4>
                    <p>Hay que formar al personal de la organización para que esté capacitado para desarrollar el plan de implementación realizado.</p>
                </div>
                
                <div class="process-step fade-in">
                    <div class="step-number">9</div>
                    <h4>Seleccionar un Certificador QMS</h4>
                    <p>Un organismo de certificación es una organización independiente que está oficialmente acreditada para emitir certificaciones QMS. El certificador auditará el QMS de su empresa y, si la auditoría es exitosa, emitirá un certificado confirmando que su QMS cumple con los requisitos de ISO 9001:2015.</p>
                </div>
                
                <div class="process-step fade-in">
                    <div class="step-number">10</div>
                    <h4>Realizar Auditorías Internas</h4>
                    <p>ISO 9001 requiere que con periodicidad se realicen auditorías internas para analizar la efectividad del QMS y comprobar que cumple los requisitos de ISO 9001. Es necesario formar a algunos empleados internos para realizar una auditoría interna completa antes de pasar a realizar la auditoría de certificación.</p>
                </div>
                
                <div class="process-step fade-in">
                    <div class="step-number">11</div>
                    <h4>Revisar la Gestión</h4>
                    <p>Busca asegurar el correcto funcionamiento de las medidas adoptadas en todo el QMS para cumplir con la norma y comprueba que se ha hecho de forma eficaz. Esta revisión incluye la búsqueda de oportunidades de mejora o la necesidad de cambios por aspectos legales o administrativos.</p>
                </div>
                
                <div class="process-step fade-in">
                    <div class="step-number">12</div>
                    <h4>Auditoría de Preevaluación</h4>
                    <p>Cuando se implanta un QMS se debe hacer una primera auditoría de preevaluación para analizar si la documentación de la organización cumple con lo establecido en la norma y que se cumplen los requisitos estándar de la norma.</p>
                </div>
                
                <div class="process-step fade-in">
                    <div class="step-number">13</div>
                    <h4>Acciones Correctivas</h4>
                    <p>Tras la auditoría de preevaluación, se revisan los resultados obtenidos y se toman las acciones correctivas pertinentes para cumplir con la norma.</p>
                </div>
                
                <div class="process-step fade-in">
                    <div class="step-number">14</div>
                    <h4>Auditoría de Certificación</h4>
                    <p>Esta segunda auditoría comprueba que las acciones correctivas han cumplido su propósito y que el sistema de gestión de la calidad se ajusta perfectamente a la norma ISO 9001, procediendo a concederle el certificado ISO 9001 por tres años, que será revisado periódicamente para mantener la certificación.</p>
                </div>
                
                <div class="process-step fade-in">
                    <div class="step-number">15</div>
                    <h4>Mejora Continua</h4>
                    <p>La consecución de la certificación no es el final del proceso, ya que debe estar en un proceso de mejora continua para aumentar la eficiencia del sistema y estar actualizado en tecnología.</p>
                </div>
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

// Inicializar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    window.app = new QualityManagementApp();
});
