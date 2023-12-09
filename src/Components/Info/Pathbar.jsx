import React from "react";
import { FaHome } from "react-icons/fa";

const Pathbar = () => {
  return (
    <div className="bg-gray-100 h-[5rem] flex">
      <div className="flex space-x-4 text-sm text-slate-700 py-6 px-2">
        <div className="flex hover:text-blue-600 cursor-pointer">
          <div>
            <FaHome
              size={18}
              // color="#4267B2"
              className=" hover:text-[#4267B2] cursor-pointer pt-1"
            />
          </div>
          <div className="pl-1 ">{`Home >`}</div>
        </div>
        <div className="hover:text-blue-600 cursor-pointer">{`Technology >`}</div>
        <div className="text-blue-600">{`Best Tech Accessories 10 Work From Home Essentials We Have Delivery For All Area`}</div>
      </div>
    </div>
  );
};

export default Pathbar;
