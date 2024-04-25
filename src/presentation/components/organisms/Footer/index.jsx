import icon from "core/assets/image/crappo.svg";
import style from "./style.module.scss";
import { Link } from "react-router-dom";
import Data from "./data";
const Footer = () => {
  const dataLink = [
    {
      quickLink: [
        {
          name: "Home",
          to: "/",
        },
        {
          name: "Products",
          to: "/",
        },
        {
          name: "About",
          to: "/",
        },
        {
          name: "Features",
          to: "/",
        },
        {
          name: "Contact",
          to: "/",
        },
      ],
      Resources: [
        {
          name: "Download Whitepapper",
          to: "/",
        },
        {
          name: "Smart Token",
          to: "/",
        },
        {
          name: "Blockchain Explorer",
          to: "/",
        },
        {
          name: "Cypto API",
          to: "/",
        },
        {
          name: "Interest",
          to: "/",
        },
      ],
    },
  ];

  return (
    <>
      <div className="footer">
        <div className="container">
          <div className={style.footerContent}>
            <div className={style.footerBox}>
              <img src={icon} alt="" />
            </div>
            <div className={style.footerBox}>
              <p>Quick Link</p>
              <ul className={style.footerContentItem}>
                {dataLink[0].quickLink.map((qVal, qIndex) => (
                  <>
                    <li key={qIndex}>
                      <Link className={style.footerContentLink}>
                        {qVal.name}
                      </Link>
                    </li>
                  </>
                ))}
              </ul>
            </div>
            <div className={style.footerBox}>
              <p>Resources</p>
              <ul className={style.footerContentItem}>
                {dataLink[0].Resources.map((qVal, qIndex) => (
                  <>
                    <li key={qIndex}>
                      <Link className={style.footerContentLink}>
                        {qVal.name}
                      </Link>
                    </li>
                  </>
                ))}
              </ul>
            </div>
            <div className={style.footerBox}>
              <p>We accept following payment systems</p>
              <div className={style.footerBoxImage}>
                <img src={Data.image.payment.visa} alt="" />
                <img src={Data.image.payment.mastercard} alt="" />
                <img src={Data.image.payment.bitcoin} alt="" />
              </div>
            </div>
          </div>
          <div className={style.footerCopyright}>
            <p>©2021 CRAPPO. All rights reserved</p>
            <div className={style.footerCopyrightImage}>
              <img src={Data.image.socialMedia.instagram} alt="" />
              <img src={Data.image.socialMedia.youtube} alt="" />
              <img src={Data.image.socialMedia.facebook} alt="" />
              <img src={Data.image.socialMedia.linkedin} alt="" />
              <img src={Data.image.socialMedia.twitter} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
