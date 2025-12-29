"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Project } from "@/data/projects";
import { ExternalLink, Image as ImageIcon } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

interface ProjectCardProps {
    project: Project;
    onClick: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
        >
            <Card className="h-full cursor-pointer hover:shadow-xl transition-all border-2 hover:border-primary/50 overflow-hidden" onClick={onClick}>
                <div className="relative h-48 bg-muted/50 overflow-hidden">
                    {project.images && project.images.length > 0 ? (
                        <Image
                            src={project.images[0]}
                            alt={`${project.name} screenshot`}
                            fill
                            className="object-cover transition-transform duration-300 hover:scale-105"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-muted">
                            <ImageIcon className="w-12 h-12 text-muted-foreground/50" />
                        </div>
                    )}
                    {project.images && project.images.length > 1 && (
                        <div className="absolute bottom-2 right-2 bg-background/80 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center">
                            <span className="text-xs font-medium">+{project.images.length - 1}</span>
                        </div>
                    )}
                </div>
                <CardHeader className="pb-2">
                    <div className="flex items-start justify-between gap-2">
                        <div className="flex-1">
                            <CardTitle className="text-xl mb-1">{project.name}</CardTitle>
                            <CardDescription className="text-sm">{project.type}</CardDescription>
                        </div>
                        {project.featured && (
                            <Badge variant="default" className="shrink-0">
                                Featured
                            </Badge>
                        )}
                    </div>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground line-clamp-3">
                        {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="space-y-2">
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                            Tech Stack
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                            {project.techStack.slice(0, 5).map((tech) => (
                                <Badge key={tech} variant="outline" className="text-xs">
                                    {tech}
                                </Badge>
                            ))}
                            {project.techStack.length > 5 && (
                                <Badge variant="outline" className="text-xs">
                                    +{project.techStack.length - 5}
                                </Badge>
                            )}
                        </div>
                    </div>

                    <Button variant="ghost" className="w-full group">
                        View Details
                        <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </CardContent>
            </Card>
        </motion.div>
    );
}
