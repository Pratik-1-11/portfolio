import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tech Insights by Pratik Devkota | Web & Mobile Development Blog',
  description: 'Explore articles and tutorials on web development, mobile apps, and technology trends from a Palungtar-based developer.',
};

// This would typically come from a CMS or MDX files
const blogPosts = [
  {
    slug: 'why-choose-nextjs-for-your-next-project',
    title: 'Why Choose Next.js for Your Next Project in Nepal',
    excerpt: 'Exploring the benefits of Next.js for Nepali businesses and developers looking to build fast, SEO-friendly web applications.',
    date: '2025-01-15',
    tags: ['Next.js', 'Web Development', 'Nepal Tech']
  },
  {
    slug: 'mobile-app-development-nepal',
    title: 'Mobile App Development in Nepal: Trends and Opportunities',
    excerpt: 'An overview of the growing mobile app development scene in Nepal and how local businesses can benefit.',
    date: '2024-12-20',
    tags: ['Mobile Apps', 'React Native', 'Nepal Tech']
  },
  // Add more blog posts here
];

export default function BlogPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
          Tech Insights
        </h1>
        
        <p className="text-xl text-muted-foreground mb-12">
          Sharing knowledge and insights about web development, mobile apps, and technology trends from Palungtar, Nepal.
        </p>
        
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <article key={post.slug} className="group">
              <Link href={`/blog/${post.slug}`}>
                <div className="p-6 rounded-lg border border-border hover:border-primary/50 transition-colors">
                  <h2 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <time className="text-sm text-muted-foreground">
                    {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </time>
                  <p className="mt-3 text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 text-xs bg-muted rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
