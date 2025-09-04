// Configuración de la aplicación
const APP_CONFIG = {
    sections: {
        overview: {
            title: "GOBIERNO TI - FRAMEWORK COBIT",
            subtitle: "Vista General - Tema 4: Marco de Gobierno y Gestión de TI",
            icon: "fas fa-sitemap"
        },
        introduccion: {
            title: "INTRODUCCIÓN Y OBJETIVOS",
            subtitle: "Fundamentos del gobierno TI y objetivos del tema",
            icon: "fas fa-info-circle"
        },
        iso38500: {
            title: "GOBIERNO TI: ISO 38500",
            subtitle: "Norma internacional para el gobierno de tecnologías de información",
            icon: "fas fa-certificate"
        },
        continuidad: {
            title: "CONTINUIDAD DE NEGOCIO Y RECUPERACIÓN DE DESASTRES",
            subtitle: "Planes BCP y DRP para la continuidad empresarial",
            icon: "fas fa-shield-alt"
        },
        cobit: {
            title: "FRAMEWORK COBIT",
            subtitle: "Marco de negocio para gobierno y gestión de TI",
            icon: "fas fa-cogs"
        },
        principios: {
            title: "PRINCIPIOS COBIT",
            subtitle: "Los 5 principios fundamentales de COBIT 5",
            icon: "fas fa-star"
        },
        capacidad: {
            title: "MODELO DE CAPACIDAD DE LOS PROCESOS",
            subtitle: "6 niveles de capacidad para evaluación de procesos",
            icon: "fas fa-chart-line"
        }
    }
};

// Clase principal de la aplicación
class GobiernoTIApp {
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
        
