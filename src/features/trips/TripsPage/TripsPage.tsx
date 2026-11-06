import { Panel } from "@/components/Panel";
import { TripList } from "@/features/trips/TripList";

function TripsPage() {
  return (
    <Panel title="내 캠핑 계획">
      <TripList />
    </Panel>
  );
}

export default TripsPage;
