import React from "react";

import { useState } from "react";

const FourDigits = () => {
  const [num, setNum] = useState("0000");
  const [clicked, setClicked] = useState(false);

  function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * 999 + 999);
  }

  const handleClick = () => {
    const rollTime = 3000;
    if (!clicked) {
      const newNum = randomNumberInRange(0, 9999);
      setClicked(true);
      setNum("Rolling..."); // set the initial text before rolling the number
      setTimeout(() => {
        setNum(newNum.toString().padStart(2, "0")); // update the number after roll time has passed
      }, rollTime);
    }
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
