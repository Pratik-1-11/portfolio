"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects, Project } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectModal } from "@/components/projects/ProjectModal";

export function ProjectsSection() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleProjectClick = (project: Project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedProject(null), 200);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    // Sort projects to show featured first
    const sortedProjects = [...projects].sort((a, b) =>
        a.featured === b.featured ? 0 : a.featured ? -1 : 1
    );

    return (
        <section id="projects" className="py-20 md:py-32">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className="space-y-12"
                >
                    {/* Section Header */}
                    <motion.div variants={itemVariants} className="text-center space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Real-world applications solving actual business problems — from POS
                            systems to mobile platforms
                        </p>
                    </motion.div>

                    {/* Projects Grid */}
                    <motion.div
                        variants={containerVariants}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                    >
                        {sortedProjects.map((project) => (
                            <motion.div key={project.id} variants={itemVariants}>
                                <ProjectCard
                                    project={project}
                                    onClick={() => handleProjectClick(project)}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Project Modal */}
            <ProjectModal
                project={selectedProject}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </section>
    );
}
