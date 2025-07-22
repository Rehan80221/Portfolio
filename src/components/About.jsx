import React from 'react';
import { cn } from "../lib/utils";
import BlurImage from './utils/BlurImage';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from 'lenis';
import { useEffect,useRef } from "react";
const About = () => {
   const scrollLineRef = useRef(null);

  useEffect(() => {
    // Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 3.2, // Scroll animation duration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
      smooth: true, // Enable smooth scrolling
    });

    // frame loop for Lenis boommm
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    gsap.registerPlugin(ScrollTrigger);
    gsap.to(scrollLineRef.current, {
      width: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    // Cleanup on component unmount
    return () => {
      lenis.destroy();
    };
  }, []);

  // Custom SVG Icons
  const GraduationCapIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
    </svg>
  );

  const CalendarIcon = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
    </svg>
  );

  const MapPinIcon = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
    </svg>
  );

  const AwardIcon = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M5 16L3 5l5.5 2L12 4l3.5 3L21 5l-2 11H5zm2.7-2h8.6l.9-5.4-2.1-.8L12 9l-3.1-1.2-2.1.8L7.7 14z"/>
    </svg>
  );

  const educationData = [
    {
      institution: "Koneru Lakshmaiah Education Foundation",
      degree: "B.Tech in Artificial Intelligence & Data Science",
      location: "Guntur, Andhra Pradesh",
      duration: "2022 - 2026",
      cgpa: "9.18/10",
      status: "Expected Graduation: May 2026",
      type: "university"
    },
    {
      institution: "Sri Chaitanya Co-ed College",
      degree: "Intermediate (MPC)",
      location: "Vijayawada, Andhra Pradesh",
      duration: "2020 - 2022",
      cgpa: null,
      status: "Completed: April 2022",
      type: "college"
    },
    {
      institution: "Ravindra Bharathi (EM) School",
      degree: "Secondary School Certificate (SSC)",
      location: "Mangalgiri, Andhra Pradesh",
      duration: "2019 - 2020",
      cgpa: null,
      status: "Completed: April 2020",
      type: "school"
    }
  ];

  return (
    <section className="about-container relative flex min-h-[50rem] md:min-h-screen w-full items-center justify-center bg-black text-center py-20 px-4">
      
      {/* Background pattern */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />
      {/* Faded radial gradient overlay */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl w-full flex flex-col items-center gap-16">
        
        {/* Profile Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          {/* Profile Image */}
          <div className="w-64 h-64 rounded-full overflow-hidden flex-shrink-0 border-4 border-neutral-800 shadow-2xl">
            <BlurImage
              src="/RehanHaneef_profile.jpg"
              blurhash="LAB._mEN5SkC-TNdofWX0hay}=WC"
              alt="Profile"
              className="w-full h-full"
            />
          </div>

                   {/* Text Content */}
          <div className="text-left text-neutral-300 max-w-2xl ml-8 md:ml-16">
            <h1 className="text-4xl sm:text-7xl font-bold bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent py-8">
              About Me.
            </h1>
            <p className="text-lg leading-relaxed mb-4">
              I'm Muntimadugu Rehan Haneef, a passionate AI/ML and Cloud enthusiast currently pursuing my B.Tech in Artificial Intelligence & Data Science at KL University. I thrive on transforming complex problems into elegant solutions through innovative technology and strategic thinking.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              My technical expertise spans multiple domains including full-stack development with Python and Django, machine learning and data analytics, and cloud computing with AWS and Google Cloud Platform. I have hands-on experience in building scalable applications, implementing AI-driven solutions, and optimizing system performance.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              I've successfully delivered projects ranging from secure web applications with role-based authentication to real-time data processing pipelines and intelligent recommendation systems. My approach combines technical proficiency with user-centric design, ensuring solutions are both robust and accessible.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Beyond academics, I actively contribute to open-source projects, stay updated with emerging technologies, and engage in collaborative learning through hackathons and tech communities. I believe in the power of continuous learning and knowledge sharing.
            </p>
            <p className="text-lg leading-relaxed">
              I'm always excited to take on new challenges and contribute meaningfully to teams that value <strong>innovation</strong>, <strong>collaboration</strong>, and <strong>excellence</strong>. I bring a unique blend of technical skills, problem-solving mindset, and adaptability to every project I work on.
            </p>
          </div>
        </div>

        {/* Education Section */}
        <div className="w-full max-w-6xl">
          <h2 className="text-3xl sm:text-5xl font-bold bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent text-center mb-12">
            Education Journey
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 backdrop-blur-sm border border-neutral-700/50 p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-400/30"
              >
                {/* Glassy overlay effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Icon */}
                <div className="relative z-10 flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                  <div className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                    <GraduationCapIcon />
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-neutral-200 mb-2 group-hover:text-white transition-colors duration-300">
                    {edu.institution}
                  </h3>
                  
                  <p className="text-sm font-medium text-blue-400 mb-3 group-hover:text-blue-300 transition-colors duration-300">
                    {edu.degree}
                  </p>
                  
                  <div className="space-y-2 text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300">
                    <div className="flex items-center gap-2">
                      <div className="text-neutral-500">
                        <MapPinIcon />
                      </div>
                      <span>{edu.location}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <div className="text-neutral-500">
                        <CalendarIcon />
                      </div>
                      <span>{edu.duration}</span>
                    </div>
                    
                    {edu.cgpa && (
                      <div className="flex items-center gap-2">
                        <div className="text-yellow-500">
                          <AwardIcon />
                        </div>
                        <span className="text-yellow-400 font-medium">CGPA: {edu.cgpa}</span>
                      </div>
                    )}
                    
                    <div className="mt-3 pt-3 border-t border-neutral-700/50 group-hover:border-neutral-600/50 transition-colors duration-300">
                      <span className="text-xs font-medium text-neutral-500 group-hover:text-neutral-400 transition-colors duration-300">
                        {edu.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Subtle glow effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;