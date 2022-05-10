import React from 'react';
import Car from './Components/Car';
import Color from './Components/Color';
import Events from './Components/Events';
import Phone from './Components/Phone';


//////RENDER PAGE WITH CLASS
class Appxp2 extends React.Component {
  constructor() {                                                                                                                                                                                                                  
    super(); 
    this.state = {
        color:''
    }
  }

  render() {
      const carinfo = {name: "Ford", model: "Mustang"};
      return (
          <div>
          <Car model={carinfo.model}  size={'small'}/>
          <Events />
          <Phone />
          <Color />
      </div>
    )
}
}




export default Appxp2;
