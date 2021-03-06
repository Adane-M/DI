

export const requstRobots =() => (dispatch) =>{
    dispatch({type:'BEGIN_FETCHING_ROBOT'});
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => dispatch({type: 'FETCH_SUCCESS', payload: data}))
    .catch(err => dispatch({type:'FETCH_FAILURE' ,payload: err}))
}


export const displayRobots = (arr) => {
    return {
        type: 'DISPLAY_ROBOTS',
        payload:arr
    }
}

export const filterRobot = (text) => {

    return {
        type: 'FILTER_ROBOT',
        payload: text
    };
}




// export const incrementNum = () => {
//     return {
//         type: 'INCREMENTED',
//     }
// }
// export const decrementNum = () => {
//     return {
//         type: 'DECREMENTED',
//     }
// }


// export const onchange = (text, type) => {
//     return {
//         type: type,
//         payload: text
//     }
// }
// export const makeList = (obj) => {
//     return {
//         type: 'LIST',
//         payload: obj
//     }
// }
// export const handledelete = (i) => {
//     return {
//         type: 'DELETE',
//         payload: i
//     }
// }
// export const handleedit = (i) => {
//     return {
//         type: 'EDIT',
//         payload: i
//     }
// }
// export const slectedMovie =(movie)=>{
//     return{
//         type:'MOVIE_SELECTED',
//         payload:movie
//     }
// }

// export const moviesList =(movies)=>{
//     return{
//         type:'LIST_MOVIES',
//         payload:movies
//     }
// }


//  {slectedMovie, moviesList};

