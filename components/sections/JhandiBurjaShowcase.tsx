'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const screenshots = [
  {
    id: 1,
    src: '/images/Jhandi Burja/Screenshot (20).png',
    alt: 'Jhandi Burja Game Screen 1',
    description: 'Game interface showing the main board and controls'
  },
  {
    id: 2,
    src: '/images/Jhandi Burja/Screenshot (21).png',
    alt: 'Jhandi Burja Game Screen 2',
    description: 'Additional game interface with different view'
  },
  // Add more screenshots here as you add them to the folder
  // Follow the same pattern:
  // { 
  //   id: 3, 
  //   src: '/images/Jhandi Burja/your-filename.png',
  //   alt: 'Description of the screen',
  //   description: 'Detailed description of what the screen shows'
  // },
];

export function JhandiBurjaShowcase() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent">
            Jhandi Burja App
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the traditional Nepali board game with a modern twist. Play with friends and climb the leaderboard!
          </p>
          <a
            href="https://jhandiburja.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
          >
            Visit App
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {screenshots.map((screenshot) => (
            <motion.div
              key={screenshot.id}
              className="group relative overflow-hidden rounded-xl border border-border/50 bg-card shadow-sm hover:shadow-lg transition-shadow"
              whileHover={{ y: -5 }}
              onClick={() => setSelectedImage(screenshot.src)}
            >
              <div className="aspect-[9/16] relative">
                <Image
                  src={screenshot.src}
                  alt={screenshot.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform">
                    <h3 className="text-white font-medium">{screenshot.alt}</h3>
                    <p className="text-muted-foreground text-sm">Click to view larger</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full max-h-[90vh]">
              <Image
                src={selectedImage}
                alt="Enlarged view"
                width={1200}
                height={2000}
                className="w-full h-auto max-h-[90vh] object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 75vw"
                priority
              />
              <button
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
