// Tema 9: Modelo CMMI - Capability Maturity Model Integration
// Configuración de la aplicación
const APP_CONFIG = {
    theme: "CMMI",
    color: "#3b82f6",
    sections: {
        introduccion: {
            title: "Introducción y Objetivos",
            subtitle: "Fundamentos del Modelo CMMI",
            icon: "fas fa-info-circle"
        },
        definicion: {
            title: "¿Qué es CMMI?",
            subtitle: "Definición y Características del Modelo",
            icon: "fas fa-question-circle"
        },
        niveles: {
            title: "Niveles CMMI",
            subtitle: "Niveles de Capacidad y Madurez",
            icon: "fas fa-chart-line"
        },
        desarrollo: {
            title: "CMMI para Desarrollo",
            subtitle: "Modelo CMMI-DEV",
            icon: "fas fa-code"
        },
        servicios: {
            title: "CMMI para Servicios",
            subtitle: "Modelo CMMI-SVC",
            icon: "fas fa-concierge-bell"
        },
        certificacion: {
            title: "Certificación CMMI",
            subtitle: "Certificaciones y Evaluaciones",
            icon: "fas fa-certificate"
        },
        conceptos: {
            title: "Conceptos Técnicos Avanzados",
            subtitle: "Áreas de Proceso y Métricas",
            icon: "fas fa-cogs"
        },
        metodologias: {
            title: "Metodologías Complementarias",
            subtitle: "Integración con Otros Marcos",
            icon: "fas fa-link"
        },
        casos: {
            title: "Casos de Estudio Prácticos",
            subtitle: "Implementaciones Reales",
            icon: "fas fa-building"
        },
        herramientas: {
            title: "Herramientas y Plantillas",
            subtitle: "Recursos Prácticos",
            icon: "fas fa-tools"
        },
        metricas: {
            title: "Métricas y KPIs",
            subtitle: "Indicadores de Progreso",
            icon: "fas fa-chart-bar"
        },
        overview: {
            title: "Vista General CMMI",
            subtitle: "Resumen Completo del Modelo",
            icon: "fas fa-sitemap"
        }
    }
};

