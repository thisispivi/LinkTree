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
    pillColor: "#ee548c",
    pillKey: "work",
  },
  {
    url: "https://map.pivi.dev/",
    imageUrl:
      "https://pivi-travel-map.b-cdn.net/LinkTree/Projects/TravelMap_small.png",
    key: "travelMap",
    pillColor: "#fc8b59",
    pillKey: "projects",
    githubUrl: "https://github.com/thisispivi/TravelMap",
  },
  {
    url: "https://tennisdle.pivi.dev/",
    imageUrl:
      "https://pivi-travel-map.b-cdn.net/LinkTree/Projects/Tennisdle_small.png",
    key: "tennisdle",
    pillColor: "#fc8b59",
    pillKey: "projects",
    githubUrl: "https://github.com/thisispivi/Tennisdle",
  },
  // {
  //   url: "https://resume.pivi.dev/",
  //   imageUrl:
  //     "https://pivi-travel-map.b-cdn.net/LinkTree/Projects/Resume_small.png",
  //   key: "resume",
  //   pillColor: "#fc8b59",
  //   pillKey: "projects",
  //   githubUrl: "https://github.com/thisispivi/Resume",
  // },
  {
    url: "https://linktree.pivi.dev/",
    imageUrl:
      "https://pivi-travel-map.b-cdn.net/LinkTree/Projects/Linktree_small.png",
    key: "linktree",
    pillColor: "#fc8b59",
    pillKey: "projects",
    githubUrl: "https://github.com/thisispivi/LinkTree",
  },
];
