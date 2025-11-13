import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Hemos eliminado el div "footerContainer" que contenía 
        el CTA y los iconos de redes sociales.
      */}
      <div className={styles.copyright}>
        © {new Date().getFullYear()} SumaDots. Todos los derechos reservados.
      </div>
    </footer>
  );
}

export default Footer;