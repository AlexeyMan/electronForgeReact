import { combineReducers } from 'redux';

import alarmMess from './alarmMess';
import curData from './curData';

export default combineReducers({
  alarmMess,
  curData,
})
;
