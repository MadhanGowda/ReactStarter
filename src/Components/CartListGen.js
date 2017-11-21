import React from 'react';

class CartListGen extends React.Component{
	render(){
		const prddeta= this.props.produc;
		return(
			<tr>
				<td><img src={prddeta.url}/>{prddeta.name}</td>
				<td>Rs/- {prddeta.price}</td>
				<td>{this.props.itemli}</td>
				<td>{(prddeta.price)*(this.props.itemli)}</td>
			</tr>			
		);
	}
}
export default CartListGen;