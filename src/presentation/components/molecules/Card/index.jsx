// -- asset & component
import style from "./style.module.scss";
import Button from "presentation/components/atoms/Button";

const Card = ({ data, ...otherData }) => {
  let active;
  active = data.code === "BTC" ? active = "active" : active
  return (
    <>
      <div className={`card ${active}`} >
        <img src={data.icon} alt={data.name} />
        <div className={style.cardText}>
          <h3 className="title">
            {data.name} <sup>{data.code}</sup>
          </h3>
          <p>{data.description}</p>
          {data.button && (
            <Button {...data.button}>
              <i className="fa-solid fa-chevron-right arrow"></i>
            </Button>
          )}
          {!data.button && <i className="fa-solid fa-chevron-right arrow"></i>}
        </div>
      </div>
    </>
  );
};

export default Card;
