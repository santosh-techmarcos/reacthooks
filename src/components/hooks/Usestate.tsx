import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Usestate = () => {
  const [count, setCount] = useState(0);

  const incrementState = () => {
    setCount((prev) => prev + 1);
  };

  const decrementState = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <h1 className="text-2xl font-bold">useState Example</h1>
      <div>Current Count State: {count}</div>

      <div className="flex items-center gap-2">
        {/* useState */}
        <Input value={count.toString()} readOnly />
        <Button onClick={incrementState}>Increment</Button>
        <Button onClick={decrementState}>Decrement</Button>
      </div>
    </div>
  );
};

export default Usestate;
