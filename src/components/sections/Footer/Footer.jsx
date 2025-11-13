import styles from './Footer.module.css';
import Button from '../../ui/Button/Button';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerContainer} section-container`}>
        <div className={styles.cta}>
          <h3>¿Listo para lidear con inteligencia?</h3>
          <Button variant="secondary">Solicita una Demostración</Button>
        </div>
        <div className={styles.social}>
          {/* Aquí irían tus iconos de redes sociales */}
          <a href="#" aria-label="Twitter">T</a>
          <a href="#" aria-label="Facebook">F</a>
          <a href="#" aria-label="LinkedIn">in</a>
        </div>
      </div>
      <div className={styles.copyright}>
        © {new Date().getFullYear()} SumaDots. Todos los derechos reservados.
      </div>
    </footer>
  );
}

export default Footer;