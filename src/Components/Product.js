import React from 'react';

class ProductDetails extends React.Component{
	render(){
		const product = this.props.produc;
		return(
			<div >			
    			<h4>{product.name}</h4>
    			<br />
    			<img src={product.url} height="30" width="20"/>
    			<br />
    			<h4>{product.price}</h4>
    			<br />
    			<h4>Quantity</h4>
    			<i className="fa fa-plus"></i>{'   '}
    			<i className="fa fa-minus"></i>
			</div>
			);
	}
}
export default ProductDetails;