import styles from './Results.module.css';
import FeatureCard from '../../ui/FeatureCard/FeatureCard';

// Datos para las tarjetas de resultados
const resultsData = [
  {
    icon: '📈', // Emoji para Aumento de Productividad
    title: 'Aumento de Productividad',
    text: 'Reduce tiempos y sitúa opciones. Anticípate en vez de reaccionar.',
    color: '--color-icon-green'
  },
  {
    icon: '💰', // Emoji para Optimización de Rentabilidad
    title: 'Optimización de Rentabilidad',
    text: 'Identifica costos ocultos y optimiza el rendimiento financiero.',
    color: '--color-icon-blue'
  },
  {
    icon: '🧠', // Emoji para Decisiones Informadas
    title: 'Decisiones Informadas',
    text: 'Actúa con datos certeros y maximiza el ROI, no por intuición.',
    color: '--color-icon-purple'
  }
];

function Results() {
  return (
    <section className={`${styles.section} section-container`}>
      <h2>Resultados que Transforman</h2>
      <div className={styles.grid}>
        {resultsData.map((result) => (
          <FeatureCard 
            key={result.title}
            icon={result.icon}
            title={result.title}
            text={result.text}
            iconBgColor={result.color}
          />
        ))}
      </div>
    </section>
  );
}

export default Results;