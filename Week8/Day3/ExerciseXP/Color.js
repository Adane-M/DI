import React from "react";

class Color extends React.Component {
    constructor() {
        super();
        this.state = {
            favoriteColor: "red"
        }
    }


    componentDidMount() {
        this.setState({favoriteColor:'Yellow'})
    }
    shouldComponentUpdate() {
        return true;
    }
    componentDidUpdate() {
        this.setState({ favoriteColor: 'pink' })

    }


    changeColor() {
        console.log('hiiii');
        this.setState({ favoriteColor: 'blue' })
    }

    render() {
        return (
            <>
                <header>My Favorit color is {this.state.favoriteColor}</header>
                {/* <button type="" onClick={this.changeColor}>Change color2</button> */}
                <button type="" changeColor={this.changeColor}>Change color2</button>
            </>
        )
    }

}



export default Color