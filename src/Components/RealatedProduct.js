import React from 'react';

import { Link } from 'react-router-dom';

import Quantitybar from './quantitybar';


class RelatedProduct extends React.Component{
	render(){
		const product = this.props.produc;
		return(
					
			<li className="product">
				<div className='box'>
				<Link to ={`/details/${product.id}`}>			
	    			<div className="title">{product.name}</div>
	    			<img src={product.url}/>
	    			</Link>
	    			<div className="price">Rs/- {product.price}</div>
	    			<Quantitybar produc="product"/>
				</div>
			
			</li>
			
			);
	}
}

export default RelatedProduct;