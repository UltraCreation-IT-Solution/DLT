import React from "react";
import menuicon from "../../assets/Images/Landing/menuicon.png";

function NavBar() {
  return (
    <nav className="h-[100px] bg-white">
      <div className="flex justify-between items-center h-full mx-5 md:mx-10">
        <div className="text-[#001C51] text-3xl font-extrabold">Startup</div>
        <div className="hidden lg:flex gap-10 text-[#1E0E62]">
          <div>How it works</div>
          <div>Pricing</div>
          <div>About</div>
        </div>
        <div className="">
          <button className="hidden lg:block bg-[#FFC10C] rounded-full px-7 py-2 font-semibold text-lg">
            Login
          </button>
        </div>

        <div className="block lg:hidden">
          <img src={menuicon} alt="menubar"></img>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
