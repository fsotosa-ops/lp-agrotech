// Importa los estilos globales primero
import './styles/main.css';

// Importa las secciones de la página
import Header from './components/sections/Header/Header';
import Hero from './components/sections/Hero/Hero';
import ProblemSolution from './components/sections/ProblemSolution/ProblemSolution';
import ContactForm from './components/sections/ContactForm/ContactForm.jsx';
import Footer from './components/sections/Footer/Footer';
import WhatsAppButton from './components/ui/WhatsAppButton/WhatsAppButton.jsx';

function App() {
  return (
    <>
      <Header />
      
      {/* El bloque "colchón" ha sido eliminado */}
      
      <main>
        <Hero />
        <ProblemSolution />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;