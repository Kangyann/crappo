// -- style module
import style from "./style.module.scss";

// -- components
import Calculate from "presentation/components/molecules/Calculate";
import Card from "presentation/components/molecules/Card";

// -- fetch data
import RequestData from "core/hooks/useGetData";
import ENDPOINT from "infrastructure/api/endPoint";

const Trade = () => {
  let config = {
    url: ENDPOINT.CRYPTOCURRENCIES,
    method: "GET",
  };

  const { data: cryptocurrencies } = RequestData(config);

  return (
    <>
      <div className="trade">
        <div className={style.tradeContainer}>
          <div className="container">
            <div className={style.tradeText}>
              <h3>Check how much you can earn</h3>
              <p>
                Let’s check your hash rate to see how much you will earn today,
                <br />
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
        </div>
        <Calculate />
        {cryptocurrencies && (
          <div className={style.tradeContent}>
            <div className="container">
              <h3>{cryptocurrencies.data.title}</h3>
              <div className={style.tradeContentBox}>
                {cryptocurrencies.data.list.map((val, index) => (
                  <Card data={val} key={`${val.name}-${index}`} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Trade;
