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
          <Link to='/loader'>Go To Loader</Link>
          <Link to='/phones'>Go To Phones</Link>
          <Link to='/dataloader'>Go To dataloader</Link>
        </nav>


        <Routes>
          <Route index element={<AlohaDashboard />} />
          <Route path='/timer' element={<Timer />} />
          <Route path='/spinner' element={<Spinner />} />
          <Route path='/todo' element={<ToDoList />} />
          <Route path='/resizer' element={<WindowResizerPage />} />
          <Route path='/redirecter' element={<Redirecter />} />
          <Route path='/counter' element={<CounterPage />} />
          <Route path='/loader' element={<LoaderPage />} />
          <Route path='/phones' element={<PhonesPage />} />
          <Route path='/dataloader' element={<DataLoader />} />
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