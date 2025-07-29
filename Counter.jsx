import { useState } from 'react';
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Counter Component</h1>
      <h3>Counter:{count}</h3>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <button onClick={() => setCount(count - 1)}>Decrease Count</button>
    </>
  );
}
export default Counter;
