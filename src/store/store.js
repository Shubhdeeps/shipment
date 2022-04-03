import { createStore, applyMiddleware, compose } from "redux";
import reducer from './reducers'
import thunk from "redux-thunk";

//https://github.com/zalmoxisus/redux-devtools-extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk))
)

export default store