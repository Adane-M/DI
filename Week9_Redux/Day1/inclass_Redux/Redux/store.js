import { createStore } from "redux";
import { reducer } from "../reducers";


// we invoke and import the function to create the store.
export const store = createStore(reducer);
