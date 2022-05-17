import React from 'react';
import User from './User';
import { filterRobot, displayRobots } from '../../Redux/action';
import { connect } from 'react-redux';

class Robots extends React.Component {

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                this.props.getRobots(data);
            })
            .catch(err => console.log(err))
    }

    render() {
        const { searchRobot, search, robotsarr } = this.props;

        const filterUsers = robotsarr.filter(item => {
            return item.name.toLowerCase().includes(search.toLowerCase())
        })

        if (!filterUsers) {
            return (
                <div style={{ backgroundColor: 'lightcoral' }}>
                    <h1>ROBOTS</h1>
                    <h3>loading </h3>
                </div>
            )
        } else {
            return (
                <div style={{ backgroundColor: 'lightgrey' }}>
                    <h1> ROBOTS</h1>
                    find robo frind: <input type='text' onChange={searchRobot}></input>
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
        robotsarr: state.robots
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        searchRobot: (e) => dispatch(filterRobot(e.target.value)),
        getRobots: (arr) => dispatch(displayRobots(arr))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Robots);