import React from 'react';

import HeaderBar from '../Components/HeaderBar.js';
import CartListGen from '../Components/CartListGen.js';
import CartTable from '../Components/CartTable.js';

// import { ProductData } from '../stub';
import { connect } from 'react-redux';

class CartScreenContainer extends React.Component{
	render(){
		//debugger;
		const productlist = this.props.products;
		const cartitemlist = this.props.cartitems;
		const itemlist=[];
		var total=0;
		if(cartitemlist!=undefined)
		{					
			for(var i=0;i<cartitemlist.length;i++){
				const aa=parseInt(cartitemlist[i].productId);
				const item1 = _.find(productlist, { 'id': aa});
				if(item1){
					//debugger;
						itemlist.push(<CartListGen produc={item1} itemli={cartitemlist[i].quantity} key={cartitemlist[i].id}/>);
						total=total+((item1.price)*(cartitemlist[i].quantity));
					}
			}
		}

		return(
			<div>
				<HeaderBar />
				<CartTable items={itemlist} tot={total}/>
			</div>
			);
	}
}

function mapStateToProps(state){
    return {
    	cartitems: state.cart.items,
        products:state.prod,
    }
}
export default connect(mapStateToProps)(CartScreenContainer);