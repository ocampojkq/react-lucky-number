import React from "react";

const SixDigits = () => {
  return (
    <div class="conatiner text-center">
      <h1 class="text-center pt-5 text-info">6 Digits</h1>
      <div class="text-center">
        <h3 class="pt-5 text-info circle-number" id="digit-six">
          000000
        </h3>
      </div>
      <div class="text-center">
        <button class="text-center mt-5 btn btn-info" onclick="digitSix()">
          Lucky Number
        </button>
      </div>
    </div>
  );
};

export default SixDigits;
