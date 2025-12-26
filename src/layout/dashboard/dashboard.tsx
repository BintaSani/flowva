import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/sidebar";
import { useToggle } from "../../context/toggleContext";

export default function DashboardLayout() {
  const { isOpen } = useToggle();
  return (
    <div className="flex flex-col md:flex-row min-h-screen lg:h-screen w-full lg:md:overflow-hidden ">
      <div
        className={`fixed top-0 left-0 bg-black/25 w-full h-full z-10 ${
          isOpen ? "block" : "hidden"
        } lg:flex lg:w-fit lg:relative z-100 `}
      >
        <aside className="w-72 border-r bg-white overflow-x-hidden flex flex-col h-screen shadow-md border-black/10 text-black font-sans">
          <Sidebar />
        </aside>
      </div>
      <main className="w-full bg-gray-50 px-4 lg:px-8 lg:pt-8 min-h-screen grow box-border md:overflow-y-auto lg:min-h-0">
        <Outlet />{" "}
      </main>{" "}
    </div>
  );
}
