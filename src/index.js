import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import {routerMiddleware} from 'react-router-redux'
import thunk from 'redux-thunk';

import AppContainer from './containers/AppContainer';
import Home from './components/AuthPages/Home';
import Login from './components/AuthPages/Login';
import Signup from './components/AuthPages/Signup';
import AddWorker from './components/Parent/AddWorker';
import AddSitter from './components/Parent/AddSitter';
import ParentProfileContainer from './containers/ParentProfileContainer';
import AddChildContainer from './containers/AddChildContainer';
import ChildrenPageContainer from './containers/ChildrenPageContainer';
import rootReducer from './reducers/reducers.js'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const history = createHistory()
const middleware = routerMiddleware(history)
const store = createStore(rootReducer, devTools, applyMiddleware(middleware, thunk))


render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={AppContainer}>
        <IndexRoute component={Home}/>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/parentprofile" component={ParentProfileContainer} />
        <Route path="/addworker" component={AddWorker} />
        <Route path="/addsitter" component={AddSitter} />
        <Route path="/children" component={ChildrenPageContainer} />
        <Route path="/addchild" component={AddChildContainer} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'))
