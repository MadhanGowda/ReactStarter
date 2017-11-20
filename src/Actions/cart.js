import { ADD_TO_CART } from './actionTypes.js';
import { REMOVE_FROM_CART } from './actionTypes.js';



export function addToCart(product){
	return {type: ADD_TO_CART , data: product};
}

export function removeFromCart(product){
	return {type: REMOVE_FROM_CART , data: product};
}