import styles from './ProblemSolution.module.css';

// --- ÍCONOS (Sin cambios) ---
const IconAnticipation = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);
const IconAnalysis = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
  </svg>
);
const IconAutomation = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
  </svg>
);
const IconGrowth = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
  </svg>
);

// --- DATOS (Sin cambios) ---
const roadmapData = [
  {
    solution: 'Anticipación de Riesgos',
    problem: 'Riesgos operativos tardíos',
    icon: <IconAnticipation />
  },
  {
    solution: 'Decisiones Proactivas',
    problem: 'Rentabilidad incierta por hectárea',
    icon: <IconAutomation />
  },
  {
    solution: 'Datos unificados y fiables',
    problem: 'Información dispersa y poco confiable',
    icon: <IconAnalysis />
  },
  {
    solution: 'Optimización de Rentabilidad',
    problem: 'Costos ocultos y bajo rendimiento',
    icon: <IconGrowth />
  }
];


function ProblemSolution() {
  
  return (
    <section className={`${styles.section} section-container`}>
      {/* --- TÍTULOS ACTUALIZADOS --- */}
      <h2>De Problema a Poder con Suma</h2>
      <h3 className={styles.subtitle}>
        Resultados y mejoras clave que logras con Suma como tu socio experto.
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

              <div className={styles.hoverBox}>
                <div className={styles.problemText}>
                  {item.problem}
                </div>
              </div>

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