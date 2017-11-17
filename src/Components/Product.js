import React from 'react';

class Product extends React.Component{
	render(){
		const product = this.props.product;
		return(
			<div className="product">
    			<div className="title">{product.name}</div>
    			<img src={product.url}/>
                <div>
        			<div className="price">Rs. {product.price}</div>
                    <div className="qty-container">
            			Quantity <i className="fa fa-plus" /> {'   '}
            			<i className="fa fa-minus" />
                    </div>
                </div>
			</div>
			);
	}
}

Product.defaultProps = {
    product: {
        name: 'TV',
        url: 'https://images-na.ssl-images-amazon.com/images/I/81qex9rNZQL._SL1500_.jpg',
        price: 1000,
    },
};

export default Product;
