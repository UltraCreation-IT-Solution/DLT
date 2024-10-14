import React, { useState } from "react";
import ReactModal from "react-modal";
import { FaBars, FaCaretDown, FaFilter, FaSearch, FaTh } from "react-icons/fa";
import { RxReset } from "react-icons/rx";

ReactModal.setAppElement("#root");

const AllStudents = () => {
  const [isLessonStatusModalOpen, setIsLessonStatusModalOpen] = useState(false);
  const [isEnrolledDateModalOpen, setIsEnrolledDateModalOpen] = useState(false);
  const [viewMode, setViewMode] = useState("grid");
  const [lessonStatus, setLessonStatus] = useState("All");
  const [enrolledDate, setEnrolledDate] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [students, setStudents] = useState([
    {
      name: "John Doe",
      phone: "123-456-7890",
      lession_status: "Ongoing",
      active_lessons: 5,
      enrolledDate: "2023-08-10",
      profil:
        "https://wallpapers.com/images/hd/professional-profile-pictures-1500-x-2100-bvjgzg0cwa8r051t.jpg",
    },
    {
      name: "Jane Smith",
      phone: "987-654-3210",
      lession_status: "Scheduled",
      active_lessons: 3,
      enrolledDate: "2023-07-01",
      profil:
        "https://imgcdn.stablediffusionweb.com/2024/4/16/16c82bf2-1f13-437d-9090-90759c843a26.jpg",
    },
    {
      name: "Michael Johnson",
      phone: "555-555-5555",
      lession_status: "Ongoing",
      active_lessons: 2,
      enrolledDate: "2023-06-15",
      profil: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Emily Davis",
      phone: "444-444-4444",
      lession_status: "Scheduled",
      active_lessons: 4,
      enrolledDate: "2023-09-05",
      profil: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      name: "William Brown",
      phone: "222-222-2222",
      lession_status: "Ongoing",
      active_lessons: 6,
      enrolledDate: "2023-05-20",
      profil: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      name: "Sophia Wilson",
      phone: "333-333-3333",
      lession_status: "Scheduled",
      active_lessons: 1,
      enrolledDate: "2023-10-01",
      profil: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      name: "John Doe",
      phone: "123-456-7890",
      lession_status: "Ongoing",
      active_lessons: 5,
      enrolledDate: "2023-08-10",
      profil:
        "https://wallpapers.com/images/hd/professional-profile-pictures-1500-x-2100-bvjgzg0cwa8r051t.jpg",
    },
    {
      name: "Jane Smith",
      phone: "987-654-3210",
      lession_status: "Scheduled",
      active_lessons: 3,
      enrolledDate: "2023-07-01",
      profil:
        "https://imgcdn.stablediffusionweb.com/2024/4/16/16c82bf2-1f13-437d-9090-90759c843a26.jpg",
    },
    {
      name: "Michael Johnson",
      phone: "555-555-5555",
      lession_status: "Ongoing",
      active_lessons: 2,
      enrolledDate: "2023-06-15",
      profil: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Emily Davis",
      phone: "444-444-4444",
      lession_status: "Scheduled",
      active_lessons: 4,
      enrolledDate: "2023-09-05",
      profil: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      name: "William Brown",
      phone: "222-222-2222",
      lession_status: "Ongoing",
      active_lessons: 6,
      enrolledDate: "2023-05-20",
      profil: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      name: "Sophia Wilson",
      phone: "333-333-3333",
      lession_status: "Scheduled",
      active_lessons: 1,
      enrolledDate: "2023-10-01",
      profil: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      name: "John Doe",
      phone: "123-456-7890",
      lession_status: "Ongoing",
      active_lessons: 5,
      enrolledDate: "2023-08-10",
      profil:
        "https://wallpapers.com/images/hd/professional-profile-pictures-1500-x-2100-bvjgzg0cwa8r051t.jpg",
    },
    {
      name: "Jane Smith",
      phone: "987-654-3210",
      lession_status: "Scheduled",
      active_lessons: 3,
      enrolledDate: "2023-07-01",
      profil:
        "https://imgcdn.stablediffusionweb.com/2024/4/16/16c82bf2-1f13-437d-9090-90759c843a26.jpg",
    },
    {
      name: "Michael Johnson",
      phone: "555-555-5555",
      lession_status: "Ongoing",
      active_lessons: 2,
      enrolledDate: "2023-06-15",
      profil: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Emily Davis",
      phone: "444-444-4444",
      lession_status: "Scheduled",
      active_lessons: 4,
      enrolledDate: "2023-09-05",
      profil: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      name: "William Brown",
      phone: "222-222-2222",
      lession_status: "Ongoing",
      active_lessons: 6,
      enrolledDate: "2023-05-20",
      profil: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      name: "Sophia Wilson",
      phone: "333-333-3333",
      lession_status: "Scheduled",
      active_lessons: 1,
      enrolledDate: "2023-10-01",
      profil: "https://randomuser.me/api/portraits/men/4.jpg",
    },
  ]);

  const handleResetFilters = () => {
    setLessonStatus("All");
    setEnrolledDate("");
    setSearchTerm("");
  };

  const filteredStudents = students.filter((student) => {
    const lessonFilter =
      lessonStatus === "All" || student.lession_status === lessonStatus;

    const enrolledDateFilter =
      !enrolledDate || new Date(student.enrolledDate) >= new Date(enrolledDate);

    const searchFilter =
      searchTerm === "" ||
      student.name.toLowerCase().includes(searchTerm.toLowerCase());

    return lessonFilter && enrolledDateFilter && searchFilter;
  });

  return (
    <div className="w-full px-5">
      <div className="flex justify-between">
        <div className="text-4xl font-bold">Students</div>
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
      <div className="lg:flex items-center justify-between mt-5">
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
        <div className="mt-4 lg:mt-0 flex items-center gap-7 cursor-pointer">
          <div
            className="flex items-center gap-3 text-base text-slate-600"
            onClick={() => setIsLessonStatusModalOpen(true)}
          >
            <FaFilter className="mr-2" />
            <div>{lessonStatus}</div>
            <FaCaretDown />
          </div>

          <div
            className="flex items-center gap-3 text-base text-slate-600"
            onClick={() => setIsEnrolledDateModalOpen(true)}
          >
            <div>Enrolled Date</div>
            <FaCaretDown />
          </div>

          <div
            className="flex items-center gap-3 text-base text-red-600"
            onClick={handleResetFilters}
          >
            <RxReset />
            <div>Reset Filter</div>
          </div>
        </div>
      </div>
      {viewMode === "grid" ? (
        <div className="mt-10 flex flex-wrap justify-between gap-2 gap-y-5">
          {filteredStudents.map((item, index) => (
            <div
              key={index}
              className="w-[240px] p-3 rounded-lg shadow-md border border-solid border-slate-200 flex flex-col"
            >
              <img
                className="h-16 w-16 rounded-full shrink-0 object-cover self-center"
                src={item.profil}
                alt={item.name}
              />
              <div className="mt-3 text-lg font-semibold text-center">
                {item.name}
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="text-slate-600">Phone:</div>
                <div>{item.phone}</div>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="text-slate-600">Lesson Status:</div>
                <div>{item.lession_status}</div>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="text-slate-600">Active Lessons:</div>
                <div>{item.active_lessons}</div>
              </div>
              <button className="bg-[#2B6BE7] cursor-pointer w-full text-white rounded-lg mt-5 py-2 text-lg">
                View Details
              </button>
            </div>
          ))}
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
                    Lesson Status
                  </th>
                  <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                    Active Lessons
                  </th>
                  <th className="text-left py-3 px-4"></th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map((student, index) => (
                  <tr key={index} className="border-t border-gray-200">
                    <td className="py-3 px-4 flex items-center">
                      <img
                        src={student.profil}
                        alt={student.name}
                        className="w-10 h-10 rounded-full mr-4"
                      />
                      <span className="font-medium text-blue-600">
                        {student.name}
                      </span>
                    </td>
                    <td className="py-3 px-4">{student.phone}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          student.lession_status === "Ongoing"
                            ? "bg-green-100 text-green-800"
                            : student.lession_status === "Scheduled"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {student.lession_status}
                      </span>
                    </td>
                    <td className="py-3 px-4">{student.active_lessons}</td>
                    <td className="py-3 px-4">
                      <button className="bg-blue-500 text-white py-2 px-4 rounded-md">
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

      {/* Lesson Status Modal */}
      <ReactModal
        isOpen={isLessonStatusModalOpen}
        onRequestClose={() => setIsLessonStatusModalOpen(false)}
        className="bg-white rounded-lg shadow-lg p-6"
        overlayClassName="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center"
      >
        <h3 className="text-lg font-bold mb-4">Select Lesson Status</h3>
        <div className="flex flex-wrap gap-2">
          {["All", "Ongoing", "Scheduled"].map((status) => (
            <button
              key={status}
              onClick={() => setLessonStatus(status)}
              className={`px-4 py-2 rounded-full ${
                lessonStatus === status
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
            onClick={() => setIsLessonStatusModalOpen(false)}
            className="text-gray-700 px-4 py-2 mr-2"
          >
            Cancel
          </button>
          <button
            onClick={() => setIsLessonStatusModalOpen(false)}
            className="bg-blue-500 text-white px-4 py-2 rounded-full"
          >
            Apply Now
          </button>
        </div>
      </ReactModal>

      {/* Enrolled Date Modal */}
      <ReactModal
        isOpen={isEnrolledDateModalOpen}
        onRequestClose={() => setIsEnrolledDateModalOpen(false)}
        className="bg-white rounded-lg shadow-lg p-6"
        overlayClassName="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center"
      >
        <h3 className="text-lg font-bold mb-4">Select Enrolled Date</h3>
        <input
          type="date"
          value={enrolledDate}
          onChange={(e) => setEnrolledDate(e.target.value)}
          className="w-full px-4 py-2 rounded-md border border-gray-300"
        />
        <div className="flex justify-end mt-4">
          <button
            onClick={() => setIsEnrolledDateModalOpen(false)}
            className="text-gray-700 px-4 py-2 mr-2"
          >
            Cancel
          </button>
          <button
            onClick={() => setIsEnrolledDateModalOpen(false)}
            className="bg-blue-500 text-white px-4 py-2 rounded-full"
          >
            Apply Now
          </button>
        </div>
      </ReactModal>
    </div>
  );
};

export default AllStudents;
