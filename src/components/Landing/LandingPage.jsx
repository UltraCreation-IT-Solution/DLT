import React from "react";

// images imports
import rectimg from "../../assets/Images/Landing/Rectangle.png";
import learnerimg from "../../assets/Images/Landing/learner.png";
import driverimg from "../../assets/Images/Landing/driver.png";
import stepsimg from "../../assets/Images/Landing/steps.svg";
import roadimg from "../../assets/Images/Landing/RoadImg.png";
import driverprofile from "../../assets/Images/Landing/driverimg.png";
import profilepic from "../../assets/Images/Landing/profilepic.png";
import leftbtn from "../../assets/Images/Landing/leftbtn.png";
import rightbtn from "../../assets/Images/Landing/rightbtn.png";
import guide from "../../assets/Images/Landing/guide.svg";
import obj1 from "../../assets/Images/Landing/object1.png";
import obj2 from "../../assets/Images/Landing/object2.png";

// export const NavBar = () => {
//   return (
//     <nav className="h-[100px] bg-white">
//       <div className="flex justify-between items-center h-full mx-5 md:mx-10">
//         <div className="text-[#001C51] text-3xl font-extrabold">Startup</div>
//         <div className="hidden lg:flex gap-10 text-[#1E0E62]">
//           <div>How it works</div>
//           <div>Pricing</div>
//           <div>About</div>
//         </div>
//         <div className="">
//           <button className="hidden lg:block bg-[#FFC10C] rounded-full px-7 py-2 font-semibold text-lg">
//             Login
//           </button>
//         </div>

//         <div className="block lg:hidden">
//           <img src={menuicon} alt="menubar"></img>
//         </div>
//       </div>
//     </nav>
//   );
// };

