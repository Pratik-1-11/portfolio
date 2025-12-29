import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

interface MobileFrameProps {
  images: string[];
  className?: string;
}

export function MobileFrame({ images, className }: MobileFrameProps) {
  return (
    <div className={cn("flex flex-wrap justify-center gap-6", className)}>
      {images.map((src, index) => (
        <div key={index} className="relative">
          {/* Mobile Frame */}
          <div className="relative mx-auto border-8 border-foreground/90 rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl overflow-hidden">
            {/* Status Bar */}
            <div className="absolute top-0 left-0 right-0 h-8 bg-foreground/90 flex items-center justify-between px-4 z-10">
              <span className="text-xs font-medium text-background">9:41</span>
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 border-2 border-background rounded-full" />
                <div className="w-1 h-1 bg-background rounded-full" />
              </div>
            </div>
            
            {/* Screen Content */}
            <div className="absolute inset-0 bg-background">
              <Image
                src={src}
                alt={`Sahara App Screen ${index + 1}`}
                fill
                className="object-cover"
                quality={80}
                priority
              />
            </div>
            
            {/* Home Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-foreground/30 rounded-full" />
          </div>
          
          {/* Shadow */}
          <div className="absolute -bottom-4 left-4 right-4 h-4 bg-foreground/10 rounded-full blur-md -z-10" />
        </div>
      ))}
    </div>
  );
}
