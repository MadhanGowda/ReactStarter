import React from 'react';

class ProductDetails extends React.Component{
	render(){
		const product = this.props.produc;
		return(
			<li className="product">
				<div className='box'>			
	    			<div className="title">{product.name}</div>
	    			<img src={product.url}/>
	    			<div className="price">Rs/- {product.price}</div>
	    			<div className="quantity-ct">Quantity{'  '}
	    			<button className="btonp"> 
	    				<i className="fa fa-plus"></i>{'   '}
	    				</button>
	    				<button className="btonm">
	    				<i className="fa fa-minus"></i>
	    				</button>
	    			</div>
				</div>
			
			</li>
			);
	}
}
export default ProductDetails;