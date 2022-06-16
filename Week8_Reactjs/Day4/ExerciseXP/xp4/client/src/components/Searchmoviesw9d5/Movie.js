import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { requestMovieinfo } from '../../Redux/action';

class Movie extends React.Component {
    render() {
        const { moviesel } = this.props
        console.log(moviesel);
        return (
            <div key={moviesel.imdbID}>
                <p><strong>Title :</strong> {moviesel.Title}</p>
                <p><strong>Actors :</strong> {moviesel.Actors}</p>
                <blockqoutes><strong>Plot:</strong> {moviesel.Plot}</blockqoutes>
                <p><strong>Gener :</strong> {moviesel.Gener}</p>
                <p><strong>Director :</strong> {moviesel.Director}</p>
                <p><strong>IMDB rating :</strong> {moviesel.imdbRating}</p>
                <Link to="/"> Home </Link>
                <div>
                    <img src={moviesel.Poster} alt={moviesel.Title} />
                </div>
            </div>
        )
    }
}
const mapstatetoprops = (state) => {

    return {
        moviesel: state.movie

    }
}
const mapdispatchtoprops = (dispatch) => {
    return {
        movieInfo: (id) => dispatch(requestMovieinfo(id))

    }
}
export default connect(mapstatetoprops, mapdispatchtoprops)(Movie);