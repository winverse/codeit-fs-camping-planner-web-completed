export type TripStatus = "wish" | "booked" | "done" | "canceled";

export interface TripResponse {
  id: number;
  campsite: {
    id: number;
    name: string;
    imageUrl: string | null;
  };
  people: number;
  status: TripStatus;
  rating: number | null;
  memo: string;
  allowedNextStatuses: TripStatus[];
}

export interface UpdateTripInput {
  status?: TripStatus;
  rating?: number;
}

export interface CreateTripInput {
  campsiteId: number;
  people: number;
  memo: string;
}
