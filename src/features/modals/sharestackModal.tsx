import { FaLayerGroup } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const ShareStackModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed top-0 left-0 bg-black/25 h-full w-full z-50">
      <div className="flex items-center justify-center h-full">
        <div
          role="dialog"
          aria-modal="true"
          className="bg-white max-w-95 p-1.25 w-full top-5 transform origin-[389.5px_453px] px-6 scale-110 m-auto rounded-lg"
        >
          <div
          // style="outline: none;"
          >
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

              <div className=" py-5 px-6">
                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-4 text-black">
                    Share Your Stack
                  </h2>
                  <div className="flex justify-center">
                    <div className="w-[40px] h-[40px]  rounded-full flex justify-center items-center mb-[1rem] text-[1rem] bg-[#E9D4FF] text-[#9013FE]">
                      <FaLayerGroup />
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    You have no stack created yet, go to Tech Stack to create
                    one.
                  </p>
                  <div className="space-y-2 h-full m-h-[300px] overflow-y-auto"></div>
                </div>
              </div>
            </div>
          </div>
          <div
          // tabindex="0"
          // style="width: 0px; height: 0px; overflow: hidden; outline: none;"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ShareStackModal;
