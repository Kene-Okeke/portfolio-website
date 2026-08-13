export type ProjectStatus = "LIVE" | "BUILDING" | "COMPLETE";

export type CaseStudySection = {
  title: string;
  content: string | string[];
};

export type Project = {
  slug: string;
  name: string;
  type: string;
  status: ProjectStatus;
  stack: string[];
  description: string;
  liveUrl?: string;
  githubUrl?: string;
  caseStudy: {
    overview: string;
    problem: string;
    solution: string;
    features: string[];
    technology: string[];
    architecture: string;
    challenges: string[];
    result: string;
    screenshots: { src: string; alt: string }[];
  };
};

export const projects: Project[] = [
  {
    slug: "shop-eleven",
    name: "Shop Eleven",
    type: "Full-stack e-commerce web application",
    status: "LIVE",
    stack: ["Laravel", "PHP", "MySQL", "Blade", "Cloudinary"],
    description:
      "Full-stack e-commerce app with product browsing, cart, Cloudinary media management, and WhatsApp checkout.",
    liveUrl: "https://shopeleven.store",
    githubUrl: "https://github.com/Kene-Okeke/shop-eleven-store",
    caseStudy: {
      overview:
        "Shop Eleven is a production e-commerce application with product browsing, admin product management, client-side cart with localStorage, Cloudinary image handling, and WhatsApp checkout. Built with Laravel and MySQL for small operators who need a self-hosted store.",
      problem:
        "The project needed a self-hosted e-commerce experience that could handle product discovery, cart management, and order handoff without relying on a third-party marketplace. Inventory and media had to stay manageable, and the storefront had to work reliably across desktop and mobile.",
      solution:
        "Built a Laravel application with Blade templates and dynamic product listings backed by MySQL. Cart state is handled in JavaScript with localStorage. Product images are managed through Cloudinary, and checkout routes order details through WhatsApp so customers can confirm purchases in a familiar channel.",
      features: [
        "Product catalog with categories and detail pages",
        "Admin product management interface",
        "Client-side cart with localStorage — add, update, and remove",
        "Cloudinary integration for product images",
        "WhatsApp checkout for order confirmation",
        "Responsive desktop and mobile storefront",
      ],
      technology: [
        "Laravel",
        "PHP",
        "MySQL",
        "Blade templates",
        "JavaScript",
        "Cloudinary API",
        "WhatsApp checkout",
      ],
      architecture:
        "Monolithic Laravel MVC with Eloquent ORM and Blade for server-rendered views, client-side cart in JavaScript with localStorage, Cloudinary for media storage, and WhatsApp message generation for checkout handoff.",
      challenges: [
        "Designing client-side cart logic with localStorage that persists without requiring login",
        "Integrating Cloudinary for reliable product image delivery",
        "Building a practical WhatsApp checkout flow that compiles order details cleanly",
      ],
      result:
        "Delivered a working full-stack e-commerce application with storefront, admin tooling, media handling, and a practical WhatsApp-based checkout path in a maintainable Laravel structure.",
      screenshots: [
        {
          src: "/projects/shop-eleven/home.png",
          alt: "Shop Eleven homepage showing product grid",
        },
        {
          src: "/projects/shop-eleven/product.png",
          alt: "Shop Eleven product detail page",
        },
        {
          src: "/projects/shop-eleven/cart.png",
          alt: "Shop Eleven shopping cart view",
        },
      ],
    },
  },
  {
    slug: "tap-munn",
    name: "Tap Mun'n",
    type: "Web Application / Game",
    status: "BUILDING",
    stack: ["Next.js", "React", "Prisma", "PostgreSQL", "Tailwind CSS"],
    description:
      "Interactive web application with game mechanics, user profiles, and real-time scoring built with Next.js and PostgreSQL.",
    githubUrl: "https://github.com/Kene-Okeke/Tap-Munn",
    caseStudy: {
      overview:
        "Tap Mun'n is an interactive web-based game application that combines engaging gameplay with user account management and leaderboard functionality. Currently in active development using the Next.js App Router.",
      problem:
        "Creating a lightweight, browser-based game experience that tracks user progress, maintains scores, and scales without native app distribution.",
      solution:
        "Building a Next.js application with React for interactive UI, Prisma ORM connected to PostgreSQL for persistent user data and scores, and Tailwind CSS for a polished interface.",
      features: [
        "Interactive tap-based gameplay",
        "User registration and profile management",
        "Score tracking and leaderboard",
        "Responsive design for mobile and desktop",
        "Session persistence and game state management",
      ],
      technology: [
        "Next.js 14+",
        "React",
        "TypeScript",
        "Prisma",
        "PostgreSQL",
        "Tailwind CSS",
      ],
      architecture:
        "Full-stack Next.js with App Router, API routes for game logic and user operations, Prisma as the data layer, and PostgreSQL for relational storage of users, sessions, and scores.",
      challenges: [
        "Optimizing game loop performance within React's rendering model",
        "Designing a schema that supports both anonymous and registered play sessions",
        "Balancing game difficulty progression with user retention",
      ],
      result:
        "Core gameplay and user system architecture are in place. Ongoing development focuses on leaderboard features and mobile UX refinements.",
      screenshots: [
        {
          src: "/projects/tap-munn/gameplay.png",
          alt: "Tap Mun'n gameplay screen",
        },
        {
          src: "/projects/tap-munn/leaderboard.png",
          alt: "Tap Mun'n leaderboard view",
        },
      ],
    },
  },
  {
    slug: "adrf-group",
    name: "ADRF Group",
    type: "Website / UX Revamp",
    status: "LIVE",
    stack: ["WordPress", "Elementor", "JavaScript"],
    description:
      "Corporate website redesign with improved information architecture, modern visual identity, and responsive layouts.",
    liveUrl: "https://example.com/adrf-group",
    caseStudy: {
      overview:
        "ADRF Group required a website refresh to better communicate their services, improve navigation, and present a professional digital presence aligned with their brand.",
      problem:
        "The existing site had outdated layouts, poor mobile responsiveness, and content that was difficult for non-technical staff to update.",
      solution:
        "Rebuilt the site on WordPress with Elementor, creating custom page templates, a streamlined navigation structure, and a content management workflow the team could maintain independently.",
      features: [
        "Custom Elementor page templates",
        "Responsive design across all breakpoints",
        "Improved service and about page structure",
        "Contact forms with validation",
        "SEO-friendly page structure",
        "Easy content editing for non-developers",
      ],
      technology: [
        "WordPress",
        "Elementor Pro",
        "Custom CSS",
        "JavaScript",
        "PHP (theme hooks)",
      ],
      architecture:
        "WordPress CMS with a custom child theme and Elementor for page building. JavaScript handles interactive elements and form enhancements. Standard LAMP hosting deployment.",
      challenges: [
        "Migrating existing content without breaking URLs or SEO rankings",
        "Creating Elementor templates that remain consistent across pages",
        "Ensuring performance with Elementor's asset loading",
      ],
      result:
        "Delivered a modern, maintainable corporate website that improved user navigation and gave the client full control over content updates.",
      screenshots: [
        {
          src: "/projects/adrf-group/home.png",
          alt: "ADRF Group homepage",
        },
        {
          src: "/projects/adrf-group/services.png",
          alt: "ADRF Group services page",
        },
      ],
    },
  },
  {
    slug: "final-year-project",
    name: "Final Year Project",
    type: "Full-Stack Application",
    status: "COMPLETE",
    stack: ["Next.js", "FastAPI", "Prisma", "PostgreSQL", "Docker"],
    description:
      "Academic capstone project featuring a Next.js frontend, FastAPI backend, and containerized deployment with Docker.",
    githubUrl: "https://github.com/yourusername/final-year-project",
    caseStudy: {
      overview:
        "A full-stack capstone application developed as a final year project at the University of Ghana, demonstrating end-to-end software engineering from API design to containerized deployment.",
      problem:
        "The project needed to showcase proficiency across frontend development, API design, database modeling, and DevOps practices within an academic evaluation framework.",
      solution:
        "Built a decoupled architecture with Next.js handling the client interface, FastAPI providing a typed REST API, Prisma managing database access, and Docker Compose orchestrating local and deployment environments.",
      features: [
        "Next.js frontend with TypeScript",
        "FastAPI REST API with automatic documentation",
        "Prisma schema and PostgreSQL database",
        "User authentication and authorization",
        "Docker Compose for local development",
        "API integration with error handling",
      ],
      technology: [
        "Next.js",
        "TypeScript",
        "FastAPI",
        "Python",
        "Prisma",
        "PostgreSQL",
        "Docker",
        "Docker Compose",
      ],
      architecture:
        "Three-tier architecture: Next.js client communicates with FastAPI via REST endpoints. FastAPI handles business logic and delegates persistence to PostgreSQL through Prisma (on the Next.js side) and SQLAlchemy/direct queries (on the API side). Docker Compose links all services.",
      challenges: [
        "Coordinating data models between Prisma and FastAPI",
        "Setting up Docker networking for multi-service communication",
        "Meeting academic deadlines while maintaining code quality",
      ],
      result:
        "Successfully completed and demonstrated a production-grade full-stack application, earning project approval and demonstrating practical software engineering skills.",
      screenshots: [
        {
          src: "/projects/final-year-project/dashboard.png",
          alt: "Final year project dashboard",
        },
        {
          src: "/projects/final-year-project/api.png",
          alt: "FastAPI documentation interface",
        },
      ],
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
