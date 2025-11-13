import styles from './FeatureCard.module.css';

// Recibe 'icon' como un string (emoji o texto) y 'color' para el fondo
function FeatureCard({ icon, title, text, iconBgColor }) {
  
  // Mapea el color a la variable CSS
  const iconStyle = {
    backgroundColor: `var(${iconBgColor})`,
    color: `var(${iconBgColor}-text)` // Asume que tenemos --color-icon-green-text
  };

  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper} style={iconStyle}>
        <span className={styles.icon}>{icon}</span>
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{text}</p>
    </div>
  );
}

export default FeatureCard;