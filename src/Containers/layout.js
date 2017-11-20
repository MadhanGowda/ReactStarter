import React from 'react';

import { ProductData } from '../stub';
import { connect } from 'react-redux';
import { poplateProducts, getProductList } from '../Actions/productAction'

class Layout extends React.Component{
	componentWillMount(){
		// this.props.poplateProducts(ProductData);
    this.props.getProductList();
	}

	render(){
        return this.props.children;
	}
}

function mapDispatchToProps (dispatch){
	return {
		poplateProducts: function(ProductData){
			dispatch(poplateProducts(ProductData))
		},
    getProductList: () => getProductList(dispatch),
	}
};

export default connect(null, mapDispatchToProps)(Layout);
