"use client";

import { TripCard } from "@/features/trips/TripCard";
import useTripsQuery from "@/features/trips/hooks/useTripsQuery";
import * as styles from "./TripList.css";

function TripList() {
  const { data, isPending, isError } = useTripsQuery();

  if (isPending) {
    return <p>캠핑 계획을 불러오는 중입니다.</p>;
  }
  if (isError) {
    return <p>캠핑 계획을 불러오지 못했습니다.</p>;
  }

  return (
    <div className={styles.list}>
      {data.map((trip) => (
        <TripCard key={trip.id} trip={trip} />
      ))}
    </div>
  );
}

export default TripList;
