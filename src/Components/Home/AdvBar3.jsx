import React, { useState } from "react";

const AdvBar3 = () => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div className="px-8 py-8 flex space-x-6">
      <div className=" bg-[url('https://picsum.photos/940')] w-[30rem]">
        ADVERTISE
      </div>
      <div>
        <div className=" h-[20rem] w-[50rem] rounded cursor-pointer bg-slate-100">
          <div className="py-[11%] px-[15%]">
            <div className="text-3xl font-bold">
              Get The Best Blog Stories into Your inbox!
            </div>
            <div className="pt-6">
              <input
                type="text"
                value={inputValue}
                className="h-[30%] px-[5%] rounded-s"
                style={{ width: "420px", height: "50px" }}
                onChange={handleChange}
                placeholder="Your e-mail"
              />
              <button
                className="bg-blue-600 rounded-s text-white font-semibold"
                dir="rtl"
                style={{ width: "140px", height: "50px" }}
                type="submit"
              >
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvBar3;
