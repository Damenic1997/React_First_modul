import React, {useState} from 'react';

export default function HookCounterTwo() {

    const initial = 0;

    const [count, setCount] = useState(initial);



    const incrementFive = () => {
        for(let i=0; i<5; i++) {
            setCount(prevCount => prevCount + 2);
        }
    }




    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(initial)}>reset</button>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={incrementFive}>Increment 5</button>

        </div>
    )
}