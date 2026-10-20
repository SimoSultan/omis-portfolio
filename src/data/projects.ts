export interface Project {
  slug: string;
  name: string;
  description: string;
  initial: string;
}

export const projects: Project[] = [
  {
    slug: "sixtysix",
    name: "SixtySix",
    description: "An exercise habit tracker.",
    initial: "6",
  },
];
