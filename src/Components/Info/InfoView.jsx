import React from "react";
import {
  FaShareAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaPrint,
} from "react-icons/fa";

const InfoView = () => {
  return (
    <div className=" w-[75%]">
      <div
        className={`pt-1 bg-blue-500 h-[1.5rem] w-[5.7rem]  font-semibold text-xs text-white hover:cursor-pointer flex justify-center`}
      >
        <div> TECHNOLOGY</div>
      </div>

      <div className="text-3xl font-bold py-5">
        Best Tech Accessories 10 Work From Home Essentials We Have Delivery For
        All Area
      </div>
      <div>
        <div className="pt-1 flex text-slate-500 space-x-4 font-bold">
          <div className="text-xs">
            BY{" "}
            <span className="!text-slate-900  hover:!text-blue-500 cursor-pointer">
              WILLUM SKEEM
            </span>
          </div>
          <div className="font-semibold text-sm  flex">
            <div>
              <svg
                fill="#94a3b8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="18"
              >
                <path d="M19 3h-1V2h-2v1H8V2H6v1H5C3.9 3 3 3.9 3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V9h14v10zm0-12H5V5h14v2z" />
              </svg>
            </div>
            <div className="text-xs"> DECEMBER 9, 2022</div>
          </div>

          <div className="font-semibold text-sm  flex">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 12h.01M12 12h.01M20 12h.01M11 6H6a2 2 0 00-2 2v8a2 2 0 002 2h10a2 2 0 002-2v-4l4-4v-4a2 2 0 00-2-2h-8z"
                />
              </svg>
            </div>
            <div className="text-xs"> 250 COMMENTS</div>
          </div>

          <div className="font-semibold text-sm  flex">
            <div>
              <svg
                className="h-4 w-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="11"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <line
                  x1="12"
                  y1="12"
                  x2="12"
                  y2="6"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <line
                  x1="12"
                  y1="12"
                  x2="15"
                  y2="15"
                  stroke="black"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <div className="text-xs"> 2 MINUTE READ</div>
          </div>

          <div className="font-semibold text-sm  flex">
            <div>
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="0" y="12" width="4" height="6" fill="#94a3b8" />
                <rect x="5" y="9" width="4" height="9" fill="#94a3b8" />
                <rect x="10" y="6" width="4" height="12" fill="#94a3b8" />
                <rect x="15" y="3" width="4" height="15" fill="#94a3b8" />
              </svg>
            </div>
            <div className="text-xs">3,250 VIEWS</div>
          </div>
        </div>
      </div>

      <div className="flex justify-between pt-6">
        <div className="flex space-x-4">
          <div className=" w-[9rem] h-[2.6rem]  border border-slate-300 flex space-x-2 py-3 px-5 rounded">
            <div>
              <FaShareAlt
                size={15}
                // color="#0A66C2"
                className="text-slate-300"
              />
            </div>
            <div className="font-medium text-slate-500 text-xs">
              SHARE: 1,509
            </div>
          </div>
          <div className="flex space-x-2">
            <div className="bg-[#0A66C2] hover:bg-[#104f8e] h-[2.6rem] w-11 rounded cursor-pointer">
              <div className="flex justify-center pt-3">
                <FaFacebookF size={17} className="text-white" />
              </div>
            </div>
            <div className="bg-[#1DA1F2] hover:bg-[#1a6b9d] h-[2.6rem] w-11 rounded cursor-pointer">
              <div className="flex justify-center pt-3">
                <FaTwitter size={17} className="text-white" />
              </div>
            </div>
            <div className="bg-[#0A66C2] hover:bg-[#104880]  h-[2.6rem] w-11 rounded cursor-pointer">
              <div className="flex justify-center pt-2.5">
                <FaLinkedinIn size={20} className="text-white" />
              </div>
            </div>
            <div className="bg-[#E4405F] hover:bg-[#932f41] h-[2.6rem] w-11 rounded cursor-pointer">
              <div className="flex justify-center pt-2.5">
                <FaInstagram size={20} className="text-white" />
              </div>
            </div>
            <div className="bg-[#59CE72] hover:bg-[#237a36] h-[2.6rem] w-11 rounded cursor-pointer">
              <div className="flex justify-center pt-2.5">
                <FaWhatsapp size={20} className="text-white" />
              </div>
            </div>
          </div>
        </div>
        <div className=" flex space-x-2">
          <div className="bg-white h-[2.6rem] w-11 rounded cursor-pointer border border-slate-300">
            <div className="flex justify-center pt-2.5">
              <FaEnvelope size={17} className="text-slate-500" />
            </div>
          </div>
          <div className="bg-white h-[2.6rem] w-11 rounded cursor-pointer border border-slate-300">
            <div className="flex justify-center pt-2.5">
              <FaPrint size={17} className="text-slate-500" />
            </div>
          </div>
        </div>
      </div>
      <div className="pt-9">
        <img
          className=" hover:cursor-pointer w-full h-[28rem]"
          src="https://picsum.photos/853"
          alt="Main Img"
        />
      </div>
      <div className="pt-10">
        <div className="text-gray-500">
          Ahen an unknown printer took a galley of type and their scrambled
          imaketype specimen book has follorrvived not only fiver centuriewhen
          an unknown printer took a galley of type and scrambled it to make a
          type specimen book. It has survived not only five centuries but also
          the leap into electronic typesetting, remaining essentially unchanged.{" "}
          <br />
          <br />
          Travel orem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a gallery Followe yof
          type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronics are o nic
          typesetting, remaining essentially unchanged. <br />
          <br /> Mravel orem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galleyof typed
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electro nic typesetting, remain
          ing essentially unchanged.
        </div>
        <div className="pt-11">
          <div className="text-xl font-bold">Middle Post Heading</div>
          <div className="text-gray-500 pt-3">
            Our should never complain, complaining is a weak emotion, you got
            life, we breathing, we blessed. Surround yourself with angels. They
            never said winning was easy. Some people can’t handle success, I
            can. Look at the sunset, life is amazing, life is beautiful, life is
            what A federal government initiated report conducted by the. <br />
            <br />
            Our should never complain, complaining is a weak emotion, you got
            life, we breathing, we blessed. Surround yourself with angels. They
            never said winning was easy. Some people can’t handle success, I
            can. Look at the sunset, life is amazing, life is beautiful, life is
            what A federal government initiated report conducted by the.
          </div>
        </div>
        <div className="flex pt-11 space-x-3">
          <div>
            <img
              className=" hover:cursor-pointer h-[18rem] w-[28rem]"
              src="https://picsum.photos/856"
              alt="Main Img"
            />
          </div>
          <div>
            <img
              className=" hover:cursor-pointer h-[18rem] w-[28rem]"
              src="https://picsum.photos/857"
              alt="Main Img"
            />
          </div>
        </div>
        <div className="pt-11">
          <div className="text-xl font-bold">
            Success is how high you bounce when you hit bottom
          </div>
          <div className="text-gray-500 pt-3">
            Our should never complain, complaining is a weak emotion, you
            gotlife, we breathing, we blessed. Surround yourself with angels.
            They never said winning was easy. Some people can’t handle success I
            can. Look at the sunset.Nmply dummy text of the printing and typ
            esetting industry. Lorem Ipsum has been the industry’s st andard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type andse aerr crambled it to make a type specimen book.{" "}
            <br />
            <br />
            Our should never complain, complaining is a weak emotion, you
            gotlife, we breathing, we blessed. Surround yourself with angels.
            They never said winning was easy. Some people can’t handle success I
            can. Look at the sunset.Nmply dummy text of the printing and typ
            esetting industry. Lorem Ipsum has been the industry’s st andard
            dummy.
          </div>
        </div>
      </div>
      <div className="pt-11">
        <div className=" h-[9.6rem] rounded cursor-pointer bg-[url('https://picsum.photos/924')]">
          ADVERTISE
        </div>
      </div>
      <div className="py-11 flex justify-between">
        <div>
          <div className="font-bold text-lg ">Popular Tags:</div>
          <div className="pt-5 flex space-x-2 text-sm">
            <div className=" text-slate-600 w-[5.8rem] h-[2.1rem]  border border-slate-300 cursor-pointer">
              <div className="px-4 py-1 ">beautiful</div>
            </div>
            <div className=" text-slate-600 w-[4.5rem] h-[2.1rem]  border border-slate-300 cursor-pointer">
              <div className="px-4 py-1">travel</div>
            </div>
            <div className=" text-slate-600 w-[6.5rem] h-[2.1rem]  border border-slate-300 cursor-pointer">
              <div className="px-4 py-1">technology</div>
            </div>
            <div className=" text-slate-600 w-[5rem] h-[2.1rem]  border border-slate-300 cursor-pointer">
              <div className="px-4 py-1">politics</div>
            </div>
          </div>
        </div>
        <div>
          <div className="font-bold text-lg ">Share This Post:</div>
          <div className="flex space-x-4 pt-3">
            <div className="flex space-x-2">
              <div className="bg-[#0A66C2] hover:bg-[#104f8e] h-[2.6rem] w-11 rounded cursor-pointer">
                <div className="flex justify-center pt-3">
                  <FaFacebookF size={17} className="text-white" />
                </div>
              </div>
              <div className="bg-[#1DA1F2] hover:bg-[#1a6b9d] h-[2.6rem] w-11 rounded cursor-pointer">
                <div className="flex justify-center pt-3">
                  <FaTwitter size={17} className="text-white" />
                </div>
              </div>
              <div className="bg-[#0A66C2] hover:bg-[#104880]  h-[2.6rem] w-11 rounded cursor-pointer">
                <div className="flex justify-center pt-2.5">
                  <FaLinkedinIn size={20} className="text-white" />
                </div>
              </div>
              <div className="bg-[#E4405F] hover:bg-[#932f41] h-[2.6rem] w-11 rounded cursor-pointer">
                <div className="flex justify-center pt-2.5">
                  <FaInstagram size={20} className="text-white" />
                </div>
              </div>
              <div className="bg-[#59CE72] hover:bg-[#237a36] h-[2.6rem] w-11 rounded cursor-pointer">
                <div className="flex justify-center pt-2.5">
                  <FaWhatsapp size={20} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 h-[36rem] space-y-6">
        <div className="flex space-x-7 px-10 pt-10">
          <div className="space-y-3">
            <div>Your Name *</div>
            <input
              type="text"
              // value={inputValue}
              className="h-[30%] px-[2%] border border-gray-300"
              style={{ width: "255px", height: "50px" }}
              // onChange={handleChange}
              // placeholder="Your e-mail"
            />
          </div>
          <div className="space-y-3">
            <div>E-mail *</div>
            <input
              type="text"
              // value={inputValue}
              className="h-[30%] px-[2%] border border-gray-300"
              style={{ width: "255px", height: "50px" }}
              // onChange={handleChange}
              // placeholder="Your e-mail"
            />
          </div>
          <div className="space-y-3">
            <div>Website *</div>
            <input
              type="text"
              // value={inputValue}
              className="h-[30%] px-[2%] border border-gray-300"
              style={{ width: "255px", height: "50px" }}
              // onChange={handleChange}
              // placeholder="Your e-mail"
            />
          </div>
        </div>
        <div className="px-10">
          <div className="space-y-3">
            <div>Comments *</div>
            <input
              type="text"
              // value={inputValue}
              className="px-[2%] border border-gray-300 w-[51.4rem] h-[13rem]"
              // onChange={handleChange}
              // placeholder="Your e-mail"
            />
          </div>
        </div>
        <div className="flex space-x-2 px-11">
          <div className="py-0.5">
            <input
              type="checkbox"
              id="vehicle1"
              name="vehicle1"
              value="Bike"
              className="w-[1rem] h-[1rem]"
            />
          </div>
          <div>
            Save my name, email, and website in this browser for the next time I
            comment.
          </div>
        </div>
        <div className="px-11">
          <button
            className="bg-blue-600 text-white font-semibold"
            // dir="rtl"
            style={{ width: "180px", height: "55px" }}
            type="submit"
          >
            POST COMMENT
          </button>
        </div>
      </div>
      <div className="pt-10">
        <div className="px-10">
          <div className="flex justify-between">
            <div className="font-bold text-xl">All Comments:</div>
            <div className="text-slate-600">12 Comments</div>
          </div>
        </div>
        <div className="bg-gray-100 w-full border-b-2 border-gray-200">
          <div className="px-10 py-6">
            <div className="flex justify-between">
              <div className="font-semibold">Sergio Aquino</div>
              <div className="text-blue-500 text-xs pt-1.5">8:42 AM</div>
            </div>
            <div className="pt-1 text-sm">
              Inspirational designs, illustrations, and graphic elements from
              the world’s best designers. Want more inspiration
            </div>
          </div>
        </div>
        <div className="bg-gray-100 w-full border-b-2 border-gray-200">
          <div className="px-10 py-6">
            <div className="flex justify-between">
              <div className="font-semibold">Test User</div>
              <div className="text-blue-500 text-xs pt-1.5">12:00 AM</div>
            </div>
            <div className="pt-1 text-sm">
              You can also add borders between child elements using the
            </div>
          </div>
        </div>
        <div className="bg-gray-100 w-full border-b-2 border-gray-200">
          <div className="px-10 py-6">
            <div className="flex justify-between">
              <div className="font-semibold">Rizan Gradian</div>
              <div className="text-blue-500 text-xs pt-1.5">7:28 PM</div>
            </div>
            <div className="pt-1 text-sm">
              Tthe leap into electronic typesetting, remaining essentiallyuncha
              opularisedthe with the release of Letrasetsheets containingthe
              leap electrtypesetting remaining essentially unchanged.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoView;
