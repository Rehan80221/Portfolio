import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { cn } from "../lib/utils"; 
import { FaGithub } from 'react-icons/fa';
import Lenis from 'lenis';
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ProjectImage from "./utils/ProjectImage";

const projects = [
  {
    title: "Serverless Data Analytics Pipeline",
    description:
      "Real-time data analytics pipeline using AWS Lambda, Kinesis, S3, and DynamoDB with React dashboard for live metrics visualization.",
    link: "https://github.com/Rehan80221/Serverless_Data_Analytics_Pipeline-using-AWS.git",
    image: "/serverlesspipe.png",
    blurhash:"L02$Hd9Z00~pneofp0WB00?a~V01",
    tech: ["AWS", "React", "Lambda", "Kinesis", "DynamoDB"]
  },
  {
    title: "Online Examination Portal",
    description:
      "Full-stack examination system with secure authentication, session handling, and role-based access control for admins, teachers, and students.",
    link: "https://github.com/Rehan80221/online-exam-portal",
    image: "/online.png",
    blurhash:"LACZ35PqnOi_T0X9a|WA00+FIpkW",
    tech: ["Python", "Django", "SQL", "Authentication"]
  },
  {
    title: "Moodify - Emotion-Based Music Recommender",
    description:
      "AI-driven music recommendation system using facial emotion recognition with OpenCV and ML models for personalized playlist curation.",
    link: "https://github.com/Rehan80221/moodify-music-recommender",
    image: "/moodify.png",
    blurhash:"L13l5O9F4n%MD%t7t7Rj00t7_3IU",
    tech: ["AI/ML", "OpenCV", "Python", "Computer Vision"]
  },
  {
    title: "Mood Mart - E-commerce Platform",
    description:
      "Modern e-commerce platform with intuitive UI/UX, product management, and secure payment integration for seamless shopping experience.",
    link: "https://github.com/Rehan80221/mood-mart",
    image: "/moodmart.png",
    blurhash:"L2QT1Z3C~Xtm00%EV[R.00erD}fP",
    tech: ["React", "Node.js"]
  },
  {
    title: "TicTacToe Game (Java GUI)",
    description:
      "Classic TicTacToe game implemented in Java with an interactive GUI interface, featuring clean design and smooth gameplay mechanics.",
    link: "https://github.com/Rehan80221/tictactoe-java",
    image: "/tictac.png",
    blurhash:"LhLz?TRk~qoe-=azM{ay?cs.MxbH",
    tech: ["Java", "Swing/AWT", "GUI", "Game Development"]
  },
  {
    title: "Coming Soon",
    description:
      "Next innovative project in development. Stay tuned for something amazing!",
    link: "",
    image: "/black_page.jpg",
    blurhash:"L00SvEayWAfQozfQayfQayfQf8fQ",
    tech: ["Coming Soon"]
  },
];

const Projects = () => {
  const scrollLineRef = useRef(null);

  useEffect(() => {
    // Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 3.2, // Scroll animation duration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
      smooth: true, // Enable smooth scrolling
    });

    // Scroll to top when component mounts
    lenis.scrollTo(0, { immediate:0 });

    // frame loop for Lenis
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

  // Fallback scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center w-full py-20 px-4 bg-black">
      
      <div
        ref={scrollLineRef}
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-b from-neutral-200 to-neutral-500 w-0 z-50"
      ></div>

      {/* Dot Background Layer */}
      <div
        className={cn(
          "absolute inset-0 z-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />

      {/* Radial Mask Overlay */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* Section Title */}
      <div className="relative z-10 mb-12 text-center">
        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent">
          Things I've been building 🚀
        </h2>
        <p className="mt-4 text-neutral-400 text-sm md:text-base max-w-xl mx-auto">
          From AI-powered solutions to full-stack applications — here's my journey in code.
        </p>
      </div>

      {/* Project Cards */}
      <div className="relative z-10 flex flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
          <CardContainer key={index} className="inter-var">
            <CardBody className="bg-black relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-white"
              >
                {project.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-300 text-sm max-w-sm mt-2 mb-3"
              >
                {project.description}
              </CardItem>
              
              {/* Tech Stack Tags */}
              <CardItem translateZ="40" className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-neutral-800/50 text-neutral-400 text-xs rounded-md border border-neutral-700/30"
                  >
                    {tech}
                  </span>
                ))}
              </CardItem>

              <CardItem translateZ="100" className="w-full mt-4">
                <ProjectImage
                  image={project.image}
                  blurhash={project.blurhash}
                  alt={project.title}
                />
              </CardItem>
              <div className="flex justify-end items-center mt-6">
                {project.link ? (
                  <CardItem
                    translateZ={20}
                    as="a"
                    href={project.link}
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
        ))}
      </div>
      
      <div className="mt-12">
        <a 
          href="https://github.com/Rehan80221"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-base font-semibold leading-6 text-white inline-block">
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </span>
          <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-2 px-7 ring-1 ring-white/10 ">
            <span>
              View More on GitHub
            </span>
            <FaGithub className="h-6 w-6 text-white" />
          </div>
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
        </a>
      </div>
    </div>
  );
};

export default Projects;
