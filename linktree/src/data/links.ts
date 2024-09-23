export interface Link {
  url: string;
  imageUrl: string;
  key: string;
}

export type Links = Link[];

export const links: Link[] = [
  {
    url: "https://app.syrto.ai/",
    imageUrl: "https://pivi-travel-map.b-cdn.net/LinkTree/Projects/Syrto.png",
    key: "syrto",
  },
  {
    url: "https://map.pivi.dev/",
    imageUrl:
      "https://pivi-travel-map.b-cdn.net/LinkTree/Projects/TravelMap.png",
    key: "travelMap",
  },
];
