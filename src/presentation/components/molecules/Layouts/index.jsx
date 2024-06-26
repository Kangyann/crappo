// -- assets & component
import style from "./style.module.scss";
import Button from "presentation/components/atoms/Button";

const Header = ({ dataButton, ...otherData }) => {
  return (
    <>
      <div className="layouts">
          {/*  */}
          <div className={style.layoutsMain}>
            <div
              className={`layoutsMainContent ${
                otherData.className && otherData.className
              }`}
            >
              <div className={style.layoutsMainAbout}>
                {otherData.label && (
                  <span className={style.layoutsMainContentInfo}>
                    <small>{otherData.label.badge}</small>
                    <small>{otherData.label.description}</small>
                  </span>
                )}
                <h2 className="title">{otherData.title}</h2>
                <p className="description">{otherData.description}</p>
                <Button {...dataButton}>
                  {otherData.btn_arrow && (
                    <i className="fa-solid fa-chevron-right arrow"></i>
                  )}
                </Button>
              </div>
              <img src={otherData.image} alt="" />
            </div>
          </div>
          {/*  */}
        </div>
    </>
  );
};

export default Header;
