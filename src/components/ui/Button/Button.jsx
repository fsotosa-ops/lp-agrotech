import styles from './Button.module.css';

// variant puede ser 'primary' (naranja) o 'secondary' (borde naranja)
function Button({ children, onClick, variant = 'primary' }) {
  return (
    <button 
      className={`${styles.button} ${styles[variant]}`} 
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;