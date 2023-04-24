import React, { Component } from 'react';
import Timer from './Timer';
import Tree from './Tree';
 import ToDoList from './ToDoList';
import Aloha from './Aloha';
import UserList from './UserList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRendering: true
    }
  }
  
  clickhandler = () => {
    this.setState({
      isRendering: false
    })
  }

  render() {
    const {isRendering} = this.state; 
    return (
      <UserList />

    );
  }
}

export default App;
