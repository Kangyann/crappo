import style from "./style.module.scss";
import bgBox from "core/assets/image/start-mining-box-bg.png";
import bgMining from "core/assets/image/start-mining-bg.svg";
import Button from "presentation/components/atoms/Button";

const startMining = () => {
    const dataButton = {
        name : "Subscribe",
        to : "/"
    }
  return (
    <>
      <div className="mining">
        <img src={bgMining} alt="" className={style.background}/>
        <div className="container">
            <div className={style.miningBox}>
                <img src={bgBox} alt=""  className={style.backgroundBox}/>
                <div className={style.miningBoxText}>
                    <h3>Start Mining Now</h3>
                    <p>Join now with CRAPPO to get the latest news and start mining now</p>
                </div>
                <div className={style.miningBoxInput}>
                    <input type="email" placeholder="Enter your email" />
                    <Button {...dataButton}/>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default startMining;
