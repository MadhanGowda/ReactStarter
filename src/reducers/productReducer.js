import { POPULATE_PRODUCTS } from '../actions/actionTypes';


function productReducer(state = [], action) {
  switch (action.type) {
  case POPULATE_PRODUCTS:
    return [
      ...action.data,
    ];
  default:
    return state
  }
}


export default productReducer;
