import React from 'react';


class CartListGen extends React.Component{
	render(){
		const prddeta= this.props.produc;
		return(
			<tr>
				<td><img src={prddeta.url}/>{prddeta.name}</td>
				<td>Rs/- {prddeta.price}</td>
				<td>{0}</td>
				<td>{0}</td>
			</tr>			
		);
	}
}
export default CartListGen;