import headlineImage from "core/assets/image/headline-illustration.svg";
import headlineIllustration from "core/assets/image/headline-bg.svg";
import style from "./style.module.scss";
import Navbar from "presentation/components/molecules/Navbar";

import Layouts from "presentation/components/molecules/Layouts";
const Header = () => {
  const dataButton = {
    to: "/",
    name: "Try for FREE",
  };
  const data = {
    title: "Fastest & secure platform to invest in crypto",
    description:
      "Buy and sell cryptocurrencies, trusted by 10M wallets with over $30 billion in transactions.",
    image: headlineImage,
    info: true,
    btn_arrow: true,
  };
  return (
    <>
      <Navbar />
      <div className="header">
        <img
          src={headlineIllustration}
          alt=""
          className={style.headlineIllustration}
        />
        <div className="container">
          <Layouts dataButton={dataButton} {...data} />
        </div>
      </div>
    </>
  );
};

export default Header;
