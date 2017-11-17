import React from 'react';
import { connect } from 'react-redux';

import ProductListComponent from '../Components/ProductListComponent.js';
import HeaderBar from '../Components/HeaderBar.js';

import { ProductData } from '../stub';

import { populateProducts } from '../actions/productActions';



class LandingScreen extends React.Component {

  componentWillMount() {
    this.props.populateProducts(ProductData);
  }

	render(){
		return(
			<div>
  			<HeaderBar />
  			<ProductListComponent products={this.props.products} />
			</div>
			);
	}
}

LandingScreen.defaultProps = {
  products: [],
};

const mapStateToProps = state => {
  return {
    products: state.Product,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    populateProducts: (data) => dispatch(populateProducts(data)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingScreen);
