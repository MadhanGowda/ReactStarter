import React from 'react';

import HeaderBar from '../Components/HeaderBar.js';
import CartTable from '../Components/CartTable.js';

import { ProductData } from '../stub';

class CartScreenContainer extends React.Component{
	render(){
		const itemlist = ProductData;
		return(
			<div>
				<HeaderBar />
				<CartTable items={itemlist}/>
			</div>
			);
	}
}
export default CartScreenContainer;