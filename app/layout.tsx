import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React, { Suspense } from 'react';
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import GoogleAnalytics from "@/components/analytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Simple loading component
function Loading() {
  return <div>Loading...</div>;
}

export const metadata: Metadata = {
  title: "Pratik Devkota | Full-Stack & React Native Developer from Palungtar, Nepal",
  description: "Professional Full-Stack Developer and React Native specialist from Palungtar, Nepal. Expertise in building scalable web applications, mobile apps, and custom software solutions. Available for freelance and full-time opportunities.",
  keywords: [
    "Pratik Devkota",
    "pratikdevkota",
    "Palungtar Developer",
    "Software Engineer in Palungtar",
    "Full-Stack Developer Nepal",
    "React Native Developer Nepal",
    "Web Developer from Palungtar",
    "IT Specialist Palungtar Municipality",
    "Freelance Developer Nepal",
    "Next.js Developer",
    "Node.js Expert",
    "TypeScript Developer",
    "Web Application Developer",
    "Mobile App Developer Nepal",
    "Hire Developer Palungtar"
  ],
  authors: [{ name: "Pratik Devkota" }],
  openGraph: {
    title: "Pratik Devkota | Full-Stack Web & React Native Developer",
    description:
      "Building complete systems — from UI and mobile apps to backend APIs and databases",
    type: "website",
    locale: "en_US",
    siteName: "Pratik Devkota Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pratik Devkota | Full-Stack Web & React Native Developer",
    description:
      "Building complete systems — from UI and mobile apps to backend APIs and databases",
  },
};

// This component prevents flash of light theme by setting the theme before the page renders
function ThemeScript() {
  const themeScript = `
    (function() {
      const savedTheme = localStorage.getItem('theme');
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const shouldUseDark = savedTheme ? savedTheme === 'dark' : systemPrefersDark || true;
      
      if (shouldUseDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    })();
  `;

  return <script dangerouslySetInnerHTML={{ __html: themeScript }} />;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <ThemeScript />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground`}>
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Suspense fallback={<Loading />}>
              {children}
            </Suspense>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
