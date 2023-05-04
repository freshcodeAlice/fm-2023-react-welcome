import ThemeContext from '../../contexts/ThemeContext';
import React, { useCallback, useState, useEffect, useContext } from 'react';



const Sandbox = (props) => {
    const [theme, setTheme] = useContext(ThemeContext);
    const [inputValue, setInput] = useState('1');

    const changeHandler = ({ target: { value } }) => {
        setInput(value)
    }
    const logValue = useCallback(() => {
        console.log(inputValue);
    }, [inputValue]);

    useEffect(() => {
        console.log('logValue re-created')
       
    }, [logValue]);

    //   console.log('logValue changed')




    return (
        <div>
            <input type="text" value={inputValue} onChange={changeHandler} />
            <button onClick={logValue}>Log value</button>
            <p>{theme}</p>
        </div>
    );
}

export default Sandbox;
