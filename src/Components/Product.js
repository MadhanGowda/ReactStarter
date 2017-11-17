import React from 'react';
import PropType from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { addToCart } from '../actions/cartActions';

class Product extends React.Component{


    addToCart = () => {
        this.props.addToCart(this.props.product);
    }


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
                			Quantity <i
                                        className="fa fa-plus"
                                        onClick={this.addToCart}
                                        /> {'   '}
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


// const mapStateToProps = state => {
//   return {
//     products: state.Product,
//   };
// };

const mapDispatchToProps = dispatch => {
  return {
    addToCart: (product) => dispatch(addToCart(product)),
  }
};

export default connect(null, mapDispatchToProps)(Product);
