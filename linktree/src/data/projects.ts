export enum CategoryType {
  WORK = "work",
  PROJECTS = "projects",
  AI_GENERATED = "aiGenerated",
}

export const CategoryColor: Record<CategoryType, string> = {
  [CategoryType.WORK]: "#ee548c",
  [CategoryType.PROJECTS]: "#fc8b59",
  [CategoryType.AI_GENERATED]: "#4ade80",
};

export interface Project {
  url: string;
  imageUrl: string;
  key: string;
  pillKeys: CategoryType[];
  githubUrl?: string;
}

export type Projects = Project[];

export const projects: Project[] = [
  {
    url: "https://app.syrto.ai/",
    imageUrl:
      "https://pivi-travel-map.b-cdn.net/LinkTree/Projects/Syrto_small.png",
    key: "syrto",
    pillKeys: [CategoryType.WORK],
  },
  {
    url: "https://map.pivi.dev/",
    imageUrl:
      "https://pivi-travel-map.b-cdn.net/LinkTree/Projects/TravelMap_small.png",
    key: "travelMap",
    pillKeys: [CategoryType.PROJECTS],
    githubUrl: "https://github.com/thisispivi/TravelMap",
  },
  {
    url: "https://carsmanager.pivi.dev/",
    imageUrl:
      "https://pivi-travel-map.b-cdn.net/LinkTree/Projects/CarsManager_small.png",
    key: "carsManager",
    pillKeys: [CategoryType.PROJECTS, CategoryType.AI_GENERATED],
    githubUrl: "https://github.com/thisispivi/CarsManager",
  },
  {
    url: "https://tennisdle.pivi.dev/",
    imageUrl:
      "https://pivi-travel-map.b-cdn.net/LinkTree/Projects/Tennisdle_small.png",
    key: "tennisdle",
    pillKeys: [CategoryType.PROJECTS],
    githubUrl: "https://github.com/thisispivi/Tennisdle",
  },
  {
    url: "https://resume.pivi.dev/",
    imageUrl:
      "https://pivi-travel-map.b-cdn.net/LinkTree/Projects/Resume_small.png",
    key: "resume",
    pillKeys: [CategoryType.PROJECTS, CategoryType.AI_GENERATED],
    githubUrl: "https://github.com/thisispivi/Resume",
  },
  {
    url: "https://github.com/thisispivi/JellyfinSleepGuard",
    imageUrl:
      "https://pivi-travel-map.b-cdn.net/LinkTree/Projects/JellyfinSleepGuard_small.png",
    key: "jellyfinSleepGuard",
    pillKeys: [CategoryType.PROJECTS, CategoryType.AI_GENERATED],
    githubUrl: "https://github.com/thisispivi/JellyfinSleepGuard",
  },
  {
    url: "https://linktree.pivi.dev/",
    imageUrl:
      "https://pivi-travel-map.b-cdn.net/LinkTree/Projects/Linktree_small.png",
    key: "linktree",
    pillKeys: [CategoryType.PROJECTS],
    githubUrl: "https://github.com/thisispivi/LinkTree",
  },
];
