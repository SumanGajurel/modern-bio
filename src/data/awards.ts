// Simple shape you can extend any time
export type Award = {
  title: string;
  issuer: string;     // organization / conference / funder
  date: string;       // e.g., "2024", "2023-09"
  description?: string;
  link?: string;      // certificate, announcement, press
  tags?: string[];    // e.g., ["Grant", "Paper award"]
  logo?: string;      // optional: /images/awards/<file>.png
};

const awards: Award[] = [
  {
    title: "UniSQ International Fee research scholarship",
    issuer: "University of Southern Queensland",
    date: "2021",
    description: "ML use to predict soil properties",
    tags: ["PhD", "Research Funding"],
    link: "#"
  },
  {
    title: "UniSQ International stipend scholarship",
    issuer: "Universtiy of Southern Queensland",
    date: "2021",
    description:
      "Scholarship given to the PhD student during the period of study",
    tags: ["Stipend Award"]
  },
];

export default awards;
