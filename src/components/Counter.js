import React, {  useState } from "react";


export const Counter = () => {
    const [count, setCount] = useState(0)

    return (
        <div id="main">
            <span id="count">{count}</span>
            <button onClick={() => setCount(count + 1)}>increment</button>
        </div>
    )
}