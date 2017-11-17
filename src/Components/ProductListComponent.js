import React from 'react';
import ProductDetails from './Product';

class ProductListComponent extends React.Component {

	constructor(props) {
			super(props);
	}

	render() {
		debugger;
		const productList = this.props.products.map(function(product){
			return (<ProductDetails
			        	product={product}
			        	key={product.id}/>);
		});

		return(
			<div>
				<ul>
					{productList}
				</ul>
			</div>
			);
	}
}

export default ProductListComponent;
