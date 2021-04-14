import React, {useReducer} from 'react';


const initialState = {
    first: 0
};
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {first: state.first + 1};

        case 'decrement':
            return {first: state.first - 1};

        case 'reset':
            return initialState;

        default:
            return state;

    }
};

function CounterTwo() {
    const [count, dispatch] = useReducer(reducer, initialState);


    return (
        <div>
            <div>Count - {count.first}</div>
            <button onClick={() => dispatch({type:'increment'})} >Increment</button>
            <button onClick={() => dispatch({type:'decrement'})} >decrement</button>
            <button onClick={() => dispatch({type:'reset'})} >reset</button>
        </div>
    )

}


export default CounterTwo;