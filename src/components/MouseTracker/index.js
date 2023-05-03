import React, {useState, useEffect} from 'react';

const MouseTracker = () => {
    const [coordinates, setCoordinates] = useState({
        x: 0,
        y: 0,
    });
    const [count, setCount] = useState(0);

    useEffect(()=>{
        document.addEventListener('click', mouseHandler); /// Побочний ефект 
        console.log('event listener added');
        return () => {
            console.log('clear effect');
            document.removeEventListener('click', mouseHandler);
        }
    });


    const mouseHandler = (event) => {
        setCoordinates({
            x: event.clientX,
            y: event.clientY
        })
    }

    const counterHandler = (event) => {
      setCount(count+1)
    } 
  
    return (
        <>
            <h1>x: {coordinates.x}</h1>
            <h1>y: {coordinates.y}</h1>
            <h2>count: {count}</h2>
        </>
    );
}

export default MouseTracker;


  // <div 
        // style={{width: '200px', height: '200px', backgroundColor: 'pink'}}
        // onMouseMove={mouseHandler}
        // onClick={counterHandler}>
        // </div>

/*
this.setState і setState від хука useState працюють з невеликою, але важливою різницею.

Класова:
const prevState = {
    x: 0,
    y: 0,
    coordinates: 4
}

const nextState = {
    x: 1,
    y: 1
}


this.setState({...prevState, ...nextState})

Функціональна
setState(nextState)

*/