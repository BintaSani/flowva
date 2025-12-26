import { LuStar } from "react-icons/lu";

const EarnAndWin = () => {
  return (
    <div className="transition-all hover:border-[#9013fe] hover:-translate-y-1.25 hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] ease-linear duration-200 border border-[#e5e7eb] rounded-xl overflow-hidden">
      <div className="p-4 border border-b-[#f3f4f6] border-t-0 border-r-0 border-l-0 bg-white flex items-center gap-[0.75rem]">
        <div className="w-10 h-10 rounded-[10px] flex items-center justify-center shrink-0 bg-[rgba(228,144,230,0.1)] text-[#9013fe]">
          <LuStar className="size-6" />
        </div>
        <div>
          <h3 className="font-semibold">Refer and win 10,000 points!</h3>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-sm text-left">
              Invite 3 friends by Nov 20 and earn a chance to be one of 5
              winners of <span className="text-[#9013fe]">10,000 points</span>.
              Friends must complete onboarding to qualify.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarnAndWin;
