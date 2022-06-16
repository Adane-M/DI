import Garage from "./Garage";
import React from "react";
class Car extends React.Component {
    constructor() {                                                                                                                                                                                                                  
        super(); 
        this.state = {
            color:'black&yellow'
        }
      }
    
    render() {
      return (
      <header>
          This car is {this.state.color} {this.props.model}  ,
      <Garage size="small"/>
      </header>
      )
    }
  }
  
export default Car;