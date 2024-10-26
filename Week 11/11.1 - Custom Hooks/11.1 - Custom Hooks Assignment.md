# **Week 11 - 11.1 | Custom Hooks**

## Assignment #1 - Create `useIsOnline` Custom Hook

## Assignment #2 - Read about swr and react-query

## Assignment #3 - Is `usePrev` hook that we have made indeed correct? Try out example
https://giacomocerquone.com/blog/life-death-useprevious-hook/

<details>
    <summary>Is `usePrev` hook that we have made indeed correct? Try out example </summary>

```js
import { useRef, useState, useEffect } from "react";
import "./App.css";

export const usePrev = (value) => {
    const ref = useRef();

    // Update the ref with the current value after each render
    useEffect(() => {
        ref.current = value;
    }, [value]);

    // Return the previous value (current value of ref before it is updated)
    return ref.current;
};

function App() {
    const [count, setCount] = useState(0);
    const prevCount = usePrev(count); // Track the previous count value
    const [x, setX] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setX((x) => x + 1);
        }, 1000);
    }, []);

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Counter with usePrev Hook</h1>
            <p>Current Count: {count}</p>
            <p>Previous Count: {prevCount}</p>
            {x}
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)} style={{ marginLeft: "10px" }}>
                Decrement
            </button>
        </div>
    );
}

export default App;
```

</details>


### Better `usePrev`
Explore https://usehooks.com/