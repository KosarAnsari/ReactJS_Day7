import { useState } from 'react';
function Color() {
  const [color, setColor] = useState('blue');
  const toggleColor = () => setColor(color === 'blue' ? 'green' : 'blue');

  return (
    <>
      <h2>Change Color</h2>
      <button onClick={toggleColor} style={{ backgroundColor: color }}>
        Click here
      </button>
    </>
  );
}
export default Color;
