// FilterSection.tsx
import React, { ChangeEvent } from "react";
import { Button } from "./Button";
import FilterSelect from "./FilterSelect";
import { ActivityType } from "../types/types";

interface FilterSectionProps {
  filterType: ActivityType;
  setFilterType: (type: ActivityType) => void;
  refetchActivities: () => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({
  filterType,
  setFilterType,
  refetchActivities,
}) => {
  const handleFilterChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setFilterType(event.target.value as ActivityType);
  };

  return (
    <div className="flex justify-between mb-4">
      <Button onClick={refetchActivities}>Reload Activities</Button>
      <FilterSelect value={filterType} onChange={handleFilterChange} />
    </div>
  );
};

export default FilterSection;
