import React, {useState} from 'react';


export default function String() {
    const [fruit, setFruit] = useState('banana');

    return (
        <div>
            <h1>fruit: {fruit}</h1>
            <button onClick={() => setFruit(fruit.toUpperCase())}>O`zgartir</button>
            <button onClick={() => setFruit(fruit.toLowerCase())}>Qaytish</button>
        </div>
    )
}