import React from 'react';

class ProductDiscription extends React.Component{
	render(){
		return(
			<div>
        {this.props.product.name}
			</div>
			);
	}
}
export default ProductDiscription;
