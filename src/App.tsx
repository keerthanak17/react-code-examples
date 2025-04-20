

import './App.css'
import {CountParent} from "./CountParent.tsx";
import {useState} from "react";

function App() {
    const [count, setCount] = useState(0)

  return (
      <>

          <h1>Count inside a component</h1>

          <CountParent/>

          <h1>Count on App component</h1>


          <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
          </button>
      </>
  )
}

export default App
