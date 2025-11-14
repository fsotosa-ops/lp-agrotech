import styles from './Hero.module.css';
import Button from '../../ui/Button/Button';

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`${styles.heroContainer} section-container`}>
        
        {/* --- Columna de Contenido (ACTUALIZADA) --- */}
        <div className={styles.content}>
          <h1 className={styles.title}>
            Tu agro o viña necesita un experto.
            Te presento a Suma.
          </h1>
          <p className={styles.subtitle}>
            Suma es tu asesor experto en datos. Él se encarga de conectar 
            la información, transformar la incertidumbre en rentabilidad 
            y darte los insights para desbloquear el potencial de tu campo.
          </p>
          <Button>Empieza tu Transformación</Button>
        </div>
        
        {/* --- Columna del Video (Sin cambios) --- */}
        <div className={styles.videoWrapper}>
          <video
            // Esta es la ruta a tu nuevo video en la carpeta /public/
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