import "core/styles/app.scss";
import Header from "../../../components/organisms/Header";
import WhyCrappo from "presentation/components/organisms/whyCrappo";
import Mining from "presentation/components/organisms/startMining";
import Footer from "presentation/components/organisms/Footer";
import Trade from "presentation/components/organisms/Trade";
import Features from "presentation/components/organisms/Features";

const Home = () => {
  return (
    <>
      <Header />
      <WhyCrappo />
      <Trade />
      <Features />
      <Mining />
      <Footer />
    </>
  );
};

export default Home;
