import React, { useState } from "react";
import ReactModal from "react-modal";
import { FaSearch, FaFilter, FaTh, FaBars, FaCaretDown } from "react-icons/fa";
import { BiReset } from "react-icons/bi";

const AllInstructors = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [isExperienceModalOpen, setIsExperienceModalOpen] = useState(false);
  const [isAvailabilityModalOpen, setIsAvailabilityModalOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState("");
  const [selectedAvailability, setSelectedAvailability] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const instructors = [
    {
      id: 1,
      name: "Rakesh Mehta",
      phone: "9876543210",
      location: "Mumbai",
      availability: "Active",
      experience: "3-5 years",
      profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 2,
      name: "Ishika Mehta",
      phone: "9876543210",
      location: "Mumbai",
      availability: "onLeave",
      experience: "1-3 years",
      profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: 3,
      name: "Kunal Sharma",
      phone: "9876543210",
      location: "Mumbai",
      availability: "Inactive",
      experience: "Less than 1 year",
      profileImage: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      id: 4,
      name: "Rakesh Mehta",
      phone: "9876543210",
      location: "Mumbai",
      availability: "Active",
      experience: "3-5 years",
      profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 5,
      name: "Ishika Mehta",
      phone: "9876543210",
      location: "Mumbai",
      availability: "onLeave",
      experience: "1-3 years",
      profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: 6,
      name: "Kunal Sharma",
      phone: "9876543210",
      location: "Mumbai",
      availability: "Inactive",
      experience: "Less than 1 year",
      profileImage: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      id: 7,
      name: "Rakesh Mehta",
      phone: "9876543210",
      location: "Mumbai",
      availability: "Active",
      experience: "3-5 years",
      profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 8,
      name: "Ishika Mehta",
      phone: "9876543210",
      location: "Mumbai",
      availability: "onLeave",
      experience: "1-3 years",
      profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: 9,
      name: "Kunal Sharma",
      phone: "9876543210",
      location: "Mumbai",
      availability: "Inactive",
      experience: "Less than 1 year",
      profileImage: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      id: 10,
      name: "Rakesh Mehta",
      phone: "9876543210",
      location: "Mumbai",
      availability: "Active",
      experience: "3-5 years",
      profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 11,
      name: "Ishika Mehta",
      phone: "9876543210",
      location: "Mumbai",
      availability: "onLeave",
      experience: "1-3 years",
      profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: 12,
      name: "Kunal Sharma",
      phone: "9876543210",
      location: "Mumbai",
      availability: "Inactive",
      experience: "Less than 1 year",
      profileImage: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    // Add more instructors here
  ];

  // Filter instructors based on search term, experience, and availability
  const filteredInstructors = instructors.filter((instructor) => {
    return (
      instructor.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!selectedExperience || instructor.experience === selectedExperience) &&
      (!selectedAvailability ||
        instructor.availability === selectedAvailability)
    );
  });

  // Clear all filters
  const clearFilters = () => {
    setSelectedExperience("");
    setSelectedAvailability("");
    setSearchTerm("");
  };

  return (
    <div className="flex-grow bg-white px-4 py-2 overflow-scroll">
      {/* heading */}
      <div className="flex justify-between">
        <div className="text-desk-h-6 font-sans font-bold">Instructors</div>
        <div className="flex gap-4 items-center">
          <button
            onClick={() => setViewMode("grid")}
            className={`p-2 ${
              viewMode === "grid" ? "bg-blue-500 text-white" : "bg-gray-100"
            }`}
          >
            <FaTh className="w-5 h-5" />
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`p-2 ${
              viewMode === "list" ? "bg-blue-500 text-white" : "bg-gray-100"
            }`}
          >
            <FaBars className="w-5 h-5" />
          </button>
        </div>
      </div>
      {/* Header with Search and Filters */}
      <div className="flex justify-between items-center py-4 my-3">
        {/* Search Bar */}
        <div className="flex items-center bg-gray-100 rounded-md px-4 py-2 w-[50%] border border-solid border-neutral-100">
          <FaSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="ml-2 bg-transparent focus:outline-none text-neutral-600"
          />
        </div>

        {/* Filters and View Mode */}
        <div className="flex items-center gap-4">
          <button
            className="flex gap-1 items-center  px-4 py-2"
            onClick={() => setIsAvailabilityModalOpen(true)}
          >
            <FaFilter className="mr-2" />
            <span className="font-semibold font-poppins text-desk-b-3 text-neutral-600">
              Availability{" "}
            </span>
            <FaCaretDown />
          </button>
          <button
            className="flex gap-1 items-center  px-4 py-2"
            onClick={() => setIsExperienceModalOpen(true)}
          >
            <span className="font-semibold font-poppins text-desk-b-3 text-neutral-600">
              Experience
            </span>
            <FaCaretDown />
          </button>

          <button
            onClick={clearFilters}
            className="text-error-300 px-4 py-2 flex gap-1 items-center"
          >
            <BiReset />
            Reset Filters
          </button>
        </div>
      </div>
      {/* Instructor Cards */}
      {viewMode === "grid" ? (
        <div className="p-4 ">
          <div className="flex flex-wrap justify-between gap-3 min-h-fit max-h-fit">
            {filteredInstructors.map((instructor) => (
              <div
                key={instructor.id}
                className="bg-white w-[23%] shadow-md rounded-lg p-4 flex flex-col items-center relative border border-solid border-neutral-100"
              >
                <div className="">
                  <img
                    src={instructor.profileImage}
                    alt={instructor.name}
                    className="w-14 h-14 rounded-full object-cover object-center"
                  />
                  {/* Status Indicator */}
                  <span
                    className={`absolute top-2 right-3 w-3 h-3 rounded-full ${
                      instructor.availability === "Active"
                        ? "bg-green-400 text-green-800"
                        : instructor.availability === "onLeave"
                        ? "bg-yellow-400 text-red-800"
                        : "bg-red-400 text-red-800"
                    }`}
                  ></span>
                </div>
                <h3 className="mt-3 font-semibold font-poppins text-desk-b-2 ">
                  {instructor.name}
                </h3>
                <div className="pt-2 w-full font-poppins text-desk-b-3 text-neutral-600">
                  <p className="text-gray-500 w-full flex justify-between">
                    <strong className="font-semibold">Phone: </strong>{" "}
                    <p>{instructor.phone}</p>
                  </p>
                  <p className="text-gray-500 w-full flex justify-between">
                    <strong className="font-semibold">Location:</strong>{" "}
                    <p>{instructor.location}</p>
                  </p>
                </div>
                <button className="w-full mt-4 bg-secondary-400 text-white py-2 px-4 rounded-md">
                  View Profile
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="p-4">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                    Name
                  </th>
                  <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                    Phone Number
                  </th>
                  <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                    Location
                  </th>
                  <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                    Status
                  </th>
                  <th className="text-left py-3 px-4"></th>
                </tr>
              </thead>
              <tbody>
                {filteredInstructors.map((instructor) => (
                  <tr key={instructor.id} className="border-t border-gray-200">
                    <td className="py-3 px-4 flex items-center">
                      <img
                        src={instructor.profileImage}
                        alt={instructor.name}
                        className="w-10 h-10 rounded-full mr-4"
                      />
                      <span className="font-medium text-blue-600">
                        {instructor.name}
                      </span>
                    </td>
                    <td className="py-3 px-4">{instructor.phone}</td>
                    <td className="py-3 px-4">{instructor.location}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          instructor.availability === "Active"
                            ? "bg-green-100 text-green-800"
                            : instructor.availability === "onLeave"
                            ? "bg-yellow-100 text-red-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {instructor.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <button className="bg-blue-500 text-white py-2 px-4 rounded-md">
                        View Profile
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {/* Experience Filter Modal */}
      <ReactModal
        isOpen={isExperienceModalOpen}
        onRequestClose={() => setIsExperienceModalOpen(false)}
        className="bg-white rounded-lg shadow-lg p-6"
        overlayClassName="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center"
      >
        <h3 className="text-lg font-bold mb-4">Select Experience Level</h3>
        <div className="flex flex-wrap gap-2">
          {[
            "Less than 1 year",
            "1-3 years",
            "3-5 years",
            "More than 5 years",
          ].map((experience) => (
            <button
              key={experience}
              onClick={() => setSelectedExperience(experience)}
              className={`px-4 py-2 rounded-full ${
                selectedExperience === experience
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              {experience}
            </button>
          ))}
        </div>
        <div className="flex justify-end mt-4">
          <button
            onClick={() => setIsExperienceModalOpen(false)}
            className="text-gray-700 px-4 py-2 mr-2"
          >
            Cancel
          </button>
          <button
            onClick={() => setIsExperienceModalOpen(false)}
            className="bg-blue-500 text-white px-4 py-2 rounded-full"
          >
            Apply Now
          </button>
        </div>
      </ReactModal>
      {/* Availability Filter Modal */}
      <ReactModal
        isOpen={isAvailabilityModalOpen}
        onRequestClose={() => setIsAvailabilityModalOpen(false)}
        className="bg-white rounded-lg shadow-lg p-6"
        overlayClassName="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center"
      >
        <h3 className="text-lg font-bold mb-4">Select Availability</h3>
        <div className="flex flex-wrap gap-2">
          {["Active", "Inactive", "onLeave"].map((availability) => (
            <button
              key={availability}
              onClick={() => setSelectedAvailability(availability)}
              className={`px-4 py-2 rounded-full ${
                selectedAvailability === availability
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              {availability}
            </button>
          ))}
        </div>
        <div className="flex justify-end mt-4">
          <button
            onClick={() => setIsAvailabilityModalOpen(false)}
            className="text-gray-700 px-4 py-2 mr-2"
          >
            Cancel
          </button>
          <button
            onClick={() => setIsAvailabilityModalOpen(false)}
            className="bg-blue-500 text-white px-4 py-2 rounded-full"
          >
            Apply Now
          </button>
        </div>
      </ReactModal>
    </div>
  );
};

export default AllInstructors;
