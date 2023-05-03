import React, {useState, useEffect} from 'react';

const MouseTracker = () => {

    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log('counterHandler was re-created');
        const counterHandler = (event) => {
            console.log('counter handler is here!')
          setCount((prevCount) => prevCount+1)  
        } 
        document.addEventListener('click', counterHandler); /// Побочний ефект 
        console.log('event listener added');
        return () => {
            console.log('clear effect');
            document.removeEventListener('click', counterHandler);
        }
    },[]);

    //useEffect();  // Не пхати всю роботу в один useEffect!



  
    return (
        <>
        
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