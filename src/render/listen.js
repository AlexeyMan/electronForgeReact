import Store from '../store';
import { upDate, addRow, valTable } from './TableMess';

const rend = require('electron').ipcRenderer;

const data = [
  { id: 1, actMess: true, date: '23.02.2019', time: '10.23.45', name: 'Oli Bob', passed: true },
  { id: 2, actMess: true, date: '23.02.2019', time: '10.23.45', name: 'Mary May', age: '1', col: 'blue', dob: '14/05/1982', rating: 2.5, passed: true },
  { id: 3, actMess: true, date: '23.02.2019', time: '10.23.45', name: 'Christine Lobowski', age: '42', col: 'green', dob: '22/05/1982' },
  { id: 4, actMess: true, name: 'Brendon Philips', age: '125', col: 'orange', dob: '01/08/1980' },
  { id: 5, actMess: true, date: '23.02.2019', time: '10.23.45', name: 'Авария 1', kvit: false, active: false },
  { id: 6, actMess: true, date: '23.02.2019', time: '10.23.45', name: 'Авария 1', kvit: false, active: false },
  { id: 7, actMess: true, date: '23.02.2019', time: '10.23.45', name: 'Авария 1', kvit: false, active: false },
  { id: 8, actMess: true, date: '23.02.2019', time: '10.23.45', name: 'Авария 1', kvit: false, active: false },
  { id: 9, actMess: true, date: '23.02.2019', time: '10.23.45', name: 'Авария 1', kvit: false, active: false },
  { id: 10, actMess: true, date: '23.02.2019', time: '10.23.45', name: 'Авария 1', kvit: false, active: false },
  { id: 11, actMess: true, date: '23.02.2019', time: '10.23.45', name: 'Авария 1', kvit: false, active: false },
  { id: 12, actMess: true, date: '23.02.2019', time: '10.23.45', name: 'Авария 1', kvit: false, active: false },
  { id: 13, actMess: true, date: '23.02.2019', time: '10.23.45', name: 'Авария 1', kvit: false, active: false },
  { id: 14, actMess: true, date: '23.02.2019', time: '10.23.45', name: 'Авария 1', kvit: false, active: false },
  { id: 15, actMess: true, date: '23.02.2019', time: '10.23.45', name: 'Авария 1', kvit: false, active: false },
];
let predMess = 0;
const changing = (a) => {
  if (predMess !== a) { // проверяеи на изменение
    predMess = a;
    // console.log('3data 1', predMess, 'data 2', a);
    return true;
  }
  predMess = a;
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
  data[i].date = `${MyDateString}`;
  data[i].time = `${MyTimeString}`;
  return data[i];
};

rend.on('SEND_DATA_REACT', (event, message) => {
  const a = message.dataVal;
  const b = [];
  const store = Store.getState(); //valTable(); // Store.getState();
  // const find = i => store.alarmMess.find(item => item.id === i + 1);
  for (let i = 0; i < 32; i += 1) { b[i] = (a >> i) & 1; } // разбиваем число на массив битов
  if (message.name === 'alarm_0') { // обработка байтов
    const ok = changing(a);
    if (ok) {
      b.forEach((bit, i) => {
        // console.log('find', find, store);
        const val = store.alarmMess.find(item => item.id === i + 1); // ищем объект по ID
        if (bit === 1) { // проверяем бит на true
          if (val === undefined) { // проверяем существует нет
            // { id: 1, actMess: true, date: '23.02.2019', time: '10.23.45', name: 'Oli Bob', passed: true },
            // data[i].actMess = true;
            // const now = new Date();
            // const MyDateString = (`0${now.getDate()}`).slice(-2) + '/' +
            //   (`0${now.getMonth()}${1}`).slice(-2) + '/'
            //  + now.getFullYear();
            // const MyTimeString = (`0${now.getHours()}`).slice(-2) + ':' +
            // (`0${now.getMinutes()}`).slice(-2) + ':' +
            // (`0${now.getSeconds()}`).slice(-2);
            // data[i].date = `${MyDateString}`;
            // data[i].time = `${MyTimeString}`;
            const newR = newRow(i);
            addRow(newR);
            Store.dispatch({ type: 'ADD_MESS', payload: newR });
            // console.log('1111111111111111111', "val", val);
           console.log('add_mess', Store.getState());
          } else if (val.actMess === false) {
            const newR = newRow(i);
            // newR.actMess = true;
            // addRow(newR);
            Store.dispatch({ type: 'ADD_MESS', payload: newR });
            console.log('1111115555551111111', Store.getState());
            newR.actMess = true;
            // data[i].actMess = true;
            // console.log('1116666666666666666666666111', 'val', val);
            // data[i].actMess = true;
            // Store.dispatch({ type: 'ACT_MESS', payload: { actMess: true, id: i + 1 } });
            // Store.dispatch({ type: 'ADD_MESS', payload: data[i] });
            // addRow(data[i]);
            // Store.dispatch({ type: 'ACT_MESS', payload: { actMess: true, id: i + 1 } });
            // data[i].actMess = false;


            // data[i].actMess = true;
            // console.log('1111115555551111111', data[i], 'val', val);
            // Store.dispatch({ type: 'ACT_MESS', payload: { actMess: true, id: i + 1 } });
          }
        } else {
          // const val = find(i);
          
          if (val !== undefined) {
            // console.log('111111577751111111', data[i], 'val', val);
            if (val.actMess === true) {
              // console.log('111111577751111111', data[i], 'val', val);
              // upDate(val);
              data[i].actMess = false;
              Store.dispatch({ type: 'ACT_MESS', payload: { actMess: false, id: i + 1 } });
              const aaa = Store.getState();
              console.log('actmesssage', data[i], 'val', val, 'STORE', aaa);
                // onData.table.updateOrAddData([{ id: i + 1, actMess: false, date: '23.02.2019', time: '10.23.45', name: 'qqqweeerr2232334' }]);
            }
          }
        }
      });
      // upDate();
      console.log('data 1', ok, 'data 2');
    }
  }
});
    // }
    // // let predMess = 1;
    // // let predMess = 0;
    // // console.log('1data 1', predMess, 'data 2', a);
    // // if (predMess !== a) { // проверяеи на изменение
    // //   console.log('2data 1', predMess, 'data 2', a);
    // //   predMess = a;
    // //   console.log('3data 1', predMess, 'data 2', a);
    // b.forEach((bit, i) => {
    //   if (bit === 1) { // проверяем бит на true
    //     const val = find(i); // ищем объект по ID
    //     if (val === undefined) { // проверяем существует нет
    //         Store.dispatch({ type: 'ADD_MESS', payload: data[i] });
    //         console.log('1111111111111111111');
    //         console.log('add_mess', data[i]);
    //       } else if (val.actMess === false) {
    //         Store.dispatch({ type: 'ACT_MESS', payload: { actMess: true, id: i + 1 } });
    //       }
    //   } else {
    //     const val = find(i);
    //     if (val !== undefined) {
    //         if (val.actMess === true) {
    //           Store.dispatch({ type: 'ACT_MESS', payload: { actMess: false, id: i + 1 } });
    //           // onData.table.updateOrAddData([{ id: i + 1, actMess: false, date: '23.02.2019', time: '10.23.45', name: 'qqqweeerr2232334' }]);
            // }
//           }
//       }
//     });
//       // upDate();
//     console.log('data 1', predMess, 'data 2', a);
//       // onData.table.updateOrAddData(store.alarmMess);
//     // }
//   }
// });
