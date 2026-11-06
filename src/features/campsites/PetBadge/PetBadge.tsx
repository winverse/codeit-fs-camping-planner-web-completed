import * as styles from "./PetBadge.css";

interface PetBadgeProps {
  petAllowed: boolean;
}

function PetBadge({ petAllowed }: PetBadgeProps) {
  if (!petAllowed) {
    return null;
  }

  return <span className={styles.badge}>반려동물 가능</span>;
}

export default PetBadge;
