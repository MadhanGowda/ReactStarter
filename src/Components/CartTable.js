import React from 'react';

import CartListGen from './CartListGen';

class CartTable extends React.Component{
	render(){
		// const Product_List = [];
		// this.props.items.forEach(function(product){
		// 	Product_List.push(<CartListGen produc={product} key={product.id}/>);
		// });
		const Product_List = this.props.items;
		return(
			<table>
					<thead>
					<tr>
						<th>Product</th>
						<th>Price</th>
						<th>Quantity</th>
						<th>Sub Total</th>
					</tr>
					</thead>
					<tbody>
						{Product_List}
						<td colSpan="2"></td>
						<td>Total</td>
						<td>{this.props.tot}</td>
					</tbody>
					</table>
			
			
			
			);
	}
}
export default CartTable;