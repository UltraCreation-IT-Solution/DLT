import React from "react";
import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";

function AdminNavBar() {
  return (
    <nav className="h-[100px] bg-white">
      <div className="flex justify-between items-center h-full mx-10 md:mx-20">
        {/* Startup */}
        <div className="text-[#001C51] text-3xl font-extrabold">
          <Link to="/">Startup</Link>
        </div>

        <div className="flex gap-5 items-center">
          {/* search bar  */}
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <IoSearchOutline className="text-gray-500 h-4 w-4" />
            </span>
            <input
              type="text"
              className="pl-10 pr-4 py-2 border rounded-full w-96 focus:outline-none   bg-[#F5F6FA] focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Search"
            />
          </div>

          <IoNotifications className="h-5 w-5" />
          <FaUserCircle className="h-5 w-5" />
        </div>
      </div>
    </nav>
  );
}

export default AdminNavBar;
