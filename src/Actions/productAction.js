import { POPULATE_PRODUCTS } from './actionTypes';
import axios from 'axios';
import { PRODUCT_LIST_URL, ADD_PRODUCT_URL } from '../urls';

export function poplateProducts(products){
	return{
		type: POPULATE_PRODUCTS,
		data: products,
	};
}

export function getProductList(dispatch) {
    // Make a request for a user with a given ID
    axios.get(PRODUCT_LIST_URL).then((response) => {
      console.log(response.data);
      dispatch(poplateProducts(response.data));
    })
    .catch((error) => {
      // debugger;
      console.log(error);
    });
}


export function addProduct(dispatch, product) {
  debugger;
    axios({
      method: 'post',
      url: ADD_PRODUCT_URL,
      headers: {'TOKEN': 'asdfdsfdsafdsfs' },
      data: product,
    }).then((response) => {



      // console.log(response.data);
      // dispatch(poplateProducts(response.data));
    })
    .catch((error) => {
      // debugger;
      console.log(error);
    });

}
