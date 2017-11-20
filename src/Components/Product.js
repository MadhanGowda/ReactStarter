import React from 'react';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { addToCart } from '../Actions/cart.js'
import { removeFromCart } from '../Actions/cart.js'


class ProductDetails extends React.Component{
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
	    			<div className="quantity-ct">Quantity{'  '}
	    			<button className="btonp" onClick={() => {this.props.addToCart(product)}}> 
	    				<i className="fa fa-plus"></i>{'   '}
	    				</button>
	    				<button className="btonm">
	    				<i className="fa fa-minus" onClick={() => {this.props.removeFromCart(product)}}></i>
	    				</button>
	    			</div>
				</div>
			
			</li>
			);
	}
}
 const mapStateToProps = () =>({});

const mapDispatchToProps = (dispatch) =>({
	addToCart: (product) => dispatch(addToCart(product)),
	removeFromCart: (product) => dispatch(removeFromCart(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);