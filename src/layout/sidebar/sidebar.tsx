import {
  FaCreditCard,
  FaCompass,
  FaGem,
  FaLayerGroup,
  FaHouse,
  FaBoxOpen,
  FaUserGear,
} from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { Link } from "react-router";
import { useToggle } from "../../context/toggleContext";
import { useAuth } from "../../context/authContext";

const Sidebar = () => {
  const location = useLocation();
  const { toggle } = useToggle();
  const { profile } = useAuth();

  return (
    <div className="flex flex-col h-full relative">
      <button
        type="button"
        aria-label="Close"
        className="absolute top-3 right-3 lg:hidden group hover:bg-gray-200 transition-colors duration-200 ease-in-out  flex items-center justify-center w-8 h-8"
        onClick={toggle}
      >
        <span className="">
          <IoMdClose className="size-5 text-[#00000073] group-hover:text-gray-800" />
        </span>
      </button>
      <div className=" p-2 px-7  my-2 flex justify-start">
        <img
          src="/src/assets/logo.webp"
          loading="eager"
          alt="Flowva Logo"
          className="h-15"
        />
      </div>
      <nav className="grow px-4 ">
        <ul>
          <li
            className="
                flex items-center gap-3 px-4 p-3 mb-2 rounded-lg cursor-pointer  duration-200 transition-all
                text-black hover:bg-[#9013FE1A] hover:text-[#9013FE]
              "
          >
            <FaHouse size={18} />
            <span className="tracking-wide truncate">Home</span>
          </li>
          <li
            className="
                flex items-center gap-3 px-4 p-3 mb-2 rounded-lg cursor-pointer  duration-200 transition-all
                text-black hover:bg-[#9013FE1A] hover:text-[#9013FE]
              "
          >
            <FaCompass size={16} />
            <span className="tracking-wide truncate">Discover</span>
          </li>
          <li
            className="
                flex items-center gap-3 px-4 p-3 mb-2 rounded-lg cursor-pointer  duration-200 transition-all
                text-black hover:bg-[#9013FE1A] hover:text-[#9013FE]
              "
          >
            <FaBoxOpen size={20} />
            <span className="tracking-wide truncate">Library</span>
          </li>
          <li
            className="
                flex items-center gap-3 px-4 p-3 mb-2 rounded-lg cursor-pointer  duration-200 transition-all
                text-black hover:bg-[#9013FE1A] hover:text-[#9013FE]
              "
          >
            <FaLayerGroup size={18} />
            <span className="tracking-wide truncate">Tech Stack</span>
          </li>
          <li
            className="
                flex items-center gap-3 px-4 p-3 mb-2 rounded-lg cursor-pointer  duration-200 transition-all
                text-black hover:bg-[#9013FE1A] hover:text-[#9013FE]
              "
          >
            <FaCreditCard size={18} />
            <span className="tracking-wide truncate">Subscriptions</span>
          </li>
          <li
            className={`
                flex items-center gap-3 px-4 p-3 mb-2 rounded-lg cursor-pointer  duration-200 transition-all
                 ${
                   location.pathname === "/dashboard/earn-rewards"
                     ? "bg-[#9013fe33] text-[#9013FE]"
                     : "text-black hover:bg-[#9013FE1A] hover:text-[#9013FE]"
                 }
              `}
          >
            <Link
              to="/dashboard/earn-rewards"
              className=" flex items-center gap-3 "
            >
              <FaGem size={16} />
              <span className="tracking-wide truncate">Rewards Hub</span>
            </Link>
          </li>
          <li
            className="
                flex items-center gap-3 px-4 p-3 mb-2 rounded-lg cursor-pointer  duration-200 transition-all
                text-black hover:bg-[#9013FE1A] hover:text-[#9013FE]
              "
          >
            <FaUserGear size={20} />
            <span className="tracking-wide truncate">Settings</span>
          </li>
        </ul>
      </nav>
      <div className="mt-auto py-3 relative flex justify-center">
        <div className="absolute top-0 left-4 right-4 border-t border-[#64748B]"></div>
        <div className="w-full flex items-center justify-between px-4">
          <button className="flex items-center border-none">
            <div className="w-10 h-10 relative overflow-hidden rounded-full font-semibold mr-3 flex items-center justify-center  text-[#9013FE] bg-[#E9D4FF]">
              <img
                src="https://lh3.googleusercontent.com/a/ACg8ocJTiqXse5vwCELyByaSrHp6Xx_LAiHLx9s9iq_QLvzwp4CGRA=s96-c"
                alt="User avatar"
                className="h-full w-full rounded-full object-cover"
              />
            </div>
            <div className="text-start">
              <span className="text-[0.9rem] font-semibold">
                {profile?.name}
              </span>
              <p className="text-[0.8rem] text-[#718096] truncate overflow-x-hidden max-w-38.25">
                {profile?.email}
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
