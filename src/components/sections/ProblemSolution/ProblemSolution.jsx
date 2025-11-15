import styles from './ProblemSolution.module.css';

// --- ÍCONOS (CORREGIDOS Y DEFINITIVOS) ---

// 1. Unificación de Datos (Icono de eslabones de cadena)
const IconUnification = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
  </svg>
);

// 2. Datos Fiables y Limpios (Icono de check)
const IconCleanData = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);

// 3. Cruce de Costos vs. Operación (Icono de Gráfico de Barras)
const IconCostOperation = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
  </svg>
);

// 4. Alertas y Reportes Clave (Icono de Documento/Reporte - ¡NUEVO!)
const IconReports = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2Z" />
  </svg>
);


// --- ROADMAP DATA (CORREGIDO) ---
const roadmapData = [
  {
    solution: '1. Unificación de Datos',
    problem: 'Planillas, sensores y software de costos no se hablan entre sí',
    icon: <IconUnification />
  },
  {
    solution: '2. Datos Fiables y Limpios',
    problem: 'Información duplicada, con errores o desactualizada',
    icon: <IconCleanData />
  },
  {
    solution: '3. Cruce de Costos vs. Operación',
    problem: 'Imposible saber el costo real por hectárea o la rentabilidad por lote',
    icon: <IconCostOperation />
  },
  {
    solution: '4. Alertas y Reportes Clave',
    problem: 'Dashboards complicados que nadie usa y reportes que llegan tarde',
    icon: <IconReports /> // <-- ¡AHORA USA EL ÍCONO CORRECTO!
  }
];


function ProblemSolution() {
  
  return (
    <section className={`${styles.section} section-container`}>
      <h2>Aquí es donde <span className={styles.textGradientSuma}>Suma</span> hace la diferencia</h2>
      <h3 className={styles.subtitle}>
        Mi trabajo es conectar tus datos para que tu equipo (agrónomos y finanzas) 
        tome decisiones ganadoras.
      </h3>
      
      <div className={styles.roadmapContainer}>
        <div className={styles.roadmapLine}></div>
        <div className={styles.roadmapItemsWrapper}>
          
          {roadmapData.map((item, index) => (
            <div 
              key={index}
              className={`
                ${styles.roadmapItem}
                ${index % 2 === 0 ? styles.itemTop : styles.itemBottom}
              `}
            >
              <div className={styles.timelineDot}></div>

              {/* Caja de Hover (El Problema) */}
              <div className={styles.hoverBox}>
                <div className={styles.problemText}>
                  {item.problem}
                </div>
              </div>

              {/* Caja Visible (La Solución) */}
              <div className={styles.contentBox}>
                <div className={styles.solutionText}>
                  <span className={styles.iconSolution}>
                    {item.icon} 
                  </span>
                  {item.solution}
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default ProblemSolution;