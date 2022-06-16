import React from "react";
import Phone from "./Phone";

class Color extends React.Component {
    constructor() {
        super();
        this.state = {
            favoriteColor: "red"
        }
    }


    componentDidMount() {
        setTimeout(this.changeCoLor, 3000);
    }

    changeCoLor() {
        this.setState({ favoriteColor: 'Yellow' })
    }

    render() {
        return (
            <>
                <header>My Favorit color is {this.state.favoriteColor}</header>
                {/* <button type="" onClick={this.changeColor}>Change color2</button> */}
                <button type="" changeColor={this.props.changeColor}>Change color2</button>
            </>
        )
    }

}



export default Color