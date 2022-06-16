import React from "react";
import './Searchmovies.css';
import { connect } from "react-redux";
import { requestMoviesImdb, requestMovieinfo } from "../../Redux/action";
import { Link } from "react-router-dom";

class Searchmovies extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    componentDidMount() {
        const { getmovies} = this.props;
        getmovies('s=movie');

        // console.log(movieInfo('i=tt0462538')); 
        // fetch(`${ImdbLink}i=tt0462538`)
        //     .then(res => {
        //         return res.json();
        //     })
        //     .then(data => {
        //         console.log(data);
        //         // console.log(movieslist);

        //         // movieslist = data.Search;
        //         // console.log(movieslist);
        //         // requestMoviesImdb(data.Search);
        //     })
        //     .catch(err => console.log('ERROR', err))

    }

    handlechange = (e) => {
       const {getmovies} = this.props
        let search = `s=`;
        if (e.keyCode === 13) {
            search += e.target.value
            getmovies(search)
        }

    }
    getInfo =(id)=>{
        const {movieInfo, moviesel}= this.props; 
        let text = 'i='+id;
        movieInfo(text);
        console.log(moviesel);
    }

    render() {
        const { movieslist, movieInfo } = this.props
        return (
            <>
                <nav>
                    <input type='text' onKeyUp={(e) => this.handlechange(e)}  placeholder='type for a movie'/>
                </nav>
                <div className="frame">
                {
                    movieslist.map(item => {
                        return (
                            <div className="image" key={item.imdbID} onClick={() => this.getInfo(item.imdbID)}>
                               <Link to={'/'+ item.imdbID}> <h1>{item.Title} ({item.Year})</h1>
                                <img src={item.Poster} alt={item.Title} />
                                </Link>
                            </div>
                        )
                    })
                }
                </div>
            </>
        )
    }
}

const mapstatetoprops = (state) => {
    return {
        movieslist: state.movies,
        moviesel: state.movie
    }
};
const mapDispatchToprops = (dispatch) => {
    return {
        getmovies: (text) => dispatch(requestMoviesImdb(text)),
        movieInfo: (id) => dispatch(requestMovieinfo(id))
    }
};
export default connect(mapstatetoprops, mapDispatchToprops)(Searchmovies);