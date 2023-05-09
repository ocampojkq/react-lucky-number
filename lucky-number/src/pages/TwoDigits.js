import React from "react";

import { useState } from "react";

const TwoDigits = () => {
  const [num, setNum] = useState("00");
  const [clicked, setClicked] = useState(false);

  function randomNumberInRange() {
    return Math.floor(Math.random() * 99 + 1);
  }

  const handleClick = () => {
    const rollTime = 3000;
    if (!clicked) {
      const newNum = randomNumberInRange(0, 99);
      setClicked(true);
      setNum("Rolling..."); // set the initial text before rolling the number
      setTimeout(() => {
        setNum(newNum.toString().padStart(2, "0")); // update the number after roll time has passed
      }, rollTime);
    }
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
