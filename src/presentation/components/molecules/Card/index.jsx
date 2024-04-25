import style from "./style.module.scss";
import Button from "presentation/components/atoms/Button";

const Card = ({ data, ...otherData }) => {
  const dataButton = {
    name: "Start Mining",
    to: "/",
  };
  console.log(data);
  return (
    <>
      <div className={`card ${otherData.className}`}>
        <img src={data.icon} alt="" />
        <div className={style.cardText}>
          <h3 className="title">
            {data.title} <sup>{data.alt}</sup>
          </h3>
          <p>{data.desc}</p>
          {data.button && (
            <Button {...dataButton}>
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