// Contenido de las secciones
const SECTION_CONTENT = {
    introduccion: `
        <div class="content-section">
            <h3><i class="fas fa-info-circle me-2"></i>Introducción al Modelo CMMI</h3>
            <p>El <strong>Capability Maturity Model Integration (CMMI)</strong> es un marco de trabajo que evalúa la madurez y la capacidad de una organización para desarrollar, mantener y adquirir productos y servicios de manera eficiente.</p>
            
            <h4>Objetivos del Tema</h4>
            <ul>
                <li><strong>Comprender</strong> el modelo CMMI y el significado de sus diferentes niveles</li>
                <li><strong>Exponer</strong> las mejores prácticas a implantar para el desarrollo de productos</li>
                <li><strong>Describir</strong> los mejores procesos para la mejora en la prestación de servicios</li>
            </ul>

            <div class="highlight-box">
                <h4><i class="fas fa-lightbulb me-2"></i>Importancia del CMMI</h4>
                <p>Las organizaciones recurren al modelo CMMI para mejorar su rendimiento y obtener mayor eficiencia en sus procesos, clasificándose en determinados niveles y aplicando prácticas que les ayuden a avanzar al siguiente nivel.</p>
            </div>

            <h4>Estructura del Tema</h4>
            <p>El tema se estructura en cinco apartados principales:</p>
            <ol>
                <li><strong>Definición del modelo</strong> y sus diferentes modelos de madurez</li>
                <li><strong>CMMI para desarrollo</strong> - Mejores prácticas para desarrollo de productos</li>
                <li><strong>CMMI para servicios</strong> - Procesos para la prestación de servicios</li>
                <li><strong>Certificación CMMI</strong> - Proceso de evaluación y certificación</li>
                <li><strong>Niveles de capacidad y madurez</strong> - Clasificación organizacional</li>
            </ol>
        </div>
    `,

    definicion: `
        <div class="content-section">
            <h3><i class="fas fa-question-circle me-2"></i>¿Qué es CMMI?</h3>
            
            <p>Un <strong>modelo de madurez y capacidad (CMM)</strong> es una representación simplificada que contiene los elementos principales de procesos eficaces obtenidos del mundo de la calidad.</p>

            <h4>Definición de CMMI</h4>
            <div class="highlight-box">
                <p><strong>CMMI</strong> es un modelo o marco de trabajo que evalúa la madurez y la capacidad de una organización, cualesquiera que sea, y le ofrece las mejores prácticas, ya aplicadas, para desarrollar, mantener y adquirir productos y servicios.</p>
            </div>

            <h4>Historia y Evolución</h4>
            <ul>
                <li><strong>1989:</strong> Primer CMM desarrollado por Humphrey para el SEI de Carnegie Mellon</li>
                <li><strong>Orientación inicial:</strong> Organizaciones de desarrollo de software</li>
                <li><strong>Extensión:</strong> Integración de buenas prácticas en todos los sectores</li>
                <li><strong>Resultado:</strong> Modelo CMMI orientado a la mejora total de la empresa</li>
            </ul>

            <h4>Objetivos del Modelo CMMI</h4>
            <div class="overview-grid">
                <div class="overview-card">
                    <div class="card-icon"><i class="fas fa-cogs"></i></div>
                    <div class="card-title">Marco de Referencia</div>
                    <div class="card-description">Facilitar un marco que permita a una organización la mejora de sus procesos</div>
                </div>
                <div class="overview-card">
                    <div class="card-icon"><i class="fas fa-chart-line"></i></div>
                    <div class="card-title">Guía de Mejora</div>
                    <div class="card-description">Disponer de una guía que mejore la capacidad de desarrollo, adquisición y mantenimiento</div>
                </div>
                <div class="overview-card">
                    <div class="card-icon"><i class="fas fa-tools"></i></div>
                    <div class="card-title">Buenas Prácticas</div>
                    <div class="card-description">Exponer un conjunto de buenas prácticas para ingeniería y gestión</div>
                </div>
            </div>

            <h4>Modelos CMMI (Versión 1.3)</h4>
            <div class="process-areas">
                <div class="process-area">
                    <div class="area-title">CMMI para Desarrollo</div>
                    <div class="area-code">CMMI-DEV</div>
                    <div class="area-description">Orientado hacia organizaciones que tienen como actividad principal el desarrollo y mantenimiento de productos</div>
                </div>
                <div class="process-area">
                    <div class="area-title">CMMI para Servicios</div>
                    <div class="area-code">CMMI-SVC</div>
                    <div class="area-description">Modelo orientado hacia organizaciones cuya actividad principal es la prestación de servicios</div>
                </div>
                <div class="process-area">
                    <div class="area-title">CMMI para Adquisición</div>
                    <div class="area-code">CMMI-ACQ</div>
                    <div class="area-description">Orientado hacia empresas que subcontratan sus desarrollos y la gestión de compras</div>
                </div>
            </div>
        </div>
    `,

    niveles: `
        <div class="content-section">
            <h3><i class="fas fa-chart-line me-2"></i>Niveles CMMI</h3>
            
            <p>El modelo CMMI establece <strong>dos categorías de niveles</strong> para evaluar a las organizaciones:</p>

            <h4>Niveles de Capacidad</h4>
            <p>Permiten a una organización establecer una mejora continua de un área de proceso individual seleccionado por la organización.</p>
            
            <div class="cmmi-levels">
                <div class="level-card">
                    <div class="level-number">0</div>
                    <div class="level-name">Incompleto</div>
                    <div class="level-description">Proceso no se realiza o se realiza de forma parcial. Rendimiento inconsistente.</div>
                </div>
                <div class="level-card">
                    <div class="level-number">1</div>
                    <div class="level-name">Realizado</div>
                    <div class="level-description">Proceso ejecuta actividades y obtiene resultados esperados, pero se desconoce su trazabilidad.</div>
                </div>
                <div class="level-card">
                    <div class="level-number">2</div>
                    <div class="level-name">Gestionado</div>
                    <div class="level-description">Proceso planificado y ejecutado por personal cualificado cumpliendo políticas organizacionales.</div>
                </div>
                <div class="level-card">
                    <div class="level-number">3</div>
                    <div class="level-name">Definido</div>
                    <div class="level-description">Procesos descritos con mayor rigurosidad, definiendo entradas, actividades, medidas y salidas.</div>
                </div>
            </div>

            <h4>Niveles de Madurez</h4>
            <p>Se refieren a la consecución de la mejora de procesos en múltiples áreas de trabajo. Se establecen 5 niveles:</p>

            <div class="cmmi-levels">
                <div class="level-card">
                    <div class="level-number">1</div>
                    <div class="level-name">Inicial</div>
                    <div class="level-description">Procesos inestables y desconocidos. Funcionamiento depende de la buena voluntad del personal.</div>
                </div>
                <div class="level-card">
                    <div class="level-number">2</div>
                    <div class="level-name">Gestionado</div>
                    <div class="level-description">Procesos planificados y ejecutados conforme a políticas organizacionales por personal cualificado.</div>
                </div>
                <div class="level-card">
                    <div class="level-number">3</div>
                    <div class="level-name">Definido</div>
                    <div class="level-description">Nivel proactivo basado en estándares definidos por la organización. Gestión correcta de costes y planificación.</div>
                </div>
                <div class="level-card">
                    <div class="level-number">4</div>
                    <div class="level-name">Gestionado Cuantitativamente</div>
                    <div class="level-description">Nivel cuantitativo con medidas detalladas del proceso y calidad del producto desarrollado.</div>
                </div>
                <div class="level-card">
                    <div class="level-number">5</div>
                    <div class="level-name">En Optimización</div>
                    <div class="level-description">Mejora continua del rendimiento mediante innovaciones tecnológicas en los procesos.</div>
                </div>
            </div>

            <div class="highlight-box">
                <h4><i class="fas fa-info-circle me-2"></i>Características Importantes</h4>
                <ul>
                    <li><strong>Cumplimiento escalonado:</strong> Alcanzar un nivel implica cumplir los niveles inferiores</li>
                    <li><strong>Enfoque en objetivos de negocio:</strong> Los beneficios se producen cuando la mejora se centra en el rendimiento del negocio</li>
                    <li><strong>Flexibilidad:</strong> CMMI no especifica procesos concretos, solo que se efectúen las prácticas recomendadas</li>
                </ul>
            </div>
        </div>
    `,

    desarrollo: `
        <div class="content-section">
            <h3><i class="fas fa-code me-2"></i>CMMI para Desarrollo</h3>
            
            <p>El <strong>CMMI-DEV</strong> es un modelo de referencia empleado por organizaciones de diferentes sectores para el desarrollo tanto de productos como de servicios.</p>

            <h4>Categorías del CMMI-DEV</h4>
            <div class="overview-grid">
                <div class="overview-card">
                    <div class="card-icon"><i class="fas fa-cogs"></i></div>
                    <div class="card-title">Gestión de Procesos</div>
                    <div class="card-description">5 áreas de proceso con actividades transversales a los proyectos</div>
                </div>
                <div class="overview-card">
                    <div class="card-icon"><i class="fas fa-project-diagram"></i></div>
                    <div class="card-title">Gestión de Proyectos</div>
                    <div class="card-description">7 áreas de proceso para planificación, monitorización y control</div>
                </div>
                <div class="overview-card">
                    <div class="card-icon"><i class="fas fa-tools"></i></div>
                    <div class="card-title">Ingeniería</div>
                    <div class="card-description">5 áreas de proceso para desarrollo y mantenimiento</div>
                </div>
                <div class="overview-card">
                    <div class="card-icon"><i class="fas fa-hands-helping"></i></div>
                    <div class="card-title">Soporte</div>
                    <div class="card-description">5 áreas de proceso que dan soporte al desarrollo</div>
                </div>
            </div>

            <h4>Áreas de Proceso por Nivel de Madurez</h4>
            
            <h5>Nivel 2: Gestionado</h5>
            <div class="process-areas">
                <div class="process-area">
                    <div class="area-title">Gestión de Configuración (CM)</div>
                    <div class="area-code">Establece y mantiene la integridad de los productos</div>
                    <div class="area-description">Identificación de configuración, control, informe del estado y auditorías</div>
                </div>
                <div class="process-area">
                    <div class="area-title">Medición y Análisis (MA)</div>
                    <div class="area-code">Desarrolla y mantiene la capacidad de medición</div>
                    <div class="area-description">Soporte a las necesidades de información gerenciales</div>
                </div>
                <div class="process-area">
                    <div class="area-title">Planificación del Proyecto (PP)</div>
                    <div class="area-code">Establece y mantiene planes del proyecto</div>
                    <div class="area-description">Define las actividades del proyecto</div>
                </div>
                <div class="process-area">
                    <div class="area-title">Gestión de Requisitos (REQM)</div>
                    <div class="area-code">Gestiona los requisitos de los productos</div>
                    <div class="area-description">Asegura la alineación entre requisitos, planes y productos</div>
                </div>
            </div>

            <h5>Nivel 3: Definido</h5>
            <div class="process-areas">
                <div class="process-area">
                    <div class="area-title">Gestión Integrada del Proyecto (IPM)</div>
                    <div class="area-code">Establece y gestiona el proyecto</div>
                    <div class="area-description">Proceso definido e integrado adaptado a partir de procesos estándar</div>
                </div>
                <div class="process-area">
                    <div class="area-title">Desarrollo de Requisitos (RD)</div>
                    <div class="area-code">Deduce, analiza y establece requisitos</div>
                    <div class="area-description">Requisitos del cliente y del producto</div>
                </div>
                <div class="process-area">
                    <div class="area-title">Solución Técnica (TS)</div>
                    <div class="area-code">Selecciona, diseña e implementa soluciones</div>
                    <div class="area-description">Soluciones para los requisitos identificados</div>
                </div>
                <div class="process-area">
                    <div class="area-title">Verificación (VER)</div>
                    <div class="area-code">Asegura cumplimiento de requisitos</div>
                    <div class="area-description">Productos seleccionados cumplen requisitos especificados</div>
                </div>
            </div>

            <h5>Niveles 4 y 5: Avanzados</h5>
            <div class="process-areas">
                <div class="process-area">
                    <div class="area-title">Rendimiento de Procesos (OPP)</div>
                    <div class="area-code">Nivel 4</div>
                    <div class="area-description">Comprensión cuantitativa del rendimiento de procesos</div>
                </div>
                <div class="process-area">
                    <div class="area-title">Análisis Causal y Resolución (CAR)</div>
                    <div class="area-code">Nivel 5</div>
                    <div class="area-description">Identifica causas de resultados y actúa para mejorar el rendimiento</div>
                </div>
            </div>
        </div>
    `,

    servicios: `
        <div class="content-section">
            <h3><i class="fas fa-concierge-bell me-2"></i>CMMI para Servicios</h3>
            
            <p>El <strong>CMMI-SVC</strong> surge de la necesidad de guiar el desarrollo y mejora de las prácticas de servicios para incrementar la satisfacción del cliente.</p>

            <h4>Características del CMMI-SVC</h4>
            <ul>
                <li><strong>Enfoque en servicios:</strong> Productos intangibles no almacenables</li>
                <li><strong>24 áreas de proceso</strong> distribuidas en 4 categorías</li>
                <li><strong>Actividades específicas:</strong> Establecer, prestar y gestionar servicios</li>
            </ul>

            <h4>Categorías del CMMI-SVC</h4>
            <div class="overview-grid">
                <div class="overview-card">
                    <div class="card-icon"><i class="fas fa-cogs"></i></div>
                    <div class="card-title">Gestión de Procesos</div>
                    <div class="card-description">5 áreas de proceso transversales (igual que CMMI-DEV)</div>
                </div>
                <div class="overview-card">
                    <div class="card-icon"><i class="fas fa-tasks"></i></div>
                    <div class="card-title">Gestión de Proyectos y Trabajos</div>
                    <div class="card-description">9 áreas de proceso enfocadas en trabajos específicos</div>
                </div>
                <div class="overview-card">
                    <div class="card-icon"><i class="fas fa-handshake"></i></div>
                    <div class="card-title">Establecimiento y Prestación de Servicios</div>
                    <div class="card-description">5 áreas de proceso específicas para servicios</div>
                </div>
                <div class="overview-card">
                    <div class="card-icon"><i class="fas fa-hands-helping"></i></div>
                    <div class="card-title">Soporte</div>
                    <div class="card-description">5 áreas de proceso de soporte (igual que CMMI-DEV)</div>
                </div>
            </div>

            <h4>Áreas de Proceso Específicas para Servicios</h4>
            
            <h5>Nivel 2: Gestionado</h5>
            <div class="process-areas">
                <div class="process-area">
                    <div class="area-title">Monitorización y Control de Trabajos (WMC)</div>
                    <div class="area-code">Proporciona información sobre el trabajo en curso</div>
                    <div class="area-description">Acciones correctivas cuando el rendimiento se desvíe del plan</div>
                </div>
                <div class="process-area">
                    <div class="area-title">Prestación de Servicios (SD)</div>
                    <div class="area-code">Presta servicios conforme a acuerdos</div>
                    <div class="area-description">Cumplimiento de acuerdos de servicio establecidos</div>
                </div>
                <div class="process-area">
                    <div class="area-title">Planificación de Trabajos (WP)</div>
                    <div class="area-code">Establece y mantiene planes de trabajos</div>
                    <div class="area-description">Define las actividades de los trabajos específicos</div>
                </div>
            </div>

            <h5>Nivel 3: Definido</h5>
            <div class="process-areas">
                <div class="process-area">
                    <div class="area-title">Gestión de Capacidad y Disponibilidad (CAM)</div>
                    <div class="area-code">Asegura rendimiento eficaz del sistema</div>
                    <div class="area-description">Recursos se provean y utilicen eficazmente para soportar requisitos del servicio</div>
                </div>
                <div class="process-area">
                    <div class="area-title">Resolución y Prevención de Incidencias (IRP)</div>
                    <div class="area-code">Asegura resolución eficaz de incidencias</div>
                    <div class="area-description">Incidencias se resuelvan a tiempo y se eviten en la medida apropiada</div>
                </div>
                <div class="process-area">
                    <div class="area-title">Desarrollo del Sistema de Servicio (SSD)</div>
                    <div class="area-code">Analiza, diseña y desarrolla sistemas de servicio</div>
                    <div class="area-description">Satisfacer acuerdos de servicio existentes o previstos</div>
                </div>
                <div class="process-area">
                    <div class="area-title">Gestión Estratégica de Servicios (STSM)</div>
                    <div class="area-code">Establece servicios estándar</div>
                    <div class="area-description">De acuerdo con necesidades y planes estratégicos</div>
                </div>
                <div class="process-area">
                    <div class="area-title">Continuidad del Servicio (SCON)</div>
                    <div class="area-code">Establece planes de continuidad</div>
                    <div class="area-description">Asegurar continuidad durante y después de alteraciones significativas</div>
                </div>
            </div>

            <div class="highlight-box">
                <h4><i class="fas fa-info-circle me-2"></i>Diferencias Clave con CMMI-DEV</h4>
                <ul>
                    <li><strong>Enfoque en servicios:</strong> Más áreas específicas para prestación de servicios</li>
                    <li><strong>Gestión de incidencias:</strong> Áreas específicas para resolución y prevención</li>
                    <li><strong>Continuidad:</strong> Enfoque en continuidad del servicio</li>
                    <li><strong>Capacidad y disponibilidad:</strong> Gestión específica de recursos de servicio</li>
                </ul>
            </div>
        </div>
    `,

    certificacion: `
        <div class="content-section">
            <h3><i class="fas fa-certificate me-2"></i>Certificación CMMI</h3>
            
            <p>Las certificaciones son uno de los principales motivos por los que las organizaciones acuden al modelo CMMI para obtener una certificación de su nivel de capacidad o madurez.</p>

            <div class="highlight-box">
                <h4><i class="fas fa-info-circle me-2"></i>Importante</h4>
                <p><strong>CMMI no es una certificación en sí</strong>, sino que el modelo permite reconocer el nivel donde se encuentran las áreas de proceso de la organización y le brinda un modelo para mejorarlo.</p>
            </div>

            <h4>Tipos de Certificaciones CMMI</h4>
            <div class="certification-grid">
                <div class="certification-card">
                    <div class="cert-icon"><i class="fas fa-user-graduate"></i></div>
                    <div class="cert-title">CMMI Associate</div>
                    <div class="cert-description">Certifica conocimientos de los tres modelos CMMI: adquisición, desarrollo y servicios</div>
                    <div class="cert-requirements">Nivel de entrada - Conocimientos fundamentales</div>
                </div>
                <div class="certification-card">
                    <div class="cert-icon"><i class="fas fa-user-tie"></i></div>
                    <div class="cert-title">CMMI Professional</div>
                    <div class="cert-description">Demuestra capacidad para aplicar el modelo CMMI en escenarios del mundo real</div>
                    <div class="cert-requirements">+3 años experiencia dominio + 2 años mejora procesos</div>
                </div>
                <div class="certification-card">
                    <div class="cert-icon"><i class="fas fa-search"></i></div>
                    <div class="cert-title">SCAMPI Lead Appraiser</div>
                    <div class="cert-description">Evaluadores que aplican el marco SCAMPI para determinar nivel de madurez</div>
                    <div class="cert-requirements">Certificación para evaluar procesos de negocio</div>
                </div>
                <div class="certification-card">
                    <div class="cert-icon"><i class="fas fa-chalkboard-teacher"></i></div>
                    <div class="cert-title">CMMI Instructor</div>
                    <div class="cert-description">Profesionales que difunden conocimiento de procesos CMMI</div>
                    <div class="cert-requirements">+10 años experiencia + 3 años en EPG o mejora procesos</div>
                </div>
            </div>

            <h4>Proceso de Evaluación SCAMPI</h4>
            <p><strong>SCAMPI (Standard CMMI Appraisal Method for Process Improvement)</strong> es el método estándar para evaluar procesos CMMI:</p>
            
            <div class="process-areas">
                <div class="process-area">
                    <div class="area-title">Preparación</div>
                    <div class="area-code">Fase 1</div>
                    <div class="area-description">Planificación y preparación de la evaluación</div>
                </div>
                <div class="process-area">
                    <div class="area-title">Ejecución</div>
                    <div class="area-code">Fase 2</div>
                    <div class="area-description">Recolección de evidencias y entrevistas</div>
                </div>
                <div class="process-area">
                    <div class="area-title">Reporte</div>
                    <div class="area-code">Fase 3</div>
                    <div class="area-description">Análisis de resultados y generación de informe</div>
                </div>
            </div>

            <h4>Beneficios de la Certificación</h4>
            <div class="overview-grid">
                <div class="overview-card">
                    <div class="card-icon"><i class="fas fa-chart-line"></i></div>
                    <div class="card-title">Mejora de Procesos</div>
                    <div class="card-description">Identificación de fortalezas y debilidades en los procesos organizacionales</div>
                </div>
                <div class="overview-card">
                    <div class="card-icon"><i class="fas fa-trophy"></i></div>
                    <div class="card-title">Competitividad</div>
                    <div class="card-description">Ventaja competitiva en el mercado y reconocimiento de calidad</div>
                </div>
                <div class="overview-card">
                    <div class="card-icon"><i class="fas fa-users"></i></div>
                    <div class="card-title">Desarrollo Profesional</div>
                    <div class="card-description">Crecimiento profesional y mejora de habilidades del equipo</div>
                </div>
            </div>

            <h4>Requisitos para Certificación</h4>
            <table class="content-table">
                <thead>
                    <tr>
                        <th>Certificación</th>
                        <th>Experiencia Requerida</th>
                        <th>Conocimientos</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>CMMI Associate</td>
                        <td>Nivel básico</td>
                        <td>Fundamentos CMMI, niveles de madurez</td>
                    </tr>
                    <tr>
                        <td>CMMI Professional</td>
                        <td>+3 años dominio + 2 años mejora</td>
                        <td>Aplicación práctica en escenarios reales</td>
                    </tr>
                    <tr>
                        <td>SCAMPI Lead Appraiser</td>
                        <td>+5 años experiencia CMMI</td>
                        <td>Metodología SCAMPI, evaluación de procesos</td>
                    </tr>
                    <tr>
                        <td>CMMI Instructor</td>
                        <td>+10 años experiencia + 3 años EPG</td>
                        <td>Conocimiento profundo y habilidades docentes</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `,

    conceptos: `
        <div class="content-section">
            <h3><i class="fas fa-cogs me-2"></i>Conceptos Técnicos Avanzados</h3>
            
            <h4>Áreas de Proceso Específicas Detalladas</h4>
            <div class="process-areas">
                <div class="process-area">
                    <div class="area-title">OPF - Organizational Process Focus</div>
                    <div class="area-code">Enfoque en Procesos Organizacionales</div>
                    <div class="area-description">Planifica, implementa y despliega mejoras de proceso basadas en fortalezas y debilidades actuales de los procesos organizacionales.</div>
                </div>
                <div class="process-area">
                    <div class="area-title">OPD - Organizational Process Definition</div>
                    <div class="area-code">Definición de Procesos Organizacionales</div>
                    <div class="area-description">Establece y mantiene un conjunto utilizable de activos de proceso, estándares del entorno de trabajo y reglas para equipos.</div>
                </div>
                <div class="process-area">
                    <div class="area-title">OT - Organizational Training</div>
                    <div class="area-code">Formación Organizacional</div>
                    <div class="area-description">Desarrolla habilidades y conocimientos de las personas para que ejecuten su rol eficientemente.</div>
                </div>
                <div class="process-area">
                    <div class="area-title">PPQA - Process and Product Quality Assurance</div>
                    <div class="area-code">Aseguramiento de Calidad</div>
                    <div class="area-description">Proporciona al personal y gerencia una visión objetiva de los procesos y productos elaborados.</div>
                </div>
                <div class="process-area">
                    <div class="area-title">CAR - Causal Analysis and Resolution</div>
                    <div class="area-code">Análisis Causal y Resolución</div>
                    <div class="area-description">Identifica causas de resultados seleccionados y actúa para mejorar el rendimiento del proceso.</div>
                </div>
            </div>

            <h4>Métricas y Medidas CMMI</h4>
            <div class="overview-grid">
                <div class="overview-card">
                    <div class="card-icon"><i class="fas fa-chart-line"></i></div>
                    <div class="card-title">Indicadores de Rendimiento</div>
                    <div class="card-description">KPIs específicos por nivel: Tiempo de desarrollo, Calidad del producto, Satisfacción del cliente</div>
                </div>
                <div class="overview-card">
                    <div class="card-icon"><i class="fas fa-calculator"></i></div>
                    <div class="card-title">Medidas de Proceso</div>
                    <div class="card-description">Métricas de eficiencia: Defectos por KLOC, Tiempo de entrega, Costo por punto de función</div>
                </div>
                <div class="overview-card">
                    <div class="card-icon"><i class="fas fa-balance-scale"></i></div>
                    <div class="card-title">Benchmarking</div>
                    <div class="card-description">Comparación con organizaciones similares: Industria, Tamaño, Complejidad del proyecto</div>
                </div>
                <div class="overview-card">
                    <div class="card-icon"><i class="fas fa-dollar-sign"></i></div>
                    <div class="card-title">ROI de CMMI</div>
                    <div class="card-description">Retorno de inversión: Reducción de costos, Mejora de calidad, Aumento de productividad</div>
                </div>
            </div>

            <h4>Herramientas de Medición</h4>
            <table class="content-table">
                <thead>
                    <tr>
                        <th>Métrica</th>
                        <th>Nivel 2</th>
                        <th>Nivel 3</th>
                        <th>Nivel 4</th>
                        <th>Nivel 5</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Defectos por KLOC</td>
                        <td>5-10</td>
                        <td>2-5</td>
                        <td>1-2</td>
                        <td>&lt;1</td>
                    </tr>
                    <tr>
                        <td>Tiempo de Desarrollo</td>
                        <td>Variable</td>
                        <td>Predecible</td>
                        <td>Optimizado</td>
                        <td>Continuamente mejorado</td>
                    </tr>
                    <tr>
                        <td>Satisfacción del Cliente</td>
                        <td>60-70%</td>
                        <td>70-80%</td>
                        <td>80-90%</td>
                        <td>90%+</td>
                    </tr>
                    <tr>
                        <td>ROI de Proyectos</td>
                        <td>1.2-1.5x</td>
                        <td>1.5-2.0x</td>
                        <td>2.0-2.5x</td>
                        <td>2.5x+</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `,

    metodologias: `
        <div class="content-section">
            <h3><i class="fas fa-link me-2"></i>Metodologías Complementarias</h3>
            
            <h4>Integración con Otros Marcos</h4>
            <div class="overview-grid">
                <div class="overview-card">
                    <div class="card-icon"><i class="fas fa-cogs"></i></div>
                    <div class="card-title">CMMI + ITIL</div>
                    <div class="card-description">Integración con gestión de servicios: Procesos de servicio, Gestión de incidentes, Mejora continua</div>
                </div>
                <div class="overview-card">
                    <div class="card-icon"><i class="fas fa-crown"></i></div>
                    <div class="card-title">CMMI + COBIT</div>
                    <div class="card-description">Alineación con gobierno TI: Estrategia empresarial, Gestión de recursos, Evaluación de riesgos</div>
                </div>
                <div class="overview-card">
                    <div class="card-icon"><i class="fas fa-shield-alt"></i></div>
                    <div class="card-title">CMMI + ISO 27001</div>
                    <div class="card-description">Seguridad de la información: Gestión de riesgos, Controles de seguridad, Auditoría</div>
                </div>
                <div class="overview-card">
                    <div class="card-icon"><i class="fas fa-rocket"></i></div>
                    <div class="card-title">CMMI + Agile/Scrum</div>
                    <div class="card-description">Metodologías ágiles: Sprints, Retrospectivas, Mejora continua, Entrega iterativa</div>
                </div>
            </div>

            <h4>Herramientas de Soporte</h4>
            <div class="process-areas">
                <div class="process-area">
                    <div class="area-title">PTC Integrity</div>
                    <div class="area-code">Gestión de Procesos CMMI</div>
                    <div class="area-description">Plataforma integral para gestión de procesos, trazabilidad y cumplimiento CMMI</div>
                </div>
                <div class="process-area">
                    <div class="area-title">IBM Rational</div>
                    <div class="area-code">Suite de Herramientas CMMI</div>
                    <div class="area-description">Conjunto de herramientas para desarrollo, gestión de requisitos y control de calidad</div>
                </div>
                <div class="process-area">
                    <div class="area-title">Microsoft TFS</div>
                    <div class="area-code">Team Foundation Server</div>
                    <div class="area-description">Plataforma de colaboración para equipos de desarrollo con soporte CMMI</div>
                </div>
                <div class="process-area">
                    <div class="area-title">Open Source</div>
                    <div class="area-code">OpenUP, Eclipse Process Framework</div>
                    <div class="area-description">Herramientas gratuitas para implementación de procesos CMMI</div>
                </div>
            </div>

            <h4>Matriz de Integración</h4>
            <table class="content-table">
                <thead>
                    <tr>
                        <th>Marco</th>
                        <th>Nivel CMMI</th>
                        <th>Beneficios</th>
                        <th>Complejidad</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>ITIL</td>
                        <td>Nivel 2-3</td>
                        <td>Gestión de servicios mejorada</td>
                        <td>Media</td>
                    </tr>
                    <tr>
                        <td>COBIT</td>
                        <td>Nivel 3-4</td>
                        <td>Gobierno TI alineado</td>
                        <td>Alta</td>
                    </tr>
                    <tr>
                        <td>ISO 27001</td>
                        <td>Nivel 2-4</td>
                        <td>Seguridad integrada</td>
                        <td>Media</td>
                    </tr>
                    <tr>
                        <td>Agile/Scrum</td>
                        <td>Nivel 2-3</td>
                        <td>Flexibilidad y velocidad</td>
                        <td>Baja</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `,

    casos: `
        <div class="content-section">
            <h3><i class="fas fa-building me-2"></i>Casos de Estudio Prácticos</h3>
            
            <h4>Implementaciones Reales</h4>
            
            <div class="highlight-box">
                <h4><i class="fas fa-laptop-code me-2"></i>Caso 1: Empresa de Software - Progresión de Nivel 1 a Nivel 3</h4>
                <p><strong>Contexto:</strong> Startup tecnológica de 50 empleados desarrollando software SaaS</p>
                <p><strong>Desafío:</strong> Procesos inconsistentes, entregas tardías, calidad variable</p>
                <p><strong>Solución:</strong> Implementación CMMI-DEV en 18 meses</p>
                <ul>
                    <li><strong>Nivel 1→2:</strong> 6 meses - Gestión de proyectos, control de calidad</li>
                    <li><strong>Nivel 2→3:</strong> 12 meses - Procesos estándar, formación organizacional</li>
                    <li><strong>Resultados:</strong> 40% reducción en defectos, 25% mejora en productividad</li>
                </ul>
            </div>

            <div class="highlight-box">
                <h4><i class="fas fa-concierge-bell me-2"></i>Caso 2: Organización de Servicios - Implementación CMMI-SVC</h4>
                <p><strong>Contexto:</strong> Empresa de servicios TI con 200 empleados</p>
                <p><strong>Desafío:</strong> Gestión de incidencias ineficiente, satisfacción del cliente baja</p>
                <p><strong>Solución:</strong> CMMI-SVC enfocado en prestación de servicios</p>
                <ul>
                    <li><strong>Áreas clave:</strong> IRP, SD, SSD, STSM</li>
                    <li><strong>Mejoras:</strong> 60% reducción en tiempo de resolución, 85% satisfacción</li>
                    <li><strong>ROI:</strong> 2.3x retorno de inversión en 2 años</li>
                </ul>
            </div>

            <div class="highlight-box">
                <h4><i class="fas fa-university me-2"></i>Caso 3: Sector Bancario - CMMI en Entornos Regulados</h4>
                <p><strong>Contexto:</strong> Banco con 500 empleados TI, regulaciones estrictas</p>
                <p><strong>Desafío:</strong> Cumplimiento regulatorio, gestión de riesgos, auditorías</p>
                <p><strong>Solución:</strong> CMMI integrado con COBIT e ISO 27001</p>
                <ul>
                    <li><strong>Enfoque:</strong> Gestión de riesgos, controles de seguridad</li>
                    <li><strong>Beneficios:</strong> Cumplimiento 100%, reducción 50% en auditorías</li>
                    <li><strong>Certificación:</strong> Nivel 3 CMMI + ISO 27001</li>
                </ul>
            </div>

            <h4>Lecciones Aprendidas</h4>
            <div class="overview-grid">
                <div class="overview-card">
                    <div class="card-icon"><i class="fas fa-exclamation-triangle"></i></div>
                    <div class="card-title">Errores Comunes</div>
                    <div class="card-description">Implementación demasiado rápida, falta de compromiso ejecutivo, resistencia al cambio</div>
                </div>
                <div class="overview-card">
                    <div class="card-icon"><i class="fas fa-trophy"></i></div>
                    <div class="card-title">Factores de Éxito</div>
                    <div class="card-description">Liderazgo comprometido, formación adecuada, comunicación clara, métricas de progreso</div>
                </div>
                <div class="overview-card">
                    <div class="card-icon"><i class="fas fa-users"></i></div>
                    <div class="card-title">Gestión del Cambio</div>
                    <div class="card-description">Comunicación, formación, participación, reconocimiento, resistencia al cambio</div>
                </div>
                <div class="overview-card">
                    <div class="card-icon"><i class="fas fa-chart-line"></i></div>
                    <div class="card-title">Análisis Costo-Beneficio</div>
                    <div class="card-description">Inversión inicial vs. beneficios a largo plazo, ROI típico 2-3x en 2-3 años</div>
                </div>
            </div>

            <h4>Roadmap de Implementación Típico</h4>
            <div class="process-areas">
                <div class="process-area">
                    <div class="area-title">Fase 1: Preparación (2-3 meses)</div>
                    <div class="area-code">Análisis y Planificación</div>
                    <div class="area-description">Evaluación actual, plan de implementación, formación del equipo, comunicación</div>
                </div>
                <div class="process-area">
                    <div class="area-title">Fase 2: Nivel 2 (6-9 meses)</div>
                    <div class="area-code">Procesos Gestionados</div>
                    <div class="area-description">Implementación de áreas básicas, gestión de proyectos, control de calidad</div>
                </div>
                <div class="process-area">
                    <div class="area-title">Fase 3: Nivel 3 (12-18 meses)</div>
                    <div class="area-code">Procesos Definidos</div>
                    <div class="area-description">Procesos estándar organizacionales, formación, gestión integrada</div>
                </div>
                <div class="process-area">
                    <div class="area-title">Fase 4: Evaluación (1-2 meses)</div>
                    <div class="area-code">Certificación</div>
                    <div class="area-description">Evaluación SCAMPI, certificación oficial, plan de mejora continua</div>
                </div>
            </div>
        </div>
    `,

    herramientas: `
        <div class="content-section">
            <h3><i class="fas fa-tools me-2"></i>Herramientas y Plantillas</h3>
            
            <h4>Plantillas y Templates</h4>
            <div class="overview-grid">
                <div class="overview-card">
                    <div class="card-icon"><i class="fas fa-file-alt"></i></div>
                    <div class="card-title">Plan de Proyecto CMMI</div>
                    <div class="card-description">Template completo para planificación de implementación CMMI con cronograma y recursos</div>
                </div>
                <div class="overview-card">
                    <div class="card-icon"><i class="fas fa-clipboard-check"></i></div>
                    <div class="card-title">Evaluación de Procesos</div>
                    <div class="card-description">Checklist detallado para evaluación de áreas de proceso por nivel</div>
                </div>
                <div class="overview-card">
                    <div class="card-icon"><i class="fas fa-chart-bar"></i></div>
                    <div class="card-title">Informe de Progreso</div>
                    <div class="card-description">Template para reportes de avance con métricas y KPIs</div>
                </div>
                <div class="overview-card">
                    <div class="card-icon"><i class="fas fa-presentation"></i></div>
                    <div class="card-title">Presentación Ejecutiva</div>
                    <div class="card-description">Slides para presentar CMMI a management y stakeholders</div>
                </div>
            </div>

            <h4>Calculadoras y Simuladores</h4>
            <div class="process-areas">
                <div class="process-area">
                    <div class="area-title">Calculadora de ROI</div>
                    <div class="area-code">Estimación de Retorno</div>
                    <div class="area-description">Herramienta para calcular ROI de implementación CMMI basada en tamaño y complejidad</div>
                </div>
                <div class="process-area">
                    <div class="area-title">Simulador de Niveles</div>
                    <div class="area-code">Predicción de Progresión</div>
                    <div class="area-description">Simulador para predecir tiempo y recursos necesarios para alcanzar cada nivel</div>
                </div>
                <div class="process-area">
                    <div class="area-title">Evaluador de Costos</div>
                    <div class="area-code">Estimación de Implementación</div>
                    <div class="area-description">Calculadora de costos totales de implementación incluyendo formación y herramientas</div>
                </div>
                <div class="process-area">
                    <div class="area-title">Comparador de Modelos</div>
                    <div class="area-code">Análisis Comparativo</div>
                    <div class="area-description">Herramienta para comparar CMMI con otros marcos como ISO 27001, ITIL, COBIT</div>
                </div>
            </div>

            <h4>Herramientas de Evaluación</h4>
            <table class="content-table">
                <thead>
                    <tr>
                        <th>Herramienta</th>
                        <th>Tipo</th>
                        <th>Nivel CMMI</th>
                        <th>Costo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>PTC Integrity</td>
                        <td>Comercial</td>
                        <td>2-5</td>
                        <td>Alto</td>
                    </tr>
                    <tr>
                        <td>IBM Rational</td>
                        <td>Comercial</td>
                        <td>2-5</td>
                        <td>Alto</td>
                    </tr>
                    <tr>
                        <td>Microsoft TFS</td>
                        <td>Comercial</td>
                        <td>2-3</td>
                        <td>Medio</td>
                    </tr>
                    <tr>
                        <td>Eclipse Process Framework</td>
                        <td>Open Source</td>
                        <td>2-4</td>
                        <td>Gratuito</td>
                    </tr>
                </tbody>
            </table>

            <h4>Checklist de Implementación</h4>
            <div class="highlight-box">
                <h4><i class="fas fa-list-check me-2"></i>Lista de Verificación CMMI</h4>
                <ul>
                    <li><strong>Preparación:</strong> Evaluación inicial, plan de implementación, equipo de trabajo</li>
                    <li><strong>Nivel 2:</strong> Gestión de proyectos, control de calidad, gestión de requisitos</li>
                    <li><strong>Nivel 3:</strong> Procesos estándar, formación organizacional, gestión integrada</li>
                    <li><strong>Evaluación:</strong> Preparación SCAMPI, documentación, evidencias</li>
                    <li><strong>Mejora Continua:</strong> Plan de mejora, métricas, revisión periódica</li>
                </ul>
            </div>
        </div>
    `,

    metricas: `
        <div class="content-section">
            <h3><i class="fas fa-chart-bar me-2"></i>Métricas y KPIs</h3>
            
            <h4>Indicadores de Progreso por Nivel</h4>
            <div class="overview-grid">
                <div class="overview-card">
                    <div class="card-icon"><i class="fas fa-clock"></i></div>
                    <div class="card-title">Tiempo de Implementación</div>
                    <div class="card-description">Nivel 2: 6-12 meses, Nivel 3: 12-24 meses, Nivel 4: 24-36 meses</div>
                </div>
                <div class="overview-card">
                    <div class="card-icon"><i class="fas fa-dollar-sign"></i></div>
                    <div class="card-title">Costo por Nivel</div>
                    <div class="card-description">Nivel 2: $50K-100K, Nivel 3: $100K-200K, Nivel 4: $200K-400K</div>
                </div>
                <div class="overview-card">
                    <div class="card-icon"><i class="fas fa-chart-line"></i></div>
                    <div class="card-title">Beneficios Medibles</div>
                    <div class="card-description">Reducción 30-50% defectos, Mejora 20-40% productividad, Aumento 15-30% satisfacción</div>
                </div>
                <div class="overview-card">
                    <div class="card-icon"><i class="fas fa-smile"></i></div>
                    <div class="card-title">Satisfacción del Cliente</div>
                    <div class="card-description">Nivel 2: 70-80%, Nivel 3: 80-90%, Nivel 4: 90-95%, Nivel 5: 95%+</div>
                </div>
            </div>

            <h4>Métricas Técnicas Detalladas</h4>
            <table class="content-table">
                <thead>
                    <tr>
                        <th>Métrica</th>
                        <th>Nivel 1</th>
                        <th>Nivel 2</th>
                        <th>Nivel 3</th>
                        <th>Nivel 4</th>
                        <th>Nivel 5</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Defectos por KLOC</td>
                        <td>10-20</td>
                        <td>5-10</td>
                        <td>2-5</td>
                        <td>1-2</td>
                        <td>&lt;1</td>
                    </tr>
                    <tr>
                        <td>Tiempo de Desarrollo</td>
                        <td>Variable</td>
                        <td>Predecible</td>
                        <td>Optimizado</td>
                        <td>Cuantitativo</td>
                        <td>Continuamente mejorado</td>
                    </tr>
                    <tr>
                        <td>Productividad (FP/persona/mes)</td>
                        <td>5-10</td>
                        <td>10-15</td>
                        <td>15-20</td>
                        <td>20-25</td>
                        <td>25+</td>
                    </tr>
                    <tr>
                        <td>ROI de Proyectos</td>
                        <td>1.0-1.2x</td>
                        <td>1.2-1.5x</td>
                        <td>1.5-2.0x</td>
                        <td>2.0-2.5x</td>
                        <td>2.5x+</td>
                    </tr>
                </tbody>
            </table>

            <h4>KPIs de Negocio</h4>
            <div class="process-areas">
                <div class="process-area">
                    <div class="area-title">Reducción de Costos</div>
                    <div class="area-code">Ahorro por Nivel</div>
                    <div class="area-description">Nivel 2: 10-20%, Nivel 3: 20-30%, Nivel 4: 30-40%, Nivel 5: 40%+</div>
                </div>
                <div class="process-area">
                    <div class="area-title">Mejora de Calidad</div>
                    <div class="area-code">Reducción de Defectos</div>
                    <div class="area-description">Nivel 2: 30%, Nivel 3: 50%, Nivel 4: 70%, Nivel 5: 80%+</div>
                </div>
                <div class="process-area">
                    <div class="area-title">Aumento de Productividad</div>
                    <div class="area-code">Mejora por Nivel</div>
                    <div class="area-description">Nivel 2: 20%, Nivel 3: 35%, Nivel 4: 50%, Nivel 5: 60%+</div>
                </div>
                <div class="process-area">
                    <div class="area-title">Satisfacción del Cliente</div>
                    <div class="area-code">NPS Score</div>
                    <div class="area-description">Nivel 2: 60-70, Nivel 3: 70-80, Nivel 4: 80-90, Nivel 5: 90+</div>
                </div>
            </div>

            <h4>Dashboard de Métricas</h4>
            <div class="highlight-box">
                <h4><i class="fas fa-tachometer-alt me-2"></i>Indicadores Clave de Rendimiento</h4>
                <div class="row">
                    <div class="col-md-6">
                        <h5>Métricas de Proceso</h5>
                        <ul>
                            <li><strong>Eficiencia:</strong> Tiempo de ciclo, Throughput</li>
                            <li><strong>Calidad:</strong> Defectos, Rework, Escapados</li>
                            <li><strong>Productividad:</strong> Puntos de función, Líneas de código</li>
                        </ul>
                    </div>
                    <div class="col-md-6">
                        <h5>Métricas de Negocio</h5>
                        <ul>
                            <li><strong>Financieras:</strong> ROI, Costo por proyecto</li>
                            <li><strong>Cliente:</strong> Satisfacción, Retención</li>
                            <li><strong>Competitividad:</strong> Time-to-market, Innovación</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `,

    overview: `
        <div class="content-section">
            <h3><i class="fas fa-sitemap me-2"></i>Vista General del Modelo CMMI</h3>
            
            <p>El <strong>Capability Maturity Model Integration (CMMI)</strong> es un marco de trabajo integral que evalúa y mejora la capacidad de las organizaciones para desarrollar, mantener y adquirir productos y servicios de manera eficiente.</p>

            <h4>Resumen Ejecutivo</h4>
            <div class="overview-grid">
                <div class="overview-card">
                    <div class="card-icon"><i class="fas fa-cogs"></i></div>
                    <div class="card-title">Modelo CMMI</div>
                    <div class="card-description">Marco de trabajo que evalúa madurez y capacidad organizacional</div>
                </div>
                <div class="overview-card">
                    <div class="card-icon"><i class="fas fa-chart-line"></i></div>
                    <div class="card-title">Niveles de Madurez</div>
                    <div class="card-description">5 niveles: Inicial, Gestionado, Definido, Cuantitativo, Optimización</div>
                </div>
                <div class="overview-card">
                    <div class="card-icon"><i class="fas fa-code"></i></div>
                    <div class="card-title">CMMI-DEV</div>
                    <div class="card-description">Modelo para desarrollo de productos y servicios</div>
                </div>
                <div class="overview-card">
                    <div class="card-icon"><i class="fas fa-concierge-bell"></i></div>
                    <div class="card-title">CMMI-SVC</div>
                    <div class="card-description">Modelo para prestación de servicios</div>
                </div>
            </div>

            <h4>Componentes Clave del CMMI</h4>
            
            <h5>1. Niveles de Capacidad (0-3)</h5>
            <div class="cmmi-levels">
                <div class="level-card">
                    <div class="level-number">0</div>
                    <div class="level-name">Incompleto</div>
                    <div class="level-description">Proceso no realizado o parcial</div>
                </div>
                <div class="level-card">
                    <div class="level-number">1</div>
                    <div class="level-name">Realizado</div>
                    <div class="level-description">Proceso ejecutado sin gestión</div>
                </div>
                <div class="level-card">
                    <div class="level-number">2</div>
                    <div class="level-name">Gestionado</div>
                    <div class="level-description">Proceso planificado y controlado</div>
                </div>
                <div class="level-card">
                    <div class="level-number">3</div>
                    <div class="level-name">Definido</div>
                    <div class="level-description">Proceso estándar organizacional</div>
                </div>
            </div>

            <h5>2. Niveles de Madurez (1-5)</h5>
            <div class="cmmi-levels">
                <div class="level-card">
                    <div class="level-number">1</div>
                    <div class="level-name">Inicial</div>
                    <div class="level-description">Procesos inestables</div>
                </div>
                <div class="level-card">
                    <div class="level-number">2</div>
                    <div class="level-name">Gestionado</div>
                    <div class="level-description">Procesos planificados</div>
                </div>
                <div class="level-card">
                    <div class="level-number">3</div>
                    <div class="level-name">Definido</div>
                    <div class="level-description">Estándares organizacionales</div>
                </div>
                <div class="level-card">
                    <div class="level-number">4</div>
                    <div class="level-name">Cuantitativo</div>
                    <div class="level-description">Gestión cuantitativa</div>
                </div>
                <div class="level-card">
                    <div class="level-number">5</div>
                    <div class="level-name">Optimización</div>
                    <div class="level-description">Mejora continua</div>
                </div>
            </div>

            <h4>Áreas de Proceso por Categoría</h4>
            
            <h5>CMMI-DEV (22 áreas)</h5>
            <div class="process-areas">
                <div class="process-area">
                    <div class="area-title">Gestión de Procesos</div>
                    <div class="area-code">5 áreas</div>
                    <div class="area-description">OPF, OPD, OT, OPM, OPP</div>
                </div>
                <div class="process-area">
                    <div class="area-title">Gestión de Proyectos</div>
                    <div class="area-code">7 áreas</div>
                    <div class="area-description">PP, REQM, PMC, SAM, IPM, QPM, RSKM</div>
                </div>
                <div class="process-area">
                    <div class="area-title">Ingeniería</div>
                    <div class="area-code">5 áreas</div>
                    <div class="area-description">PI, RD, TS, VAL, VER</div>
                </div>
                <div class="process-area">
                    <div class="area-title">Soporte</div>
                    <div class="area-code">5 áreas</div>
                    <div class="area-description">CM, MA, PPQA, CAR, DAR</div>
                </div>
            </div>

            <h5>CMMI-SVC (24 áreas)</h5>
            <div class="process-areas">
                <div class="process-area">
                    <div class="area-title">Gestión de Procesos</div>
                    <div class="area-code">5 áreas</div>
                    <div class="area-description">OPD, OPF, OT, OPM, OPP</div>
                </div>
                <div class="process-area">
                    <div class="area-title">Gestión de Proyectos y Trabajos</div>
                    <div class="area-code">9 áreas</div>
                    <div class="area-description">CAM, IWM, QWM, REQM, RSKM, SAM, SCON, WMC, WP</div>
                </div>
                <div class="process-area">
                    <div class="area-title">Establecimiento y Prestación</div>
                    <div class="area-code">5 áreas</div>
                    <div class="area-description">IRP, SD, SSD, SST, STSM</div>
                </div>
                <div class="process-area">
                    <div class="area-title">Soporte</div>
                    <div class="area-code">5 áreas</div>
                    <div class="area-description">CAR, CM, DAR, MA, PPQA</div>
                </div>
            </div>

            <h4>Certificaciones Disponibles</h4>
            <div class="certification-grid">
                <div class="certification-card">
                    <div class="cert-icon"><i class="fas fa-user-graduate"></i></div>
                    <div class="cert-title">CMMI Associate</div>
                    <div class="cert-description">Conocimientos fundamentales de los tres modelos CMMI</div>
                </div>
                <div class="certification-card">
                    <div class="cert-icon"><i class="fas fa-user-tie"></i></div>
                    <div class="cert-title">CMMI Professional</div>
                    <div class="cert-description">Aplicación práctica en escenarios del mundo real</div>
                </div>
                <div class="certification-card">
                    <div class="cert-icon"><i class="fas fa-search"></i></div>
                    <div class="cert-title">SCAMPI Lead Appraiser</div>
                    <div class="cert-description">Evaluación de procesos usando metodología SCAMPI</div>
                </div>
                <div class="certification-card">
                    <div class="cert-icon"><i class="fas fa-chalkboard-teacher"></i></div>
                    <div class="cert-title">CMMI Instructor</div>
                    <div class="cert-description">Difusión de conocimiento de procesos CMMI</div>
                </div>
            </div>

            <div class="highlight-box">
                <h4><i class="fas fa-lightbulb me-2"></i>Beneficios del Modelo CMMI</h4>
                <ul>
                    <li><strong>Mejora de procesos:</strong> Identificación y corrección de debilidades</li>
                    <li><strong>Estandarización:</strong> Procesos consistentes y predecibles</li>
                    <li><strong>Calidad:</strong> Mejora en la calidad de productos y servicios</li>
                    <li><strong>Eficiencia:</strong> Reducción de costos y tiempos de desarrollo</li>
                    <li><strong>Competitividad:</strong> Ventaja competitiva en el mercado</li>
                    <li><strong>Certificación:</strong> Reconocimiento formal de capacidades</li>
                </ul>
            </div>
        </div>
    `
};

