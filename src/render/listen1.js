import Store from '../store';
import { upDate, addRow, valTable } from './TableMess1';

const rend = require('electron').ipcRenderer;

const data = [
  { id: 0, nomer: 1, actMess: true, date: '23.02.2030', time: '10.23.45', date2: '', time2: '', name: 'Oli Bob', age: '12', col: 'red', dob: '', rating: 4.5, passed: true },
  { id: 0, nomer: 2, actMess: true, date: '23.02.2040', time: '10.23.45', date2: '23.02.2019', time2: '', name: 'Mary May', age: '1', col: 'blue', dob: '14/05/1982', rating: 2.5, passed: true },
  { id: 0, nomer: 3, actMess: true, date: '23.02.2019', time: '10.23.45', date2: '23.02.2019', time2: '', name: 'Christine Lobowski', age: '42', col: 'green', dob: '22/05/1982' },
  { id: 0, nomer: 4, actMess: true, name: 'Brendon Philips', age: '125', date2: '23.02.2019', time2: '', col: 'orange', dob: '01/08/1980' },
  { id: 0, nomer: 5, actMess: true, date: '23.02.2019', time: '10.23.45', date2: '23.02.2019', time2: '', name: 'Авария 1', kvit: false, active: false },
  { id: 0, nomer: 6, actMess: true, date: '23.02.2019', time: '10.23.45', date2: '23.02.2019', time2: '', name: 'Авария 1', kvit: false, active: false },
  { id: 0, nomer: 7, actMess: true, date: '23.02.2019', time: '10.23.45', date2: '23.02.2019', time2: '', name: 'Авария 1', kvit: false, active: false },
  { id: 0, nomer: 8, actMess: true, date: '23.02.2019', time: '10.23.45', date2: '23.02.2019', time2: '', name: 'Авария 1', kvit: false, active: false },
  { id: 0, nomer: 9, actMess: true, date: '23.02.2019', time: '10.23.45', date2: '23.02.2019', time2: '', name: 'Авария 1', kvit: false, active: false },
  { id: 0, nomer: 10, actMess: true, date: '23.02.2019', time: '10.23.45', date2: '23.02.2019', time2: '', name: 'Авария 1', kvit: false, active: false },
  { id: 0, nomer: 11, actMess: true, date: '23.02.2019', time: '10.23.45', name: 'Авария 1', kvit: false, active: false },
  { id: 0, nomer: 12, actMess: true, date: '23.02.2019', time: '10.23.45', name: 'Авария 1', kvit: false, active: false },
  { id: 0, nomer: 13, actMess: true, date: '23.02.2019', time: '10.23.45', name: 'Авария 1', kvit: false, active: false },
  { id: 0, nomer: 14, actMess: true, date: '23.02.2019', time: '10.23.45', name: 'Авария 1', kvit: false, active: false },
  { id: 0, nomer: 15, actMess: true, date: '23.02.2019', time: '10.23.45', name: 'Авария 1', kvit: false, active: false },
  // { id: 1, actMess: true, date: '23.02.2019', time: '10.23.45', name: 'Oli Bob', passed: true },
  // { id: 2, actMess: true, date: '23.02.2019', time: '10.23.45', name: 'Mary May', age: '1', col: 'blue', dob: '14/05/1982', rating: 2.5, passed: true },
  // { id: 3, actMess: true, date: '23.02.2019', time: '10.23.45', name: 'Christine Lobowski', age: '42', col: 'green', dob: '22/05/1982' },
  // { id: 4, actMess: true, name: 'Brendon Philips', age: '125', col: 'orange', dob: '01/08/1980' },
  // { id: 5, actMess: true, date: '23.02.2019', time: '10.23.45', name: 'Авария 1', kvit: false, active: false },
  // { id: 6, actMess: true, date: '23.02.2019', time: '10.23.45', name: 'Авария 1', kvit: false, active: false },
  // { id: 7, actMess: true, date: '23.02.2019', time: '10.23.45', name: 'Авария 1', kvit: false, active: false },
  // { id: 8, actMess: true, date: '23.02.2019', time: '10.23.45', name: 'Авария 1', kvit: false, active: false },
  // { id: 9, actMess: true, date: '23.02.2019', time: '10.23.45', name: 'Авария 1', kvit: false, active: false },
  // { id: 10, actMess: true, date: '23.02.2019', time: '10.23.45', name: 'Авария 1', kvit: false, active: false },
  // { id: 11, actMess: true, date: '23.02.2019', time: '10.23.45', name: 'Авария 1', kvit: false, active: false },
  // { id: 12, actMess: true, date: '23.02.2019', time: '10.23.45', name: 'Авария 1', kvit: false, active: false },
  // { id: 13, actMess: true, date: '23.02.2019', time: '10.23.45', name: 'Авария 1', kvit: false, active: false },
  // { id: 14, actMess: true, date: '23.02.2019', time: '10.23.45', name: 'Авария 1', kvit: false, active: false },
  // { id: 15, actMess: true, date: '23.02.2019', time: '10.23.45', name: 'Авария 1', kvit: false, active: false },
];
let predMess = 0;
let prData = [];

