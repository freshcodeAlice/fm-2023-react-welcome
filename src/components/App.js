import React, { Component } from 'react';
import Timer from './Timer';
import Tree from './Tree';
 import ToDoList from './ToDoList';
import Aloha from './Aloha';
import UserList from './UserList';
import AlohaDashboard from './AlohaDashboard';
import Layout from './Layout';

class App extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <Layout />
    );
  }
}

export default App;

