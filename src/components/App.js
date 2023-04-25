import React, { Component } from 'react';
import Timer from './Timer';
import Tree from './Tree';
 import ToDoList from './ToDoList';
import Aloha from './Aloha';
import UserList from './UserList';
import AlohaDashboard from './AlohaDashboard';

class App extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <List>
        <li super-prop="value">First Item</li>
        <li>Second Item</li>
        </List>
    );
  }
}

export default App;


function List (props) {
  console.log(props);
  return (
    <article> 
      <h1>List</h1>
      <ul>
       {props.children}
      </ul>
    </article>
  )
}