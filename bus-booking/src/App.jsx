import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Hello my first react project </h1>
      </div>
      <div className="border-solid border-2 border-sky-500 rounded pl-0">
        <h1 className="text-3xl font-bold underline text-green-300">
          Vite + React
        </h1>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
