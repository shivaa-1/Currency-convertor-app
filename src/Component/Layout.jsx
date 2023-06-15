import React, { useState } from "react";

const CurrencyConvertor = () => {
  //state variable amount ,convertedAmount
  const [amount, setAmount] = useState("");
  const [convertedAmount, setconvertedAmount] = useState("");

  //exchange value
  const exchangeRate = 82.29;

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  //logic to convert usd to inr
  const convertCurrency = () => {
    const convertedValue = amount * exchangeRate;
    setconvertedAmount(convertedValue.toFixed(2));
  };
  return (
    <div className="container text-center bg-dark m-5 p-5">
      <h1 className="mx-3 text-light">Currency Convertor</h1>
      <div className="header p-3 bg-info">
        <label className="label m-3">
            <span><h4>Amount(USD):</h4>
          <input className="input-box m-3" type="number" value={amount} onChange={handleAmount} /></span>
        </label>
        <br />
      <button className="submit m-3 p-1" onClick={convertCurrency}>Convert</button>
      <div>
        <h5>Converted Amount: {convertedAmount} INR</h5>
      </div>
      </div>
      
    </div>
  );
};
export default CurrencyConvertor;