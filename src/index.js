import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './App';
import Home from './Home';
import Login from './components/Login';
import Signup from './components/Signup';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
    </Route>
  </Router>
), document.getElementById('root'))
