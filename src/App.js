import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import BubblePage from './components/BubblePage';
import { axiosWithAuth } from './helpers/axiosWithAuth';
import { PrivateRoute } from './helpers/PrivateRoute';

import Login from './components/Login';
import './styles.scss';

function App() {
  // const logout = () => {
  //   axiosWithAuth.post('http://localhost:5000/api/logout').then((res) => {
  //     console.log('Logged out!');
  //     localStorage.removeItem('token');
  //     window.location.href = '/';
  //   });
  // };

  return (
    <Router>
      <div className='App'>
        <header>
          Color Picker Sprint Challenge
          <a data-testid='logoutButton' href='#'>
            <Link to='/login'>Login</Link>
          </a>
        </header>

        <Switch>
          <PrivateRoute exact path='/bubblepage' component={BubblePage} />;
          <Route exact path='/' component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute
//2. Build the logout button to remove the localStorage Item.
