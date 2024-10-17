import React, { useState } from "react";
import { FaSearch, FaTh, FaBars, FaFilter, FaCaretDown } from "react-icons/fa";
import { RxReset } from "react-icons/rx";
import ReactModal from "react-modal";

const mockData = [
  {
    id: 1,
    name: "Rakesh Mehta",
    phone: "9876543210",
    location: "Mumbai",
    status: "Pending",
    date: "2024-10-01",
  },
  {
    id: 2,
    name: "Ishika Mehta",
    phone: "9876543210",
    location: "Mumbai",
    status: "Accepted",
    date: "2024-10-02",
  },
  {
    id: 3,
    name: "Kunal Sharma",
    phone: "9876543210",
    location: "Mumbai",
    status: "Pending",
    date: "2024-10-03",
  },
  {
    id: 4,
    name: "Rohan Verma",
    phone: "9876543210",
    location: "Mumbai",
    status: "Rejected",
    date: "2024-10-03",
  },
  {
    id: 1,
    name: "Rakesh Mehta",
    phone: "9876543210",
    location: "Mumbai",
    status: "Pending",
    date: "2024-10-01",
  },
  {
    id: 2,
    name: "Ishika Mehta",
    phone: "9876543210",
    location: "Mumbai",
    status: "Accepted",
    date: "2024-10-02",
  },
  {
    id: 3,
    name: "Kunal Sharma",
    phone: "9876543210",
    location: "Mumbai",
    status: "Pending",
    date: "2024-10-03",
  },
  {
    id: 4,
    name: "Rohan Verma",
    phone: "9876543210",
    location: "Mumbai",
    status: "Rejected",
    date: "2024-10-03",
  },
  {
    id: 1,
    name: "Rakesh Mehta",
    phone: "9876543210",
    location: "Mumbai",
    status: "Pending",
    date: "2024-10-01",
  },
  {
    id: 2,
    name: "Ishika Mehta",
    phone: "9876543210",
    location: "Mumbai",
    status: "Accepted",
    date: "2024-10-02",
  },
  {
    id: 3,
    name: "Kunal Sharma",
    phone: "9876543210",
    location: "Mumbai",
    status: "Pending",
    date: "2024-10-03",
  },
  {
    id: 4,
    name: "Rohan Verma",
    phone: "9876543210",
    location: "Mumbai",
    status: "Rejected",
    date: "2024-10-03",
  },
];

