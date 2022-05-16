export const slectedMovie =(movie)=>{
    return{
        type:'MOVIE_SELECTED',
        payload:movie 
    }
}

// const moviesList =(movies)=>{
//     return{
//         type:'LIST_MOVIES',
//         payload:movies
//     }
// }


//  {slectedMovie, moviesList};




//  const incrementNum = () => {
//     return {
//         type: 'INCREMENTED',
//     }
// }
//  const decrementNum = () => {
//     return {
//         type: 'DECREMENTED',
//     }
// }

// export {incrementNum, decrementNum};