import React, { Component } from "react";

class ClassDemoCompo extends Component {

    constructor(props) {
        super(props);
    this.state={
        name:'adane'
    }
    }

componentDidMount(){
    setTimeout(()=>{
        this.setState({name:'Melese'})
    },3000)
    

}
    componentDidUpdate(){
    console.log('componentDidUpdate',this.state.name);

}

handleClick=()=>{
    this.setState({name:'ADANE'});
}

    render() {
        ////in a class component we can deliver the props in 2 ways:
        ////1. this.props.text 
        ////2. const {text} = this.props  and then render only {text}
        ////3. you can use the state as a props but only if you have the props inside the constructure and the super methode!!!!
        // console.log(this.props)
        const {text, color} = this.props;
        const {name} = this.state;
        return (
            <>
                <h1>Hello form Class Demo Compo</h1>
              {/*props example*/}
                <h1>{text} , {color}</h1>
              {/*state example*/}
              <h2>{name}</h2>
              <h2>{this.props.name}</h2>

              <button onClick={this.handleClick}>Click to change name</button>
            </>
        )
    }

}

export default ClassDemoCompo;