"use client";

import { motion } from "framer-motion";
import { Code2, Globe, Brain, Rocket, Coffee, Calendar, MapPin, Database, Server, Layout, Smartphone } from "lucide-react";
import { cn } from "@/lib/utils";
import React from "react";

// Types for bento items
interface BentoItemProps {
    className?: string;
    children: React.ReactNode;
    delay?: number;
}

const BentoCard = ({ className, children, delay = 0 }: BentoItemProps) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className={cn(
            "group relative overflow-hidden rounded-3xl border border-border/50 bg-background/50 backdrop-blur-sm p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/20",
            className
        )}
    >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative z-10 h-full">{children}</div>
    </motion.div>
);

const TechBadge = ({ icon, name }: { icon: React.ReactNode; name: string }) => (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/50 border border-border/50 text-xs font-medium backdrop-blur-sm whitespace-nowrap">
        {icon}
        <span>{name}</span>
    </div>
);

export function AboutSection() {
    return (
        <section id="about" className="py-24 md:py-32 relative overflow-hidden">
            <div className="container px-4 md:px-6">
                <div className="max-w-5xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16 space-y-4">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold tracking-tight"
                        >
                            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Me</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-muted-foreground max-w-2xl mx-auto text-lg"
                        >
                            A glimpse into my world, my stack, and what drives me.
                        </motion.p>
                    </div>

                    {/* Bento Grid layout */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto">

                        {/* 1. Main Bio - Large Card (2x2 on desktop) */}
                        <BentoCard className="md:col-span-2 md:row-span-2 flex flex-col justify-center min-h-[auto] md:min-h-[300px]">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                        <Brain className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground">The Full-Stack Mindset</h3>
                                </div>
                                <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                                    I'm a developer who bridges the gap between complex backend logic and beautiful frontend experiences.
                                    I don't just write code; I architect solutions that solve real business problems.
                                </p>
                                <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                                    From database design in PostgreSQL to pixel-perfect UIs in React and mobile apps in React Native,
                                    I view every project as a cohesive system where every component matters.
                                </p>
                            </div>
                        </BentoCard>

                        {/* 2. Experience / Stats */}
                        <BentoCard delay={0.1} className="flex flex-col justify-center bg-primary/5 border-primary/20 min-h-[160px]">
                            <div className="text-center space-y-2">
                                <h4 className="text-4xl md:text-5xl font-bold text-primary">3+</h4>
                                <p className="font-medium text-foreground">Years Experience</p>
                                <p className="text-xs text-muted-foreground">Building Production Apps</p>
                            </div>
                        </BentoCard>

                        {/* 3. Location */}
                        <BentoCard delay={0.2} className="flex items-center justify-between group-hover:bg-blue-500/5 transition-colors min-h-[120px]">
                            <div className="space-y-1">
                                <p className="text-sm text-muted-foreground">Based in</p>
                                <h4 className="text-lg md:text-xl font-bold flex items-center gap-2 text-foreground">
                                    Nepal <span className="text-2xl">🇳🇵</span>
                                </h4>
                            </div>
                            <MapPin className="w-8 h-8 md:w-10 md:h-10 text-primary/20 group-hover:text-primary transition-colors" />
                        </BentoCard>

                        {/* 4. Tech Stack Marquee (spans full width on mobile, 3 cols on bottom) */}
                        <BentoCard delay={0.3} className="md:col-span-3 overflow-hidden flex flex-col justify-center py-8">
                            <div className="flex items-center gap-2 mb-6 text-muted-foreground text-sm uppercase tracking-wider font-semibold">
                                <Code2 className="w-4 h-4" />
                                My Arsenal
                            </div>

                            {/* Static grid for clarity instead of ticker for cleaner bento look */}
                            <div className="flex flex-wrap gap-3">
                                <TechBadge icon={<Globe className="w-3 h-3 text-blue-400" />} name="Next.js" />
                                <TechBadge icon={<Layout className="w-3 h-3 text-cyan-400" />} name="React" />
                                <TechBadge icon={<Smartphone className="w-3 h-3 text-purple-400" />} name="React Native" />
                                <TechBadge icon={<Code2 className="w-3 h-3 text-blue-600" />} name="TypeScript" />
                                <TechBadge icon={<Server className="w-3 h-3 text-green-500" />} name="Node.js" />
                                <TechBadge icon={<Database className="w-3 h-3 text-teal-300" />} name="PostgreSQL" />
                                <TechBadge icon={<Layout className="w-3 h-3 text-sky-400" />} name="Tailwind CSS" />
                                <TechBadge icon={<Database className="w-3 h-3 text-yellow-500" />} name="Firebase" />
                                <TechBadge icon={<Database className="w-3 h-3 text-emerald-500" />} name="MongoDB" />
                                <TechBadge icon={<Globe className="w-3 h-3 text-orange-500" />} name="Hono" />
                            </div>
                        </BentoCard>

                        {/* 5. Passion/Coffee Card */}
                        <BentoCard delay={0.4} className="md:col-span-1 min-h-[180px] bg-orange-500/5 group-hover:bg-orange-500/10 border-orange-500/10 hover:border-orange-500/30">
                            <div className="h-full flex flex-col justify-between">
                                <div className="p-2 bg-orange-500/10 w-fit rounded-lg text-orange-500">
                                    <Coffee className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Fuel & Focus</h4>
                                    <p className="text-sm text-muted-foreground">Powered by dark roasts and late-night coding sessions.</p>
                                </div>
                            </div>
                        </BentoCard>

                        {/* 6. Availability */}
                        <BentoCard delay={0.5} className="md:col-span-2 flex items-center justify-between bg-green-500/5 border-green-500/10 hover:border-green-500/30">
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <span className="relative flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                    </span>
                                    <h4 className="font-bold text-lg">Open to Opportunities</h4>
                                </div>
                                <p className="text-muted-foreground max-w-md">
                                    Looking for freelance projects or full-time roles where I can make an impact.
                                </p>
                            </div>
                            <Rocket className="w-12 h-12 text-green-500/20 group-hover:text-green-500 transition-colors" />
                        </BentoCard>

                    </div>
                </div>
            </div>
        </section>
    );
}
