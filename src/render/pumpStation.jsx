import React, { Component } from 'react';
// import style from './station.css';

class station extends Component {
  render() {
    return (
      <div className="mainStation">
        <div className="wrapPump">
          <img className="imgPump" src="render/img/pump.png" alt="pupmp" name="myImage" />
          <img className="imgPumpRezerv" src="render/img/rezerv.png" alt="pupmp" name="myImage" />
          <img className="imgPumpRun" src="render/img/pumpRun.png" alt="pupmp" name="myImage" />
          <img className="imgPumpAlarm" src="render/img/pumpAlarm.png" alt="pupmp" name="myImage" />
          <img className="imgPipUp" src="render/img/pip.png" alt="pupmp" name="myImage" />
          <img id="waterRun" className="imgPipRunDown" src="render/img/waterRunLeft.gif" alt="pupmp" />
          <img className="imgPipRunUp" src="render/img/waterRunLeft.gif" alt="pupmp" name="myImage" />
          <img className="imgPipDown" src="render/img/pip.png" alt="pupmp" name="myImage" />
          <div className="viewFT">
            <span id="viewFT">50 ГЦ</span> Гц
          </div>
        </div>
      </div>
    );
  }
    }
export default station;
