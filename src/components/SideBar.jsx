import { TiHomeOutline } from "react-icons/ti";
import { LuUsers } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa6";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import { RiSettings2Line } from "react-icons/ri";
import { LuCircleHelp } from "react-icons/lu";
import { IoLogOutOutline } from "react-icons/io5";

const SideBar = () => {
  return (
    <div className="sidebar flex flex-col gap-4 p-5 bg-gray-800 text-white w-[12.5rem]">
       
      <nav className="nav flex flex-col gap-3">
        <a href="#" className="nav-item flex hover:bg-gray-700 p-2 rounded"><TiHomeOutline className="mr-2" />Dashboard</a>
        <a href="#" className="nav-item flex hover:bg-gray-700 p-2 rounded"> <LuUsers className="mr-2" />Users</a>
        <a href="#" className="nav-item flex hover:bg-gray-700 p-2 rounded"><FaRegHeart className="mr-2" />Campaigns</a>
        <a href="#" className="nav-item flex hover:bg-gray-700 p-2 rounded"><HiOutlineDocumentDuplicate className="mr-2" />Documents</a>
        <a href="#" className="nav-item flex hover:bg-gray-700 p-2 rounded"><RiSettings2Line className="mr-2" />Settings</a>
                <a href="#" className="nav-item flex hover:bg-gray-700 p-2 rounded"><LuCircleHelp className="mr-2" />Help</a>
                        <a href="#" className="nav-item flex hover:bg-gray-700 p-2 rounded"><IoLogOutOutline className="mr-2" />Logout</a>
      </nav>
    </div>
  )}
  export default SideBar