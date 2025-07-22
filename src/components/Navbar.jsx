import React, { useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaMusic } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const links = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/certificates', label: 'Certificates' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <>
      <nav
        className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] md:w-auto flex items-center justify-between gap-4 px-6 py-3 rounded-2xl backdrop-blur-lg bg-white/10 dark:bg-black/10 border border-white/20 shadow-xl transition-all duration-300"
      >
        {/* Navigation Links */}
        <div className="flex gap-4">
          {links.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`group relative px-4 py-2 rounded-xl font-medium text-sm transition-all duration-300 overflow-hidden
                ${location.pathname === link.path
                  ? 'bg-white/30 text-black dark:text-white shadow-md'
                  : 'text-gray-700 dark:text-gray-300 hover:text-white'}
              `}
            >
              <span className="relative z-10">{link.label}</span>

              {/* Gradient hover background */}
              <span className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 blur-sm"></span>
            </Link>
          ))}
        </div>

        {/* Music toggle */}
        <div onClick={toggleMusic} className="relative ml-auto cursor-pointer group">
          <div
            className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 relative overflow-hidden
              ${isPlaying
                ? 'bg-gradient-to-tr from-pink-500 to-purple-500 shadow-md animate-pulse'
                : 'bg-white/20 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 dark:bg-white/10 dark:hover:bg-gradient-to-r dark:hover:from-pink-500 dark:hover:to-purple-500 shadow-md'}
            `}
          >
            <FaMusic
              className={`text-white text-xl z-10 transition duration-300 ${
                isPlaying ? 'animate-spin-slow text-pink-300' : 'group-hover:text-indigo-300'
              }`}
            />
            {/* Animated glow ring */}
            {isPlaying && (
              <div className="absolute inset-0 rounded-full border border-pink-500/40 animate-ping" />
            )}
          </div>
        </div>
      </nav>

      {/* Audio Element */}
      <audio ref={audioRef} loop preload="auto">
        <source src="/suzume.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </>
  );
};

export default Navbar;
