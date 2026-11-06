import { notFound } from "next/navigation";
import { Panel } from "@/components/Panel";
import { TripForm } from "@/features/trips/TripForm";
import { getCampsite } from "@/lib/api";
import * as styles from "./CampsiteDetailPage.css";

interface CampsiteDetailPageProps {
  id: string;
}

async function CampsiteDetailPage({ id }: CampsiteDetailPageProps) {
  const campsite = await getCampsite(id);

  if (!campsite) {
    notFound();
  }

  return (
    <Panel title={campsite.name}>
      <dl className={styles.info}>
        <dt>주소</dt>
        <dd>{campsite.address}</dd>
        <dt>업종</dt>
        <dd>{campsite.industries.join(", ")}</dd>
        <dt>시설</dt>
        <dd>{campsite.facilities.join(", ")}</dd>
        <dt>반려동물</dt>
        <dd>{campsite.petAllowed ? "함께 갈 수 있음" : "함께 갈 수 없음"}</dd>
      </dl>
      <TripForm campsiteId={campsite.id} />
    </Panel>
  );
}

export default CampsiteDetailPage;
