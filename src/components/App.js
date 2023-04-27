import React, { Component } from 'react';
import AlohaDashboard from './AlohaDashboard';
import Timer from './Timer';
import Spinner from './Spinner';
import ToDoList from './ToDoList';
import WindowResizer from './WindowResizer';
import Redirecter from './Redirecter';
import CounterPage from '../pages/CounterPage';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

/* Single page application */

/* В основі SPA Routing лежить ідея умовного рендеринга на основі URL */


class App extends Component {





  render() {
    return (
      <BrowserRouter>
        <nav style={{ display: 'flex', flexDirection: 'column' }}>
          <Link to='/'>Click to go home</Link>
          <Link to='/timer'>Click to go to timer</Link>
          <Link to='/spinner'>Go to spinner</Link>
          <Link to='/todo'>Go To Todo</Link>
          <Link to='/redirecter'>Go To Redirecter</Link>
          <Link to='/resizer'>Click to go to resizer</Link>
          <Link to='/counter'>Go To Counter</Link>
        </nav>


        <Routes>
          <Route index element={<AlohaDashboard />} />
          <Route path='/timer' element={<Timer />} />
          <Route path='/spinner' element={<Spinner />} />
          <Route path='/todo' element={<ToDoList />} />
          <Route path='/resizer' element={<WindowResizer />} />
          <Route path='/redirecter' element={<Redirecter />} />
          <Route path='/counter' element={<CounterPage />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>



      </BrowserRouter>
    );
  }
}

export default App;



function NotFound(props) {
  return (
    <h1>Page not found</h1>
  )
}