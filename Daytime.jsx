import { useState } from 'react';
function Daytime() {
  const [time, setTime] = useState('Morning');
  return (
    <>
      <h2>Good {time}</h2>
      <button onClick={() => setTime('Morning')}>Morning</button>
      <button onClick={() => setTime('AfterNoon')}>AfterNoon</button>
      <button onClick={() => setTime('Evening')}>Evening</button>
    </>
  );
}
export default Daytime;
