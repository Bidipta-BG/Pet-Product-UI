import React from "react";

const AdvBar2 = () => {
  return (
    <div className="px-8 py-8 flex space-x-6">
      <div>
        <div className="w-[50rem]">
          <div className=" h-[10rem] rounded cursor-pointer bg-[url('https://picsum.photos/950')]">
            ADVERTISE
          </div>
        </div>
        <div className="pt-4 w-[50rem]">
          <div className=" h-[10rem] rounded cursor-pointer bg-[url('https://picsum.photos/920')]">
            ADVERTISE
          </div>
        </div>
      </div>
      <div className=" bg-[url('https://picsum.photos/930')] w-[30rem]">
        ADVERTISE
      </div>
    </div>
  );
};

export default AdvBar2;
