import React from "react";

import { useState } from "react";

const SixDigits = () => {
  const [num, setNum] = useState("000000");

  function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * 899999 + 100000);
  }
  const handleClick = () => {
    setNum(randomNumberInRange(0, 99));
  };

  return (
    <div class="conatiner text-center">
      <h1 class="pt-5 text-info circle-number">{num}</h1>
      <button className="btn btn-info mt-3" onClick={handleClick}>
        Lucky number
      </button>
    </div>
  );
};

export default SixDigits;
