import React, { Component } from 'react';
import { ipcRenderer } from 'electron';
import Button from '@material-ui/core/Button';

// const sendMes = require('./transfer');

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
        <Button variant="contained" color="primary" onClick={this.okClick}>connect</Button>
        <Button onClick={this.desClick}>desconnect</Button>
        <div id="p_oil1">send</div>
        <div id="p_oil4">send</div>
        <div id="RPM5">send</div>
        <div id="p_oilPN8">send</div>
      </div>
    );
  }
}

export default test;
