import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './components/App';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import AddWorker from './components/ParentProfile/AddWorker';
import AddSitter from './components/ParentProfile/AddSitter';
import ParentProfile from './components/ParentProfile/ParentProfile';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/parentprofile" component={ParentProfile} />
      <Route path="/addworker" component={AddWorker} />
      <Route path="/addsitter" component={AddSitter} />
    </Route>
  </Router>
), document.getElementById('root'))
