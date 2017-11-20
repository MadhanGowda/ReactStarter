import { ADD_TO_CART } from './../Actions/actionTypes.js'
import { REMOVE_FROM_CART } from './../Actions/actionTypes.js'

function cartReducer(state = {}, action) {
  switch (action.type) {
  case ADD_TO_CART:
  	
  	var newobj;

  	if(state.items!=undefined && state.items.length!=0)
  	{
  		//debugger;
  		for(var i=0;i<state.items.length;i++)
  		{
  			if(state.items[i].productId==action.data.id)
  			{
  				state.items[i] = {productId:action.data.id ,
          quantity: 1+state.items[i].quantity};
          		
          		return {
			      ...state,
			      items: [
			        ...state.items
			      ]
			    } 

  			}  			
  		}
  	}
	else
		{
			newobj={productId:action.data.id ,
 				quantity: 1};

 				return {
			      ...state,
			      items: [
			        ...(state.items || []),
			        newobj,
			      ]
			    } 

		}

		if (newobj === undefined) {
			newobj={productId:action.data.id ,
 				quantity: 1};
 				return {
			      ...state,
			      items: [
			        ...(state.items || []),
			        newobj,
			      ]
			    } 
		}

  case REMOVE_FROM_CART:
  if(state.items==undefined)
  {
  	//no product inside no operation shold be performed
  }
  if(state.items!=undefined && state.items.length!=0)
  	{
  		for(var i=0;i<state.items.length;i++)
  		{
  			if(state.items[i].productId==action.data.id)
  				if(state.items[i].quantity>1)
  				{
	  				state.items[i] = {productId:action.data.id ,
	          						  quantity: state.items[i].quantity-1};
	          		
	          		return {
				      ...state,
				      items: [
				        ...state.items
				      ]
				    } 
				}
				else
				{
					//debugger;
					state.items.splice(i,1);
					return {
				      ...state,
				      items: [
				        ...state.items
				      ]
				    }
				}
  		}
   	}

  default:
    return state
  }
}


export default cartReducer;