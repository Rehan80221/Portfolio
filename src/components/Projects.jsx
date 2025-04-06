import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { cn } from "../lib/utils"; 

const projects = [
  {
    title: "Apple Website Clone",
    description:
      "A modern, animated clone of the official Apple website made with smooth scroll and transitions.",
    link: "https://apple-website-ecru-xi.vercel.app/",
    image: "https://i.postimg.cc/LswLNh62/Apple.png",
  },
  {
    title: "Movies Website",
    description:
      "Movie explorer website with sleek UI and live API integration.",
    link: "https://movies-web-project-seven.vercel.app/",
    image: "https://i.postimg.cc/Yqd4djbZ/Movies.png",
  },
  {
    title: "To-Do App with Flask",
    description:
      "Flask-powered backend with persistent task management frontend.",
    link: "https://todo-with-flask-a93d.onrender.com/",
    image: "https://i.postimg.cc/tTDy9nZH/Screenshot-2025-04-07-at-2-07-33-AM.png",
  },
  {
    title: "Temperature Converter (JS)",
    description:
      "Interactive converter for Celsius/Fahrenheit using plain JavaScript.",
    link: "https://chaitanyasai-meka.github.io/Temperature_Converter_JS/code/index.html",
    image: "https://i.postimg.cc/GhL8PvJv/Temperature.png",
  },
  {
    title: "Capstone Project (HTML/CSS)",
    description:
      "Final capstone web project showcasing HTML and CSS skills.",
    link: "https://chaitanyasai-meka.github.io/Capstone_Project/",
    image: "https://i.postimg.cc/zDSHRxWJ/Capstone.png",
  },
];

const Projects = () => {
  return (
    <div className="relative flex items-center justify-center w-full py-20 px-4 bg-white dark:bg-black">
      {/* Dot Background Layer */}
      <div
        className={cn(
          "absolute inset-0 z-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />

      {/* Radial Mask Overlay */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />

      {/* Project Cards */}
      <div className="relative z-10 flex flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
          <CardContainer key={index} className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {project.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
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
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
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
