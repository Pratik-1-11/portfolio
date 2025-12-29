export interface Project {
    id: string;
    name: string;
    type: string;
    featured: boolean;
    description: string;
    problem: string;
    solution: string;
    role: string;
    techStack: string[];
    keyFeatures: Array<string | { title: string; description?: string }>;
    challenges?: Array<{ title: string; description: string }>;
    learningOutcomes?: string[];
    demoUrl?: string;
    githubUrl?: string;
    images?: string[];
}

export const projects: Project[] = [
    {
        id: "vishma-pos",
        name: "Vishma POS",
        type: "Mini Mart Inventory, Billing & POS System",
        featured: true,
        images: [
            "/images/Vishma/Screenshot (8).png",
            "/images/Vishma/Screenshot (9).png",
            "/images/Vishma/Screenshot (10).png",
            "/images/Vishma/Screenshot (11).png",
            "/images/Vishma/Screenshot (12).png",
            "/images/Vishma/Screenshot (13).png",
            "/images/Vishma/Screenshot (14).png",
            "/images/Vishma/Screenshot (15).png",
            "/images/Vishma/Screenshot (16).png",
            "/images/Vishma/Screenshot (17).png",
            "/images/Vishma/Screenshot (18).png",
            "/images/Vishma/Screenshot (19).png"
        ],
        description:
            "A modern POS system with real-time inventory tracking, fast billing workflows, and secure backend APIs built for mini-mart retail operations.",
        problem: "Mini marts struggle with manual billing and inaccurate inventory tracking, leading to stock discrepancies and slow checkout experiences.",
        solution:
            "Built a modern POS system with real-time inventory tracking, fast billing workflows, and secure backend APIs to streamline retail operations.",
        role: "Full-Stack Web Developer",
        techStack: ["React", "ShadCN UI", "Tailwind CSS", "Node.js", "Express", "SQL"],
        keyFeatures: [
            "Product and stock management with real-time updates",
            "Real-time inventory deduction during sales",
            "Fast POS billing interface optimized for quick checkout",
            "JWT-based authentication and authorization",
            "Sales and inventory reporting dashboard",
            "Multi-user support with role-based access control",
        ],
        learningOutcomes: [
            "Deep understanding of retail POS workflows and business logic",
            "Inventory and billing system architecture",
            "Frontend performance optimization for real-time updates",
            "Backend API design for high-frequency transactions",
            "State management for complex business workflows",
        ],
    },
    {
        id: "sahara",
        name: "Sahara – Disaster Awareness & Alert System",
        type: "Mobile & Backend Application",
        featured: true,
        images: [
            "/images/Sahara/a.png",
            "/images/Sahara/b.png",
            "/images/Sahara/c.png",
            "/images/Sahara/d.png",
            "/images/Sahara/e.png",
            "/images/Sahara/f.png",
            "/images/Sahara/g.png",
            "/images/Sahara/h.png",
            "/images/Sahara/i.png",
            "/images/Sahara/j.png",
            "/images/Sahara/k.png"
        ],
        description:
            "A mobile-first disaster reporting and community alert system for real-time incident tracking and notifications.",
        problem:
            "Communities lacked a centralized platform for disaster reporting and real-time alerts, resulting in delayed responses.",
        solution:
            "Built a mobile-first system for real-time incident reporting and community alerts with push notifications.",
        role: "Full-Stack & React Native Developer",
        techStack: ["React Native", "Node.js", "Express", "SQL"],
        keyFeatures: [
            "Real-time incident reporting with location tracking",
            "Push notifications for community alerts",
            "Accessible mobile UI for quick reporting",
            "Backend API for managing incidents and notifications",
            "Map integration for visualizing incident locations",
        ],
        learningOutcomes: [
            "Real-time systems architecture and implementation",
            "Mobile-backend integration patterns",
            "Push notification implementation",
            "Public-safety focused UX design",
        ],
    },
    {
        id: "book-ecommerce",
        name: "Book Ecommerce Platform",
        type: "Ecommerce Web Application",
        featured: true,
        images: [
            "/images/Book/Screenshot (27).png",
            "/images/Book/Screenshot (28).png"
        ],
        description:
            "A full-featured ecommerce system for managing book sales, inventory, and customer orders.",
        problem:
            "Need for an online platform to manage book sales and inventory with seamless customer experience.",
        solution:
            "Built a full-featured ecommerce system with product management, shopping cart, and backend APIs.",
        role: "Full-Stack Developer",
        techStack: ["PHP", "MySQL", "React"],
        keyFeatures: [
            "Product search and filtering by category/author",
            "Shopping cart and checkout workflow",
            "Inventory and order management system",
            "Customer account management",
            "Payment integration",
        ],
        learningOutcomes: [
            "Ecommerce workflow design and implementation",
            "API-driven architecture patterns",
            "Database-backed inventory systems",
            "Integration of frontend and backend systems",
        ],
    },
    {
        id: "gym-management",
        name: "Gym Management System",
        type: "Web-Based ERP System",
        featured: false,
        images: [
            "/images/Gym/Screenshot (22).png",
            "/images/Gym/Screenshot (23).png",
            "/images/Gym/Screenshot (24).png",
            "/images/Gym/Screenshot (25).png"
        ],
        description:
            "An ERP-style system for managing gym memberships, billing, schedules, and member tracking.",
        problem:
            "Gyms relied on manual spreadsheets for member management and payment tracking, causing inefficiencies and errors.",
        solution:
            "Developed an ERP-style system for managing memberships, billing, and schedules with automated workflows and reporting.",
        role: "Full-Stack Developer",
        techStack: ["PHP", "MySQL", "Bootstrap", "Tailwind CSS"],
        keyFeatures: [
            "Member registration and profile management",
            "Billing and payment tracking with receipt generation",
            "Admin and user role-based access control",
            "Responsive dashboard for managing operations",
            "Membership plan management and renewal tracking",
        ],
        learningOutcomes: [
            "Understanding of ERP system concepts and workflows",
            "Relational database design and optimization",
            "Role-based access control implementation",
            "Building scalable PHP applications",
        ],
    },
    {
        id: "jhandi-burja",
        name: "Jhandi Burja",
        type: "Mobile Game Application",
        featured: false,
        images: [
            "/images/Jhandi Burja/Screenshot (20).png",
            "/images/Jhandi Burja/Screenshot (21).png"
        ],
        description:
            "An interactive, responsive web-based version of the traditional Nepali dice game with betting mechanics.",
        problem:
            "Traditional Nepali dice games lacked modern digital presence, limiting accessibility for younger audiences.",
        solution:
            "Created an interactive, responsive web-based version of the game with accurate game logic and betting mechanics.",
        role: "Frontend Developer",
        techStack: ["HTML", "CSS", "JavaScript"],
        keyFeatures: [
            "Accurate game logic implementation",
            "Betting and winnings calculation system",
            "Mobile-friendly responsive UI",
            "Smooth animations and transitions",
        ],
        learningOutcomes: [
            "Game logic and state management",
            "Frontend interactivity with vanilla JavaScript",
            "Responsive design principles",
        ],
    },
];
