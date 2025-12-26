import type { RewardType } from "../../../types/rewards-data-types";

type Props = {
  data: RewardType;
};

const RewardsCard = ({ data }: Props) => {
  return (
    <div
      key={data.id}
      className="border opacity-[0.7] cursor-not-allowed border-[#E9D4FF] bg-white rounded-[12px] p-[1.5rem] shadow-[0_2px_8px_rgba(0,0,0,0.05)] relative overflow-hidden transition-all duration-200 ease-linear hover:translate-y-[-5px] hover:shadow-[0_6px_16px_rgba(0,0,0,0.1)]"
    >
      <div className="w-[48px] h-[48px] rounded-[12px] flex items-center justify-center m-[0_auto_1rem] text-[1.5rem] text-[#9013fe] bg-[#E9D4FF]">
        {data.icon}
      </div>
      <h4 className="text-center text-[1.1rem] font-semibold mb-2">
        {data.title}
      </h4>
      <p className="text-center text-[0.9rem] text-[#2D3748] mb-4">
        {data.description}
      </p>
      <div className="flex items-center justify-center text-[#9013fe] font-semibold mb-4">
        ⭐ {data.points} pts
      </div>
      <button
        //   disabled=""
        className="w-full font-semibold p-[0.75rem] rounded-[8px] transition-all duration-300 ease-in-out bg-[#d7e0ed] text-white"
      >
        {data.status}
      </button>
    </div>
  );
};

export default RewardsCard;
