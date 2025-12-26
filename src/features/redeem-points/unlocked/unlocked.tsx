import { rewardsData } from "../../../data/page";
import type { RewardType } from "../../../types/rewards-data-types";
import RewardsCard from "../rewards-card/rewards-card";

const Unlocked = () => {
  const unlockedRewards = Object.values(rewardsData)
    .flat()
    .filter((reward) => reward.status === "Unlocked");
  return (
    <>
      {unlockedRewards.map((reward) => (
        <RewardsCard key={reward.id} data={reward as RewardType} />
      ))}
    </>
  );
};

export default Unlocked;
