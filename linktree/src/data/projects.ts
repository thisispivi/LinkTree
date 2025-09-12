export interface Project {
  url: string;
  imageUrl: string;
  key: string;
  pillColor: string;
  pillKey: string;
  githubUrl?: string;
  tags?: string[];
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
    tags: [
      "azure",
      "docker",
      "express",
      "passport",
      "redis",
      "sequelize",
      "socket.io",
      "stripe",
      "react",
      "typescript",
      "vite",
      "plotly",
      "redux",
      "python",
      "fastapi",
      "pandas",
      "polars",
      "axios",
      "ejs",
      "npm",
      "nodejs",
      "eslint",
      "prettier",
      "sass",
      "react-router",
      "chart.js",
      "formik",
      "i18next",
      "scikit-learn",
      "tensorflow",
      "keras",
    ],
  },
  {
    url: "https://map.pivi.dev/",
    imageUrl:
      "https://pivi-travel-map.b-cdn.net/LinkTree/Projects/TravelMap_small.png",
    key: "travelMap",
    pillColor: "#fc8b59",
    pillKey: "projects",
    githubUrl: "https://github.com/thisispivi/TravelMap",
    tags: [
      "react",
      "python",
      "typescript",
      "vite",
      "sass",
      "pnpm",
      "nodejs",
      "eslint",
      "prettier",
      "react-router",
      "react-simple-maps",
      "bunnycdn",
      "apexcharts",
      "i18next",
      "pillow",
    ],
  },
  {
    url: "https://tennisdle.pivi.dev/",
    imageUrl:
      "https://pivi-travel-map.b-cdn.net/LinkTree/Projects/Tennisdle_small.png",
    key: "tennisdle",
    pillColor: "#fc8b59",
    pillKey: "projects",
    githubUrl: "https://github.com/thisispivi/Tennisdle",
    tags: [
      "vue",
      "python",
      "typescript",
      "vite",
      "redux",
      "sass",
      "pnpm",
      "nodejs",
      "eslint",
      "prettier",
      "i18next",
      "pandas",
    ],
  },
  {
    url: "https://linktree.pivi.dev/",
    imageUrl:
      "https://pivi-travel-map.b-cdn.net/LinkTree/Projects/Linktree_small.png",
    key: "linktree",
    pillColor: "#fc8b59",
    pillKey: "projects",
    githubUrl: "https://github.com/thisispivi/LinkTree",
    tags: [
      "vue",
      "typescript",
      "vite",
      "redux",
      "sass",
      "pnpm",
      "nodejs",
      "eslint",
      "prettier",
      "i18next",
      "gsap",
    ],
  },
];
