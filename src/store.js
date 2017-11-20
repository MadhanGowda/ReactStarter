import { createStore, combineReducers } from 'redux';

import cart from './reducers/cartReducer.js';
import prod from './reducers/productReducer.js';



const store = createStore(combineReducers({cart, prod}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;