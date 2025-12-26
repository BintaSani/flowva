export type RewardStatusType = "Locked" | "Coming Soon";

export interface RewardType {
  id: number;
  title: string;
  description: string;
  points: number;
  icon: string;
  status: RewardStatusType;
}

export interface RewardsDataType {
  bank: RewardType[];
  giftCards: RewardType[];
  courses: RewardType[];
}
