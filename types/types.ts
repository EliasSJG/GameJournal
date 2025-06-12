export type Game = {
  title: string;
  date: string;
  status: "playing" | "completed" | "platinum" | "notStarted";
  statusColor?: string;
};
