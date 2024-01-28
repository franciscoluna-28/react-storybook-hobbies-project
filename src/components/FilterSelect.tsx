// FilterSelect.tsx
import React, { ChangeEvent } from "react";
import { capitalizeFirstLetter } from "../lib/utils";
import { VALID_ACTIVITY_TYPES, ActivityType } from "../types/types";

interface FilterSelectProps {
  value: ActivityType;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

// Default fetcher value. This initial value will fetch random categories
const DEFAULT_VALUE = "";

const FilterSelect: React.FC<FilterSelectProps> = ({ value, onChange }) => {
  return (
    <select
      className="border rounded-md p-2 outline-none"
      value={value}
      onChange={onChange}
    >
      <option value={DEFAULT_VALUE}>All</option>
      {VALID_ACTIVITY_TYPES.map((type) => (
        <option key={type} value={type}>
          {capitalizeFirstLetter(type)}
        </option>
      ))}
    </select>
  );
};

export default FilterSelect;
