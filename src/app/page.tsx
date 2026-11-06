import { CampsitesPage } from "@/features/campsites/CampsitesPage";
import { toPetFilter } from "@/lib/campsite-filter";

export default async function Home({ searchParams }: PageProps<"/">) {
  const { pet } = await searchParams;

  return <CampsitesPage pet={toPetFilter(pet)} />;
}
