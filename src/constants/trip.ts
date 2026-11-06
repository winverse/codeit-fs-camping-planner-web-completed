import type { TripStatus } from "@/types/trip";

export const TRIP_STATUS_LABEL: Record<TripStatus, string> = {
  wish: "가고 싶음",
  booked: "예약함",
  done: "다녀옴",
  canceled: "취소함",
};
