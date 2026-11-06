"use client";

import { notFound } from "next/navigation";
import { Panel } from "@/components/Panel";
import useCampsiteQuery from "@/features/campsites/hooks/useCampsiteQuery";
import { TripForm } from "@/features/trips/TripForm";
import * as styles from "./CampsiteDetailPage.css";

interface CampsiteDetailPageProps {
  id: string;
}

function CampsiteDetailPage({ id }: CampsiteDetailPageProps) {
  const { data: campsite, isPending, isError } = useCampsiteQuery(id);

  if (isPending) {
    return <p>캠핑장 정보를 불러오는 중입니다.</p>;
  }
  if (isError) {
    return <p>캠핑장 정보를 불러오지 못했습니다.</p>;
  }
  if (!campsite) {
    notFound();
  }

  return (
    <Panel title={campsite.name}>
      <div className={styles.layout}>
        <div className={styles.content}>
          {campsite.imageUrl && (
            <img
              className={styles.image}
              src={campsite.imageUrl}
              alt={campsite.name}
            />
          )}
          {campsite.intro && <p className={styles.intro}>{campsite.intro}</p>}
          <dl className={styles.info}>
            <dt>주소</dt>
            <dd>{campsite.address}</dd>
            <dt>업종</dt>
            <dd>{campsite.industries.join(", ")}</dd>
            <dt>시설</dt>
            <dd>{campsite.facilities.join(", ")}</dd>
            <dt>반려동물</dt>
            <dd>
              {campsite.petAllowed ? "함께 갈 수 있음" : "함께 갈 수 없음"}
            </dd>
          </dl>
        </div>
        <TripForm campsiteId={campsite.id} />
      </div>
    </Panel>
  );
}

export default CampsiteDetailPage;
