import React from "react";
import DayPart from "./DayPart";
import Aloha from './Aloha';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      users: [{
      firstName: 'John',
      lastName: 'Doe'
    }, {
      firstName: 'Jane',
      lastName: 'Crow'
    }, {
      firstName: 'Jack',
      lastName: 'Bow'
    }]
  }
  }


  changeJohn = () => {
    const changedArray = this.state.users.map((u)=>{
      if (u.firstName === 'John') {
        return {
          firstName: 'Rick',
          lastName: u.lastName
        }
      }
      return u;
    })
    this.setState({users: changedArray})
  }

  render(){
    const {users} = this.state;
    const alohaArray = users.map(u => <Aloha user={u}/>)
    
    return (
      <>
       <h1 onClick={this.changeJohn}>Heading</h1>
       <div>{alohaArray}</div> 
      </>
    ) 
  
  }
}

export default App;

