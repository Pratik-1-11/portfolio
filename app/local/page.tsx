import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'IT Services in Palungtar | Web & Mobile App Development',
  description: 'Professional IT services and custom software development in Palungtar. Website development, mobile apps, and digital solutions for local businesses.',
  keywords: [
    'IT Services Palungtar',
    'Website Development Palungtar',
    'Palungtar Web Developer',
    'Software Company Palungtar',
    'IT Solutions Gorkha',
    'Local Web Developer',
    'Palungtar Tech Services'
  ]
};

export default function LocalServicesPage() {
  const services = [
    {
      title: 'Website Development',
      description: 'Professional websites for local businesses to establish their online presence.',
      icon: '🌐'
    },
    {
      title: 'Mobile Apps',
      description: 'Custom mobile applications for Android and iOS to grow your business.',
      icon: '📱'
    },
    {
      title: 'E-commerce Solutions',
      description: 'Online stores to help local businesses sell products and services.',
      icon: '🛒'
    },
    {
      title: 'Business Automation',
      description: 'Streamline your business processes with custom software solutions.',
      icon: '⚙️'
    },
    {
      title: 'Digital Marketing',
      description: 'Increase your online visibility and reach more customers.',
      icon: '📈'
    },
    {
      title: 'IT Consulting',
      description: 'Expert advice on technology solutions for your business needs.',
      icon: '💡'
    }
  ];

  return (
    <main className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
          IT Services in Palungtar
        </h1>
        
        <p className="text-xl text-muted-foreground mb-12">
          Professional technology solutions for businesses in Palungtar and surrounding areas.
        </p>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Services for Local Businesses</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div key={index} className="p-6 border border-border rounded-lg hover:border-primary/50 transition-colors">
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Local IT Services?</h2>
          <div className="prose dark:prose-invert">
            <ul className="space-y-2">
              <li>• <strong>Local Understanding:</strong> Familiar with the specific needs of Palungtar businesses</li>
              <li>• <strong>Quick Response:</strong> Available for in-person meetings and support</li>
              <li>• <strong>Personalized Service:</strong> Custom solutions tailored to your business</li>
              <li>• <strong>Community Focus:</strong> Supporting local economic growth</li>
              <li>• <strong>Cost-Effective:</strong> Competitive pricing for local businesses</li>
            </ul>
            
            <div className="mt-8 p-6 bg-muted/30 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Get in Touch</h3>
              <p className="mb-4">Ready to take your business to the next level? Contact me for a free consultation.</p>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                Contact Me
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">Serving Palungtar and Beyond</h2>
          <div className="prose dark:prose-invert">
            <p>
              Based in Palungtar, I provide IT services to businesses throughout the region, including Gorkha and surrounding areas. 
              Whether you're a small business looking to establish an online presence or need custom software solutions, 
              I'm here to help you leverage technology for growth.
            </p>
            <p className="mt-4">
              <strong>Areas served:</strong> Palungtar Municipality, Gorkha, and nearby regions.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
