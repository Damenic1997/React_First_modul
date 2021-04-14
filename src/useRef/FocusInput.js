import React, {useEffect, useRef} from 'react';


function FocusInput() {
    const inputRef = useRef(null);
    console.log(inputRef.input);

    const handleClear = () => {
        inputRef.current.value = ""
    };
    const handleFocus = () => {

        inputRef.current.focus();
        inputRef.current.style.color = 'red';

    };
    return (
        <div className='pb-5'>
            <input ref={inputRef} type='text'/>
            <button onClick={handleFocus}>ok</button>
            <button onClick={handleClear}>clear</button>
        </div>
    );
}


export default FocusInput;