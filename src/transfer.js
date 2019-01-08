// В main процессе.
const { ipcMain } = require('electron');
const { stopModbus } = require('./server');
const { runModbus } = require('./server');
// const { mainWindow } = require('./index');

ipcMain.on('as-mes', (event, arg) => {
  console.log('ddd', arg); // prints "ping"
  // stopModbus();
  runModbus();
  event.sender.send('as-rep', 'pong');
});
ipcMain.on('des', (event, arg) => {
  console.log('ccc', arg); // prints "ping"
  // stopModbus();
  stopModbus();
  // event.sender.send('as-rep', 'pong');
});
// let mainWindow;
// function channelWind(mW) {
//   mainWindow = mW;
//   // sendMessWind('fffffffffffffff');
// }

// function sendMessWind(i) {
//   mainWindow.webContents.send('ping', i);
// }
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
// module.exports = {
//   sendMessWind,
//   channelWind,
//   // ssWind,
// };
// console.log(module);
// module.exports.sendMes = sendMessWind;
