import { useState } from 'react'; // <-- 1. Importar useState
import styles from './Header.module.css';
import Button from '../../ui/Button/Button';

function Header() {
  // 2. Añadir estado para el menú móvil
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} section-container`}>
        
        {/* Logo (sin cambios) */}
        <a 
          href="https://sumadots.com" 
          className={styles.logo}
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img src="/suma-dots-logo-header.svg" alt="SumaDots Logo" />
        </a>

        {/* --- 3. Botón de Hamburguesa (NUEVO) --- */}
        {/* Se muestra solo en móvil */}
        <button className={styles.hamburgerButton} onClick={toggleMenu} aria-label="Abrir menú">
          {isMenuOpen ? (
            // Icono de 'X' (Cerrar)
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Icono de Hamburguesa (Abrir)
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>

        {/* --- 4. Menú de Navegación (MODIFICADO) --- */}
        {/* Se le añade una clase condicional para mostrarse en móvil */}
        <ul className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ''}`}>
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