import RewardsCard from "../rewards-card/rewards-card";
import { rewardsData } from "../../../data/page";
import type { RewardType } from "../../../types/rewards-data-types";

const AllRewards = () => {
  return (
    <>
      {Object.values(rewardsData)
        .flat()
        .map((reward) => (
          <RewardsCard key={reward.id} data={reward as RewardType} />
        ))}
    </>
  );
};

export default AllRewards;
