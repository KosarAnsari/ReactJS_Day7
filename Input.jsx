import { useState } from 'react';
function Input() {
  const [text, setText] = useState('');
  return (
    <>
      <h2>Input Handler</h2>
      <input onChange={(e) => setText(e.target.value)} />
      <p>You Typed : {text}</p>
    </>
  );
}
export default Input;
