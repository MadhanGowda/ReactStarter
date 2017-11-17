import { ADD_TO_CART } from './actionTypes';


export function addToCart(product){
  return {
    type: ADD_TO_CART,
    data: product,
  };
}
