// -- style module
import style from "./style.module.scss";
// -- asset & components
import bgBox from "core/assets/image/start-mining-box-bg.png";
import bgMining from "core/assets/image/start-mining-bg.svg";
import { useState } from "react";
import ENDPOINT from "infrastructure/api/endPoint";
import axios from "axios";
const Mining = () => {
  const [email, setEmail] = useState("");
  const [response, setResponse] = useState(null);
  const mailSubmit = async (e) => {
    e.preventDefault();

    let config = {
      url: ENDPOINT.SUBSCRIBE,
      method: "POST",
      data: {
        email: email,
      },
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Origin, Content-Type, Accept",
      },
    };
    axios(config)
      .then((response) => {
        setResponse(response.data);
      })
      .catch((error) => {
        setResponse(error);
      });
    if (response) {
      console.log(response);
    }
  };

  return (
    <>
      <div className="mining">
        <img src={bgMining} alt="" className={style.background} />
        <div className="container">
          <div className={style.miningBox}>
            <img src={bgBox} alt="" className={style.backgroundBox} />
            <div className={style.miningBoxText}>
              <h3>Start Mining Now</h3>
              <p>
                Join now with CRAPPO to get the latest news and start mining now
              </p>
            </div>
            <div className={style.miningBoxInput}>
              <form onSubmit={mailSubmit}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <button type="submit" className="button">
                  Subscribe
                </button>
                {/* <Link className="button" to={button.to}></Link> */}
                {/* <Button {...dataButton} type="submit"/> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mining;
