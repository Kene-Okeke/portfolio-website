export const siteConfig = {
  name: "Kene Okeke",
  title: "Full-Stack Web Developer",
  role: "FULL-STACK DEVELOPER",
  location: "Ghana",
  tagline:
    "Building practical, production-ready web applications across the stack.",
  description:
    "Full-stack web developer building modern web applications with Laravel, PHP, React and Next.js.",
  url: "https://keneokeke.dev",
  available: true,
  currentFocus: ["Laravel", "React", "Next.js", "PostgreSQL"],
  specialization: [
    "Web Applications",
    "E-commerce",
    "APIs",
    "Responsive Interfaces",
  ],
  metrics: {
    projects: "4+",
    coreStack: "10+",
    focus: "FULL-STACK",
    status: "AVAILABLE",
  },
} as const;

export const navItems = [
  { label: "OVERVIEW", href: "#overview" },
  { label: "PROJECTS", href: "#projects" },
  { label: "STACK", href: "#stack" },
  { label: "ABOUT", href: "#about" },
  { label: "CONTACT", href: "#contact" },
] as const;
