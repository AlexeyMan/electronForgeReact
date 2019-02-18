// В renderer процессе (web страница).
// const { ipcRenderer } = require('electron');

// const errButtom = document.getElementById('BTerror');

// errButtom.addEventListener('click', () => {
//   // ipcRenderer.send('as-mes', 'ping');
//   alert('rytyuyuuuuiuiiui');
// });

// console.log(ipcRenderer.sendSync('synchronous-message', 'ping')); // prints "pong"

// ipcRenderer.on('asynchronous-reply', (event, arg) => {
//   console.log(arg); // prints "pong"
// });
// ipcRenderer.send('asynchronous-message', 'ping');
let mainWindow;
function channelWind(mW) {
  mainWindow = mW;
  // sendMessWind('fffffffffffffff');
}

function sendMessWind(id, name, dataVal) {
//   var base2 = (123).toString(2); // делаем массив бит из числа
//   var sss = base2[0];
//   console.log(sss);
//   var a = 22;
//   var b = [];

// for (var i = 0; i < 32; i++)
//   b[i] = (a >> i) & 1;

//   console.log(b);
  mainWindow.webContents.send('SEND_DATA_REACT', { id, name, dataVal });
}

module.exports = {
  sendMessWind,
  channelWind,
  // ssWind,
};
