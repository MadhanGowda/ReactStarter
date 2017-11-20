import React from 'react';

import ProductDetails from '../Components/Product';
import { find } from 'lodash'


class ProductListComponent extends React.Component{
	constructor(props){
			super(props);
		}
	render(){
		//debugger;
		const Product_List = [];
		this.props.prod.forEach(function(product){
			Product_List.push(<ProductDetails produc={product} key={product.id}/>);
		});
		return(
			<div>
			<ul className="ullist">
					{Product_List}
					</ul>
				</div>
			);
		
	}
}

export default ProductListComponent;