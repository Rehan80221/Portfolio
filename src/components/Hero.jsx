import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiCodeforces } from "react-icons/si";
import { cn } from "../lib/utils";
import { DrawLineText } from "./ui/draw_line_text";
import SplineScene from "./SplineScene";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="relative flex flex-col items-center justify-center min-h-screen w-full overflow-hidden px-4 py-16 bg-black">

        {/* Dot Background */}
        <div
          className={cn(
            "absolute inset-0 z-0",
            "[background-size:20px_20px]",
            "[background-image:radial-gradient(#404040_1px,transparent_1px)]"
          )}
        />

        {/* Spline 3D */}
        <div className="absolute inset-0 z-10 w-full h-full">
          <SplineScene />
        </div>

        {/* Radial Overlay */}
        <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center bg-black bg-opacity-40 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

        {/* Content */}
        <div className="relative z-30 w-full max-w-4xl text-center">
          <div className="flex justify-center items-center gap-3 flex-wrap">
            <span
              className="font-bold tracking-tight bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent text-3xl sm:text-5xl md:text-6xl lg:text-[71px]"
              style={{ lineHeight: 1 }}
            >
              Hi! Myself
            </span>
            
            {/* Mobile-first responsive name */}
            <div className="w-full sm:w-auto">
              <DrawLineText
                fontSize={{
                  base: 24, // Reduced from 30 for mobile
                  sm: 32,   // Reduced from 40
                  md: 50,   // Reduced from 60
                  lg: 70,
                }}
                strokeWidth={1.5}
                text="Muntimadugu Rehan Haneef"
                color="url(#gradient)"
                className="break-words" // Allow text wrapping if needed
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
                  "Emotion-Driven Applications",
                  "Full-Stack Web Mastery",
                  "3D-Enhanced User Interfaces",
                  "Serverless Cloud Architectures",
                  "Smart & Responsive Design",
                  "Real-Time Data Visualization",
                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={80}
                delaySpeed={1000}
              />
            </span>
          </h2>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href="/Rehan_resume.pdf"
              download
              className="px-6 py-2 rounded-xl text-white text-sm sm:text-base font-medium backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/20 transition duration-300 shadow-md hover:shadow-white/20"
            >
              Download CV
            </a>
            <Link
              to="/about"
              className="px-6 py-2 rounded-xl text-white text-sm sm:text-base font-medium backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/20 transition duration-300 shadow-md hover:shadow-white/20"
            >
              About Me
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mt-6 text-2xl text-white flex-wrap">
            <a
              href="https://github.com/Rehan80221"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-circle hover:text-white transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/rehan_haneef212/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-circle hover:text-pink-600 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/muntimadugu-rehan-haneef-442555263/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-circle hover:text-blue-600 transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;