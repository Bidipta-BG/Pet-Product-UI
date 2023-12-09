import React from "react";
import MainSection1View1 from "./MainSection1View1";

const MainSection3 = () => {
  return (
    // <div className="bg-cyan-50 h-[50rem]">
    <div className=" h-[50rem]">
      <div className=" px-6 pt-14">
        <div className="text-3xl font-bold">What’s New</div>
        <div className="pt-2">
          <div className="flex-grow h-0.5 bg-gray-500"></div>
        </div>
      </div>
      <div className="pt-6">
        <div className="flex">
          <MainSection1View1
            height="h-[18rem]"
            width="w-[24rem]"
            catColor={"bg-yellow-500"}
            category={"SPORTS"}
            heading={"If may year 2021 Section"}
            imge={"https://picsum.photos/810"}
            catDivW="w-[4.2rem]"
            catDivH="h-[1.8rem]"
            author={"WILLUM SKEEM"}
            date={"DECEMBER 9, 2022"}
          />
          <MainSection1View1
            height="h-[18rem]"
            width="w-[24rem]"
            catColor={"bg-green-600"}
            category={"FASHION"}
            heading={"How childhood viral  may be"}
            imge={"https://picsum.photos/820"}
            catDivW="w-[5rem]"
            catDivH="h-[1.8rem]"
            author={"WILLUM SKEEM"}
            date={"DECEMBER 9, 2022"}
          />
          <MainSection1View1
            height="h-[18rem]"
            width="w-[24rem]"
            catColor={"bg-red-600"}
            category={"MUSIC"}
            heading={"How   infections may yea"}
            imge={"https://picsum.photos/830"}
            catDivW="w-[4rem]"
            catDivH="h-[1.8rem]"
            author={"WILLUM SKEEM"}
            date={"DECEMBER 9, 2022"}
          />
        </div>
      </div>
      <div>
        <div className="flex">
          <MainSection1View1
            height="h-[18rem]"
            width="w-[24rem]"
            catColor={"bg-lime-500"}
            category={"TECHNOLOGY"}
            heading={"If may year 2021 Section"}
            imge={"https://picsum.photos/840"}
            catDivW="w-[6.5rem]"
            catDivH="h-[1.8rem]"
            author={"WILLUM SKEEM"}
            date={"DECEMBER 9, 2022"}
          />
          <MainSection1View1
            height="h-[18rem]"
            width="w-[24rem]"
            catColor={"bg-purple-600"}
            category={"LIFESTYLE"}
            heading={"How childhood viral  may be"}
            imge={"https://picsum.photos/860"}
            catDivW="w-[5rem]"
            catDivH="h-[1.8rem]"
            author={"WILLUM SKEEM"}
            date={"DECEMBER 9, 2022"}
          />
          <MainSection1View1
            height="h-[18rem]"
            width="w-[24rem]"
            catColor={"bg-red-600"}
            category={"MUSIC"}
            heading={"How   infections may yea"}
            imge={"https://picsum.photos/870"}
            catDivW="w-[4rem]"
            catDivH="h-[1.8rem]"
            author={"WILLUM SKEEM"}
            date={"DECEMBER 9, 2022"}
          />
        </div>
      </div>
    </div>
  );
};

export default MainSection3;
