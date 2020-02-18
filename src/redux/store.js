import {createStore, combineReducers} from 'redux';
import userReducer from './userReducer';
import reducer from './reducer';

let rootReducer = combineReducers({
    userReducer,
    reducer
})

export default createStore(rootReducer);