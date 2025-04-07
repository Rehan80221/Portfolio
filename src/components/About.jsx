import React from 'react';
import { cn } from "../lib/utils";

const About = () => {
  return (
    <section className="about-container relative flex min-h-[50rem] md:min-h-screen w-full items-center justify-center bg-white dark:bg-black text-center py-20 px-4">
      {/* Background pattern */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />
      {/* Faded radial gradient overlay */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />

      {/* Content */}
      <div className="relative z-20 max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Profile Image */}
        <div className="w-64 h-64 rounded-full overflow-hidden flex-shrink-0 border-4 border-white dark:border-neutral-800">
          <img
            src="https://i.postimg.cc/Hs8K2v0y/my1stghibli.png"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="text-left text-neutral-800 dark:text-neutral-300 max-w-2xl ml-8 md:ml-16">
          <h1 className="text-4xl sm:text-7xl font-bold bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent py-8">
            About Me.
          </h1>
          <p className="text-lg leading-relaxed mb-4">
            I’m Chaitanya Sai Meka, a passionate and driven developer with a strong foundation in software engineering and a keen interest in building impactful digital solutions. I thrive at the intersection of technology and creativity, with hands-on experience in full-stack development, UI/UX design, and collaborative team projects.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Currently pursuing my academic journey while actively working on personal and open-source projects, I continuously seek opportunities to learn and grow in real-world environments. I have a strong grasp of modern web technologies, especially React, and I enjoy solving complex problems with clean, efficient code.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            I'm also exploring the early stages of a tech startup idea called <strong>Xeon</strong>, where I'm experimenting with innovative solutions and learning to translate abstract ideas into structured plans. This journey is helping me build my entrepreneurial mindset and sharpen my skills in product thinking, strategy, and leadership—even as the concept evolves through ideation and feedback.
          </p>
          <p className="text-lg leading-relaxed">
            My goal is to work on challenging projects, learn from experienced mentors, and make meaningful contributions to the tech community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
