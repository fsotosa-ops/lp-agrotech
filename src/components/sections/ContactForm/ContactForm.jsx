import { useState, useRef } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'; 
import styles from './ContactForm.module.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    proyecto: '',
    rubro: '', 
    rubro_otro: '',
    email: '',
  });
  const [phoneValue, setPhoneValue] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setIsLoading(true);
    setError(null);
    
    const rubroFinal = formData.rubro === 'otro' ? formData.rubro_otro : formData.rubro;
    
    const fullData = {
      ...formData,
      rubro: rubroFinal,
      phone: phoneValue,
      source_url: window.location.href 
    };
    delete fullData.rubro_otro; 

    // Simulación de envío exitoso
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true); 
    }, 1000);
  };

  const handleCloseModal = () => {
    setIsSubmitted(false);
    formRef.current.reset(); 
    setFormData({ proyecto: '', rubro: '', rubro_otro: '', email: '' });
    setPhoneValue(undefined); 
    setError(null);
  };

  return (
    <> 
      <section id="contact" className={`${styles.section} section-container`}>
        {/* --- TÍTULOS ACTUALIZADOS --- */}
        <h2 className={styles.title}>¿Listo para empezar?</h2>
        <p className={styles.subtitle}>
          Agenda tu <strong>diagnóstico gratuito</strong> y deja que <span className={styles.textGradientSuma}>Suma</span> 
          te muestre tus próximas victorias.
        </p>
          
        <form className={styles.contactForm} onSubmit={handleSubmit} ref={formRef}>
          <div className={styles.formGrid}>
            
            {/* Campos del formulario (sin cambios en la lógica) */}
            <div className={styles.formGroup}>
              <label htmlFor="rubro">Rubro de su organización</label>
              <select id="rubro" name="rubro" required
                value={formData.rubro} onChange={handleChange}
              >
                <option value="">Seleccione un rubro...</option>
                <option value="Sectores Agrícolas">Agrícola</option>
                <option value="Viñas">Vitivinícola</option>
                <option value="otro">Otro (especificar)</option>
              </select>
            </div>

            {formData.rubro === 'otro' && (
              <div className={styles.formGroup}>
                <label htmlFor="rubro_otro">Especifica tu rubro</label>
                <input type="text" id="rubro_otro" name="rubro_otro" required 
                  placeholder="Ej: Productor de cerezas" 
                  value={formData.rubro_otro} onChange={handleChange}
                /> 
              </div>
            )}

            <div className={`${styles.formGroup} ${styles.fullWidth}`}>
              <label htmlFor="proyecto">Cuéntanos brevemente tu proyecto</label>
              <textarea 
                id="proyecto" name="proyecto" required 
                placeholder="Describe tu desafío o el proyecto que tienes en mente..." 
                value={formData.proyecto} onChange={handleChange}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required 
                value={formData.email} onChange={handleChange}
              /> 
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="phone">Teléfono</label>
              <PhoneInput
                id="phone" name="phone" required
                international
                defaultCountry="CL"
                value={phoneValue}
                onChange={setPhoneValue}
                className={styles.phoneInputContainer}
              />
            </div>
              
            {/* --- BOTÓN (Sin gradiente de texto para no chocar con fondo) --- */}
            <div className={`${styles.formGroup} ${styles.fullWidth}`}>
              <button 
                type="submit" 
                className={`${styles.ctaButton} ${styles.submitButton}`} 
                disabled={isLoading}
              >
                {isLoading ? 'Enviando...' : 'Quiero mi diagnóstico con Suma'}
              </button>
            </div>

            {error && (
              <div className={`${styles.formGroup} ${styles.fullWidth} ${styles.errorMessage}`}>
                {error}
              </div>
            )}
          </div>
        </form>
      </section>

      {/* --- POP-UP (Modal) ACTUALIZADO --- */}
      {isSubmitted && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContentBox}>
            <button className={styles.modalCloseButton} onClick={handleCloseModal}>
              &times;
            </button>
            <svg className={styles.successIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
              <circle cx="26" cy="26" r="25" fill="none" stroke="#28a745" strokeWidth="2"/>
              <path fill="none" stroke="#28a745" strokeWidth="3" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
            </svg>
            <h2 className={styles.title}>¡<span className={styles.textGradientSuma}>Suma</span> ha recibido tus datos!</h2>
            <p className={styles.subtitle}>
              Te contactaremos a la brevedad para agendar 
              tu sesión de diagnóstico.
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default ContactForm;