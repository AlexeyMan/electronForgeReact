import { combineReducers } from 'redux';

import addMess from './addMess';
import savedData from './savedData';
import curData from './curData';
import stationState from './stationState';

export default combineReducers({
  addMess,
  savedData,
  stationState,
  curData,
})
;
