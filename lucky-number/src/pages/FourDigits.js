import React from "react";

import { useState } from "react";

const FourDigits = () => {
  const [num, setNum] = useState("0000");

  function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * 999 + 999);
  }

  const handleClick = () => {
    setNum(randomNumberInRange(0, 99));
  };

  return (
    <div class="conatiner text-center">
      <h1 class="pt-5 text-success circle-number">{num}</h1>
      <button className="btn btn-success mt-3" onClick={handleClick}>
        Lucky number
      </button>
    </div>
  );
};

export default FourDigits;
