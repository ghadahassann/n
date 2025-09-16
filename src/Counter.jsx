import { useState } from 'react';

export default function Counter() {
  const [n, setN] = useState(0);
  return (
    <div>
      <p aria-label="value">Count: {n}</p>
      <button onClick={() => setN(n + 1)}>Increment</button>
    </div>
  );
}
