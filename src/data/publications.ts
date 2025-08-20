export type Publication = {
  title: string;
  authors: string;     // "Lai YC, Pringle MJ, …"
  venue: string;       // "Geoderma"
  year: string;        // "2019"
  link?: string;       // DOI or URL
  tags?: string[];     // ["Soil mapping","IAK"]
};

const publications: Publication[] = [
  {
    title: "A cost-effective approach to estimate plant available water capacity",
    authors: "S. Gajurel, et al.",
    venue: "Geoderma",
    year: "2024",
    link: "https://www.sciencedirect.com/science/article/pii/S0016706124000235",
    tags: ["APSIM","Inverse Modelling", "PAWC"]
  },
  {
    title: "Future crop yield prediction",
    authors: "S. Gajurel, et al.",
    venue: "Int. J. Appl. Earth Obs. Geoinf.",
    year: "2018",
    link: "#",
    tags: ["Remote sensing","Yield modeling"]
  }
];

export default publications;
