import { useState } from 'react';
function Log() {
  const [login, setLogin] = useState(false);
  return (
    <>
      <h2>LogIN/OUT </h2>
      <p>{login ? 'Welcome User !' : 'Please Login'}</p>
      <button onClick={() => setLogin(!login)}>
        {login ? 'Logout' : 'Login'}
      </button>
    </>
  );
}
export default Log;
