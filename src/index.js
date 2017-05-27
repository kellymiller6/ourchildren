import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './components/App';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import AddWorker from './components/Parent/AddWorker';
import AddSitter from './components/Parent/AddSitter';
import ParentProfile from './components/Parent/ParentProfile';
import AddChild from './components/Children/AddChild';
import ChildrenPage from './components/Children/ChildrenPage';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/parentprofile" component={ParentProfile} />
      <Route path="/addworker" component={AddWorker} />
      <Route path="/addsitter" component={AddSitter} />
      <Route path="/children" component={ChildrenPage} />
      <Route path="/addchild" component={AddChild} />
    </Route>
  </Router>
), document.getElementById('root'))
