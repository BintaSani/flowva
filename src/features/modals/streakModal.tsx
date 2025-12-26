import { IoMdClose } from "react-icons/io";

const StreakModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed top-0 left-0 bg-black/25 h-full w-full z-101">
      <div className="flex items-center justify-center h-full">
        <div
          role="dialog"
          aria-modal="true"
          className="max-w-95 relative transform origin-[389.5px_453px] bg-white rounded-lg top-5 m-auto py-5 px-6 w-full"
        >
          <div className="">
            <div className="">
              <button
                type="button"
                aria-label="Close"
                className="absolute top-3 right-3 group hover:bg-gray-200 transition-colors duration-200 ease-in-out  flex items-center justify-center w-8 h-8"
                onClick={onClose}
              >
                <span className="">
                  <IoMdClose className="size-5 text-[#00000073] group-hover:text-gray-800" />
                </span>
              </button>
              <div className="">
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 pointer-events-none z-10">
                    <canvas
                      width="322"
                      height="319"
                      className="z-index: 2; position: absolute; pointer-events: none; inset: 0px;"
                    ></canvas>
                  </div>
                  <div className="flex justify-center z-20 relative mb-2">
                    <div className="w-[98px] h-[98px] text-green-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                  </div>
                  <h2 className="text-[24px] font-bold text-center text-[#9013fe] mb-[10px]">
                    {" "}
                    Level Up! 🎉
                  </h2>
                  <div className="text-[36px] font-extrabold my-[10px] bg-gradient-to-br from-[#9013fe] to-[#FF9FF5] text-center  bg-clip-text text-transparent [text-shadow:1px_1px_3px_rgba(0,0,0,0.1)]">
                    +5 Points
                  </div>
                  <div className="flex justify-center space-x-1 mb-1">
                    <span className="animate-bounce">✨</span>
                    <span className="animate-bounce">💎</span>
                    <span className="animate-bounce">🎯</span>
                  </div>
                  <p className="text-gray-600 text-[15px] text-center leading-[1.6] mb-[25px]">
                    You've claimed your daily points! Come back tomorrow for
                    more!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="width: 0px; height: 0px; overflow: hidden; outline: none;"></div>
        </div>
      </div>
    </div>
  );
};

export default StreakModal;
