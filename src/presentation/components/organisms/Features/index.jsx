
// -- style module
import style from "./style.module.scss";

// -- assets & component
import chartImage from "core/assets/image/chart_features.svg";
import Layouts from "presentation/components/molecules/Layouts";

// -- fetch data
import RequestData from "core/hooks/useGetData";
import ENDPOINT from "infrastructure/api/endPoint";

const Features = () => {
  let config = {
    invest: {
      url: ENDPOINT.INVEST,
      method: "GET",
    },
    statistics: {
      url: ENDPOINT.STATISTICS,
      method: "GET",
    },
    profit: {
      url: ENDPOINT.PROFIT,
      method: "GET",
    },
  };

  const { data: invest } = RequestData(config.invest);
  const { data: statistics } = RequestData(config.statistics);
  const { data: profit } = RequestData(config.profit);

  let transformData = null;

  if (invest && statistics && profit) {
    transformData = {
      title: invest.data.title,
      section: [
        {
          data: invest.data.section,
          className: "featuresContent",
        },
        {
          data: statistics.data,
          className: "layoutsRowReverse featuresContent static",
        },
        {
          data: profit.data,
          className: "featuresContent grow",
        },
      ],
    };

    transformData.section[0].data.image = chartImage;
  }

  return (
    <>
      {transformData && (
        <div className="features">
          <div className="container">
            <div className={style.featuresTitle}>
              <h3>{transformData.title}</h3>
            </div>
            {transformData.section.map((val, index) => (
              <Layouts
                {...val.data}
                key={index}
                dataButton={val.data.button}
                className={val.className}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Features;
