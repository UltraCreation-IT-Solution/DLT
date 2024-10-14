import React, { useState } from "react";
import { FaUser, FaCalendar, FaHome } from "react-icons/fa";
import AdminQueries from "./components/Admin/AdminQueries";
import { FaChevronDown } from "react-icons/fa";
import { RxReset } from "react-icons/rx";

const App = () => {
  // State management
  const [activeTab, setActiveTab] = useState("Instructors");
  const students = [
    {
      profil:
        "https://wallpapers.com/images/hd/professional-profile-pictures-1500-x-2100-bvjgzg0cwa8r051t.jpg",
      name: "Jane Cooper",
      phone: "1234567890",
      lession_status: "Ongoing",
      active_lessons: "10",
      status: "Active",
    },
    {
      profil:
        "https://imgcdn.stablediffusionweb.com/2024/4/16/16c82bf2-1f13-437d-9090-90759c843a26.jpg",
      name: "Tom Holland",
      phone: "1234567890",
      lession_status: "Ongoing",
      active_lessons: "10",
      status: "Active",
    },
    {
      profil:
        "https://wallpapers.com/images/hd/professional-profile-pictures-1500-x-2100-bvjgzg0cwa8r051t.jpg",
      name: "Jane Cooper",
      phone: "1234567890",
      lession_status: "Ongoing",
      active_lessons: "10",
      status: "Active",
    },
    {
      profil:
        "https://imgcdn.stablediffusionweb.com/2024/4/16/16c82bf2-1f13-437d-9090-90759c843a26.jpg",
      name: "Tom Holland",
      phone: "1234567890",
      lession_status: "Ongoing",
      active_lessons: "10",
      status: "Active",
    },
    {
      profil:
        "https://wallpapers.com/images/hd/professional-profile-pictures-1500-x-2100-bvjgzg0cwa8r051t.jpg",
      name: "Jane Cooper",
      phone: "1234567890",
      lession_status: "Ongoing",
      active_lessons: "10",
      status: "Active",
    },
    {
      profil:
        "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png",
      name: "Chris Evans",
      phone: "1234567890",
      lession_status: "Ongoing",
      active_lessons: "10",
      status: "Active",
    },
    {
      profil:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0-4XuVwezn1qwOrNYuHf5djvsEZaE2PJAFnuIRsZ8waUO7E_JnHg5xjOWiPizAB2j9VA&usqp=CAU",
      name: "Tom Holland",
      phone: "1234567890",
      lession_status: "Ongoing",
      active_lessons: "10",
      status: "Active",
    },
    {
      profil:
        "https://wallpapers.com/images/hd/professional-profile-pictures-1500-x-2100-bvjgzg0cwa8r051t.jpg",
      name: "Jane Cooper",
      phone: "1234567890",
      lession_status: "Ongoing",
      active_lessons: "10",
      status: "Active",
    },
    {
      profil:
        "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png",
      name: "Chris Evans",
      phone: "1234567890",
      lession_status: "Ongoing",
      active_lessons: "10",
      status: "Active",
    },
    {
      profil:
        "https://wallpapers.com/images/hd/professional-profile-pictures-1500-x-2100-bvjgzg0cwa8r051t.jpg",
      name: "Jane Cooper",
      phone: "1234567890",
      lession_status: "Ongoing",
      active_lessons: "10",
      status: "Active",
    },
    {
      profil:
        "https://wallpapers.com/images/hd/professional-profile-pictures-1500-x-2100-bvjgzg0cwa8r051t.jpg",
      name: "Jane Cooper",
      phone: "1234567890",
      lession_status: "Ongoing",
      active_lessons: "10",
      status: "Active",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Sidebar */}
      <div className="bg-gray-800 text-white w-full md:w-64 p-4 flex md:flex-col justify-between fixed md:relative bottom-0 md:bottom-auto z-10 md:z-auto">
        <div className="flex md:flex-col space-x-4 md:space-x-0 md:space-y-4 w-full justify-around">
          <button
            onClick={() => setActiveTab("Home")}
            className={`flex items-center justify-center md:justify-start space-x-2 md:space-x-4 w-full px-4 py-2 rounded-full ${
              activeTab === "Home" ? "bg-yellow-500 text-black" : ""
            }`}
          >
            <FaHome />
            <span className="hidden md:block">Home</span>
          </button>
          <button
            onClick={() => setActiveTab("Instructors")}
            className={`flex items-center justify-center md:justify-start space-x-2 md:space-x-4 w-full px-4 py-2 rounded-full ${
              activeTab === "Instructors" ? "bg-yellow-500 text-black" : ""
            }`}
          >
            <FaUser />
            <span className="hidden md:block">Instructors</span>
          </button>
          <button
            onClick={() => setActiveTab("Bookings")}
            className={`flex items-center justify-center md:justify-start space-x-2 md:space-x-4 w-full px-4 py-2 rounded-full ${
              activeTab === "Bookings" ? "bg-yellow-500 text-black" : ""
            }`}
          >
            <FaCalendar />
            <span className="hidden md:block">Bookings</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full md:w-[80%] px-5">
        <div className="text-4xl font-bold">Students</div>
        <div className=" lg:flex items-center justify-between jus mt-5">
          <input
            type="text"
            placeholder="Search"
            className="p-2 text-base bg-[#F5F6FA] rounded-md outline-none w-[350px] border border-solid border-slate-300 "
          />
          <div className="mt-4 lg:mt-0 flex items-center gap-7 cursor-pointer">
            <div className="flex items-center gap-3 text-base text-slate-600">
              <div>Availability</div>
              <FaChevronDown />
            </div>
            <div className="flex items-center gap-3 text-base text-slate-600">
              <div>Experience Level</div>
              <FaChevronDown />
            </div>
            <div className="flex items-center gap-3 text-base text-red-600">
              <RxReset />
              <div>Reset Filter</div>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap gap-8">
          {students.map((item, index) => (
            <div
              key={index}
              className="w-[290px] p-3 rounded-lg drop-shadow-md shadow-md border border-solid border-slate-200 flex flex-col"
            >
              <img
                className="h-16 w-16 rounded-full shrink-0 object-cover self-center"
                src={item.profil}
              />
              <div className="mt-3 text-lg font-semibold text-center">
                {item.name}{" "}
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="text-slate-600">Phone:</div>
                <div className="">{item.phone}</div>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="text-slate-600">Lession Status:</div>
                <div className="">{item.lession_status}</div>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="text-slate-600">Active Lessons:</div>
                <div className="">{item.active_lessons}</div>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="text-slate-600">Status:</div>
                <div className="">{item.status}</div>
              </div>
              <button className="bg-[#2B6BE7] cursor-pointer w-full text-white rounded-lg mt-5 py-2 text-lg">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
