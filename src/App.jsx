// Importa los estilos globales primero
import './styles/main.css';

// Importa las secciones de la página
import Header from './components/sections/Header/Header';
import Hero from './components/sections/Hero/Hero';
import ProblemSolution from './components/sections/ProblemSolution/ProblemSolution';
import Results from './components/sections/Results/Results';
// === 1. Importa el nuevo ContactForm ===
import ContactForm from './components/sections/ContactForm/ContactForm.jsx';
import Footer from './components/sections/Footer/Footer';
import WhatsAppButton from './components/ui/WhatsAppButton/WhatsAppButton.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemSolution />
        <Results />
        {/* === 2. Añade el ContactForm aquí === */}
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;