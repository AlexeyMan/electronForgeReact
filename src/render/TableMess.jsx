import React, { Component } from 'react';
import { ReactTabulator } from 'react-tabulator';
import { connect } from 'react-redux';
import './listen';
// import Store from './store';
// import './css/tabulator_bootstrap4.css';

const columns = [
  { title: 'id', field: 'id', width: 30, minWidth: 31 },
  { title: 'Акт', field: 'actMess', align: 'center', formatter: 'tickCross', width: 50, minWidth: 30 },
  { title: 'Дата', field: 'date', align: 'center', width: 110 },
  { title: 'Время', field: 'time', align: 'center', width: 110 },
  { title: 'Сообщение', field: 'name' },
  { title: 'Дата2', field: 'date2', align: 'center', width: 110 },
  { title: 'Время2', field: 'time2', align: 'center', width: 110 },
];

class Page extends Component {
  // constructor(props) {
  //   super(props);
  //   // this.state = { clock: true };
  //   // this.setData = this.setData.bind(this);
  // }
  // componentDidMount() {
  // //  const onData = this.tabM.table;
  // }
  // setData = () => {
  //   // this.props.addData(data[1]);
  //  console.log('set');
  // }
  // upDateData= () => {
  //   // this.props.updateData(data[1]);
  // }
  render() {
    // onData = this.tabM.table;
    // console.log('this.props.messTable', this.state);
    const options = {
      height: '300px',
      layout: 'fitColumns',
      pagination: 'local',
      paginationSize: 10,
      paginationSizeSelector: [10, 20, 30, 40],
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
          data= {[]}// {messT} // {this.props.messTable}
          columns={columns}
          tooltips
          layout={'fitData'}
        />
        {/* <button onClick={this.setData}> Set Data</button>
        <div style={{ color: 'green' }}> вапырпырыооы</div>
        <button onClick={this.upDateData}>updateData</button> */}
      </div>
    );
  }
}


const mapStateToProps = function (state) {
  return {
    messTable: state.addMess,
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
)(Page);

