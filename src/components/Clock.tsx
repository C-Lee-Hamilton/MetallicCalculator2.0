import  { useEffect, useState } from "react";

function Clock(): JSX.Element {
  var currentTime = new Date();
  const [hours, setHours] = useState<number>(currentTime.getHours());
  const [min, setMin] = useState<number>(currentTime.getMinutes());


  useEffect(() => {
    const interval= setInterval(() => {
      if (min < 59) {
        setMin((prevMin: number) => prevMin + 1);
      } else {
        setMin(0);
        if (hours < 24) {
          setHours((prevHours:number) => prevHours + 1);
        } else {
          setHours(0);
        }
      }
    }, 60000);

    return () => clearInterval(interval as unknown as number);
  }, [hours,min]);

  return (
    <div className=" w-full  mx-auto flex justify-end ">
      <h1 className="text-gradient mr-2 w-32 text-right ">
        {hours > 12 ? hours - 12 : hours}:{min<=9? "0"+min : min} {hours >= 12 ? "PM" : "AM"}
      </h1>
    </div>
  );
}

export default Clock;
