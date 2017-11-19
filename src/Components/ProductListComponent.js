import React from 'react';

import ProductDetails from '../Components/Product';


class ProductListComponent extends React.Component{
	constructor(props){
			super(props);
		}
	render(){
		const a=this.props.prod;
		if(a.length==0){
			return(
				<div className="nrpf">
					No Related products Found....
				</div>
				);
		}
		else
		{
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
}

export default ProductListComponent;