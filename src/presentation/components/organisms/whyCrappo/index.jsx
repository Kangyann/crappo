import earthIcon from "core/assets/image/earth.svg";
import userIcon from "core/assets/image/user.svg";
import chartIcon from "core/assets/image/chart.svg";
import Background from "core/assets/image/crappo-bg.svg";
import crappoImage from "core/assets/image/whycrappo-illustration.svg";
import style from "./style.module.scss";
import Layouts from "presentation/components/molecules/Layouts";

const whyCrappo = () => {
  const data = {
    title: "Why you should choose CRAPPO",
    description:
      "Experience the next generation cryptocurrency platform. No financial borders, extra fees, and fake reviews.",
    image: crappoImage,
    className : "layoutsRowReverse"
  };
  const dataButton = {
    to: "/",
    name: "Learn More",
  };
  const numbersData = [
    {
      icon: chartIcon,
      title: "$30B",
      desc: "Digital Currency Exchanged",
    },
    {
      icon: userIcon,
      title: "10M+",
      desc: "Trusted Wallets Investor",
    },
    {
      icon: earthIcon,
      title: "195",
      desc: "Countries Supported",
    },
  ];
  return (
    <>
      <div className="whyCrappo">
        <img src={Background} alt="" className={style.whyCrappoBackground} />
        <div className="container">
          <div className={style.whyCrappoTestimoni}>
            {numbersData.map((val, index) => (
              <div className={style.whyCrappoItem}>
                <div className={style.whyCrappoItemIcon}>
                  <img src={val.icon} alt="" />
                </div>
                <div className={style.whyCrappoItemText}>
                  <h3>{val.title}</h3>
                  <p>{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
          {/*  */}
          <Layouts dataButton={dataButton} {...data} />
        </div>
      </div>
    </>
  );
};

export default whyCrappo;
