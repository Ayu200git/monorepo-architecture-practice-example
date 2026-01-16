import React, { useState } from "react";
import { sum } from "@repo/utils";

function Sum() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState(null);

  const handleAdd = () => {
    setResult(sum(a , b));
  };

  return (
    <div>
      <h2>Add Numbers</h2>
      <input type="number" value={a} onChange={e => setA(e.target.value)} />
      <input type="number" value={b} onChange={e => setB(e.target.value)} />
      <button onClick={handleAdd}>Add</button>
      {result !== null && <h3>Result: {result}</h3>}
    </div>
  );
}

export default Sum;


 