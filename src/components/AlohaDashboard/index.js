import React from "react";
import Aloha from '../Aloha';

class AlohaDashboard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      users: [{
        id: 0,
      firstName: 'John',
      lastName: 'Doe'
    }, {
      id: 1,
      firstName: 'Jane',
      lastName: 'Crow'
    }, {
      id: 2,
      firstName: 'Jack',
      lastName: 'Bow'
    }, {
      id: 3, 
      firstName: 'Rick',
      lastName: 'Bow'
    },
    {
      id: 4,
      firstName: 'Sand',
      lastName: 'Bow'
    },
    {
      id: 5,
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


  deleteHandler = (id) => {
    const {users} = this.state;
    const filtered = users.filter((u) => u.id !== id);
    this.setState({
      users: filtered
    })
  }


  render(){
    const {users} = this.state;
    const alohaArray = users.map(u => <Aloha user={u} key={u.id} deleteCallback={this.deleteHandler}/>)
    
    return (
      <>
       <h1 onClick={this.changeJohn}>Heading</h1>
       <button onClick={this.sortUsers}>Sort users</button>
       <ul>{alohaArray}</ul> 
      </>
    ) 
  
  }
}

export default AlohaDashboard;

