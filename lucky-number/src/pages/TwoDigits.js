import React from "react";

import { useState } from "react";

const TwoDigits = () => {
  const [num, setNum] = useState("00");

  function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * 99 + 1);
  }

  const handleClick = () => {
    setNum(randomNumberInRange(0, 99));
  };

  return (
    <div class="conatiner text-center">
      <h1 class="pt-5 text-primary circle-number">{num}</h1>
      <button className="btn btn-primary mt-3" onClick={handleClick}>
        Lucky number
      </button>
    </div>
  );
};

export default TwoDigits;
