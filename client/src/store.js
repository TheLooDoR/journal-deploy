import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const inititalState = {};

let store
process.env.NODE_ENV === 'development' ?
 store = createStore(
    rootReducer,
    inititalState,
    compose(applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()))
    :
    store = createStore(
    rootReducer,
    inititalState,
    compose(applyMiddleware(thunk)));

// const store = createStore(
//     rootReducer,
//     inititalState,
//     compose(applyMiddleware(thunk)));

export default store;