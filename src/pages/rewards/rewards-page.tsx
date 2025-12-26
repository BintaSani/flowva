import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import RewardJourney from "../../features/erarn-points/reward-journey/reward-journey";
import ReferAndEarn from "../../features/erarn-points/refer-and-earn/refer-and-earn";
import Notification from "../../features/notification/notification";
import EarnMorePoints from "../../features/erarn-points/earn-more-points/earn-more-points";
import RedeemPoints from "../../features/redeem-points/redeem-points";
import { useToggle } from "../../context/toggleContext";

const RewardsPage = () => {
  const [active, setActive] = useState<"earn" | "redeem">("earn");

  const { toggle } = useToggle();

  return (
    <div className="relative ">
      <div className="sticky top-0 z-10 bg-gray-50 pb-2 flex py-2 pt-3 lg:pt-0 lg:py-0">
        <div className=" bg-gray-50 flex justify-between items-center w-full">
          <div className="flex items-center gap-3">
            <button onClick={toggle} className="lg:hidden">
              <IoMenu size={20} />
            </button>
            <h1 className="text-xl md:text-[1.5rem] font-['Roboto',sans-serif] font-medium">
              Rewards Hub
            </h1>
          </div>
          <Notification />
        </div>
      </div>
      <div>
        <p className="text-gray-600 font-normal text-left">
          Earn points, unlock rewards, and celebrate your progress!
        </p>
      </div>

      <div className="lg:h-[calc(100vh-110px)] [scrollbar-width:none] [-ms-overflow-style:none] overflow-x-hidden">
        <div className=" mt-5 ">
          <div
            role="tablist"
            aria-orientation="horizontal"
            className="flex gap-1 relative w-fit "
          >
            {/* Earn Points */}
            <button
              role="tab"
              aria-selected={active === "earn"}
              className={` p-3 text-base font-normal transition-colors rounded-t-lg
              ${
                active === "earn"
                  ? "text-[#9013fe] bg-[#9013fe0d] rounded-t-lg"
                  : "text-[#6c757d] hover:bg-[#9013fe0d] "
              }`}
              onClick={() => setActive("earn")}
            >
              Earn Points
            </button>

            {/* Redeem Rewards */}
            <button
              role="tab"
              aria-selected={active === "redeem"}
              className={`py-3 px-4.25 text-base font-normal transition-colors rounded-t-lg
              ${
                active === "redeem"
                  ? "text-[#9013fe] bg-[#9013fe0d] rounded-t-lg"
                  : "text-[#6c757d] hover:bg-[#9013fe0d]"
              }`}
              onClick={() => setActive("redeem")}
            >
              Redeem Rewards
            </button>

            {/* ink bar */}
            <span
              className={`absolute bottom-0 h-0.5 bg-[#9013fe] transition-all duration-300`}
              style={{
                width: active === "earn" ? "103px" : "144px",
                left: active === "earn" ? "0px" : "107px",
              }}
            />
          </div>
          {active === "earn" ? (
            <div className="mt-7">
              <RewardJourney />
              <EarnMorePoints />
              <ReferAndEarn />
            </div>
          ) : (
            <div className="mt-7">
              <RedeemPoints />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RewardsPage;
