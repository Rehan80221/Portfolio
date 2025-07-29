import React, { useRef, useEffect, useState, useMemo, useCallback } from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaInstagram, FaLinkedin, FaExternalLinkAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import { motion, AnimatePresence, useInView, useScroll, useTransform } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { cn } from "../lib/utils";
import { DrawLineText } from "./ui/draw_line_text";
import SplineScene from "./SplineScene";
import ProjectImage from "./utils/ProjectImage";
import { Link } from "react-router-dom";
import Lenis from 'lenis';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Memoized components for better performance
const MemoizedSplineScene = React.memo(SplineScene);
const MemoizedProjectImage = React.memo(ProjectImage);

const Hero = () => {
  const containerRef = useRef(null);
  const scrollLineRef = useRef(null);
  const [currentProject, setCurrentProject] = useState(0);
  const skillsRef = useRef(null);
  
  // Enhanced scroll tracking with Framer Motion
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  
  // Match About component's useInView settings
  const isInView = useInView(skillsRef, { 
    once: true,
    amount: 0.2
  });

  // Memoized projects array
  const projects = useMemo(() => [
    {
      title: "Serverless Data Analytics Pipeline",
      description: "Real-time data analytics pipeline using AWS Lambda, Kinesis, S3, and DynamoDB with React dashboard for live metrics visualization.",
      link: "https://github.com/Rehan80221/Serverless_Data_Analytics_Pipeline-using-AWS.git",
      image: "/serverlesspipe.png",
      blurhash: "L02$Hd9Z00~pneofp0WB00?a~V01",
      tech: ["AWS", "React", "Lambda", "Kinesis", "DynamoDB"]
    },
    {
      title: "Online Examination Portal",
      description: "Full-stack examination system with secure authentication, session handling, and role-based access control for admins, teachers, and students.",
      link: "https://github.com/Rehan80221/online-exam-portal",
      image: "/online.png",
      blurhash: "LACZ35PqnOi_T0X9a|WA00+FIpkW",
      tech: ["Python", "Django", "SQL", "Authentication"]
    },
    {
      title: "Moodify - Emotion-Based Music Recommender",
      description: "AI-driven music recommendation system using facial emotion recognition with OpenCV and ML models for personalized playlist curation.",
      link: "https://github.com/Rehan80221/moodify-music-recommender",
      image: "/moodify.png",
      blurhash: "L13l5O9F4n%MD%t7t7Rj00t7_3IU",
      tech: ["AI/ML", "OpenCV", "Python", "Computer Vision"]
    },
    {
      title: "Mood Mart - E-commerce Platform",
      description: "Modern e-commerce platform with intuitive UI/UX, product management, and secure payment integration for seamless shopping experience.",
      link: "https://github.com/Rehan80221/mood-mart",
      image: "/moodmart.png",
      blurhash: "L2QT1Z3C~Xtm00%EV[R.00erD}fP",
      tech: ["React", "Node.js"]
    },
    {
      title: "TicTacToe Game (Java GUI)",
      description: "Classic TicTacToe game implemented in Java with an interactive GUI interface, featuring clean design and smooth gameplay mechanics.",
      link: "https://github.com/Rehan80221/tictactoe-java",
      image: "/tictac.png",
      blurhash: "LhLz?TRk~qoe-=azM{ay?cs.MxbH",
      tech: ["Java", "Swing/AWT", "GUI", "Game Development"]
    }
  ], []);

  const scrollToProject = useCallback((index) => {
    setCurrentProject(index);
  }, []);

  // Auto-scroll projects
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [projects.length]);

  // Enhanced scroll setup with improved performance and styling
  useEffect(() => {
    // Enhanced Lenis smooth scrolling setup
    const lenis = new Lenis({
      duration: 2.8, // Optimized duration for better performance
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing
      smooth: true,
      smoothTouch: false, // Disable on mobile for better performance
    });

    // Smooth scroll animation frame
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    // GSAP ScrollTrigger for enhanced progress line
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(scrollLineRef.current, {
      width: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 1, // Smooth scrubbing
      },
    });

    // Set CSS smooth scroll behavior as fallback
    document.documentElement.style.scrollBehavior = 'smooth';

    // Cleanup function
    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <>
      {/* Enhanced Progress Line with Gradient and Glow */}
      <motion.div
        ref={scrollLineRef}
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 z-50 shadow-lg"
        style={{
          width: '0%',
          boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)',
          filter: 'drop-shadow(0 0 8px rgba(139, 92, 246, 0.3))'
        }}
      />

      {/* Hero Section with Enhanced Parallax */}
      <motion.div 
        className="relative flex flex-col items-center justify-center min-h-screen w-full overflow-hidden px-4 py-16 bg-black"
        style={{ y }}
      >
        {/* Background pattern - same as About component */}
        <div
          className={cn(
            "absolute inset-0 z-0",
            "[background-size:20px_20px]",
            "[background-image:radial-gradient(#404040_1px,transparent_1px)]"
          )}
        />

        {/* Spline 3D */}
        <div className="absolute inset-0 z-10 w-full h-full">
          <MemoizedSplineScene />
        </div>

        {/* Radial Overlay - same as About component */}
        <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

        {/* Content */}
        <div className="relative z-30 w-full max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex justify-center items-center gap-3 flex-wrap">
              <span
                className="font-bold tracking-tight bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent text-3xl sm:text-5xl md:text-6xl lg:text-[71px]"
                style={{ lineHeight: 1 }}
              >
                Hi! Myself
              </span>
              
              <div className="w-full sm:w-auto">
                <DrawLineText
                  fontSize={{
                    base: 24,
                    sm: 32,
                    md: 50,
                    lg: 70,
                  }}
                  strokeWidth={1.5}
                  text="Muntimadugu Rehan Haneef"
                  color="url(#gradient)"
                  className="break-words"
                />
              </div>
            </div>

            <svg width="0" height="0">
              <defs>
                <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                  <stop stopColor="#e5e5e5" offset="0%" />
                  <stop stopColor="#737373" offset="100%" />
                </linearGradient>
              </defs>
            </svg>

            <h2 className="text-sm sm:text-md md:text-xl lg:text-2xl text-neutral-300 mt-4 px-2">
              Dreams Coded into Reality with{" "}
              <span className="text-indigo-300 font-semibold typing-text">
                <Typewriter
                  words={[
                    "AI-Powered Innovation",
                    "Machine Learning Solutions",
                    "Cloud Architecture",
                    "Data Science Analytics",
                    "Computer Vision Systems",
                    "Full-Stack Development",
                    "Serverless Applications",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={100}
                  deleteSpeed={80}
                  delaySpeed={1500}
                />
              </span>
            </h2>

           {/* Glass Buttons */}
<div className="mt-8 flex flex-wrap justify-center gap-4">
  <motion.a
    href="/Rehan_resume.pdf"
    download
    whileHover={{ scale: 1.05, y: -2 }}
    whileTap={{ scale: 0.95 }}
    className="glass-button px-6 py-3 rounded-xl text-white text-sm sm:text-base font-semibold transition-all duration-300"
    style={{
      background: 'rgba(255, 255, 255, 0.15)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
    }}
  >
    Download CV
  </motion.a>
  
  <Link
    to="/about"
    className="glass-button px-6 py-3 rounded-xl text-white text-sm sm:text-base font-semibold transition-all duration-300"
    style={{
      background: 'rgba(255, 255, 255, 0.15)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
    }}
    whileHover={{ scale: 1.05, y: -2 }}
    whileTap={{ scale: 0.95 }}
    component={motion.div}
  >
    About Me
  </Link>
</div>


            {/* Social Icons */}
            <div className="flex justify-center gap-6 mt-8 text-2xl text-white flex-wrap">
              <motion.a
                href="https://github.com/Rehan80221"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="icon-circle hover:text-white transition-all duration-300"
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/rehan_haneef212/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                className="icon-circle hover:text-pink-600 transition-all duration-300"
              >
                <FaInstagram />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/rehan-haneef"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="icon-circle hover:text-blue-600 transition-all duration-300"
              >
                <FaLinkedin />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-white/40 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </motion.div>

{/* Enhanced Summary + Skills Section */}
<div ref={skillsRef} className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 py-20 relative overflow-hidden">
  {/* Simplified Background Particles */}
  <div className="absolute inset-0 overflow-hidden opacity-50">
    <div className="absolute top-20 left-10 w-2 h-2 bg-indigo-400/30 rounded-full animate-pulse" />
    <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400/20 rounded-full animate-pulse delay-1000" />
    <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-emerald-400/30 rounded-full animate-pulse delay-500" />
    <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-blue-400/20 rounded-full animate-pulse delay-700" />
  </div>

  {/* Header Section */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="text-center mb-16 max-w-4xl relative z-10"
  >
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-indigo-300 to-purple-300 bg-clip-text text-transparent">
      AI/ML & Cloud Enthusiast
    </h1>
    
  </motion.div>

  <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10">
    {/* About/Background Card */}
    <motion.div
      initial={{ opacity: 0, x: -30, scale: 0.95 }}
      animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -30, scale: 0.95 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/8 hover:border-white/20 transition-all duration-500 group cursor-pointer row-span-2"
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))',
        boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)'
      }}
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl flex items-center justify-center border border-indigo-400/30 group-hover:scale-110 transition-transform duration-300">
          <span className="text-2xl">🎓</span>
        </div>
        <h2 className="text-2xl font-bold text-white group-hover:text-indigo-200 transition-colors">
          About Me
        </h2>
      </div>
      <p className="text-gray-300 leading-relaxed text-base group-hover:text-gray-200 mb-8">
       <p >
      Proactive, results-driven Data Science student skilled in <strong>machine learning</strong>, <strong>deep learning</strong>,
      and <strong>cloud platforms</strong> (<strong>AWS</strong>, <strong>GCP</strong>). Experienced in building scalable AI solutions, data
      analytics pipelines, and full-stack apps. <strong>Certified in AI and cloud technologies</strong> from Salesforce,
      Google. Adept in <strong>Python</strong> and <strong>SQL</strong>, with a drive for impactful, data-driven
      innovation in ML engineering and applied AI.
    </p>
    
        <strong>B.Tech in Artificial Intelligence & Data Science<br/>
        KLEF, India | CGPA: 9.18/10 (Expected May 2026)</strong>
      </p>
      <div className="flex flex-wrap gap-4 mb-4">
        <span className="px-3 py-1 bg-blue-500/10 text-blue-300 rounded-full text-xs border border-blue-400/30">AWS, GCP, Tableau, Git</span>
        <span className="px-3 py-1 bg-green-500/10 text-green-300 rounded-full text-xs border border-green-400/30">Certified: Salesforce, Google</span>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="text-center p-4 bg-indigo-500/10 rounded-xl border border-indigo-500/20 backdrop-blur-sm">
          <div className="text-2xl font-bold text-indigo-300">9.18</div>
          <div className="text-sm text-gray-400">CGPA</div>
        </div>
        <div className="text-center p-4 bg-green-500/10 rounded-xl border border-green-500/20 backdrop-blur-sm">
          <div className="text-2xl font-bold text-green-300">2026</div>
          <div className="text-sm text-gray-400">Graduation</div>
        </div>
      </div>
    </motion.div>

    {/* Right Column: 2x2 Skills Grid */}
    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* AI & Data Science - Enhanced Hover Effects */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/8 hover:border-emerald-400/40 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 group cursor-pointer relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgba(52, 211, 153, 0.08), rgba(52, 211, 153, 0.02))',
          boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(52,211,153,0.1)'
        }}
        whileHover={{ 
          y: -8, 
          transition: { duration: 0.3 },
        }}
      >
        {/* Hover Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
        
        <div className="flex items-center gap-3 mb-4 relative z-10">
          <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center border border-emerald-400/30 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
            <span className="text-xl">🤖</span>
          </div>
          <h3 className="text-lg font-bold text-white group-hover:text-emerald-200 transition-colors">
            AI & Data Science
          </h3>
        </div>
        <div className="flex flex-wrap gap-2 relative z-10">
          {[
            "Machine Learning", "Deep Learning", "Computer Vision", "Data Analysis", "Predictive Modeling",
            "Natural Language Processing", "Scikit-Learn", "TensorFlow", "PyTorch", "OpenCV", "Pandas", "NumPy"
          ].map((skill, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.6 + (idx * 0.05) }}
              className="px-3 py-1.5 bg-emerald-500/10 text-emerald-300 text-xs rounded-full border border-emerald-500/20 hover:bg-emerald-500/20 hover:border-emerald-400/40 hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.1, y: -2 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Programming Languages - Enhanced Hover Effects */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/8 hover:border-purple-400/40 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 group cursor-pointer relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgba(168,85,247,0.08), rgba(168,85,247,0.02))',
          boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(168,85,247,0.1)'
        }}
        whileHover={{ 
          y: -8, 
          transition: { duration: 0.3 },
        }}
      >
        {/* Hover Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
        
        <div className="flex items-center gap-3 mb-4 relative z-10">
          <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center border border-purple-400/30 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
            <span className="text-xl">💻</span>
          </div>
          <h3 className="text-lg font-bold text-white group-hover:text-purple-200 transition-colors">
            Programming
          </h3>
        </div>
        <div className="flex flex-wrap gap-2 relative z-10">
          {[
            "Python", "Java", "C", "SQL", "R", "Node.js", "React", "Django"
          ].map((skill, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.8 + (idx * 0.05) }}
              className="px-3 py-1.5 bg-purple-500/10 text-purple-300 text-xs rounded-full border border-purple-500/20 hover:bg-purple-500/20 hover:border-purple-400/40 hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.1, y: -2 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Tools & Platforms - Enhanced Hover Effects */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/8 hover:border-blue-400/40 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 group cursor-pointer relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgba(59,130,246,0.08), rgba(59,130,246,0.02))',
          boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(59,130,246,0.1)'
        }}
        whileHover={{ 
          y: -8, 
          transition: { duration: 0.3 },
        }}
      >
        {/* Hover Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
        
        <div className="flex items-center gap-3 mb-4 relative z-10">
          <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center border border-blue-400/30 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
            <span className="text-xl">☁️</span>
          </div>
          <h3 className="text-lg font-bold text-white group-hover:text-blue-200 transition-colors">
            Tools & Platforms
          </h3>
        </div>
        <div className="flex flex-wrap gap-2 relative z-10">
          {[
            "AWS", "GCP", "Tableau", "Git"
          ].map((skill, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 1.0 + (idx * 0.05) }}
              className="px-3 py-1.5 bg-blue-500/10 text-blue-300 text-xs rounded-full border border-blue-500/20 hover:bg-blue-500/20 hover:border-blue-400/40 hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.1, y: -2 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Full-Stack Development - Enhanced Hover Effects */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/8 hover:border-amber-400/40 hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 group cursor-pointer relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgba(245,158,11,0.08), rgba(245,158,11,0.02))',
          boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(245,158,11,0.1)'
        }}
        whileHover={{ 
          y: -8, 
          transition: { duration: 0.3 },
        }}
      >
        {/* Hover Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
        
        <div className="flex items-center gap-3 mb-4 relative z-10">
          <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center border border-amber-400/30 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
            <span className="text-xl">🚀</span>
          </div>
          <h3 className="text-lg font-bold text-white group-hover:text-amber-200 transition-colors">
            Full-Stack Development
          </h3>
        </div>
        <div className="flex flex-wrap gap-2 relative z-10">
          {[
            "Node.js", "React", "Python", "Java", "Django", "SQL"
          ].map((skill, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 1.2 + (idx * 0.05) }}
              className="px-3 py-1.5 bg-amber-500/10 text-amber-300 text-xs rounded-full border border-amber-500/20 hover:bg-amber-500/20 hover:border-amber-400/40 hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.1, y: -2 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  </div>

  {/* Glass Surface CTA Button */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
    transition={{ delay: 1.4, duration: 0.6 }}
    className="mt-16 relative z-10"
  >
    <Link to="/about">
      <motion.button
        whileHover={{
          scale: 1.05,
          y: -2,
          transition: { duration: 0.3 }
        }}
        whileTap={{ scale: 0.95 }}
        className="px-6 py-3 md:px-8 md:py-4 text-white font-semibold rounded-xl transition-all duration-300 flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-black relative overflow-hidden"
        style={{
          background: 'rgba(255, 255, 255, 0.15)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
        }}
      >
        {/* Glass Surface Hover Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-indigo-300/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
        
        <span className="relative z-10">More about me</span>
        <motion.span 
          className="group-hover:translate-x-1 transition-transform duration-300 relative z-10"
          initial={{ x: 0 }}
          whileHover={{ x: 4 }}
        >
          →
        </motion.span>
      </motion.button>
    </Link>
  </motion.div>
</div>


      {/* Projects Section */}
      <div className="relative flex flex-col items-center justify-center w-full py-20 px-4 bg-black">
        {/* Background pattern - same as About component */}
        <div
          className={cn(
            "absolute inset-0 z-0",
            "[background-size:20px_20px]",
            "[background-image:radial-gradient(#404040_1px,transparent_1px)]"
          )}
        />

        {/* Radial Mask Overlay - same as About component */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

        {/* Section Title */}
        <div className="relative z-10 mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent">
            Featured Projects 🚀
          </h2>
          <p className="mt-4 text-neutral-400 text-sm md:text-base max-w-xl mx-auto">
            From AI-powered solutions to full-stack applications — here's my journey in code.
          </p>
        </div>

        {/* Project Cards */}
        <div className="relative z-10 flex justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <CardContainer className="inter-var">
                <CardBody className="bg-black relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-white"
                  >
                    {projects[currentProject].title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-300 text-sm max-w-sm mt-2 mb-3"
                  >
                    {projects[currentProject].description}
                  </CardItem>
                  
                  <CardItem translateZ="40" className="flex flex-wrap gap-2 mb-4">
                    {projects[currentProject].tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-neutral-800/50 text-neutral-400 text-xs rounded-md border border-neutral-700/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </CardItem>

                  <CardItem translateZ="100" className="w-full mt-4">
                    <MemoizedProjectImage
                      image={projects[currentProject].image}
                      blurhash={projects[currentProject].blurhash}
                      alt={projects[currentProject].title}
                    />
                  </CardItem>
                  <div className="flex justify-end items-center mt-6">
                    {projects[currentProject].link ? (
                      <CardItem
                        translateZ={20}
                        as="a"
                        href={projects[currentProject].link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold hover:bg-neutral-200 transition-colors"
                      >
                        View Project →
                      </CardItem>
                    ) : (
                      <CardItem
                        translateZ={20}
                        className="px-4 py-2 rounded-xl bg-neutral-700 text-neutral-400 text-xs font-bold cursor-not-allowed"
                      >
                        Coming Soon
                      </CardItem>
                    )}
                  </div>
                </CardBody>
              </CardContainer>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div className="relative z-10 flex justify-center mt-8 space-x-3">
          {projects.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => scrollToProject(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentProject
                  ? "bg-indigo-500 scale-125"
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>

        {/* Projects Button */}
        <div className="relative z-10 mt-12">
          <Link 
            to="/projects"
            className="group cursor-pointer relative inline-block"
          >
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(99,102,241,0.6)_0%,rgba(99,102,241,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </span>
            <motion.div 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="relative flex space-x-2 items-center z-10 rounded-full py-3 px-8 ring-1 ring-white/10 text-white font-semibold transition-all duration-300"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
              }}
            >
              <span>View All Projects</span>
              <FaGithub className="h-5 w-5 text-white" />
            </motion.div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-indigo-400/0 via-indigo-400/90 to-indigo-400/0 transition-opacity duration-500 group-hover:opacity-40" />
          </Link>
        </div>
      </div>

      {/* Contact Section */}
      <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-indigo-900 flex items-center justify-center px-4 py-16 overflow-hidden">
        {/* Simplified floating elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-32 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-500" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-6xl mx-auto relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Let's <span className="text-indigo-400">Connect</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Ready to bring innovative AI solutions to life? Let's collaborate and create something extraordinary together.
            </p>
          </motion.div>

          {/* Contact cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
            {[
              { icon: FaEnvelope, title: "Email", content: "2200080221aids@gmail.com", color: "indigo" },
              { icon: FaPhone, title: "Phone", content: "+91 8121463751", color: "green" },
              { icon: FaLinkedin, title: "LinkedIn", content: "Connect professionally", color: "blue", href: "https://www.linkedin.com/in/rehan-haneef" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.3 + (index * 0.1), duration: 0.6, type: "spring", stiffness: 100 }}
                whileHover={{ 
                  y: -20, 
                  scale: 1.05,
                  rotateY: index % 2 === 0 ? 5 : -5,
                  transition: { duration: 0.3 }
                }}
                viewport={{ once: true }}
                className="group relative"
              >
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="block">
                    <ContactCard item={item} />
                  </a>
                ) : (
                  <ContactCard item={item} />
                )}
              </motion.div>
            ))}
          </div>

          {/* Main Contact Button */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center mb-16"
          >
            <Link to="/contact">
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  boxShadow: "0 25px 50px rgba(99, 102, 241, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center gap-4 px-12 py-6 rounded-2xl text-white text-xl font-bold transition-all duration-300 overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.6), rgba(168, 85, 247, 0.6))',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(25px)',
                  WebkitBackdropFilter: 'blur(25px)',
                  boxShadow: '0 15px 35px rgba(99, 102, 241, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaEnvelope className="text-2xl relative z-10" />
                </motion.div>
                <span className="relative z-10">Contact Me</span>
                <motion.span 
                  className="group-hover:translate-x-1 transition-transform duration-300 relative z-10"
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                >
                  →
                </motion.span>
                
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </motion.button>
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <div 
              className="inline-flex items-center gap-4 px-6 py-4 rounded-full"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(25px)',
                WebkitBackdropFilter: 'blur(25px)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
              }}
            >
              {[
                { icon: FaGithub, href: "https://github.com/Rehan80221", color: "text-gray-400 hover:text-white" },
                { icon: FaLinkedin, href: "https://www.linkedin.com/in/rehan-haneef", color: "text-blue-400 hover:text-blue-300" },
                { icon: FaInstagram, href: "https://www.instagram.com/rehan_haneef212/", color: "text-pink-400 hover:text-pink-300" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${social.color}`}
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <social.icon className="text-xl" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Custom Scrollbar and Global Styles */}
      <style jsx global>{`
        .glass-button:hover {
          background: rgba(255, 255, 255, 0.25) !important;
          box-shadow: 0 12px 48px 0 rgba(31, 38, 135, 0.47) !important;
        }
        
        /* Enhanced smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom scrollbar styling */
        ::-webkit-scrollbar {
          width: 12px;
        }
        
        ::-webkit-scrollbar-track {
          background: #0a0a0a;
          border-radius: 6px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #6366f1, #8b5cf6, #ec4899);
          border-radius: 6px;
          border: 2px solid #0a0a0a;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #5b56f0, #7c3aed, #db2777);
        }
        
        /* Firefox scrollbar */
        * {
          scrollbar-width: thin;
          scrollbar-color: #6366f1 #0a0a0a;
        }
        
        /* Reduce motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
        
        /* Smooth scroll container */
        .scroll-container {
          position: relative;
          overflow-x: hidden;
        }
      `}</style>
    </>
  );
};

// Helper component for contact cards
const ContactCard = React.memo(({ item }) => (
  <div 
    className="relative p-8 rounded-3xl cursor-pointer transition-all duration-500 group-hover:shadow-2xl"
    style={{
      background: 'rgba(255, 255, 255, 0.08)',
      border: '1px solid rgba(255, 255, 255, 0.15)',
      backdropFilter: 'blur(25px)',
      WebkitBackdropFilter: 'blur(25px)',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
    }}
  >
    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br from-${item.color}-500/20 to-${item.color}-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />
    
    <div className="relative z-10">
      <motion.div
        whileHover={{ scale: 1.2, rotate: item.color === 'green' ? -10 : 10 }}
        transition={{ duration: 0.3 }}
        className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-${item.color}-500/30 to-${item.color}-600/30 rounded-2xl flex items-center justify-center border border-${item.color}-400/30`}
      >
        <item.icon className={`text-2xl text-${item.color}-400 group-hover:text-${item.color}-300 transition-colors`} />
      </motion.div>
      <h3 className={`text-white font-bold mb-3 text-xl group-hover:text-${item.color}-100 transition-colors`}>{item.title}</h3>
      <p className="text-gray-300 group-hover:text-gray-200 transition-colors text-sm leading-relaxed">
        {item.content}
      </p>
      
      <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br from-${item.color}-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
    </div>
  </div>
));

export default Hero;
