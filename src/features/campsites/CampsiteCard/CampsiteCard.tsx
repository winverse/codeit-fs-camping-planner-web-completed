import Link from "next/link";
import type { CampsiteResponse } from "@/types/campsite";
import { PetBadge } from "@/features/campsites/PetBadge";
import * as styles from "./CampsiteCard.css";

interface CampsiteCardProps {
  campsite: CampsiteResponse;
}

function CampsiteCard({ campsite }: CampsiteCardProps) {
  return (
    <Link href={`/campsites/${campsite.id}`} className={styles.card}>
      <img
        className={campsite.imageUrl ? styles.image : styles.noImage}
        src={campsite.imageUrl ?? "/tent.svg"}
        alt={campsite.imageUrl ? campsite.name : ""}
      />
      <h3 className={styles.name}>{campsite.name}</h3>
      <p className={styles.region}>
        {campsite.region} {campsite.city}
      </p>
      <p className={styles.industries}>{campsite.industries.join(", ")}</p>
      <PetBadge petAllowed={campsite.petAllowed} />
    </Link>
  );
}

export default CampsiteCard;
