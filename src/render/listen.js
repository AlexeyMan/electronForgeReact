const rend = require('electron').ipcRenderer;

rend.on('SEND_DATA_REACT', (event, message) => {
  const but = document.getElementById(message.name);
  if (but) { but.innerHTML = message.dataVal; }
//   console.log(message.id); // Prints 'whoooooooh!'
});
