import React from 'react';

const InputComp = (props) => {

    return (
        <input onChange={props.handleFunc} placeholder='Text kiriting...' />
    )
}


export default InputComp;