/* eslint-disable no-undef */
/* eslint-disable no-bitwise */
const rend = require('electron').ipcRenderer;
const alarmMess = require('./config/alarmMess');

console.log(alarmMess);
rend.on('SEND_DATA_REACT', (event, message) => {
  if (message.name === 'viewFT') { // обработка байтов
    const a = message.dataVal;
    const b = [];
    for (let i = 0; i < 32; i += 1) { b[i] = (a >> i) & 1; } // разбиваем число на массив битов
    // const obj = document.getElementById('tableMess');
    // obj.addRow({});
    if (b[2]) {
      const obj = document.getElementById('tableMess');
      console.log(obj);
      // obj.addRow({});
      // obj.style.display = 'contents';
    } else { 
      // obj.style.display = 'block';
     }
    // console.log(b[0], b[1]);
  }
  const but = document.getElementById(message.name);
  if (but) { but.innerHTML = message.dataVal; }
  console.log(message.id); // Prints 'whoooooooh!'
});
// const obj = document.getElementById('tableMess');
// obj.addRow({});

//   var base2 = (123).toString(2); // делаем массив бит из числа
//   var sss = base2[0];
//   console.log(sss);
// import { createStore } from 'redux';

// function tableMess(state = [], action){
//   if (action.type === 'ADD_TR'){
//     return [
//       ...state,
//       action.payload,
//     ];
//   }
//   return state;
// }

// const store = createStore(tableMess);

// store.subscribe(() => {
//   console.log(store.getState());
// });

// store.dispatch({ type: 'ADD_TR', payload: 'Smells like spirit' });
// store.dispatch({ type: 'ADD_TR', payload: 'Smelpirit' });