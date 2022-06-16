import React from "react";
import { connect } from "react-redux";
import { slectedMovie } from "../../Redux/action";
// import { initialState} from "../../Redux/reducer";
import Thechossenone from './Thechossenone'


class Movies extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <>
                {
                    this.props.movies.map((movie, i) => {
                        return (
                            <>
                                <p key={i}>movie :{movie.title}
                                <button onClick={() => this.props.myhandlechange(movie)}> details</button>
                                </p>
                            </>
                        )

                    })
                }
            </>
        )
    }



}
const mapStatetoprop = (state) => {
    return {
        movies:state.movies
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        myhandlechange: (movie) => dispatch(slectedMovie(movie)),
    }
}


export default connect(mapStatetoprop, mapDispatchtoProps)(Movies);