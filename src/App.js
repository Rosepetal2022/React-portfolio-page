import React from 'react';
import NavbarComponent from './components/NavbarComponent';
import Footer from '../src/components/Footer'
import About from "../src/components/pages/About";
import Portfolio from "../src/components/pages/Portfolio";
import Resume from "../src/components/pages/Resume";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  return (
    <>
      <Router>
      <NavbarComponent />
        <Routes>
          <Route path="/*" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
