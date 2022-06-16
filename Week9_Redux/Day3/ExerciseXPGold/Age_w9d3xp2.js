import React from 'react';
import { connect } from 'react-redux';
import { decrementNum, incrementNum } from '../../Redux/action';

class Age extends React.Component {

    render() {
        const { age, Subtract, ADD } = this.props;

        return (
            <>
                <h4>REDUX WEEK-9 DAY-3 XP2</h4>
                <button onClick={ADD}>age up</button>
                <p> {age}</p>
                <button onClick={Subtract}>age dwon</button>

            </>
        )
    }
}
const mapStatetoprop = (props) => {
    return {
        age: props.count
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        ADD: () => dispatch(incrementNum()),
        Subtract: () => dispatch(decrementNum()),


    }
}

export default connect(mapStatetoprop, mapDispatchtoProps)(Age);
