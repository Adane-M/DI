import './App.css';
import React from 'react';
import Hello from './components/Hello';
import { connect } from 'react-redux';
import { handleChangeFromRedux, handleChangeFromRedux2 , handleChangeFromRedux3, handleChangeFromRedux4} from './Redux/action';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      prop_one: 2,
      prop_two: 4
    }
  }

  handleappstate = (e) => {
    // this.setState({ prop_one: e.target.value })
    this.setState({ prop_two: e.target.value })
  }
  render() {
    return (
      <>
        <h4>REDUX WEEK 9 DAY 1</h4>
        <p>prop_one: {this.state.prop_one}</p>
        <p>prop_two: {this.state.prop_two}</p>
        update state via app.js setState!
        <p><input type='text' onChange={this.handleappstate} /></p>
        update state via proprs of redux!!
        <p><input type='text' onChange={this.props.myhandlechange} /> change prop 1</p>
        <p>props_store : {this.props.prop_app}</p>
        <Hello prop_app={this.state.prop_one} />
        
        change props of state via redux dispatch:
        <h2>store props prop two : {this.props.prop_app2}</h2>
        <p><input type='text' onChange={this.props.myhandlechange2} /> change prop2</p>

        <p> {this.props.prop_app4}</p>
        <button onClick={this.props.myhandlechange4}>ADD</button>
      </>
    );
  }
}
const mapStatetoprop = (props) => {
  return {
    prop_app: props.prop_one,
    prop_app2: props.prop_two,
    prop_app4: props.value
  }
}

const mapDispatchtoProps = (dispatch) => {
  // return console.log('hii dispatch', props);
  return {
    myhandlechange: (e) => dispatch(handleChangeFromRedux(e.target.value)),
    myhandlechange2: (e) => dispatch(handleChangeFromRedux2(e.target.value)),
    myhandlechange4: () => dispatch(handleChangeFromRedux4())
    
  }
}
export default connect(mapStatetoprop, mapDispatchtoProps)(App);
