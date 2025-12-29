"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { skillsData } from "@/data/skills";
import { Code, Database, Smartphone, Layout, Server, Cloud, Terminal, Cpu } from "lucide-react";
import Image from "next/image";

// Icon mapping for categories
const categoryIcons = {
  'Frontend Development': <Layout className="h-6 w-6 text-blue-500" />,
  'Backend Development': <Server className="h-6 w-6 text-green-500" />,
  'Mobile Development': <Smartphone className="h-6 w-6 text-purple-500" />,
  'Database & Storage': <Database className="h-6 w-6 text-yellow-500" />,
  'DevOps & Tools': <Cloud className="h-6 w-6 text-orange-500" />,
  'UI/UX & Design': <Cpu className="h-6 w-6 text-pink-500" />,
};

const SkillBadge = ({ name }: { name: string }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="px-3 py-1.5 bg-accent/50 dark:bg-accent/20 hover:bg-primary/10 hover:text-primary border border-border/50 hover:border-primary/20 rounded-md text-sm font-medium transition-colors cursor-default text-foreground dark:text-foreground/90"
  >
    {name}
  </motion.div>
);

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10" />

      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-foreground"
          >
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Expertise</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            My continuously expanding stack of technologies and tools.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillsData.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/20 transition-colors duration-300 text-card-foreground">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/5 border border-primary/10">
                      {categoryIcons[category.category as keyof typeof categoryIcons] || <Code className="h-6 w-6" />}
                    </div>
                    <CardTitle className="text-lg font-semibold text-foreground">{category.category}</CardTitle>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {category.tags?.map(tag => (
                      <span key={tag} className="text-xs text-foreground/80 dark:text-foreground/70 bg-muted/30 dark:bg-muted/50 px-2 py-0.5 rounded-full">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <SkillBadge key={skill.name} name={skill.name} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
