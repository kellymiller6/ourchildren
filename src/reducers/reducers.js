import { combineReducers } from 'redux';

import sitterReducer from './sitterReducer';
import workerReducer from './workerReducer';
import childReducer from './childReducer';


const rootReducer = combineReducers({
  sitterReducer,
  workerReducer,
  childReducer
});

export default rootReducer;
