import React from "react";
import MainSection2View1 from "./MainSection2View1";

const MainSection2 = () => {
  return (
    // <div className="bg-orange-50 h-[35rem]">
    <div className=" h-[35rem]">
      <div className=" px-6 py-10">
        <div className="text-3xl font-bold">Top Stories</div>
        <div className="pt-2">
          {/* <div className="w-2 h-2 bg-gray-500 rounded-full mr-2"></div> */}
          <div className="flex-grow h-0.5 bg-gray-500"></div>
        </div>
      </div>
      <div className="flex pl-2">
        <MainSection2View1
          category="MUSIC"
          // catColor="bg-blue-500"
          author="WILLUM SKEEM"
          catDivW="w-[6rem]"
          catDivH="h-[1.6rem]"
          heading="Trying to apply new heading in react frontend component"
          date="JANUARY 8, 2023"
          img="https://picsum.photos/450"
        />
        <MainSection2View1
          category="ANIMAL"
          author="WILLUM SKEEM"
          // catColor="bg-blue-500"
          // catDivW="w-[6rem]"
          // catDivH="h-[1.6rem]"
          heading="Trying to apply new heading in react frontend component"
          date="JANUARY 8, 2023"
          img="https://picsum.photos/350"
        />
        <MainSection2View1
          category="TRAVEL"
          author="WILLUM SKEEM"
          // catColor="bg-blue-500"
          // catDivW="w-[6rem]"
          // catDivH="h-[1.6rem]"
          heading="Trying to apply new heading in react frontend component"
          date="JANUARY 8, 2023"
          img="https://picsum.photos/360"
        />
        <MainSection2View1
          category="FOOD"
          author="WILLUM SKEEM"
          // catColor="bg-blue-500"
          // catDivW="w-[6rem]"
          // catDivH="h-[1.6rem]"
          heading="Trying to apply new heading in react frontend component"
          date="JANUARY 8, 2023"
          img="https://picsum.photos/370"
        />
      </div>
    </div>
  );
};

export default MainSection2;
