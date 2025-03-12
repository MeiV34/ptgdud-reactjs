import React, { useReducer } from "react";

// Khai báo reducer
const userReducer = (state, action) => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_AGE":
      return { ...state, age: action.payload };
    default:
      return state;
  }
};

const UserComponent = () => {
  const [user, dispatch] = useReducer(userReducer, { name: "Danji", age: 20 });

  return (
    <div className="p-4 border rounded-md">
      <h2 className="text-xl font-bold">User Info</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
        onClick={() => dispatch({ type: "SET_AGE", payload: user.age + 1 })}
      >
        Increase Age
      </button>
    </div>
  );
};

export default UserComponent;
