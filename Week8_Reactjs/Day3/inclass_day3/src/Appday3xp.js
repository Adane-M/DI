import './App.css';
import React from 'react';
import ErrorBoundary from './components/ErrorBoundary'
import Color from './components/Color';

class BuggyCounter extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        }
    }

    handleClick = () => {
        const count = this.state.counter;
        this.setState({ counter: this.state.counter + 1 });
        console.log(count);
    }

    render() {
        const { counter } = this.state;
        // if (counter === 5) {
        //     throw new Error('you click 5 times, Icrashed!!');
        // };

        return (
            <>
                <h1>Hii there</h1>
                <h1>{counter} </h1><br></br>
                <button type="" onClick={this.handleClick}>Click</button>
            </>
        )
    }

}


class Appday3xp extends React.Component {


    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Color />
                    {/* <ErrorBoundary> */}
                        <BuggyCounter />
                    {/* </ErrorBoundary> */}
                </header>
            </div>   
        )
    }

}

export default Appday3xp;