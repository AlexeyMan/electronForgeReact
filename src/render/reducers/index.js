import { combineReducers } from 'redux';

import addMess from './addMess';
import savedData from './savedData';
import curData from './curData';

export default combineReducers({
  addMess,
  savedData,
  curData,
})
;
