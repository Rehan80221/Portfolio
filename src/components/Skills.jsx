import React, { useRef } from "react";
import { cn } from "../lib/utils";
import { CardSpotlight } from "./ui/card-spotlight";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
} from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

const Skills = () => {
  const colors = [
    [138, 43, 226],  // Purple
    [147, 112, 219], // Light Purple
    [186, 85, 211],  // Medium Purple
    [153, 50, 204],  // Dark Purple
    [218, 112, 214], // Orchid
    [221, 160, 221], // Plum
    [216, 191, 216], // Thistle
    [128, 0, 128],   // Dark Magenta
    [56, 189, 248],  // Tailwind-like Sky Blue
  ];

  const icons = [
    <FaReact key="react" className="text-white text-2xl" />,
    <FaHtml5 key="html" className="text-white text-2xl" />,
    <FaCss3Alt key="css" className="text-white text-2xl" />,
    <FaJs key="js" className="text-white text-2xl" />,
    <SiTypescript key="ts" className="text-white text-2xl" />,
    <img
      key="gsap"
      src="/Gsap.png"
      alt="Gsap"
      className="w-10 h-10 p-1 object-contain"
    />,
    <FaPython key="python" className="text-white text-2xl" />,
    <img
      key="flask"
      src="/Flask.png"
      alt="Flask"
      className="w-10 h-10 p-1 object-contain"
    />,
    <img
      key="tailwind"
      src="/tailwind.png"
      alt="Tailwind"
      className="w-10 h-10 p-1 object-contain"
    />,
  ];

  const audioSources = [
    "/e6-piano.mp3",
    "/d6-piano.mp3",
    "/b6-piano.mp3",
    "/g6-piano.mp3",
    "/f6-piano.mp3",
    "/a6-piano.mp3",
    "/c6-piano.mp3",
    "/d6-piano.mp3",
    "/e6-piano.mp3", 
  ];

  const audioRefs = useRef([]);

  const handleMouseEnter = (index) => {
    const audio = new Audio(audioSources[index]);
    audioRefs.current[index] = audio;
    audio.play();
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center px-4 py-12 sm:py-20 bg-black">
      
      {/* Background Grid */}
      <div
        className={cn(
          "absolute inset-0 z-0 pointer-events-none",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />

      {/* Radial Mask */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* Heading */}
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center bg-gradient-to-b from-neutral-300 to-neutral-500 bg-clip-text text-transparent z-20 mb-4 sm:mb-6">
        Tools in My Arsenal
      </h2>

      {/* Prompts */}
      <div className="z-20 mb-6 text-lg font-semibold text-center">
        {/* Mobile: Tap Prompt */}
        <p className="block sm:hidden bg-gradient-to-b from-neutral-300 to-neutral-500 bg-clip-text text-transparent">
          Try tapping on the icons 🎵
        </p>

        {/* Desktop/Tablet: Hover Prompt */}
        <p className="hidden sm:block bg-gradient-to-b from-neutral-300 to-neutral-500 bg-clip-text text-transparent">
          Hover over the icons to hear a sound 🎵
        </p>
      </div>

      {/* Icon Cards */}
      <div className="relative z-20 flex justify-center gap-4 flex-wrap max-w-5xl w-full">
        {Array.from({ length: 9 }, (_, index) => ( 
          <CardSpotlight
            key={index}
            className="h-20 w-20 rounded-full flex items-center justify-center bg-black"
            color={`rgb(${colors[index][0]}, ${colors[index][1]}, ${colors[index][2]})`}
            onMouseEnter={() => handleMouseEnter(index)}
            onClick={() => handleMouseEnter(index)} // tap on mobile
          >
            <div className="relative z-20">
              {icons[index]}
            </div>
          </CardSpotlight>
        ))}
      </div>
    </div>
  );
};

export default Skills;