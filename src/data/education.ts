export type EducationItem = {
  title: string;
  institution: string;
  type: "degree" | "certification";
  viewUrl?: string;
};

export const educationItems: EducationItem[] = [
  {
    title: "Bachelor of Science in Information Technology",
    institution: "University of Ghana",
    type: "degree",
    viewUrl:
      "https://drive.google.com/file/d/17kc0JSahXR_EY1HOJZCyvfIYNXu8Qa00/view?usp=sharing",
  },
  {
    title: "Advanced Google Data Analytics",
    institution: "Google Advanced Data Analytics Certificate (Google / Coursera)",
    type: "certification",
    viewUrl:
      "https://drive.google.com/file/d/1a0-PzON-U_Pa1DSIsFovEAOasuxBCbaC/view?usp=sharing",
  },
  {
    title: "Advanced WordPress Development",
    institution: "TemplateMonster",
    type: "certification",
    viewUrl:
      "https://drive.google.com/file/d/14Da3Q2wLkjPemZg28sq-D-aounHcLb6B/view?usp=sharing",
  },
  {
    title: "Python Programming",
    institution: "AlgoExpert",
    type: "certification",
    viewUrl: "https://certificate.algoexpert.io/PE-0dd0361f8b",
  },
];
