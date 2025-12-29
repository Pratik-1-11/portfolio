"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, FileText } from "lucide-react";
import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState, MouseEvent } from "react";
import { cn } from "@/lib/utils";



/**
 * Spotlight effect for the background
 */
function Spotlight({ mouseX, mouseY }: { mouseX: any, mouseY: any }) {
  return (
    <motion.div
      className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
      style={{
        background: useMotionTemplate`
          radial-gradient(
            650px circle at ${mouseX}px ${mouseY}px,
            rgba(var(--primary-rgb), 0.15),
            transparent 80%
          )
        `,
      }}
    />
  );
}

/**
 * Magnetic Button Component
 */
const MagneticButton = ({ children, className, onClick, variant = "primary" }: any) => {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    x.set(middleX * 0.1); // Strength of magnetic pull
    y.set(middleY * 0.1);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      className={cn(
        "relative flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full transition-all duration-300",
        variant === "primary"
          ? "bg-primary text-primary-foreground hover:shadow-[0_0_40px_-10px_rgba(var(--primary-rgb),0.5)]"
          : "bg-background border border-input hover:bg-accent/50 hover:text-accent-foreground backdrop-blur-sm",
        className
      )}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
};

export function HeroSection() {
  const targetRef = useRef<HTMLDivElement>(null);

  // Mouse position for spotlight
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 50]);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={targetRef}
      id="home"
      className="group relative min-h-[calc(100dvh-4rem)] sm:min-h-[100dvh] flex items-center justify-center overflow-hidden bg-background pt-16 sm:pt-0"
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background opacity-40"></div>
      <div className="absolute inset-0 -z-10 bg-[url('/grid.svg')] opacity-[0.03] [mask-image:linear-gradient(to_bottom,white,transparent)]" />

      {/* Spotlight Effect */}
      <Spotlight mouseX={mouseX} mouseY={mouseY} />

      <motion.div
        className="container relative z-10 px-4 sm:px-6 mx-auto"
        style={{ opacity, scale, y }}
      >
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto space-y-8 sm:space-y-12">

          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs sm:text-sm font-medium backdrop-blur-md shadow-[0_0_20px_-10px_rgba(var(--primary-rgb),0.3)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for freelance work
          </motion.div>

          {/* Main Title */}
          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl sm:text-2xl md:text-3xl font-medium text-muted-foreground"
            >
              Hi, I'm <span className="text-foreground font-bold">Pratik Devkota</span>
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground leading-tight sm:leading-tight md:leading-none px-2 sm:px-0"
            >
              Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-pink-500 animate-gradient-x">Digital</span>
              <br className="hidden sm:block" />
              <span className="inline-block relative mt-2 sm:mt-0">
                Experiences
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-2 bg-primary/20 -rotate-1 rounded-full blur-sm"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-lg md:text-2xl text-muted-foreground/90 max-w-2xl mx-auto leading-relaxed px-2 sm:px-4 text-pretty"
            >
              As a <span className="text-foreground font-semibold">React Native</span> and <span className="text-foreground font-semibold">Full Stack Web Developer</span>,
              I craft pixel-perfect websites and robust applications with a focus on
              <span className="text-foreground font-semibold"> performance</span> and
              <span className="text-foreground font-semibold"> user experience</span>.
            </motion.p>
          </div>



          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-2 sm:pt-4 w-full sm:w-auto px-2 sm:px-0"
          >
            <MagneticButton 
              onClick={scrollToProjects}
              className="w-full sm:w-auto justify-center"
            >
              View Latest Projects
              <ArrowRight className="w-4 h-4 ml-2" />
            </MagneticButton>

            <MagneticButton
              variant="outline"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto justify-center"
            >
              <Mail className="w-4 h-4 mr-2" />
              Get in Touch
            </MagneticButton>

            <MagneticButton
              variant="outline"
              onClick={() => window.open("/Pratik_Devkota_CV.pdf", "_blank")}
            >
              <FileText className="w-4 h-4 mr-2" />
              Download CV
            </MagneticButton>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary/0 via-primary to-primary/0 animate-pulse" />
      </motion.div>
    </section>
  );
}
