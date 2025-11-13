import styles from './ProblemSolution.module.css';

function ProblemSolution() {
  return (
    <section className={`${styles.section} section-container`}>
      <h2>De Problema a Poder con SumaDots</h2>
      <h3 className={styles.subtitle}>
        El Problema (Sin Datos) vs. La Solución (Con SumaDots)
      </h3>
      
      <div className={styles.grid}>
        {/* Columna de Problemas */}
        <div className={styles.boxProblem}>
          <ul>
            <li>
              <span className={styles.iconProblem}>❗</span>
              <span>Riesgos Operativos Tardíos</span>
            </li>
            <li>
              <span className={styles.iconProblem}>❗</span>
              <span>Rentabilidad incierta por hectárea</span>
            </li>
            <li>
              <span className={styles.iconProblem}>❗</span>
              <span>Información Dispersa y poco confiable</span>
            </li>
          </ul>
        </div>

        {/* Flechas de Transformación */}
        <div className={styles.arrows}>
          <span>➡️</span>
          <span>➡️</span>
          <span>➡️</span>
        </div>

        {/* Columna de Soluciones */}
        <div className={styles.boxSolution}>
           <ul>
            <li>
              <span className={styles.iconSolution}>✅</span>
              <span>Anticipación de Riesgos</span>
            </li>
            <li>
              <span className={styles.iconSolution}>✅</span>
              <span>Decisiones Proactivas (Clima y rendimiento)</span>
            </li>
            <li>
              <span className={styles.iconSolution}>✅</span>
              <span>Datos Unificados y Fiables para Planificar</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ProblemSolution;