import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { cn } from "../lib/utils"; 

const projects = [
  {
    title: "Apple Website Clone",
    description:
      "A modern, animated clone of the official Apple website made with smooth scroll and transitions.",
    link: "https://apple-website-ecru-xi.vercel.app/",
    image: "/Apple_website.png",
  },
  {
    title: "Movies Website",
    description:
      "Movie explorer website with sleek UI and live API integration.",
    link: "https://movies-web-project-seven.vercel.app/",
    image: "/Movies.png",
  },
  {
    title: "To-Do App with Flask",
    description:
      "Flask-powered backend with persistent task management frontend.",
    link: "https://todo-with-flask-a93d.onrender.com/",
    image: "/Task_Master.png",
  },
  {
    title: "Temperature Converter (JS)",
    description:
      "Interactive converter for Celsius/Fahrenheit using plain JavaScript.",
    link: "https://chaitanyasai-meka.github.io/Temperature_Converter_JS/code/index.html",
    image: "/Temperature.png",
  },
  {
    title: "Capstone Project (HTML/CSS)",
    description:
      "Final capstone web project showcasing HTML and CSS skills.",
    link: "https://chaitanyasai-meka.github.io/Capstone_Project/",
    image: "/Capstone.png",
  },
  {
    title: "NST.TINDER",
    description:
      "NST Tinder: Matchmaking for Newton School with swipe, chat, and futuristic profiles.",
    link: "https://nst-tinder.vercel.app",
    image: "/nst_tinder.png",
  },
  {
    title: "Healthy Middle-Class India",
    description: "Healthy Middle-Class India: Tackles obesity and lifestyle diseases with systemic solutions.",
    link: "https://fste-chi.vercel.app",
    image: "/fste.png"
  },
  {
    title: "Coming Soon",
    description:
      "Still in the oven. Can’t wait to serve it hot!",
    link: "",
    image: "/black_page.jpg",
  },
];

const Projects = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full py-20 px-4 bg-black">
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
          Exploring ideas, solving problems, and having fun with code — here’s what I’ve built so far.
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
                className="text-neutral-300 text-sm max-w-sm mt-2"
              >
                {project.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src={project.image}
                  height={1000}
                  width={1000}
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt={project.title}
                />
              </CardItem>
              <div className="flex justify-end items-center mt-6">
                <CardItem
                  translateZ={20}
                  as="a"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold"
                >
                  Live →
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};

export default Projects;