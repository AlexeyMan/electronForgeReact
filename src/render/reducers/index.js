import { combineReducers } from 'redux';

import addMess from './addMess';
import savedData from './savedData';
import countMess from './countMess';
import stationState from './stationState';

export default combineReducers({
  addMess,
  savedData,
  stationState,
  countMess,
})
;
