import React, { useReducer } from 'react';

const reducer = (state = {count: 0}, action) => {
    switch (action.type) {
        case "+":
            return { ...state, count: state.count + 1 };
        case "-":
            return { ...state, count: state.count - 1 };
        default:
            return state;
    }
};

const TestReducer = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    function handleClickAddition(){
        dispatch({type: "+"})
    }

    function handleClickMinus(){
        dispatch({type: "-"})
    }

    return (
        <>
            <h2>Counter: {state.count}</h2>
            <br></br>
            <button onClick={handleClickAddition}>Addition</button>
            <br></br>
            <button onClick={handleClickMinus}>Minus</button>
        </>
    );
};

export default TestReducer;
