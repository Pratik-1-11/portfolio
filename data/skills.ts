export interface SkillItem {
  name: string;
  level: number; // 0-100
  icon?: string;
}

export interface SkillCategory {
  category: string;
  skills: SkillItem[];
  tags?: string[];
  icon?: string;
}

export const skillsData: SkillCategory[] = [
  {
    category: "Frontend Development",
    tags: ["web", "ui", "ux", "responsive"],
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 88 },
      { name: "JavaScript", level: 92 },
      { name: "Tailwind CSS", level: 88 },
      { name: "ShadCN UI", level: 85 },
      { name: "HTML5/CSS3", level: 95 },
      { name: "Responsive Design", level: 90 },
    ],
  },
  {
    category: "Backend Development",
    tags: ["server", "api", "microservices"],
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 85 },
      { name: "RESTful APIs", level: 90 },
      { name: "GraphQL", level: 78 },
      { name: "Authentication", level: 85 },
      { name: "Serverless", level: 75 },
    ],
  },
  {
    category: "Mobile Development",
    tags: ["cross-platform", "ios", "android"],
    skills: [
      { name: "React Native", level: 82 },
      { name: "Expo", level: 78 },
      { name: "Mobile UI/UX", level: 85 },
      { name: "App Store Deployment", level: 75 },
    ],
  },
  {
    category: "Database & Storage",
    tags: ["data", "nosql", "sql", "caching"],
    skills: [
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "PostgreSQL", level: 78 },
      { name: "Firebase", level: 82 },
      { name: "Redis", level: 75 },
    ],
  },
  {
    category: "DevOps & Tools",
    tags: ["cloud", "ci/cd", "automation"],
    skills: [
      { name: "Docker", level: 80 },
      { name: "Git & GitHub", level: 90 },
      { name: "CI/CD Pipelines", level: 78 },
      { name: "AWS", level: 72 },
      { name: "Vercel", level: 85 },
    ],
  },
  {
    category: "UI/UX & Design",
    tags: ["design", "prototyping", "accessibility"],
    skills: [
      { name: "Figma", level: 85 },
      { name: "Adobe XD", level: 78 },
      { name: "User Research", level: 75 },
      { name: "Prototyping", level: 80 },
      { name: "Accessibility", level: 82 },
    ],
  },
];
