import React, {useState} from 'react';

const MouseTracker = () => {
    const [coordinates, setCoordinates] = useState({
        x: 0,
        y: 0,
        count: 0
    })

    const mouseHandler = (event) => {
        setCoordinates({
            ...coordinates,
            x: event.clientX,
            y: event.clientY
        })
    }

    const counterHandler = (event) => {
        setCoordinates({
            ...coordinates,
            count: coordinates.count+1
        })
    } 

    return (
        <div 
        style={{width: '200px', height: '200px', backgroundColor: 'pink'}}
        onMouseMove={mouseHandler}
        onClick={counterHandler}>
            <h1>x: {coordinates.x}</h1>
            <h1>y: {coordinates.y}</h1>
            <h2>count: {coordinates.count}</h2>
        </div>
    );
}

export default MouseTracker;


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