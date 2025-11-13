import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} section-container`}>
        <a href="/" className={styles.logo}>
          {/* Si tuvieras logo-sumadots.svg en /public/
          <img src="/logo-sumadots.svg" alt="SumaDots Logo" /> 
          */}
          <strong>SumaDots</strong>
        </a>
        <ul className={styles.menu}>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#soluciones">Soluciones</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;