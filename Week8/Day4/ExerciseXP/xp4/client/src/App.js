import './App.css';
import React from 'react';
// import ReactAutocompleteSearch from './w8d4daily2/ReactAutocompleteSearch';
import Imageslider from './dailyw8d1/Imageslider';

class App extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }
  render() {
    return (
      <>
      {/* // <div className="App">
      //   <header className="App-header"> */}

            <Imageslider />


      {/* //   </header>
      // </div> */}
      </>
    );
  }
}

export default App;
