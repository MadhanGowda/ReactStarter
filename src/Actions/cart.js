import { ADD_TO_CART } from './actionTypes.js';


export function addToCart(product){
	return {type: ADD_TO_CART , data: product};
}