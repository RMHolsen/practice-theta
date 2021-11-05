import './App.css';
import React from 'react';
// import RandomArt from './practice/RandomArt';
// import RandomColorGroup from './practice/RandomColor';
// import Oracle from './practice/Oracle';
import AdvancedOracle from './practice/OracleTwo';

class App extends React.Component {
 
  constructor() {
    super();
    this.state = {
      oracle: ''
    }
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ oracle: e.target.value})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">

          <input type="text" value={this.state.oracle} onChange={this.handleChange} />

          <AdvancedOracle oracle={this.state.oracle} />
          {/* <RandomArt />
          <RandomColorGroup /> */}
          {/* <p>
            <s>Edit <code>src/App.js</code> and save to reload. <br/></s>
            LIES. LIES SLANDER AND CALUMNY. 
          </p> */}
        </header>
      </div>
    );
  };
}

export default App;
