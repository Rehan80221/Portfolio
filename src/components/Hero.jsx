import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiCodeforces } from "react-icons/si";
import { cn } from '../lib/utils';
import { Helmet } from 'react-helmet-async'; // <--- Import Helmet here

const Hero = () => {
  return (
    <> {/* Use a React Fragment as the root */}
      <Helmet>
        {/*
          *** CRITICAL SEO METADATA FOR CHAITANYA SAI MEKA ***
          These tags will dynamically update the <head> section of your HTML for the homepage.
        */}
        <title>Chaitanya Sai Meka | Full Stack Developer & AI Enthusiast</title>
        <meta name="description" content="Official portfolio of Chaitanya Sai Meka, a full stack developer skilled in React, Node.js, and passionate about AI/ML. Explore projects, skills, and experience." />
        <link rel="canonical" href="https://chaitanya-sai-meka.vercel.app/" />

        {/* Open Graph Meta Tags (for social media sharing, e.g., Facebook, LinkedIn) */}
        <meta property="og:title" content="Chaitanya Sai Meka | Full Stack Developer" />
        <meta property="og:description" content="Official portfolio of Chaitanya Sai Meka, a full stack developer skilled in React, Node.js, and passionate about AI/ML." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://chaitanya-sai-meka.vercel.app/" />
        {/* IMPORTANT: Replace with the actual public URL to your profile picture (e.g., in your 'public' folder) */}
        <meta property="og:image" content="https://chaitanya-sai-meka.vercel.app/profile-pic.jpg" />
        <meta property="og:site_name" content="Chaitanya Sai Meka's Portfolio" />

        {/* Twitter Card Meta Tags (for Twitter/X sharing) */}
        <meta name="twitter:card" content="summary_large_image" />
        {/* IMPORTANT: Replace with your actual Twitter handle if you have one */}
        <meta name="twitter:creator" content="@yourtwitterhandle" />
        <meta name="twitter:title" content="Chaitanya Sai Meka | Full Stack Developer" />
        <meta name="twitter:description" content="Official portfolio of Chaitanya Sai Meka, a full stack developer skilled in React, Node.js, and passionate about AI/ML." />
        {/* IMPORTANT: Replace with the actual public URL to your profile picture */}
        <meta name="twitter:image" content="https://chaitanya-sai-meka.vercel.app/profile-pic.jpg" />

        {/*
          *** SCHEMA MARKUP (JSON-LD) - Critical for direct Google understanding ***
          This directly tells Google that this page is about you, Chaitanya Sai Meka.
          Customize all the 'REPLACE' values with your actual information.
        */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Chaitanya Sai Meka",
              "url": "https://chaitanya-sai-meka.vercel.app/",
              "sameAs": [
                "https://github.com/ChaitanyaSai-Meka", // Use the URL you provided in Hero.jsx
                "https://www.instagram.com/chaitanyasai_meka/", // Use the URL you provided
                "https://www.linkedin.com/in/chaitanya-sai-meka/", // Use the URL you provided
                "https://leetcode.com/u/chaitanyasai_meka/", // Use the URL you provided
                "https://codeforces.com/profile/Chaitanyasai_meka" // Use the URL you provided
                // Add any other personal professional social profiles here
              ],
              "jobTitle": "Full Stack Developer", // Customize your primary job title
              "worksFor": {
                "@type": "Organization",
                "name": "Self-Employed" // Or the name of the company you work for
              },
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "Your University Name" // REPLACE with your university/college name
              },
              "image": "https://chaitanya-sai-meka.vercel.app/profile-pic.jpg", // REPLACE with an actual path to your high-quality headshot/profile pic (must be public)
              "description": "Chaitanya Sai Meka is a passionate full-stack developer specializing in React and modern web technologies, with expertise in AI and machine learning, based in Rajamahendravaram, Andhra Pradesh, India."
            }
          `}
        </script>
      </Helmet>

      {/* Your existing Hero.jsx content starts here */}
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