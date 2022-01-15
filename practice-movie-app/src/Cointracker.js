import { useState, useEffect } from "react";

function Cointracker() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [bucks, setBucks] = useState(0);
  const [price, setPrice] = useState(1);
  const [symbol, setSymbol] = useState("USD");
  const onChange = (event) => setBucks(parseFloat(event.target.value));
  const onSelect = (event) => {
    setPrice(parseFloat(event.target.value));
    setSymbol(event.target.value.slice(-3));
  };
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Coin Tracker</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <div>
            <select id="coins" onChange={onSelect}>
              <option value="1USD">Select a coin!</option>
              {coins.map((coin) => (
                <option
                  key={coin.id}
                  value={coin.quotes.USD.price + coin.symbol}
                >
                  {coin.name} ({coin.symbol}):${coin.quotes.USD.price} USD
                </option>
              ))}
            </select>
          </div>
          <input
            value={bucks ? parseFloat(bucks) : undefined}
            onChange={onChange}
            placeholder="your balance ($)"
          ></input>
          <p>
            {!bucks
              ? "Write your balance."
              : `$${parseFloat(bucks)} is ${
                  Math.round((bucks * 100) / price) / 100
                } ${symbol}.`}
          </p>
        </div>
      )}
    </div>
  );
}

export default Cointracker;
