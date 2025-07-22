import React, { useEffect, useRef, useState } from "react";
import { cn } from "../lib/utils";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import emailjs from "emailjs-com";
import SplineScene from "./SplineScene";

const Contact = () => {
  const formRef = useRef(null); 
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_59vfl7j",
        "template_bjeeuch",
        formRef.current,
        "68n-Mrz5nnPBdskD0"
      )
      .then(() => {
        setStatus("✅ Message sent successfully!");
        formRef.current.reset();
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setStatus("❌ Failed to send message. Please try again later.");
      })
      .finally(() => setSending(false));
  };

  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center px-4 py-20 bg-black">
      {/* Background pattern */}
      <div
        className={cn(
          "absolute inset-0 z-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />

      {/* Spline 3D Overlay (z-10) */}
      <div className="absolute inset-0 z-10 w-full h-full">
        <SplineScene />
      </div>

      {/* Radial mask overlay */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* Content */}
      <div className="relative z-20 max-w-xl w-full text-center">
        <h1 className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-5xl sm:text-7xl font-extrabold text-transparent">
          Connect with Me
        </h1>
       
       <p className="mt-4 text-white text-lg font-semibold bg-black/40 px-4 py-2 rounded-md inline-block backdrop-blur-sm">
  Let’s chat — drop a message!
</p>


        <form ref={formRef} onSubmit={sendEmail} className="mt-10 space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="w-full rounded-xl bg-white/10 px-4 py-3 text-white placeholder-white/70 border border-white/20 backdrop-blur-md shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-300/30"
          />
          <input
            type="email"
            name="email"
            placeholder="Email (must be Gmail)"
            required
            pattern="^[a-zA-Z0-9._%+-]+@gmail\.com$"
            className="w-full rounded-xl bg-white/10 px-4 py-3 text-white placeholder-white/70 border border-white/20 backdrop-blur-md shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-300/30"
          />
          <textarea
            name="message"
            placeholder="Message"
            required
            rows={4}
            className="w-full rounded-xl bg-white/10 px-4 py-3 text-white placeholder-white/70 border border-white/20 backdrop-blur-md shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-300/30"
          />

          <div className="mt-6 flex justify-center">
         <HoverBorderGradient
  containerClassName="rounded-full"
  as="button"
  type="submit"
  disabled={sending}
  className={cn(
    "backdrop-blur-md",
    "bg-white/10",
    "text-white",
    "flex items-center space-x-2 px-6 py-2",
    "font-semibold transition-all duration-300 ease-in-out",
    "hover:bg-white/20 hover:shadow-lg hover:shadow-indigo-400/20",
    "border border-white/20",
    "disabled:opacity-60"
  )}
>
  <span>{sending ? "Sending..." : "Send Message"}</span>
</HoverBorderGradient>

          </div>

          {status && (
            <p className={`mt-4 text-sm ${status.startsWith("✅") ? "text-green-400" : "text-red-400"}`}>
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
