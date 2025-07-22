import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Loader from './components/Loader';
import EnterScreen from './components/EnterScreen';
import Certificates from "./components/Certificates";
import Footer from './components/Footer';
import Skills from './components/Skills';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Helmet } from 'react-helmet-async';

function App() {
  const [started, setStarted] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [initialCheckDone, setInitialCheckDone] = useState(false);

useEffect(() => {
  const isBot = /bot|crawl|spider|slurp|bing/i.test(navigator.userAgent);
  const isHome = window.location.pathname === '/';
  const alreadyVisited = sessionStorage.getItem('alreadyVisited');

  if (isBot) {
    setStarted(true);
  } else if (isHome && !alreadyVisited) {
    setStarted(false);
  } else {
    setStarted(true);
  }
  setInitialCheckDone(true);
}, []);

  const handleStart = () => {
    sessionStorage.setItem('alreadyVisited', 'true');
    setStarted(true);
    setShowLoader(true);
  };

  if (!initialCheckDone) return null;

  return (
    <>
      {/* Global SEO Metadata */}
<Helmet>
  <title>Muntimadugu Rehan Haneef | AI/ML & Cloud Enthusiast</title>
  <meta
    name="description"
    content="Official portfolio of Muntimadugu Rehan Haneef, a passionate AI/ML and Cloud enthusiast skilled in Python, machine learning, and cloud technologies. Explore projects, skills, and achievements."
  />
  <link rel="canonical" href="https://RehanHaneef.netlify.app/" />

  <meta property="og:title" content="Muntimadugu Rehan Haneef | AI/ML & Cloud Enthusiast" />
  <meta
    property="og:description"
    content="Explore the portfolio of Rehan Haneef, a B.Tech student in AI & Data Science with experience in machine learning and cloud-based solutions."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://RehanHaneef.netlify.app/" />
  <meta property="og:image" content="https://RehanHaneef.netlify.app/RehanHaneef_profile.jpg" />
  <meta property="og:site_name" content="Rehan Haneef's Portfolio" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:creator" content="@RehanHaneef" />
  <meta name="twitter:title" content="Muntimadugu Rehan Haneef | AI/ML & Cloud Enthusiast" />
  <meta
    name="twitter:description"
    content="AI/ML & Cloud Enthusiast | B.Tech in AI & DS | Python Developer | Explore my journey and projects."
  />
  <meta name="twitter:image" content="https://RehanHaneef.netlify.app/RehanHaneef_profile.jpg" />

  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Muntimadugu Rehan Haneef",
        "url": "https://RehanHaneef.netlify.app/",
        "sameAs": [
          "https://github.com/rehanhaneef",
          "https://www.linkedin.com/in/rehanhaneef/",
          "https://leetcode.com/u/rehanhaneef/",
          "https://www.instagram.com/rehanhaneef_/"
        ],
        "jobTitle": "AI/ML & Cloud Enthusiast",
        "worksFor": {
          "@type": "EducationalOrganization",
          "name": "Koneru Lakshmaiah Education Foundation"
        },
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "Koneru Lakshmaiah Education Foundation"
        },
        "image": "https://RehanHaneef.netlify.app/RehanHaneef_profile.jpg",
        "description": "Muntimadugu Rehan Haneef is a B.Tech student in Artificial Intelligence & Data Science, passionate about AI/ML, cloud computing, and Python development. Skilled in building intelligent and scalable solutions."
      }
    `}
  </script>
</Helmet>


      {/* UI Flow */}
      {!started ? (
        <EnterScreen onEnter={handleStart} />
      ) : showLoader ? (
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
