import { createStore } from "redux";
import { combineReducers } from "redux";
import counter from "../modules/counter";
import { configureStore } from "@reduxjs/toolkit";

// ASIS : 일반 리듀서
// const rootReducer = combineReducers({
//     counter: counter
// });

// const store = createStore(rootReducer);

// TODO : redux Toolkit
const store = configureStore({
    reducer: {
        counter: counter
    }
});
export default store;