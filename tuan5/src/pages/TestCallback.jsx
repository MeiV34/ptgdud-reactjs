import { useReducer } from "react";

const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
};

const TestCallback = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div className="p-5 border rounded-lg shadow-lg text-center">
      <h2 className="text-2xl font-bold">Counter: {state.count}</h2>
      <div className="mt-4 flex justify-center space-x-4">
        <button 
          className="px-4 py-2 bg-green-500 rounded-lg"
          onClick={() => dispatch({ type: "INCREMENT" })}
        >
          +
        </button>
        <button 
          className="px-4 py-2 bg-red-500 rounded-lg"
          onClick={() => dispatch({ type: "DECREMENT" })}
        >
          -
        </button>
        <button 
          className="px-4 py-2 bg-gray-500 rounded-lg"
          onClick={() => dispatch({ type: "RESET" })}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default TestCallback;
