import { useState } from "react";
import { LuShare2 } from "react-icons/lu";
import ShareStackModal from "../../../modals/sharestackModal";

const ShareYourStack = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div className="transition-all hover:border-[#9013fe] hover:translate-y-[-5px] hover:shadow-[0_10px_25px_rgba(0,_0,_0,_0.1)] ease-linear duration-200 border border-[#e5e7eb] rounded-xl overflow-hidden">
        <div className="p-[1rem] border border-b-[#f3f4f6] border-t-0 border-r-0 border-l-0 bg-white flex items-center gap-[0.75rem]">
          <div className="w-[40px] h-[40px] rounded-[10px] flex items-center justify-center flex-shrink-0 bg-[rgba(144,_19,_254,_0.1)] text-[#9013fe]">
            <LuShare2 className="size-6" />
          </div>
          <div>
            <h3 className="font-semibold">Share Your Stack</h3>
            <p className="text-xs text-gray-500">Earn +25 pts</p>
          </div>
        </div>
        <div className="p-[1rem]">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-sm">Share your tool stack</p>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#eef2ff] hover:text-white hover:bg-[#9013fe] text-[#9013fe] py-2 px-4 rounded-full font-semibold text-sm transition-all duration-200 inline-flex items-center gap-2 border-0"
            >
              <LuShare2 className="size-6" /> Share
            </button>
          </div>
        </div>
      </div>
      {isModalOpen && <ShareStackModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default ShareYourStack;
