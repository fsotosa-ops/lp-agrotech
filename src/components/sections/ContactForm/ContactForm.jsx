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

  // Lógica de envío a tu API/Airtable
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setIsLoading(true);
    setError(null);
    
    const rubroFinal = formData.rubro === 'otro' ? formData.rubro_otro : formData.rubro;
    const apiUrl = import.meta.env.VITE_API_URL;

    const fullData = {
      proyecto: formData.proyecto,
      rubro: rubroFinal,
      email: formData.email,
      phone: phoneValue,
      source_url: window.location.href, 
      servicio: 'LP Agrotech', 
      'digital-level': 'N/A (LP Agro)',
    };
    
    delete fullData.rubro_otro; 

    try {
      const response = await fetch(`${apiUrl}/api/submit-form`, { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fullData),
      });

      if (!response.ok) {
        throw new Error('Hubo un problema al enviar tu mensaje. Inténtalo de nuevo.');
      }
      setIsLoading(false);
      setIsSubmitted(true);
    } catch (err) {
      setIsLoading(false);
      setError(err.message);
    }
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
        <h2 className={styles.title}>
          Solicita tu Consultoría Gratuita
        </h2>
        <p className={styles.subtitle}>
          Completa tus datos. <span className={styles.textGradientSuma}>Suma</span> te contactará 
          para tu <strong>diagnóstico de datos de 30 minutos</strong>, sin costo.
        </p>
          
        <form className={styles.contactForm} onSubmit={handleSubmit} ref={formRef}>
          <div className={styles.formGrid}>
            
            <div className={styles.formGroup}>
              <label htmlFor="rubro">Rubro de su organización</label>
              <select id="rubro" name="rubro" required
                value={formData.rubro} onChange={handleChange}
              >
                <option value="">Seleccione un rubro...</option>
                <option value="Agrícola">Agrícola</option> 
                <option value="Vitivinícola">Vitivinícola</option>
                <option value="Cafetal">Cafetal</option>
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
              <label htmlFor="proyecto">Describe tu desafío de datos</label>
              <textarea 
                id="proyecto" name="proyecto" required 
                placeholder="Ej: No puedo cruzar costos con datos de campo, o mis planillas de cosecha son un caos." 
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
              
            {/* --- BOTÓN ACTUALIZADO --- */}
            <div className={`${styles.formGroup} ${styles.fullWidth}`}>
              <button 
                type="submit" 
                className={`${styles.ctaButton} ${styles.submitButton}`} 
                disabled={isLoading}
              >
                {isLoading ? 'Enviando...' : 'Solicitar mi Consultoría'}
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
            <h2 className={styles.title}>¡Solicitud Recibida!</h2>
            <p className={styles.subtitle}>
              <span className={styles.textGradientSuma}>Suma</span> ha recibido tus datos 
              y te contactará a la brevedad.
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default ContactForm;