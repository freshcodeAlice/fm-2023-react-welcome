import React, {useState} from 'react';

// let count = 0;

const Sandbox = (props) => {
    const [count, setCount] = useState(0);

    const clickHandler = () => {
        // count++;
        setCount(count => count+1); // ASYNC WORK
        console.log(count);
    }
    return (
        <div>
            {count}
            <button onClick={clickHandler}>Increment</button>
        </div>
    );
}

export default Sandbox;
