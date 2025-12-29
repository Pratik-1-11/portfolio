"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    const navItems = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    const socialLinks = [
        { 
            icon: Github, 
            href: "https://github.com/Pratik-1-11", 
            label: "GitHub" 
        },
        { 
            icon: Linkedin, 
            href: "https://www.linkedin.com/in/pratik-devkota-09a559364/", 
            label: "LinkedIn" 
        },
        { 
            icon: Mail, 
            href: "mailto:pratikdevkota05@gmail.com", 
            label: "Email" 
        }
    ];

    const handleNavClick = (e: React.MouseEvent, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="bg-gradient-to-b from-background to-muted/30 dark:from-background dark:to-background/90 backdrop-blur-sm border-t border-border/50">
            <div className="container px-4 py-8 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                            Pratik Devkota
                        </h3>
                        <p className="text-muted-foreground text-sm">
                            Full-Stack Developer & React Native Specialist
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className={`p-2 rounded-full bg-muted/50 hover:bg-muted/80 dark:bg-muted/30 
                                    text-muted-foreground hover:text-foreground transition-all duration-300
                                    relative group overflow-hidden
                                    ${label === 'GitHub' ? 'hover:dark:text-[#6e5494]' : ''}
                                    ${label === 'LinkedIn' ? 'hover:dark:text-[#0077b5]' : ''}
                                    ${label === 'Email' ? 'hover:dark:text-[#ea4335]' : ''}`}
                                >
                                    <span className="relative z-10">
                                        <Icon className="h-5 w-5" />
                                    </span>
                                    <span className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300
                                        ${label === 'GitHub' ? 'bg-gradient-to-br from-purple-500/30 to-pink-500/20' : ''}
                                        ${label === 'LinkedIn' ? 'bg-gradient-to-br from-blue-500/30 to-cyan-500/20' : ''}
                                        ${label === 'Email' ? 'bg-gradient-to-br from-red-500/30 to-orange-500/20' : ''}
                                        filter blur-[8px]`} />
                                    <span className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500
                                        ${label === 'GitHub' ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/10' : ''}
                                        ${label === 'LinkedIn' ? 'bg-gradient-to-br from-blue-500/20 to-cyan-500/10' : ''}
                                        ${label === 'Email' ? 'bg-gradient-to-br from-red-500/20 to-orange-500/10' : ''}
                                        filter blur-[12px]`} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-sm font-semibold text-foreground mb-4">Navigation</h4>
                        <nav className="space-y-2">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={(e) => handleNavClick(e, item.href)}
                                    className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-sm font-semibold text-foreground mb-4">Get in Touch</h4>
                        <div className="space-y-2">
                            <a 
                                href="mailto:pratikdevkota05@gmail.com" 
                                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                                pratikdevkota05@gmail.com
                            </a>
                            <p className="text-sm text-muted-foreground">
                                Available for freelance work
                            </p>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 pt-6 border-t border-border/10 dark:border-border/20 text-center">
                    <p className="text-xs text-muted-foreground">
                        © {currentYear} Pratik Devkota. All rights reserved.
                        <span className="block mt-2 text-[10px] text-muted-foreground/70">
                            Built with Next.js, Tailwind CSS, and lots of ☕
                        </span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
