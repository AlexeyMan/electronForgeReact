import React, { Component } from 'react';
import { ReactTabulator } from 'react-tabulator';
import { connect } from 'react-redux';
import Store from '../store';

const rend = require('electron').ipcRenderer;


// import { connect } from 'react-redux';

const columns = [
  { title: 'id', field: 'id', width: 30, minWidth: 31 },
  { title: 'Акт', field: 'passed', align: 'center', formatter: 'tickCross', width: 50, minWidth: 30, sorter: 'number' },
  { title: 'Дата', field: 'dob', align: 'center', width: 120 },
  { title: 'Время', field: 'dob', align: 'center', width: 120 },
  { title: 'Сообщение', field: 'name' },
  // { title: 'id', field: 'id', width: 30, minWidth: 30 },
  // { title: 'Сообщение', field: 'name', width: 250 },
  // { title: 'Дата', field: 'age', align: 'left', formatter: 'progress' },
  // { title: 'Время', field: 'col' },
  // { title: 'Состояние', field: 'dob', align: 'center' },
  // { title: 'Rating', field: 'rating', align: 'center', formatter: 'star' },
  // { title: 'Passed?', field: 'passed', align: 'center', formatter: 'tickCross' },
];

let data = [
  { id: 1, name: 'Oli Bob', age: '12', col: 'red', dob: '', rating: 4.5, passed: true },
  { id: 2, name: 'Mary May', age: '1', col: 'blue', dob: '14/05/1982', rating: 2.5, passed: true },
  { id: 3, name: 'Christine Lobowski', age: '42', col: 'green', dob: '22/05/1982' },
  { id: 4, name: 'Brendon Philips', age: '125', col: 'orange', dob: '01/08/1980' },
  { id: 5, name: 'Margret Marmajuke', age: '16', col: 'yellow', dob: '31/01/1999' },
  { id: 6, name: 'Oli Bob', age: '12', col: 'red', dob: '' },
  { id: 7, name: 'Mary May', age: '1', col: 'blue', dob: '14/05/1982' },
  { id: 8, name: 'Christine Lobowski', age: '42', col: 'green', dob: '22/05/1982' },
  { id: 9, name: 'Brendon Philips', age: '125', col: 'orange', dob: '01/08/1980' },
  { id: 10, name: 'Margret Marmajuke', age: '16', col: 'yellow', dob: '31/01/1999' },
];
let onData = {};
rend.on('SEND_DATA_REACT', (event, message) => {
  if (message.name === 'viewFT') {
    onData = message.dataVal;
    Store.dispatch({ type: 'ADD_MESS', payload: { name: 'Dispatch message', age: '16', col: 'yellow', dob: '31/01/1999' } });
    // this.setState({ www: message.dataVal });
    // this.props.sendData( message.dataVal );
    console.log(onData); // Prints 'whoooooooh!'
  }
});
// sendData("www");
  // <link rel="stylesheet" href="./css/tabulator.min.css" />
  // <link rel="stylesheet" href="./css/tabulator_bootstrap4.min.css" />
  // <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-lite/1.1.0/material.min.css" />
  // <link rel="stylesheet" href="https://cdn.datatables.net/1.10.19/css/jquery.dataTables.min.css" />
const wer = () => { this.setData(); };

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = { data };
    this.setData = this.setData.bind(this);
  }
  setData() {
    data = [];
    console.log(this.props);
    // console.log(data);
    // console.log(this.tabM.state.data);
    // this.setState({ data });
  }

  // rend.on('SEND_DATA_REACT', (event, message) => {
  //   if (message.name === 'viewFT') {
  //     this.setState({ www: message.dataVal });
  //     // this.props.sendData( message.dataVal );
  //     console.log(this.state); // Prints 'whoooooooh!'
  //   }
  // });
//   ref = null;
  // click = ()=>this.tabM.addRow({});
  // console.log(this.props);
  render() {
    // console.log(this.props.messTable);
    const options = {
      height: '292px',
      layout: 'fitColumns',
      pagination: 'local',
      paginationSize: 6,
      paginationSizeSelector: [3, 6, 8, 10],
      movableColumns: true,
      movableRows: true,
    };

    return (
      <div>
        <ReactTabulator
          id="tableMess"
          ref={elem => this.tabM = elem}
    //    layout ={"fitColumns"}
    // pagination={"local"}
    // paginationSize={6}
    // paginationSizeSelector={[3, 6, 8, 10]}
    // movableColumns={true}
          options={options}
          data={this.props.messTable}
          columns={columns}
          tooltips
          layout={'fitData'}
        />
        {/* <button onClick={this.setData}>{this.props} Set Data</button> */}
        <div style={{ color: 'black' }}>{this.state.www}</div>
        <button onClick={this.setData}>S Data</button>
      </div>
    );
  }
}


export default connect(
  state => ({ messTable: state.alarmMess }),
  dispatch => ({
    sendData: (newData) => {
      dispatch({ type: 'ADD_MESS', payload: newData });
    } }),
)(Page);
