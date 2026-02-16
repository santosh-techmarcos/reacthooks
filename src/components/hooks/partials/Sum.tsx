import React from "react";

const Sum = React.memo(({ num }) => {
  // Sum of 1000 number
  function calculateSum() {
    let sum = 0;
    for (let i = 0; i < num; i++) {
      sum += i;
    }
    console.log("Sum render");
    return sum;
  }
  let total = calculateSum();
  return (
    <div>
      <h2>Total sum of {num} is: {total}</h2>
    </div>
  );
});

export default Sum;
