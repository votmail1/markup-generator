import { createStore, combineReducers} from "redux";
import {flexGenReducers} from './reducers/flexGenReducers'

const reducers = combineReducers({
    flexGen: flexGenReducers,
})

const store = createStore(reducers,{})

export default store