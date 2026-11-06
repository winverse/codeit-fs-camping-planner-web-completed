import { Button } from "@/components/Button";
import { TRIP_STATUS_LABEL } from "@/constants/trip";
import type { TripResponse } from "@/types/trip";
import useUpdateTripMutation from "@/features/trips/hooks/useUpdateTripMutation";
import { StarRating } from "@/features/trips/StarRating";
import * as styles from "./TripCard.css";

interface TripCardProps {
  trip: TripResponse;
}

function TripCard({ trip }: TripCardProps) {
  const { mutate, isPending, error } = useUpdateTripMutation(trip.id);

  return (
    <article className={styles.card}>
      {trip.campsite.imageUrl ? (
        <img
          className={styles.image}
          src={trip.campsite.imageUrl}
          alt={trip.campsite.name}
        />
      ) : (
        <div className={styles.noImage}>사진 없음</div>
      )}
      <div className={styles.body}>
        <h2 className={styles.name}>{trip.campsite.name}</h2>
        <p className={styles.status}>{TRIP_STATUS_LABEL[trip.status]}</p>
        <p>{trip.people}명</p>
        {trip.memo && <p className={styles.memo}>{trip.memo}</p>}
        {trip.status === "done" && (
          <StarRating
            value={trip.rating}
            disabled={isPending}
            onChange={(rating) => mutate({ rating })}
          />
        )}
        <div className={styles.actions}>
          {trip.allowedNextStatuses.map((status) => (
            <Button
              key={status}
              type="button"
              variant="secondary"
              disabled={isPending}
              onClick={() => mutate({ status })}
            >
              {TRIP_STATUS_LABEL[status]}
            </Button>
          ))}
        </div>
        {error && <p className={styles.error}>{error.message}</p>}
      </div>
    </article>
  );
}

export default TripCard;
