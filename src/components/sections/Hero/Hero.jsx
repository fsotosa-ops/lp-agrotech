import styles from './Hero.module.css';
import Button from '../../ui/Button/Button';

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`${styles.heroContainer} section-container`}>
        
        {/* --- Columna de Contenido --- */}
        <div className={styles.content}>
          <h1 className={styles.title}>
            Menos intuición.
            Más rentabilidad.
          </h1>
          <p className={styles.subtitle}>
            Soy <strong><span className={styles.textGradientSuma}>Suma</span></strong>, tu asesor experto en datos. No soy un software, 
            soy tu socio. Conecto tu información y te entrego los 
            insights que necesitas para ganar.
          </p>
          
          {/* --- CAMBIO AQUÍ --- */}
          {/* El Botón ahora está envuelto en un link a Google Calendar */}
          <a 
            href="https://calendar.app.google/V63XytW1VbK9Vydm9" 
            className={styles.heroCtaLink}
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button>Empieza tu Transformación</Button>
          </a>
        </div>
        
        {/* --- Columna del Video --- */}
        <div className={styles.videoWrapper}>
          <video
            src="/video-suma-agrotech.mp4"
            autoPlay
            loop
            muted
            playsInline
            className={styles.heroVideo}
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;