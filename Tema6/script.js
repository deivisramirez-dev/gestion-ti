// Configuración de la aplicación
const APP_CONFIG = {
    sections: {
        overview: {
            title: "GESTIÓN DE RIESGOS EN SISTEMAS DE INFORMACIÓN",
            subtitle: "Agenda Completa - Tema 6: Análisis y Gestión de Riesgos de SI",
            icon: "fas fa-sitemap"
        },
        introduccion: {
            title: "INTRODUCCIÓN Y OBJETIVOS",
            subtitle: "Fundamentos básicos y propósitos de la gestión de riesgos en SI",
            icon: "fas fa-info-circle"
        },
        casoUso: {
            title: "CASO DE USO PRÁCTICO",
            subtitle: "Aplicación real de gestión de riesgos en una empresa tecnológica",
            icon: "fas fa-building"
        },
        fundamentos: {
            title: "FUNDAMENTOS DE LA GESTIÓN DEL RIESGO",
            subtitle: "Conceptos básicos, principios y categorías de riesgos",
            icon: "fas fa-shield-alt"
        },
        metodologias: {
            title: "METODOLOGÍAS DE ANÁLISIS DE RIESGOS",
            subtitle: "Enfoques cuantitativos, cualitativos y metodología MAGERIT",
            icon: "fas fa-cogs"
        },
        proceso: {
            title: "PROCESO DE LA GESTIÓN DEL RIESGO",
            subtitle: "Los 7 pasos del proceso NIST para gestión de riesgos",
            icon: "fas fa-tasks"
        },
        tratamiento: {
            title: "TRATAMIENTO DEL RIESGO",
            subtitle: "Estrategias de evitación y minimización de riesgos",
            icon: "fas fa-tools"
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
            case 'fundamentos':
                return this.getFundamentosContent();
            case 'metodologias':
                return this.getMetodologiasContent();
            case 'proceso':
                return this.getProcesoContent();
            case 'tratamiento':
                return this.getTratamientoContent();
            default:
                return '<p>Contenido no disponible</p>';
        }
    }
    
    getOverviewContent() {
        return `
            <div class="content-card fade-in">
                <h3><i class="fas fa-exclamation-triangle me-2"></i>¿Qué es la Gestión de Riesgos en SI?</h3>
                <p>La gestión de riesgos en sistemas de información es un proceso sistemático que identifica, evalúa y trata los riesgos que pueden afectar a los sistemas de información de una organización. Es fundamental para proteger los activos informáticos y garantizar la continuidad del negocio.</p>
            </div>
            
            <div class="overview-grid">
                <div class="overview-item fade-in" onclick="app.switchSection('introduccion')">
                    <i class="fas fa-info-circle"></i>
                    <h3>Introducción y Objetivos</h3>
                    <p>Conoce los fundamentos básicos y propósitos de la gestión de riesgos en sistemas de información.</p>
                </div>
                <div class="overview-item fade-in" onclick="app.switchSection('casoUso')">
                    <i class="fas fa-building"></i>
                    <h3>Caso de Uso Práctico</h3>
                    <p>Analiza un caso real de aplicación de gestión de riesgos en una empresa tecnológica.</p>
                </div>
                <div class="overview-item fade-in" onclick="app.switchSection('fundamentos')">
                    <i class="fas fa-shield-alt"></i>
                    <h3>Fundamentos de la Gestión del Riesgo</h3>
                    <p>Explora los conceptos básicos, principios y categorías de riesgos en organizaciones TI.</p>
                </div>
                <div class="overview-item fade-in" onclick="app.switchSection('metodologias')">
                    <i class="fas fa-cogs"></i>
                    <h3>Metodologías de Análisis</h3>
                    <p>Descubre los enfoques cuantitativos, cualitativos y la metodología MAGERIT.</p>
                </div>
                <div class="overview-item fade-in" onclick="app.switchSection('proceso')">
                    <i class="fas fa-tasks"></i>
                    <h3>Proceso de Gestión del Riesgo</h3>
                    <p>Aprende sobre los 7 pasos del proceso NIST para gestión de riesgos.</p>
                </div>
                <div class="overview-item fade-in" onclick="app.switchSection('tratamiento')">
                    <i class="fas fa-tools"></i>
                    <h3>Tratamiento del Riesgo</h3>
                    <p>Analiza las estrategias de evitación y minimización de riesgos.</p>
                </div>
            </div>
        `;
    }
    
    getIntroduccionContent() {
        return `
            <div class="content-card fade-in">
                <h3><i class="fas fa-info-circle me-2"></i>Introducción a la Gestión de Riesgos en SI</h3>
                <p>La gran importancia que los sistemas de información han alcanzado en el entramado empresarial hace que la gestión de riesgos aplicados a los sistemas de información sea uno de los aspectos de mayor preocupación para los directivos TI.</p>
                <p>Esta preocupación empresarial hace que las organizaciones focalicen gran parte de sus recursos en mitigar los posibles riesgos, pero siempre teniendo presente que no va ser posible eliminar todos los riesgos de ciberseguridad inherentes.</p>
            </div>
            
            <div class="content-card fade-in">
                <h3><i class="fas fa-bullseye me-2"></i>Objetivos del Tema</h3>
                <ul>
                    <li><strong>Exponer los fundamentos</strong> de la gestión de riesgos en una organización TI</li>
                    <li><strong>Aplicar las metodologías</strong> de análisis de riesgo adecuadas para enfrentarse a las posibles amenazas detectadas</li>
                    <li><strong>Comprender los pasos</strong> a aplicar en la gestión de riesgos en una empresa tecnológica</li>
                </ul>
            </div>
            
            <div class="content-card fade-in">
                <h3><i class="fas fa-lightbulb me-2"></i>Importancia de la Gestión de Riesgos</h3>
                <p>La gestión de riesgos debe realizarse de forma metódica, estructurada y, sobre todo, siguiendo un proceso de evaluación y mejora continua, ante el constante cambio al que se ven sometidas las organizaciones TI. La correcta gestión de las amenazas actuales no es garantía ante las posibles amenazas del futuro.</p>
            </div>
        `;
    }
    
    getCasoUsoContent() {
        return `
            <div class="content-card fade-in">
                <h3><i class="fas fa-building me-2"></i>Contexto de la Empresa</h3>
                <p><strong>TechCorp Solutions</strong> es una empresa de desarrollo de software con 150 empleados que se especializa en aplicaciones web para el sector financiero. La empresa maneja datos sensibles de más de 50,000 clientes y procesa transacciones por valor de $2 millones diarios.</p>
                <p>La empresa ha experimentado un crecimiento del 40% en el último año, lo que ha llevado a la expansión de su infraestructura tecnológica y la contratación de nuevo personal. Sin embargo, este crecimiento ha expuesto vulnerabilidades en sus sistemas de seguridad.</p>
            </div>
            
            <div class="content-card fade-in">
                <h3><i class="fas fa-exclamation-triangle me-2"></i>Incidente Desencadenante</h3>
                <p>El 15 de marzo de 2024, TechCorp sufrió un <strong>ataque de ransomware</strong> que:</p>
                <ul>
                    <li>Encriptó el 60% de los servidores de producción</li>
                    <li>Interrumpió los servicios durante 72 horas</li>
                    <li>Comprometió datos personales de 12,000 clientes</li>
                    <li>Generó pérdidas estimadas de $500,000</li>
                    <li>Dañó la reputación de la empresa</li>
                </ul>
                <p>Este incidente puso en evidencia la falta de un sistema formal de gestión de riesgos en la organización.</p>
            </div>
            
            <div class="content-card fade-in">
                <h3><i class="fas fa-search me-2"></i>Identificación de Riesgos</h3>
                <p>Tras el incidente, el equipo de TI realizó una evaluación exhaustiva y identificó los siguientes riesgos críticos:</p>
                <div class="risk-categories">
                    <div class="risk-category">
                        <h4><i class="fas fa-desktop me-2"></i>Riesgos Sistemas TI</h4>
                        <ul>
                            <li>Ataques de ransomware y malware</li>
                            <li>Vulnerabilidades en software desactualizado</li>
                            <li>Falta de copias de seguridad automatizadas</li>
                            <li>Acceso no autorizado a sistemas críticos</li>
                        </ul>
                    </div>
                    <div class="risk-category">
                        <h4><i class="fas fa-dollar-sign me-2"></i>Riesgos Financieros</h4>
                        <ul>
                            <li>Pérdida de ingresos por interrupción de servicios</li>
                            <li>Costos de recuperación y reparación</li>
                            <li>Multas por incumplimiento de GDPR</li>
                            <li>Pérdida de clientes por falta de confianza</li>
                        </ul>
                    </div>
                    <div class="risk-category">
                        <h4><i class="fas fa-user-shield me-2"></i>Riesgos Reputacionales</h4>
                        <ul>
                            <li>Pérdida de confianza de clientes</li>
                            <li>Daño a la imagen corporativa</li>
                            <li>Impacto negativo en medios de comunicación</li>
                            <li>Dificultad para atraer nuevos clientes</li>
                        </ul>
                    </div>
                    <div class="risk-category">
                        <h4><i class="fas fa-gavel me-2"></i>Riesgos de Cumplimiento</h4>
                        <ul>
                            <li>Violación de regulaciones de protección de datos</li>
                            <li>Incumplimiento de estándares de seguridad</li>
                            <li>Responsabilidad legal por filtración de datos</li>
                            <li>Requisitos de notificación a autoridades</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="content-card fade-in">
                <h3><i class="fas fa-calculator me-2"></i>Evaluación Cuantitativa del Riesgo</h3>
                <p>Utilizando la metodología cuantitativa, se evaluaron los riesgos identificados:</p>
                <div class="process-steps">
                    <div class="process-step">
                        <div class="step-number">1</div>
                        <h4>Análisis de Probabilidad</h4>
                        <p><strong>Riesgo de Ransomware:</strong> Probabilidad = 4/5 (Alta) - Basado en el aumento del 300% en ataques al sector financiero en 2024.</p>
                    </div>
                    <div class="process-step">
                        <div class="step-number">2</div>
                        <h4>Análisis de Impacto</h4>
                        <p><strong>Impacto Financiero:</strong> Impacto = 5/5 (Crítico) - Pérdidas estimadas de $500,000 + multas potenciales de $2M por GDPR.</p>
                    </div>
                    <div class="process-step">
                        <div class="step-number">3</div>
                        <h4>Cálculo del Riesgo</h4>
                        <p><strong>Riesgo Total:</strong> 4 × 5 = 20 (Riesgo Crítico) - Requiere acción inmediata y asignación de recursos significativos.</p>
                    </div>
                </div>
            </div>
            
            <div class="content-card fade-in">
                <h3><i class="fas fa-tools me-2"></i>Estrategias de Tratamiento Implementadas</h3>
                <p>Basándose en la evaluación, TechCorp implementó las siguientes estrategias:</p>
                <div class="treatment-strategies">
                    <div class="treatment-strategy">
                        <h4><i class="fas fa-shield-alt me-2"></i>Estrategias de Evitación</h4>
                        <p><strong>Reducción:</strong></p>
                        <ul>
                            <li>Implementación de firewall avanzado</li>
                            <li>Actualización automática de software</li>
                            <li>Capacitación en ciberseguridad para empleados</li>
                            <li>Políticas de acceso más estrictas</li>
                        </ul>
                        <p><strong>Transferencia:</strong></p>
                        <ul>
                            <li>Seguro de ciberseguridad por $1M</li>
                            <li>Contrato con empresa de respuesta a incidentes</li>
                        </ul>
                    </div>
                    <div class="treatment-strategy">
                        <h4><i class="fas fa-tools me-2"></i>Estrategias de Minimización</h4>
                        <p><strong>Plan de Contingencia:</strong></p>
                        <ul>
                            <li>Copias de seguridad diarias en la nube</li>
                            <li>Procedimientos de recuperación documentados</li>
                            <li>Equipo de respuesta a incidentes</li>
                            <li>Comunicación de crisis predefinida</li>
                            <li>Tiempo de recuperación objetivo: 4 horas</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="content-card fade-in">
                <h3><i class="fas fa-chart-line me-2"></i>Resultados y Lecciones Aprendidas</h3>
                <p><strong>Después de 6 meses de implementación:</strong></p>
                <ul>
                    <li><strong>Reducción del 85%</strong> en vulnerabilidades detectadas</li>
                    <li><strong>Tiempo de recuperación</strong> reducido de 72 horas a 2 horas</li>
                    <li><strong>Costo de seguros</strong> reducido en 30% por mejores controles</li>
                    <li><strong>Confianza del cliente</strong> restaurada al 95%</li>
                    <li><strong>Cumplimiento normativo</strong> al 100%</li>
                </ul>
                <p><strong>Lecciones clave:</strong> La gestión proactiva de riesgos no solo previene incidentes, sino que también reduce costos, mejora la reputación y garantiza la continuidad del negocio.</p>
            </div>
            
            <div class="content-card fade-in">
                <h3><i class="fas fa-table me-2"></i>Evaluación de Riesgos Genérico - TechCorp Solutions</h3>
                <p>La siguiente tabla presenta la evaluación de riesgos específicos identificados en TechCorp Solutions, incluyendo objetivos de control, controles implementados y pruebas de cumplimiento:</p>
                
                <div class="table-responsive">
                    <table class="table table-bordered risk-evaluation-table">
                        <thead class="table-primary">
                            <tr>
                                <th class="text-center">Riesgo</th>
                                <th class="text-center">Objetivo de Control</th>
                                <th class="text-center">Control</th>
                                <th class="text-center">Pruebas de Cumplimiento</th>
                                <th class="text-center">Pruebas Sustantivas</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td rowspan="2" class="risk-cell">
                                    <strong>Acceso no autorizado a sistemas y aplicaciones</strong>
                                </td>
                                <td rowspan="2" class="objective-cell">
                                    Garantizar el acceso a los sistemas sólo de personal autorizado
                                </td>
                                <td class="control-cell">
                                    Procedimiento de gestión de contraseñas
                                </td>
                                <td class="compliance-cell">
                                    Comprobar la existencia de un procedimiento para generar passwords seguros
                                </td>
                                <td class="substantive-cell">
                                    Verificar complejidad de contraseñas en muestra de usuarios
                                </td>
                            </tr>
                            <tr>
                                <td class="control-cell">
                                    Procedimiento de altas/bajas de usuarios
                                </td>
                                <td class="compliance-cell">
                                    Comprobar que usuarios dados de baja no acceden
                                </td>
                                <td class="substantive-cell">
                                    Ampliar muestra de usuarios y verificar accesos
                                </td>
                            </tr>
                            <tr>
                                <td rowspan="2" class="risk-cell">
                                    <strong>Pérdida de datos por falta de respaldos</strong>
                                </td>
                                <td rowspan="2" class="objective-cell">
                                    Asegurar la disponibilidad y recuperación de datos críticos
                                </td>
                                <td class="control-cell">
                                    Política de respaldos automatizados
                                </td>
                                <td class="compliance-cell">
                                    Verificar que existe política de respaldos documentada
                                </td>
                                <td class="substantive-cell">
                                    Probar restauración de datos en entorno de prueba
                                </td>
                            </tr>
                            <tr>
                                <td class="control-cell">
                                    Almacenamiento en la nube con redundancia
                                </td>
                                <td class="compliance-cell">
                                    Comprobar configuración de respaldos en la nube
                                </td>
                                <td class="substantive-cell">
                                    Verificar integridad de respaldos en múltiples ubicaciones
                                </td>
                            </tr>
                            <tr>
                                <td rowspan="2" class="risk-cell">
                                    <strong>Vulnerabilidades en software desactualizado</strong>
                                </td>
                                <td rowspan="2" class="objective-cell">
                                    Mantener sistemas actualizados y seguros
                                </td>
                                <td class="control-cell">
                                    Proceso de gestión de parches
                                </td>
                                <td class="compliance-cell">
                                    Verificar que existe calendario de actualizaciones
                                </td>
                                <td class="substantive-cell">
                                    Revisar historial de actualizaciones en servidores críticos
                                </td>
                            </tr>
                            <tr>
                                <td class="control-cell">
                                    Herramientas de monitoreo de vulnerabilidades
                                </td>
                                <td class="compliance-cell">
                                    Comprobar que se ejecutan escaneos regulares
                                </td>
                                <td class="substantive-cell">
                                    Analizar reportes de vulnerabilidades de los últimos 3 meses
                                </td>
                            </tr>
                            <tr>
                                <td rowspan="2" class="risk-cell">
                                    <strong>Filtración de datos de clientes</strong>
                                </td>
                                <td rowspan="2" class="objective-cell">
                                    Proteger información confidencial de clientes
                                </td>
                                <td class="control-cell">
                                    Encriptación de datos en tránsito y reposo
                                </td>
                                <td class="compliance-cell">
                                    Verificar implementación de protocolos de encriptación
                                </td>
                                <td class="substantive-cell">
                                    Probar encriptación en comunicaciones con clientes
                                </td>
                            </tr>
                            <tr>
                                <td class="control-cell">
                                    Política de clasificación de datos
                                </td>
                                <td class="compliance-cell">
                                    Comprobar que existe clasificación de datos sensibles
                                </td>
                                <td class="substantive-cell">
                                    Revisar manejo de datos personales en aplicaciones
                                </td>
                            </tr>
                            <tr>
                                <td rowspan="2" class="risk-cell">
                                    <strong>Interrupción de servicios por fallos de infraestructura</strong>
                                </td>
                                <td rowspan="2" class="objective-cell">
                                    Garantizar la continuidad del negocio
                                </td>
                                <td class="control-cell">
                                    Plan de continuidad de negocio
                                </td>
                                <td class="compliance-cell">
                                    Verificar que existe plan documentado y actualizado
                                </td>
                                <td class="substantive-cell">
                                    Simular escenario de fallo y probar procedimientos
                                </td>
                            </tr>
                            <tr>
                                <td class="control-cell">
                                    Infraestructura redundante y monitoreo 24/7
                                </td>
                                <td class="compliance-cell">
                                    Comprobar configuración de redundancia en sistemas críticos
                                </td>
                                <td class="substantive-cell">
                                    Verificar logs de monitoreo y tiempos de respuesta
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <div class="mt-3">
                    <p><strong>Notas importantes:</strong></p>
                    <ul>
                        <li><strong>Pruebas de Cumplimiento:</strong> Verifican que los controles existen y están documentados</li>
                        <li><strong>Pruebas Sustantivas:</strong> Evalúan la efectividad real de los controles implementados</li>
                        <li><strong>Frecuencia:</strong> Las pruebas se realizan trimestralmente con muestras representativas</li>
                        <li><strong>Responsable:</strong> Equipo de auditoría interna con apoyo de consultores externos</li>
                    </ul>
                </div>
            </div>
        `;
    }
    
    getFundamentosContent() {
        return `
            <div class="content-card fade-in">
                <h3><i class="fas fa-shield-alt me-2"></i>Definición de Riesgo</h3>
                <p>Un <strong>riesgo</strong> es un evento incierto, con posibilidades estimadas de ocurrir en un futuro, que puede retrasar el logro de los objetivos o metas de una organización.</p>
            </div>
            
            <div class="content-card fade-in">
                <h3><i class="fas fa-cogs me-2"></i>Gestión de Riesgos</h3>
                <p>Un proceso que identifica todos los riesgos relevantes para una organización, los evalúa, asigna una prioridad para su tratamiento, los monitoriza e informa documentadamente de la gestión efectuada.</p>
                <p>Una gestión de riesgo que deberá ser eficiente y efectiva, involucrando a la dirección y al personal en todos sus niveles, proponiendo controles de verificación relevantes y focalizando su gestión preferentemente hacia la causa del riesgo.</p>
            </div>
            
            <div class="content-card fade-in">
                <h3><i class="fas fa-star me-2"></i>Principios de la Gestión del Riesgo (ISO 31000)</h3>
                <ul>
                    <li>La gestión del riesgo debe crear valor a la organización</li>
                    <li>Tiene que estar presente en la toma de decisiones de la organización</li>
                    <li>Debe estar integrada en todos los procesos operativos</li>
                    <li>Será una gestión sistemática, estructurada y adecuada</li>
                    <li>Dispondrá de la mejor información empresarial</li>
                    <li>Se adaptará a la medida de cada caso e incluirá factores humanos y culturales</li>
                    <li>La gestión será sensible al cambio e iterativa</li>
                    <li>Facilitará en todo momento la mejora continua de la organización</li>
                </ul>
            </div>
            
            <div class="content-card fade-in">
                <h3><i class="fas fa-list me-2"></i>Categorías de Riesgos</h3>
                <div class="risk-categories">
                    <div class="risk-category">
                        <h4><i class="fas fa-desktop me-2"></i>Riesgos Sistemas TI</h4>
                        <ul>
                            <li>Amenazas electrónicas</li>
                            <li>Fallos técnicos en software</li>
                            <li>Fallos en infraestructuras</li>
                            <li>Errores humanos</li>
                        </ul>
                    </div>
                    <div class="risk-category">
                        <h4><i class="fas fa-dollar-sign me-2"></i>Riesgos Financieros</h4>
                        <ul>
                            <li>Reducción en fondos empresariales</li>
                            <li>Mala gestión del flujo de caja</li>
                            <li>Fraudes o robos</li>
                            <li>Presupuestos deficientes</li>
                        </ul>
                    </div>
                    <div class="risk-category">
                        <h4><i class="fas fa-cogs me-2"></i>Riesgos Operacionales</h4>
                        <ul>
                            <li>Prestación de servicios de baja calidad</li>
                            <li>Riesgos de salud y seguridad laboral</li>
                            <li>Nivel de competencias del personal</li>
                        </ul>
                    </div>
                    <div class="risk-category">
                        <h4><i class="fas fa-user-shield me-2"></i>Riesgos Reputacionales</h4>
                        <ul>
                            <li>Asociación con organizaciones mal consideradas</li>
                            <li>Falta de ética en el proceder</li>
                            <li>Deficientes relaciones con stakeholders</li>
                        </ul>
                    </div>
                    <div class="risk-category">
                        <h4><i class="fas fa-gavel me-2"></i>Riesgos de Cumplimiento</h4>
                        <ul>
                            <li>Protección de personas vulnerables</li>
                            <li>Legislación relativa al pago de impuestos</li>
                            <li>Reglamento de protección de datos</li>
                            <li>Legislación de prevención de riesgos laborales</li>
                        </ul>
                    </div>
                    <div class="risk-category">
                        <h4><i class="fas fa-chess me-2"></i>Riesgos Estratégicos</h4>
                        <ul>
                            <li>Participación en actividades no alineadas</li>
                            <li>Nula involucración en objetivos estratégicos</li>
                        </ul>
                    </div>
                </div>
            </div>
        `;
    }
    
    getMetodologiasContent() {
        return `
            <div class="content-card fade-in">
                <h3><i class="fas fa-cogs me-2"></i>Metodologías de Análisis de Riesgos</h3>
                <p>La evaluación de riesgos TI es un proceso de análisis de posibles amenazas y vulnerabilidades en los sistemas de una organización TI para determinar el nivel del riesgo y su naturaleza. Esta información es el primer aporte para la toma de decisiones sobre si los riesgos deben tratarse o no.</p>
            </div>
            
            <div class="methodology-cards">
                <div class="methodology-card fade-in">
                    <h4><i class="fas fa-calculator me-2"></i>Metodologías Cuantitativas</h4>
                    <p>La evaluación cuantitativa evalúa el riesgo empleando costes monetarios o valores referenciales. Emplea fórmulas matemáticas para valorar las pérdidas asociadas con un determinado riesgo.</p>
                    <p><strong>Fórmula del Riesgo:</strong></p>
                    <p style="text-align: center; font-weight: bold; color: #c0392b;">Riesgo = Probabilidad × Impacto</p>
                    <p>Donde las variables probabilidad e impacto varían entre los valores 1 y 5 para expresar de menor a mayor su importancia.</p>
                    <ul>
                        <li>Análisis de probabilidad</li>
                        <li>Análisis de consecuencias</li>
                        <li>Simulación computacional</li>
                        <li>Método Montecarlo</li>
                        <li>Método PERT</li>
                    </ul>
                </div>
                
                <div class="methodology-card fade-in">
                    <h4><i class="fas fa-chart-bar me-2"></i>Metodologías Cualitativas</h4>
                    <p>La evaluación cualitativa está basada en la opinión, experiencia e intuición en la toma de decisiones. Se suele emplear con riesgos bajos o cuando no es posible aplicar los métodos cuantitativos.</p>
                    <p>Se trata de un juicio personal o de la dirección que clasifica los riesgos en una escala de tres valores:</p>
                    <ul>
                        <li><strong>Bajo:</strong> poca probabilidad de ocurrencia o que afecte al negocio</li>
                        <li><strong>Medio:</strong> existe la posibilidad de que ocurra e impacte en el negocio</li>
                        <li><strong>Alto:</strong> Hay gran probabilidad de ocurrencia y que afecte gravemente al negocio</li>
                    </ul>
                    <p><strong>Herramientas principales:</strong></p>
                    <ul>
                        <li>Brainstorming</li>
                        <li>Cuestionario</li>
                        <li>Entrevistas estructuradas</li>
                        <li>Evaluación de grupos disciplinarios</li>
                        <li>Juicio de expertos</li>
                    </ul>
                </div>
                
                <div class="methodology-card fade-in">
                    <h4><i class="fas fa-shield-alt me-2"></i>Metodología MAGERIT</h4>
                    <p>El Consejo Superior de Administración Electrónica Española ha elaborado la metodología MAGERIT (Metodología de Análisis y Gestión de Riesgos de los Sistemas de Información), como una metodología de análisis y gestión de riesgos que permite evaluar los riesgos en un sistema de información y su entorno.</p>
                    <p>MAGERIT realiza un análisis de los riesgos que implica evaluar el impacto que una amenaza de seguridad tiene en la organización TI. Además, señala los riesgos existentes, identifica posibles amenazas y determina la vulnerabilidad del sistema de prevención.</p>
                    <ul>
                        <li>Análisis mediante Tablas</li>
                        <li>Análisis Algorítmico</li>
                        <li>Árboles de Ataque</li>
                        <li>Técnicas de Apoyo (entrevistas, reuniones)</li>
                    </ul>
                </div>
            </div>
        `;
    }
    
    getProcesoContent() {
        return `
            <div class="content-card fade-in">
                <h3><i class="fas fa-tasks me-2"></i>Proceso de Gestión del Riesgo (NIST)</h3>
                <p>El proceso de gestión del riesgo específico para organizaciones TI, basándose en el documento publicado por la National Institute of Standards and Technology (NIST) en el año 2018, consta de siete pasos.</p>
                <p>El primer paso sirve de preparación para conseguir que las organizaciones estén listas para la ejecución del proceso y el resto de pasos componen el propio proceso en sí, ejecutándose de forma continua.</p>
            </div>
            
            <div class="process-steps">
                <div class="process-step fade-in">
                    <div class="step-number">1</div>
                    <h4>Preparación</h4>
                    <p>Realiza actividades esenciales en diferentes niveles de la organización, para ayudar a preparar a la organización a administrar sus riesgos de seguridad y privacidad utilizando el framework de gestión de riesgos.</p>
                    <ul>
                        <li>Roles de gestión de riesgos</li>
                        <li>Estrategia de gestión de riesgos</li>
                        <li>Organización de gestión de riesgos</li>
                        <li>Identificación de controles comunes</li>
                        <li>Priorización del nivel de impacto</li>
                        <li>Organización de una estrategia de monitorización</li>
                    </ul>
                </div>
                
                <div class="process-step fade-in">
                    <div class="step-number">2</div>
                    <h4>Clasificación</h4>
                    <p>Busca informar a los procesos y tareas involucradas en la gestión de riesgos de la organización del impacto que puede suponer la pérdida de confidencialidad, integridad y disponibilidad de los sistemas TI.</p>
                    <ul>
                        <li>Descripción del sistema</li>
                        <li>Clasificación de seguridad</li>
                        <li>Revisión y aprobación de la clasificación de seguridad</li>
                    </ul>
                </div>
                
                <div class="process-step fade-in">
                    <div class="step-number">3</div>
                    <h4>Selección</h4>
                    <p>Selecciona, adapta y documenta los controles necesarios para proteger el sistema de información y la organización de manera proporcional al riesgo asociado con los activos y la operativa organizacional.</p>
                    <ul>
                        <li>Selección de controles</li>
                        <li>Adaptación de controles</li>
                        <li>Asignación de control</li>
                        <li>Documentación de la implementación</li>
                        <li>Sistema de estrategia de monitorización</li>
                        <li>Revisión y aprobación del plan</li>
                    </ul>
                </div>
                
                <div class="process-step fade-in">
                    <div class="step-number">4</div>
                    <h4>Implementación</h4>
                    <p>Implementa los controles previstos en los planes de seguridad y privacidad de la organización y crea una configuración base, con los detalles específicos de la implementación de cada control.</p>
                    <ul>
                        <li>Implementación de controles</li>
                        <li>Actualización de la información de la implementación</li>
                    </ul>
                </div>
                
                <div class="process-step fade-in">
                    <div class="step-number">5</div>
                    <h4>Evaluación</h4>
                    <p>Observa si los controles seleccionados para la implementación se implementan correctamente, funcionan según lo previsto y producen el resultado esperado respecto al cumplimiento de los requisitos de seguridad y privacidad.</p>
                    <ul>
                        <li>Selección de evaluador</li>
                        <li>Plan de evaluación</li>
                        <li>Evaluaciones de control</li>
                        <li>Informes de evaluación</li>
                        <li>Acciones de reparación</li>
                        <li>Plan de acción e hitos</li>
                    </ul>
                </div>
                
                <div class="process-step fade-in">
                    <div class="step-number">6</div>
                    <h4>Autorización</h4>
                    <p>Proporciona responsabilidad a la gestión del riesgo al exigir que un responsable de la alta dirección determine si el riesgo de seguridad y privacidad de la implantación del sistema o de los controles es aceptable.</p>
                    <ul>
                        <li>Paquete de autorización</li>
                        <li>Análisis e identificación de riesgos</li>
                        <li>Respuesta a los riesgos</li>
                        <li>Decisión de autorización</li>
                        <li>Informes de autorización</li>
                    </ul>
                </div>
                
                <div class="process-step fade-in">
                    <div class="step-number">7</div>
                    <h4>Monitorización</h4>
                    <p>Persigue que la organización mantenga una continua concienciación acerca de la importancia que la seguridad y privacidad de los sistemas de información supone a la hora de apoyar las decisiones de gestión de riesgos.</p>
                    <ul>
                        <li>Cambios en el sistema y en el entorno</li>
                        <li>Evaluaciones continuas</li>
                        <li>Respuesta continua al riesgo</li>
                        <li>Actualizaciones de paquetes de autorización</li>
                        <li>Informes de seguridad y privacidad</li>
                        <li>Autorización continua</li>
                        <li>Eliminación del sistema</li>
                    </ul>
                </div>
            </div>
        `;
    }
    
    getTratamientoContent() {
        return `
            <div class="content-card fade-in">
                <h3><i class="fas fa-tools me-2"></i>Tratamiento del Riesgo</h3>
                <p>Junto con los siete pasos del proceso de gestión del riesgo, es preciso incorporar una etapa final, conocida como tratamiento del riesgo cuyo objetivo es mejorar los controles existentes para el tratamiento del riesgo.</p>
                <p>El tratamiento de los riesgos, que debe ser una etapa dinámica y flexible para atender los posibles cambios que puedan producirse, precisa de la realización de actividades que involucran el registro, la actualización, la monitorización y la intervención.</p>
            </div>
            
            <div class="content-card fade-in">
                <h3><i class="fas fa-clipboard-list me-2"></i>Plan de Tratamiento del Riesgo</h3>
                <p>Un plan de tratamiento del riesgo consiste en la planificación de las acciones a ejecutar para implementar los controles que sean necesarios para gestionar el riesgo de una organización.</p>
                <p>El ámbito de acción del plan de tratamiento del riesgo se encontrará en alguna de las siguientes situaciones:</p>
                <ul>
                    <li>La exposición del riesgo de la organización ha sufrido algún cambio desde el último análisis de riesgo realizado</li>
                    <li>Existen evidentes síntomas de la aparición de nuevos riesgos que no habían sido detectados al principio del proceso</li>
                </ul>
            </div>
            
            <div class="content-card fade-in">
                <h3><i class="fas fa-shield-alt me-2"></i>Estrategias de Tratamiento del Riesgo</h3>
                <p>Ambas situaciones pueden abordarse desde dos estrategias, donde la organización deberá valorar el coste de las acciones a realizar y comparar este coste con las posibles pérdidas que puedan sufrir:</p>
            </div>
            
            <div class="treatment-strategies">
                <div class="treatment-strategy">
                    <h4><i class="fas fa-ban me-2"></i>Estrategias de Evitación</h4>
                    <p>Buscan anticiparse al riesgo y minimizar su probabilidad de ocurrencia. Hay cuatro posibles estrategias de evitación:</p>
                    <ul>
                        <li><strong>Transferencia:</strong> transfiere el riesgo presente en la organización a otra empresa, mediante la venta del activo de riesgo o la formulación de un seguro</li>
                        <li><strong>Reducción:</strong> busca reducir la probabilidad de ocurrencia o las consecuencias de un riesgo con nuevos controles o procedimientos</li>
                        <li><strong>Elusión:</strong> intenta eludir un riesgo bien no realizando la acción que conlleva el riesgo, bien buscando actividades alternativas</li>
                        <li><strong>Diversificación:</strong> extiende el riesgo de una sección concreta a otras áreas de la organización</li>
                    </ul>
                </div>
                
                <div class="treatment-strategy">
                    <h4><i class="fas fa-tools me-2"></i>Estrategias de Minimización</h4>
                    <p>Se emplean cuando fallan las estrategias de evitación y el riesgo está ya presente en la organización. Se materializan a través de un plan de contingencia que intenta rebajar las pérdidas del riesgo.</p>
                    <p>El plan de contingencia contiene:</p>
                    <ul>
                        <li>Los procedimientos a ejecutar</li>
                        <li>Las tareas de cada procedimiento</li>
                        <li>Los responsables de los mismos</li>
                        <li>Los recursos necesarios</li>
                        <li>Los tiempos de respuesta</li>
                        <li>Los criterios de activación</li>
                    </ul>
                </div>
            </div>
            
            <div class="content-card fade-in">
                <h3><i class="fas fa-exclamation-triangle me-2"></i>Problemas Inherentes en el Tratamiento de Riesgos</h3>
                <p>El tratamiento de riesgos va a tener que abordar una serie de problemas inherentes a los procesos de una organización TI:</p>
                <ul>
                    <li>La alta dirección no presta todo el apoyo preciso</li>
                    <li>Existen stakeholders ausentes del proceso de gestión de riesgos</li>
                    <li>La información no se comparte de forma efectiva</li>
                    <li>La gestión de riesgos no está integrada en el sistema de planificación y gestión de la organización</li>
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

// Inicializar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    window.app = new RiskManagementApp();
});
