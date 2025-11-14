import styles from './Header.module.css';
import Button from '../../ui/Button/Button'; // Importar el Botón

function Header() {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} section-container`}>
        
        {/* Logo (link a sumadots.com) */}
        <a 
          href="https://sumadots.com" 
          className={styles.logo}
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img src="/suma-dots-logo-header.svg" alt="SumaDots Logo" />
        </a>

        {/* Menú (links a sumadots.com) */}
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
          
          {/* --- CAMBIO AQUÍ --- */}
          {/* El CTA ahora linkea a Google Calendar */}
          <li>
            <a 
              href="https://calendar.app.google/V63XytW1VbK9Vydm9" 
              className={styles.ctaLink}
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="primary">Consultoría gratuita</Button>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;