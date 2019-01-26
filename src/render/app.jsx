import React from 'react';
import AppMenu from './AppMenu';
import Test from './test';


export default class App extends React.Component {
  render() {
    return (<div>
      <AppMenu />
      <h2>Welcome to React!</h2>
      <Test />
    </div>);
  }
}
