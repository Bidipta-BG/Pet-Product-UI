import React from "react";
import mainIcon from "../Icons/main.png";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black h-[30rem] px-3 text-white ">
      <div className="flex justify-between py-[4%]">
        <div className="max-w-[23%]">
          <div className="flex-shrink-0 flex ">
            <img
              style={{ width: 60, height: 60 }}
              src={mainIcon}
              alt="My Icon"
            />
            <span className="text-4xl px-2">Website</span>
          </div>
          <div className="py-4">
            When an unknown printer took a galley and scrambled it to make
            specimen book not only five centurie.
          </div>
          <div className="flex space-x-6 pt-6">
            <div>
              <FaFacebook
                size={20}
                // color="#4267B2"
                className="text-slate-300 hover:text-[#4267B2] cursor-pointer"
              />
            </div>

            <div>
              <FaTwitter
                size={20}
                // color="#1DA1F2"
                className="text-slate-300 hover:text-[#1DA1F2] cursor-pointer"
              />
            </div>
            <div>
              <FaLinkedin
                size={20}
                // color="#0A66C2"
                className="text-slate-300 hover:text-[#0A66C2] cursor-pointer"
              />
            </div>
            <div>
              <FaPinterest
                size={20}
                // color="#BD081C"
                className="text-slate-300 hover:text-[#BD081C] cursor-pointer"
              />
            </div>
            <div>
              <FaInstagram
                size={20}
                // color="#E4405F"
                className="text-slate-300 hover:text-[#E4405F] cursor-pointer"
              />
            </div>
          </div>
        </div>

        <div className="">
          <div className="text-2xl font-bold">Trending</div>
          <div className="space-y-8 pt-8">
            <div className="flex  cursor-pointer ">
              <img
                className="rounded-full hover:cursor-pointer "
                style={{ width: 90, height: 90 }}
                src={"https://picsum.photos/380"}
                alt="My Icon"
              />

              <div className="px-4 flex flex-col justify-evenly">
                <div
                  className="group  font-bold transition-all duration-500 ease-in-out pt-2"
                  href="#"
                >
                  <span className=" bg-left-bottom bg-gradient-to-r from-blue-600 to-blue-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                    Top Beste ampute
                  </span>
                </div>

                <div className="pt-3 font-semibold text-sm text-slate-400 flex">
                  <div>
                    <svg
                      fill="#94a3b8"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                    >
                      <path d="M19 3h-1V2h-2v1H8V2H6v1H5C3.9 3 3 3.9 3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V9h14v10zm0-12H5V5h14v2z" />
                    </svg>
                  </div>
                  <div className="px-2 text-xs"> DECEMBER 9, 2022</div>
                </div>
              </div>
            </div>
            <div className="flex cursor-pointer ">
              <img
                className="rounded-full hover:cursor-pointer "
                style={{ width: 90, height: 90 }}
                src={"https://picsum.photos/880"}
                alt="My Icon"
              />

              <div className="px-4 flex flex-col justify-evenly">
                <div
                  className="group  font-bold transition-all duration-500 ease-in-out pt-2"
                  href="#"
                >
                  <span className=" bg-left-bottom bg-gradient-to-r from-blue-600 to-blue-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                    Are Speak Market.
                  </span>
                </div>

                <div className="pt-3 font-semibold text-sm text-slate-400 flex">
                  <div>
                    <svg
                      fill="#94a3b8"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                    >
                      <path d="M19 3h-1V2h-2v1H8V2H6v1H5C3.9 3 3 3.9 3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V9h14v10zm0-12H5V5h14v2z" />
                    </svg>
                  </div>
                  <div className="px-2 text-xs"> DECEMBER 9, 2022</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="text-2xl font-bold">Category</div>
          <div className="flex space-x-3 pt-8 text-gray-400">
            <ul className="list-disc space-y-4 px-4">
              <li className="cursor-pointer hover:text-gray-200">Fashion</li>
              <li className="cursor-pointer hover:text-gray-200">Technology</li>
              <li className="cursor-pointer hover:text-gray-200">Sports</li>
              <li className="cursor-pointer hover:text-gray-200">Lifestyle</li>
              <li className="cursor-pointer hover:text-gray-200">Music</li>
              <li className="cursor-pointer hover:text-gray-200">Health</li>
            </ul>
          </div>
        </div>

        <div className="">
          <div className="text-2xl font-bold">Products</div>
          <div className="space-y-2 pt-8">
            <div className="flex space-x-2">
              <div>
                <img
                  className="rounded hover:cursor-pointer hover:scale-105 transition duration-500  object-cover"
                  style={{ width: 85, height: 85 }}
                  src={"https://picsum.photos/776"}
                  alt="My Icon"
                />
              </div>
              <div>
                <img
                  className="rounded hover:cursor-pointer hover:scale-105 transition duration-500  object-cover"
                  style={{ width: 85, height: 85 }}
                  src={"https://picsum.photos/774"}
                  alt="My Icon"
                />
              </div>
              <div>
                <img
                  className="rounded hover:cursor-pointer hover:scale-105 transition duration-500  object-cover"
                  style={{ width: 85, height: 85 }}
                  src={"https://picsum.photos/783"}
                  alt="My Icon"
                />
              </div>
            </div>
            <div className="flex space-x-2">
              <div>
                <img
                  className="rounded hover:cursor-pointer hover:scale-105 transition duration-500  object-cover"
                  style={{ width: 85, height: 85 }}
                  src={"https://picsum.photos/771"}
                  alt="My Icon"
                />
              </div>
              <div>
                <img
                  className="rounded hover:cursor-pointer hover:scale-105 transition duration-500  object-cover"
                  style={{ width: 85, height: 85 }}
                  src={"https://picsum.photos/772"}
                  alt="My Icon"
                />
              </div>
              <div>
                <img
                  className="rounded hover:cursor-pointer hover:scale-105 transition duration-500  object-cover"
                  style={{ width: 85, height: 85 }}
                  src={"https://picsum.photos/773"}
                  alt="My Icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-6">
        <hr className="border-slate-700" />
        <div className="!text-gray-300 pt-8 text-center">
          2023 © neeon all right reserved by{" "}
          <span className="cursor-pointer hover:text-blue-500">
            BidiptaGogoi
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
