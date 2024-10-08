import React, { useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

function NavBar() {
  const [sideBar, setSideBar] = useState(false);

  return (
    <nav className="h-[100px] bg-white">
      <div className="flex justify-between items-center h-full mx-10 md:mx-20">
        <div className="text-[#001C51] text-3xl font-extrabold">
          <Link to='/'>Startup</Link>
        </div>
        <div className="hidden lg:flex gap-10 text-[#1E0E62]">
          <div>
            <a href="#">How it works</a>
          </div>
          <div>
            <a href="#">Pricing</a>
          </div>
          <div>
            <a href="#">About</a>
          </div>
        </div>
        <div className="">
          <Link to="/login">
          <button className="hidden lg:block bg-[#FFC10C] hover:bg-yellow-500 rounded-full px-7 py-2 font-semibold text-lg">
            Login
          </button>
          </Link>
        </div>

        <div className="block lg:hidden">
          <GiHamburgerMenu
            onClick={() => (sideBar ? setSideBar(false) : setSideBar(true))}
            className="h-8 w-8"
          />
        </div>
      </div>

      {/* Side bar */}
      {sideBar && (
        <div className="h-full w-[350px] fixed right-0 top-0 bg-[#001C51] text-white p-8 lg:hidden ">
          <RxCrossCircled
            className="h-10 w-10"
            onClick={() => setSideBar(false)}/>
          <div className="w-full flex flex-col gap-5 mt-14 text-xl">
            <div>
              <a href="#">How it works</a>
            </div>
            <div>
              <a href="#">Pricing</a>
            </div>
            <div>
              <a href="#">About</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