        // Atajos de teclado
        this.setupKeyboardShortcuts();
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
        const contentContainer = document.getElementById('dynamicContent');
        if (contentContainer) {
            contentContainer.innerHTML = this.getSectionContent(sectionName);
            
            // Aplicar animaciones de entrada
            this.applyFadeInAnimation(contentContainer);
        }
    }
    
    getSectionContent(sectionName) {
        switch(sectionName) {
            case 'overview':
                return this.getOverviewContent();
            case 'introduccion':
                return this.getIntroduccionContent();
            case 'iso38500':
                return this.getISO38500Content();
            case 'continuidad':
                return this.getContinuidadContent();
            case 'cobit':
                return this.getCOBITContent();
            case 'principios':
                return this.getPrincipiosContent();
            case 'capacidad':
                return this.getCapacidadContent();
            default:
                return '<p>Contenido no disponible</p>';
        }
    }
    
    getOverviewContent() {
        return `
            <div class="content-card fade-in">
                <h3><i class="fas fa-crown me-2"></i>¿Qué es el Gobierno TI?</h3>
                <p>El gobierno de tecnologías de información es una parte fundamental del gobierno corporativo que permite a los directivos definir y organizar estructuras y procesos que garanticen que el entorno TI esté alineado con la estrategia empresarial.</p>
            </div>
            
            <div class="overview-grid">
                <div class="overview-card fade-in" onclick="app.switchSection('introduccion')">
                    <i class="fas fa-info-circle"></i>
                    <h4>Introducción y Objetivos</h4>
                    <p>Fundamentos del gobierno TI y objetivos estratégicos para la competitividad empresarial</p>
                </div>
                
                <div class="overview-card fade-in" onclick="app.switchSection('iso38500')">
                    <i class="fas fa-certificate"></i>
                    <h4>ISO 38500</h4>
                    <p>Norma internacional con 6 principios fundamentales para el gobierno de TI</p>
                </div>
                
                <div class="overview-card fade-in" onclick="app.switchSection('continuidad')">
                    <i class="fas fa-shield-alt"></i>
                    <h4>Continuidad de Negocio</h4>
                    <p>Planes BCP y DRP para garantizar la continuidad empresarial ante desastres</p>
                </div>
                
                <div class="overview-card fade-in" onclick="app.switchSection('cobit')">
                    <i class="fas fa-cogs"></i>
                    <h4>Framework COBIT</h4>
                    <p>Marco de negocio para gobierno y gestión de TI más utilizado mundialmente</p>
                </div>
                
                <div class="overview-card fade-in" onclick="app.switchSection('principios')">
                    <i class="fas fa-star"></i>
                    <h4>Principios COBIT</h4>
                    <p>Los 5 principios fundamentales que rigen el framework COBIT 5</p>
                </div>
                
                <div class="overview-card fade-in" onclick="app.switchSection('capacidad')">
                    <i class="fas fa-chart-line"></i>
                    <h4>Modelo de Capacidad</h4>
                    <p>6 niveles de capacidad para evaluar y mejorar los procesos tecnológicos</p>
                </div>
            </div>
            
            <div class="content-card fade-in">
                <h3><i class="fas fa-lightbulb me-2"></i>Beneficios del Gobierno TI</h3>
                <ul>
                    <li><strong>Alineamiento estratégico:</strong> TI alineada con objetivos empresariales</li>
                    <li><strong>Gestión de riesgos:</strong> Control y mitigación de riesgos tecnológicos</li>
                    <li><strong>Optimización de recursos:</strong> Uso eficiente de inversiones en TI</li>
                    <li><strong>Valor empresarial:</strong> Generación de valor a través de TI</li>
                    <li><strong>Cumplimiento:</strong> Adherencia a regulaciones y estándares</li>
                </ul>
            </div>
        `;
    }
    
    getIntroduccionContent() {
        return `
            <div class="content-card fade-in">
                <h3><i class="fas fa-target me-2"></i>Objetivos del Tema</h3>
                <p>Este tema tiene como objetivo principal proporcionar una comprensión profunda de las mejores prácticas para el gobierno de tecnologías de información, con especial énfasis en el framework COBIT y la norma ISO 38500.</p>
            </div>
            
            <div class="content-card fade-in">
                <h3><i class="fas fa-bullseye me-2"></i>Objetivos Específicos</h3>
                <ul>
                    <li><strong>Conocer las mejores prácticas</strong> para el gobierno de tecnologías de la información</li>
                    <li><strong>Describir el framework COBIT</strong> y sus cinco principios básicos</li>
                    <li><strong>Reflexionar sobre el modelo</strong> de funcionamiento del framework COBIT</li>
                    <li><strong>Entender la importancia</strong> de la continuidad del negocio</li>
                    <li><strong>Comprender el modelo de capacidad</strong> para evaluación de procesos</li>
                </ul>
            </div>
            
            <div class="content-card fade-in">
                <h3><i class="fas fa-chart-bar me-2"></i>Importancia del Gobierno TI</h3>
                <p>Una de las principales preocupaciones de los cuadros directivos de una empresa viene dada por la necesidad de tomar decisiones estratégicas en el ámbito de las tecnologías de la información. El gobierno TI se ha implantado en los más altos estamentos empresariales y debe abordarse al mismo nivel que las decisiones financieras para la competitividad y supervivencia de la organización.</p>
                
                <p>La dirección reclama al sector tecnológico un modelo de gobierno que les permita basar sus decisiones en procesos testados y que les permita orientar su estrategia empresarial considerando su entramado TI.</p>
            </div>
            
            <div class="content-card fade-in">
                <h3><i class="fas fa-road me-2"></i>Estructura del Tema</h3>
                <p>El tema comienza con una descripción de la norma ISO 38500 creada para el gobierno TI, junto con la necesidad de implantar un plan para la continuidad del negocio y otro para la recuperación de desastres. Una vez vistos estos aspectos básicos de gobierno TI, se adentra en la descripción del framework COBIT, así como sus principios y modelo de capacidad de procesos.</p>
            </div>
        `;
    }
    
    getISO38500Content() {
        return `
            <div class="content-card fade-in">
                <h3><i class="fas fa-certificate me-2"></i>Definición de Gobierno TI</h3>
                <p>El Information Technology Governance Institute (ITGI) define el gobierno TI como una parte plenamente incorporada en el gobierno de una corporación, donde los directivos deben definir y organizar estructuras y procesos que garanticen que el entorno TI esté desempeñando sus tareas conforme a lo esperado y perfectamente alineado con la estrategia empresarial.</p>
            </div>
            
            <div class="content-card fade-in">
                <h3><i class="fas fa-file-contract me-2"></i>Plan Director TI</h3>
                <p>Este alineamiento queda plasmado en un plan director, elaborado conjuntamente por la alta dirección y el departamento TI, a uno o dos años donde se reflejen los planes de mantenimiento, innovación y mejora continua que la dirección tiene previsto establecer para mantener toda la infraestructura TI a la altura del mercado y evitar su obsolescencia.</p>
            </div>
            
            <div class="content-card fade-in">
                <h3><i class="fas fa-shield-alt me-2"></i>Beneficios de ISO 38500</h3>
                <p>La International Standard Organization (ISO) ha desarrollado la norma ISO/IEC 38500 que contiene una serie de principios para mejorar la eficacia y eficiencia de las empresas y que puede ser empleada por cualquier organización para que la dirección controle sus sistemas TI y así garantizar la confidencialidad, integridad y disponibilidad de su información.</p>
                
                <ul>
                    <li>Destaca la importancia del gobierno de TI debido a los riesgos involucrados</li>
                    <li>Anima a las empresas a utilizar estándares apropiados para su gobierno TI</li>
                    <li>Facilita un marco de 6 principios básicos para la dirección</li>
                    <li>Incide en que un buen gobierno corporativo de TI ayuda a asegurar la conformidad</li>
                </ul>
            </div>
            
            <div class="iso-principles">
                <div class="iso-principle fade-in">
                    <h4><i class="fas fa-user-tie me-2"></i>Responsabilidad</h4>
                    <p>Se debe establecer estructuras de organización de gobierno, así como asignar funciones y responsabilidades que permitan conocer el autor y la rendición de cuentas en las tareas importantes.</p>
                </div>
                
                <div class="iso-principle fade-in">
                    <h4><i class="fas fa-chess me-2"></i>Estrategia</h4>
                    <p>La planificación estratégica de TI deberá incluir la evaluación de la capacidad actual de la infraestructura TI y de los recursos humanos ante futuras necesidades de la empresa.</p>
                </div>
                
                <div class="iso-principle fade-in">
                    <h4><i class="fas fa-shopping-cart me-2"></i>Adquisición</h4>
                    <p>En las adquisiciones de recursos de TI hay que analizar su integración con el resto de infraestructura TI ya presente. Toda adquisición se ve como un cambio organizacional.</p>
                </div>
                
                <div class="iso-principle fade-in">
                    <h4><i class="fas fa-chart-line me-2"></i>Desempeño</h4>
                    <p>Hay que incorporar procesos de medición del desempeño para asegurar que existe una supervisión de los procesos transparente y fiable.</p>
                </div>
                
                <div class="iso-principle fade-in">
                    <h4><i class="fas fa-gavel me-2"></i>Conformidad</h4>
                    <p>En el mercado actual, las organizaciones precisan cumplir, cada vez más, con los requisitos legales o regulatorios sin que afecten al desempeño de su organización.</p>
                </div>
                
                <div class="iso-principle fade-in">
                    <h4><i class="fas fa-users me-2"></i>Comportamiento Humano</h4>
                    <p>La implementación de TI lleva aparejados cambios culturales en las personas y clientes que trabajan con la organización. Los directores comunicarán claramente los objetivos.</p>
                </div>
            </div>
        `;
    }
    
    getContinuidadContent() {
        return `
            <div class="content-card fade-in">
                <h3><i class="fas fa-shield-alt me-2"></i>Importancia de la Continuidad</h3>
                <p>Una de las tareas indispensables en una organización TI es la necesidad de disponer de planes de continuidad de negocio que permitan a una empresa enfrentarse a las posibles eventualidades que puedan surgir. La disposición de este tipo de plan concede a la empresa una reputación empresarial que otorga confianza a sus clientes y proveedores.</p>
                
                <p><strong>Dato importante:</strong> Cerca del 60% de las organizaciones que sufren un problema inesperado y carecen de un BCP o un DRP, no continúan su actividad en menos de 3 años.</p>
            </div>
            
            <div class="content-card fade-in">
                <h3><i class="fas fa-file-alt me-2"></i>Planes BCP y DRP</h3>
                <p>La existencia del plan de continuidad del negocio es una de las cuestiones que observan los auditores de cara a conocer la estabilidad empresarial y para analizar las acciones previstas en caso de siniestro. El auditor confirmará que la organización posee:</p>
                
                <ul>
                    <li><strong>BCP (Business Continuity Plan):</strong> Plan de continuidad del negocio</li>
                    <li><strong>DRP (Disaster Recovery Plan):</strong> Plan de recuperación ante desastres</li>
                </ul>
            </div>
            
            <div class="content-card fade-in">
                <h3><i class="fas fa-cogs me-2"></i>ISO 22301</h3>
                <p>Esta ISO 22301 indica cuáles son las bases de un sistema de gestión de continuidad de negocio, mostrando el proceso a seguir para el desarrollo e implementación de un BCP, junto a los principios y términos más empleados.</p>
                
                <p>Esta norma puede aplicarse en cualquier organización, independientemente de su tamaño o área de aplicación, de cara a garantizar que la empresa está preparada para continuar trabajando ante situaciones inesperadas.</p>
            </div>
            
            <div class="content-card fade-in">
                <h3><i class="fas fa-list-ol me-2"></i>4 Etapas NIST para Desarrollo de BCP</h3>
                <div class="process-steps">
                    <div class="process-step">
                        <h4><i class="fas fa-play me-2"></i>1. Inicialización</h4>
                        <p>Elabora una relación de las principales operaciones y servicios de suministro, estableciendo un plan de asignación de responsabilidades sobre estos servicios críticos.</p>
                    </div>
                    
                    <div class="process-step">
                        <h4><i class="fas fa-search me-2"></i>2. Definición del BIA</h4>
                        <p>Su objetivo es conocer el impacto que una eventualidad inesperada provoca en la organización, por lo que se debe realizar una evaluación profunda de procesos de la organización.</p>
                    </div>
                    
                    <div class="process-step">
                        <h4><i class="fas fa-edit me-2"></i>3. Desarrollo del BCP</h4>
                        <p>Se redacta el BCP con referencias al software, hardware, instalaciones, personal, suministros… tanto a largo, como a corto plazo, describiendo los recursos a emplear.</p>
                    </div>
                    
                    <div class="process-step">
                        <h4><i class="fas fa-check-circle me-2"></i>4. Aprobación e Implementación</h4>
                        <p>Su aprobación la realiza la dirección de la organización, quienes deben contribuir a divulgar entre sus empleados la existencia del plan para saber cómo proceder ante una eventualidad.</p>
                    </div>
                </div>
            </div>
            
            <div class="content-card fade-in">
                <h3><i class="fas fa-tools me-2"></i>7 Fases INCIBE para DRP</h3>
                <div class="process-steps">
                    <div class="process-step">
                        <h4><i class="fas fa-link me-2"></i>1. Alinear DRP con BCP</h4>
                        <p>Focalizando ambos esfuerzos en aplicaciones o sistemas indispensables para la empresa.</p>
                    </div>
                    
                    <div class="process-step">
                        <h4><i class="fas fa-exclamation-triangle me-2"></i>2. Evaluación de Riesgos</h4>
                        <p>Para conocer las amenazas posibles a las que se enfrenta la organización y puedan afectar a la continuidad del negocio.</p>
                    </div>
                    
                    <div class="process-step">
                        <h4><i class="fas fa-chart-pie me-2"></i>3. Realizar BIA</h4>
                        <p>Identifica las necesidades de la organización en términos de recuperación, para los servicios críticos que afecten al funcionamiento de la organización.</p>
                    </div>
                    
                    <div class="process-step">
                        <h4><i class="fas fa-wrench me-2"></i>4. Implementar Acciones</h4>
                        <p>Se trata de implementar actividades que permitan volver a operar normalmente en el menor tiempo posible.</p>
                    </div>
                    
                    <div class="process-step">
                        <h4><i class="fas fa-vial me-2"></i>5. Ejecutar Pruebas</h4>
                        <p>El DRP debe ser probado con periodicidad y comprobar que las acciones estimadas de recuperación son las correctas.</p>
                    </div>
                    
                    <div class="process-step">
                        <h4><i class="fas fa-arrow-up me-2"></i>6. Mejora Continua</h4>
                        <p>La información proveniente de las pruebas ejecutadas facilita la toma de decisiones de cara a la actualización y mejora del plan establecido.</p>
                    </div>
                    
                    <div class="process-step">
                        <h4><i class="fas fa-graduation-cap me-2"></i>7. Capacitación y Difusión</h4>
                        <p>Es preciso que todas las personas afectadas por el plan conozcan su contenido y sus responsabilidades en caso de su aplicación.</p>
                    </div>
                </div>
            </div>
        `;
    }
    
    getCOBITContent() {
        return `
            <div class="content-card fade-in">
                <h3><i class="fas fa-cogs me-2"></i>¿Qué es COBIT?</h3>
                <p>COBIT es un marco de negocio para el gobierno y la gestión de las TI de la empresa que las ayuda a lograr sus objetivos de gobierno y a efectuar una correcta gestión tecnológica, manteniendo un equilibrio entre el tratamiento del riesgo, la utilización de recursos y la obtención de beneficios empresariales.</p>
            </div>
            
            <div class="content-card fade-in">
                <h3><i class="fas fa-chart-line me-2"></i>Importancia del Gobierno TI</h3>
                <p>La importancia adquirida hoy en día por la información dentro de las empresas, hace que el papel que desempeña la tecnología dentro de ellas sea de suma importancia. La inversión que realizan en innovación tecnológica busca obtener un resultado económico positivo que permita alcanzar sus objetivos de forma eficiente.</p>
                
                <p>Los directivos, a través del gobierno TI, buscan:</p>
                <ul>
                    <li>Mantener una información de alta calidad que les pueda ayudar en su toma de decisiones</li>
                    <li>Mantener los riesgos TI en un nivel aceptable</li>
                    <li>Mejorar los actuales costes de los servicios tecnológicos</li>
                </ul>
            </div>
            
            <div class="content-card fade-in">
                <h3><i class="fas fa-star me-2"></i>Los 5 Principios de COBIT 5</h3>
                <p>COBIT 5 está conformado por cinco principios básicos que facilitan el gobierno y la gestión TI:</p>
                
                <div class="principles-grid">
                    <div class="principle-card">
                        <h4><i class="fas fa-handshake me-2"></i>1. Satisfacer las necesidades de las partes interesadas</h4>
                        <p>Generación de valor para accionistas a través de la optimización de riesgos y recursos.</p>
                    </div>
                    
                    <div class="principle-card">
                        <h4><i class="fas fa-expand-arrows-alt me-2"></i>2. Cubrir la empresa extremo a extremo</h4>
                        <p>Integración completa del gobierno TI en toda la estructura empresarial.</p>
                    </div>
                    
                    <div class="principle-card">
                        <h4><i class="fas fa-puzzle-piece me-2"></i>3. Aplicar un marco de referencia único integrado</h4>
                        <p>Integración con otros marcos como ITIL, PMBOK, PRINCE2 y estándares ISO.</p>
                    </div>
                    
                    <div class="principle-card">
                        <h4><i class="fas fa-eye me-2"></i>4. Hacer posible un enfoque holístico</h4>
                        <p>Consideración de todos los catalizadores que influyen en el gobierno y gestión.</p>
                    </div>
                    
                    <div class="principle-card">
                        <h4><i class="fas fa-layer-group me-2"></i>5. Separar el gobierno de la gestión</h4>
                        <p>Distinción clara entre responsabilidades del consejo de administración y la dirección ejecutiva.</p>
                    </div>
                </div>
            </div>
            
            <div class="content-card fade-in">
                <h3><i class="fas fa-sitemap me-2"></i>Modelo de Referencia de Procesos</h3>
                <p>COBIT 5 incorpora un modelo de referencia de procesos que define en detalle los procesos de gobierno y gestión que se encuentran con mayor frecuencia en organizaciones con actividades TI.</p>
                
                <div class="row">
                    <div class="col-md-6">
                        <h4><i class="fas fa-crown me-2"></i>Gobierno (5 procesos)</h4>
                        <p>Comprende procesos orientados a evaluar, orientar y supervisar.</p>
                    </div>
                    <div class="col-md-6">
                        <h4><i class="fas fa-cogs me-2"></i>Gestión (32 procesos)</h4>
                        <p>Se subdivide en 4 subdominios:</p>
                        <ul>
                            <li>Alinear, planificar y organizar: 13 procesos</li>
                            <li>Construir, adquirir e implementar: 10 procesos</li>
                            <li>Entregar, dar servicio y soporte: 6 procesos</li>
                            <li>Supervisar, evaluar y valorar: 3 procesos</li>
                        </ul>
                    </div>
                </div>
            </div>
        `;
    }
    
    getPrincipiosContent() {
        return `
            <div class="content-card fade-in">
                <h3><i class="fas fa-star me-2"></i>Los 5 Principios Fundamentales de COBIT 5</h3>
                <p>Estos principios proporcionan las bases para el gobierno y la gestión de TI en las organizaciones, permitiendo un enfoque estructurado y sistemático.</p>
            </div>
            
            <div class="principles-grid">
                <div class="principle-card fade-in">
                    <h4><i class="fas fa-handshake me-2"></i>1. Satisfacer las necesidades de las partes interesadas</h4>
                    <p>Uno de los principales objetivos empresariales es la creación de valor para sus accionistas, por lo que la generación de valor debe estar entre sus objetivos prioritarios.</p>
                    
                    <h5>Cascada de Metas en 4 Pasos:</h5>
                    <ul>
                        <li><strong>Paso 1:</strong> Los motivos de las partes interesadas influyen en las necesidades</li>
                        <li><strong>Paso 2:</strong> Las necesidades desencadenan metas empresariales (17 objetivos genéricos)</li>
                        <li><strong>Paso 3:</strong> Cascada de metas de empresa a metas relacionadas con TI (17 metas TI)</li>
                        <li><strong>Paso 4:</strong> Cascada de metas TI hacia metas catalizadoras</li>
                    </ul>
                </div>
                
                <div class="principle-card fade-in">
                    <h4><i class="fas fa-expand-arrows-alt me-2"></i>2. Cubrir la empresa extremo a extremo</h4>
                    <p>En su aplicación, COBIT 5 contempla al gobierno de TI integrado plenamente en toda la estructura empresarial y que cubre la misma de extremo a extremo.</p>
                    
                    <p>Esta integración se efectúa mediante catalizadores que permiten definir para cada procesamiento de información los requisitos necesarios y su propio ciclo de vida.</p>
                    
                    <h5>Catalizadores de Gobierno:</h5>
                    <ul>
                        <li>Marcos de referencia</li>
                        <li>Estructuras</li>
                        <li>Principios</li>
                        <li>Procesos</li>
                        <li>Buenas prácticas</li>
                        <li>Recursos corporativos</li>
                    </ul>
                </div>
                
                <div class="principle-card fade-in">
                    <h4><i class="fas fa-puzzle-piece me-2"></i>3. Aplicar un marco de referencia único integrado</h4>
                    <p>COBIT 5 se presenta como un marco de referencia único que integra los mejores marcos de ISACA y está alineado con otros estándares y marcos de referencia.</p>
                    
                    <h5>Marcos Integrados:</h5>
                    <ul>
                        <li>ITIL (Information Technology Infrastructure Library)</li>
                        <li>PMBOK (Project Management Body of Knowledge)</li>
                        <li>PRINCE2 (PRojects IN Controlled Environments 2)</li>
                        <li>Estándares ISO</li>
                    </ul>
                    
                    <p>El marco define un grupo de catalizadores de gobierno y gestión que habilitan una estructura en la que las organizaciones puedan basarse para implantar buenas prácticas.</p>
                </div>
                
                <div class="principle-card fade-in">
                    <h4><i class="fas fa-eye me-2"></i>4. Hacer posible un enfoque holístico</h4>
                    <p>Los catalizadores son factores que influyen en el funcionamiento del gobierno y la gestión de una empresa TI. Sus ámbitos de acción están predeterminados por la cascada de metas de la organización.</p>
                    
                    <h5>7 Categorías de Catalizadores:</h5>
                    <ul>
                        <li><strong>Principios, políticas y marcos de referencia:</strong> Guías prácticas para gestionar la actividad diaria</li>
                        <li><strong>Procesos:</strong> Conjunto de prácticas y actividades para alcanzar metas TI</li>
                        <li><strong>Estructuras organizativas:</strong> Entidades que toman decisiones principales</li>
                        <li><strong>Cultura, ética y comportamiento:</strong> Factor importante para alcanzar objetivos</li>
                        <li><strong>Información:</strong> Producto fundamental de la empresa</li>
                        <li><strong>Servicios, infraestructuras y aplicaciones:</strong> Cualquier infraestructura que trabaje con información</li>
                        <li><strong>Personas, habilidades y competencias:</strong> Conocimiento de habilidades del personal</li>
                    </ul>
                </div>
                
                <div class="principle-card fade-in">
                    <h4><i class="fas fa-layer-group me-2"></i>5. Separar el gobierno de la gestión</h4>
                    <p>Dado que gobierno TI y gestión TI van a precisar de estructuras organizativas distintas, están compuestas por actividades diferentes y atienden a propósitos distintos, COBIT 5 realiza distingue ambas disciplinas.</p>
                    
                    <h5>Gobierno (Consejo de Administración):</h5>
                    <ul>
                        <li>Evaluar necesidades, condiciones y opciones</li>
                        <li>Comprobar que se logran las metas corporativas</li>
                        <li>Establecer priorización y toma de decisiones</li>
                        <li>Basarse en el rendimiento de los procesos</li>
                    </ul>
                    
                    <h5>Gestión (Dirección Ejecutiva - CEO):</h5>
                    <ul>
                        <li>Planificar, construir, ejecutar y controlar</li>
                        <li>Actividades establecidas por el gobierno</li>
                        <li>Correcto alineamiento</li>
                        <li>Alcanzar las metas corporativas</li>
                    </ul>
                </div>
            </div>
        `;
    }
    
    getCapacidadContent() {
        return `
            <div class="content-card fade-in">
                <h3><i class="fas fa-chart-line me-2"></i>Modelo de Capacidad de los Procesos</h3>
                <p>Para medir el estado actual en que se encuentran los procesos tecnológicos de una empresa y para conocer la mejor forma de avanzar hacia el siguiente nivel deseado, COBIT 5 facilita a las organizaciones un modelo de capacidad de los procesos basado en la norma ISO/IEC 15504 de evaluación de procesos en ingeniería del software.</p>
                
                <p>Este modelo de capacidad permitirá efectuar una evaluación de los procesos tecnológicos y, en función de los resultados o mediciones obtenidos, establecerá cuáles son las áreas de mejora donde focalizar la acción.</p>
            </div>
            
            <div class="content-card fade-in">
                <h3><i class="fas fa-info-circle me-2"></i>Consideraciones Importantes</h3>
                <p>Hay que considerar que los procesos son solo uno de los siete catalizadores de buen gobierno, por lo que su nivel de capacidad no es el del global de la empresa, al tener que considerar, igualmente, al resto de catalizadores.</p>
            </div>
            
            <div class="content-card fade-in">
                <h3><i class="fas fa-layer-group me-2"></i>Los 6 Niveles de Capacidad</h3>
                <p>El modelo ofrece 6 niveles de capacidad, donde cada nivel de capacidad solo puede alcanzarse si el nivel inferior se ha alcanzado completamente:</p>
            </div>
            
            <div class="capacity-levels">
                <div class="capacity-level fade-in">
                    <h4><i class="fas fa-times-circle me-2"></i>Nivel 0: Proceso Incompleto</h4>
                    <p>El proceso no es sistemático y no alcanza su propósito. No hay evidencia de que se esté ejecutando de manera consistente.</p>
                </div>
                
                <div class="capacity-level fade-in">
                    <h4><i class="fas fa-play-circle me-2"></i>Nivel 1: Proceso Ejecutado</h4>
                    <p>El proceso alcanza su propósito. Se ejecuta de manera consistente y produce resultados esperados.</p>
                </div>
                
                <div class="capacity-level fade-in">
                    <h4><i class="fas fa-cogs me-2"></i>Nivel 2: Proceso Gestionado</h4>
                    <p>El proceso ejecutado se implementa de forma gestionada (planificación, supervisión y ajustes), bajo un control de los resultados.</p>
                </div>
                
                <div class="capacity-level fade-in">
                    <h4><i class="fas fa-check-circle me-2"></i>Nivel 3: Proceso Establecido</h4>
                    <p>El proceso gestionado se desarrolla bajo un proceso establecido y definido para lograr los resultados de manera consistente.</p>
                </div>
                
                <div class="capacity-level fade-in">
                    <h4><i class="fas fa-chart-bar me-2"></i>Nivel 4: Proceso Predecible</h4>
                    <p>Es un proceso establecido que se ejecuta en unos límites preestablecidos. Los resultados son predecibles y consistentes.</p>
                </div>
                
                <div class="capacity-level fade-in">
                    <h4><i class="fas fa-rocket me-2"></i>Nivel 5: Proceso Optimizado</h4>
                    <p>Existe una mejora continua del proceso predecible anterior para alcanzar las metas empresariales de manera óptima.</p>
                </div>
            </div>
            
            <div class="content-card fade-in">
                <h3><i class="fas fa-lightbulb me-2"></i>Beneficios del Modelo de Capacidad</h3>
                <ul>
                    <li><strong>Evaluación objetiva:</strong> Medición sistemática del estado actual de los procesos</li>
                    <li><strong>Identificación de mejoras:</strong> Áreas específicas donde focalizar esfuerzos</li>
                    <li><strong>Planificación estratégica:</strong> Base para establecer objetivos de mejora</li>
                    <li><strong>Comparación:</strong> Benchmarking con mejores prácticas de la industria</li>
                    <li><strong>Certificación:</strong> Base para certificaciones de calidad de procesos</li>
                </ul>
            </div>
        `;
    }
    
    setupHoverEffects() {
        // Efectos hover para tarjetas
        document.addEventListener('mouseover', function(e) {
            if (e.target.closest('.overview-card, .principle-card, .iso-principle, .capacity-level, .process-step')) {
                e.target.closest('.overview-card, .principle-card, .iso-principle, .capacity-level, .process-step').style.transform = 'translateY(-2px)';
            }
        });
        
        document.addEventListener('mouseout', function(e) {
            if (e.target.closest('.overview-card, .principle-card, .iso-principle, .capacity-level, .process-step')) {
                e.target.closest('.overview-card, .principle-card, .iso-principle, .capacity-level, .process-step').style.transform = 'translateY(0)';
            }
        });
    }
    
    applyFadeInAnimation(container) {
        const elements = container.querySelectorAll('.fade-in');
        elements.forEach((element, index) => {
            element.style.animationDelay = `${index * 0.1}s`;
        });
    }
    
    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (event) => {
            // Ctrl/Cmd + 0 para regresar al índice principal
            if ((event.ctrlKey || event.metaKey) && event.key === '0') {
                event.preventDefault();
                window.location.href = '../index.html';
            }
            
            // Ctrl/Cmd + H para regresar al índice principal (alternativa)
            if ((event.ctrlKey || event.metaKey) && event.key === 'h') {
                event.preventDefault();
                window.location.href = '../index.html';
            }
        });
    }
}

// Inicializar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    window.app = new GobiernoTIApp();
});
