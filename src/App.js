import React from 'react';
import NavbarComponent from './components/NavbarComponent';
import Footer from '../src/components/Footer'
import About from "../src/components/pages/About";
import Contact from "../src/components/pages/Contact";
import Portfolio from "../src/components/pages/Portfolio";
import Resume from "../src/components/pages/Resume";
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  return (
    <>
      <Router>
      <NavbarComponent />
        <Routes>
          <Route path="*" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
