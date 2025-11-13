// Importa los estilos globales primero
import './styles/main.css';

// Importa las secciones de la página
import Header from './components/sections/Header/Header';
import Hero from './components/sections/Hero/Hero';
import ProblemSolution from './components/sections/ProblemSolution/ProblemSolution';
import Results from './components/sections/Results/Results';
import Footer from './components/sections/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemSolution />
        <Results />
      </main>
      <Footer />
    </>
  );
}

export default App;