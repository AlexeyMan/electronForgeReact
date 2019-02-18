import React, { Component } from 'react';
import { ipcRenderer } from 'electron';
// const sendMes = require('./transfer');
import Button from '@material-ui/core/Button';

class test extends Component {
  constructor(props) {
    super(props);

    this.okClick = this.okClick.bind(this);
    this.desClick = this.desClick.bind(this);
    this.sendMess = this.sendMess.bind(this);
  }
  // eslint-disable-next-line class-methods-use-this
  okClick() {
    console.log('connect');
    ipcRenderer.send('as-mes', 'ping');
  }
  desClick() {
    console.log('desconnect');
    ipcRenderer.send('des', 'piing');
  }
  sendMess() {
    // sendMes.sendMes('dddddddddddddd');
  }
  render() {
    return (
      <div>
        <Button onClick={this.okClick} variant="contained" color="primary">connect</Button>
        <Button onClick={this.desClick} color="secondary">desconnect</Button>
        <Button onClick={this.desClick} variant="contained" color="default">desconnect</Button>
        {/* <img src="render/img/pump.png" name="myImage" width="100" /> */}
        <div id="p_oil1">send</div>
        <div id="p_oil4">send</div>
        <div id="RPM5">send</div>
        <div id="p_oilPN8">send</div>
      </div>
    );
  }
}

export default test;
