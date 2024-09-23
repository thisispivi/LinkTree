export interface Link {
  url: string;
  imageUrl: string;
  titleKey: string;
  descriptionKey?: string;
}

export type Links = Link[];

export const links: Link[] = [
  {
    url: "https://app.syrto.ai/",
    imageUrl:
      "https://syrto-cdn-ecdzgmazd2c3a9hx.z02.azurefd.net/syrtocontainerprod/images/banner/bannerHome.png",
    titleKey: "links.syrto",
  },
  {
    url: "https://map.pivi.dev/",
    imageUrl:
      "https://pivi-travel-map.b-cdn.net/LinkTree/Projects/TravelMap.png",
    titleKey: "links.pivi",
  },
];
