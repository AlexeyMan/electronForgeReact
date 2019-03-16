import store from '../store';

const rend = require('electron').ipcRenderer;

const predMess = {};
const prData = {};
const changing = (data, name) => {
  // console.log('prData', prData, 'data', data);
  if (predMess[name] !== data) { // проверяеи на изменение
    predMess[name] = data;
    // console.log('prDataNama', prData);
    return true;
  }
  // console.log('false', prData);
  return false;
};

// const addM = document.querySelectorAll('.add_mess')[0];

const message = (nId, impM, name) => {
  const a = impM;
  const b = [];
  const predVal = prData[name];
  const pr = [];

  for (let i = 0; i < 32; i += 1) { pr[i] = (predVal >> i) & 1; } // зписываем предыдущее значание
  for (let i = 0; i < 32; i += 1) { b[i] = (a >> i) & 1; } // разбиваем число на массив битов

  b.forEach((bit, i) => {
    // console.log('ok', bit, prData[i], i);
    if (bit === 1 && (pr[i] === 0 || pr[i] === undefined)) { // проверяем бит на true
      console.log('iiiiiiiiii', prData);
      store.dispatch({ type: 'ADD_MESS', payload: i + nId });
    } else if (bit === 0 && pr[i] === 1) {
      console.log('update this', pr[i]);
      store.dispatch({ type: 'UPD_MESS', payload: i + nId });
    }
  });
  prData[name] = a;
};

rend.on('SEND_DATA_REACT', (event, m) => {
  const impM = m.dataVal;
  const alaM = m.name || 'alarm_0';
  // console.log('alamessssss', alaM);
  let ok;
  switch (alaM) {
    case 'alarm_0':
      ok = changing(impM, alaM);
      if (ok) message(0, impM, alaM);
      // console.log('alaM');
      break;
      //  return nId = 0;
    case 'alarm_1':
      ok = changing(impM, alaM);
      if (ok) message(16, impM, alaM);
      // console.log('a32', ok);
      break;
    default:
      // console.log('default');
      break;
  }
});

