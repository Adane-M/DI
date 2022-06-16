import { createStore, applyMiddleware } from "redux";
import { reducer } from "./reducer";
import thunkMiddleware from 'redux-thunk';

const LogAction = (store) => {
    return next => action => {
        // console.log('will dispatch', action)
        const returnValue = next(action)
        // console.log('caught in the middleware', JSON.stringify(store.getState()))
        return returnValue
    }
}


// we invoke and import the function to create the store.
export const store = createStore(reducer, applyMiddleware(thunkMiddleware,LogAction));
