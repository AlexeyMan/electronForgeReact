import React from 'react';
import { connect } from 'react-redux';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import { combineReducers } from 'react-redux';
import AppMenu from './AppMenu';
import Test from './test';
// import PumpStation from './pumpStation';
import PageMessage from './pageMessage';
// import './station.css';
// import reducer from './reducers';

// const store = createStore(reducer);

// console.log(store);

export class App extends React.Component {
  render() {
    // console.log(this.props);
    return (
      <div>
        <AppMenu />
        {/* <PumpStation /> */}
        <h2>Welcome to React!</h2>
        <Test />
        <PageMessage />
      </div>
    );
  }
}

export default connect(
  state => ({ state }),
  dispatch => ({ dispatch }),
)(App);
// import { createStore } from 'redux';

// function tableMess(state = [], action){
//   if (action.type === 'ADD_TR'){
//     return [
//       ...state,
//       action.payload,
//     ];
//   }
//   return state;
// }

// const store = createStore(tableMess);

// store.subscribe(() => {
//   console.log(store.getState());
// });

// store.dispatch({ type: 'ADD_TR', payload: 'Smells like spirit' });

