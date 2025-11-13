import styles from './Hero.module.css';
import Button from '../../ui/Button/Button';

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`${styles.heroContainer} section-container`}>
        
        {/* --- Columna de Contenido --- */}
        <div className={styles.content}>
          <h1 className={styles.title}>
            SumaDots: Conecta Tus Datos, Desbloquea Tu Potencial
          </h1>
          <p className={styles.subtitle}>
            La plataforma inteligente que transforma la incertidumbre
            en ventaja competitiva.
          </p>
          <Button>Empieza tu Transformación</Button>
        </div>
        
        {/* --- Columna del Video --- */}
        <div className={styles.videoWrapper}>
          <video
            // Esta es la ruta a tu nuevo video en la carpeta /public/
            src="/video-suma-agrotech.mp4"
            autoPlay
            loop
            muted
            playsInline
            className={styles.heroVideo}
            // Opcional: añade una imagen de poster mientras carga el video
            // poster="/portada-video.jpg"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;