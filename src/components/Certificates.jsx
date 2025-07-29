import React, { useEffect, useRef } from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { cn } from "../lib/utils";
import Lenis from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const certificates = [
  {
    title: "Salesforce Certified AI Associate",
    platform: "Salesforce / Credly",
    image: "/salesforce.png",
    link: "https://www.salesforce.com/trailblazer/hk5cp63j9zpj5h688o",
  },
  {
    title: "Google Cloud Engineering",
    platform: "Google Cloud / LinkedIn",
    image: "/gcloud.png",
    link: "https://www.linkedin.com/posts/rehan-haneef-442555263_salesforce-ai-associate-certificate-activity-7254316417125101571-Hour",
  },
  {
    title: "IBM Python Certificate",
    platform: "IBM / Etrain Education",
    image: "/ibm.png",
    link: "https://courses.etrain.skillsnetwork.site/certificates/0c7b50956f3e4dc4a255ace37477c8ff",
  },
  {
    title: "Aviatrix Multicloud Associate",
    platform: "Aviatrix / Credly",
    image: "/ace.png",
    link: "https://www.credly.com/badges/d7615810-5ba9-4529-af3b-d89a8c0d6b7e/public_url",
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    platform: "Oracle / Oracle University",
    image: "/oracleai.png",
    link: "#",
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
    platform: "Oracle / Oracle University",
    image: "/oracle.png",
    link: "#",
  },
  {
    title: "RPA Essential Professional 2023 Certified",
    platform: "RPA Certification ",
    image: "/rpa.png",
    link: "#",
  },
];

const Certificates = () => {
  const scrollLineRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({ duration: 2, smooth: true });
    
    // Scroll to top when component mounts
    lenis.scrollTo(0, { immediate: 0 });
    
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

    return () => lenis.destroy();
  }, []);

  // Fallback scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center w-full py-20 px-4 bg-black">
      <div ref={scrollLineRef} className="fixed top-0 left-0 h-[3px] bg-gradient-to-b from-neutral-200 to-neutral-500 w-0 z-50" />

      <div className={cn("absolute inset-0 z-0", "[background-size:20px_20px]", "[background-image:radial-gradient(#404040_1px,transparent_1px)]")} />

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <div className="relative z-10 mb-12 text-center">
        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent">
          Certifications 📜
        </h2>
        <p className="mt-4 text-neutral-400 text-sm md:text-base max-w-xl mx-auto">
          Verified achievements in AI, Cloud, and Data Science — always learning and growing.
        </p>
      </div>

      <div className="relative z-10 flex flex-wrap justify-center gap-8">
        {certificates.map((cert, index) => (
          <CardContainer key={index} className="inter-var">
            <CardBody
              className="relative group/card w-auto sm:w-[24rem] h-auto rounded-xl p-6
              bg-white/5 backdrop-blur-lg border border-white/10
              overflow-hidden transition-all duration-500
              before:absolute before:inset-0 before:z-0 before:rounded-xl
              before:bg-gradient-to-br before:from-purple-500/10 before:via-pink-500/10 before:to-yellow-400/10
              before:opacity-0 group-hover/card:before:opacity-100 group-hover/card:before:blur-xl group-hover/card:before:scale-110
              hover:shadow-[0_0_30px_#a855f740]"
            >
              <CardItem
                translateZ="50"
                className="relative z-10 text-xl font-bold text-white group-hover/card:text-indigo-300 transition"
              >
                {cert.title}
              </CardItem>

              <CardItem
                as="p"
                translateZ="40"
                className="relative z-10 text-neutral-300 text-sm mt-2"
              >
                {cert.platform}
              </CardItem>

              <CardItem translateZ="100" className="relative z-10 w-full mt-4">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-48 object-cover rounded-lg border border-white/10 group-hover/card:scale-[1.02] transition duration-300"
                />
              </CardItem>

              <div className="flex justify-end mt-6">
                <CardItem
                  translateZ={20}
                  as="a"
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 px-4 py-2 rounded-xl bg-white/20 backdrop-blur-md text-white text-xs font-semibold border border-white/10 hover:bg-white/30 transition"
                >
                  View →
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
