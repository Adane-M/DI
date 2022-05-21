import Apikey from '../components/SNAPSHOTW9D4/Apikey';

export const searchPhoto =(text)=>{
    return{
        type:'SEARCH_PHOTO',
        payload:text
    }
}

export const requestPhotos = (text , num = 10) => (dispatch) =>{
    dispatch({type:'FETCH_PHOTOS_START'});
    fetch(`https://api.pexels.com/v1/search?query=${text}&per_page=${num}`,{
        method: 'GET',
        headers:{
          Accept: 'application/json',
          Authorization: Apikey
        }
      })
      .then(res => {
           return res.json();
      })
      .then(data => {
        dispatch({type:'FETCH_PHOTOS_SUCCESS' , payload:data['photos']})
      })
      .catch(err => dispatch({type:'FETCH_PHOTOS_FAILURE', payload: err}))

}





















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

