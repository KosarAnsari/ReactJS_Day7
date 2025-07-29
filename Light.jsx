import {useState} from 'react';
function Light(){

  const [ isOn , setisOn] = useState(true);
  return <> 

  <h2>Turn the Light ON/OFF</h2>
  <p>The Light is {isOn ? "ON" : "OFF"}</p>
  <button onClick = {() => setisOn(!isOn)}>ON/OFF</button>
  </>

}
export default Light;
