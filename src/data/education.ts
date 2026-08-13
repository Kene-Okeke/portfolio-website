export type EducationItem = {
  title: string;
  institution: string;
  type: "degree" | "certification";
};

export const educationItems: EducationItem[] = [
  {
    title: "Bachelor of Science in Information Technology",
    institution: "University of Ghana",
    type: "degree",
  },
  {
    title: "Advanced Google Data Analytics",
    institution: "Google Advanced Data Analytics Certificate (Google / Coursera)",
    type: "certification",
  },
  {
    title: "Advanced WordPress Development",
    institution: "TemplateMonster",
    type: "certification",
  },
  {
    title: "Python Programming",
    institution: "AlgoExpert",
    type: "certification",
  },
];
