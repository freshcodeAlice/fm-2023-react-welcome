import React from "react";


class App extends React.Component {
  constructor(props){
    super(props);
  }


  render(){
    const {userAge, userName} = this.props;
    
    return (
      <section>
        {userAge < 20 ? "Hi, " : "Hello,"}{userName}
      </section>
    ) 
  
  }
}

export default App;
