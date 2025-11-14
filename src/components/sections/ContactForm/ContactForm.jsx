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

  // --- Lógica de Envío del Formulario (handleSubmit) ACTUALIZADA ---
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setIsLoading(true);
    setError(null);
    
    // 1. Define el rubro final
    const rubroFinal = formData.rubro === 'otro' ? formData.rubro_otro : formData.rubro;
    
    // 2. Lee la URL de la API desde las variables de entorno de Vite
    const apiUrl = import.meta.env.VITE_API_URL;

    // 3. Prepara los datos del formulario
    const fullData = {
      proyecto: formData.proyecto,
      rubro: rubroFinal,
      email: formData.email,
      phone: phoneValue,
      source_url: window.location.href, // URL de la landing page
      
      // Campos Fijos para que tu API los reconozca
      servicio: 'LP Agrotech', // Para filtrarlo en Airtable
      'digital-level': 'N/A (LP Agro)', // Placeholder
    };
    
    // No es necesario enviar esto a la API
    delete fullData.rubro_otro; 

    // 4. Lógica de envío real apuntando al endpoint /api/submit-form
    try {
      const response = await fetch(`${apiUrl}/api/submit-form`, { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(fullData),
      });

      if (!response.ok) {
        // Captura errores del servidor (ej: 404, 500)
        throw new Error('Hubo un problema al enviar tu mensaje. Inténtalo de nuevo.');
      }

      // Si todo sale bien
      setIsLoading(false);
      setIsSubmitted(true); // Muestra el modal de éxito

    } catch (err) {
      // Captura errores de red (ej: no hay conexión)
      setIsLoading(false);
      setError(err.message); // Muestra el error en el formulario
    }
  };
  // --- Fin del handleSubmit ---


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
        {/* --- Títulos llamativos --- */}
        <h2 className={styles.title}>¿Listo para empezar?</h2>
        <p className={styles.subtitle}>
          Agenda tu <strong>diagnóstico gratuito</strong> y deja que <span className={styles.textGradientSuma}>Suma</span> 
          te muestre tus próximas victorias.
        </p>
          
        <form className={styles.contactForm} onSubmit={handleSubmit} ref={formRef}>
          <div className={styles.formGrid}>
            
            <div className={styles.formGroup}>
              <label htmlFor="rubro">Rubro de su organización</label>
              <select id="rubro" name="rubro" required
                value={formData.rubro} onChange={handleChange}
              >
                <option value="">Seleccione un rubro...</option>
                {/* Cambié las opciones de valor a algo más simple */}
                <option value="Agrícola">Agrícola</option> 
                <option value="Vitivinícola">Vitivinícola</option>
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
              
            {/* Botón con el copy llamativo */}
            <div className={`${styles.formGroup} ${styles.fullWidth}`}>
              <button 
                type="submit" 
                className={`${styles.ctaButton} ${styles.submitButton}`} 
                disabled={isLoading}
              >
                {isLoading ? 'Enviando...' : 'Quiero mi diagnóstico con Suma'}
              </button>
            </div>

            {/* Muestra el error de red/servidor aquí */}
            {error && (
              <div className={`${styles.formGroup} ${styles.fullWidth} ${styles.errorMessage}`}>
                {error}
              </div>
            )}
          </div>
        </form>
      </section>

      {/* --- POP-UP (Modal) de Éxito --- */}
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