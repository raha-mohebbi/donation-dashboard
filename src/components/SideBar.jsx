import { TiHomeOutline } from "react-icons/ti";
import { LuUsers } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa6";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import { RiSettings2Line } from "react-icons/ri";
import { LuCircleHelp } from "react-icons/lu";
import { IoLogOutOutline } from "react-icons/io5";

const SideBar = () => {
  return (
    <div className="sidebar flex flex-col gap-4 p-5 bg-white text-gray-500  w-[12.5rem]">
      <nav className="nav flex flex-col gap-3">
        <a
          href="./Dashboard.jsx"
          className="nav-item flex hover:bg-black hover:text-white p-2 rounded"
        >
          <TiHomeOutline className="mr-5 mt-1" />
          Dashboard
        </a>
        <a
          href="#"
          className="nav-item flex hover:bg-black hover:text-white p-2 rounded"
        >
          {" "}
          <LuUsers className="mr-5 mt-1" />
          Users
        </a>
        <a
          href="#"
          className="nav-item flex hover:bg-black hover:text-white p-2 rounded"
        >
          <FaRegHeart className="mr-5 mt-1" />
          Campaigns
        </a>
        <a
          href="#"
          className="nav-item flex hover:bg-black hover:text-white p-2 rounded"
        >
          <HiOutlineDocumentDuplicate className="mr-5 mt-1" />
          Documents
        </a>
        <a
          href="#"
          className="nav-item flex hover:bg-black hover:text-white p-2 rounded"
        >
          <RiSettings2Line className="mr-5 mt-1" />
          Settings
        </a>
        <a
          href="#"
          className="nav-item flex hover:bg-black hover:text-white p-2 rounded"
        >
          <LuCircleHelp className="mr-5 mt-1" />
          Help
        </a>
        <a
          href="#"
          className="nav-item flex hover:bg-black hover:text-white p-2 rounded"
        >
          <IoLogOutOutline className="mr-5 mt-1" />
          Logout
        </a>
      </nav>
    </div>
  );
};
export default SideBar;
