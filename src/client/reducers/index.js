import { combineReducers } from "redux";

import XeroReducer from './reducer_xero'

const rootReducer = combineReducers({
    xero: XeroReducer,
})

export default rootReducer