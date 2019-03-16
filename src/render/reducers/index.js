import { combineReducers } from 'redux';

import addMess from './addMess';
// import updMess from './updMess';
import curData from './curData';

export default combineReducers({
  addMess,
  // updMess,
  curData,
})
;
