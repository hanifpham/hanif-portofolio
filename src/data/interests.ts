export interface KpopInterest {
  id: string;
  name: string;
  image?: string;
  note?: string;
}

// Placeholder status explicitly set for NewJeans and Hearts2Hearts
export const kpopInterests: KpopInterest[] = [
  {
    id: "newjeans",
    name: "NewJeans",
    image: "/images/about/kpop/newjeans.jpg",
  },
  {
    id: "hearts2hearts",
    name: "Hearts2Hearts",
    image: "/images/about/kpop/hearts2hearts.jpg",
  },
];
