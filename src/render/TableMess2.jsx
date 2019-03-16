import React, { Component } from 'react';
import { ReactTabulator } from 'react-tabulator';
import { connect } from 'react-redux';
import Store from '../store';
// import './listen';

// const rend = require('electron').ipcRenderer;


// import { connect } from 'react-redux';

const columns = [
  { title: 'id', field: 'id', width: 30, minWidth: 31 },
  { title: 'Акт', field: 'actMess', align: 'center', formatter: 'tickCross', width: 50, minWidth: 30, sorter: 'number' },
  { title: 'Дата', field: 'date', align: 'center', width: 120 },
  { title: 'Время', field: 'time', align: 'center', width: 120 },
  { title: 'Сообщение', field: 'name' },
  // { title: 'id', field: 'id', width: 30, minWidth: 30 },
  // { title: 'Сообщение', field: 'name', width: 250 },
  // { title: 'Дата', field: 'age', align: 'left', formatter: 'progress' },
  // { title: 'Время', field: 'col' },
  // { title: 'Состояние', field: 'dob', align: 'center' },
  // { title: 'Rating', field: 'rating', align: 'center', formatter: 'star' },
  // { title: 'Passed?', field: 'passed', align: 'center', formatter: 'tickCross' },
];

const data = [
  { id: 1, actMess: true, date: '23.02.2019', time: '10.23.45', name: 'Oli Bob', age: '12', col: 'red', dob: '', rating: 4.5, passed: true },
  { id: 1, actMess: true, date: '23.02.2040', time: '10.23.45', name: 'Oli Bob', age: '12', col: 'red', dob: '', rating: 4.5, passed: true },
  { id: 1, actMess: true, date: '23.02.2030', time: '10.23.45', name: 'Oli Bob', age: '12', col: 'red', dob: '', rating: 4.5, passed: true },
  { id: 2, actMess: true, date: '23.02.2040', time: '10.23.45', name: 'Mary May', age: '1', col: 'blue', dob: '14/05/1982', rating: 2.5, passed: true },
  { id: 3, actMess: true, date: '23.02.2019', time: '10.23.45', name: 'Christine Lobowski', age: '42', col: 'green', dob: '22/05/1982' },
  { id: 4, actMess: true, name: 'Brendon Philips', age: '125', col: 'orange', dob: '01/08/1980' },
  { id: 5, actMess: true, date: '23.02.2019', time: '10.23.45', name: 'Авария 1', kvit: false, active: false },
  { id: 6, actMess: true, date: '23.02.2019', time: '10.23.45', name: 'Авария 1', kvit: false, active: false },
  { id: 7, actMess: true, date: '23.02.2019', time: '10.23.45', name: 'Авария 1', kvit: false, active: false },
  { id: 8, actMess: true, date: '23.02.2019', time: '10.23.45', name: 'Авария 1', kvit: false, active: false },
  { id: 9, actMess: true, date: '23.02.2019', time: '10.23.45', name: 'Авария 1', kvit: false, active: false },
  { id: 10, actMess: true, date: '23.02.2019', time: '10.23.45', name: 'Авария 1', kvit: false, active: false },
  { id: 11, actMess: true, date: '23.02.2019', time: '10.23.45', name: 'Авария 1', kvit: false, active: false },
  { id: 12, actMess: true, date: '23.02.2019', time: '10.23.45', name: 'Авария 1', kvit: false, active: false },
  { id: 13, actMess: true, date: '23.02.2019', time: '10.23.45', name: 'Авария 1', kvit: false, active: false },
  { id: 14, actMess: true, date: '23.02.2019', time: '10.23.45', name: 'Авария 1', kvit: false, active: false },
  { id: 15, actMess: true, date: '23.02.2019', time: '10.23.45', name: 'Авария 1', kvit: false, active: false },
];
let onData;
// let messT=[];
export const upDate = (row) => {
  const rows = onData.getData();
  const qwer = rows.find(item => item.id === row.id); // ищем объект по ID
  qwer.actMess = false;
  onData.updateData([qwer]);
  console.log('addUp', row, rows, qwer);
  // const val = onData.tableData.find(item => item.id === i + 1); // ищем объект по ID
  // const store = Store.getState();
  // onData.clearData();
  // onData.addData(store.alarmMess);
  // console.log('112222222222222222222', store );
};
export const addRow = (row) => {
  const store = Store.getState();
  onData.clearData();
  onData.addData(store.alarmMess);
  // const rows = onData.getData();
  // onData.addData([...rows, row], true);
  // Store.dispatch({ type: 'ADD_MESS', payload: row });
  // const rows = onData.getData();
  // const qwer = rows.find(item => item.id === row.id); // ищем объект по ID
  // qwer.actMess = false;
  // onData.updateData([qwer]);
  // const eee = rows.getData();
  // var data1 = rows.getData();
  // messT.push({name:"IM A NEW ROW", progress:100, gender:"male"});
  console.log('add', row);
};
export const valTable = () => {

  // Store.dispatch({ type: 'ADD_MESS', payload: onData.getData() });
  return onData.getData();
};
// let fnChang = {};
// rend.on('SEND_DATA_REACT', (event, message) => {
//   const a = message.dataVal;
//   const b = [];
//   const store = Store.getState();
//   const find = i => store.alarmMess.find(item => item.id === i + 1);
//   for (let i = 0; i < 32; i += 1) { b[i] = (a >> i) & 1; } // разбиваем число на массив битов
//   if (message.name === 'alarm_0') { // обработка байтов
//     let predMess;
//     if (predMess !== a) {
//       predMess = a;
//     // проверяеи на изменение
//       b.forEach((bit, i) => {
//         if (bit === 1) { // проверяем бит на true
//           const val = find(i); // = store.alarmMess.find(item => item.id === i + 1); // ищем объект по ID
//           if (val === undefined) { // проверяем существует нет
//           // Store.dispatch({ type: 'ACT_MESS', payload: { actMess: true, id: i + 1 } });
//             Store.dispatch({ type: 'ADD_MESS', payload: data[i] });
//           // const obj = document.getElementById('tableMess');
//           // onData.table.updateOrAddData([{ id: i + 1, actMess: true, date: '23.02.2019', time: '10.23.45', name: 'reee34211' }]);
//             console.log('1111111111111111111', onData);
//           // Store.dispatch({ type: 'ACT_MESS', payload: { akt: true, id: i + 1 } });
//             console.log('add_mess', data[i]);
//           } else if (val.actMess === false) {
//             Store.dispatch({ type: 'ACT_MESS', payload: { actMess: true, id: i + 1 } });
//           }
//         // else Store.dispatch({ type: 'ACT_MESS', payload: { akt: true, id: i + 1 } });
//         //  else if (val.akt === false) { // проверяем на ативность
//         //   // Store.dispatch({ type: 'ACT_MESS', payload: find });
//         //   Store.dispatch({ type: 'ADD_MESS', payload: data[i] });
//         //   console.log('не активна ');
//         // }
//         // console.log('find', find);
//         // Store.dispatch({ type: 'ADD_MESS', payload: data[i] });
//         } else {
//           const val = find(i);
//           if (val !== undefined) {
//             if (val.actMess === true) {
//               Store.dispatch({ type: 'ACT_MESS', payload: { actMess: false, id: i + 1 } });
//               // onData.table.updateOrAddData([{ id: i + 1, actMess: false, date: '23.02.2019', time: '10.23.45', name: 'qqqweeerr2232334' }]);
//             }
//           }
//         //     Store.dispatch({ type: 'ACT_MESS', payload: { akt: false, id: i + 1 } });
//         //     // val.akt = false;
//         // //     console.log('after_act_mess', val, i);
//         //   }
//         // }
//         // // //   if (val.akt === true) {
//         // //     Store.dispatch({ type: 'ACT_MESS', payload: { akt: false, id: i + 1 } });
//         // //   }
//         //   // console.log('undefaine', val);
//         // }
//         // }
//         }
//         // } else if (val.akt === true) {
//         //   // Store.dispatch({ type: 'ACT_MESS', payload: { akt: false, id: i + 1 } });
//         // }

