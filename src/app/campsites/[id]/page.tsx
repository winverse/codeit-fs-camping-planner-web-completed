import { CampsiteDetailPage } from "@/features/campsites/CampsiteDetailPage";

export default async function CampsiteDetail({
  params,
}: PageProps<"/campsites/[id]">) {
  const { id } = await params;

  return <CampsiteDetailPage id={id} />;
}
