import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Home from './components/Home';

function App() {
  return (
      <div className="App">
          <Navbar/>
          <Home />
          <About />
          <Projects />
          <Skills />
          <Contact />
      </div>
  );
}

export default App;
