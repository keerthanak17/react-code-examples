import {useState} from "react";
// import {CountChildChild} from "./CountChildChild.tsx";
import {CountChildWithMemo} from "./CountChildWithMemo.tsx";

export const CountChild = () => {
    const [count, setCount] = useState(0)


    return (
        <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
            <p>
                Edit <code>src/App.tsx</code> and save to test HMR
            </p>
            {/*<CountChildChild />*/}
            <CountChildWithMemo />
        </div>
    )
}