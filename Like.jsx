import { useState } from 'react';
function Like() {
  const [like, setLiked] = useState(false);
  return (
    <>
      <h2>Like Button</h2>
      <button onClick={() => setLiked(!like)}>
        {like ? '\u2764\uFE0F Liked' : 'Like'}
      </button>
    </>
  );
}
export default Like;
