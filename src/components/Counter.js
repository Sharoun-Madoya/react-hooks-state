import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    // // console.log(`before setState: ${count}`);
    setCount((currentCount) => currentCount + 1);
    // setCount(count + 1);

    // // console.log(`after setstate: ${count}`);
  }
  return <div onClick={increment}>I have been clicked {count} times</div>;

}

export default Counter;
