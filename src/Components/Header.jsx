import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";
import HeadingSlide from "./Home/HeadingSlider";
import LiveClock from "./Home/LiveClock";

const Header = () => {
  return (
    <div className="">
      <div className="bg-gray-800 text-white h-[3rem] flex flex-col justify-center">
        <div className="flex justify-between px-9">
          <div className="flex text-sm space-x-3">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-500"
                viewBox="0 0 24 24"
                fill="blue-500"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            <div>TRENDING</div>
            <div className="">|</div>
            <div className="flex space-x-2">
              <div className="pt-2">
                <div className="w-1 h-1 rounded-full bg-gray-500"></div>
              </div>
              <div className="text-slate-300">
                <HeadingSlide />
              </div>
            </div>
          </div>
          <div className="flex space-x-3">
            <div className="pt-1 font-semibold text-sm  flex">
              <div>
                <svg
                  fill="#f8fafc"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                >
                  <path d="M19 3h-1V2h-2v1H8V2H6v1H5C3.9 3 3 3.9 3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V9h14v10zm0-12H5V5h14v2z" />
                </svg>
              </div>
              <div className="px-2 text-xs text-slate-400">
                <LiveClock />
              </div>
            </div>
            <div className="!text-base">|</div>
            <div className="text-sm flex space-x-3 pt-0.5">
              <div>FOLLOW US:</div>
              <div className="flex space-x-2 pt-1">
                <div>
                  <FaFacebook
                    size={15}
                    // color="#4267B2"
                    className="text-slate-300 hover:text-[#4267B2] cursor-pointer"
                  />
                </div>

                <div>
                  <FaTwitter
                    size={15}
                    // color="#1DA1F2"
                    className="text-slate-300 hover:text-[#1DA1F2] cursor-pointer"
                  />
                </div>
                <div>
                  <FaLinkedin
                    size={15}
                    // color="#0A66C2"
                    className="text-slate-300 hover:text-[#0A66C2] cursor-pointer"
                  />
                </div>
                <div>
                  <FaPinterest
                    size={15}
                    // color="#BD081C"
                    className="text-slate-300 hover:text-[#BD081C] cursor-pointer"
                  />
                </div>
                <div>
                  <FaInstagram
                    size={15}
                    // color="#E4405F"
                    className="text-slate-300 hover:text-[#E4405F] cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
