import style from "./style.module.scss";
import growTableImage from "core/assets/image/grow-table.svg";
import staticGraphImage from "core/assets/image/statistic-graph.svg";
import chartImage from "core/assets/image/chart_features.svg";
import Layouts from "presentation/components/molecules/Layouts"

const Features = () => {
  const data = [
    {
      title: "Invest Smart",
      description:
        "Get full statistic information about the behaviour of buyers and sellers will help you to make the decision. ",
      image: chartImage,
      className: "featuresContent",
      dataButton: {
        name: "Learn More",
        to: "/",
      },
    },
    {
      title: "Detailed Statistics",
      description:
        "View all mining related information in realtime, at any point at any location and decide which polls you want to mine in. ",
      image: staticGraphImage,
      className: "layoutsRowReverse featuresContent static",
      dataButton: {
        name: "Learn More",
        to: "/",
      },
    },
    {
      title: "Grow your profit and track your investments",
      description:
        "Use advanced analytical tools. Clear TradingView charts let you track current and historical profit investments.",
      image: growTableImage,
      className: "featuresContent grow",
      dataButton: {
        name: "Learn More",
        to: "/",
      },
    },
  ];
  return (
    <>
      <div className="features">
        <div className="container">
          <div className={style.featuresTitle}>
            <h3>
              Market sentiments, portfolio, and run the infrastructure of your
              choice
            </h3>
          </div>
          {data.map((x,y)=> (
              <Layouts {...x}></Layouts>
          ))}
        </div>
      </div>
    </>
  );
};

export default Features;
