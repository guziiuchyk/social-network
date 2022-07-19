import {combineReducers, createStore} from "redux";
import profileReducer from "./reducers/profileReducer";
import dialogsReducer from "./reducers/dialogsReducer";

let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer
})


// noinspection JSDeprecatedSymbols
let store = createStore(reducers)

export default store;