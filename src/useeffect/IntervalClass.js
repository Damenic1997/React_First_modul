import React, {useState, useEffect} from 'react';

function Interval() {

    const [count, setCount] = useState(null);


    const tick = () => {
        setCount(count + 1);
    };


    useEffect(() => {
      console.log('change')


    }, [count]);

    return (
            <div>
                {count}
            </div>
    )
}


export default Interval;