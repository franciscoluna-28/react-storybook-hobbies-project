import { useState } from "react";
import FilterSection from "./components/FilterSection";
import { useFetchActivities } from "./hooks/useFetchActivities";
import { ActivityType } from "./types/types";
import ActivityList from "./components/ActivitiesSection";
import { Loading } from "./components/Loading";

function App() {
  const [filterType, setFilterType] = useState<ActivityType>("");
  const { activities, loading, refetchActivities } =
    useFetchActivities(filterType);

  return (
    <main className="p-8">
      <FilterSection
        filterType={filterType}
        setFilterType={setFilterType}
        refetchActivities={refetchActivities}
      />
      {loading ? (
        <Loading/>
      ) : (
        <ActivityList activities={activities} />
      )}
    </main>
  );
}

export default App;
