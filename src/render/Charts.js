/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import { connect } from 'react-redux';

// const list = [];
class Char extends Component {


    // wert = () => {
    //     // var list = ['11','22', '33'];
    //     console.log(this.props.dota[0].data);
    //     // for (var i = 1; i <= 60; i++) {
    //     //     list.push('2013-03-' + i);
    //     // }
    //     // this.getOption();
    //     // console.log(this.testInput) //.setOption(this.getOption());
    //     // // console.log(this.testInput.option);
    //     // return list;
    // }
  render() {
    const wert = () => {
//         // var list = ['11','22', '33'];
      console.log(this.props.dota);
//         // for (var i = 1; i <= 60; i++) {
//         //     list.push('2013-03-' + i);
//         // }
//         // this.getOption();
//         // console.log(this.testInput) //.setOption(this.getOption());
//         // // console.log(this.testInput.option);
//         // return list;
    };

    const getOption = {
      tooltip: {
                // trigger: 'axis'
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
        },
      },
      legend: {
        data: [this.props.dota[0].name, this.props.dota[1].name],
      },
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataZoom: { show: true },
          dataView: { show: true },
          magicType: { show: true, type: ['line', 'bar', 'stack', 'tiled'] },
          restore: { show: true },
          saveAsImage: { show: true },
        },
      },
      calculable: true,
      dataZoom: {
        show: true,
        realtime: true,
        start: 20,
        end: 100,
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: this.props.dota[0].time,

                    // (function () {
                    //   for (let i = 1; i <= 1; i++) {
                    //     list.push(`${(`0${new Date().getHours()}`).slice(-2)}:${
                    //         (`0${new Date().getMinutes()}`).slice(-2)}:${
                    //         (`0${new Date().getSeconds()}`).slice(-2)}`);
                    //   }
                    //   return list;
                    // }()),
        },
      ],
      yAxis: [
        {
          type: 'value',
        },
      ],
      series: [
        {
          name: this.props.dota[0].name,
          type: 'line',
          smooth: true,
          data: this.props.dota[0].data,
                    // (function (){
                    //     var list = [];
                    //     for (var i = 1; i <= 30; i++) {
                    //         list.push(Math.round(Math.random()* 30));
                    //     }
                    //     return list;
                    // }()),
        },
        {
          name: this.props.dota[1].name,
          type: 'line',
          data: this.props.dota[1].data,
        },
      ],
    };
    return (
      <div>
        <button onClick={wert}>z pltcm</button>
        <ReactEcharts ref={input => this.testInput = input} option={getOption} style={{ height: 500 }} />
      </div>
    );
  }
     }

const mapStateToProps = function (state) {
  return {
    dota: state.savedData,
  };
};
// const mapDispatchToProps = function (dispatch, ownProps) {
  // return {
  //   addData: (newData) => {
  //     dispatch({ type: 'ADD_MESS', payload: newData });
  //   },
  //   updateData: (newData) => {
  //     dispatch({ type: 'UPD_MESS', payload: newData });
  //   },
  // };
// };
export default connect(
        mapStateToProps,
        // mapDispatchToProps,
      )(Char);
