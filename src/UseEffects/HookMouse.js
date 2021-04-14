import React, {useState, useEffect} from 'react';


function HookMouse() {


    const [x, setX] = useState(0);
    const [y, setY] = useState(0);


    const logMouse = (e) => {
        console.log('Mouse event');


        setX(e.clientX);
        setY(e.clientY);
    } 



    useEffect(() => {
        console.log('UseEffect called');

        window.addEventListener('mousemove', logMouse)
    }, [])

    return (
        <div>

            Hooks X -{x}, Y - {y}

        </div>
    )
}


export default HookMouse;