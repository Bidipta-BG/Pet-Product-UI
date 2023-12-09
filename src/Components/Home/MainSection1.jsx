import React from "react";
import MainSection1View1 from "./MainSection1View1";
import MainSection1View2 from "./MainSection1View2";

const MainSection1 = () => {
  return (
    <div className="flex pt-4">
      <div className="py-6">
        <MainSection1View1
          height="h-[27rem]"
          width="w-[39rem]"
          catColor={"bg-pink-600"}
          category={"FASHION"}
          heading={"How childhood viral infections may year 2021 Section"}
          imge={"https://picsum.photos/800"}
          catDivW="w-[5rem]"
          catDivH="h-[1.8rem]"
          author={"WILLUM SKEEM"}
          date={"DECEMBER 9, 2022"}
        />
      </div>
      <div className="p-10">
        <div>
          <MainSection1View2
            category="SPORTS"
            catColor="bg-yellow-500"
            catDivW="w-[4rem]"
            catDivH="h-[1.6rem]"
            heading="Top Beste ampute are Speak Market. pt-1 font-semibold text-xs
            text-slate-500 hover:cursor-pointer"
            date="DECEMBER 9, 2022"
            img="https://picsum.photos/600"
          />
        </div>
        <div className="pt-8">
          <MainSection1View2
            category="TECHNOLOGY"
            catColor="bg-blue-500"
            catDivW="w-[6rem]"
            catDivH="h-[1.6rem]"
            heading="Trying to apply new heading in react frontend component"
            date="JANUARY 8, 2023"
            img="https://picsum.photos/400"
          />
        </div>
      </div>
    </div>
  );
};

export default MainSection1;
