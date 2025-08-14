export type Post = { slug: string; title: string; date: string; image: string; excerpt?: string };
export const posts: Post[] = [
  { slug: "Soil Mapping", title: "Digital soil mapping", date: "2026-10-02", image: "/images/post1.jpg" },
  { slug: "Crop yield", title: "Yield prediction using APSIM", date: "2027-06-18", image: "/images/post2.jpg" },
  { slug: "Paris visit", title: "Personal visity to Paris", date: "2024-11-05", image: "/images/post3.jpg" },
];
