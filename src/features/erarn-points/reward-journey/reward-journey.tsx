import PointsBalance from "./points-Balance-Card.tsx/points-balance";
import DailyStreak from "./daily-streak/daily-streak";
import { useAuth } from "../../../context/authContext";
import Featured from "./featured/featured";

const RewardJourney = () => {
  const { isLoading } = useAuth();
  return (
    <div className="space-y-6">
      <h2 className=" text-lg text-left md:text-2xl my-3 text-black border border-l-4 border-t-0 border-b-0 border-r-0 border-[#9301fe] pl-[0.75rem] font-semibold">
        Your Rewards Journey
      </h2>
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-300 h-[15vh] animate-pulse"></div>
          <div className="bg-gray-300 h-[15vh] animate-pulse"></div>
          <div className="bg-gray-300 h-[15vh] animate-pulse"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <PointsBalance />
          <DailyStreak />
          <Featured />
        </div>
      )}
    </div>
  );
};

export default RewardJourney;
