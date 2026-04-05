import React, { useReducer } from "react";

const initialState = {
  name: "Muzammil Ali",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "abu":
      return {
        name: action.payload,
      };
    case "yasin":
      return {
        name: action.payload,
      };
    case "mubin":
      return {
        name: action.payload,
      };
    case "mudassir":
      return {
        name: action.payload,
      };
    case "reset":
      return {
       name:"Muzammil Ali"
      };

      break;

    default:
      return state;
      break;
  }
};

const Parents = () => {
  const [state, disptach] = useReducer(reducer, initialState);
  return (
    <div className="flex flex-col justify-center items-center gap-5 p-5 ">
      <h1 className="text-2xl ">Name : {state.name}</h1>
      <button
        className="border px-4 py-2 rounded-2xl "
        onClick={() => disptach({ type: "abu", payload: "Yousaf Ali" })}
      >
        Father
      </button>
      <button
        className="border px-4 py-2 rounded-2xl "
        onClick={() => disptach({ type: "yasin", payload: "Yasin Ali" })}
      >
        Elder Most Brother
      </button>
      <button
        className="border px-4 py-2 rounded-2xl "
        onClick={() => disptach({ type: "mubin", payload: "Mubin Ali" })}
      >
        Elder Brother
      </button>
      <button
        className="border px-4 py-2 rounded-2xl "
        onClick={() => disptach({ type: "mudassir", payload: "Mudassir Ali" })}
      >
        Younger Brother
      </button>
      <button
        className="border px-4 py-2 rounded-2xl "
        onClick={() => disptach({ type: "reset" })}
      >
        Younger Brother
      </button>
    </div>
  );
};

export default Parents;
