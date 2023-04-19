import React from "react";
import DayPart from "./DayPart";

class App extends React.Component {
  constructor(props){
    super(props);
  }


  render(){
    const {userAge, userName} = this.props;
    
    return (
      <section>
        <DayPart hours={10} />, {userName}
      </section>
    ) 
  
  }
}

export default App;

