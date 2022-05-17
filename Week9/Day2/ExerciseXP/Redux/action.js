
export const onchange = (text, type) => {
    return {
        type: type,
        payload: text
    }
}
export const makeList = (obj) => {
    return {
        type: 'LIST',
        payload: obj
    }
}
export const handledelete = (i) => {
    return {
        type: 'DELETE',
        payload: i
    }
}
export const handleedit = (i) => {
    return {
        type: 'EDIT',
        payload: i
    }
}
// export const slectedMovie =(movie)=>{
//     return{
//         type:'MOVIE_SELECTED',
//         payload:movie
//     }
// }

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