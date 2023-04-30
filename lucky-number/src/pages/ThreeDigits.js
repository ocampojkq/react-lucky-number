import React from "react";

const ThreeDigits = () => {
  return (
    <div class="conatiner text-center">
      <h1 class="text-center pt-5 text-danger">3 Digits</h1>
      <div class="text-center">
        <h3 class="pt-5 text-danger circle-number" id="digits-three">
          000
        </h3>
      </div>
      <div class="text-center">
        <button class="text-center mt-5 btn btn-danger" onclick="digitsThree()">
          Lucky Number
        </button>
      </div>
    </div>
  );
};
export default ThreeDigits;
