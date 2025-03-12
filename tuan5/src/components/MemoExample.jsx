import React, { useState } from "react";

// Component tính toán, chỉ re-render khi `number` thay đổi
const Calculation = React.memo(({ number }) => {
  console.log("Calculation re-render");
  return <h2 className="text-xl font-bold text-green-500">Result: {number}</h2>;
});

const MemoExample = () => {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(0);

  return (
    <div className="p-4">
      <h2 className="text-xl">React.memo Example</h2>
      <Calculation number={count} />
      <button
        className="bg-blue-500 text-white px-4 py-2 m-2"
        onClick={() => setCount(count + 1)}
      >
        Increase Count
      </button>
      <button
        className="bg-gray-500 text-white px-4 py-2"
        onClick={() => setOther(other + 1)}
      >
        Change Other State
      </button>
    </div>
  );
};

export default MemoExample;
