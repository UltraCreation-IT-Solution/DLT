import React, { useState } from "react";
import { FaBars, FaTh } from "react-icons/fa";
import Modal from "react-modal";
const bookingData = [
  {
    id: "#AU-BK-2024-00123",
    instructor: "Robert Fox",
    learner: "Leslie Alexander",
    bookingDate: "2024-10-02",
    packageType: "Standard",
    sessionFee: "$550",
    avatar: "https://via.placeholder.com/50", // Replace with real image
  },
  {
    id: "#AU-BK-2024-00124",
    instructor: "Darlene Robertson",
    learner: "Guy Hawkins",
    bookingDate: "2024-10-05",
    packageType: "Premium",
    sessionFee: "$720",
    avatar: "https://via.placeholder.com/50", // Replace with real image
  },
  {
    id: "#AU-BK-2024-00125",
    instructor: "Jenny Wilson",
    learner: "Cody Fisher",
    bookingDate: "2024-10-10",
    packageType: "Basic",
    sessionFee: "$320",
    avatar: "https://via.placeholder.com/50", // Replace with real image
  },
  {
    id: "#AU-BK-2024-00126",
    instructor: "Ralph Edwards",
    learner: "Courtney Henry",
    bookingDate: "2024-10-12",
    packageType: "Standard",
    sessionFee: "$550",
    avatar: "https://via.placeholder.com/50", // Replace with real image
  },
  {
    id: "#AU-BK-2024-00127",
    instructor: "Devon Lane",
    learner: "Kristin Watson",
    bookingDate: "2024-10-15",
    packageType: "Premium",
    sessionFee: "$780",
    avatar: "https://via.placeholder.com/50", // Replace with real image
  },
  {
    id: "#AU-BK-2024-00128",
    instructor: "Cameron Williamson",
    learner: "Wade Warren",
    bookingDate: "2024-10-17",
    packageType: "Basic",
    sessionFee: "$300",
    avatar: "https://via.placeholder.com/50", // Replace with real image
  },
  {
    id: "#AU-BK-2024-00129",
    instructor: "Esther Howard",
    learner: "Savannah Nguyen",
    bookingDate: "2024-10-20",
    packageType: "Standard",
    sessionFee: "$590",
    avatar: "https://via.placeholder.com/50", // Replace with real image
  },
  {
    id: "#AU-BK-2024-00130",
    instructor: "Kathryn Murphy",
    learner: "Brooklyn Simmons",
    bookingDate: "2024-10-22",
    packageType: "Standard",
    sessionFee: "$550",
    avatar: "https://via.placeholder.com/50", // Replace with real image
  },
  {
    id: "#AU-BK-2024-00131",
    instructor: "Arlene McCoy",
    learner: "Dianne Russell",
    bookingDate: "2024-10-25",
    packageType: "Premium",
    sessionFee: "$800",
    avatar: "https://via.placeholder.com/50", // Replace with real image
  },
  {
    id: "#AU-BK-2024-00132",
    instructor: "Ronald Richards",
    learner: "Jerome Bell",
    bookingDate: "2024-10-27",
    packageType: "Basic",
    sessionFee: "$280",
    avatar: "https://via.placeholder.com/50", // Replace with real image
  },
  {
    id: "#AU-BK-2024-00133",
    instructor: "Jane Cooper",
    learner: "Annette Black",
    bookingDate: "2024-10-29",
    packageType: "Standard",
    sessionFee: "$540",
    avatar: "https://via.placeholder.com/50", // Replace with real image
  },
  {
    id: "#AU-BK-2024-00134",
    instructor: "Albert Flores",
    learner: "Floyd Miles",
    bookingDate: "2024-10-31",
    packageType: "Premium",
    sessionFee: "$750",
    avatar: "https://via.placeholder.com/50", // Replace with real image
  },
];

// Modal Custom Styles
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const AllBookings = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(bookingData);
  const [isDateModalOpen, setIsDateModalOpen] = useState(false);
  const [isPackageModalOpen, setIsPackageModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedPackage, setSelectedPackage] = useState("");

  // Date Filter
  const handleDateFilter = (date) => {
    setSelectedDate(date);
    setIsDateModalOpen(false);
  };

  // Package Filter
  const handlePackageFilter = (packageType) => {
    setSelectedPackage(packageType);
    setIsPackageModalOpen(false);
  };

  // Search Filter Function
  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    const filtered = bookingData.filter(
      (booking) =>
        booking.instructor.toLowerCase().includes(searchTerm) ||
        booking.learner.toLowerCase().includes(searchTerm)
    );
    setFilteredData(filtered);
  };

  // Apply both date and package filters
  const applyFilters = () => {
    const filtered = bookingData.filter((booking) => {
      const dateCondition = selectedDate
        ? new Date(booking.bookingDate) >= new Date(selectedDate)
        : true;
      const packageCondition = selectedPackage
        ? booking.packageType === selectedPackage
        : true;
      return dateCondition && packageCondition;
    });
    setFilteredData(filtered);
  };

  return (
    <div className="p-6">
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

      <div className="p-6">
        {/* Search Bar */}
        <div className="mb-4">
          <input
            type="text"
            className="border rounded-lg p-2 w-full"
            placeholder="Search by Instructor or Learner"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>

        {/* Filters */}
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setIsDateModalOpen(true)}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Date Filter
          </button>
          <button
            onClick={() => setIsPackageModalOpen(true)}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Package Filter
          </button>
        </div>

        {/* Date Filter Modal */}
        <Modal
          isOpen={isDateModalOpen}
          onRequestClose={() => setIsDateModalOpen(false)}
          style={customStyles}
        >
          <h2>Select Date</h2>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => handleDateFilter(e.target.value)}
            className="border p-2 rounded-lg"
          />
          <button
            onClick={applyFilters}
            className="mt-4 bg-blue-500 text-white p-2 rounded-lg"
          >
            Apply Date Filter
          </button>
        </Modal>

        {/* Package Filter Modal */}
        <Modal
          isOpen={isPackageModalOpen}
          onRequestClose={() => setIsPackageModalOpen(false)}
          style={customStyles}
        >
          <h2>Select Package</h2>
          <div className="flex flex-col space-y-4">
            {["Basic", "Standard", "Premium"].map((pkg) => (
              <button
                key={pkg}
                className={`p-2 rounded-lg ${
                  selectedPackage === pkg
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-black"
                }`}
                onClick={() => handlePackageFilter(pkg)}
              >
                {pkg} Plan
              </button>
            ))}
          </div>
          <button
            onClick={applyFilters}
            className="mt-4 bg-blue-500 text-white p-2 rounded-lg"
          >
            Apply Package Filter
          </button>
        </Modal>

        {/* Booking Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredData.map((booking) => (
            <div
              key={booking.id}
              className="p-4 bg-white rounded-lg shadow-lg border border-gray-200"
            >
              <img
                src={booking.avatar}
                alt="Instructor"
                className="rounded-full w-12 h-12"
              />
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-semibold">{booking.id}</h4>
                  <p>Instructor: {booking.instructor}</p>
                  <p>Learner: {booking.learner}</p>
                  <p>
                    Booking Date:{" "}
                    {new Date(booking.bookingDate).toLocaleDateString()}
                  </p>
                  <p>Package Type: {booking.packageType}</p>
                  <p>Session Fee: {booking.sessionFee}</p>
                </div>
              </div>
              <button className="mt-4 w-full bg-blue-500 text-white p-2 rounded-lg">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllBookings;
