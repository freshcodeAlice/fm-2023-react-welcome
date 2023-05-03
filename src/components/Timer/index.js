import React, { useState, useEffect} from 'react';
import {format, addSeconds} from 'date-fns';

function Timer (props) {
     const [time, setTime] = useState(new Date(0,0,0,0,0,0));
    const [isRunning, setRunning] = useState(true);

    useEffect(() => {
        if(isRunning) {
            const id = setTimeout(() => {
                setTime(time => addSeconds(time, 1))
            }, 1000);
            return () =>{
                clearTimeout(id);
            }
        }
    })

      

   const clear = () => {
    setTime(new Date(0,0,0,0,0,0))
   } 
   
    const toggleTimer = () => {
        setRunning(!isRunning)
    }
 
        return (
            <>
            <h1>
                {format(time, 'HH:mm:ss')}
            </h1>
                 {/* <button onClick={start}>start</button>
                <button onClick={stop}>stop </button> */}
                <button onClick={toggleTimer}>{isRunning ? "Stop" : "Start"}</button>
                <button onClick={clear}>clear</button> 
            </>
        );
    }


export default Timer;


/*
Реалізувати метод clear, який скидає секундомір до 0

*/