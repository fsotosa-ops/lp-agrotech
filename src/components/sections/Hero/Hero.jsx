import styles from './Hero.module.css';
import Button from '../../ui/Button/Button';

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`${styles.heroContainer} section-container`}>
        
        {/* --- Columna de Contenido (ACTUALIZADA) --- */}
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
          <Button>Empieza tu Transformación</Button>
        </div>
        
        {/* --- Columna del Video (Sin cambios) --- */}
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