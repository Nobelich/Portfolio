export type Project = {
  slug: string;
  liveUrl: string;
  repoUrl: string;
  thumbnail: string;
  bgColor: string;
  session?: string;
};

export const projects: Project[] = [
  {
    slug: "monday-site",
    liveUrl: "https://nobelich.github.io/cars/",
    repoUrl: "https://github.com/Nobelich/cars",
    thumbnail: "/placeholder.svg",
    bgColor: "#212121",
    session: "Monday",
  },
  {
    slug: "wednesday-v2",
    liveUrl: "",
    repoUrl: "",
    thumbnail: "/placeholder.svg",
    bgColor: "#b6b2ad",
    session: "Wednesday",
  },
  {
    slug: "thursday-site",
    liveUrl: "",
    repoUrl: "",
    thumbnail: "/placeholder.svg",
    bgColor: "#e6e7e9",
    session: "Thursday",
  },
  {
    slug: "coming-soon",
    liveUrl: "",
    repoUrl: "",
    thumbnail: "/placeholder.svg",
    bgColor: "#d8deea",
  },
];

export function isProjectReady(project: Project): boolean {
  return Boolean(project.liveUrl && project.liveUrl !== "#");
}
