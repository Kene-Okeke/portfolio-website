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
    type: "Corporate Web Experience & UX Revamp",
    status: "LIVE",
    stack: ["WordPress", "Elementor Pro", "JavaScript", "PHP", "Custom CSS"],
    description:
      "Production corporate website revamp combining custom WordPress development, Elementor architecture, JavaScript interactions, responsive UX engineering, and improved content architecture.",
    liveUrl: "https://adrf.com/",
    caseStudy: {
      overview:
        "ADRF Group required a complete digital experience refresh to modernize its corporate presence, improve information architecture, and create a responsive website that communicates its services more effectively.",
      problem:
        "The existing experience had outdated layouts, inconsistent responsive behavior, and a content structure that made important information difficult to discover and maintain.",
      solution:
        "Rebuilt the website on WordPress using Elementor Pro, custom CSS, JavaScript interactions, and PHP theme-level customization. The redesign focused on restructuring content, improving navigation, creating reusable page patterns, and delivering a responsive experience across device sizes.",
      features: [
        "Custom Elementor Pro page architecture",
        "Custom JavaScript interactions and UI enhancements",
        "Responsive layouts across desktop, tablet, and mobile",
        "Improved information architecture and navigation",
        "Custom CSS styling and component refinement",
        "Contact forms with validation",
        "SEO-friendly content structure",
        "Maintainable content editing workflow",
      ],
      technology: [
        "WordPress",
        "Elementor Pro",
        "JavaScript",
        "Custom CSS",
        "PHP",
        "WordPress Theme Hooks",
      ],
      architecture:
        "WordPress CMS using Elementor Pro for page composition, custom CSS for visual and responsive behavior, JavaScript for interactive functionality and UI enhancements, and PHP theme hooks for deeper WordPress customization.",
      challenges: [
        "Reworking the existing information architecture without disrupting the site's content hierarchy",
        "Building reusable Elementor structures while maintaining consistent responsive behavior",
        "Implementing custom JavaScript interactions alongside Elementor's frontend system",
        "Maintaining performance while working within a heavily visual WordPress environment",
      ],
      result:
        "Delivered a significantly modernized corporate web experience with improved navigation, responsive behavior, custom interactions, and a maintainable WordPress architecture.",
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
    type: "Digital Publishing & Content Delivery Platform",
    status: "LIVE",
    stack: ["WordPress", "WooCommerce", "JavaScript", "PHP", "Stripe"],
    description:
      "Production digital publishing platform for e-books and audiobooks, featuring custom JavaScript audio experiences, Stripe payments, protected content delivery, customer accounts, and automated fulfillment.",
    liveUrl: "https://thegardenofbecoming.com/",
    caseStudy: {
      overview:
        "A production digital publishing and content delivery platform for e-books and audiobooks. Extended WordPress and WooCommerce with Stripe payments, custom JavaScript audio previews, protected digital asset delivery, customer accounts, and automated fulfillment workflows.",
      problem:
        "The client needed a direct-to-customer publishing platform capable of securely selling and delivering digital books and audiobooks while automating payment processing, content delivery, customer access, and post-purchase communication.",
      solution:
        "Built a WooCommerce-powered publishing platform with Stripe payment processing, custom JavaScript audiobook previews, automated confirmation and delivery emails, protected expiring download links, and customer account functionality for managing purchased content.",
      features: [
        "Integrated Stripe payment processing",
        "Custom JavaScript audiobook preview player",
        "Automated purchase confirmation and delivery emails",
        "Protected expiring download links",
        "Customer account and digital library functionality",
        "End-to-end automated fulfillment",
      ],
      technology: [
        "WordPress",
        "WooCommerce",
        "Stripe",
        "JavaScript",
        "PHP",
        "CSS",
      ],
      architecture:
        "WordPress and WooCommerce provide the application and commerce foundation, with Stripe handling payment processing, custom JavaScript powering the audiobook preview experience, and WooCommerce digital delivery and email workflows coordinating protected post-purchase content access.",
      challenges: [
        "Building a controlled audiobook preview experience without exposing full audio assets",
        "Implementing protected, expiring access to purchased digital files",
        "Connecting payment completion to a reliable automated delivery workflow",
        "Creating a customer access flow for managing previously purchased content",
      ],
      result:
        "Delivered a production digital publishing platform that processed $10K+ in revenue within the first 90 days, with zero manual fulfillment and fully automated digital delivery.",
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
