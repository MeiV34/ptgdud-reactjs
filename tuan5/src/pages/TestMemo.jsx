import React, { useState, useMemo } from "react";

const TestMemo = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operation, setOperation] = useState("add");

  // useMemo để tối ưu phép tính
  const result = useMemo(() => {
    console.log("Calculating...");
    switch (operation) {
      case "add":
        return num1 + num2;
      case "subtract":
        return num1 - num2;
      case "multiply":
        return num1 * num2;
      case "divide":
        return num2 !== 0 ? num1 / num2 : "Error";
      default:
        return 0;
    }
  }, [num1, num2, operation]);

  return (
    <div className="p-4 border rounded-md">
      <h2 className="text-xl font-bold">useMemo Calculator</h2>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(Number(e.target.value))}
        className="border p-2 mx-2"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(Number(e.target.value))}
        className="border p-2 mx-2"
      />
      <select
        onChange={(e) => setOperation(e.target.value)}
        className="border p-2 mx-2"
      >
        <option value="add">+</option>
        <option value="subtract">-</option>
        <option value="multiply">×</option>
        <option value="divide">÷</option>
      </select>

      <h2 className="text-xl font-bold text-green-500">Result: {result}</h2>
    </div>
  );
};

export default TestMemo;
