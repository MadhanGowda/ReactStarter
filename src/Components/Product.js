import React from 'react';
import PropType from 'prop-types';

import { Link } from 'react-router-dom';

class Product extends React.Component{
	render(){
		const product = this.props.product;
		return(
            <Link to={`/details/${product.id}`}>
    			<li className="product">
        			<div className="title">{product.name}</div>
        			<img src={product.url}/>
                    <div>
            			<div className="price">Rs. {product.price}</div>
                        <div className="qty-container">
                			Quantity <i className="fa fa-plus" /> {'   '}
                			<i className="fa fa-minus" />
                        </div>
                    </div>
    			</li>
            </Link>
			);
	}
}

Product.propTypes = {
    product: PropType.object.isRequired,
};

export default Product;
