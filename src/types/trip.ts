export type TripStatus = "wish" | "booked" | "done" | "canceled";

export type TripResponse = {
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
};

export type UpdateTripInput = Partial<Pick<TripResponse, "status" | "rating">>;

export type CreateTripInput = {
  campsiteId: number;
  people: number;
  memo: string;
};
