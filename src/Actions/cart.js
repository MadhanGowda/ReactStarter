import { ADD_TO_CART } from './actionTypes.js';
import { REMOVE_FROM_CART } from './actionTypes.js';
import axios from 'axios';



export function addToCart(product){
	axios.post('http://127.0.0.1:8000/count/', {
	    id: product.id,
	    count: 1,
	  })
	  .then(function (response) {
	    console.log(response);
	  })
	  .catch(function (error) {
	    console.log(error);
	  });
	  //debugger;
	return {type: ADD_TO_CART , data: product};
}

export function removeFromCart(product){
	return {type: REMOVE_FROM_CART , data: product};
}


// function addCartRequest(product)