import React from "react";

const MainSection1View2 = ({
  category,
  catColor,
  catDivH,
  catDivW,
  heading,
  date,
  img,
}) => {
  return (
    <div className="flex  hover:scale-105 transition duration-500  object-cover h-[12.5rem]">
      <img className=" hover:cursor-pointer" src={img} alt="My Icon" />

      <div className="px-4 flex flex-col justify-evenly">
        <div
          className={`pt-1 ${catColor}  ${catDivH} ${catDivW}  font-semibold text-xs text-white hover:cursor-pointer flex justify-center`}
        >
          <div> {category}</div>
        </div>
        <div
          className="group  font-bold transition-all duration-500 ease-in-out pt-2"
          href="#"
        >
          <span className="cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-600 to-blue-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            {heading}
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
          <div className="px-2 text-xs"> {date}</div>
        </div>
      </div>
    </div>
  );
};

export default MainSection1View2;
