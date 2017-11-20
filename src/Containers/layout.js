import React from 'react';

import { ProductData } from '../stub';
import { connect } from 'react-redux';
import { poplateProducts } from '../Actions/productAction'


class Layout extends React.Component{
	componentWillMount(){
		this.props.poplateProducts(ProductData);
	}

	render(){
        return this.props.children;
	}
}

function mapDispatchToProps (dispatch){
	return{
		poplateProducts: function(ProductData){
			dispatch(poplateProducts(ProductData))
		}
	}
};

export default connect(null, mapDispatchToProps)(Layout);