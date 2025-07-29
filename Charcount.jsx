import { useState } from 'react';
function Charcount() {
  const [text, setText] = useState('');
  return (
    <>
      <h2>Count the Characters</h2>
      <textarea
        onChange={(e) => setText(e.target.value)}
        placeholder="Type Something...."
      ></textarea>
      <p>Characters : {text.length}</p>
    </>
  );
}
export default Charcount;
