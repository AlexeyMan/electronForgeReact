import React, { Component } from 'react';
import { connect } from 'react-redux';

class Station extends Component {
  render() {
    // const st = this.props.realData[0];
// console.log('rdytryrtuyrtuytuy', this.props.realData[0]);
    return (
      <div className="mainStation">
        <div className="wrapPump">
          <img className="imgPump" src="render/img/pump.png" alt="pupmp" name="myImage" />
          <img className="imgPumpRezerv" style={{ display: this.props.realData[1] ? 'block' : 'none' }} src="render/img/rezerv.png" alt="pupmp" name="myImage" />
          <img className="imgPumpRun" style={{ display: this.props.realData[0] ? 'block' : 'none' }} src="render/img/pumpRun.png" alt="pupmp" name="myImage" />
          <img className="imgPumpAlarm" style={{ display: this.props.realData[2] ? 'block' : 'none' }} src="render/img/pumpAlarm.png" alt="pupmp" name="myImage" />
          <img className="imgPipUp" src="render/img/pip.png" alt="pupmp" name="myImage" />
          <img id="waterRun" className="imgPipRunDown" style={{ display: this.props.realData[3] ? 'block' : 'none' }} src="render/img/waterRunLeft.gif" alt="pupmp" />
          <img className="imgPipRunUp" style={{ display: this.props.realData[4] ? 'block' : 'none' }} src="render/img/waterRunLeft.gif" alt="pupmp" name="myImage" />
          <img className="imgPipDown" src="render/img/pip.png" alt="pupmp" name="myImage" />
          <h3>{this.props.realData[1]}</h3>
          <div className="viewFT">
            <span id="viewFT">{this.props.realData[3] ? this.props.realData[1] : '00' } ГЦ</span>
          </div>
        </div>
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
            <span id="viewFT">50 ГЦ</span>
          </div>
        </div>
      </div>
    );
  }
    }

const mapStateToProps = function (state) {
  return {
    realData: state.stationState,
  };
};
// const mapDispatchToProps = function (dispatch, ownProps) {
//   // return {
//   //   addData: (newData) => {
//   //     dispatch({ type: 'ADD_MESS', payload: newData });
//   //   },
//   //   updateData: (newData) => {
//   //     dispatch({ type: 'UPD_MESS', payload: newData });
//   //   },
//   // };
// };
export default connect(
      mapStateToProps,
      // mapDispatchToProps,
    )(Station);
