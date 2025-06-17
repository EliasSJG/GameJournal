export type Game = {
  id: string;
  title: string;
  date: string;
  status: "playing" | "completed" | "platinum" | "notStarted";
  statusColor?: string;
};
export type Review = {
  rating: string;
  review: string;
  platinumRating: string;
  platinumReview: string;
};
