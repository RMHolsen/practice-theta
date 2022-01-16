import './App.css';
import React from 'react';
// import RandomArt from './practice/RandomArt';
// import RandomColorGroup from './practice/RandomColor';
// import Oracle from './practice/Oracle';
// import AdvancedOracle from './practice/OracleTwo';
// import Dogs from './practice/Dogs';
// import ColorPicker from './practice/ColorPicker';
// import { PhoneNumberForm } from './practice/single-file/PhoneNumber'
import CountDown from './practice/single-file/CountDown';

class App extends React.Component {
 
  constructor() {
    super();
    /* STATE FOR ORACLE 
     this.state = {
       oracle: ''
     } */
  }

  /* HANDLECHANGE FOR ORACLE 
  handleChange = (e) => {
    e.preventDefault();
    this.setState({ oracle: e.target.value})
  } */

  render() {
    return (
      <div className="App">
        <header className="App-header">

          <CountDown />

          {/* <input type="text" value={this.state.oracle} onChange={this.handleChange} /> */}
          {/* <AdvancedOracle oracle={this.state.oracle} /> */}

          {/* <RandomArt />
          <RandomColorGroup /> */}
          
        </header>
      </div>
    );
  };
}



export default App;
