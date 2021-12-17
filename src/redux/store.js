import { combineReducers, createStore } from "redux";
import profileReducer from './ProfileReducer';
import messagesReducer from './MessagesReducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer
})

let store = createStore(reducers);

export default store;