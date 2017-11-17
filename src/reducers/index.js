import { combineReducers } from 'redux'

import Product from './productReducer';
import Cart from './cartReducer';


const ProductApp = combineReducers({
  Product,
  Cart,
})

export default ProductApp;
