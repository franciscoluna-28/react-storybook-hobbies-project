// ActivityList.tsx
import React from "react";
import { BoredActivity } from "../types/types";
import ActivityCard from "./ActivityCard";

interface ActivityListProps {
  activities: BoredActivity[];
}

const ActivityList: React.FC<ActivityListProps> = ({ activities }) => {
  return (
    <div className="space-y-6 mt-6">
      {activities.map((activity) => (
        <ActivityCard activity={activity} />
      ))}
    </div>
  );
};

export default ActivityList;
