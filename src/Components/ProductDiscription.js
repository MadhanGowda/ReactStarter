import React from 'react';

import Quantitybar from './quantitybar';

class ProductDiscription extends React.Component{
	render(){
		const product = this.props.produc;
		return(
			
			<div className='productdetail'>
			<img src={product.url}/>
					<div className='delatilbox'>	
	    			<div className="title">{product.name}</div>
	    				    			<div className="price">Description</div>
	    			<div className="discription">{product.description}</div>

	    			<div className="price">Rs/- {product.price}</div>
	    			<Quantitybar produc={product}/>
				</div>
			</div>
			
			);
	}
}
export default ProductDiscription;