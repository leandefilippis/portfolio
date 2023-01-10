import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Home from './components/Home';

function App() {
  return (
      <div>
          <Navbar/>
          <Home />
          <Skills />
          <Projects />
          <About />
          <Contact />
      </div>
  );
}

export default App;
