import styles from './Header.module.css';
import Button from '../../ui/Button/Button'; // <-- 1. Importar el Botón

function Header() {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} section-container`}>
        
        {/* 2. Logo ahora linkea a tu sitio principal */}
        <a 
          href="https://sumadots.com" 
          className={styles.logo}
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img src="/suma-dots-logo-header.svg" alt="SumaDots Logo" />
        </a>

        {/* 3. Menú actualizado */}
        <ul className={styles.menu}>
          <li>
            <a 
              href="https://sumadots.com" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="https://sumadots.com/blog" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Blog
            </a>
          </li>
          
          {/* 4. CTA como un link que usa el componente Button */}
          <li>
            <a href="#contact" className={styles.ctaLink}>
              <Button variant="primary">Consultoría gratuita</Button>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;