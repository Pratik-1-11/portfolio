"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export function ContactSection() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        try {
            const response = await fetch("https://formspree.io/f/xwvkqkww", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setSubmitSuccess(true);
                reset();
                setTimeout(() => setSubmitSuccess(false), 3000);
            } else {
                console.error("Form submission failed");
                // Optional: Validate if you want to show a specific error message to the user
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        } finally {
            setIsSubmitting(false);
        }
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

    return (
        <section id="contact" className="py-20 md:py-32 bg-muted/30 dark:bg-background/95">
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
                        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-blue-400 to-purple-500 bg-clip-text text-transparent">
                            <span className="drop-shadow-[0_0_8px_rgba(99,102,241,0.7)]">Get In Touch</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Open to opportunities and interesting projects. Let's build something
                            great together.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-5xl mx-auto">
                        {/* Contact Info */}
                        <motion.div variants={itemVariants} className="md:col-span-2 space-y-6">
                            <Card>
                                <CardContent className="pt-6 space-y-4">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 rounded-lg bg-primary/10">
                                                <MapPin className="h-5 w-5 text-primary" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">Location</p>
                                                <p className="text-sm text-muted-foreground">Nepal</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <div className="p-2 rounded-lg bg-primary/10">
                                                <Mail className="h-5 w-5 text-primary" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">Email</p>
                                                <a
                                                    href="mailto:pratikdevkota05@gmail.com"
                                                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                                >
                                                    pratikdevkota05@gmail.com
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-4 border-t">
                                        <p className="text-sm font-medium mb-3 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">Connect With Me</p>
                                        <div className="flex gap-3">
                                            <a
                                                href="https://github.com/Pratik-1-11"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Button variant="outline" size="icon" className="border-border/50 hover:bg-accent/50">
                                                    <Github className="h-5 w-5" />
                                                </Button>
                                            </a>
                                            <a
                                                href="https://www.linkedin.com/in/pratik-devkota-09a559364/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Button variant="outline" size="icon" className="border-border/50 hover:bg-accent/50">
                                                    <Linkedin className="h-5 w-5" />
                                                </Button>
                                            </a>
                                            <a href="mailto:pratikdevkota05@gmail.com">
                                                <Button variant="outline" size="icon" className="border-border/50 hover:bg-accent/50">
                                                    <Mail className="h-5 w-5" />
                                                </Button>
                                            </a>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div variants={itemVariants} className="md:col-span-3">
                            <Card className="dark:bg-card/50 dark:border-border/50">
                                <CardContent className="pt-6">
                                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                                        <div className="space-y-2">
                                            <Input
                                                placeholder="Your Name"
                                                {...register("name")}
                                                className={`text-base md:text-sm bg-background dark:bg-card/70 border-border/50 dark:border-border/70 ${errors.name ? "border-destructive" : ""} focus:ring-2 focus:ring-primary/50 focus:border-primary`}
                                            />
                                            {errors.name && (
                                                <p className="text-sm text-destructive">{errors.name.message}</p>
                                            )}
                                        </div>

                                        <div className="space-y-2">
                                            <Input
                                                type="email"
                                                placeholder="Your Email"
                                                {...register("email")}
                                                className={`text-base md:text-sm bg-background dark:bg-card/70 border-border/50 dark:border-border/70 ${errors.email ? "border-destructive" : ""} focus:ring-2 focus:ring-primary/50 focus:border-primary`}
                                            />
                                            {errors.email && (
                                                <p className="text-sm text-destructive">{errors.email.message}</p>
                                            )}
                                        </div>

                                        <div className="space-y-2">
                                            <Textarea
                                                placeholder="Your Message"
                                                rows={6}
                                                {...register("message")}
                                                className={`text-base md:text-sm bg-background dark:bg-card/70 border-border/50 dark:border-border/70 ${errors.message ? "border-destructive" : ""} focus:ring-2 focus:ring-primary/50 focus:border-primary`}
                                            />
                                            {errors.message && (
                                                <p className="text-sm text-destructive">
                                                    {errors.message.message}
                                                </p>
                                            )}
                                        </div>

                                        {submitSuccess && (
                                            <motion.p
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="text-sm text-primary font-medium"
                                            >
                                                ✓ Message sent successfully!
                                            </motion.p>
                                        )}

                                        <Button
                                            type="submit"
                                            className="w-full md:w-auto group relative overflow-hidden bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(124,58,237,0.5)] hover:scale-[1.02]"
                                            disabled={isSubmitting}
                                        >
                                            <span className="relative z-10 flex items-center">
                                                {isSubmitting ? (
                                                    <span className="text-white">
                                                        Sending...
                                                    </span>
                                                ) : (
                                                    <>
                                                        <span>Send Message</span>
                                                        <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                                    </>
                                                )}
                                            </span>
                                            <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </motion.div>
            </div >
        </section >
    );
}
