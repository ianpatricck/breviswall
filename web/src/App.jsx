import { useState } from "preact/hooks";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <p>Counter: {count}</p>
        <button type="button" onClick={() => setCount(count + 1)}>
          Incrementar
        </button>
      </div>
    </>
  );
}
