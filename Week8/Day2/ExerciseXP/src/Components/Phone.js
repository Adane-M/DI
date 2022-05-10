import React from "react";

class Phone extends React.Component {
    constructor() {
        super();
        this.state = {
            brand: "Samsung",
            model: "Galaxy S21 Ultra",
            color: "black",
            year: 2021
        };

    }
    changeColor = () => {
        this.setState({color:'blue'});
    };


    render() {
        return (
            <div>
                <h1>My Phone is a {this.state.brand}</h1>
                <h5>My Phone is a {this.state.color} {this.state.model} from {this.state.year} </h5>

                <button type="" onClick={this.changeColor}>Change Color</button>
            </div>
        )
    }
}

export default Phone;