import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      task: [],
      count: 0

    }
  }
  addTask = (e) => {
    if (e.key === 'Enter') {
      this.state.task.push(e.target.value)
      this.setState({ count: this.state.count + 1 })
      e.target.value = null;
    }
  }
  delTask = (i) => {
    let tasks = this.state.task;
    tasks.splice(i, 1);
    this.setState({task:tasks})
  }

  render() {
    const { task } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>TODO'S</h1>
          {
            task.map((item, i) => {
              return (
                <ul>
                  <li className="li"  key={i} onClick={() => this.delTask(i)}> {item}</li>
                </ul>
              )
            })
          }
          <input onKeyPress={this.addTask} />
        </header>
      </div>
    );
  }
}

export default App;
