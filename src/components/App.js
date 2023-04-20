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
    }, {
      firstName: 'Rick',
      lastName: 'Bow'
    },
    {
      firstName: 'Sand',
      lastName: 'Bow'
    },
    {
      firstName: 'Band',
      lastName: 'Bow'
    }]
  }
  }

  sortUsers = () => {
    /*
    Написати метод, який відсортує масив у стейті за алфавітним порядком по іменам
    і оновлює масив у стейті

    */
    const {users} = this.state;
    const newUsersArray = [...users];
    newUsersArray.sort((a,b) => a.firstName > b.firstName ? 1 : -1);

    this.setState({
      users: newUsersArray
    }) // <-- Новий об'єкт стану!!!
  }


  render(){
    const {users} = this.state;
    const alohaArray = users.map(u => <Aloha user={u}/>)
    
    return (
      <>
       <h1 onClick={this.changeJohn}>Heading</h1>
       <button onClick={this.sortUsers}>Sort users</button>
       <div>{alohaArray}</div> 
      </>
    ) 
  
  }
}

export default App;

