import React from "react";

const FourDigits = () => {
  return (
    <div class="conatiner text-center">
      <h1 class="text-center pt-5 text-success">4 Digits</h1>
      <div class="text-center">
        <h3 class="pt-5 text-success circle-number" id="digits-four">
          0000
        </h3>
      </div>
      <div class="text-center">
        <button class="text-center mt-5 btn btn-success" onclick="digitsFour()">
          Lucky Number
        </button>
      </div>
    </div>
  );
};

export default FourDigits;
