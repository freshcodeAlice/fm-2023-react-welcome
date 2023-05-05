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
import ThemeContext from '../contexts/ThemeContext';
import Header from './Header';
import CONSTANSTS from '../constants';
import SignUpForm from './SignUpForm';
import FormContainer from './FormDashboard';
import FormPage from '../pages/FormPage';
import Sandbox from './Sandbox/index.js';
import MouseTracker from './MouseTracker';
import UserList from './UserList';
import SignForm from './SignForm';
const { THEMES } = CONSTANSTS;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        id: 1,
        firstName: 'John',
        lastName: 'Snow',
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/OOjs_UI_icon_userAvatar.svg/1200px-OOjs_UI_icon_userAvatar.svg.png'
      },
      theme: THEMES.LIGHT
    }
  }

  logOut = () => {
    this.setState({
      user: null
    })
  }

  changeTheme = (theme) => {
    this.setState({
      theme
    })
  }


  render() {
    const { user, theme } = this.state;
    return (
     <SignForm />

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