
// Functional component

/*
const funApp = (props) => {
  return (
    <h1>Hello, <span>react!</span></h1>
  );
}

console.log(<funApp />)

*/

import React from "react";


class App extends React.Component {
  
  render(){
    return (
      <section>
        Hello, class Component!
      </section>
    )
  }
}

console.log(<App />);




export default App;


/*
Компонента - це функція, яка приймає вхідні дані (пропси) і повертає реакт-елементи



*/