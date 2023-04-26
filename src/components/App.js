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
      <button onClick={() => window.location.assign('https://www.wikipedia.org/')}>Assing</button> 
      <button onClick={() => window.location.reload()}>Reload</button>
      <button onClick={() => window.location.replace('https://www.wikipedia.org')}>Replace</button>



      <p>Lorem, which might be interesting <button
                                              onClick={() => {
                                                window.navigator.clipboard.writeText('Lorem, which might be interesting')
                                              }}>Click to copy</button></p>
      </>


    );
}

export default App;

