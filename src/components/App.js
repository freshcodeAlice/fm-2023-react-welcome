import React, { Component } from 'react';
import Timer from './Timer';
import Tree from './Tree';
 import ToDoList from './ToDoList';
import Aloha from './Aloha';
import UserList from './UserList';
import AlohaDashboard from './AlohaDashboard';
import Layout from './Layout';
import FlexContainer from './FlexContainer';

class App extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
     <FlexContainer fd="row" jc="space-evenly" ai="center" fw="no-wrap">
      <div>Item1</div>
      <div>Item2</div>
      <div>Item3</div>
     </FlexContainer>
    );
  }
}

export default App;

