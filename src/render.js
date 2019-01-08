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
  mainWindow.webContents.send('SEND_DATA_REACT', { id, name, dataVal });
}
// function ssWind() {
//  console.log('Yessssss');
// }
// mainWindow.webContents.on('did-finish-load', () => {
//   mainWindow.webContents.send('ping', 'whoooooooh!');
// });
// ipcMain.on('synchronous-message', (event, arg) => {
//   console.log(arg); // prints "ping"
//   event.returnValue = 'pong';
// })
// ;
module.exports = {
  sendMessWind,
  channelWind,
  // ssWind,
};
