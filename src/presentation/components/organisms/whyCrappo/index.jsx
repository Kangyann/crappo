// -- style module
import style from "./style.module.scss";

// -- assets & component
import Background from "core/assets/image/crappo-bg.svg";
import Layouts from "presentation/components/molecules/Layouts";

// -- fetch data
import RequestData from "core/hooks/useGetData";
import ENDPOINT from "infrastructure/api/endPoint";

const whyCrappo = () => {
  let config = {
    number: {
      url: ENDPOINT.NUMBERS,
      method: "GET",
    },
    whyCrappo: {
      url: ENDPOINT.WHY_CRAPPO,
      method: "GET",
    },
  };

  const { data: number } = RequestData(config.number);
  const { data: whyCrappo } = RequestData(config.whyCrappo);

  return (
    <>
      <div className="whyCrappo">
        <img src={Background} alt="" className={style.whyCrappoBackground} />
        <div className="container">
          <div className={style.whyCrappoTestimoni}>
            {number &&
              number.data.map((val, index) => (
                <div
                  className={style.whyCrappoItem}
                  key={`${val.icon_font}-${index}`}
                >
                  <div className={style.whyCrappoItemIcon}>
                    <img src={val.icon_image} alt={val.icon_font} />
                  </div>
                  <div className={style.whyCrappoItemText}>
                    <h3>{val.title}</h3>
                    <p>{val.description}</p>
                  </div>
                </div>
              ))}
          </div>
          {whyCrappo && (
            <Layouts
              dataButton={whyCrappo.data.button}
              {...whyCrappo.data}
              className={"layoutsRowReverse"}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default whyCrappo;
