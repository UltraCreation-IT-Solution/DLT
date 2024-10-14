import React, { useState } from "react";
import { FaUser, FaCalendar, FaHome } from "react-icons/fa";
import { AiFillDashboard } from "react-icons/ai";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import AllInstructors from "./AllInstructors";
import AdminQueries from "./AdminQueries";

const AdminDashboard = () => {
  // State management
  const [activeTab, setActiveTab] = useState("Instructors");

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Sidebar */}
      <div className="bg-white text-neutral-1000 w-full md:w-[20%] p-4 flex md:flex-col justify-between fixed md:relative bottom-0 md:bottom-auto z-10 md:z-auto border-r border-solid border-neutral-100">
        <div>
          <div className="flex md:flex-col space-x-4 md:space-x-0 md:space-y-4 w-full justify-around border-b border-solid border-neutral-100 pb-4">
            <button
              onClick={() => setActiveTab("Dashboard")}
              className={`flex items-center justify-center md:justify-start space-x-2 md:space-x-4 w-full px-4 py-2 rounded-lg ${
                activeTab === "Dashboard" ? "bg-secondary-400 text-white" : ""
              }`}
            >
              <AiFillDashboard className="w-5 h-5" />
              <span className="hidden md:block">Dashboard</span>
            </button>
            <button
              onClick={() => setActiveTab("Instructors")}
              className={`flex items-center justify-center md:justify-start space-x-2 md:space-x-4 w-full px-4 py-2 rounded-lg ${
                activeTab === "Instructors" ? "bg-secondary-400 text-white" : ""
              }`}
            >
              <LuLayoutDashboard className="w-5 h-5" />
              <span className="hidden md:block">Instructors</span>
            </button>
            <button
              onClick={() => setActiveTab("Students")}
              className={`flex items-center justify-center md:justify-start space-x-2 md:space-x-4 w-full px-4 py-2 rounded-lg ${
                activeTab === "Students" ? "bg-secondary-400 text-white" : ""
              }`}
            >
              <FaRegHeart className="w-5 h-5" />
              <span className="hidden md:block">Students</span>
            </button>
            <button
              onClick={() => setActiveTab("Bookings")}
              className={`flex items-center justify-center md:justify-start space-x-2 md:space-x-4 w-full px-4 py-2 rounded-lg ${
                activeTab === "Bookings" ? "bg-secondary-400 text-white" : ""
              }`}
            >
              <FaCalendar className="w-5 h-5" />
              <span className="hidden md:block">Bookings</span>
            </button>
            <button
              onClick={() => setActiveTab("Inbox")}
              className={`flex items-center justify-center md:justify-start space-x-2 md:space-x-4 w-full px-4 py-2 rounded-lg ${
                activeTab === "Inbox" ? "bg-secondary-400 text-white" : ""
              }`}
            >
              <FaCalendar className="w-5 h-5" />
              <span className="hidden md:block">Inbox</span>
            </button>
            <button
              onClick={() => setActiveTab("queries")}
              className={`flex items-center justify-center md:justify-start space-x-2 md:space-x-4 w-full px-4 py-2 rounded-lg ${
                activeTab === "queries" ? "bg-secondary-400 text-white" : ""
              }`}
            >
              <FaHome className="w-5 h-5" />
              <span className="hidden md:block">Queries</span>
            </button>
          </div>
          <div className="flex md:flex-col space-x-4 md:space-x-0 md:space-y-4 w-full justify-around border-b border-solid border-neutral-100 py-6">
            <button
              onClick={() => setActiveTab("Staff")}
              className={`flex items-center justify-center md:justify-start space-x-2 md:space-x-4 w-full px-4 py-2 rounded-lg ${
                activeTab === "Staff" ? "bg-secondary-400 text-white" : ""
              }`}
            >
              <AiFillDashboard className="w-5 h-5" />
              <span className="hidden md:block">Staff & Roles</span>
            </button>
          </div>
          <div className="flex md:flex-col space-x-4 md:space-x-0 md:space-y-4 w-full justify-around py-4">
            <button
              onClick={() => setActiveTab("Settings")}
              className={`flex items-center justify-center md:justify-start space-x-2 md:space-x-4 w-full px-4 py-2 rounded-lg ${
                activeTab === "Settings" ? "bg-secondary-400 text-white" : ""
              }`}
            >
              <AiFillDashboard className="w-5 h-5" />
              <span className="hidden md:block">Settings</span>
            </button>
            <button
              onClick={() => setActiveTab("Logout")}
              className={`flex items-center justify-center md:justify-start space-x-2 md:space-x-4 w-full px-4 py-2 rounded-lg ${
                activeTab === "Logout" ? "bg-secondary-400 text-white" : ""
              }`}
            >
              <AiFillDashboard className="w-5 h-5" />
              <span className="hidden md:block">Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-[75%] overflow-y-scroll mb-10">
        {(activeTab === "Home" || activeTab === "Instructors") && (
          <AllInstructors />
        )}
        {activeTab === "queries" && <AdminQueries />}
      </div>
    </div>
  );
};

export default AdminDashboard;
