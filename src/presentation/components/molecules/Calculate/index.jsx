// -- assets & component
import Button from "presentation/components/atoms/Button";
import style from "./style.module.scss";

// -- fetch data
import RequestData from "core/hooks/useGetData";
import ENDPOINT from "infrastructure/api/endPoint";

const Calculate = () => {
  let config = {
    url: ENDPOINT.CALCULATE,
    method: "GET",
  };
  const { data: calculate } = RequestData(config);
  if (calculate) {
    console.log(calculate)
  }

  const dataButton = {
    text: "Calculate",
    to: "/",
  };
  
  return (
    <>
      <div className="calculate">
        <div className="container">
          <div className={style.calculateBox}>
            <div className={style.calculateInput}>
              <input type="text" placeholder="Enter your hash rate" />
              <select name="" id="">
                <option value="" defaultChecked>
                  Th/s
                </option>
              </select>
              <Button {...dataButton} />
            </div>
            <div className={style.calculateRessultText}>
              <h4>ESTIMATED 24 HOUR REVENUE:</h4>
              <h3>
                0.055 130 59 ETH <span>($1275)</span>
              </h3>
              <p>
                Revenue will change based on mining difficulty and Ethereum
                price.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculate;
