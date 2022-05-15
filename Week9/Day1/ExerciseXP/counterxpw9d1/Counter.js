import React from 'react';
import { connect } from 'react-redux';
import { decrementNum, incrementNum } from '../../Redux/action';

class Counter extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {


        return (
            <>
                <h4>REDUX WEEK 9 DAY 1</h4>

                <button onClick={this.props.myhandlechange1}>ADD</button>
                <p> {this.props.prop_store}</p>
                <button onClick={this.props.myhandlechange2}>Subtract</button>

            </>
        )
    }
}
const mapStatetoprop = (props) => {
    return {
        prop_store: props.value
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        myhandlechange1: () => dispatch(incrementNum()),
        myhandlechange2: () => dispatch(decrementNum())

    }
}

export default connect(mapStatetoprop, mapDispatchtoProps)(Counter);
