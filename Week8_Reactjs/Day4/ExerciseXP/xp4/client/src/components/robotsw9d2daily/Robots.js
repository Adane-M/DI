import React from 'react';
import User from './User';
import { filterRobot ,requstRobots} from '../../Redux/action';
import { connect } from 'react-redux';

class Robots extends React.Component {

    componentDidMount() {
        this.props.fetchRobots();
    }

    render() {
        const { searchRobot, search, robotsarr,isFetching} = this.props;

        const filterUsers = robotsarr.filter(item => {
            return item.name.toLowerCase().includes(search.toLowerCase())
        })

        if (isFetching) {
            return (
                <div style={{ backgroundColor: 'black' }}>
                    <h1>ROBOTS</h1>
                    <h3 style={{color:'red'}}>loading </h3>
                </div>
            )
        } else {
            return (
                <div style={{ backgroundColor: 'lightgrey' }}>
                    <h1> ROBOTS</h1>
                    find robo frinde: <input type='text' onChange={searchRobot}></input>
                    {
                        filterUsers.map(item => {
                            return (
                                <User key={item.id} user={item} />

                            )
                        })
                    }
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        search: state.searchRobot,
        robotsarr: state.robots,
        error:state.err,
        isFetching: state.isFetching
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        searchRobot: (e) => dispatch(filterRobot(e.target.value)),
        // getRobots: (arr) => dispatch(displayRobots(arr)),
        fetchRobots:()=> dispatch(requstRobots())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Robots);