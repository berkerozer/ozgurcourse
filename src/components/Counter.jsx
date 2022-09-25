import React, { useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState(0);

  return (
    <div className="flex flex-col space-y-4">
      <h1>Counter</h1>
      <div className=" text-2xl font-semibold">{number}</div>
      <div className="flex flex-row space-x-4">
        <button
          className="bg-slate-400 p-4"
          onClick={() => {
            setNumber(number - 1);
          }}
        >
          -
        </button>
        <button
          className="bg-slate-400 p-4"
          onClick={() => {
            setNumber(number + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
