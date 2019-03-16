import React, { Component } from 'react';
import { ReactTabulator } from 'react-tabulator';
import { connect } from 'react-redux';
import Store from '../store';
import './listen1';

// const rend = require('electron').ipcRenderer;


const columns = [
  { title: 'id', field: 'nomer', width: 30, minWidth: 31 },
  { title: 'Акт', field: 'actMess', align: 'center', formatter: 'tickCross', width: 50, minWidth: 30, sorter: 'number' },
  { title: 'Дата', field: 'date', align: 'center', width: 110 },
  { title: 'Время', field: 'time', align: 'center', width: 110 },
  { title: 'Дата2', field: 'date2', align: 'center', width: 110 },
  { title: 'Время2', field: 'time2', align: 'center', width: 110 },
  { title: 'Сообщение', field: 'name' },
];

const data = [
  { id: 0, nomer: 1, actMess: true, date: '23.02.2030', time: '10.23.45', date2: '', time2: '', name: 'Oli Bob', age: '12', col: 'red', dob: '', rating: 4.5, passed: true },
  { id: 0, nomer: 2, actMess: true, date: '23.02.2040', time: '10.23.45', date2: '23.02.2019', time2: '', name: 'Mary May', age: '1', col: 'blue', dob: '14/05/1982', rating: 2.5, passed: true },
  { id: 0, nomer: 3, actMess: true, date: '23.02.2019', time: '10.23.45', date2: '23.02.2019', time2: '', name: 'Christine Lobowski', age: '42', col: 'green', dob: '22/05/1982' },
  { id: 0, nomer: 4, actMess: true, name: 'Brendon Philips', age: '125', date2: '23.02.2019', time2: '', col: 'orange', dob: '01/08/1980' },
  { id: 0, nomer: 5, actMess: true, date: '23.02.2019', time: '10.23.45', date2: '23.02.2019', time2: '', name: 'Авария 1', kvit: false, active: false },
  { id: 0, nomer: 6, actMess: true, date: '23.02.2019', time: '10.23.45', date2: '23.02.2019', time2: '', name: 'Авария 1', kvit: false, active: false },
  { id: 0, nomer: 7, actMess: true, date: '23.02.2019', time: '10.23.45', date2: '23.02.2019', time2: '', name: 'Авария 1', kvit: false, active: false },
  { id: 0, nomer: 8, actMess: true, date: '23.02.2019', time: '10.23.45', date2: '23.02.2019', time2: '', name: 'Авария 1', kvit: false, active: false },
  { id: 0, nomer: 9, actMess: true, date: '23.02.2019', time: '10.23.45', date2: '23.02.2019', time2: '', name: 'Авария 1', kvit: false, active: false },
  { id: 0, nomer: 10, actMess: true, date: '23.02.2019', time: '10.23.45', date2: '23.02.2019', time2: '', name: 'Авария 1', kvit: false, active: false },
  { id: 0, nomer: 11, actMess: true, date: '23.02.2019', time: '10.23.45', name: 'Авария 1', kvit: false, active: false },
  { id: 0, nomer: 12, actMess: true, date: '23.02.2019', time: '10.23.45', name: 'Авария 1', kvit: false, active: false },
  { id: 0, nomer: 13, actMess: true, date: '23.02.2019', time: '10.23.45', name: 'Авария 1', kvit: false, active: false },
  { id: 0, nomer: 14, actMess: true, date: '23.02.2019', time: '10.23.45', name: 'Авария 1', kvit: false, active: false },
  { id: 0, nomer: 15, actMess: true, date: '23.02.2019', time: '10.23.45', name: 'Авария 1', kvit: false, active: false },
];
const dataTable = [];

let onData;
// let messT=[];
const newDate = (i) => {
  const now = new Date();
  const MyDateString = `${(`0${now.getDate()}`).slice(-2)}/${
    (`0${now.getMonth() + 1}`).slice(-2)}/${
    now.getFullYear()}`;
  const MyTimeString = `${(`0${now.getHours()}`).slice(-2)}:${
  (`0${now.getMinutes()}`).slice(-2)}:${
  (`0${now.getSeconds()}`).slice(-2)}`;
  // console.log(MyDateString);
  // data[i].actMess = true;
  // data[i].date = `${MyDateString}`;
  // data[i].time = `${MyTimeString}`;
  return [MyDateString, MyTimeString]; // data[i];
};
export const upDate = (nomer) => {
  // const rowsTable = onData.getData();
  // const qwer = dataTable.filter(item => item.actMess === true); // ищем активные объекты
  // const row = qwer.find(item => item.nomer === nomer);
  // row.actMess = false;
  // console.log('id', row, qwer, nomer);
  console.log('id', nomer);
  // dataTable[nomer].actMess = false;
  // if (row) { onData.updateData(row.actMess = false); }
  // const aswe = qwer.map((item) => {
  //   // let rt = {};
  //   if (item.id === row.id) {
  //     const rt = item;
  //     rt.actMess = false;
  //     console.log('id', item, rt);
  //     return rt;
  //   }
  //   return item;
  // });
  // const qwer1 = rows.filter((item) => { item.id === row.id; }); // ищем объект по ID
  // qwer.actMess = false;
  // const dateAll = newDate();
  // // console.log('allll', dateAll);
  // qwer.date2 = dateAll[0];
  // qwer.time2 = dateAll[1];
  // onData.updateData([qwer]);
  // console.log('addUp', row);
  // const val = onData.tableData.find(item => item.id === i + 1); // ищем объект по ID
  // const store = Store.getState();
  // onData.clearData();
  // onData.addData(store.alarmMess);
  // console.log('112222222222222222222', store );
};
export const valTable = () => onData.getData();

