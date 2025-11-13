import styles from './ProblemSolution.module.css';

// Icono SVG para "Problema" (un icono de 'X' o cierre)
const IconProblem = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

// Icono SVG para "Solución" (un icono de 'check')
const IconSolution = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="3" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);


function ProblemSolution() {
  return (
    <section className={`${styles.section} section-container`}>
      <h2>De Problema a Poder con SumaDots</h2>
      <h3 className={styles.subtitle}>
        El Problema (Sin Datos) vs. La Solución (Con SumaDots)
      </h3>
      
      {/* El grid ahora solo tiene 2 columnas */}
      <div className={styles.grid}>
        
        {/* Columna de Problemas */}
        <div className={styles.boxProblem}>
          <ul>
            <li>
              <span className={styles.iconProblem}>
                <IconProblem />
              </span>
              <span>Riesgos Operativos Tardíos</span>
            </li>
            <li>
              <span className={styles.iconProblem}>
                <IconProblem />
              </span>
              <span>Rentabilidad incierta por hectárea</span>
            </li>
            <li>
              <span className={styles.iconProblem}>
                <IconProblem />
              </span>
              <span>Información Dispersa y poco confiable</span>
            </li>
          </ul>
        </div>

        {/* La columna de flechas ➡️ se eliminó */}

        {/* Columna de Soluciones */}
        <div className={styles.boxSolution}>
           <ul>
            <li>
              <span className={styles.iconSolution}>
                <IconSolution />
              </span>
              <span>Anticipación de Riesgos</span>
            </li>
            <li>
              <span className
={styles.iconSolution}>
                <IconSolution />
              </span>
              <span>Decisiones Proactivas (Clima y rendimiento)</span>
            </li>
            <li>
              <span className={styles.iconSolution}>
                <IconSolution />
              </span>
              <span>Datos Unificados y Fiables para Planificar</span>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default ProblemSolution;