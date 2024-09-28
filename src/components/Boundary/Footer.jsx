import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-white w-full">
        <div className="w-full py-10 flex  flex-col justify-center items-start px-4 lg:px-20">
          <div className="justify-start flex flex-col">
            <ul className="justify-start flex space-x-8 text-sm mb-4">
              <li>
                <a href="#" className="hover:underline">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Pricing Plans
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contacts
                </a>
              </li>
            </ul>
          </div>
          <hr className="w-full" />
          <div className="flex space-x-4 mt-4 justify-center items-center py-4">
            <div className="text-lg font-bold w-1/2">Startup</div>
            <div className="text-sm w-3/5">
              Ready to hit the road? Join us and find the perfect driving
              instructor near you. Let’s get you driving with confidence!
            </div>
            <div className="flex space-x-4">
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fab fa-google"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
