import './App.css';
import React from 'react';
import Formtransacton from './components/Transactionsw9d2xp/Formtransacton';

class App extends React.Component {

  render() {
    return (
      <>
        <div className='App'>
          <Formtransacton />
        </div>
      </>
    )
  }
}









// import { FetchLove } from './components/LoveCalculator/FetchLove';
// import { Calcres } from './components/LoveCalculator/Calcres';
// import { Fname } from './components/LoveCalculator/Fname';
// import { Lname } from './components/LoveCalculator/Lname';

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       fname: '',
//       sname: '',
//       res: {}
//     }
//   }

//   handleChange = (e) => {
//     this.setState({ [e.target.name]: e.target.value })
//   }

//   handleClick = () => {
// //usind the onclick func to get res from Api
//     const { fname, sname } = this.state
//     const options = {
//       method: 'GET',
//       headers: {
//         'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com',
//         'X-RapidAPI-Key': '8e714f6b88mshbb20deb3af21b66p17c12cjsnb08e0581e35c'
//       }
//     };
// //adding fname and lname to the fetch link.
//     fetch(`https://love-calculator.p.rapidapi.com/getPercentage?sname=${sname}&fname=${fname}`, options)
//       .then(response => response.json())
//       .then(response => {
//         console.log(response);
//         //send the res to "clacres" and display them in the page
//         this.setState({ res: response })
//       })
//       .catch(err => console.error(err));



//   }


//   render() {
//     return (
//       <div className='App'>
// <Formtransacton/>
//         <Fname handleChange={this.handleChange} />
//         <Lname handleChange={this.handleChange} />
//         <FetchLove handleClick={this.handleClick} />
//         <Calcres res={this.state.res} />
//       </div>
//     );
//   }
// }
export default App;