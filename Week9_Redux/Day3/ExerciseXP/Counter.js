import React from 'react';
import { connect } from 'react-redux';
import { decrementNum, incrementNum } from '../../Redux/action';

class Counter extends React.Component {

    render() {
        const { counter, Subtract, ADD } = this.props;
        this.addIfOdd = () => {
            if (counter % 2 !== 0) {
                ADD();
            }
        }
        this.AsyncAdd=()=>{
            setTimeout(ADD,1000)
        }

        return (
            <>
                <h4>REDUX WEEK-9 DAY-3 XP</h4>
                <button onClick={ADD}>ADD</button>
                <p> {counter}</p>
                <button onClick={Subtract}>Subtract</button>
                <button onClick={this.addIfOdd}>ADD if Odd</button>
                <button onClick={this.AsyncAdd}>ASYNC-ADD</button>

            </>
        )
    }
}
const mapStatetoprop = (props) => {
    return {
        counter: props.count
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        ADD: () => dispatch(incrementNum()),
        Subtract: () => dispatch(decrementNum()),


    }
}

export default connect(mapStatetoprop, mapDispatchtoProps)(Counter);
