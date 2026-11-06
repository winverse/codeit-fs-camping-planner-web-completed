import { useQuery } from "@tanstack/react-query";
import { getCampsites } from "@/lib/api";
import { queryKeys } from "@/lib/queryKeys";

function useCampsitesQuery(pet: boolean | undefined) {
  return useQuery({
    queryKey: queryKeys.campsites.list(pet),
    queryFn: () => getCampsites(pet),
  });
}

export default useCampsitesQuery;
