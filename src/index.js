import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import {routerReducer, routerMiddleware} from 'react-router-redux'
import thunk from 'redux-thunk';

import AppContainer from './components/AppContainer';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import AddWorkerContainer from './components/Parent/AddWorkerContainer';
import AddSitterContainer from './components/Parent/AddSitterContainer';
import ParentProfileContainer from './components/Parent/ParentProfileContainer';
import AddChildContainer from './components/Children/AddChildContainer';
import ChildrenPageContainer from './components/Children/ChildrenPageContainer';
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
        <Route path="/addworker" component={AddWorkerContainer} />
        <Route path="/addsitter" component={AddSitterContainer} />
        <Route path="/children" component={ChildrenPageContainer} />
        <Route path="/addchild" component={AddChildContainer} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'))
