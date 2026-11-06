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
      {campsite.imageUrl ? (
        <img
          className={styles.image}
          src={campsite.imageUrl}
          alt={campsite.name}
        />
      ) : (
        <div className={styles.noImage}>사진 없음</div>
      )}
      <div className={styles.body}>
        <h2 className={styles.name}>
          <Link href={`/campsites/${campsite.id}`} className={styles.link}>
            {campsite.name}
          </Link>
        </h2>
        <p className={styles.region}>
          {campsite.region} {campsite.city}
        </p>
        <p className={styles.industries}>{campsite.industries.join(", ")}</p>
        <PetBadge petAllowed={campsite.petAllowed} />
      </div>
    </article>
  );
}

export default CampsiteCard;
