import React from 'react';
import ProductDetails from './Product';

class ProductListComponent extends React.Component {

	constructor(props) {
			super(props);
	}

	render() {

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

ProductListComponent.defaultProps = {
	products: [
		{
        id: 1,
        name: 'TV',
        url: 'https://images-na.ssl-images-amazon.com/images/I/81qex9rNZQL._SL1500_.jpg',
        price: 1000,
    },
    {
        id: 2,
        name: 'TV',
        url: 'https://images-na.ssl-images-amazon.com/images/I/81qex9rNZQL._SL1500_.jpg',
        price: 1000,
    },
		{
        id: 3,
        name: 'TV',
        url: 'https://images-na.ssl-images-amazon.com/images/I/81qex9rNZQL._SL1500_.jpg',
        price: 1000,
    },
    {
        id: 4,
        name: 'TV',
        url: 'https://images-na.ssl-images-amazon.com/images/I/81qex9rNZQL._SL1500_.jpg',
        price: 1000,
    },
    {
        id: 5,
        name: 'TV',
        url: 'https://images-na.ssl-images-amazon.com/images/I/81qex9rNZQL._SL1500_.jpg',
        price: 1000,
    },
    {
        id: 6,
        name: 'TV',
        url: 'https://images-na.ssl-images-amazon.com/images/I/81qex9rNZQL._SL1500_.jpg',
        price: 1000,
    }
	],
};

export default ProductListComponent;
