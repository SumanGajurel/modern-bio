export type Post = { slug: string; title: string; date: string; image: string; excerpt?: string };
export const posts: Post[] = [
  { slug: "mapping-sodicity-3d", title: "Mapping sodicity in 3D", date: "2024-10-02", image: "/images/post1.jpg" },
  { slug: "yield-from-indvi", title: "Yield from iNDVI—what works", date: "2024-06-18", image: "/images/post2.jpg" },
  { slug: "better-p-in-apsim", title: "Better P initialisation in APSIM", date: "2023-11-05", image: "/images/post3.jpg" },
];
