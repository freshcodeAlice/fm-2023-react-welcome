import React from "react";
import DayPart from "./DayPart";
import Aloha from './Aloha';

class App extends React.Component {
  constructor(props){
    super(props);
  }


  render(){

    
    return (
      <Aloha userName="John"/>
    ) 
  
  }
}

export default App;

