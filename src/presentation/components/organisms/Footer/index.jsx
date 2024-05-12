// -- core
import { Link } from "react-router-dom";

// style module
import style from "./style.module.scss";

// -- fetch data
import RequestData from "core/hooks/useGetData";
import ENDPOINT from "infrastructure/api/endPoint";

const Footer = () => {
  let config = {
    url: ENDPOINT.FOOTER,
    method: "GET",
  };

  const { data: footer } = RequestData(config);

  return (
    <>
      {footer && (
        <div className="footer">
          <div className="container">
            <div className={style.footerContent}>
              <div className={style.footerBox}>
                <img src={footer.data.brand.logo} alt="" />
              </div>
              <div className={style.footerBox}>
                <p>{footer.data.menu[0].title}</p>
                <ul className={style.footerContentItem}>
                  {footer.data.menu[0].list.map((val, index) => (
                    <>
                      <li key={`quicklink-${index}`}>
                        <Link className={style.footerContentLink} to={val.to}>
                          {val.text}
                        </Link>
                      </li>
                    </>
                  ))}
                </ul>
              </div>
              <div className={style.footerBox}>
                <p>{footer.data.menu[1].title}</p>
                <ul className={style.footerContentItem}>
                  {footer.data.menu[1].list.map((val, index) => (
                    <>
                      <li key={`resources-${index}`}>
                        <Link className={style.footerContentLink} to={val.to}>
                          {val.text}
                        </Link>
                      </li>
                    </>
                  ))}
                </ul>
              </div>
              <div className={style.footerBox}>
                <p>{footer.data.payments.title}</p>
                <div className={style.footerBoxImage}>
                  {footer.data.payments.list.map((val, index) => (
                    <Link to={val.to} key={`${val.name}-${index}`}>
                      <img src={val.icon} alt={val.name} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className={style.footerCopyright}>
              <p>{footer.data.copyright}</p>
              <div className={style.footerCopyrightImage}>
                {footer.data.social_media.map((val, index) => (
                  <Link to={val.to} key={`${val.name}-${index}`}>
                    <img src={val.icon} alt={val.name} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