export const HeroSection = () => {
  return (
    <div>
      <div className="px-[10vw]">
        {/* Search Instructors */}
        <div className="my-10 flex flex-col gap-7 text-center mx-0 md:mx-24">
          <div className=" text-3xl sm:text-4xl md:text-6xl text-[#001C51] font-bold  ">
            Ready, Set, Drive!
          </div>
          <div className="text-[#A1A1B0] text-wrap ">
            Kickstart your driving journey! Enter your postcode to find local
            instructors and book your lessons easily. Whether you're a beginner
            or looking to refine your skills, we’ve got you covered. Let’s get
            driving!
          </div>
          <div className="flex flex-col  md:flex-row gap-5 justify-center items-center">
            <input
              type="text"
              placeholder="Type your area or instructor name"
              className="rounded-full border border-slate-400 px-5 py-2 w-full outline-none"
            />
            <button className="w-fit rounded-full bg-[#0C0C0C] px-6 py-2 text-white">
              Locate!
            </button>
          </div>
        </div>

        {/* driving image */}
        <img
          className="mb-24 mt-16 w-full object-cover"
          src={rectimg}
          alt="rect"
        ></img>

        <div className="text-center flex flex-col gap-10 mx-0 md:mx-40">
          <div className="text-[#001C51] text-3xl md:text-5xl font-bold">
            How It Works: Drive Your Way!
          </div>
          <div className="text-[#A1A1B0] px-5 text-center ">
            It’s simple! Enter your postcode to find local driving instructors.
            Compare profiles, read reviews, and book your lesson in just a few
            clicks. Let’s get driving!
          </div>
        </div>

        {/* cards */}
        <div className="flex flex-col md:flex-row mx-5 gap-8 justify-between items-center mt-5">
          {/* learner block */}
          <div className="flex flex-col gap-4 border border-[#1B1B1B14] rounded-xl items-center my-10 py-10 px-5 shadow-md w-[600px]">
            <img src={learnerimg} alt="learner"></img>
            <div className="text-3xl font-bold flex flex-col text-center">
              Learners, Start Your
              <span className="text-[#001354]">Engines!</span>
            </div>
            <div className="text-[#010D3E] text-center mx-7">
              Search for local instructors, check their reviews, and book your
              lesson—all in a flash!
            </div>
          </div>
          {/* instructor block */}
          <div className="flex flex-col gap-4 border border-[#1B1B1B14] rounded-lg items-center my-10 py-10 px-5 shadow-md w-[600px]">
            <img src={driverimg} alt="driver"></img>
            <div className="text-3xl font-bold flex flex-col text-center">
              Instructors, Get in the
              <span className="text-[#001354] "> Driver’s Seat!</span>
            </div>
            <div className="text-[#010D3E] text-center mx-7">
              Showcase your skills with a pro profile and connect with eager
              learners ready to hit the road!
            </div>
          </div>
        </div>
      </div>

      {/* Yellow block */}
      <div className="mt-20">
        <div className="bg-[#FFC10C] py-10 px-60">
          <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
            <img
              className="object-cover items-center"
              src={roadimg}
              alt="roadimg"
            ></img>
            <div className="flex flex-col gap-5 text-[#000000]">
              <div className=" font-bold text-3xl">Learn with Confidence!</div>
              <div className="text-balance">
                Our platform makes finding the right driving instructor a
                breeze. Enjoy personalized lessons tailored to your needs and
                start your driving journey with peace of mind!
              </div>
            </div>
          </div>
        </div>

        {/* <div className="w-full flex justify-between items-center">
          {[...Array(30)].map((_, index) => (
            <div
              key={index}
              className="w-8 h-2 bg-[#2B6BE7] rounded-full"
            ></div>
          ))}
        </div> */}
      </div>

      {/* Instructions image*/}
      <div className="hidden md:flex items-center justify-center my-20">
        <img className="object-cover mx-10" src={stepsimg} alt="stepimg"></img>
      </div>

      <div className="my-20 flex items-center justify-center  md:hidden">
        <img
          className="object-cover w-full mx-10"
          src={guide}
          alt="stepimg"
        ></img>
      </div>

      {/* divider */}
      {/* <div className="w-full flex justify-between items-center my-8">
        {[...Array(14)].map((_, index) => (
          <div key={index} className="w-12 h-2 bg-[#FFE500] rounded-full"></div>
        ))}
      </div> */}

      <div
        className="bg-gradient-to-b from-[#FFE5004D] to-[#FFFFFF] flex flex-col justify-center items-center rounded-xl mx-24 my-24 py-14 
      px-14"
      >
        <div className="text-[#001C51] font-bold text-4xl">
          Success Stories from the Driver’s Seat!
        </div>
        <div className="flex justify-between my-10 gap-12">
          <div className="text-[#000000] flex flex-col justify-center gap-5 mr-16">
            <div className="flex gap-5">
              <img src={profilepic} alt="ProfilePicture" />
              <div className="pb-2-">
                <div>Firstname Lastname</div>
                <div>Subtitle</div>
              </div>
            </div>

            <div className="text-[#000000]">
              I had an amazing experience learning to drive with John! His
              patience and clear explanations made me feel confident behind the
              wheel. I passed my test on the first try!
            </div>
          </div>

          <div className="flex h-10 gap-3 items-center justify-center mr-5 mt-8">
            <img
              className="hover:cursor-pointer"
              src={leftbtn}
              alt="left carousel button"
            />
            <img
              className="hover:cursor-pointer"
              src={rightbtn}
              alt="right carousel button"
            />
          </div>
          <img src={driverprofile} alt="thumbnail" />
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
            <h1 className="text-3xl lg:text-5xl font-bold text-center mt-16 text-blue-900">
              "Ready to Hit the Road?"
            </h1>
            <p className="text-center mt-4 text-gray-600 lg:w-1/2 w-full">
              Discover driving schools near you with ease! Find the perfect
              match, book lessons, and get behind the wheel in no time. Your
              road to success starts here!
            </p>
            <button className="bg-[#FFC10C] text-white font-semibold rounded-full py-3 px-6 mt-8 shadow-lg hover:bg-yellow-500 transition-colors flex items-center">
              Grab a Session!
              <span className="ml-2">→</span>
            </button>
          </div>
        </div>
        <div className="w-1/5 mb-[-5%] flex justify-end items-end">
          <img
            src={obj2}
            alt="Decorative Right"
            className="w-[120%]   md:w-[90%] object-cover"
          />
        </div>
      </div>

      {/* Pick The Ride */}
      <div className="flex flex-col items-center py-16 px-4 lg:px-20 bg-white">
        {/* Heading */}
        <h1 className="text-3xl lg:text-4xl font-bold text-center text-blue-900">
          Pick Your Ride
        </h1>
        <p className="text-center text-gray-500 mt-4 max-w-2xl">
          Whether you're just starting or ready to fast-track your skills, each
          driving school offers flexible plans tailored to your journey. Choose
          the one that fits your vibe and hit the road your way!
        </p>

        {/* Pricing Cards */}
        <div className="flex flex-col lg:flex-row justify-center items-end gap-8 mt-12 w-full">
          {/* Starter Lap Card */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 max-w-sm w-full">
            <h3 className="text-sm text-blue-600 font-semibold">STARTER LAP</h3>
            <h2 className="text-2xl font-bold mt-2 text-gray-800">
              Pocket-friendly for first-timers.
            </h2>
            <button className="bg-black text-white font-semibold rounded-full py-2 px-4 mt-4 hover:bg-gray-800 transition-colors">
              Get Started!
            </button>
            <ul className="mt-6 space-y-3 text-gray-600">
              <li>✓ 5 lessons</li>
              <li>✓ Basic vehicle included</li>
              <li>✓ First-time drivers’ guide</li>
            </ul>
          </div>

          {/* Cruise Control Card */}
          <div className="bg-black text-white border border-black rounded-lg shadow-md p-6 max-w-sm w-full">
            <h3 className="text-sm font-semibold text-gray-400">
              CRUISE CONTROL
            </h3>
            <h2 className="text-2xl font-bold mt-2">
              Smooth ride, smoother deal.
            </h2>
            <button className="bg-white text-black font-semibold rounded-full py-2 px-4 mt-4 hover:bg-gray-200 transition-colors">
              Level Up!
            </button>
            <ul className="mt-6 space-y-3">
              <li>✓ 10 lessons</li>
              <li>✓ Mid-tier vehicle options</li>
              <li>✓ On-road practice included</li>
              <li>✓ Flexible scheduling</li>
              <li>✓ Instructor feedback after each lesson</li>
              <li>✓ 1 free refresher lesson</li>
            </ul>
          </div>

          {/* Need for Speed Card */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 max-w-sm w-full">
            <h3 className="text-sm text-blue-600 font-semibold">
              NEED FOR SPEED
            </h3>
            <h2 className="text-2xl font-bold mt-2 text-gray-800">
              Fast Track to Success
            </h2>
            <button className="bg-black text-white font-semibold rounded-full py-2 px-4 mt-4 hover:bg-gray-800 transition-colors">
              Go Fast!
            </button>
            <ul className="mt-6 space-y-3 text-gray-600">
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
    </div>
  );
};

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
    </div>
  );
};

export default LandingPage;
