import  { useState } from "react";
import { MetallicBackgroundDiv } from "./components/StyledComponents.tsx";
import Buttons from "./components/Buttons.tsx";
import ColorChanger from "./components/ColorChanger.tsx";
import Clock from "./components/Clock.tsx";


function App():JSX.Element {
  const [display, setDisplay] = useState<string|number >("");
  const [on,setOn]=useState<boolean>(false);

  const [hue, setHue] = useState<string>("");

  return (
    <div>
      <Clock />
      <div onClick={()=>setOn(true)} className={`${hue}`}>
        <MetallicBackgroundDiv>
          <input
            className={`w-11/12  mx-auto text-right p-1 text-2xl border-cyan-700 rounded-md border-8 ${
              on ? "bg-blue-300" : "bg-gray-500"
            } `}
            style={{
              borderStyle: "inset",
            }}
            type="text"
            value={display}
            placeholder={!on ? "calculator" :"0"}
          />
          <h1 className="w-11/12 mb-1 text-gray-600 text-right">CI-42</h1>
          <Buttons display={String(display)} setDisplay={setDisplay}  />
        </MetallicBackgroundDiv>
      </div>
      <ColorChanger setHue={setHue} />
    </div>
  );
}

export default App;
