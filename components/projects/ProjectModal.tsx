"use client";

import { Project } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { X, CheckCircle2, Target, Wrench, Award, ChevronLeft, ChevronRight, Mail, Github, ExternalLink, Smartphone } from "lucide-react";
import { MobileFrame } from "@/components/ui/MobileFrame";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";
import { getImagePath } from "@/lib/image-utils";

// Add this to your global CSS file (globals.css)
/*
.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
  border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
  transition: background 0.2s;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #666;
}

.dark .custom-scrollbar::-webkit-scrollbar-thumb {
  background: #555;
}

.dark .custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #777;
}
*/

interface ProjectModalProps {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Calculate derived state with null checks
    const hasImages = Boolean(project?.images?.length);
    const showNavigation = hasImages && (project?.images?.length ?? 0) > 1;

    // Reset image index when project changes
    useEffect(() => {
        setCurrentImageIndex(0);
    }, [project?.id]);

    // Close modal on Escape key press
    useEffect(() => {
        if (!isOpen) return;

        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [isOpen, onClose]);

    // Navigation functions
    const nextImage = useCallback(() => {
        if (!project?.images?.length) return;
        setCurrentImageIndex((prevIndex) =>
            project?.images ? (prevIndex === project.images.length - 1 ? 0 : prevIndex + 1) : 0
        );
    }, [project?.images]);

    const prevImage = useCallback(() => {
        if (!project?.images?.length) return;
        setCurrentImageIndex((prevIndex) =>
            project?.images ? (prevIndex === 0 ? project.images.length - 1 : prevIndex - 1) : 0
        );
    }, [project?.images]);

    if (!project) return null;

    // Type guard to ensure project is not null
    const projectData = project as Project;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="fixed inset-0 flex items-center justify-center z-50 p-4"
                    >
                        <div className="w-full max-w-5xl max-h-[90vh] bg-background border rounded-xl shadow-2xl overflow-hidden flex flex-col">
                            {/* Header */}
                            <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b p-6 flex items-start justify-between">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <h2 className="text-2xl md:text-3xl font-bold">{project.name}</h2>
                                        {project.featured && (
                                            <Badge variant="default">Featured</Badge>
                                        )}
                                    </div>
                                    <p className="text-muted-foreground">{project.type}</p>
                                </div>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={onClose}
                                    className="shrink-0"
                                >
                                    <X className="h-5 w-5" />
                                </Button>
                            </div>

                            {/* Content */}
                            <div className="p-6 space-y-8 overflow-y-auto max-h-[calc(90vh-80px)] custom-scrollbar">
                                {/* Project Meta */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div>
                                        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                                            Role
                                        </h3>
                                        <p className="text-base">{projectData.role}</p>
                                    </div>
                                    {projectData.techStack && projectData.techStack.length > 0 && (
                                        <div>
                                            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                                                Technologies
                                            </h3>
                                            <div className="flex flex-wrap gap-2">
                                                {projectData.techStack.map((tech, i) => (
                                                    <Badge key={i} variant="outline" className="text-xs">
                                                        {tech}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                    <div className="md:text-right space-x-2">
                                        {projectData.demoUrl && (
                                            <a
                                                href={projectData.demoUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={cn(buttonVariants({ variant: "outline" }))}
                                            >
                                                <ExternalLink className="w-4 h-4 mr-2" />
                                                Live Demo
                                            </a>
                                        )}
                                        {projectData.githubUrl && (
                                            <a
                                                href={projectData.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={cn(buttonVariants({ variant: "outline" }))}
                                            >
                                                <Github className="w-4 h-4 mr-2" />
                                                View Code
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* Project Description */}
                                {projectData.description && (
                                    <div className="prose prose-slate dark:prose-invert max-w-none">
                                        <h3 className="text-xl font-semibold mb-4">Project Overview</h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {projectData.description}
                                        </p>
                                    </div>
                                )}

                                {/* Mobile App Screenshots - Grid Layout */}
                                {project.id === 'sahara' && (project.images?.length ?? 0) > 0 && (
                                    <div className="space-y-4">
                                        <h3 className="text-xl font-semibold flex items-center gap-2">
                                            <Smartphone className="h-5 w-5" />
                                            App Screenshots
                                        </h3>
                                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                            {project.images?.map((image, index) => (
                                                <div
                                                    key={index}
                                                    className="relative aspect-[9/16] rounded-lg overflow-hidden border border-border/50 hover:border-primary/50 transition-all cursor-pointer"
                                                    onClick={() => setCurrentImageIndex(index)}
                                                >
                                                    <Image
                                                        src={getImagePath(image)}
                                                        alt={`${project.name} screenshot ${index + 1}`}
                                                        fill
                                                        className="object-cover hover:scale-105 transition-transform duration-300"
                                                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                                    />
                                                    {index >= 8 && (
                                                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white font-semibold text-lg">
                                                            +{(project.images?.length || 0) - 9} more
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Regular Image Carousel (for non-mobile projects) */}
                                {project.id !== 'sahara' && hasImages && project.images?.length && (
                                    <div className="relative w-full h-64 md:h-[500px] bg-muted/50 overflow-hidden">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <Image
                                                src={getImagePath(project.images[currentImageIndex])}
                                                alt={`${project.name} screenshot ${currentImageIndex + 1}`}
                                                fill
                                                className="object-contain"
                                                priority
                                                sizes="(max-width: 768px) 100vw, 80vw"
                                            />
                                        </div>

                                        {/* Navigation Arrows */}
                                        {showNavigation && (
                                            <>
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        prevImage();
                                                    }}
                                                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground rounded-full p-2 shadow-lg transition-all"
                                                    aria-label="Previous image"
                                                >
                                                    <ChevronLeft className="w-6 h-6" />
                                                </button>
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        nextImage();
                                                    }}
                                                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground rounded-full p-2 shadow-lg transition-all"
                                                    aria-label="Next image"
                                                >
                                                    <ChevronRight className="w-6 h-6" />
                                                </button>
                                            </>
                                        )}

                                        {/* Dots Indicator */}
                                        {showNavigation && project.images && (
                                            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                                                {project.images.map((_, index) => (
                                                    <button
                                                        key={index}
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            setCurrentImageIndex(index);
                                                        }}
                                                        className={cn(
                                                            "w-2 h-2 rounded-full transition-all",
                                                            index === currentImageIndex
                                                                ? "bg-primary w-6"
                                                                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                                                        )}
                                                        aria-label={`Go to image ${index + 1}`}
                                                    />
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* Problem & Solution */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 text-red-500">
                                            <Target className="w-5 h-5" />
                                            <h3 className="font-semibold">Problem</h3>
                                        </div>
                                        <p className="text-muted-foreground">{projectData.problem}</p>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 text-green-500">
                                            <CheckCircle2 className="w-5 h-5" />
                                            <h3 className="font-semibold">Solution</h3>
                                        </div>
                                        <p className="text-muted-foreground">{projectData.solution}</p>
                                    </div>
                                </div>

                                {/* Key Features */}
                                {projectData.keyFeatures && projectData.keyFeatures.length > 0 && (
                                    <div className="space-y-4">
                                        <h3 className="text-xl font-semibold">Key Features</h3>
                                        <div className="grid gap-4 md:grid-cols-2">
                                            {projectData.keyFeatures.map((feature, index) => (
                                                <div key={index} className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                                                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                                    <div>
                                                        <h4 className="font-medium">
                                                            {typeof feature === 'string' ? feature : feature.title}
                                                        </h4>
                                                        {typeof feature === 'object' && feature.description && (
                                                            <p className="text-sm text-muted-foreground mt-1">
                                                                {feature.description}
                                                            </p>
                                                        )}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Challenges & Solutions */}
                                {projectData.challenges && projectData.challenges.length > 0 && (
                                    <div className="space-y-4">
                                        <h3 className="text-xl font-semibold">Challenges & Solutions</h3>
                                        <div className="space-y-6">
                                            {projectData.challenges.map((challenge, index) => (
                                                <div key={index} className="space-y-2">
                                                    <h4 className="font-medium flex items-center gap-2">
                                                        <Wrench className="h-5 w-5 text-primary" />
                                                        {challenge.title}
                                                    </h4>
                                                    <p className="text-muted-foreground pl-7">
                                                        {challenge.description}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
