import React, { useReducer } from "react";

const initilalState = {
  count: 1,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + 1,
      };
      break;
    case "decrement":
      return {
        ...state,
        count: state.count - 1,
      };
    case "reset":
      return {
        ...state,
        count: state.count =0,
      };
    case "Increase By 10":
      return {
        ...state,
        count: state.count + action.payload,
      };

    default:
      break;
  }
};

const CounterReducer = () => {
  const [state, dispatch] = useReducer(reducer, initilalState);
  return (
    <div className="text-center border p-5 bg-blue-900 text-white">
      <button
        className="border px-4 py-3 mx-3 rounded-md"
        onClick={() => dispatch({ type: "increment" })}
      >
        Increment
      </button>
      <button
        className="border px-4 py-3 mx-3 rounded-md"
        onClick={() => dispatch({ type: "reset" })}
      >
        Reset
      </button>
      <button
        className="border px-4 py-3 mx-3 rounded-md"
        onClick={() => dispatch({ type: "decrement" })}
      >
        Decrement
      </button>
      <button
        className="border px-4 py-3 mx-3 rounded-md"
        onClick={() => dispatch({ type: "Increase By 10", payload: 10 })}
      >
        Increase By 10
      </button>

      <p>{state.count}</p>
    </div>
  );
};

export default CounterReducer;
