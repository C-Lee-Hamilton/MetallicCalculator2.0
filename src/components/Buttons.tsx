import React, { useState } from "react";
import { GradientSpans } from "./StyledComponents.tsx";

interface ButtonsProps {
  display: string; 
  setDisplay: React.Dispatch<React.SetStateAction<string | number>>; 
}


function Buttons({ display, setDisplay } : ButtonsProps):JSX.Element {
  const [operator, setOperator] = useState<string>("");
  const [initialExpression, setInitialExpression] = useState<number>(0);
  const [solved, setSolved] = useState<boolean>(false);
  const operatorArray:string[] = ["x", "÷", "+", "-"];

  const clear = () => {
    setOperator("");
    setInitialExpression(0);
    setDisplay("");
    setSolved(false);
  };
  const digitInput = (digit:number|string) => {
    setDisplay(display ? display + "" + digit : digit);
  };
  const operatorInput = (id :string) => {
    setOperator(id);
    if (initialExpression === 0 || solved) {
      setInitialExpression(parseFloat(display));

      setSolved(false);
    } else {
      if (operator === "+") {
        setInitialExpression(parseFloat(display) + initialExpression);
      } else if (operator === "-") {
        setInitialExpression(initialExpression - parseFloat(display));
      } else if (operator === "x") {
        setInitialExpression(initialExpression * parseFloat(display));
      } else if (operator === "÷") {
        setInitialExpression(initialExpression / parseFloat(display));
      }
    }
    setDisplay("");
  };
  const calculate = () => {
    if (!solved) {
      if (operator === "+") {
        setDisplay(parseFloat(display) + initialExpression);
        setInitialExpression(parseFloat(display) + initialExpression);
      } else if (operator === "-") {
        setDisplay(initialExpression - parseFloat(display));
        setInitialExpression(initialExpression - parseFloat(display));
      } else if (operator === "x") {
        setDisplay(initialExpression * parseFloat(display));
        setInitialExpression(initialExpression * parseFloat(display));
      } else if (operator === "÷") {
        setDisplay(initialExpression / parseFloat(display));
        setInitialExpression(initialExpression / parseFloat(display));
      }
      setSolved(true);
    } else {
      setDisplay(display);
    }
  };

  return (
    <div className="w-full">
      <div className="flex flex-row w-11/12 mx-auto justify-between">
        {operatorArray.map((sym, _) => (
          <button
            key={sym}
            onClick={() => operatorInput(sym)}
            className="btn-secondary"
          >
            {sym}
            <GradientSpans />
          </button>
        ))}
      </div>

      <div className="flex grid grid-cols-3 gap-0 w-11/12 mx-auto">
        {Array.from({ length: 9 }).map((_, index) => (
          <button
            key={index + 1}
            onClick={() => digitInput(index + 1)}
            className="btn-primary"
          >
            <GradientSpans />
            {index + 1}
          </button>
        ))}

        <button onClick={() => digitInput(".")} className="btn-primary ">
          <GradientSpans /> •
        </button>
        <button onClick={() => digitInput(0)} className="btn-primary">
          <GradientSpans /> 0
        </button>
        <button
          onClick={clear}
          className="btn-primary text-black pb-0 text-2xl"
          style={{
            background: "linear-gradient( darkgrey , lightgrey )",
          }}
        >
          <GradientSpans /> C
        </button>
      </div>

      <button onClick={calculate} className="btn-secondary w-10/12  mx-auto  ">
        <GradientSpans /> =
      </button>
    </div>
  );
}

export default Buttons;
