import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Loader from './components/Loader';
import Certificates from './components/Certificates';
import Footer from './components/Footer';
import Skills from './components/Skills';
import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
  const [showLoader, setShowLoader] = useState(false);
  const [initialCheckDone, setInitialCheckDone] = useState(false);

  useEffect(() => {
    const isBot = /bot|crawl|spider|slurp|bing/i.test(navigator.userAgent);
    const alreadyVisited = sessionStorage.getItem('alreadyVisited');

    if (!isBot && !alreadyVisited) {
      setShowLoader(true);
      sessionStorage.setItem('alreadyVisited', 'true');
    }

    setInitialCheckDone(true);
  }, []);

  if (!initialCheckDone) return null;

  return (
    <>
      {showLoader ? (
        <Loader onComplete={() => setShowLoader(false)} />
      ) : (
        <Router>
          <div className="bg-white dark:bg-black">
            <Navbar />
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/certificates" element={<Certificates />} />
              <Route path="/skills" element={<Skills />} />
            </Routes>
            <Footer />
            <SpeedInsights />
          </div>
        </Router>
      )}
    </>
  );
}

export default App;
