import React from "react";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Pathbar from "../Components/Info/Pathbar";
import InfoView from "../Components/Info/InfoView";
import BuySection from "../Components/Info/BuySection";
import Footer from "../Components/Footer";

const Info = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Pathbar />
      <div className="flex px-2 space-x-10 py-12">
        <InfoView />
        <BuySection />
      </div>
      <Footer />
    </div>
  );
};

export default Info;
