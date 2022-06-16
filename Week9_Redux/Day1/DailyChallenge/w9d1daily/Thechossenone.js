import { connect } from "react-redux";

const Thechossenone = (props) => {

    if (props.movie) {
        return (
            <>
                <p>{props.movie.title}aaaa</p>
                <p>{props.movie.rating}</p>
                <p>{props.movie.releaseDate}</p>
            </>
        )
    } else {
        return (
            <>
<p>we didnt find any </p>
                {/* <p>{props.movie.title} AAAA</p>
                <p>{props.movie.rating}</p>
                <p>{props.movie.releaseDate}</p> */}
            </>
        )
    }


}

const mapStatetoprop = (state) => {
    return {
        movie: state.movie
    }
}

//
export default connect(mapStatetoprop)(Thechossenone);


