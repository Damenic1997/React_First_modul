import React, {useState, useEffect} from 'react';




export default function TitleUseEffect() {


    const [count, setCount] = useState(0);


    useEffect(() => {
        document.title = `You cliced  ${count} times`;
    })



    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Click {count} ta</button>
        </div>
    )

}
