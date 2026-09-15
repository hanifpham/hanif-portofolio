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
    name: "NewJeans"
  },
  {
    id: "hearts2hearts",
    name: "Hearts2Hearts"
  }
];
