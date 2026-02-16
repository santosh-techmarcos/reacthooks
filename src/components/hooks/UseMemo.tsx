import { useMemo, useState } from "react";
import { Button } from "../ui/button";
import Sum from "./partials/Sum";

const UseMemoExample = () => {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(100000);
  const incrementState = () => {
    setCount((prev) => prev + 1);
  };

  const decrementState = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };

  // function calculatePrime() {
  //   let total = 0;

  //   for (let i = 2; i <= num; i++) {
  //     let isPrime = true;

  //     for (let j = 2; j < i; j++) {
  //       if (i % j === 0) {
  //         isPrime = false;
  //         break;
  //       }
  //     }

  //     if (isPrime) {
  //       total++;
  //     }
  //   }

  //   return total;
  // }

  // const prime = calculatePrime();

  console.log("parent render");

  return (
    <div className="flex flex-col items-center space-y-10">
      <h1 className="text-2xl font-bold">UseMemo Example</h1>
      <div className="space-y-3">
        <div>Current Count State: {count}</div>
        <div className="flex items-center gap-2">
          <Button onClick={incrementState}>Increment</Button>
          <Button onClick={decrementState}>Decrement</Button>
        </div>
      </div>

      <div className="space-y-3">
        <Sum num={num} />
        <Button onClick={() => setNum((prev) => prev + 100)}>
          Increase by 100
        </Button>
      </div>

      <div className="space-y-3">
        {/* <div>
          Prime number of {num}: {prime}
        </div> */}
      </div>
    </div>
  );
};

export default UseMemoExample;
