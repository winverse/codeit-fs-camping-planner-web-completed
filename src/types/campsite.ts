export interface CampsiteResponse {
  id: number;
  name: string;
  intro: string;
  region: string;
  city: string;
  address: string;
  industries: string[];
  facilities: string[];
  petAllowed: boolean;
  imageUrl: string | null;
}
