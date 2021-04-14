import React, {useState, useEffect} from "react"

export const Islom = () => {

    const [count, setCount] = useState(0);
    const [text, setText] = useState('');
    function move(event){
        setText(event.target.value)
    }
    useEffect(()=>{
            document.title = text
    },[])
    return (
        <div>
            <div>{count}</div>
            <input type="text" onChange={move}/>
            <button onClick={() => setCount(prev => prev + 1)}>count+</button>
            <button onClick={() => setCount(prev => prev - 1)}>count-</button>
        </div>
    )
}