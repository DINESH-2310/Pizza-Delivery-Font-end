import {combineReducers} from 'redux'
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {cartReducer} from './Reducer/Cardreducer'
import {composeWithDevTools} from'redux-devtools-extension'
import { getAllPizzasReducer } from './Reducer/Pizzareducer'

const finalReducer = combineReducers({
    getAllPizzasReducer:getAllPizzasReducer,
    cartReducer:cartReducer
})
const initialState={}
const composeEnhancers= composeWithDevTools({})
const store= createStore(finalReducer,initialState,composeEnhancers(applyMiddleware(thunk)))
export default store