import Link from "next/link";
import { Panel } from "@/components/Panel";
import { CampsiteCard } from "@/features/campsites/CampsiteCard";
import { getCampsites } from "@/lib/api";
import * as styles from "./CampsitesPage.css";

interface CampsitesPageProps {
  pet: boolean | undefined;
}

async function CampsitesPage({ pet }: CampsitesPageProps) {
  const campsites = await getCampsites(pet);

  return (
    <>
      <h1 className={styles.title}>캠핑 플래너</h1>
      <Panel title="캠핑장 목록">
        <nav className={styles.filter}>
          <Link href="/">전체</Link>
          <Link href="/?pet=true">반려동물 가능</Link>
        </nav>
        {campsites.map((campsite) => (
          <CampsiteCard key={campsite.id} campsite={campsite} />
        ))}
      </Panel>
    </>
  );
}

export default CampsitesPage;
