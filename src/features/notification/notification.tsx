import { useState } from "react";
import { CgMoreAlt } from "react-icons/cg";
import { SlEmotsmile } from "react-icons/sl";

import { FaBell, FaTrash } from "react-icons/fa6";

const Notification = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  return (
    <div className="mt-2 relative">
      <div className=" group bg-[#e5e7eb] rounded-full size-10">
        <button
          className="group animate-[bell-subtle-pulse_2s_infinite] rounded-full text-[#2D3748] group-hover:text-[#9013fe] w-full h-full flex items-center justify-center"
          aria-label="Notifications"
          onClick={() => setShowNotification(!showNotification)}
        >
          <FaBell size={16} className="group-hover:rotate-12" />
          <div className=" absolute size-3.5 -top-px right-0.5 text-[9px] text-white font-bold bg-[#ef4444] flex items-center justify-center rounded-full">
            <span>1</span>
          </div>
        </button>
      </div>
      {showNotification && (
        <div className="absolute right-0 rounded-2xl shadow-[0_4px_6px_#0000001a]">
          <div className="flex text-white items-center justify-between bg-linear-to-r rounded-t-2xl px-5 py-4 from-[#9013fe] to-[#ff9ff5]">
            <div className="text-base font-semibold">Notifications</div>
            <div className="flex items-center gap-2 text-[13px]">
              <button className="" title="Mark all as read">
                Mark all as read
              </button>
              <button className="" title="Notification settings">
                Delete All
              </button>
            </div>
          </div>
          <div className="bg-white max-h-75 rounded-b-2xl p-4">
            <div className="notification-item unread  ">
              <div className="flex items-start gap-3">
                <div className="bg-[rgb(231,245,231)] p-1 rounded-full text-[rgb(45,125,50)] w-fit">
                  <SlEmotsmile size={16} />
                </div>
                <div className="">
                  <div className="">
                    <div className="text-left text-[#475569] text-[13px]">
                      <strong>Welcome, binta!</strong>
                      <p className="truncate max-w-[210px]  md:max-w-[300px]">
                        <span>
                          We're thrilled to have you on board! Explore powerful
                          tools, build your personal stack, and start unlocking
                          rewards through daily streaks, referrals, and more.
                          Your journey to smarter productivity starts here.
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="text-[12px] text-[#94a3b8] text-left mt-1">
                    2d ago
                  </div>
                </div>
                <div className="">
                  <div className="relative">
                    <button
                      className="text-[#475569]"
                      title="Delete"
                      onClick={() => setShowDelete(!showDelete)}
                      type="button"
                    >
                      <CgMoreAlt size={16} />
                    </button>
                    {showDelete && (
                      <div className="absolute right-0 top-full mt-2 z-10 min-w-25 rounded-md bg-white shadow-lg p-1">
                        <button className="w-full text-left px-2 py-1 flex items-center text-sm gap-2 text-black hover:text-red-600 hover:bg-gray-100">
                          <FaTrash size={16} className="text-xs" />
                          <span>Delete</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notification;
