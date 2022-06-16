import './App.css';
import React from 'react';
import Counter from './components/counterxpw9d1/Counter';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
    value:0 
    }
  }

  render() {
    return (
      <>
      <Counter value={this.props.value}/>
        <h4>REDUX WEEK 9 DAY 1 xp</h4>
      </>
    );
  }
}
export default App;