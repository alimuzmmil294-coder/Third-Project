import React, { useMemo } from "react";

const Parent = () => {
  const [count, setCount] = React.useState(0);
  const [name, setName] = React.useState("Muzammil Ali");

  const increment = useMemo(() => {
    let results = count * 1;
    console.log("Hello World and Muzammil Ali!");

    return results;
  }, [count]);
  return (
    <div>
      <p>Count: {count}</p>
      <button
        className="border p-3 rounded-md"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>

      <div className="">
        <p>Result: {increment}</p>
      </div>

      <p>Name: {name}</p>
      <button
        className="border p-3 rounded-md"
        onClick={() => setName("Yousaf Ali")}
      >
        Change Name
      </button>
    </div>
  );
};

export default Parent;
