// src/components/Hero.jsx
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiCodeforces } from "react-icons/si";
import { cn } from '../lib/utils';
import { Helmet } from 'react-helmet-async';

const Hero = () => {
  return (
    <>
      <Helmet>
        <title>Chaitanya Sai Meka | Full Stack Developer & AI Enthusiast</title>
        <meta name="description" content="Official portfolio of Chaitanya Sai Meka, a full stack developer skilled in React, Node.js, and passionate about AI/ML. Explore projects, skills, and experience." />
        <link rel="canonical" href="https://chaitanya-sai-meka.vercel.app/" />

        <meta property="og:title" content="Chaitanya Sai Meka | Full Stack Developer" />
        <meta property="og:description" content="Official portfolio of Chaitanya Sai Meka, a full stack developer skilled in React, Node.js, and passionate about AI/ML." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://chaitanya-sai-meka.vercel.app/" />
        <meta property="og:image" content="https://chaitanya-sai-meka.vercel.app/profile_pic.png" />
        <meta property="og:site_name" content="Chaitanya Sai Meka's Portfolio" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@IAMCHAITANYASAI" />
        <meta name="twitter:title" content="Chaitanya Sai Meka | Full Stack Developer" />
        <meta name="twitter:description" content="Official portfolio of Chaitanya Sai Meka, a full stack developer skilled in React, Node.js, and passionate about AI/ML." />
        <meta name="twitter:image" content="https://chaitanya-sai-meka.vercel.app/profile_pic.png" />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Chaitanya Sai Meka",
              "url": "https://chaitanya-sai-meka.vercel.app/",
              "sameAs": [
                "https://github.com/ChaitanyaSai-Meka",
                "https://www.instagram.com/chaitanyasai_meka/",
                "https://www.linkedin.com/in/chaitanya-sai-meka/",
                "https://leetcode.com/u/chaitanyasai_meka/",
                "https://codeforces.com/profile/Chaitanyasai_meka"
              ],
              "jobTitle": "Freelancer",
              "worksFor": {
                "@type": "Organization",
                "name": "Self-Employed"
              },
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "Newton School of Technology"
              },
              "image": "https://chaitanya-sai-meka.vercel.app/profile_pic.png",
              "description": "Chaitanya Sai Meka is a passionate full-stack developer specializing in React and modern web technologies, with expertise in AI and machine learning, based in Rajamahendravaram, Andhra Pradesh, India."
            }
          `}
        </script>
      </Helmet>

      <div className="relative flex min-h-[50rem] md:min-h-screen w-full items-center justify-center bg-black overflow-hidden px-4 py-16">
        {/* Dot Background */}
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:20px_20px]",
            "[background-image:radial-gradient(#404040_1px,transparent_1px)]"
          )}
        />

        {/* Radial Mask */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        {/* Content */}
        <div className="relative z-20 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent">
            Hi! Myself Chaitanya Sai Meka
          </h1>

          <h2 className="text-md md:text-xl lg:text-2xl text-neutral-300 mt-4">
            Dreams Coded into Reality with <span className="text-indigo-300 font-semibold typing-text">
              <Typewriter
                words={['Weaving Full-Stack Magic', 'Animating Digital Fantasies', 'Forging Unbreakable Backends', 'Sculpting Pixel-Perfect Frontends', 'Crafting Apps for Every Horizon', 'Breathing Life into 3D Worlds']}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={80}
                delaySpeed={1000}
              />
            </span>
          </h2>

          <div className="flex justify-center gap-4 mt-6 text-2xl">
            <a href="https://github.com/ChaitanyaSai-Meka" target="_blank" rel="noopener noreferrer" className="icon-circle hover:text-white transition">
              <FaGithub />
            </a>
            <a href="https://www.instagram.com/chaitanyasai_meka/" target="_blank" rel="noopener noreferrer" className="icon-circle hover:text-pink-600 transition">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/chaitanya-sai-meka/" target="_blank" rel="noopener noreferrer" className="icon-circle hover:text-blue-600 transition">
              <FaLinkedin />
            </a>
            <a href="https://leetcode.com/u/chaitanyasai_meka/" target="_blank" rel="noopener noreferrer" className="icon-circle hover:text-yellow-500 transition">
              <SiLeetcode />
            </a>
            <a href="https://codeforces.com/profile/Chaitanyasai_meka" target="_blank" rel="noopener noreferrer" className="icon-circle hover:text-blue-400 transition">
              <SiCodeforces />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;