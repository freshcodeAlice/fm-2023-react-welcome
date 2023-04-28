import React, { Component } from 'react';
import AlohaDashboard from './AlohaDashboard';
import Timer from './Timer';
import Spinner from './Spinner';
import ToDoList from './ToDoList';
import WindowResizerPage from '../pages/WindowResizerPage';
import Redirecter from './Redirecter';
import CounterPage from '../pages/CounterPage';
import LoaderPage from '../pages/LoaderPage';
import PhonesPage from '../pages/PhonesPage';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import DataLoader from '../pages/DataLoader';
import Tree from '../components/Tree';
import UserContext from '../contexts/UserContext';
import Header from './Header';

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        user: {
          id: 1,
          firstName: 'John',
          lastName: 'Snow',
          avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/OOjs_UI_icon_userAvatar.svg/1200px-OOjs_UI_icon_userAvatar.svg.png'
        }
      }
    }

    logOut = () => {
      this.setState({
        user: null
      })
    }
    

  render() {
    return (
      <UserContext.Provider value={[this.state.user, this.logOut]}>
        <Header />
        <Tree />
      </UserContext.Provider>
    );
  }
}

export default App;



function NotFound(props) {
  return (
    <h1>Page not found</h1>
  )
}


/*
Задачка з *: зробити контекст теми і перемикати його кнопкою

*/