// Función para cargar contenido dinámico
function loadSectionContent(section) {
    const contentContainer = document.getElementById('dynamicContent');
    const titleElement = document.getElementById('sectionTitle');
    const subtitleElement = document.getElementById('sectionSubtitle');
    
    // Mostrar loading
    contentContainer.innerHTML = `
        <div class="loading">
            <div class="loading-spinner"></div>
        </div>
    `;
    
    // Simular carga
    setTimeout(() => {
        const config = APP_CONFIG.sections[section];
        const content = SECTION_CONTENT[section];
        
        if (config && content) {
            titleElement.innerHTML = `<i class="${config.icon} me-3"></i>${config.title}`;
            subtitleElement.textContent = config.subtitle;
            contentContainer.innerHTML = content;
            
            // Aplicar animación
            contentContainer.classList.add('fade-in');
        }
    }, 300);
}

// Función para manejar navegación
function handleNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const section = this.getAttribute('data-section');
            
            // Remover clase active de todos los botones
            navButtons.forEach(btn => btn.classList.remove('active'));
            
            // Agregar clase active al botón clickeado
            this.classList.add('active');
            
            // Cargar contenido
            loadSectionContent(section);
        });
    });
}

// Función para manejar atajos de teclado
function handleKeyboardShortcuts() {
    document.addEventListener('keydown', function(event) {
        if (event.ctrlKey) {
            switch(event.key) {
                case '1':
                    event.preventDefault();
                    document.querySelector('[data-section="introduccion"]').click();
                    break;
                case '2':
                    event.preventDefault();
                    document.querySelector('[data-section="definicion"]').click();
                    break;
                case '3':
                    event.preventDefault();
                    document.querySelector('[data-section="niveles"]').click();
                    break;
                case '4':
                    event.preventDefault();
                    document.querySelector('[data-section="desarrollo"]').click();
                    break;
                case '5':
                    event.preventDefault();
                    document.querySelector('[data-section="servicios"]').click();
                    break;
                case '6':
                    event.preventDefault();
                    document.querySelector('[data-section="certificacion"]').click();
                    break;
                case '7':
                    event.preventDefault();
                    document.querySelector('[data-section="conceptos"]').click();
                    break;
                case '8':
                    event.preventDefault();
                    document.querySelector('[data-section="metodologias"]').click();
                    break;
                case '9':
                    event.preventDefault();
                    document.querySelector('[data-section="casos"]').click();
                    break;
                case '0':
                    event.preventDefault();
                    document.querySelector('[data-section="overview"]').click();
                    break;
                case 'h':
                    event.preventDefault();
                    window.location.href = '../index.html';
                    break;
            }
        }
    });
}

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    // Cargar vista general por defecto
    loadSectionContent('overview');
    
    // Configurar navegación
    handleNavigation();
    
    // Configurar atajos de teclado
    handleKeyboardShortcuts();
    
    // Aplicar animaciones
    const cards = document.querySelectorAll('.overview-card, .level-card, .process-area, .certification-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
});
