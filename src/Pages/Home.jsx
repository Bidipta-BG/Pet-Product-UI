import Navbar from "../Components/Navbar";
import AdvBar from "../Components/Home/AdvBar";
import MainSection2 from "../Components/Home/MainSection2";
import Header from "../Components/Header";
import MainSection1 from "../Components/Home/MainSection1";
import TopBar from "../Components/Home/Topbarr";
import MainSection3 from "../Components/Home/MainSection3";
import MainSection4 from "../Components/Home/MainSection4";
import AdvBar2 from "../Components/Home/AdvBar2";
import AdvBar3 from "../Components/Home/AdvBar3";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <TopBar />
      <MainSection1 />
      <AdvBar />
      <MainSection2 />
      <MainSection3 />
      <AdvBar2 />
      <MainSection4 />
      <AdvBar3 />
      <Footer />
    </div>
  );
};

export default Home;
