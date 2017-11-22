import { POPULATE_PRODUCTS } from '../Actions/actionTypes';

function productReducer(state = [], action){
	//debugger;
	switch (action.type){
	case POPULATE_PRODUCTS:
		return [
		...state,
		...action.data,
		];
	default:
	return state
	}

}
export default productReducer;