import {useState} from 'react';
function Toggle() {

  const[display,setDisplay] = useState(true);
  return (
    <>
      <h2>Toggle Component</h2>
      {display && <p>Hello World!</p>}
      <button onClick ={() => setDisplay(!display)}>Toggle</button>
    </>
  );
}
export default Toggle;
