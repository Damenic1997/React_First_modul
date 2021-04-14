 import React, {useState}  from 'react';

function Example() {

    const [count, setCount] = useState(0);



    return (
        <div>
            <p>Cound: {count} ta</p>
        <button onClick={() => setCount(count + 1)} >Click me ${count}</button>
        </div>
    )


}

export default Example;