import React from "react";

import { useState } from "react";

const ThreeDigits = () => {
  const [num, setNum] = useState("000");

  function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (999 - 100 + 1) + 100);
  }

  const handleClick = () => {
    setNum(randomNumberInRange(0, 99));
  };

  return (
    <div class="conatiner text-center">
      <h1 class="pt-5 text-danger circle-number">{num}</h1>
      <button className="btn btn-danger mt-3" onClick={handleClick}>
        Lucky number
      </button>
    </div>
  );
};

export default ThreeDigits;
