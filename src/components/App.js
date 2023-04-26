import React, { Component } from 'react';
import Timer from './Timer';
import Tree from './Tree';
 import ToDoList from './ToDoList';
import Aloha from './Aloha';
import UserList from './UserList';
import AlohaDashboard from './AlohaDashboard';
import Layout from './Layout';
import FlexContainer from './FlexContainer';

function App (props) {
 
  

    return (
      <>
      <button onClick={() => window.open('/page1.html')}>Open</button>
      <button onClick={() => window.close()}>Close</button>
      </>
    );
}

export default App;

