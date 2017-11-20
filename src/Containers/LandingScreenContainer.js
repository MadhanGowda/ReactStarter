import React from 'react';

import ProductListComponent from '../Components/ProductListComponent.js';
import HeaderBar from '../Components/HeaderBar.js';
// import { ProductData } from '../stub';
import { connect } from 'react-redux';
// import { poplateProducts } from '../Actions/productAction'


class LandingScreen extends React.Component{
	componentWillMount(){
		// this.props.poplateProducts(ProductData);
	}
	render(){
        const item=this.props.products;
		return(
			<div>
			<HeaderBar />
			<ProductListComponent prod = {item} />
			</div>
			);
	}
}
function mapStateToProps(state){
	return {
		products:state.prod,
	}
}

function mapDispatchToProps (dispatch){
	return{
		// poplateProducts: function(ProductData){
		// 	dispatch(poplateProducts(ProductData))
		// }
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingScreen);