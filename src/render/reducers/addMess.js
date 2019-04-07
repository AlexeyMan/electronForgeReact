import _ from 'lodash';
import { data } from '../listAlarm/listAlarm';


const initialState = [];

const newRow = (i) => {
  const message = _.cloneDeep(data);
  const now = new Date();
  const MyDateString = `${(`0${now.getDate()}`).slice(-2)}:${
    (`0${now.getMonth() + 1}`).slice(-2)}:${
    now.getFullYear()}`;
  const MyTimeString = `${(`0${now.getHours()}`).slice(-2)}:${
  (`0${now.getMinutes()}`).slice(-2)}:${
  (`0${now.getSeconds()}`).slice(-2)}`;
  // message[i].actMess = true;
  message[i].date = `${MyDateString}`;
  message[i].time = `${MyTimeString}`;
  // console.log("333333333", 'data', data, 'mes', message)
  return message[i];
};

const updRow = (i, state) => {
  // console.log(state);
  const mes = [...state];
  const now = new Date();
  const MyDateString = `${(`0${now.getDate()}`).slice(-2)}:${
    (`0${now.getMonth() + 1}`).slice(-2)}:${
    now.getFullYear()}`;
  const MyTimeString = `${(`0${now.getHours()}`).slice(-2)}:${
  (`0${now.getMinutes()}`).slice(-2)}:${
  (`0${now.getSeconds()}`).slice(-2)}`;
  const sortMess = mes.sort((a, b) => b.actMess - a.actMess);
  // store.dispatch({ type: 'COUNT_ALARM', payload: sortMess.length });
  //  console.log('with Rewwwww', sortMess, 'iiiiiiii', i);

  sortMess.find((item, index) => {
    if (item.id === (i + 1) && (mes[index].actMess === true)) {
      mes[index].actMess = false;
      mes[index].date2 = `${MyDateString}`;
      mes[index].time2 = `${MyTimeString}`;
    }
  });

  // const rew = sortMess.find((item, index) => {
  //   if (item.id === (i + 1)) {
  //     console.log('with Itemmmm', item);
  //     item.actMess = false;
  //     item.date2 = `${MyDateString}`;
  //     item.time2 = `${MyTimeString}`;
  //     // return rew;
  //   }
  //   return item;
  // });

  // console.log("3222222", i, 'data', data, 'mes', mes,'state', state)
  return mes;
};
export default function tableMessage(state = initialState, action) {
  switch (action.type) {
    case 'ADD_MESS':
      const mess = newRow(action.payload);
      // console.log('data', mess, action.payload);
      return [
        mess, ...state,
      ];
    case 'UPD_MESS':
      const updMess = updRow(action.payload, state);
      // console.log('upd', updMess);
      return [...updMess];
    default:
      return state;
  }
}
