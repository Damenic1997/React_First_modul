import React, {useState} from 'react';
import useCounter from "./useCounter";

function CounterOne() {
    const [count, increment, decrement, reset] = useCounter();
    return (
        <div className='border border-primary mt-5 pl-5'>
            <h1 align='center' >useCounter</h1>
            <h2 align='center'>Count = {count}</h2>
            <p align='center'>
                <button onClick={increment} >Increment</button>
                <button onClick={decrement} >Decrement</button>
                <button onClick={reset} >reset</button>
            </p>

        </div>
    )

}


export default CounterOne;