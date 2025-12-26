import { IoMdClose } from "react-icons/io";
import { LuCloudDownload } from "react-icons/lu";

const ClaimModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed top-0 left-0 bg-black/25 h-full w-full z-101">
      <div className="flex items-center justify-center h-full">
        <div
          role="dialog"
          aria-labelledby=":r2:"
          aria-modal="true"
          className=" transform origin-[389.5px_453px] w-130 py-5 px-6 relative bg-white rounded-lg"
        >
          <div>
            <div className="transform origin-[389.5px_453px] ">
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
              <div className="mb-2">
                <div className="" id=":r2:">
                  <h1 className="md:text-lg font-semibold">
                    Claim Your 25 Points
                  </h1>
                </div>
              </div>
              <div className="">
                <p className="text-[0.9rem] text-[#6c757d]">
                  Sign up for Reclaim (free, no payment needed), then fill the
                  form below:
                </p>
                <ul className="text-[0.9rem] text-[#6c757d]">
                  <li>1️⃣ Enter your Reclaim sign-up email.</li>
                  <li>
                    2️⃣ Upload a screenshot of your Reclaim profile showing your
                    email.
                  </li>
                </ul>
                <p className="text-[0.9rem] text-[#6c757d]">
                  After verification, you'll get 25 Flowva Points! 🎉😊
                </p>
                <form className="mt-3">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2 text-[#111827]"
                  >
                    Email used on Reclaim
                  </label>
                  <div className="relative group w-full mb-5">
                    <input
                      type="email"
                      id="email"
                      placeholder="user@example.com"
                      className=" peer w-full border text-base py-[10px] px-[14px]  border-[#EDE9FE] transition-all ease-linear duration-[.2s] rounded-md outline-none focus:border-[#9013fe]"
                      required
                      value=""
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-md peer-focus:shadow-[0_0_0_3px_rgba(124,58,237,0.1)]"></div>
                  </div>
                  <label
                    htmlFor="file"
                    className="block text-sm mb-[0.5rem] font-medium text-[#111827]"
                  >
                    Upload screenshot (mandatory)
                  </label>
                  <label className="p-[0.5rem] cursor-pointer hover:bg-[rgba(29,28,28,0.05)] block border border-dashed border-[#e9ecef] rounded-[8px] bg-[#f9f9f9] transition-all duration-200">
                    <p className="text-center flex justify-center gap-[0.5rem]">
                      <LuCloudDownload className="size-6" />
                      <span className="text-base">Choose file</span>
                    </p>
                    <input
                      className="hidden"
                      type="file"
                      accept="image/*"
                      required
                    />
                  </label>
                  <div className="flex gap-3 justify-end mt-4">
                    <button
                      type="button"
                      className="p-[0.5rem_1rem] rounded-[8px] font-semibold transition-all duration-200 hover:bg-[#d1d5db] bg-[#e9ecef] text-[#020617]"
                      onClick={onClose}
                    >
                      Cancel
                    </button>
                    <button className="p-[0.5rem_1rem] rounded-[8px] font-semibold transition-all duration-200 bg-[#9103fe] text-white hover:bg-[#FF8687]">
                      Submit Claim
                    </button>
                  </div>
                </form>
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

export default ClaimModal;
