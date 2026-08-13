export type StackGroup = {
  category: string;
  items: string[];
};

export const stackGroups: StackGroup[] = [
  {
    category: "LANGUAGES",
    items: ["PHP", "JavaScript", "HTML", "CSS"],
  },
  {
    category: "FRAMEWORKS",
    items: ["Laravel", "React", "Next.js"],
  },
  {
    category: "DATABASES",
    items: ["MySQL", "PostgreSQL", "Prisma"],
  },
  {
    category: "TOOLS",
    items: ["Git", "Docker", "VS Code"],
  },
  {
    category: "CMS",
    items: ["WordPress", "WooCommerce"],
  },
];
