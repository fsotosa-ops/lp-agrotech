import styles from './Results.module.css';
import FeatureCard from '../../ui/FeatureCard/FeatureCard';

// === NUEVOS ICONOS SVG ===

// Icono para "Productividad" (Gráfica ascendente)
const IconProductivity = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
    <polyline points="17 6 23 6 23 12"></polyline>
  </svg>
);

// Icono para "Rentabilidad" (Moneda/Dinero)
const IconRentabilidad = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="16" x2="12" y2="12"></line>
    <line x1="12" y1="8" x2="12" y2="8"></line>
  </svg>
);

// Icono para "Decisiones Informadas" (Cerebro/IA)
const IconDecision = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a10 10 0 0 0-3.5 19.3V19a3.5 3.5 0 1 1 7 0v2.3A10 10 0 0 0 12 2z"></path>
    <path d="M12 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"></path>
    <path d="M4.5 10.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"></path>
    <path d="M19.5 10.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"></path>
  </svg>
);

// === DATOS ACTUALIZADOS (usando los iconos SVG) ===
const resultsData = [
  {
    icon: <IconProductivity />, // <- Reemplazado
    title: 'Aumento de Productividad',
    text: 'Reduce tiempos y sitúa opciones. Anticípate en vez de reaccionar.',
    color: '--color-icon-green'
  },
  {
    icon: <IconRentabilidad />, // <- Reemplazado
    title: 'Optimización de Rentabilidad',
    text: 'Identifica costos ocultos y optimiza el rendimiento financiero.',
    color: '--color-icon-blue'
  },
  {
    icon: <IconDecision />, // <- Reemplazado
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