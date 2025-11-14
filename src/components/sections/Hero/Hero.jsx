import styles from './Hero.module.css';
import Button from '../../ui/Button/Button';

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`${styles.heroContainer} section-container`}>
        
        {/* --- Columna de Contenido (ACTUALIZADA) --- */}
        <div className={styles.content}>
          <h1 className={styles.title}>
            Decisiones más inteligentes para tu agro.
            Contrata un experto en datos, no solo un software.
          </h1>
          <p className={styles.subtitle}>
            Te ayudo a conectar tus datos y transformar la incertidumbre 
            en rentabilidad, usando una metodología probada para 
            desbloquear el potencial de tu campo.
          </p>
          {/* El botón "Empieza tu Transformación" es perfecto para un servicio */}
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