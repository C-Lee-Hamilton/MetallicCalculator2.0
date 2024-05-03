import React, { useState } from "react";
interface ColorProps {
  setHue:React.Dispatch<React.SetStateAction<string>>;  
}
function ColorChanger({ setHue }:ColorProps):JSX.Element {
  const [hueValue, setHueValue] = useState<number>(5);
  const colorChange = (e) => {
    setHueValue(e.target.value);

    switch (parseInt(e.target.value)) {
      case 0:
        setHue("-hue-rotate-180");
        break;
      case 1:
        setHue("-hue-rotate-90");
        break;
      case 2:
        setHue("-hue-rotate-60");
        break;
      case 3:
        setHue("-hue-rotate-30");
        break;
      case 4:
        setHue("-hue-rotate-15");
        break;
      case 5:
        setHue("hue-rotate-0");
        break;
      case 6:
        setHue("hue-rotate-15");
        break;
      case 7:
        setHue("hue-rotate-30");
        break;
      case 8:
        setHue("hue-rotate-60");
        break;
      case 9:
        setHue("hue-rotate-90");
        break;
      case 10:
        setHue("saturate-50");
        break;
      default:
        setHue("hue-rotate-0");
    }
  };
  return (
    <div className="relative bottom-0 w-full mt-10 flex flex-col items-center">
      <input
        className="w-1/4"
        type="range"
        min="0"
        max="10"
        step={1}
        value={hueValue}
        onChange={(e) => colorChange(e)}
      />
      <h1 className="text-gradient">color changer</h1>
    </div>
  );
}

export default ColorChanger;
