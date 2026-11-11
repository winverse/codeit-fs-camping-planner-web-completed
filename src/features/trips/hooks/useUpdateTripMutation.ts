import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTrip } from "@/lib/api";
import { queryKeys } from "@/lib/queryKeys";
import type { UpdateTripInput } from "@/types/trip";

function useUpdateTripMutation(id: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (input: UpdateTripInput) => updateTrip(id, input),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: queryKeys.trips.all() }),
  });
}

export default useUpdateTripMutation;
