import { useState } from "react";
import {
  FaXTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa6";

import { LuUsers, LuCopy, LuCheck } from "react-icons/lu";
import { useAuth } from "../../../context/authContext";

const ReferAndEarn = () => {
  const { profile, isLoading } = useAuth();
  const [copied, setCopied] = useState(false);
  const pointsEarned = profile?.referral_count && profile?.referral_count * 25;

  const referralLink =
    typeof window !== "undefined" && profile?.referral_code
      ? `${window.location.origin}/signup?ref=${profile?.referral_code}`
      : "";

  const handleCopy = async () => {
    if (!referralLink) return;

    try {
      await navigator.clipboard.writeText(referralLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // optional: toast or fallback
    }
  };

  return (
    <div className="space-y-6">
      <h2 className=" text-lg text-left md:text-2xl my-3 text-black border border-l-4 border-t-0 border-b-0 border-r-0 border-[#9301fe] pl-[0.75rem] font-semibold">
        Refer And Earn
      </h2>
      <div className="shadow-[0_5px_15px_rgba(0,0,0,0.05)] mt-6  rounded-2xl hover:-translate-y-1.25 hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] border border-[#f3f4f6] overflow-hidden transition-shadow duration-200">
        <div className="p-[1rem] relative border border-b-[#f3f4f6] bg-[#eef2ff] border-t-0 border-r-0 border-l-0">
          <div className="flex items-center gap-3">
            <LuUsers className="size-6 text-[#9013fe]" />
            <div>
              <h3 className="text-xl font-semibold text-gray-700 text-left">
                Share Your Link
              </h3>
              <p className="text-gray-500 text-sm">
                Invite friends and earn 25 points when they join!
              </p>
            </div>
          </div>
        </div>
        <div className="p-[1rem]">
          <div className="space-y-6">
            <div className="flex justify-between mb-[1rem]">
              <div className="text-center p-[0.5rem] flex-1">
                {isLoading ? (
                  <div className="bg-gray-30 animate-pulse w-8 h-3"></div>
                ) : (
                  <div className="text-[1.5rem] font-semibold text-[#9013fe]">
                    {profile?.referral_count}
                  </div>
                )}
                <div className="gtext-gray-600">Referrals</div>
              </div>
              <div className="text-center p-2 flex-1">
                {isLoading ? (
                  <div className="bg-gray-30 animate-pulse w-8 h-3"></div>
                ) : (
                  <div className="text-[1.5rem] font-semibold text-[#9013fe]">
                    {pointsEarned}
                  </div>
                )}
                <div className="text-gray-600">Points Earned</div>
              </div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="text-sm mb-2 text-gray-700 text-left">
                Your personal referral link:
              </p>
              <div className="relative">
                <input
                  type="text"
                  readOnly
                  className="flex-1  border border-gray-300 rounded-md px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent w-full pr-10"
                  value={referralLink}
                />
                <button
                  disabled={copied}
                  onClick={handleCopy}
                  className="absolute right-[10px] top-1/2 -translate-y-1/2 cursor-pointer z-10"
                >
                  {copied ? (
                    <LuCheck className="size-6 text-[#9013fe]" />
                  ) : (
                    <LuCopy className="size-6 text-[#9013fe]" />
                  )}
                </button>
              </div>
            </div>
            <div className="flex justify-center gap-[1rem] mt-[1rem]">
              <button
                className="w-7.5 h-7.5 rounded-full flex items-center justify-center text-white text-[18px] transition-transform duration-200 hover:translate-y-[-3px]"
                style={{ background: "rgb(24, 119, 242)" }}
              >
                <FaFacebookF />
              </button>
              <button
                className="w-[30px] h-[30px] rounded-full flex items-center justify-center text-white text-[18px] transition-transform duration-200 hover:translate-y-[-3px]"
                style={{ background: "black" }}
              >
                <FaXTwitter />
              </button>
              <button
                className="w-7.5 h-7.5 rounded-full flex items-center justify-center text-white text-[18px] transition-transform duration-200 hover:translate-y-[-3px]"
                style={{ background: "rgb(0, 119, 181)" }}
              >
                <FaLinkedinIn />
              </button>
              <button
                className="w-[30px] h-[30px] rounded-full flex items-center justify-center text-white text-[18px] transition-transform duration-200 hover:translate-y-[-3px]"
                style={{ background: "rgb(37, 211, 102)" }}
              >
                <FaWhatsapp />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferAndEarn;
