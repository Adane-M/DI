import React, {Component} from '../../ExerciseXP/node_modules/react';
import React from '../../ExerciseXP/node_modules/react-scripts';
import User from './components/User';
import SearchBox from './components/SearchBox'
// import './App.css';
// import users from './users.json'
import 'tachyons';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
        users:[],
        txt:'',
        searchTxt:''
    }
    // console.log('constructor');
  }

  componentDidMount(){
    // console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
      // this.state.user = data
      // console.log(this.state.user);
      this.setState({users:data})
    })
    .catch(err => {
      console.log(err);
    })
  }

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({txt:e.target.value})
  }

  render() {
    // console.log('render');
    const {users,txt} = this.state;
    console.log('txt=>',txt);
    const filterUser = users.filter(item => {
      return item.name.toLowerCase().includes(txt.toLowerCase());
    })
    return (
      <div>
        <h1>Users</h1>
        <SearchBox searchFunc={this.handleChange}/>
        {
          filterUser.map(item => {
            return (
              <User key={item.id} user={item} />
            )
          })
        }
      </div>
    )
  }
}
export default App;
/*
const App = () => {
  console.log(users);
  return (
    <div>
      <h1>Users</h1>
      {
        users.map(item => {
          return (
            <User key={item.id} user={item} />
          )
        })
      }
    </div>
  )
}
export default App;
*/










/* function App() {

  const users = [
    {name:'David',username:'davi',email:'david@gmail.com',id:1},
    {name:'Lucas',username:'luca',email:'luca@gmail.com',id:2},
    {name:'Timur',username:'timu',email:'timu@gmail.com',id:5},
    {name:'aaa',username:'aaa',email:'aaa@gmail.com',id:59},
    {name:'bbb',username:'bbb',email:'bbb@gmail.com',id:65},
    {name:'ccc',username:'ccc',email:'ccc@gmail.com',id:111},
  ]
  const style = {
    color:'#000',
    textAlign:'left',
    fontSize:'60px'
  }
  return (
    <div className="App" style={style}>
      <header className="App-header">
        Hello Class - My first react App
        {
          comment inside this
        }
        <Hello name={'John'} />
        {
            users.map((item, i) => {
              return (
                <User key={i} name={item.name} username={item.username} email={item.email} />
              )
            })
        }
      </header>
    </div>
  );
}*/
