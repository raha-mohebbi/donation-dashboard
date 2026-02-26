import { RiNotification2Line } from "react-icons/ri";
import { TbSearch } from "react-icons/tb";

const Navbar = () => {
    return (
        <div className="navbar bg-white flex items-center p-1 shadow-md">
            <h1 className="text-xl font-bold text-[#60d680] mr-4 ml-8">Charity</h1>
            <div className="search flex items-center gap-2 border-l pl-4 ml-20">
                <div className="flex items-center gap-2 border rounded-md px-3 py-1">
                    <TbSearch className="text-xl text-gray-500" />
                    <input
                        type="text"
                        placeholder="Search anything..."
                        className="border-none outline-none p-1 w-64"
                    />
                </div>
            </div>
            <div className="nav-links flex gap-6 items-center ml-auto">
                <div className="bg-black rounded-md w-8 h-8 flex items-center justify-center text-white text-xs">
                    <a href="#" className="text-white ">
                        <RiNotification2Line className="w-5 h-5" />
                    </a>
                </div>
                <a href="#" className="text-gray-500">User Panel</a>
                {/* profile photo */}
                <a href="#" className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-300">
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                </a>
            </div>
        </div>
    );
};

export default Navbar;