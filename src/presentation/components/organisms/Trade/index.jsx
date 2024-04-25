import Calculate from "presentation/components/molecules/Calculate";
import style from "./style.module.scss";
import Card from "presentation/components/molecules/Card";
import icon from "core/assets/image/crypto_icon/";

const Trade = () => {
  const dataCryptoCurrencies = [
    {
      btc: {
        icon: icon.bitcoin,
        title: "Bitcoin",
        alt: "BTC",
        desc: "Digital currency in which a record of transactions is maintained.",
        button: true,
      },
      eth: {
        icon: icon.ethereum,
        title: "Ethereum",
        alt: "ETH",
        desc: "Blockchain technology to create and run decentralized digital applications.",
      },
      ltc: {
        icon: icon.litecoin,
        title: "Litecoin",
        alt: "LTC",
        desc: "Cryptocurrency that enables instant payments to anyone in the world.",
      },
    },
  ];
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
        <div className={style.tradeContent}>
          <div className="container">
            <h3>Trade securely and market the high growth cryptocurrencies.</h3>
            <div className={style.tradeContentBox}>
              {dataCryptoCurrencies.map((val, index) => (
                <>
                  <Card data={val.btc} key={`c-${index}`} className={"active"} />
                  <Card data={val.eth} key={`c-${index}`} />
                  <Card data={val.ltc} key={`c-${index}`} />
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trade;
