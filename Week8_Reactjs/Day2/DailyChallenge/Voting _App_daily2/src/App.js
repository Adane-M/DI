import './App.css';
import React from 'react';
// import { render } from '@testing-library/react';
import Counter from './components/Counter'



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      languages: [
        { name: "Php", votes: 0 },
        { name: "Python", votes: 0 },
        { name: "JavaSript", votes: 0 },
        { name: "Java", votes: 0 }
      ]

    }
  }
  handleAdd = (params) => {
    let arr = [...this.state.languages];
    arr[params].votes++;
    this.setState({ languages: arr })
  }

  render() {
    const { languages } = this.state;

    return (
      <div className="App">
        <header className="App-header">

          <Counter />


          {
            languages.map((item, i) => {
              return (
                <div key={i}>
                  {item.name} {item.votes}
                  <button onClick={() => this.handleAdd(i)}> ADD VOTE</button>
                </div>
              )
            })
          }
        </header>
      </div>
    )
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//       </header>
//     </div>
//   );
// }

export default App;
