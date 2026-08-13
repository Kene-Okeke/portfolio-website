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
    slug: "garden-of-becoming",
    name: "The Garden of Becoming",
    type: "Digital Products E-Commerce Platform",
    status: "LIVE",
    stack: ["WordPress", "WooCommerce", "JavaScript", "Stripe", "PHP"],
    description:
      "Production e-commerce platform for e-books and audiobooks with Stripe payments, custom audiobook previews, and fully automated digital fulfillment.",
    liveUrl: "https://thegardenofbecoming.com/",
    caseStudy: {
      overview:
        "A production e-commerce platform for selling e-books and audiobooks, built with WordPress and WooCommerce. Integrated Stripe payments, custom audiobook preview player, and automated digital delivery workflows.",
      problem:
        "The client needed a self-hosted digital storefront to sell e-books and audiobooks directly — with secure payments, protected file delivery, and fulfillment that scales without manual order processing.",
      solution:
        "Built a WooCommerce-powered platform with Stripe integration, custom JavaScript for audiobook previews, automated purchase confirmation emails, expiring secure download links, and customer account functionality for managing purchases.",
      features: [
        "Integrated Stripe payments for secure digital product purchases",
        "Custom JavaScript audiobook preview player",
        "Automated purchase confirmation and email delivery",
        "Secure, expiring download links for purchased products",
        "Customer account functionality for purchase management",
        "Fully automated digital fulfillment",
      ],
      technology: [
        "WordPress",
        "WooCommerce",
        "Stripe",
        "JavaScript",
        "PHP",
      ],
      architecture:
        "WordPress CMS with WooCommerce handling product catalog, cart, and checkout. Stripe gateway processes payments. Custom JavaScript powers audiobook previews. WooCommerce digital download and email systems handle automated fulfillment.",
      challenges: [
        "Building a reliable audiobook preview experience without exposing full assets",
        "Configuring secure, expiring download links for digital products",
        "Ensuring end-to-end automation from payment to delivery",
      ],
      result:
        "Delivered a production platform that processed $10K+ in revenue within the first 90 days with zero manual fulfillment and 100% automated digital delivery.",
      screenshots: [],
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
