import { useState, useEffect, useCallback } from "react";
import {
  VALID_ACTIVITY_TYPES,
  ActivityType,
  BoredActivity,
} from "../types/types";

const API_ENDPOINT = "https://www.boredapi.com/api/activity/";

export function useFetchActivities(type: ActivityType) {
  const [activities, setActivities] = useState<BoredActivity[] | []>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchActivities = useCallback(async (type: ActivityType) => {
    try {
      if (!VALID_ACTIVITY_TYPES.includes(type)) {
        console.error(
          "Invalid activity type. Please, choose one of the existing ones:",
          VALID_ACTIVITY_TYPES
        );
        return;
      }

      const endpoint =
        type !== "" ? `${API_ENDPOINT}?type=${type}` : API_ENDPOINT;

      const fetchedActivities: BoredActivity[] = await Promise.all(
        Array.from({ length: 3 }, async () => {
          const response = await fetch(endpoint);
          if (!response.ok) {
            throw new Error("Failed to fetch activity");
          }
          const data = await response.json();
          return data;
        })
      );

      setActivities(fetchedActivities);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching activities:", error);
    }
  }, []);

  useEffect(() => {
    setLoading(true);
    fetchActivities(type);

    // Cleanup function
    return () => {};
  }, [fetchActivities, type]);

  const refetchActivities = useCallback(() => {
    setLoading(true);
    fetchActivities(type);
  }, [fetchActivities, type]);

  return { activities, loading, refetchActivities };
}
