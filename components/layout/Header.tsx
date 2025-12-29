"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDark, setIsDark] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        // Check for saved theme preference, then system preference, default to dark
        const savedTheme = localStorage.getItem("theme");
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        // If no saved preference, use system preference or default to dark
        const shouldUseDark = savedTheme 
            ? savedTheme === 'dark' 
            : systemPrefersDark || true; // Default to dark if no preference
        
        if (shouldUseDark) {
            document.documentElement.classList.add('dark');
            setIsDark(true);
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            setIsDark(false);
            localStorage.setItem('theme', 'light');
        }
    }, []);

    const toggleTheme = () => {
        const newIsDark = !isDark;
        setIsDark(newIsDark);
        
        if (newIsDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    const navItems = [
        { name: "Home", href: "#" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    const handleNavClick = (href: string, e: React.MouseEvent) => {
        e.preventDefault();
        setIsMenuOpen(false);
        
        if (href === '#') {
            // Scroll to top for home link
            window.scrollTo({ top: 0, behavior: 'smooth' });
            // Update URL without adding to history
            window.history.pushState({}, '', window.location.pathname);
            return;
        }
        
        // Add a small delay to ensure the menu is closed before scrolling
        setTimeout(() => {
            const element = document.querySelector(href);
            if (element) {
                // Temporarily disable smooth scrolling for this scroll
                document.documentElement.style.scrollBehavior = 'auto';
                const yOffset = -80; // Adjust this value based on your header height
                const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                
                window.scrollTo({ top: y, behavior: 'auto' });
                // Re-enable smooth scrolling
                document.documentElement.style.scrollBehavior = '';
                // Update URL without adding to history
                window.history.pushState({}, '', href);
            }
        }, 100);
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled
                ? "bg-background/80 backdrop-blur-md border-b shadow-sm"
                : "bg-transparent"
                }`}
        >
            <nav className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <motion.a
                    href="#"
                    onClick={(e) => handleNavClick("#", e)}
                    className="text-xl font-bold bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent"
                    whileHover={{ scale: 1.05 }}
                >
                    PD
                </motion.a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-6">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={(e) => handleNavClick(item.href, e)}
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                            {item.name}
                        </a>
                    ))}

                    {/* Theme Toggle */}
                    <Button variant="ghost" size="icon" onClick={toggleTheme}>
                        {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-2">
                    <Button variant="ghost" size="icon" onClick={toggleTheme}>
                        {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </Button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden fixed top-16 left-0 right-0 bg-background/95 backdrop-blur-xl border-b shadow-2xl overflow-hidden z-40"
                        style={{ willChange: 'transform, opacity' }}
                    >
                        <div className="container mx-auto px-4 py-6 flex flex-col gap-2">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={(e) => handleNavClick(item.href, e)}
                                    className="text-lg font-medium text-foreground/80 hover:text-primary hover:bg-accent/50 transition-all rounded-lg px-4 py-3"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
