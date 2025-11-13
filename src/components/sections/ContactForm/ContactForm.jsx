import { useState, useRef } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'; // Estilos base del input de teléfono
import styles from './ContactForm.module.css'; // Usaremos CSS Modules

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

    // Aquí iría tu lógica de envío a la API (la he omitido por ahora)
    // const apiUrl = import.meta.env.VITE_API_URL;
    // ... fetch ...
    
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
        <h2 className={styles.title}>Hablemos de tu Proyecto</h2>
        <p className={styles.subtitle}>Completa el formulario y te contactaremos.</p>
          
        <form className={styles.contactForm} onSubmit={handleSubmit} ref={formRef}>
          <div className={styles.formGrid}>
            
            {/* --- CAMPO RUBRO (SIMPLIFICADO) --- */}
            <div className={styles.formGroup}>
              <label htmlFor="rubro">Rubro de su organización</label>
              <select id="rubro" name="rubro" required
                value={formData.rubro} onChange={handleChange}
              >
                <option value="">Seleccione un rubro...</option>
                <option value="Sectores Agrícolas">Sectores Agrícolas</option>
                <option value="Viñas">Viñas</option>
                <option value="otro">Otro (especificar)</option>
              </select>
            </div>

            {/* --- CAMPO CONDICIONAL "OTRO" --- */}
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
              {/* Este componente requiere CSS adaptado */}
              <PhoneInput
                id="phone" name="phone" required
                international
                defaultCountry="CL"
                value={phoneValue}
                onChange={setPhoneValue}
                className={styles.phoneInputContainer}
              />
            </div>
              
            <div className={`${styles.formGroup} ${styles.fullWidth}`}>
              <button 
                type="submit" 
                className={`${styles.ctaButton} ${styles.submitButton}`} 
                disabled={isLoading}
              >
                {isLoading ? 'Enviando...' : 'Enviar Mensaje'}
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

      {/* --- El POP-UP (Modal) de Éxito --- */}
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
            <h2 className={styles.title}>¡Mensaje Enviado!</h2>
            <p className={styles.subtitle}>
              Hemos recibido tus datos y te contactaremos a la brevedad.
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default ContactForm;