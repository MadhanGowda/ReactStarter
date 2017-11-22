import { POPULATE_PRODUCTS } from './actionTypes';

export function poplateProducts(products){
	
	return{
		type: POPULATE_PRODUCTS,
		data: products,
	};
}
