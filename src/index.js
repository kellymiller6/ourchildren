import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import App from './components/App';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import AddWorker from './components/Parent/AddWorker';
import AddSitter from './components/Parent/AddSitter';
import ParentProfile from './components/Parent/ParentProfile';
import AddChild from './components/Children/AddChild';
import ChildrenPage from './components/Children/ChildrenPage';

const history = createHistory()
const middleware = routerMiddleware(history)
const store = createStore(rootReducer, applyMiddleware(middleware))


render((
  <Provider store={store}>
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
  </Provider>
), document.getElementById('root'))
