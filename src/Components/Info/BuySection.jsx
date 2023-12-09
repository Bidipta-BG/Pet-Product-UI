import React, { useState, useEffect } from "react";
import BuyNow from "./BuyNow";

const BuySection = () => {
  return (
    <div className=" w-[25%]">
      <div id="buysection" className={`sticky top-[6rem]`}>
        <BuyNow />
        <BuyNow />
        <BuyNow />
        <BuyNow />
        <BuyNow />
      </div>
    </div>
  );
};

export default BuySection;
