import React from 'react';

import ProductDetails from '../Components/Product';


class ProductDetailsContiner extends React.Component{
	constructor(props){
			super(props);
		}
	render(){

		const Product_List = [];
		this.props.prod.forEach(function(product){
			Product_List.push(<ProductDetails produc={product} key={product.id}/>);
		});
		return(
			<table>
			<thead>
			</thead>
				<tbody>
					{Product_List}
				</tbody>
			</table>
			);
	}
}
export default ProductDetailsContiner;