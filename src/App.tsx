import './App.css'
import Hero from './sections/Hero'
import Info from './sections/About'
import Products from './sections/Products'
import Contact from './sections/Contact'
import Navbar from './sections/Navbar'
import Projects from './sections/Projects'
import { useRef } from 'react';


function App() {
  const heroRef = useRef(null);
  const infoRef = useRef(null);
  const productsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <main className="max-w-7xl mx-auto relative">
        <Navbar sections={[heroRef, infoRef, productsRef, projectsRef, contactRef]} />
        <Hero sectionRef={heroRef} />
        <Info sectionRef={infoRef} />
        <Products sectionRef={productsRef} />
        <Projects sectionRef={projectsRef} />
        <Contact sectionRef={contactRef} />
    </main>
  );
}

export default App;

