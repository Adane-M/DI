// import { render } from '@testing-library/react';
import React from 'react';
import './App.css';
// import Hello from './Hello';
import User from './User';
import Search from './Search';
// import Users from './users.json';

//////RENDER PAGE WITH CLASS
class App extends React.Component {
  constructor() {                                                                                                                                                                                                                  
    super(); 
    this.state = {
      users: [],
      txt: ''
    }
  }

  ////*if we want to display content when onload the page we will use componentDidMount!!

  componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
      this.setState({ users: data })
    })
    .catch(err => console.log(err))
  }

  ////*else if we want to render the contant by clickin on a button we shell creat a button and a func for it.
  // handleUsers = () => {
  //   fetch('http://jsonplaceholder.typicode.com/users')
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({ users: data })
  //     })
  //     .catch(err => console.log(err))
  // }


  handleChange = (e) => {
    this.setState({ txt:e.target.value })
  }
  render() {
    
    const { users, txt } = this.state;
    const filterUsers = users.filter(item => {
      return item.name.toLowerCase().includes(txt.toLowerCase())
    })
    return (
      <div>
        <h1> users</h1>

        <Search searchFunc={this.handleChange}/>
        {
          filterUsers.map(item => {
            return (
              <User key={item.id} user={item} />
            )
          })
        }
        <button onClick={this.handleUsers}> Get Users</button>
      </div>
    )
  }
}





/////RENDER PAGE WITH ERROW FUNC
// const App = () => {
//   return (
//     <>
//     <h1>
//       Users
//     </h1>
//     {
//       Users.map((item) => {
//         return(
//           <User key={item.id} user={item}  />
//           )
//           {/* <User key={item.id} name={item.name} username={item.username} email={item.email}></User>*/}
//       })
//     }

//     </>
//   )
// }





/////RENDER PAGE WITH A REGULER FUNC.
/*function App() {
  const users = [
    { name: 'asd', email: 'dfgd@gdil.coy' },
    { name: 'asdrt', email: 'dfdrr@gdil.coy' },
    { name: 'adfgr', email: 'dfgghd@gdil.coy' }
  ]
  return (
    <div className="App">
      <header className="App-header">
        <h4>i do not use jsx</h4>
        <Hello />
        {users.map((item , i) => {
          return (
            <User key={i}>my name is {item.name} email {item.email} </User>
          )
        })
        }

      </header>
    </div>
  );
}*/

// export default App;
