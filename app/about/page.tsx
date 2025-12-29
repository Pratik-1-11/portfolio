import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Pratik Devkota | Full-Stack Developer from Palungtar, Nepal',
  description: 'Learn about Pratik Devkota, a skilled Full-Stack and React Native Developer based in Palungtar, Nepal. Specializing in modern web and mobile application development.',
  keywords: [
    'Pratik Devkota Palungtar',
    'Software Engineer Nepal',
    'Web Developer Palungtar',
    'IT Specialist Palungtar Municipality',
    'React Native Developer Nepal'
  ]
};

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
          About Me
        </h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Pratik Devkota</h2>
            <p className="text-muted-foreground mb-6">
              Full-Stack & React Native Developer | Palungtar, Nepal
            </p>
            <div className="prose dark:prose-invert">
              <p className="mb-4">
                Hello! I'm Pratik Devkota, a passionate Full-Stack Developer based in Palungtar, Nepal. 
                With expertise in modern web technologies and mobile app development, I specialize in 
                creating efficient, scalable, and user-friendly applications.
              </p>
              <p className="mb-4">
                As an IT specialist and software engineer, I've had the opportunity to work on various 
                projects ranging from enterprise solutions to innovative mobile applications. My goal is 
                to leverage technology to solve real-world problems and deliver exceptional digital experiences.
              </p>
              <p className="mb-6">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                projects, or helping local businesses in Palungtar establish their online presence.
              </p>
            </div>
            
            <div className="mt-8 space-y-4">
              <h3 className="text-lg font-semibold">Technical Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'React', 'Next.js', 'React Native', 'Node.js', 'TypeScript',
                  'Tailwind CSS', 'MongoDB', 'PostgreSQL', 'REST APIs', 'GraphQL'
                ].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-muted rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="relative aspect-square rounded-2xl overflow-hidden border border-border">
            {/* Replace with your actual image */}
            <div className="w-full h-full bg-muted flex items-center justify-center">
              <span className="text-muted-foreground">Your Photo</span>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">Why Work With Me</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Local Expertise',
                description: 'Understanding of local business needs in Palungtar and surrounding areas.'
              },
              {
                title: 'Full-Stack Skills',
                description: 'End-to-end development from concept to deployment.'
              },
              {
                title: 'Mobile-First',
                description: 'Specialized in building responsive and performant mobile applications.'
              },
              {
                title: 'Quality Code',
                description: 'Clean, maintainable, and well-documented code following best practices.'
              },
              {
                title: 'Problem Solver',
                description: 'Analytical approach to finding efficient solutions.'
              },
              {
                title: 'Continuous Learning',
                description: 'Staying updated with the latest technologies and industry trends.'
              }
            ].map((item, index) => (
              <div key={index} className="p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors">
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
