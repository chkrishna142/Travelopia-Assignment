import { reducer as Insert } from "./reducer"

import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk"

const combined = combineReducers({
    Insert
})
const store = createStore(combined, applyMiddleware(thunk));

export { store }