//         // } else { // проверяем существует нет
//         //   if (find.akt === true) { // проверяем на ативность
//         //     Store.dispatch({ type: 'ACT_MESS', payload: { akt: false, id: i + 1 } });
//         //     console.log('не активна ');
//         //   }
//         // }
//         // console.log('бит фослсе');

//       // console.log(bit, i);
//       });
//       onData.table.updateOrAddData(store.alarmMess);
//     }
//   }
//   // onData.table.updateOrAddData(store.alarmMess);
// });
// // sendData("www");
//   // <link rel="stylesheet" href="./css/tabulator.min.css" />
//   // <link rel="stylesheet" href="./css/tabulator_bootstrap4.min.css" />
//   // <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-lite/1.1.0/material.min.css" />
//   // <link rel="stylesheet" href="https://cdn.datatables.net/1.10.19/css/jquery.dataTables.min.css" />
// // this.tabM.table.addData();
// // Store.subscribe(()=>{

// // });

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
    const store = Store.getState();
    console.log(store);
    const b = [true, true, false, true, false, false];
    // b.forEach((bit, i) => { Store.dispatch({ type: 'ACT_MESS', payload: { actMess: bit, id: i } }); });
    // this.tabM.table.updateData([{ id: 2, actMess: false, name: 'bob1111' }]);
    // console.log(this.tabM);
    console.log(this.props.messTable, store);
    onData = this.tabM.table;
    // this.tabM.table.clearData();
    // this.props.sendData(this.props.messTable);
    this.tabM.table.updateOrAddData(this.props.messTable);
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
    console.log('this.props.messTable', this.state);
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
    };
    const messT = this.props.messTable;

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
          data={messT} // {this.props.messTable}
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
const mapDispatchToProps = function (dispatch, ownProps) {
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

