import React from "react";

import NumberButton from "./NumberButton";
import OperatorButton from "./OperatorButton";

function Calculator() {
  let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div>
      <h2>CALCULATOR</h2>
      {numbers.map((num) => {
        return <NumberButton buttonValue={num} />;
      })}
      <OperatorButton asa="heyo" />
      <OperatorButton asa="heyos" />
      <OperatorButton asa="heyoss" />
    </div>
  );
}

export default Calculator;
