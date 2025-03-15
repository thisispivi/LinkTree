export interface Project {
  url: string;
  imageUrl: string;
  key: string;
  pillColor: string;
  pillKey: string;
  githubUrl?: string;
}

export type Projects = Project[];

export const projects: Project[] = [
  {
    url: "https://app.syrto.ai/",
    imageUrl:
      "https://pivi-travel-map.b-cdn.net/LinkTree/Projects/Syrto_small.png",
    key: "syrto",
    pillColor: "#EB9486",
    pillKey: "work",
  },
  {
    url: "https://map.pivi.dev/",
    imageUrl:
      "https://pivi-travel-map.b-cdn.net/LinkTree/Projects/TravelMap_small.png",
    key: "travelMap",
    pillColor: "#F3DE8A",
    pillKey: "projects",
    githubUrl: "https://github.com/thisispivi/TravelMap",
  },
  {
    url: "https://tennisdle.pivi.dev/",
    imageUrl:
      "https://pivi-travel-map.b-cdn.net/LinkTree/Projects/Tennisdle_small.png",
    key: "tennisdle",
    pillColor: "#F3DE8A",
    pillKey: "projects",
    githubUrl: "https://github.com/thisispivi/Tennisdle",
  },
];
