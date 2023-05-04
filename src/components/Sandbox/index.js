import ThemeContext from '../../contexts/ThemeContext';
import React, { useCallback, useState, useEffect, useContext, useMemo } from 'react';

const Sandbox = (props) => {
    const [theme, setTheme] = useContext(ThemeContext);
    const [inputValue, setInput] = useState(1);

    // const changeHandler = ({ target: { value } }) => {
    //     setInput(value)
    // }

    const changeHandler = useCallback(({ target: { value } }) => {
         setInput(Number(value))
     }, []);

    const logValue = useCallback(() => {
        console.log(inputValue);
    }, [inputValue]);


    const layoutValue = useMemo(() => computeValue(inputValue), [inputValue])

    return (
        <div>
            <input type="text" value={inputValue} onChange={changeHandler} />
            <button onClick={logValue}>Log value</button>
            <h1>{layoutValue}</h1>
        </div>
    );
}


function computeValue(value) {
    let sum = 0;
    for(let i = 0; i < 1000000000; i++ ){
        sum += i;
    }
    return value**3;
}

export default Sandbox;
