import React from "react";
import MainSection1View2 from "./MainSection1View2";

const MainSection4 = () => {
  return (
    // <div className="bg-fuchsia-50 h-[38rem]">
    <div className=" h-[38rem]">
      <div className=" px-6 pt-14">
        <div className="text-3xl font-bold">Featured Post</div>
        <div className="pt-2">
          <div className="flex-grow h-0.5 bg-gray-500"></div>
        </div>
      </div>
      <div className="pt-8">
        <div className="flex pl-8">
          <MainSection1View2
            category="FASHION"
            catColor="bg-purple-500"
            catDivW="w-[6rem]"
            catDivH="h-[1.6rem]"
            heading="Trying to apply new heading in react frontend component"
            date="JANUARY 8, 2023"
            img="https://picsum.photos/413"
          />
          <MainSection1View2
            category="TECHNOLOGY"
            catColor="bg-blue-500"
            catDivW="w-[6rem]"
            catDivH="h-[1.6rem]"
            heading="Trying to apply new heading in react frontend component"
            date="JANUARY 8, 2023"
            img="https://picsum.photos/412"
          />
          <MainSection1View2
            category="LIFESTYLE"
            catColor="bg-lime-500"
            catDivW="w-[6rem]"
            catDivH="h-[1.6rem]"
            heading="Trying to apply new heading in react frontend component"
            date="JANUARY 8, 2023"
            img="https://picsum.photos/411"
          />
        </div>
        <div className="flex pl-8 pt-4">
          <MainSection1View2
            category="SPORTS"
            catColor="bg-yellow-500"
            catDivW="w-[6rem]"
            catDivH="h-[1.6rem]"
            heading="Trying to apply new heading in react frontend component"
            date="JANUARY 8, 2023"
            img="https://picsum.photos/410"
          />
          <MainSection1View2
            category="MUSIC"
            catColor="bg-red-500"
            catDivW="w-[6rem]"
            catDivH="h-[1.6rem]"
            heading="Trying to apply new heading in react frontend component"
            date="JANUARY 8, 2023"
            img="https://picsum.photos/409"
          />
          <MainSection1View2
            category="ENTERTAINMENT"
            catColor="bg-blue-500"
            catDivW="w-[6rem]"
            catDivH="h-[1.6rem]"
            heading="Trying to apply new heading in react frontend component"
            date="JANUARY 8, 2023"
            img="https://picsum.photos/408"
          />
        </div>
      </div>
    </div>
  );
};

export default MainSection4;
