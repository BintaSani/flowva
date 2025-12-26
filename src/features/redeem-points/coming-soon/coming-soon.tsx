import { rewardsData } from "../../../data/page";
import RewardsCard from "../rewards-card/rewards-card";
import type { RewardType } from "../../../types/rewards-data-types";

const ComingSoon = () => {
  const comingSoonRewards = Object.values(rewardsData)
    .flat()
    .filter((reward) => reward.status === "Coming Soon");
  return (
    <>
      {comingSoonRewards.map((reward) => (
        <RewardsCard key={reward.id} data={reward as RewardType} />
      ))}
    </>
  );
};

export default ComingSoon;
