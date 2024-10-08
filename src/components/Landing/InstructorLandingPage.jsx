import React, { useState } from "react";

// images imports
import instructorimg from "../../assets/Images/Landing/instructorImg.png";
import learnerobj from "../../assets/Images/Landing/learnerobject.png";
import driverobj from "../../assets/Images/Landing/driverobject.png";
import instructorframesm from "../../assets/Images/Landing/instructorframesm.svg";
import instructorframelg from "../../assets/Images/Landing/instructorframelg.svg";
import roadimg from "../../assets/Images/Landing/RoadImg.png";
import driverprofile from "../../assets/Images/Landing/driverimg.png";
import profilepic from "../../assets/Images/Landing/profilepic.png";
import { PiArrowCircleLeftThin } from "react-icons/pi";
import { PiArrowCircleRightThin } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa6";
import obj1 from "../../assets/Images/Landing/object1.png";
import obj2 from "../../assets/Images/Landing/object2.png";

export const HeroSection = () => {
  const users = [
    {
      fullname: "John Doe",
      subtitle: "Professional Instructor",
      description:
        "I had an amazing experience learning to drive with John! His patience and clear explanations made me feel confident behind the wheel. I passed my test on the first try!",
      profilepic: profilepic,
    },
    {
      fullname: "Jane Smith",
      subtitle: "Experienced Driver",
      description:
        "Jane was a wonderful coach. Her tips and techniques really helped me improve my driving skills. Highly recommended!",
      profilepic:
        "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png",
    },
    {
      fullname: "Alice Johnson",
      subtitle: "New Driver",
      description:
        "Alice helped me overcome my fear of driving. Her calm demeanor and effective teaching methods made the whole experience smooth and stress-free.",
      profilepic:
        "https://www.shutterstock.com/image-photo/smiling-african-american-millennial-businessman-600nw-1437938108.jpg",
    },
    {
      fullname: "Michael Brown",
      subtitle: "Driving Enthusiast",
      description:
        "Michael’s deep understanding of driving techniques and his ability to explain them clearly made learning fun and easy. I highly recommend him to anyone looking to improve their driving skills.",
      profilepic:
        "https://wallpapers.com/images/hd/professional-profile-pictures-1427-x-1920-txfewtw6mcg0y6hk.jpg",
    },
  ];

  const [currentUser, setCurrentUser] = useState(0);

  const handlePrevProfile = () => {
    setCurrentUser(currentUser === 0 ? users.length - 1 : currentUser - 1); //2
  };
  const handleNextProfile = () => {
    setCurrentUser(currentUser === users.length - 1 ? 0 : currentUser + 1); //2
  };

  return (
    <div className="bg-white">
      <div className="px-10 md:px-20">
        {/* get teaching */}
        <div className="my-10 flex flex-col gap-7 text-center items-center mx-0 md:mx-20">
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#001C51] font-bold">
            Ready, Set, Navigate!
          </div>
          <div className="text-[#A1A1B0] text-balance md:text-lg">
            Kickstart Your Teaching Journey! Enter your details to connect with
            eager learners and easily schedule your lessons. Whether you’re
            guiding beginners or helping experienced drivers refine their
            skills, we’re here to support you. Let’s make every drive a success!
          </div>

          <button className="w-fit rounded-full bg-[#0C0C0C] px-6 py-2 text-white">
            Get Teachin’!!
          </button>
        </div>

        {/* driving image */}
        <img
          className="mb-24 mt-16 w-full object-cover"
          src={instructorimg}
          alt="instructor image"
        ></img>

        <div className="text-center flex flex-col gap-10 mx-0 md:mx-20">
          <div className="text-[#001C51] text-3xl md:text-4xl lg:text-5xl font-bold">
            How It Works: Drive Your Way!
          </div>
          <div className="text-[#A1A1B0] px-5 md:text-lg text-center ">
            It’s simple! Enter your postcode to find local driving instructors.
            Compare profiles, read reviews, and book your lesson in just a few
            clicks. Let’s get driving!
          </div>
        </div>

        {/* cards */}
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center mt-5">
          {/* instructor block */}
          <div className="flex flex-col gap-4 border border-[#1B1B1B14] rounded-lg items-center my-10 py-10 px-5 shadow-md w-full">
            <img src={driverobj} alt="driver object"></img>
            <div className="text-3xl font-bold flex flex-col text-center">
              Instructors, Get in the
              <span className="text-[#001354] "> Driver’s Seat!</span>
            </div>
            <div className="text-[#010D3E] text-center mx-7">
              Showcase your skills with a pro profile and connect with eager
              learners ready to hit the road!
            </div>
          </div>

          {/* learner block */}
          <div className="flex flex-col gap-4 border border-[#1B1B1B14] rounded-xl items-center my-10 py-10 px-5 w-full shadow-md">
            <img src={learnerobj} alt="learner object"></img>
            <div className="text-3xl font-bold flex flex-col text-center">
              Learners, Start Your
              <span className="text-[#001354]">Engines!</span>
            </div>
            <div className="text-[#010D3E] text-center mx-7">
              Search for local instructors, check their reviews, and book your
              lesson—all in a flash!
            </div>
          </div>
        </div>
      </div>

      {/* Yellow block */}
      <div className="bg-[#FFC10C] py-10 flex items-center justify-center mt-20">
        <div className="flex flex-col md:flex-row gap-8 px-12 sm:px-16 md:px-24 items-center justify-center ">
          <img
            className="object-cover h-32 items-center"
            src={roadimg}
            alt="roadimg"
          ></img>
          <div className="flex flex-col items-center md:items-start gap-5 text-[#000000]">
            <div className=" font-bold text-xl xs:text-3xl">
              Guide with Expertise!
            </div>
            <div className="">
              Our platform simplifies connecting with eager learners. Enjoy
              flexible scheduling and the tools you need to provide personalised
              lessons, helping students thrive on their driving journey!
            </div>
          </div>
        </div>
      </div>

      <div className="px-10 my-20 w-full md:px-20 ">
        {/* Instructor frame */}
        <div className="hidden md:flex">
          <img
            className="w-full object-cover"
            src={instructorframelg}
            alt="instructor frame"
          />
        </div>

        <div className="md:hidden">
          <img
            className="w-full object-cover"
            src={instructorframesm}
            alt="instructor frame"
          ></img>
        </div>
      </div>

      {/* divider */}
      <div className="w-full flex justify-between items-center">
        {[...Array(14)].map((_, index) => (
          <div
            key={index}
            className="w-[4vw] md:w-[4vw] h-2 bg-[#FFC10C] rounded-full"
          ></div>
        ))}
      </div>

      <div className="px-10 w-full md:px-20">
        {/* Instructors highlights */}
        <div
          className="bg-gradient-to-b from-[#FFE5004D] to-[#FFFFFF] rounded-xl my-16 py-14 px-10
      md:px-14 w-full"
        >
          <div className="text-[#001C51] font-bold text-center text-3xl md:text-4xl ">
            Instructor Highlights from the Frontline!
          </div>
          <div className="flex flex-col-reverse lg:flex-row justify-between my-10 gap-12">
            <div className="flex flex-col lg:flex-row">
              {/* user profile */}
              <div className="text-[#000000] w-full">
                <div className="flex gap-5">
                  <img
                    src={users[currentUser].profilepic}
                    alt="ProfilePicture"
                    className="shrink-0 object-cover h-14 w-14 rounded-full"
                  />
                  <div className="pb-2">
                    <div>{users[currentUser].fullname}</div>
                    <div>{users[currentUser].subtitle}</div>
                  </div>
                </div>

                <div className="text-[#000000] mt-5 text-balance">
                  {users[currentUser].description}
                </div>
              </div>

              {/* arrow buttons */}
              <div className="flex gap-2 mt-8">
                <PiArrowCircleLeftThin
                  onClick={handlePrevProfile}
                  className="w-9 h-9 hover:cursor-pointer hover:text-slate-700 transition-all"
                />
                <PiArrowCircleRightThin
                  onClick={handleNextProfile}
                  className="w-9 h-9 hover:cursor-pointer hover:text-slate-700 transition-all"
                />
              </div>
            </div>

            {/* driverimg */}
            <img
              src={driverprofile}
              alt="thumbnail"
              className="w-full h-64 md:w-auto"
            />
          </div>
        </div>
      </div>

      {/* Pick The Ride */}
      <div className="flex flex-col items-center px-10 md:px-20">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#010D3E]">
          Pick Your Ride
        </h1>
        <p className="text-center text-[#A1A1B0] mt-4 max-w-2xl md:text-lg lg:text-xl">
          Whether you're just starting or ready to fast-track your skills, each
          driving school offers flexible plans tailored to your journey. Choose
          the one that fits your vibe and hit the road your way!
        </p>

        {/* Pricing Cards */}
        <div className="flex flex-col md:flex-row items-center justify-center md:items-end gap-8 mt-12 w-full">
          {/* Starter Lap Card */}
          <div className="bg-white border border-gray-200 rounded-3xl shadow-md p-8 max-w-sm w-full">
            <h3 className="text-sm text-[#1E0E62] font-bold">STARTER LAP</h3>
            <h2 className="text-2xl font-bold mt-6 text-[#000000]">
              Pocket-friendly for first-timers.
            </h2>
            <button className="bg-[#0C0C0C] text-[#FFFFFF] font-semibold rounded-lg w-full py-2 px-4 mt-4 hover:bg-gray-800 transition-colors">
              Get Started!
            </button>
            <ul className="mt-6 space-y-3 text-[#000000]">
              <li>✓ 5 lessons</li>
              <li>✓ Basic vehicle included</li>
              <li>✓ First-time drivers’ guide</li>
            </ul>
          </div>

          {/* Cruise Control Card */}
          <div className="bg-[#0C0C0C] text-white border border-black rounded-3xl shadow-md p-8 max-w-sm w-full">
            <h3 className="text-sm font-bold text-[#FFFFFF]">CRUISE CONTROL</h3>
            <h2 className="text-2xl text-[#FFFFFF] font-bold mt-6">
              Smooth ride, smoother deal.
            </h2>
            <button className="bg-[#FFFFFF] text-black font-semibold rounded-lg w-full py-2 px-4 mt-4 hover:bg-gray-200 transition-colors">
              Level Up!
            </button>
            <ul className="mt-6 space-y-3 text-[#FFFFFF]">
              <li>✓ 10 lessons</li>
              <li>✓ Mid-tier vehicle options</li>
              <li>✓ On-road practice included</li>
              <li>✓ Flexible scheduling</li>
              <li>✓ Instructor feedback after each lesson</li>
              <li>✓ 1 free refresher lesson</li>
            </ul>
          </div>

          {/* Need for Speed Card */}
          <div className="bg-[#FFFFFF] border border-gray-200 rounded-3xl shadow-md p-8 max-w-sm w-full">
            <h3 className="text-sm text-[#1E0E62] font-bold">NEED FOR SPEED</h3>
            <h2 className="text-2xl font-bold mt-6 text-[#000000]">
              Fast Track to Success
            </h2>
            <button className="bg-[#0C0C0C] text-[#FFFFFF] font-semibold rounded-lg w-full py-2 px-4 mt-4 hover:bg-gray-800 transition-colors">
              Go Fast!
            </button>
            <ul className="mt-6 space-y-3 text-[#000000]">
              <li>✓ 15 lessons</li>
              <li>✓ Premium vehicle options</li>
              <li>✓ Road test simulation</li>
              <li>✓ Personalised lesson plans</li>
              <li>✓ 24/7 support from instructors</li>
              <li>✓ Advanced driving techniques</li>
              <li>✓ Night driving experience</li>
              <li>✓ Access to exclusive driving workshops</li>
              <li>✓ One-on-one feedback</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Grab the Session */}
      <div className="flex  justify-between mb-10">
        <div className=" w-1/5 flex justify-start items-start">
          <img
            src={obj1}
            alt="Decorative Left"
            className="w-[120%] md:w-[75%] object-cover"
          />
        </div>
        <div className="w-5/6 mt-[8%] mb-[10%]">
          <div className="flex flex-col items-center justify-center w-full px-2">
            <h1 className="text-3xl md:text-5xl font-bold text-center mt-16 text-[#001C51]">
              Ready to Rev Up Your Lessons?
            </h1>
            <p className="text-center mt-4 text-[#010D3E] lg:w-1/2 w-full">
              Join a thriving community of driving instructors! Connect with
              eager learners, schedule flexible lessons, and make a positive
              impact on their driving journey. Your opportunity to inspire
              starts here!
            </p>
            <button className="bg-[#FFC10C] text-[#000000] font-semibold rounded-full py-3 px-6 mt-8 shadow-lg hover:bg-yellow-500 transition-colors flex items-center">
              Catch a Class!
              <span className="ml-2">
                {" "}
                <FaArrowRight />
              </span>
            </button>
          </div>
        </div>
        <div className="w-1/5 mb-[-5%] flex justify-end items-end">
          <img
            src={obj2}
            alt="Decorative Right"
            className="w-[120%] md:w-[90%] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

const InstructorLandingPage = () => {
  return (
    <div>
      <HeroSection />
    </div>
  );
};

export default InstructorLandingPage;
