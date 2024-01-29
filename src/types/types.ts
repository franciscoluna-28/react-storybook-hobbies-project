export type BoredActivity = {
  activity: string;
  accessibility: number;
  type: string;
  participants: number;
  price: number;
  link?: string;
  key: string;
};

// types.ts
export type ActivityType =
  | "education"
  | "recreational"
  | "social"
  | "diy"
  | "charity"
  | "cooking"
  | "relaxation"
  | "music"
  | "busywork"
  | "";

export const VALID_ACTIVITY_TYPES: ActivityType[] = [
  "education",
  "recreational",
  "social",
  "diy",
  "charity",
  "cooking",
  "relaxation",
  "music",
  "busywork",
  "",
];
