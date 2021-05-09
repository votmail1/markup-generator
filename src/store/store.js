import { createStore, combineReducers} from "redux";
import {flexGenReducers} from './reducers/flexGenReducers'
import {gridGenReducers} from "./reducers/gridGenReducers";

const reducers = combineReducers({
    flexGen: flexGenReducers,
    gridGen: gridGenReducers,
})

const store = createStore(reducers,{})

export default store