export const addRow = (nomer) => {
  const dt = newDate(nomer);
  // onData.clearData();
  const rowWithId = onData.getData();
  // data[nomer].id = dataTable.length;
  dataTable.push(data[nomer]);
  // dataTable[dataTable.length - 1].actMess = false;
  dataTable[dataTable.length - 1].id = dataTable.length;
  dataTable[dataTable.length - 1].date = dt[0];
  dataTable[dataTable.length - 1].time = dt[1];
  // data[nomer].id = rowWithId.length;
  // onData.addRow(data[nomer], true);
  // onData.addData(row, true);
  console.log('add', data[nomer], 'dataT', dataTable, 'ddd', rowWithId );
};


class Page extends Component {
  constructor(props) {
    super(props);
    this.state = { clock: true };
    this.setData = this.setData.bind(this);
  }
  componentDidMount() {
    onData = this.tabM.table;
  }
  setData() {
    // const store = Store.getState();
    // console.log(store);
    // const b = [true, true, false, true, false, false];
    // b.forEach((bit, i) => { Store.dispatch({ type: 'ACT_MESS', payload: { actMess: bit, id: i } }); });
    // this.tabM.table.updateData([{ id: 2, actMess: false, name: 'bob1111' }]);
    // console.log(this.tabM);
    // console.log(this.props.messTable, store);
    // onData = this.tabM.table;
    this.tabM.table.clearData();
    // this.props.sendData(this.props.messTable);
    // this.tabM.table.updateOrAddData(this.props);
    // fnChang = () => this.tabM.table.updateOrAddData([{ id: 1, actMess: false, name: 'bob' }, { id: 3, actMess: false, name: 'steve' }]);
    // fnChang();
    // b.forEach((bit, i) => {
    //   if (bit === true) { // проверяем бит на true
    //     const find = store.alarmMess.find(item => item.id === i + 1); // ищем объект по ID
    //     if (find === undefined) { // проверяем существует нет
    //       Store.dispatch({ type: 'ADD_MESS', payload: data[i] });
    //     } else if (find.akt === true) { // проверяем на ативность
    //       console.log('активна ');
    //     } else {
    //       console.log('не активна');
    //     }

    //     // console.log('find', find);
    //     // Store.dispatch({ type: 'ADD_MESS', payload: data[i] });
    //     // console.log('ненашел');
    //   } else { console.log('бит фослсе'); }
    //   console.log(bit, i);
    // });
    // const fd = store.alarmMess;
    // const find = store.alarmMess.find(item => item.id === 1);
    // if (find === undefined) {
      // Store.dispatch({ type: 'ADD_MESS', payload: data[0] });
      // console.log('ненашел');
    // } else { console.log('нашел'); }
    // if (store.alarmMess[0].akt) {
    //   Store.dispatch({ type: 'ADD_MESS', payload: data[0] });
    //   console.log('нет акст');
    // }
    // console.log(Store.getState());
    // data = [];
    // this.props.sendData({ id: 7, name: 'Mary May', age: '1', col: 'blue', dob: '14/05/1982' });
    // console.log(this.props.messTable);
    // this.props.sendData({ id: 7, name: 'Mary May', age: '1', col: 'blue', dob: '14/05/1982' });
    // const wed = () => { this.tabM.props.data = [{ id: 7 }]; };
// wed();
    // console.log(this.tabM.props.data);
    // console.log(this.tabM.state.data);
    // this.setState({ data });
  }


  // Store.dispatch();
  // this.props.sendData({ id: 7, name: 'Mary May', age: '1', col: 'blue', dob: '14/05/1982' });

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
  // rend.on('SEND_DATA_REACT', (event, message) => {})
  render() {
    // onData = this.tabM.table;
    // console.log('this.props.messTable', this.state);
      // this.props.sendData(this.props.messTable);
    // this.tabM.table.updateOrAddData(this.props.messTable);
    // this.setData();
    const options = {
      height: '292px',
      layout: 'fitColumns',
      pagination: 'local',
      paginationSize: 6,
      paginationSizeSelector: [3, 6, 8, 10],
      movableColumns: true,
      movableRows: true,
      reactiveData: true, //turn on data reactivity
    };
    // const messT = this.props.messTable;

    return (
      <div style={{ width: '100%' }}>
        <ReactTabulator
          id="tableMess"
          ref={elem => this.tabM = elem}
    //    layout ={"fitColumns"}
    // pagination={"local"}
    // paginationSize={6}
    // paginationSizeSelector={[3, 6, 8, 10]}
    // movableColumns={true}
          options={options}
          data={data} // {this.props.messTable}
          columns={columns}
          tooltips
          layout={'fitData'}
        />
        <button onClick={this.setData}> Set Data</button>
        <div style={{ color: this.state.clock ? 'red' : 'black' }}> вапырпырыооы</div>
        <div>{this.state.clock}</div>
        {/* <button onClick={() => { this.state.clock = !this.state.clock; console.log(this.state.clock); value=this.state.clock ? 'red' : 'black'}}>S Data</button> */}
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    messTable: state.alarmMess,
  };
};
const mapDispatchToProps = function (dispatch) {
  return {
    sendData: (newData) => {
      dispatch({ type: 'ADD_MESS', payload: newData });
    },
    actData: (newData) => {
      dispatch({ type: 'ACT_MESS', payload: newData });
    },
  };
};
// const wer = () => { this.setData(); };
// this.sendData({ id: 7, name: 'Mary May', age: '1', col: 'blue', dob: '14/05/1982' });
// export default connect(
//   state => ({ messTable: state.alarmMess }),
//   dispatch => ({
//     sendData: (newData) => {
//       dispatch({ type: 'ADD_MESS', payload: newData });
//     } }),
// )(Page);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Page);

