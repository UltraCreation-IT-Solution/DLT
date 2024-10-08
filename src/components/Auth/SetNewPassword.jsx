// import React from "react";
import React, { useState } from "react";
import backgroundimg from "../../assets/Images/background.png";
import { GoArrowLeft } from "react-icons/go";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const SetNewPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const isPasswordValid =
    password.trim() !== "" && confirmPassword.trim() !== "";

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center px-[5vw]"
      style={{ backgroundImage: `url(${backgroundimg})` }}
    >
      <div className="bg-[#FFFFFF] p-5 rounded-xl shadow-xl w-full sm:w-[500px]">
        {/* back arrow */}
        <Link to='/verifycode'>
        <GoArrowLeft className="h-5 w-5 text-gray-500" />
        </Link>
        <div className="px-5 my-20 sm:px-14">
          <h2 className="text-xl font-Poppins text-center font-semibold text-[#333333] mt-4">
            Set New Password
          </h2>
          <p className="text-center text-[#333333] font-Avenir text-sm mt-4 mb-6">
            Your previous password has been reset. Please set a new password for
            your account.
          </p>
          <form>
            {/* password field */}
            <div className="relative mb-4">
              <label className="block text-sm font-[Poppins] text-[#666666]">
                New password
              </label>
              <button
                type="button"
                className="absolute right-0 top-1 text-gray-500"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              <input
                type={showPassword ? "text" : "password"}
                id="newPassword"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="New password"
              />
            </div>
            {/*confirm password field */}
            <div className="mb-6">
              <label
                className="block text-sm font-[Poppins]  text-[#666666]"
                htmlFor="confirmPassword"
              >
                Confirm Password{" "}
              </label>
              <input
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-1 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="Confirm password"
              />
            </div>
            <button
              type="submit"
              className={`w-full p-2 text-white py-2 rounded-full transition-all  ${
                isPasswordValid
                  ? "bg-blue-500 hover:bg-blue-600"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
              disabled={!isPasswordValid}
            >
              Set New Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SetNewPassword;