const changing = (a) => {
  if (predMess !== a) { // проверяеи на изменение
    predMess = a;
    
    // console.log('3data 1', predMess, 'data 2', a);
    return true;
  }
  predMess = a;
  for (let i = 0; i < 32; i += 1) { prData[i] = (a >> i) & 1; } // разбиваем число на массив битов
    // console.log('3data 2', predMess, 'data 2', a);
  return false;
};
const newRow = (i) => {
  const now = new Date();
  const MyDateString = (`0${now.getDate()}`).slice(-2) + '/' +
    (`0${now.getMonth()}${1}`).slice(-2) + '/'
   + now.getFullYear();
  const MyTimeString = (`0${now.getHours()}`).slice(-2) + ':' +
  (`0${now.getMinutes()}`).slice(-2) + ':' +
  (`0${now.getSeconds()}`).slice(-2);
  data[i].actMess = true;
  data[i].date = `${MyDateString}`;
  data[i].time = `${MyTimeString}`;
  return data[i];
};

rend.on('SEND_DATA_REACT', (event, message) => {
  const a = message.dataVal;
  const b = [];
  let nId = 1;
  // const store = valTable(); // Store.getState();
  // const find = i => store.alarmMess.find(item => item.id === i + 1);
  for (let i = 0; i < 32; i += 1) { b[i] = (a >> i) & 1; } // разбиваем число на массив битов
  if (message.name === 'alarm_0') { // обработка байтов
    nId = 0;
    const ok = changing(a);
    if (ok) {
      b.forEach((bit, i) => {
        // prData[i]
        // console.log('find', i, prData[i], bit);
        // const val = store.find(item => item.nomer === i + 1); // ищем объект по ID
        if (bit === 1 && prData[i] === 0) { // проверяем бит на true
          // const newR = newRow(i);
          addRow(i + nId);
        } else if (bit === 0 && prData[i] === 1) {
          upDate(i + nId + 1);
        }

          // if (val === undefined) { // проверяем существует нет
          //   const newR = newRow(i);
          //   addRow(newR);
          //  console.log('newR', newR);
          // } else if (val.actMess === false) {
          //   const newR = newRow(i);
          //   // newR.actMess = true;
          //   addRow(newR);
          //   // console.log('1111115555551111111', data[i], 'val', val);

          // }
        // } else {
        //   // const val = find(i);
          
        //   if (val !== undefined) {
        //     // console.log('111111577751111111', data[i], 'val', val);
        //     if (val.actMess === true) {
        //       // console.log('111111577751111111', data[i], 'val', val);
        //       upDate(val);
        //       // data[i].actMess = false;
        //       // Store.dispatch({ type: 'ACT_MESS', payload: { actMess: false, id: i + 1 } });
        //       // const aaa = Store.getState();
        //       console.log('actmesssage', data[i], 'val', val);
        //         // onData.table.updateOrAddData([{ id: i + 1, actMess: false, date: '23.02.2019', time: '10.23.45', name: 'qqqweeerr2232334' }]);
        //     }
        //   }
        // }
      });
      // upDate();
      console.log('data 1', ok, 'data 2');
    }
  }
});

