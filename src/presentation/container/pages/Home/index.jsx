// -- core styles
import "core/styles/app.scss";

// -- default template
import { Default } from "presentation/components/template/Default";

// -- section
import Header from "../../../components/organisms/Header";
import WhyCrappo from "presentation/components/organisms/whyCrappo";
import Mining from "presentation/components/organisms/startMining";
import Trade from "presentation/components/organisms/Trade";
import Features from "presentation/components/organisms/Features";

const Home = () => {
  return (
    <>
      <Default>
        <Header />
        <WhyCrappo />
        <Trade />
        <Features />
        <Mining />
      </Default>
    </>
  );
};

export default Home;