const QueriesComponent = () => {
  const [data, setData] = useState(mockData);
  const [viewMode, setViewMode] = useState("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [dateFilter, setDateFilter] = useState("");
  const [modalStatusOpen, setModalStatusOpen] = useState(false);
  const [modalDateOpen, setModalDateOpen] = useState(false);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleStatusFilter = (status) => {
    setStatusFilter(status);
    setModalStatusOpen(false);
  };

  const handleDateFilter = (e) => {
    setDateFilter(e.target.value);
    setModalDateOpen(false);
  };

  const resetFilters = () => {
    setSearchQuery("");
    setStatusFilter("All");
    setDateFilter("");
  };

  const filteredData = data.filter((item) => {
    return (
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (statusFilter === "All" || item.status === statusFilter) &&
      (dateFilter ? item.date === dateFilter : true)
    );
  });

  return (
    <div className="p-6">
      {/* Header and Search Bar */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Queries</h1>
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

      {/* Filters Section */}
      <div className="flex space-x-4 justify-between mb-6">
        <div className="flex items-center bg-gray-100 rounded-md px-4 py-2 w-[50%] border border-solid border-neutral-100">
          <FaSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearch}
            className="ml-2 bg-transparent focus:outline-none text-neutral-600"
          />
        </div>
        <div className="flex space-x-4 text-slate-600">
          <button
            onClick={() => setModalDateOpen(true)}
            className="p-3 flex gap-1 items-center relative"
          >
            <FaFilter className="mr-2" />
            {dateFilter ? `Date: ${dateFilter}` : "Date"}
            {dateFilter && (
              <span className="absolute top-0 right-0 p-1 text-xs text-blue-600">
                Active
              </span>
            )}
            <FaCaretDown />
          </button>

          <button
            onClick={() => setModalStatusOpen(true)}
            className={`p-3 rounded-lg ${
              statusFilter === "Pending"
                ? "text-yellow-700 bg-yellow-100"
                : statusFilter === "Accepted"
                ? "text-green-700 bg-green-100"
                : statusFilter === "Rejected"
                ? "text-red-700 bg-red-100"
                : "text-gray-700 bg-gray-100"
            } flex gap-1 items-center bg-white `}
          >
            {" "}
            Status: {statusFilter}
            <FaCaretDown />
          </button>

          <div
            className="flex items-center gap-3 text-base text-red-600"
            onClick={resetFilters}
          >
            <RxReset />
            <div>Reset Filter</div>
          </div>
        </div>
      </div>

      {viewMode === "grid" ? (
        <div className="py-6">
          <div className="w-full flex flex-wrap justify-between space-3 gap-y-4">
            {filteredData.map((query) => (
              <div
                key={query.id}
                className="relative w-[240px] border p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 bg-white"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="">
                    <img
                      src={`https://i.pravatar.cc/150?u=${query.id}`}
                      alt={query.name}
                      className="w-10 h-10 rounded-full mr-4"
                    />
                    <span
                      className={`absolute top-2 right-3 h-3 w-3 rounded-full ${
                        query.status === "Accepted"
                          ? "bg-green-400 text-green-800"
                          : query.status === "Pending"
                          ? "bg-yellow-400 text-yellow-800"
                          : "bg-red-700 text-red-800"
                      }`}
                    ></span>
                  </div>
                </div>
                <div className="text-center">
                  <h2 className="font-bold text-lg mb-2">{query.name}</h2>
                  <div className="text-sm text-gray-600">
                    <p className="flex w-full justify-between mb-2">
                      <strong>Query ID:</strong> <p>Q20241015</p>
                    </p>
                    <p className="flex w-full justify-between mb-2">
                      <strong>Phone:</strong> {query.phone}
                    </p>
                    <p className="flex w-full justify-between mb-2">
                      <strong>Location:</strong> {query.location}
                    </p>
                    <p className="flex w-full justify-between mb-2">
                      <strong>Status:</strong>{" "}
                      <span
                        className={`${
                          query.status === "Accepted"
                            ? " text-green-800"
                            : query.status === "Pending"
                            ? " text-yellow-800"
                            : " text-red-800"
                        }`}
                      >
                        {query.status}
                      </span>
                    </p>
                  </div>
                  <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-600 transition-colors duration-200">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="p-4">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border">
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
                {filteredData.map((instructor) => (
                  <tr key={instructor.id} className="border-t border-gray-200">
                    <td className="py-3 px-4 flex items-center">
                      {/* Replace the following with profileImage if available */}
                      <img
                        src={`https://i.pravatar.cc/150?u=${instructor.id}`}
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
                          instructor.status === "Accepted"
                            ? "bg-green-100 text-green-800"
                            : instructor.status === "Pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {instructor.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <button className="text-blue-500 hover:text-blue-600 focus:outline-none">
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Query Status Modal */}
      <ReactModal
        isOpen={modalStatusOpen}
        onRequestClose={() => setModalStatusOpen(false)}
        className="bg-white rounded-lg shadow-lg p-6"
        overlayClassName="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center"
      >
        <h3 className="text-lg font-bold mb-4">Select Query Status</h3>
        <div className="flex flex-wrap gap-2">
          {["All", "Pending", "Accepted", "Rejected"].map((status) => (
            <button
              key={status}
              onClick={() => handleStatusFilter(status)}
              className={`px-4 py-2 rounded-full ${
                statusFilter === status
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              {status}
            </button>
          ))}
        </div>
        <div className="flex justify-end mt-4">
          <button
            onClick={() => setModalStatusOpen(false)}
            className="text-gray-700 px-4 py-2 mr-2"
          >
            Cancel
          </button>
          <button
            onClick={() => setModalStatusOpen(false)}
            className="bg-blue-500 text-white px-4 py-2 rounded-full"
          >
            Apply
          </button>
        </div>
      </ReactModal>

      {/* Date Filter Modal */}
      <ReactModal
        isOpen={modalDateOpen}
        onRequestClose={() => setModalDateOpen(false)}
        className="bg-white rounded-lg shadow-lg p-6"
        overlayClassName="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center"
      >
        <h3 className="text-lg font-bold mb-4">Select Date</h3>
        <input
          type="date"
          value={dateFilter}
          onChange={handleDateFilter}
          className="p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex justify-end mt-4">
          <button
            onClick={() => setModalDateOpen(false)}
            className="text-gray-700 px-4 py-2 mr-2"
          >
            Cancel
          </button>
          <button
            onClick={() => setModalDateOpen(false)}
            className="bg-blue-500 text-white px-4 py-2 rounded-full"
          >
            Apply
          </button>
        </div>
      </ReactModal>
    </div>
  );
};

export default QueriesComponent;
