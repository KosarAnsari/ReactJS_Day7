import { useState } from 'react';
function Image() {
  const [showImg, setImg] = useState(true);
  return (
    <>
      <h2>Image Toggle</h2>
      <button onClick = {() => setImg(!showImg)}>{showImg?"Hide" : "Show"}</button>
      {showImg && (<img src = "https://via.placeholder.com/150" alt ="placeholder"/>)}
    </>
  );
}
export default Image;
