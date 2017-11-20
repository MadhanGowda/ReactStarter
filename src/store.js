import { createStore, combineReducers } from 'redux';

import cart from './reducers/cartReducer.js';



const store = createStore(combineReducers({cart}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;