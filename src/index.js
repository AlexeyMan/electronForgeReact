import { app, BrowserWindow } from 'electron';
// import installExtension, { REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } from 'electron-devtools-installer';
import { enableLiveReload } from 'electron-compile';
import './server/transfer';
import './server/server';
import { channelWind } from './server/render';


// import { con } from './config';

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

const isDevMode = process.execPath.match(/[\\/]electron/);

// const fs = require('fs');
// console.log(con.Device);
// const file = `${__dirname}/config.json`; // './src/config.json';
// fs.readFile(file, 'utf8', function (err, data) {
//   if (data) return console.log(data);
//   if (err) return console.log(err);
//   // data is the contents of the text file we just read
// });

if (isDevMode) enableLiveReload({ strategy: 'react-hmr' });

const createWindow = async () => {
  // let win = new BrowserWindow({
  // width: 200, height: 300, frame: true, parent: mainWindow, modal: true, show: false });
  // win.on('closed', () => {
  //   win = null;
  // });
  // win.once('ready-to-show', () => {
  //   win.show();
  // });

  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  });

  // and load the index.html of the app.
  mainWindow.loadURL(`file://${__dirname}/index.html`);
  // win.loadURL(`file://${__dirname}/menu.html`);

  // Open the DevTools.
  // if (isDevMode) {
  //   await installExtension(REDUX_DEVTOOLS);
  //   await installExtension(REACT_DEVELOPER_TOOLS);
  //   mainWindow.webContents.openDevTools();
  // }

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
  createWindow();
  mainWindow.webContents.on('did-finish-load', () => {
    channelWind(mainWindow);
    // sendMessWind('www');
    // mainWindow.webContents.send('ping', 'whoooooooh!');
  });
});

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});


const { Menu } = require('electron');

const template = [
  {
    label: 'Edit',
    submenu: [
      { label: 'Привет',
        role: 'undo' },
      { role: 'назад' },
      { type: 'separator' },
      { role: 'cut' },
      { role: 'copy' },
      { role: 'paste' },
      { role: 'pasteandmatchstyle' },
      { role: 'delete' },
      { role: 'selectall' },
    ],
  },
  {
    label: 'View',
    submenu: [
      { role: 'reload' },
      { role: 'forcereload' },
      { role: 'toggledevtools' },
      { type: 'separator' },
      { role: 'resetzoom' },
      { role: 'zoomin' },
      { role: 'zoomout' },
      { type: 'separator' },
      { role: 'togglefullscreen' },
    ],
  },
  {
    role: 'window',
    submenu: [
      { role: 'minimize' },
      { role: 'close' },
    ],
  },
  {
    role: 'help',
    submenu: [
      {
        label: 'Learn More',
        click() { require('electron').shell.openExternal('https://electronjs.org'); },
      },
    ],
  },
];

// if (process.platform === 'darwin') {
//   template.unshift({
//     label: app.getName(),
//     submenu: [
//       { role: 'about' },
//       { type: 'separator' },
//       { role: 'services', submenu: [] },
//       { type: 'separator' },
//       { role: 'hide' },
//       { role: 'hideothers' },
//       { role: 'unhide' },
//       { type: 'separator' },
//       { role: 'quit' },
//     ],
//   });

//   // Edit menu
//   template[1].submenu.push(
//     { type: 'separator' },
//     {
//       label: 'Speech',
//       submenu: [
//         { role: 'startspeaking' },
//         { role: 'stopspeaking' },
//       ],
//     },
//   );

//   // Window menu
//   template[3].submenu = [
//     { role: 'close' },
//     { role: 'minimize' },
//     { role: 'zoom' },
//     { type: 'separator' },
//     { role: 'front' },
//   ];
// }

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);
// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
// module.exports.mainWindow = mainWindow;
