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
          <Home id="home" />
          <About id="about" />
          <Projects id="projects" />
          <Skills id="skills" />
          <Contact id="contact" />
      </div>
  );
}

export default App;
