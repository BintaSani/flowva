import { useState } from "react";
import { FaGift } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa6";
import { FiCalendar } from "react-icons/fi";
import ClaimModal from "../../../modals/claimModal";

const Featured = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div className="hover:translate-y-[-3px] hover:shadow-[0_8px_20px_rgba(0,_0,_0,_0.1)] bg-white rounded-[16px] shadow-[0_5px_15px_rgba(0,0,0,0.05)] overflow-hidden border border-[#f3f4f6] transition-all duration-300 ease-in-out">
        <div className="p-4  bg-[linear-gradient(135deg,#9013FE_0%,#70D6FF_100%)] text-white relative overflow-hidden">
          <div>
            <span className=" text-left bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold">
              Featured
            </span>
          </div>
          <div className="flex items-center justify-between">
            <h3 className="text-[1.25rem] font-bold relative z-[2]">
              Top Tool Spotlight
            </h3>{" "}
            <div className="overflow-hidden relative rounded-full size-10 md:size-16">
              <img src="/src/assets/featured.webp" />
            </div>
          </div>
          <p className="text-lg text-left">
            <strong> Reclaim</strong>
          </p>
        </div>
        <div className="p-[1rem]">
          <div className="flex justify-start mb-[1rem]">
            <div className="w-6 h-6 animate-[subtle-pulse_2s_infinite] bg-[#eef2ff] rounded-[6px] flex items-center justify-center mr-[1rem] flex-shrink-0 text-[#9013fe]">
              <FiCalendar className="size-6" />
            </div>
            <div className="flex-1">
              <h4 className="mb-1 text-left font-semibold">
                Automate and Optimize Your Schedule
              </h4>
              <p className="text-[0.875rem] text-left text-gray-600">
                Reclaim.ai is an AI-powered calendar assistant that
                automatically schedules your tasks, meetings, and breaks to
                boost productivity. Free to try — earn Flowva Points when you
                sign up!
              </p>
            </div>
          </div>
        </div>
        <div className="px-[1rem] py-[5px] flex justify-between items-center border border-t-[#f3f4f6] border-b-0 border-r-0 border-l-0">
          <button className="bg-[#9013fe] hover:bg-[#8628da] text-white py-2 px-4 rounded-full font-semibold transition-all duration-200 flex items-center justify-center gap-2 border-0">
            <FaUserPlus className="size-5" />
            Sign up
          </button>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[linear-gradient(45deg,#9013FE,#FF8687)] text-white  py-2 px-4 rounded-full font-semibold text-sm flex items-center gap-0.5"
          >
            <FaGift className="size-4" />
            Claim 50 pts
          </button>
        </div>
      </div>
      {isModalOpen && <ClaimModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default Featured;
