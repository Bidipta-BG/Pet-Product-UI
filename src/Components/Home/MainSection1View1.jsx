import React from "react";

const MainSection1View1 = ({
  height,
  width,
  catColor,
  catDivW,
  catDivH,
  category,
  heading,
  imge,
  author,
  date,
}) => {
  return (
    <div className="py-4 pl-8">
      {/* {console.log(height, width)} */}
      <div
        className={`relative ${width} ${height} hover:scale-105 transition duration-500 cursor-pointer object-cover`}
      >
        <img src={imge} alt="Im" className="w-full h-full rounded " />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-end pb-8">
          <div className="px-8 text-white">
            <div
              className={`px-2 text-sm ${catColor} ${catDivW} ${catDivH} py-1 font-semibold hover:!bg-blue-500`}
            >
              {category}
            </div>

            <div
              className="group  font-bold transition-all duration-500 ease-in-out pt-2"
              href="#"
            >
              <span className="text-2xl bg-left-bottom bg-gradient-to-r from-blue-600 to-blue-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                {heading}
              </span>
            </div>
            <div className="pt-4 flex text-slate-300 space-x-4">
              <div className="text-xs">
                BY{" "}
                <span className="!text-slate-50 hover:!text-blue-500">
                  {author}
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
                <div className="text-xs"> {date}</div>
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
                <div className="text-xs"> 3,250</div>
              </div>
              {/* <div className="text-xs"> 3,250</div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection1View1;
