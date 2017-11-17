import { POPULATE_PRODUCTS } from './actionTypes';


export function populateProducts(products){
  return {
    type: POPULATE_PRODUCTS,
    data: products,
  };
}
