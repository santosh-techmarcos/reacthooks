import React, { useState } from "react";
import { Button } from "../ui/button";

const UseRefExample = () => {
  const [time, setTime] = useState(0);

  function handleTimerStart() {
    setInterval(() => {
      setTime(time + 1);
    }, 1000);
  }

  return (
    <div className="space-y-5">
      <h1>Problem Statement</h1>
      <h2>UseRef Example</h2>
      <p>Timer: {time}</p>

      <div className="space-x-4">
        <Button onClick={handleTimerStart}>Start</Button>
        <Button>resume</Button>
        <Button>Stop</Button>
      </div>
    </div>
  );
};

export default UseRefExample;
