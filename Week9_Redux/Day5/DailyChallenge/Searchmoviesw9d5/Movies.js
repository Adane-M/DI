import React from "react";
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import Movie from "./Movie";
import Searchmovies from './Searchmovies';

const Movies = () => {
    return (
        <BrowserRouter>
            <div style={{textAlign:'center' , fontSize:'50px' , letterSpacing:'10px'}}>
                <Link to='/' style={{padding:'50px'}}>Home</Link>

                
                <Link to='/:movie' style={{padding:'50px'}}>Movie</Link>
            </div>
            <Routes>
                <Route exact path="/" element={<Searchmovies />}>display</Route>
                <Route path="/:movie" element={<Movie />}>movie</Route>
            </Routes>


        </BrowserRouter>
    )
}

export default Movies
