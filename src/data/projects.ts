export interface Project {
  slug: string;
  name: string;
  description: string;
  initial: string;
}

export const projects: Project[] = [
  {
    slug: "sixty6",
    name: "Sixty6",
    description: "An exercise habit tracker.",
    initial: "6",
  },
];
