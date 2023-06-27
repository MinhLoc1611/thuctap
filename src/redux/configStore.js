import {applyMiddleware, combineReducers, legacy_createStore} from 'redux'
import thunk from 'redux-thunk'
import { userReducer } from './reducers/userReducer'
import { daoTrangReducer } from './reducers/daoTrangReducer'

const rootReducer = combineReducers({
    userReducer,
    daoTrangReducer
})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))