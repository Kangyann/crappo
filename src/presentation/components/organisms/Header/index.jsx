// module style
import style from "./style.module.scss";

// -- asset & component
import headlineIllustration from "core/assets/image/headline-bg.svg";
import Layouts from "presentation/components/molecules/Layouts";

// -- fetch data
import RequestData from "core/hooks/useGetData";
import ENDPOINT from "infrastructure/api/endPoint";

const Header = () => {
  let config = {
    url: ENDPOINT.HERO_BANNER,
    method: "GET",
  };

  const { data: header } = RequestData(config);
  const transformData = [];
  
  if (header) {
    transformData.push({
      header: header.data[2],
    });
  }
  return (
    <>
      {header && (
        <div className="header">
          <img
            src={headlineIllustration}
            alt=""
            className={style.headlineIllustration}
          />
          <div className="container">
            <Layouts
              dataButton={transformData[0].header.button}
              {...transformData[0].header}
              btn_arrow={true}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
