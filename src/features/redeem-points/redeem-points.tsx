import { useState } from "react";
import AllRewards from "./all-rewards/all-rewards";
import Unlocked from "./unlocked/unlocked";
import Locked from "./locked/locked";
import ComingSoon from "./coming-soon/coming-soon";
import { rewardsData } from "../../data/page";

const RedeemPoints = () => {
  const [activeTab, setActiveTab] = useState<
    "all rewards" | "unlocked" | "locked" | "coming soon"
  >("all rewards");
  const allRewards = Object.values(rewardsData).flat();

  return (
    <div>
      <h2 className="text-lg md:text-2xl my-3 text-left text-black border border-l-4 border-t-0 border-b-0 border-r-0 border-[#9301fe] pl-3 font-semibold">
        Redeem Your Points
      </h2>
      <div>
        <div
          role="tablist"
          aria-orientation="horizontal"
          className="flex gap-1 relative w-fit mb-4"
        >
          {/* All Rewards */}
          <button
            role="tab"
            aria-selected={activeTab === "all rewards"}
            className={` p-3 text-base font-medium transition-colors rounded-t-lg
              ${
                activeTab === "all rewards"
                  ? "text-[#9013fe] bg-[#9013fe0d] rounded-t-lg"
                  : "text-[#6c757d] hover:bg-[#9013fe0d] "
              }`}
            onClick={() => setActiveTab("all rewards")}
          >
            All Rewards
            <span className="ml-2 text-xs rounded-full h-5 px-2 inline-flex justify-center items-center bg-[#9031fe]/10 text-[#9031fe] font-semibold">
              {allRewards.length}
            </span>
          </button>

          {/* Unlocked */}
          <button
            role="tab"
            aria-selected={activeTab === "unlocked"}
            className={`p-3 text-base font-medium transition-colors rounded-t-lg
              ${
                activeTab === "unlocked"
                  ? "text-[#9013fe] bg-[#9013fe0d] rounded-t-lg"
                  : "text-[#6c757d] hover:bg-[#9013fe0d]"
              }`}
            onClick={() => setActiveTab("unlocked")}
          >
            Unlocked
            <span className="ml-2 text-xs rounded-full h-5 px-2 inline-flex justify-center items-center bg-[#9031fe]/10 text-[#9031fe] font-semibold">
              {
                allRewards.filter((reward) => reward.status === "Unlocked")
                  .length
              }
            </span>
          </button>

          {/* Locked */}
          <button
            role="tab"
            aria-selected={activeTab === "locked"}
            className={`p-3 text-base flex items-center gap-1 font-medium transition-colors rounded-t-lg
              ${
                activeTab === "locked"
                  ? "text-[#9013fe] bg-[#9013fe0d] rounded-t-lg"
                  : "text-[#6c757d] hover:bg-[#9013fe0d]"
              }`}
            onClick={() => setActiveTab("locked")}
          >
            Locked
            <span className="ml-2 text-xs rounded-full h-5 px-2 inline-flex justify-center items-center bg-[#9031fe]/10 text-[#9031fe] font-semibold">
              {allRewards.filter((reward) => reward.status === "Locked").length}
            </span>
          </button>

          {/* Coming Soon */}
          <button
            role="tab"
            aria-selected={activeTab === "coming soon"}
            className={`p-3 text-base font-medium transition-colors rounded-t-lg
              ${
                activeTab === "coming soon"
                  ? "text-[#9013fe] bg-[#9013fe0d] rounded-t-lg"
                  : "text-[#6c757d] hover:bg-[#9013fe0d]"
              }`}
            onClick={() => setActiveTab("coming soon")}
          >
            Coming Soon
            <span className="ml-2 text-xs rounded-full h-5 px-2 inline-flex justify-center items-center bg-[#9031fe]/10 text-[#9031fe] font-semibold">
              {
                allRewards.filter((reward) => reward.status === "Coming Soon")
                  .length
              }
            </span>
          </button>

          {/* ink bar */}
          <span
            className={`absolute bottom-0 h-0.5 bg-[#9013fe] transition-all duration-300`}
            style={{
              width:
                activeTab === "all rewards"
                  ? "139px"
                  : activeTab === "unlocked"
                  ? "123px"
                  : activeTab === "locked"
                  ? "110px"
                  : "153px",
              left:
                activeTab === "all rewards"
                  ? "0px"
                  : activeTab === "unlocked"
                  ? "143px"
                  : activeTab === "locked"
                  ? "270px"
                  : "384px",
            }}
          />
        </div>
        <div className="grid gap-[1.5rem] grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] mt-6">
          {activeTab === "all rewards" && <AllRewards />}
          {activeTab === "unlocked" && <Unlocked />}
          {activeTab === "locked" && <Locked />}
          {activeTab === "coming soon" && <ComingSoon />}
        </div>
      </div>
    </div>
  );
};

export default RedeemPoints;
