export type Industry = "일반야영장" | "자동차야영장" | "글램핑" | "카라반";

export type CampsiteResponse = {
  id: number;
  name: string;
  intro: string;
  region: string;
  city: string;
  address: string;
  industries: Industry[];
  facilities: string[];
  petAllowed: boolean;
  imageUrl: string | null;
};
