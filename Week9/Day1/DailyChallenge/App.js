import './App.css';
import React from 'react';
import Movies from './components/w9d1daily/Movies';
import Thechossenone from './components/w9d1daily/Thechossenone'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    return (
      <div className='App'>
      <Movies/>
      <Thechossenone/>
      </div>
    );
  }
}
export default App;