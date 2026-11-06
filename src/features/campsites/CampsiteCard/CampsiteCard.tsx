import Link from "next/link";
import type { CampsiteResponse } from "@/types/campsite";
import { PetBadge } from "@/features/campsites/PetBadge";
import * as styles from "./CampsiteCard.css";

interface CampsiteCardProps {
  campsite: CampsiteResponse;
}

function CampsiteCard({ campsite }: CampsiteCardProps) {
  return (
    <article className={styles.card}>
      {campsite.imageUrl && (
        <img
          className={styles.image}
          src={campsite.imageUrl}
          alt={campsite.name}
        />
      )}
      <h2 className={styles.name}>
        <Link href={`/campsites/${campsite.id}`}>{campsite.name}</Link>
      </h2>
      <p className={styles.region}>
        {campsite.region} {campsite.city}
      </p>
      <p>{campsite.industries.join(", ")}</p>
      <PetBadge petAllowed={campsite.petAllowed} />
    </article>
  );
}

export default CampsiteCard;
